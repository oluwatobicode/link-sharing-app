const Empty = () => {
  return (
    <div className="mt-5 bg-[#FAFAFA] p-5 rounded-2xl">
      <div className="flex flex-col items-center justify-center">
        <img
          src="/assets/images/illustration-empty.svg"
          className="mb-3"
          alt="Empty"
        />
        <h1 className="text-[#333333] text-[32px] font-bold leading-[150%] mb-5">
          Let&apos;s get you started
        </h1>
        <p className="text-[#737373] text-center text-[16px] leading-[150%] font-normal mb-5">
          Use the “Add new link” button to get started. Once you have more
          <span className="block">
            than one link, you can reorder and edit them. We&apos;re here to
            help
          </span>
          <span className="block">you share your profiles with everyone!</span>
        </p>
      </div>
    </div>
  );
};
export default Empty;
