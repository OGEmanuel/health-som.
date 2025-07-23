import CheckCircle from '@/assets/jsx-icons/check-circle';
import Eye from '@/assets/jsx-icons/eye';
import EyeClosed from '@/assets/jsx-icons/eye-closed';
import Hospital from '@/assets/jsx-icons/hospital';
import Logo from '@/assets/jsx-icons/logo';
import LongArrowRightDown from '@/assets/jsx-icons/long-arrow-right-down';
import ProfileCircle from '@/assets/jsx-icons/profile-circle';
import Search from '@/assets/jsx-icons/search';
import XmarkCircle from '@/assets/jsx-icons/xmark-circle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useHospitalStore } from '@/store/select-hospital-control';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
  const { selectedHospital, setSelectedHospital } = useHospitalStore();
  const year = new Date().getFullYear();

  return (
    <section className="flex h-screen min-h-screen flex-col items-center justify-center pb-8 max-sm:px-5 sm:pb-10">
      <div className="flex h-full w-full flex-col items-center justify-end gap-12 sm:max-w-[25rem] sm:gap-[4.5rem]">
        <Logo />
        <div className="flex flex-col gap-6">
          <div className="flex w-full flex-col gap-3 text-center">
            <h1 className="text-2xl leading-[100%] font-semibold -tracking-[0.03em]">
              {selectedHospital
                ? `What’s your patient ID?`
                : `Let’s find your hospital`}
            </h1>
            <p className="text-sm leading-[22px] tracking-tight text-[#7C7C7C]">
              {selectedHospital
                ? 'Please provide your unique patient ID to safely retrieve your medical records.'
                : 'Please enter the name of the hospital where your medical records are stored.'}
            </p>
          </div>
          <InputDetails
            setSelectedHospital={setSelectedHospital}
            selectedHospital={selectedHospital}
          />
        </div>
      </div>
      <div
        className={cn(
          'flex h-full w-full flex-3/4 flex-col items-center justify-end gap-2 sm:max-w-[17.5rem] sm:flex-2/3 2xl:flex-3/4',
          selectedHospital && 'max-sm:flex-1/3',
        )}
      >
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

export const HOSPITAL_LIST = [
  {
    id: 1,
    name: 'St. Peter Micheal College Hosipital',
    address: '2, Ayedun street, Olowora, Lagos state',
  },
  {
    id: 2,
    name: 'Serenity Care Hospital',
    address: '12, Pine Road, Olowora, Lagos state',
  },
  {
    id: 3,
    name: 'Silver Oak Hospital',
    address: '78, Oak Street, Olowora, Lagos state',
  },
  {
    id: 4,
    name: 'Starlight Wellness Center',
    address: '33, Cedar Lane, Olowora, Lagos state',
  },
  {
    id: 5,
    name: 'Sapphire Health Clinic',
    address: '2, Ayedun street, Olowora, Lagos state',
  },
];

const InputDetails = (props: {
  selectedHospital: number | null;
  setSelectedHospital: (id: number | null) => void;
}) => {
  const { selectedHospital, setSelectedHospital } = props;

  return (
    <section className="flex flex-col gap-6">
      {selectedHospital ? (
        <SelectedHospital
          setSelectedHospital={setSelectedHospital}
          selectedHospital={selectedHospital}
        />
      ) : (
        <SearchBox
          setSelectedHospital={setSelectedHospital}
          selectedHospital={selectedHospital}
        />
      )}
      {selectedHospital && <IdInput />}
    </section>
  );
};

const SearchBox = (props: {
  setSelectedHospital: (id: number | null) => void;
  selectedHospital: number | null;
}) => {
  const { setSelectedHospital, selectedHospital } = props;
  const [searchInput, setSearchInput] = useState('');

  const filteredHospitalList =
    searchInput === ''
      ? HOSPITAL_LIST
      : HOSPITAL_LIST.filter(hospital =>
          hospital.name.toLowerCase().includes(searchInput.toLowerCase()),
        );

  return (
    <div className="relative w-full">
      <Input
        type="search"
        className="focus-visible:border-ring peer h-12 rounded-xl border-none bg-[#F9F9F9] pl-[2.625rem] text-sm leading-[22px] font-semibold tracking-tight text-[#1D1D1D] shadow-none placeholder:font-normal placeholder:text-[#ACACAC] focus-visible:ring-[2px] focus-visible:ring-[#25AFF9]"
        placeholder="Search hospital.."
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
      />
      <button
        aria-label="clear"
        onClick={() => setSearchInput('')}
        className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer peer-placeholder-shown:hidden"
      >
        <XmarkCircle fill="#D9D9D9" />
      </button>
      <div
        className={cn(
          'absolute mt-2 flex h-max max-h-[17.5rem] w-full flex-col gap-0.5 overflow-auto rounded-xl border border-[#1D1D1D0D] bg-white p-1 opacity-0 shadow-[0px_16px_16px_0px_#00000008] transition-opacity peer-focus-visible:pointer-events-auto peer-focus-visible:z-auto peer-focus-visible:opacity-100',
          selectedHospital && 'pointer-events-none -z-10',
        )}
      >
        {filteredHospitalList.length > 0 ? (
          filteredHospitalList.map(list => (
            <div
              key={list.id}
              role="button"
              className="flex cursor-pointer gap-2 rounded-lg p-2 transition-colors hover:bg-[#FAFAFA]"
              onClick={() => setSelectedHospital(list.id)}
            >
              <Hospital />
              <div className="text-sm">
                <p className="leading-[22px] font-medium tracking-tight text-[#1D1D1D]">
                  {list.name}
                </p>
                <p className="leading-[22px] tracking-tight text-[#7C7C7C]">
                  {list.address}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex cursor-pointer gap-2 rounded-lg p-2 transition-colors hover:bg-[#FAFAFA]">
            <Hospital className="shrink-0" />
            <div className="text-sm">
              <p className="leading-[22px] font-medium tracking-tight text-[#1D1D1D]">
                No hospitals found
              </p>
              <p className="leading-[22px] tracking-tight text-[#7C7C7C]">
                We are actively expanding our network of hospitals to ensure you
                have convenient access to your medical services.
              </p>
            </div>
          </div>
        )}
      </div>
      <Search className="absolute top-1/2 left-3 -translate-y-1/2" />
    </div>
  );
};

const SelectedHospital = (props: {
  setSelectedHospital: (id: number | null) => void;
  selectedHospital: number | null;
}) => {
  const { setSelectedHospital, selectedHospital } = props;
  return (
    <div
      role="button"
      onClick={() => setSelectedHospital(null)}
      className="flex cursor-pointer items-center gap-2 rounded-2xl border border-[#1E1E1E1A] px-3 py-3 shadow-[0px_2px_4px_0px_#00000008]"
    >
      <div className="rounded-full border border-[#1488C71A] bg-[#A9E1FF] p-2.5">
        <Hospital stroke="white" />
      </div>
      <div>
        <p className="text-sm leading-[22px] font-semibold tracking-tight text-[#1D1D1D]">
          {
            HOSPITAL_LIST.find(hospital => hospital.id === selectedHospital)
              ?.name
          }
        </p>

        <p className="text-sm leading-[22px] tracking-tight text-[#7C7C7C]">
          {
            HOSPITAL_LIST.find(hospital => hospital.id === selectedHospital)
              ?.address
          }
        </p>
      </div>
    </div>
  );
};

const IdInput = () => {
  const [idInput, setIdInput] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Input
            className={cn(
              'focus-visible:border-ring h-12 rounded-xl border-none bg-[#F9F9F9] pl-[2.625rem] text-sm leading-[22px] font-semibold tracking-tight text-[#1D1D1D] shadow-none placeholder:font-medium placeholder:text-[#ACACAC] focus-visible:ring-[2px] focus-visible:ring-[#5842B6]',
              idInput.length === 8 &&
                idInput !== '20194040' &&
                'focus-visible:ring-[#FE5D5D]',
            )}
            max={8}
            placeholder="Enter your ID"
            value={idInput}
            onChange={e => setIdInput(e.target.value)}
          />
          <ProfileCircle
            className="absolute top-1/2 left-3 -translate-y-1/2"
            stroke={idInput.length === 8 ? '#7C7C7C' : '#ACACAC'}
          />
          {idInput.length === 8 && idInput !== '20194040' && (
            <XmarkCircle className="absolute top-1/2 right-3 -translate-y-1/2" />
          )}
          {idInput === '20194040' && (
            <CheckCircle className="absolute top-1/2 right-3 -translate-y-1/2" />
          )}
        </div>
        {idInput === '20194040' && !showPasswordInput && (
          <p className="text-center text-sm leading-[22px] font-medium tracking-tight text-[#1E1E1E]">
            A temporary password has been sent to the email address
            bo*****@*****.com for you to access your profile.
          </p>
        )}
        {showPasswordInput && (
          <div className="relative">
            <Input
              className={cn(
                'focus-visible:border-ring h-12 rounded-xl border-none bg-[#F9F9F9] pl-[2.625rem] text-sm leading-[22px] font-semibold tracking-tight text-[#1D1D1D] shadow-none placeholder:font-medium placeholder:text-[#ACACAC] focus-visible:ring-[2px] focus-visible:ring-[#5842B6]',
                passwordInput.length >= 8 &&
                  passwordInput !== 'abcdefgh' &&
                  'focus-visible:ring-[#FE5D5D]',
              )}
              max={8}
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter password"
              value={passwordInput}
              onChange={e => setPasswordInput(e.target.value)}
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? <EyeClosed /> : <Eye />}
            </button>
          </div>
        )}
      </div>
      {idInput === '20194040' && !showPasswordInput && (
        <Button
          onClick={() => setShowPasswordInput(!showPasswordInput)}
          className="h-[42px] cursor-pointer rounded-xl bg-[#5842B6] hover:bg-[#5842B6]/80"
        >
          Enter password
          <LongArrowRightDown />
        </Button>
      )}
      {passwordInput.length > 1 && (
        <Button
          // onClick={() => setShowPasswordInput(!showPasswordInput)}
          onClick={() => navigate('/')}
          className="h-[42px] cursor-pointer rounded-xl bg-[#5842B6] hover:bg-[#5842B6]/80"
        >
          Open profile
          <LongArrowRightDown />
        </Button>
      )}
    </div>
  );
};
