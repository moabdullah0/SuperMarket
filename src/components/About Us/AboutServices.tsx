import logo from "../../assets/Syrian SuperMarket Logo.svg";
import { useGlobalContext } from "../../context/language";
import about from "../../assets/content-image-1.jpg";

const AboutServices = () => {
  const { mode } = useGlobalContext();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 px-4 md:px-10 lg:px-56 items-center pb-10">
        <img
          src={about}
          className="w-[80%] object-cover h-[80%] mr-6 lg:mr-20"
          alt="Content"
        />
        <div className="text-gray-500">
          <img src={logo} className="h-24 md:h-32 lg:h-40 mx-auto" alt="Logo" />
          <p className="pb-4">
          {mode == "Eng"
            ? "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making itlook like readable English. Many desktop publishing packages and webpage Many desktop publishing packages and web"
            : "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت … وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي. وخلافاَ للاعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد. من كتاب “حول أقاصي الخير والشر"}
          
            </p>
            <p className="pb-4">
          {mode == "Eng"
            ? "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making itlook like readable English. Many desktop publishing packages and webpage Many desktop publishing packages and web"
            : "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت … وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي. وخلافاَ للاعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد. من كتاب “حول أقاصي الخير والشر"}
          
            </p>
            <p className="pb-4">
          {mode == "Eng"
            ? "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making itlook like readable English. Many desktop publishing packages and webpage Many desktop publishing packages and web"
            : "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت … وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي. وخلافاَ للاعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد. من كتاب “حول أقاصي الخير والشر"}
          
            </p>
            <p className="pb-4">
          {mode == "Eng"
            ? "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making itlook like readable English. Many desktop publishing packages and webpage Many desktop publishing packages and web"
            : "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت … وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي. وخلافاَ للاعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد. من كتاب “حول أقاصي الخير والشر"}
          
            </p>
          
        </div>
      </div>
      <div className="flex justify-center">
      <hr className="border border-none w-[70%] h-1 bg-gray-100"/>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 px-4 md:px-10  lg:px-56 items-center pb-10">
        <div className="text-gray-500">
         
        <p className="pb-4">
          {mode == "Eng"
            ? "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making itlook like readable English. Many desktop publishing packages and webpage Many desktop publishing packages and web"
            : "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت … وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي. وخلافاَ للاعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد. من كتاب “حول أقاصي الخير والشر"}
          
            </p>
            <p className="pb-4">
          {mode == "Eng"
            ? "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making itlook like readable English. Many desktop publishing packages and webpage Many desktop publishing packages and web"
            : "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت … وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي. وخلافاَ للاعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد. من كتاب “حول أقاصي الخير والشر"}
          
            </p>
            <p className="pb-4">
          {mode == "Eng"
            ? "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making itlook like readable English. Many desktop publishing packages and webpage Many desktop publishing packages and web"
            : "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت … وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي. وخلافاَ للاعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد. من كتاب “حول أقاصي الخير والشر"}
          
            </p>
            <p className="pb-4">
          {mode == "Eng"
            ? "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making itlook like readable English. Many desktop publishing packages and webpage Many desktop publishing packages and web"
            : "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت … وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي. وخلافاَ للاعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد. من كتاب “حول أقاصي الخير والشر"}
          
            </p>
        </div>
        <img
          src={about}
          className="w-[80%] object-cover h-[80%] mr-6 lg:mr-20"
          alt="Content"
        />
      </div>
    </div>
  );
};

export default AboutServices;
