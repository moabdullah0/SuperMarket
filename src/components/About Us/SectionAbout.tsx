const SectionAbout = () => {
  return (
    <div className="h-[70vh] bg-greengrocer-shelf bg-cover bg-center relative">
      <div className="flex items-center justify-center h-full w-full text-gray-200 font-bold bg-gradient-to-tr from-black">
        {/* Use responsive text sizes and positioning utilities */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-dancing-script">
          About Us
        </h1>
      </div>
    </div>
  );
}

export default SectionAbout;