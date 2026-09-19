"use client";

/**
 * The Sleyp session: the built-in sound engine.
 * All sound is generated live in the browser with the Web Audio API,
 * no streams, no downloads, works offline once the page is loaded.
 *
 * Free: White, Pink and Brown noise + basic sleep timer (30/60/90 min).
 * Premium: 10 extra layers (rain, storm, waves, forest, stream, wind,
 * campfire, crickets, cabin hum, fan), the personalised blend
 * questionnaire, saved custom mixes, custom timer lengths and the
 * gentle wake-up fade-in alarm.
 */

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  AudioLines,
  BellRing,
  Bug,
  CloudLightning,
  CloudRain,
  Droplets,
  Fan,
  Flame,
  Lock,
  Mountain,
  Pause,
  Plane,
  Play,
  Radio,
  Save,
  Sparkles,
  Timer,
  Trash2,
  TreePine,
  Waves,
  Wind,
} from "lucide-react";
import { useAuth } from "@/components/AuthProvider";

type SoundId =
  | "white"
  | "pink"
  | "brown"
  | "rain"
  | "storm"
  | "waves"
  | "forest"
  | "stream"
  | "wind"
  | "fire"
  | "crickets"
  | "cabin"
  | "fan";
type Levels = Record<SoundId, number>;

const SOUNDS: {
  id: SoundId;
  name: string;
  premium: boolean;
  icon: typeof Waves;
  masks: string;
}[] = [
  { id: "brown", name: "Brown noise", premium: false, icon: Mountain, masks: "Traffic rumble, engines, low bass" },
  { id: "pink", name: "Pink noise", premium: false, icon: AudioLines, masks: "Voices, TVs, household sounds" },
  { id: "white", name: "White noise", premium: false, icon: Radio, masks: "High-pitched spikes, hiss, alarms" },
  { id: "rain", name: "Heavy rain", premium: true, icon: CloudRain, masks: "Unpredictable bangs and door slams" },
  { id: "storm", name: "Thunderstorm", premium: true, icon: CloudLightning, masks: "Rain bed with rolling distant thunder" },
  { id: "waves", name: "Ocean waves", premium: true, icon: Waves, masks: "Slow breathing surf, deeply calming" },
  { id: "forest", name: "Forest canopy", premium: true, icon: TreePine, masks: "Gusty leaves over outdoor voices" },
  { id: "stream", name: "Babbling stream", premium: true, icon: Droplets, masks: "Watery flutter over speech and chatter" },
  { id: "wind", name: "Night wind", premium: true, icon: Wind, masks: "Low moaning gusts over droning noise" },
  { id: "fire", name: "Campfire", premium: true, icon: Flame, masks: "Warm crackle, cosy indoor texture" },
  { id: "crickets", name: "Crickets", premium: true, icon: Bug, masks: "Gentle night-garden chirps" },
  { id: "cabin", name: "Cabin hum", premium: true, icon: Plane, masks: "Aircraft drone, steady and enveloping" },
  { id: "fan", name: "Fan hum", premium: true, icon: Fan, masks: "Familiar, steady sleep texture" },
];

const SILENT: Levels = {
  white: 0, pink: 0, brown: 0, rain: 0, storm: 0, waves: 0, forest: 0,
  stream: 0, wind: 0, fire: 0, crickets: 0, cabin: 0, fan: 0,
};
const DEFAULT_LEVELS: Levels = { ...SILENT, brown: 0.7 };

const FREE_TIMERS = [30, 60, 90];

/* ---------------- Web Audio engine ---------------- */

function makeNoiseBuffer(ctx: AudioContext, type: "white" | "pink" | "brown") {
  const length = ctx.sampleRate * 4;
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);

  if (type === "white") {
    for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
  } else if (type === "pink") {
    // Paul Kellet's pink noise filter
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < length; i++) {
      const w = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + w * 0.0555179;
      b1 = 0.99332 * b1 + w * 0.0750759;
      b2 = 0.969 * b2 + w * 0.153852;
      b3 = 0.8665 * b3 + w * 0.3104856;
      b4 = 0.55 * b4 + w * 0.5329522;
      b5 = -0.7616 * b5 - w * 0.016898;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362) * 0.11;
      b6 = w * 0.115926;
    }
  } else {
    let last = 0;
    for (let i = 0; i < length; i++) {
      const w = Math.random() * 2 - 1;
      last = (last + 0.02 * w) / 1.02;
      data[i] = last * 3.5;
    }
  }
  return buffer;
}

/** Sparse random crackles for the campfire (8s loop). */
function makeCrackleBuffer(ctx: AudioContext) {
  const sr = ctx.sampleRate;
  const length = sr * 8;
  const buffer = ctx.createBuffer(1, length, sr);
  const data = buffer.getChannelData(0);
  let i = sr * 0.1;
  while (i < length) {
    i += Math.floor(sr * (0.04 + Math.random() * 0.3));
    const len = Math.floor(sr * (0.004 + Math.random() * 0.02));
    const amp = 0.25 + Math.random() * 0.6;
    for (let j = 0; j < len && i + j < length; j++) {
      data[Math.floor(i) + j] +=
        (Math.random() * 2 - 1) * amp * Math.exp(-j / (len * 0.4));
    }
    i += len;
  }
  return buffer;
}

/** Chirp trains for crickets (8s loop): 4.3kHz carrier pulsed at ~21Hz. */
function makeCricketBuffer(ctx: AudioContext) {
  const sr = ctx.sampleRate;
  const length = sr * 8;
  const buffer = ctx.createBuffer(1, length, sr);
  const data = buffer.getChannelData(0);
  let t = sr * 0.3;
  while (t < length) {
    const chirpLen = sr * (0.3 + Math.random() * 0.25);
    for (let j = 0; j < chirpLen && t + j < length; j++) {
      const time = j / sr;
      const trill = Math.max(0, Math.sin(2 * Math.PI * 21 * time));
      const env = Math.sin((Math.PI * j) / chirpLen);
      data[Math.floor(t) + j] =
        Math.sin(2 * Math.PI * 4300 * time) * trill * env * 0.22;
    }
    t += chirpLen + sr * (0.5 + Math.random() * 0.9);
  }
  return buffer;
}

/** Two rolling thunder swells in a 14s loop. */
function makeThunderBuffer(ctx: AudioContext) {
  const sr = ctx.sampleRate;
  const length = sr * 14;
  const buffer = ctx.createBuffer(1, length, sr);
  const data = buffer.getChannelData(0);
  let last = 0;
  for (const start of [sr * 1.5, sr * 8.2]) {
    const dur = sr * (3 + Math.random() * 2);
    for (let j = 0; j < dur && start + j < length; j++) {
      const w = Math.random() * 2 - 1;
      last = (last + 0.015 * w) / 1.015;
      const p = j / dur;
      const env =
        Math.pow(Math.sin(Math.PI * Math.min(p * 1.4, 1)), 2) *
        Math.exp(-2.2 * p);
      data[Math.floor(start) + j] += last * 4 * env;
    }
  }
  return buffer;
}

interface Channel {
  gain: GainNode;
  stop: () => void;
}

function buildChannel(ctx: AudioContext, id: SoundId, master: GainNode): Channel {
  const gain = ctx.createGain();
  gain.gain.value = 0;
  gain.connect(master);
  const stops: (() => void)[] = [];

  const loopBuf = (buffer: AudioBuffer) => {
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.loop = true;
    src.start();
    stops.push(() => src.stop());
    return src;
  };
  const loop = (type: "white" | "pink" | "brown") =>
    loopBuf(makeNoiseBuffer(ctx, type));
  const lfo = (frequency: number, depth: number, target: AudioParam) => {
    const osc = ctx.createOscillator();
    osc.frequency.value = frequency;
    const g = ctx.createGain();
    g.gain.value = depth;
    osc.connect(g);
    g.connect(target);
    osc.start();
    stops.push(() => osc.stop());
  };
  const filter = (
    type: BiquadFilterType,
    frequency: number,
    q = 1
  ): BiquadFilterNode => {
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.value = frequency;
    f.Q.value = q;
    return f;
  };
  const sub = (value: number) => {
    const g = ctx.createGain();
    g.gain.value = value;
    return g;
  };

  switch (id) {
    case "white":
    case "pink":
    case "brown":
      loop(id).connect(gain);
      break;

    case "rain": {
      // Pink noise through a lowpass, with a slow swell so it breathes like real rain
      const lp = filter("lowpass", 4200);
      loop("pink").connect(lp);
      const swell = sub(0.85);
      lp.connect(swell);
      swell.connect(gain);
      lfo(0.13, 0.12, swell.gain);
      break;
    }

    case "storm": {
      // Rain bed + looped rolling thunder pushed through a deep lowpass
      const lp = filter("lowpass", 3400);
      loop("pink").connect(lp);
      const bed = sub(0.65);
      lp.connect(bed);
      bed.connect(gain);
      lfo(0.11, 0.1, bed.gain);
      const rumbleLp = filter("lowpass", 150);
      loopBuf(makeThunderBuffer(ctx)).connect(rumbleLp);
      const rumble = sub(0.9);
      rumbleLp.connect(rumble);
      rumble.connect(gain);
      break;
    }

    case "waves": {
      // Deep brown noise breathing at surf pace
      const lp = filter("lowpass", 700);
      loop("brown").connect(lp);
      const swell = sub(0.55);
      lp.connect(swell);
      swell.connect(gain);
      lfo(0.08, 0.4, swell.gain); // slow surf swell
      lfo(0.05, 180, lp.frequency); // tide-like tonal drift
      break;
    }

    case "forest": {
      // Gusty leaf rustle over a distant wind bed
      const hp = filter("highpass", 900);
      const lp = filter("lowpass", 5200);
      loop("white").connect(hp);
      hp.connect(lp);
      const rustle = sub(0.35);
      lp.connect(rustle);
      rustle.connect(gain);
      lfo(0.4, 0.15, rustle.gain);
      lfo(0.07, 0.18, rustle.gain);
      const bedLp = filter("lowpass", 500);
      loop("pink").connect(bedLp);
      const bed = sub(0.3);
      bedLp.connect(bed);
      bed.connect(gain);
      break;
    }

    case "stream": {
      // Fast watery flutter on a bandpass + soft low bed
      const bp = filter("bandpass", 1400, 1);
      loop("white").connect(bp);
      const flutter = sub(0.5);
      bp.connect(flutter);
      flutter.connect(gain);
      lfo(6, 320, bp.frequency);
      lfo(0.5, 420, bp.frequency);
      const bedLp = filter("lowpass", 900);
      loop("pink").connect(bedLp);
      const bed = sub(0.3);
      bedLp.connect(bed);
      bed.connect(gain);
      break;
    }

    case "wind": {
      // Low moaning gusts: resonant bandpass slowly swept
      const bp = filter("bandpass", 350, 1.5);
      loop("pink").connect(bp);
      const swell = sub(0.7);
      bp.connect(swell);
      swell.connect(gain);
      lfo(0.09, 0.3, swell.gain);
      lfo(0.05, 200, bp.frequency);
      break;
    }

    case "fire": {
      // Warm low roar + procedural crackles
      const roarLp = filter("lowpass", 600);
      loop("brown").connect(roarLp);
      const roar = sub(0.5);
      roarLp.connect(roar);
      roar.connect(gain);
      const crackHp = filter("highpass", 1800);
      loopBuf(makeCrackleBuffer(ctx)).connect(crackHp);
      const crackle = sub(0.8);
      crackHp.connect(crackle);
      crackle.connect(gain);
      break;
    }

    case "crickets": {
      loopBuf(makeCricketBuffer(ctx)).connect(gain);
      break;
    }

    case "cabin": {
      // Aircraft drone: deep brown bed + faint engine tone + air-vent hiss
      const lp = filter("lowpass", 280);
      loop("brown").connect(lp);
      const bed = sub(0.9);
      lp.connect(bed);
      bed.connect(gain);
      const engine = ctx.createOscillator();
      engine.type = "sine";
      engine.frequency.value = 82;
      const engineGain = sub(0.05);
      engine.connect(engineGain);
      engineGain.connect(gain);
      engine.start();
      stops.push(() => engine.stop());
      const ventLp = filter("lowpass", 1500);
      loop("white").connect(ventLp);
      const vent = sub(0.06);
      ventLp.connect(vent);
      vent.connect(gain);
      break;
    }

    case "fan": {
      // Deep filtered brown noise + a faint motor tone + a slow wobble
      const lp = filter("lowpass", 450);
      loop("brown").connect(lp);
      lp.connect(gain);
      const motor = ctx.createOscillator();
      motor.type = "triangle";
      motor.frequency.value = 110;
      const motorGain = sub(0.035);
      motor.connect(motorGain);
      motorGain.connect(gain);
      motor.start();
      stops.push(() => motor.stop());
      lfo(0.4, 40, lp.frequency);
      break;
    }
  }

  return { gain, stop: () => stops.forEach((s) => s()) };
}

/* ---------------- Questionnaire ---------------- */

interface Question {
  q: string;
  options: { label: string; value: string }[];
}

const QUESTIONS: Question[] = [
  {
    q: "What disturbs your daytime sleep most?",
    options: [
      { label: "Traffic rumble & engines", value: "traffic" },
      { label: "Voices, TVs & neighbours", value: "voices" },
      { label: "Bangs, doors & deliveries", value: "bangs" },
      { label: "A bit of everything", value: "everything" },
    ],
  },
  {
    q: "How loud is it outside your room?",
    options: [
      { label: "Fairly quiet", value: "quiet" },
      { label: "Average street", value: "average" },
      { label: "Loud main road", value: "loud" },
    ],
  },
  {
    q: "How easily does noise wake you?",
    options: [
      { label: "I sleep through most things", value: "heavy" },
      { label: "Somewhere in the middle", value: "mid" },
      { label: "The slightest sound wakes me", value: "light" },
    ],
  },
];

function recommendBlend(answers: string[]): { levels: Levels; volume: number; note: string } {
  const [disturbance, street, sensitivity] = answers;
  let levels: Levels = { ...SILENT };
  let note = "";

  switch (disturbance) {
    case "traffic":
      levels = { ...SILENT, brown: 0.75, waves: 0.4, rain: 0.25 };
      note = "Brown noise sits directly over engine and tyre rumble; ocean waves add a slow swell that stops the drone feeling flat.";
      break;
    case "voices":
      levels = { ...SILENT, pink: 0.7, stream: 0.4, white: 0.2 };
      note = "Pink noise covers the speech frequencies; the stream's watery flutter blurs conversation, and a touch of white catches sharper spikes.";
      break;
    case "bangs":
      levels = { ...SILENT, rain: 0.75, brown: 0.5, fire: 0.2 };
      note = "Rain's natural variability stops sudden bangs standing out; a little campfire crackle keeps the background pleasantly unpredictable.";
      break;
    default:
      levels = { ...SILENT, brown: 0.55, pink: 0.35, rain: 0.4, wind: 0.25 };
      note = "A full-spectrum blend: rumble, voices and random spikes all get covered, with night wind rounding out the mid band.";
  }

  let volume = street === "loud" ? 0.75 : street === "average" ? 0.6 : 0.45;
  if (sensitivity === "light") volume = Math.min(volume + 0.1, 0.85);
  if (sensitivity === "heavy") volume = Math.max(volume - 0.1, 0.3);

  return { levels, volume, note };
}

/* ---------------- Saved mixes ---------------- */

interface SavedBlend {
  name: string;
  levels: Partial<Levels>;
  volume: number;
}

function blendsKey(email: string) {
  return `sleep-atlas-blends:${email}`;
}

function readBlends(email: string): SavedBlend[] {
  try {
    return JSON.parse(localStorage.getItem(blendsKey(email)) ?? "[]") as SavedBlend[];
  } catch {
    return [];
  }
}

/* ---------------- Component ---------------- */

export default function SoundSession() {
  const { user } = useAuth();
  const premium = user?.plan === "premium";

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const [levels, setLevels] = useState<Levels>(DEFAULT_LEVELS);
  const [answers, setAnswers] = useState<string[]>([]);
  const [blendNote, setBlendNote] = useState<string | null>(null);
  const [saved, setSaved] = useState<SavedBlend[]>([]);
  const [blendName, setBlendName] = useState("");

  // Sleep timer + wake-up alarm
  const [timerMin, setTimerMin] = useState<number | null>(null);
  const [remaining, setRemaining] = useState<number | null>(null);
  const [customMin, setCustomMin] = useState("");
  const [wakeAlarm, setWakeAlarm] = useState(false);
  const [alarmRinging, setAlarmRinging] = useState(false);

  const ctxRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const channelsRef = useRef<Partial<Record<SoundId, Channel>>>({});
  const fadeRef = useRef(1);
  const volumeRef = useRef(volume);
  const wakeRef = useRef(false);
  const alarmStopsRef = useRef<(() => void)[]>([]);

  useEffect(() => {
    volumeRef.current = volume;
  }, [volume]);
  useEffect(() => {
    wakeRef.current = wakeAlarm && !!premium;
  }, [wakeAlarm, premium]);

  useEffect(() => {
    if (user && premium) setSaved(readBlends(user.email));
  }, [user, premium]);

  // Keep audio graph in sync with state
  useEffect(() => {
    const ctx = ctxRef.current;
    const master = masterRef.current;
    if (!ctx || !master) return;
    master.gain.setTargetAtTime(
      playing ? volume * fadeRef.current : 0,
      ctx.currentTime,
      0.1
    );
    for (const s of SOUNDS) {
      const level = s.premium && !premium ? 0 : levels[s.id];
      if (level > 0 && !channelsRef.current[s.id]) {
        channelsRef.current[s.id] = buildChannel(ctx, s.id, master);
      }
      const ch = channelsRef.current[s.id];
      if (ch) ch.gain.gain.setTargetAtTime(level, ctx.currentTime, 0.15);
    }
  }, [playing, volume, levels, premium]);

  const stopAlarm = () => {
    alarmStopsRef.current.forEach((s) => s());
    alarmStopsRef.current = [];
    setAlarmRinging(false);
  };

  const startAlarm = () => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    // Gentle fade-in over 60 seconds: a sunrise for the ears
    gain.gain.linearRampToValueAtTime(0.22, ctx.currentTime + 60);
    gain.connect(ctx.destination);
    const tones: OscillatorNode[] = [];
    for (const freq of [440, 554.37]) {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = freq;
      const mix = ctx.createGain();
      mix.gain.value = 0.5;
      osc.connect(mix);
      mix.connect(gain);
      osc.start();
      tones.push(osc);
    }
    // Soft pulse so it feels like a chime, not a drone
    const trem = ctx.createOscillator();
    trem.frequency.value = 0.5;
    const tremGain = ctx.createGain();
    tremGain.gain.value = 0.08;
    trem.connect(tremGain);
    tremGain.connect(gain.gain);
    trem.start();
    alarmStopsRef.current = [
      ...tones.map((t) => () => t.stop()),
      () => trem.stop(),
      () => gain.disconnect(),
    ];
    setAlarmRinging(true);
  };

  // Countdown + fade-out; fires the wake-up alarm at zero if enabled
  useEffect(() => {
    if (!playing || timerMin == null) {
      fadeRef.current = 1;
      setRemaining(null);
      return;
    }
    const endsAt = Date.now() + timerMin * 60_000;
    const fadeWindow = Math.max(60, Math.min(300, timerMin * 60 * 0.2)); // 1–5 min
    const iv = window.setInterval(() => {
      const rem = Math.max(0, Math.round((endsAt - Date.now()) / 1000));
      setRemaining(rem);
      fadeRef.current = rem < fadeWindow ? rem / fadeWindow : 1;
      const ctx = ctxRef.current;
      const master = masterRef.current;
      if (ctx && master) {
        master.gain.setTargetAtTime(
          volumeRef.current * fadeRef.current,
          ctx.currentTime,
          0.3
        );
      }
      if (rem <= 0) {
        window.clearInterval(iv);
        fadeRef.current = 1;
        setPlaying(false);
        setTimerMin(null);
        setRemaining(null);
        if (wakeRef.current) startAlarm();
      }
    }, 1000);
    setRemaining(timerMin * 60);
    return () => window.clearInterval(iv);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, timerMin]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      Object.values(channelsRef.current).forEach((ch) => ch?.stop());
      alarmStopsRef.current.forEach((s) => s());
      ctxRef.current?.close();
    };
  }, []);

  const togglePlay = () => {
    if (alarmRinging) stopAlarm();
    if (!ctxRef.current) {
      const ctx = new AudioContext();
      const master = ctx.createGain();
      master.gain.value = 0;
      master.connect(ctx.destination);
      ctxRef.current = ctx;
      masterRef.current = master;
    }
    if (ctxRef.current.state === "suspended") void ctxRef.current.resume();
    setPlaying((p) => !p);
  };

  const setLevel = (id: SoundId, value: number) =>
    setLevels((l) => ({ ...l, [id]: value }));

  const applyRecommendation = () => {
    if (answers.length < QUESTIONS.length) return;
    const rec = recommendBlend(answers);
    setLevels(rec.levels);
    setVolume(rec.volume);
    setBlendNote(rec.note);
    if (!playing) togglePlay();
  };

  const saveBlend = () => {
    if (!user || !blendName.trim()) return;
    const next = [
      ...saved.filter((b) => b.name !== blendName.trim()),
      { name: blendName.trim(), levels, volume },
    ];
    localStorage.setItem(blendsKey(user.email), JSON.stringify(next));
    setSaved(next);
    setBlendName("");
  };

  const removeBlend = (name: string) => {
    if (!user) return;
    const next = saved.filter((b) => b.name !== name);
    localStorage.setItem(blendsKey(user.email), JSON.stringify(next));
    setSaved(next);
  };

  const applyCustomTimer = () => {
    const mins = Math.round(Number(customMin));
    if (!Number.isFinite(mins) || mins < 5 || mins > 720) return;
    setTimerMin(mins);
  };

  const formatTime = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return h > 0
      ? `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
      : `${m}:${String(s).padStart(2, "0")}`;
  };

  const activeCount = SOUNDS.filter(
    (s) => levels[s.id] > 0 && (!s.premium || premium)
  ).length;

  return (
    <div className="space-y-6">
      {/* Wake-up alarm ringing */}
      {alarmRinging && (
        <div className="card-surface flex flex-wrap items-center justify-between gap-4 border-sand/50 bg-sand/10 p-6">
          <p className="flex items-center gap-3 font-display text-lg font-semibold text-sand-ink">
            <BellRing className="h-6 w-6 animate-pulse" aria-hidden="true" />
            Time to wake up, the chime will keep building gently
          </p>
          <button
            type="button"
            onClick={stopAlarm}
            className="rounded-xl bg-sand px-6 py-3 font-semibold text-deep transition-opacity hover:opacity-90"
          >
            Stop alarm
          </button>
        </div>
      )}

      {/* Transport bar */}
      <div className="card-surface flex flex-wrap items-center gap-5 p-6">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pause Sleyp" : "Play Sleyp"}
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-deep text-cream transition-all duration-200 hover:opacity-90 hover:shadow-glow"
        >
          {playing ? (
            <Pause className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Play className="ml-0.5 h-6 w-6" aria-hidden="true" />
          )}
        </button>
        <div className="min-w-[200px] flex-1">
          <label htmlFor="maskai-volume" className="text-sm font-medium text-ink-muted">
            Master volume
          </label>
          <input
            id="maskai-volume"
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="mt-2 w-full"
          />
        </div>
        <p className="text-sm text-ink-faint" aria-live="polite">
          {playing
            ? `Masking with ${activeCount} layer${activeCount === 1 ? "" : "s"}${
                remaining != null ? ` · fades out in ${formatTime(remaining)}` : ""
              }`
            : "Paused"}
        </p>
      </div>

      {/* Sleep timer */}
      <div className="card-surface p-6">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-muted">
          <Timer className="h-4 w-4" aria-hidden="true" />
          Sleep timer
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setTimerMin(null)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              timerMin === null
                ? "border-sage bg-sage/15 text-sage-deep"
                : "border-ink/10 text-ink-muted hover:border-ink/25 hover:text-ink"
            }`}
          >
            Off
          </button>
          {FREE_TIMERS.map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setTimerMin(m)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                timerMin === m
                  ? "border-sage bg-sage/15 text-sage-deep"
                  : "border-ink/10 text-ink-muted hover:border-ink/25 hover:text-ink"
              }`}
            >
              {m} min
            </button>
          ))}
          {premium ? (
            <span className="flex items-center gap-2">
              <input
                type="number"
                min={5}
                max={720}
                value={customMin}
                onChange={(e) => setCustomMin(e.target.value)}
                placeholder="Custom"
                aria-label="Custom timer length in minutes"
                className="w-24 rounded-full border border-ink/10 bg-paper px-4 py-1.5 text-sm text-ink placeholder:text-ink-faint focus:border-sage/60 focus:outline-none"
              />
              <button
                type="button"
                onClick={applyCustomTimer}
                className="rounded-full border border-ink/15 px-4 py-1.5 text-sm text-ink transition-colors hover:border-good/50"
              >
                Set
              </button>
              {timerMin != null && !FREE_TIMERS.includes(timerMin) && (
                <span className="rounded-full border border-sage bg-sage/15 px-4 py-1.5 text-sm text-good">
                  {timerMin} min
                </span>
              )}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sand/15 px-3 py-1.5 text-xs font-semibold text-sand-ink">
              <Lock className="h-3 w-3" aria-hidden="true" />
              Custom length & wake-up alarm · Premium
            </span>
          )}
        </div>
        {premium && (
          <label className="mt-4 flex cursor-pointer items-center gap-3 text-sm text-ink-muted">
            <input
              type="checkbox"
              checked={wakeAlarm}
              onChange={(e) => setWakeAlarm(e.target.checked)}
              className="h-4 w-4 accent-good"
            />
            <span>
              <span className="font-medium text-ink">Wake-up fade-in</span>, when
              the timer ends, a gentle chime builds over a full minute instead of
              a jolting alarm
            </span>
          </label>
        )}
        <p className="mt-3 text-xs text-ink-faint">
          Sound eases down over the final few minutes rather than cutting out,
          no re-alerting your brain just as you drop off. Pausing resets the
          countdown.
        </p>
      </div>

      {/* Sound layers */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {SOUNDS.map((s) => {
          const locked = s.premium && !premium;
          return (
            <div
              key={s.id}
              className={`card-surface relative p-5 ${locked ? "opacity-75" : ""}`}
            >
              {locked && (
                <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-sand/15 px-2.5 py-1 text-xs font-semibold text-sand-ink">
                  <Lock className="h-3 w-3" aria-hidden="true" /> Premium
                </span>
              )}
              <s.icon
                className={`h-7 w-7 ${levels[s.id] > 0 && !locked ? "text-sage-deep" : "text-ink-faint"}`}
                aria-hidden="true"
              />
              <h3 className="mt-3 font-display font-semibold">{s.name}</h3>
              <p className="mt-1 text-xs leading-relaxed text-ink-muted">{s.masks}</p>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={locked ? 0 : levels[s.id]}
                disabled={locked}
                aria-label={`${s.name} level`}
                onChange={(e) => setLevel(s.id, Number(e.target.value))}
                className="mt-4 w-full disabled:cursor-not-allowed"
              />
            </div>
          );
        })}
      </div>

      {/* Premium: questionnaire + saved mixes */}
      {premium ? (
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card-surface border-sage/30 p-6">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sage-deep">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Build my blend
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Three quick questions about your street and your sleep. Sleyp
              sets the layers and volume for you.
            </p>
            <div className="mt-5 space-y-5">
              {QUESTIONS.map((q, qi) => (
                <fieldset key={q.q}>
                  <legend className="text-sm font-semibold text-ink">{q.q}</legend>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {q.options.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() =>
                          setAnswers((a) => {
                            const next = [...a];
                            next[qi] = opt.value;
                            return next;
                          })
                        }
                        className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                          answers[qi] === opt.value
                            ? "border-sage bg-sage/15 text-sage-deep"
                            : "border-ink/10 text-ink-muted hover:border-ink/25 hover:text-ink"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </fieldset>
              ))}
            </div>
            <button
              type="button"
              onClick={applyRecommendation}
              disabled={answers.filter(Boolean).length < QUESTIONS.length}
              className="mt-6 rounded-xl bg-deep px-5 py-3 font-semibold text-cream transition-all duration-200 hover:bg-deep-ink disabled:cursor-not-allowed disabled:opacity-40"
            >
              Apply my blend
            </button>
            {blendNote && (
              <p className="mt-4 rounded-xl bg-paper p-4 text-sm leading-relaxed text-ink-muted">
                {blendNote}
              </p>
            )}
          </div>

          <div className="card-surface p-6">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-good">
              <Save className="h-4 w-4" aria-hidden="true" />
              My mixes
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Set any combination of the {SOUNDS.length} layers with the
              sliders, then save it as a personal mix, one tap to bring it
              back after every night shift.
            </p>
            <div className="mt-4 flex gap-2">
              <input
                type="text"
                value={blendName}
                onChange={(e) => setBlendName(e.target.value)}
                placeholder="Name this mix (e.g. Bin day)"
                aria-label="Mix name"
                className="w-full rounded-xl border border-ink/10 bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-sage/60 focus:outline-none"
              />
              <button
                type="button"
                onClick={saveBlend}
                disabled={!blendName.trim()}
                className="shrink-0 rounded-xl border border-ink/15 px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-good/50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Save
              </button>
            </div>
            {saved.length === 0 ? (
              <p className="mt-4 text-sm text-ink-faint">
                No saved mixes yet, set your sliders, name it, save it.
              </p>
            ) : (
              <ul className="mt-4 space-y-2">
                {saved.map((b) => (
                  <li
                    key={b.name}
                    className="flex items-center justify-between rounded-xl bg-paper px-4 py-3"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setLevels({ ...SILENT, ...b.levels });
                        setVolume(b.volume);
                        if (!playing) togglePlay();
                      }}
                      className="text-left text-sm font-medium text-ink hover:text-sage-deep"
                    >
                      {b.name}
                    </button>
                    <button
                      type="button"
                      onClick={() => removeBlend(b.name)}
                      aria-label={`Delete mix ${b.name}`}
                      className="text-ink-faint transition-colors hover:text-sand-ink"
                    >
                      <Trash2 className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ) : (
        <div className="card-surface border-sand/30 bg-gradient-to-br from-card to-sage-deep/15 p-8">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sand-ink">
            <Lock className="h-4 w-4" aria-hidden="true" />
            Premium unlocks the full defence
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold">
            10 extra layers, personal mixes and the gentle wake-up alarm
          </h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">
            Heavy rain, thunderstorm, ocean waves, forest, stream, wind,
            campfire, crickets, cabin hum and fan, mix any of them into your
            own saved blends, answer three questions for a blend tuned to your
            exact street, and wake to a fade-in chime instead of a jolt.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/pricing/"
              className="rounded-xl bg-deep px-6 py-3 font-semibold text-cream transition-all duration-200 hover:bg-deep-ink hover:shadow-glow"
            >
              See Premium
            </Link>
            <Link
              href="/account/"
              className="rounded-xl border border-ink/15 px-6 py-3 font-semibold text-ink transition-colors hover:border-sage/50 hover:bg-ink/[0.04]"
            >
              {user ? "Manage my account" : "Log in / sign up"}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
