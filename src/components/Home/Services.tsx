import { useGlobalContext } from "../../context/language";

const Services = () => {
  const { mode } = useGlobalContext();
  return (
    <div className=" bg-custom-color py-5 px-0 lg:px-20">
      <h1 className="text-4xl font-serif text-center pt-20">{mode=='Eng'?'Services':'خدماتنا'}</h1>
      <p className="text-center mx-auto max-w-2xl pt-2">
      {mode=='Eng'?'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making itlook like readable English. Many desktop publishing packages and webpage Many desktop publishing packages and web':'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت … وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي. وخلافاَ للاعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد. من كتاب “حول أقاصي الخير والشر'}

      </p>
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-3 pt-20 place-items-center">
  <img
    src="https://0effortthemes.com/veggie/images/homepage/text-block1.png"
    alt="Block 1"
    className="py-5"
  />
  <img
    src="https://0effortthemes.com/veggie/images/homepage/text-block1.png"
    alt="Block 2"
    className="py-5 lg:py-0"
  />
  <img
    src="https://0effortthemes.com/veggie/images/homepage/text-block1.png"
    alt="Block 3"
    className="py-5"
  />
  <img
    src="https://0effortthemes.com/veggie/images/homepage/text-block1.png"
    alt="Block 4"
    className="py-5 lg:py-0"
  />
</div>

    
    </div>
  );
};

export default Services;
