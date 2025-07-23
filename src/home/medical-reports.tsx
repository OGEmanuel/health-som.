import Sheet from '@/assets/images/sheet';

const MedicalReports = () => {
  return (
    <section className="flex w-full max-w-[1032px] flex-col gap-8 self-start">
      <div className="flex flex-col gap-2 sm:gap-3">
        <h1 className="text-xl leading-[100%] font-semibold -tracking-[0.03em] sm:text-2xl">
          Welcome, Abolaji
        </h1>
        <p className="text-sm leading-[22px] tracking-tight text-[#7C7C7C]">
          Stay in control of your health and get clear insights made just for
          you.
        </p>
      </div>
      <div className="custom-dashed-border"></div>
      <div className="flex justify-center max-sm:flex-col sm:items-center sm:gap-4 sm:pt-[6.25rem]">
        <div className="h-[7.375rem] w-24 sm:h-[164px] sm:w-[140px]">
          <Sheet className="max-sm:hidden" />
          <Sheet width="96" height="118" className="sm:hidden" />
        </div>
        <div className="flex w-full max-w-[324px] flex-col gap-2">
          <p className="leading-[22px] font-semibold tracking-tight text-[#1D1D1D]">
            Waiting on your first report
          </p>
          <p className="text-sm leading-[22px] font-medium tracking-tight text-[#7C7C7C]">
            Your medical reports will be available here once shared by your
            healthcare provider.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MedicalReports;
