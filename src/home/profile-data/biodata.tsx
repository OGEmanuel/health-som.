import Sparks from '@/assets/jsx-icons/sparks';
import AvatarCustom from '@/components/ui/avatar-custom';
import { ProfileItem } from '.';

const BioData = () => {
  return (
    <div className="flex flex-col gap-8 lg:px-10">
      <Header />
      <Bio />
    </div>
  );
};

export default BioData;

const Header = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <AvatarCustom
          src=""
          alt="Avatar"
          fallback="A"
          className='size-10 border border-[#00000026] bg-[url("/src/assets/images/avatar-pttn.jpg")] bg-cover bg-center sm:size-12'
          fallbackClassName="font-semibold text-xl tracking-[-0.03em] text-white"
        />
        <div className="flex flex-col gap-2">
          <p className="text-xl leading-[100%] font-semibold tracking-tight text-[#1D1D1D] sm:text-2xl">
            Abolaji Olunuga Oladipo
          </p>
          <p className="text-sm leading-[22px] tracking-tight text-[#7C7C7C]">
            Patient ID{' '}
            <span className="font-medium text-[#1D1D1D]">102917</span>
          </p>
        </div>
      </div>
      <div className="dotted-spaced relative px-5 pt-7 pb-5">
        <div className="absolute -top-[11px] left-5 flex items-center gap-2 bg-white">
          <Sparks />
          <p className="text-sm leading-[22px] font-medium tracking-tight text-[#5842B6]">
            Helpful tip
          </p>
        </div>
        <p className="text-sm leading-[22px] font-medium tracking-tight text-[#1D1D1D]">
          Always check in with your healthcare provider to ensure your medical
          information is spot on! This not only guarantees you get the best care
          tailored just for you, but it also empowers you to make smart health
          choices.
        </p>
      </div>
    </div>
  );
};

const Bio = () => {
  return (
    <div>
      <ProfileItem title="Nationality">Nigerian</ProfileItem>
      <ProfileItem title="Age">24 yrs (16th May 1998)</ProfileItem>
      <ProfileItem title="Sex">Male</ProfileItem>
      <ProfileItem title="Email address">boj******@*****.com</ProfileItem>
      <ProfileItem title="Phone number">+234 70********32</ProfileItem>
    </div>
  );
};
