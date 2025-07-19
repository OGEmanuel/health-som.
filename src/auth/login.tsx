import Logo from '@/assets/jsx-icons/logo';

const Login = () => {
  const year = new Date().getFullYear();
  return (
    <section className="flex h-screen flex-col items-center justify-center pb-8 max-sm:px-5 sm:pb-10">
      <div className="flex h-full w-full flex-col items-center justify-center gap-12 text-center sm:max-w-[25rem]">
        <Logo className="sm:hidden" />
        <div className="flex w-full flex-col justify-center gap-3">
          <h1 className="text-2xl leading-[100%] font-semibold -tracking-[0.03em]">{`Let’s find your hospital`}</h1>
          <p className="text-sm leading-[22px] font-medium tracking-tight text-[#7C7C7C]">
            Please enter the name of the hospital where your medical records are
            stored.
          </p>
        </div>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-end gap-2 sm:max-w-[17.5rem]">
        <p className="text-center text-sm leading-[22px] font-medium tracking-tight text-[#7C7C7C]">
          <span className="text-[#1E1E1E]">Health something</span> do not retain
          or have access to your medical records.
        </p>
        <div className="flex items-center gap-3 text-sm text-[#636363]">
          <p className="leading-[22px] tracking-tight">Terms of use</p>
          <span className="block size-1 rounded-full bg-[#ACACAC]"></span>
          <p className="leading-[22px] tracking-tight">Privacy policy</p>
        </div>
        <p className="text-sm leading-[22px] tracking-tight text-[#ACACAC]">
          © {year} Healthsomething.ai
        </p>
      </div>
    </section>
  );
};

export default Login;
