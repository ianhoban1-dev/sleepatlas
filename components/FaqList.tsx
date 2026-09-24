/**
 * FAQ list as native <details>. Every answer is in the server HTML on first
 * paint (DOM-first for crawlers and answer engines) and the list mirrors
 * the FAQPage schema on the same page word for word.
 */
export default function FaqList({
  faqs,
  openFirst = true,
}: {
  faqs: readonly { question: string; answer: string }[];
  openFirst?: boolean;
}) {
  return (
    <div className="border-t border-ink/[0.09]">
      {faqs.map((faq, i) => (
        <details key={faq.question} className="faq-item group" open={openFirst && i === 0}>
          <summary>
            <h3 className="font-display text-lg font-medium tracking-tight md:text-xl">
              {faq.question}
            </h3>
            <span className="faq-icon text-sage" aria-hidden="true" />
          </summary>
          <p className="faq-answer">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
