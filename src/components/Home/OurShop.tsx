import React from "react";
import { ButtonShob, CardItemShop } from "../../data/Shopitems";
import ProductCard from "./ProductCard";
import { useGlobalContext } from "../../context/language";


const OurShop: React.FC = () => {
  const { mode } = useGlobalContext();

  return (
    <div className="bg-custom-color pb-3">
      <h1 className="text-4xl font-serif text-center text-gray-500 pt-10">
        {mode=='Eng'?'Our Shop':'التسوق'}
      </h1>
      <p className="text-center mx-auto max-w-2xl pt-2 text-gray-500">
      {mode=='Eng'?'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making itlook like readable English. Many desktop publishing packages and webpage Many desktop publishing packages and web':'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت … وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي. وخلافاَ للاعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد. من كتاب “حول أقاصي الخير والشر'}

      </p>
      <div className="flex justify-center flex-wrap gap-4 pt-10">
        {ButtonShob.map((button, index) => (
          <button
            key={index}
            className="text-gray-900 uppercase border border-green-300 hover:bg-green-600 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 transition-colors duration-300"
          >
            {mode=='Eng'?button.title : button.titleArabic}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 pt-10">
        {CardItemShop.map((card, index) => (
          <ProductCard key={index} title={mode=='Eng'?card.title:card.titleArabic} img={card.img} />
        ))}
      </div>
    </div>
  );
};

export default OurShop;
