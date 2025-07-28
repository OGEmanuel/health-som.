import type { ReactNode } from 'react';
import BioData from './biodata';
import Records from './records';

const ProfileData = () => {
  return (
    <section className="flex gap-8 px-5 max-sm:flex-col max-sm:pb-[52px] sm:gap-10 sm:px-10 lg:gap-20 lg:px-20 [&>div]:basis-full">
      <BioData />
      <Records />
      <p className="text-sm leading-[22px] font-medium tracking-tight text-[#7C7C7C] sm:hidden">
        <span className="text-[#5842B6]">*</span>
        <span className="text-[#1D1D1D]">Important note:</span> All information
        was provided by the hospital or healthcare center. If you need to change
        or update any information, please contact your hospital or healthcare
        center.
      </p>
    </section>
  );
};

export default ProfileData;

export const ProfileItem = (props: { title: string; children: ReactNode }) => {
  const { title, children } = props;
  return (
    <div className="dotted-spaced-bottom flex items-center justify-between py-4 text-sm [&>p]:basis-full [&>p]:leading-[22px] [&>p]:tracking-tight">
      <p className="text-[#7C7C7C]">{title}</p>
      <p className="flex items-center gap-2 font-medium text-[#1D1D1D] [&>span]:text-xs [&>span]:leading-5 [&>span]:font-normal [&>span]:tracking-tight [&>span]:text-[#8474CC]">
        {children}
      </p>
    </div>
  );
};
