
import { faqItems } from '../../data/FaqItems'

const FaqSection = () => {
  return (
    <div>
       <section className="bg-[#1D1D1D] text-gray-100 py-32 min-h-screen">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold text-center sm:text-5xl">Frequently Asked Questions</h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          {faqItems.map((faq, index) => (
            <details key={index}>
              <summary className="py-2 outline-none cursor-pointer focus:underline">{faq.question}</summary>
              <div className="px-4 pb-4">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default FaqSection
