import Download from '@/assets/jsx-icons/download';
import { Separator } from '@/components/ui/separator';
import firstReport from '@/assets/images/report-a1.png';
import range from '@/assets/images/range-bar.png';
import Enlarge from '@/assets/jsx-icons/enlarge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useRef, useState, type ReactNode } from 'react';
import Reduce from '@/assets/jsx-icons/reduce';
import { cn } from '@/lib/utils';

const MedicalReportDetails = () => {
  return (
    <section className="flex flex-col gap-6 pb-10">
      <div className="flex flex-col gap-2 max-sm:py-6">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-3 sm:py-[5px]">
            <p className="leading-[22px] -tracking-tight text-[#7C7C7C]">
              Medical reports
            </p>
            <Separator
              orientation="vertical"
              className="!h-4 bg-[#1E1E1E0D] max-sm:hidden"
            />
            <p className="leading-[22px] font-medium tracking-tight text-[#1D1D1D] max-md:hidden">
              Mr.John_Adeyemi_Malaria_Test_Result.pdf
            </p>
          </div>
          <p className="leading-[22px] tracking-tight text-[#ACACAC]">
            January 15, 2025
          </p>
        </div>
        <p className="leading-6 font-medium tracking-tight text-[#1D1D1D] sm:hidden">
          Insights into Tuberculosis Diagnostic Findings
        </p>
      </div>
      <div className="flex gap-12 max-lg:gap-6 max-md:flex-col">
        <MobileFile>
          <div className="flex items-center overflow-hidden rounded-xl bg-[#F9F9F9] pr-2">
            <div className="relative flex h-full w-16 justify-center self-start">
              <div className="w-[40.35px] translate-y-2 border-[0.5px] border-[#1D1D1D0D]">
                <img src={firstReport} alt="report" />
              </div>
              <div className="custom-gradient absolute bottom-0 z-10 h-6 w-full"></div>
            </div>
            <div className="flex flex-1 items-center justify-between">
              <div className="py-2">
                <p className="text-sm leading-[22px] tracking-tight text-[#7C7C7C]">
                  Mr.John_Adeyemi_Malaria_Test_Re...
                </p>
                <p className="text-start text-sm leading-[22px] tracking-tight text-[#ACACAC]">
                  20.13MB
                </p>
              </div>
              <div className="p-2.5">
                <Enlarge />
              </div>
            </div>
          </div>
        </MobileFile>
        <Details />
        <ReportFile />
      </div>
    </section>
  );
};

export default MedicalReportDetails;

const Details = () => {
  const [level] = useState(2);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [showGradient, setShowGradient] = useState(false);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollTop = scrollRef.current.scrollTop;
      setShowGradient(scrollTop > 10); // show gradient if scrolled more than 10px
    }
  };

  const status =
    level <= 1
      ? 'Healthy'
      : level > 1 && level <= 3
        ? 'Monitor'
        : 'Seek Medical Care';

  return (
    <div
      className={cn(
        'custom-gradient-2 relative basis-full after:rotate-180 after:opacity-0 after:transition-opacity md:before:absolute md:before:bottom-0 md:before:z-10 md:before:h-[7.5rem] md:before:w-full md:after:absolute md:after:top-0 md:after:z-30 md:after:h-[7.5rem] md:after:w-full',
        showGradient && 'after:opacity-100',
      )}
    >
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex flex-col gap-8 overflow-auto md:h-[calc(100vh-253px)] lg:gap-10"
      >
        <p className="relative text-sm leading-6 font-medium tracking-tight text-[#7C7C7C] md:px-5 md:before:absolute md:before:top-0 md:before:left-0 md:before:z-20 md:before:h-full md:before:w-0.5 md:before:rounded-lg md:before:bg-[#5842B6] md:after:absolute md:after:top-0 md:after:left-0 md:after:z-10 md:after:h-full md:after:w-2 md:after:bg-[#F5F3FC] lg:px-10">
          {/* <p className="max-md:py-12"> Analyzing report...</p> */}
          <span className="text-xl leading-7 font-semibold tracking-tight text-black lg:text-2xl lg:leading-8">
            {`          Your test result shows signs of a recent or active typhoid infection.
          It’s not unusual and can be effectively treated with proper care.
          There’s no need to panic. Follow your treatment and monitor your
          symptoms closely over the next few days.`}
          </span>
        </p>
        <div className="flex flex-col gap-4 lg:px-10">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs text-[#ACACAC] [&>p]:leading-5 [&>p]:tracking-tight">
              <p>Healthy</p>
              <p>Monitor</p>
              <p>Seek Medical Care</p>
            </div>
            <div className="relative">
              <img src={range} alt="range-bar" />
              <span
                style={{
                  width: `${100 / 6}%`,
                  transform: `translateX(${level * 100}%)`,
                }}
                className={cn(
                  'absolute top-1/2 h-full -translate-y-1/2 border-b-2',
                  level <= 1 && 'border-[#41D741] bg-[#41D7411A]',
                  level > 1 && level <= 3 && 'border-[#F1943A] bg-[#F1943A1A]',
                  level > 3 && 'border-[#FE5D5D] bg-[#FE5D5D1A]',
                )}
              ></span>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm [&>p]:leading-6 [&>p]:tracking-tight">
            <p className="text-[#7C7C7C]">{`You’re on track to recover!`}</p>
            <p
              className={cn(
                'font-semibold',
                level <= 1 && 'text-[#41D741]',
                level > 1 && level <= 3 && 'text-[#F1943A]',
                level > 3 && 'text-[#FE5D5D]',
              )}
            >
              {status}
            </p>
          </div>
        </div>
        <div className="relative flex flex-col gap-4 px-5 text-sm text-[#636363] md:before:absolute md:before:top-0 md:before:left-0 md:before:z-20 md:before:h-full md:before:w-0.5 md:before:rounded-lg md:before:bg-[#E5E5E5] md:after:absolute md:after:top-0 md:after:left-0 md:after:z-10 md:after:h-full md:after:w-2 md:after:bg-[#F9F9F9] lg:px-10 [&>*]:leading-6 [&>*]:tracking-tight">
          <p>
            What This Means Your result indicates a current or recent typhoid
            infection, which usually happens through contaminated water or food.
            The presence of IgM antibodies means your immune system has
            recognized the infection and is responding. This is treatable, and
            most people make a full recovery with proper rest, hydration, and
            medication.
          </p>
          <ul className="list-inside list-disc [&>li]:ml-1">
            What To Do Now
            <li>
              {`Follow your doctor’s instructions and complete your
                antibiotics`}
            </li>
            <li>Drink plenty of clean water or oral rehydration solutions</li>
            <li>
              Rest as much as possible and avoid stress or physical exertion
            </li>
            <li>
              Eat light, easily digestible meals (e.g., rice, bananas, broth)
            </li>
          </ul>
          <ul className="list-inside list-disc [&>li]:ml-1">
            When To Check In Again
            <li>{`If your fever doesn’t go down within 5–7 days`}</li>
            <li>
              If symptoms like severe stomach pain, diarrhea, or weakness worsen
            </li>
            <li>If you have any existing conditions that may affect healing</li>
          </ul>
          <ul className="list-inside list-disc [&>li]:ml-1">
            How To Stay Protected
            <li>Wash your hands regularly, especially before meals</li>
            <li>Drink only clean, boiled, or bottled water</li>
            <li>Avoid raw or undercooked food from outside sources</li>
            <li>Encourage those around you to practice proper hygiene</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const ReportFile = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [showGradient, setShowGradient] = useState(false);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollTop = scrollRef.current.scrollTop;
      setShowGradient(scrollTop > 10); // show gradient if scrolled more than 10px
    }
  };

  return (
    <div className="relative basis-full">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="overflow-auto rounded-2xl bg-[#F9F9F9] max-md:hidden md:h-[calc(100vh-253px)]"
      >
        <div
          className={cn(
            'before-custom-gradient absolute top-0 flex w-full items-center justify-between p-4 before:absolute before:left-1/2 before:h-full before:w-full before:-translate-x-1/2 before:rotate-180 before:rounded-t-2xl before:opacity-0 before:transition-opacity',
            showGradient && 'before:opacity-100',
          )}
        >
          <div className="z-10 flex items-center gap-2">
            <p className="text-xs leading-[22px] tracking-tight text-[#7C7C7C] lg:text-sm">
              <span className="max-lg:hidden">
                Mr.John_Adeyemi_Malaria_Test_Result.pdf
              </span>
              <span className="lg:hidden">
                {' '}
                Mr.John_Adeyemi_Malaria_Test_Res...
              </span>
            </p>
            <span className="block size-1 rounded-full bg-[#ACACAC]"></span>
            <p className="text-xs leading-[22px] tracking-tight text-[#ACACAC] lg:text-sm">
              20.13MB
            </p>
          </div>
          <div className="z-10 p-1">
            <Download />
          </div>
        </div>
        <div className="mt-[3.75rem] flex flex-col gap-4 px-[2.5rem] pb-4 lg:px-[4.5rem]">
          <div className="h-[665px] bg-[#FFFFFF] shadow-[0px_4px_8px_0px_#00000008,_0px_24px_16px_0px_#00000008]"></div>
          <div className="h-[665px] bg-[#FFFFFF] shadow-[0px_4px_8px_0px_#00000008,_0px_24px_16px_0px_#00000008]"></div>
        </div>
        <p className="before-custom-gradient absolute bottom-0 left-1/2 flex w-full -translate-x-1/2 justify-center py-4 text-center text-sm leading-[22px] tracking-tight text-[#ACACAC] before:absolute before:top-1/2 before:left-1/2 before:h-full before:w-full before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-t-2xl before:rounded-b-2xl before:transition-opacity">
          <span className="z-10"> Page 1 of 2</span>
        </p>
      </div>
    </div>
  );
};

const MobileFile = (props: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const { children } = props;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="md:hidden">{children}</DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="flex h-[35rem] flex-col items-start gap-2.5 overflow-auto rounded-xl bg-[#FAFAFA] p-0"
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Mr.John_Adeyemi_Malaria_Test_Result.pdf</DialogTitle>
          <DialogDescription>
            {`This is a sample report. It is not a real report.`}
          </DialogDescription>
        </DialogHeader>
        <div className="flex w-full items-center justify-between py-2 pr-2 pl-4">
          <p className="text-sm leading-[22px] tracking-tight text-[#7C7C7C]">
            Mr.John_Adeyemi_Malaria_Test_Res...
          </p>
          <div className="flex items-center gap-2">
            <div className="p-2.5">
              <Download />
            </div>
            <button className="p-2.5" onClick={() => setOpen(!open)}>
              <Reduce />
            </button>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 pr-[35.5px] pl-[37.5px]">
          <div className="h-[396px] bg-white"></div>
          <div className="h-[396px] bg-white"></div>
        </div>
        <p className="absolute bottom-[4.15px] left-1/2 w-full -translate-x-1/2 py-[2.15px] text-center text-sm leading-[22px] tracking-tight text-[#ACACAC]">
          Page 1 of 2
        </p>
      </DialogContent>
    </Dialog>
  );
};
