import Download from '@/assets/jsx-icons/download';
import { Separator } from '@/components/ui/separator';
import firstReport from '@/assets/images/report-a1.png';
import Enlarge from '@/assets/jsx-icons/enlarge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState, type ReactNode } from 'react';
import Reduce from '@/assets/jsx-icons/reduce';

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
      <div className="flex gap-12 max-md:flex-col max-md:gap-6">
        <MobileFile>
          <div className="flex items-center overflow-hidden rounded-xl bg-[#F9F9F9] pr-2 md:hidden">
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
  return (
    <div className="basis-full">
      <p className="relative px-10 text-sm leading-6 font-medium tracking-tight text-[#7C7C7C] max-md:py-12 md:pr-0 md:pl-8 md:before:absolute md:before:top-0 md:before:left-0 md:before:z-20 md:before:h-full md:before:w-0.5 md:before:rounded-lg md:before:bg-[#5842B6] md:after:absolute md:after:top-0 md:after:left-0 md:after:z-10 md:after:h-full md:after:w-2 md:after:bg-[#F5F3FC]">
        Analyzing report...
      </p>
    </div>
  );
};

const ReportFile = () => {
  return (
    <div className="basis-full rounded-2xl bg-[#F9F9F9] max-md:hidden">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <p className="text-sm leading-[22px] tracking-tight text-[#7C7C7C]">
            Mr.John_Adeyemi_Malaria_Test_Result.pdf
          </p>
          <span className="block size-1 rounded-full bg-[#ACACAC]"></span>
          <p className="text-sm leading-[22px] tracking-tight text-[#ACACAC]">
            20.13MB
          </p>
        </div>
        <div className="p-1">
          <Download />
        </div>
      </div>
      <div className="flex flex-col gap-1 px-[4.5rem] pb-4">
        <div className="h-[665px] bg-[#FFFFFF] shadow-[0px_4px_8px_0px_#00000008,_0px_24px_16px_0px_#00000008]"></div>
        <p className="text-center text-sm leading-[22px] tracking-tight text-[#ACACAC]">
          Page 1 of 2
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
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="flex h-[35rem] flex-col items-start gap-2.5 rounded-xl bg-[#FAFAFA] p-0"
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
        <div className="w-full pr-[35.5px] pl-[37.5px]">
          <div className="h-[396px] bg-white"></div>
        </div>
        <p className="absolute bottom-[4.15px] left-1/2 -translate-x-1/2 text-sm leading-[22px] tracking-tight text-[#ACACAC]">
          Page 1 of 2
        </p>
      </DialogContent>
    </Dialog>
  );
};
