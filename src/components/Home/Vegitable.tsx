import { useGlobalContext } from "../../context/language";


const Vegitable = () => {
  const { mode } = useGlobalContext();
  return (
    <>
    <div className='bg-cover grid lg:grid-cols-2 sm:grid-col-1 px-5 lg:px-56' style={{
        backgroundImage: `url("https://img.freepik.com/free-photo/brick-wall-texture_1194-5394.jpg?t=st=1711963400~exp=1711967000~hmac=878cdb42b496a32c1797bfa43906a52f5ea8b2c99c84421c4541eb1e8fea4e93&w=996")`,
      }}>
      <img src="https://0effortthemes.com/veggie/images/homepage/veg-rack.png" alt="" className='pt-20'/>
      <div className=' text-black font-serif text-lg py-[30%]'>
        <h1 className='text-4xl'>{mode=='Eng'?'Vegitable market psd template':'قالب اختيار سوق الخضار'}</h1>
<p className='pt-5'>
{mode=='Eng'?'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making itlook like readable English. Many desktop publishing packages and webpage Many desktop publishing packages and web':'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت … وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي. وخلافاَ للاعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد. من كتاب “حول أقاصي الخير والشر'}

</p>   
<p className='pt-5'>
{mode=='Eng'?'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making itlook like readable English. Many desktop publishing packages and webpage Many desktop publishing packages and web':'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت … وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي. وخلافاَ للاعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد. من كتاب “حول أقاصي الخير والشر'}
</p>  
<button className=" bg-green-600 w-[40%] lg:w-[40%] px-4 text-white py-3 mt-3 rounded-lg ">
{mode=='Eng'?'Lets Go':'هيا بنا لنبدا رحلة التسوق'}

      </button> </div>

    </div>
 
    </>
  )
}

export default Vegitable
