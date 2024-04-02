
import { useGlobalContext } from '../../context/language'
import { faqItems } from '../../data/FaqItems'

const FaqSection = () => {
  const {mode}=useGlobalContext()
  return (
    <div>
       <section className="bg-[#1D1D1D] text-gray-100 py-32 min-h-screen">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold text-center sm:text-5xl">{mode=='Eng'?'Frequently Asked Questions':'الاسئلة المتكررة '}</h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          {faqItems.map((faq, index) => (
            <details key={index}>
              <summary className="py-2 outline-none cursor-pointer focus:underline">{mode=='Eng'?faq.question:faq.questionArabic}</summary>
              <div className="px-4 pb-4">
                <p>{mode=='Eng'?faq.answer:faq.answerArabic}</p>
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
