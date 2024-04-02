import { useGlobalContext } from "../../context/language";

const About = () => {
  const { mode } = useGlobalContext();

  return (
    <div className="bg-gray-200 flex flex-col lg:flex-row items-center justify-center  font-serif ">
      <img
        src="https://0effortthemes.com/veggie/images/homepage/small-text-baner.jpg"
        className="mx-auto lg:w-[20%] sm:w-[80%] my-5"
        alt="Veggie Banner"
      />
      <div className="  lg:w-[50%] px-10 pb-10 pt-10">
        <h1 className="text-4xl font-bold">{mode=='Eng'?'About veggie super market':'حول السوبر ماركت'}</h1>
        <p className="mt-5">
          {mode=='Eng'?'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making itlook like readable English. Many desktop publishing packages and webpage Many desktop publishing packages and web':'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت … وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي. وخلافاَ للاعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد. من كتاب “حول أقاصي الخير والشر'}
        </p>
        <button className="bg-green-600 px-10 py-3 rounded-lg text-white mt-9">
          {mode=='Eng'?'Read More':'اقرا المزيد'}
        </button>
      </div>
     
    </div>
  );
};

export default About;
