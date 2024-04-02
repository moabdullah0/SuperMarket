import { useGlobalContext } from "../../context/language";

const Featured = () => {
  const { mode } = useGlobalContext();

    return (
      <div className="bg-gray-200 text-center">
        <div>
          <h1 className="text-4xl font-serif text-center pt-20 text-gray-500">{mode=='Eng'?'New Week Featured':'اصناف جديدة اسبوعيا'}</h1>
          <p className="text-center mx-auto max-w-2xl pt-2 text-gray-500">
          {mode=='Eng'?'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making itlook like readable English. Many desktop publishing packages and webpage Many desktop publishing packages and web':'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت … وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي. وخلافاَ للاعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد. من كتاب “حول أقاصي الخير والشر'}

          </p>
        </div>
        <div className="flex flex-wrap justify-center items-start mt-10">
          <div className="relative m-2 group">
            <img src="https://0effortthemes.com/veggie/images/homepage/veg-big.jpg" alt="" className="w-full h-full rounded-xl transition duration-300 ease-in-out transform group-hover:scale-110"/>
            <div className="absolute top-[30%] left-0 text-white font-bold p-2 text-5xl">Fresh vegetables 30% off 
             
            </div>
          </div>
          <div className="m-2">
  <div className="relative group">
    <img src="https://0effortthemes.com/veggie/images/homepage/veg-big-2.jpg" alt="" className="w-full h-full rounded-xl transition duration-300 ease-in-out transform group-hover:scale-110"/>
    <div className="absolute top-[30%]">
    <p className=" left-0 text-white font-bold p-2 text-5xl">Fresh vegetables 30% off 
      
    </p>
   
    </div>
  </div>
  <div className="relative mt-2 group">
    <img src="https://0effortthemes.com/veggie/images/homepage/veg-big-3.jpg" alt="" className="w-full h-full rounded-xl transition duration-300 ease-in-out transform group-hover:scale-110"/>
    <div className="absolute top-[30%]">
    <p className=" left-0 text-white font-bold p-2 text-5xl">Fresh vegetables 30% off 
      
    </p>
    
    </div>
  </div>
</div>

        </div>
      </div>
    )
  }
  
  export default Featured
  