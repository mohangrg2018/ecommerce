const Title = ({ text1, text2 }) => {
  return (
    <div className="flex items-center gap-2">
      <h2 className="uppercase text-base sm:text-2xl">
        <span className="mr-2 text-gray-500">{text1}</span>
        <span className="font-bold">{text2}</span>
      </h2>
      <p className="w-8 sm:w-12 h-0.5 bg-[#414141]"></p>
    </div>
  );
};

export default Title;
