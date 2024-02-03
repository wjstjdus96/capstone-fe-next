export default function loading() {
  return (
    <div className="w-full h-full relative">
      <div className=" bg-[#3A4458] h-[26rem]"></div>
      <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <div className="h-[3rem] w-[3rem] border-t-8 border-solid border-white rounded-full animate-spinnerRotation"></div>
      </div>
    </div>
  );
}
