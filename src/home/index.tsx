import Hospital from '@/assets/jsx-icons/hospital';
import Logo from '@/assets/jsx-icons/logo';
import { HOSPITAL_LIST } from '@/auth/login';
import AvatarCustom from '@/components/ui/avatar-custom';
import { Separator } from '@/components/ui/separator';
import { useHospitalStore } from '@/store/select-hospital-control';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MedicalReports from './medical-reports';
import LogoSmall from '@/assets/jsx-icons/logo-small';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { ReactNode } from 'react';
import Lock from '@/assets/jsx-icons/lock';
import ChatBubbleQuestion from '@/assets/jsx-icons/chat-bubble-question';
import LogOut from '@/assets/jsx-icons/log-out';

const Home = () => {
  const { selectedHospital } = useHospitalStore();

  return (
    <section className="flex flex-col items-center">
      <div className="w-full px-5 pt-6 pb-3 sm:px-6 sm:pb-2">
        <div className="flex items-center justify-between">
          <Logo className="max-sm:hidden" />
          <LogoSmall className="sm:hidden" />
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="rounded-full border border-[#1488C71A] bg-[#A9E1FF] p-1.5">
                <Hospital stroke="white" />
              </div>
              <p className="text-sm leading-[22px] font-semibold tracking-tight text-[#1D1D1D] max-sm:hidden">
                {/* St. Peter Micheal Co... */}
                {/* St. Peter Mich... */}
                {(() => {
                  const hospitalName = HOSPITAL_LIST.find(
                    h => h.id === selectedHospital,
                  )?.name;
                  if (!hospitalName) return null;
                  return hospitalName.length > 23
                    ? hospitalName.slice(0, 20) + '...'
                    : hospitalName;
                })()}
              </p>
              <p className="text-sm leading-[22px] font-semibold tracking-tight text-[#1D1D1D] sm:hidden">
                {(() => {
                  const hospitalName = HOSPITAL_LIST.find(
                    h => h.id === selectedHospital,
                  )?.name;
                  if (!hospitalName) return null;
                  return hospitalName.length > 17
                    ? hospitalName.slice(0, 14) + '...'
                    : hospitalName;
                })()}
              </p>
            </div>
            <Separator orientation="vertical" className="!h-6 bg-[#1E1E1E0D]" />
            <Menu>
              <AvatarCustom
                src=""
                alt="Avatar"
                fallback="A"
                className='size-8 border border-[#00000026] bg-[url("/src/assets/images/avatar-pttn.jpg")] bg-cover bg-center'
              />
            </Menu>
          </div>
        </div>
      </div>
      <HomeTabs />
    </section>
  );
};

export default Home;

const HomeTabs = () => {
  return (
    <Tabs defaultValue="medical-reports" className="w-full self-start">
      <div className="scrollbar flex w-full justify-center border-b border-[#1E1E1E0D] max-sm:overflow-auto">
        <TabsList className="w-full px-5 sm:px-6">
          <TabsTrigger value="medical-reports">Medical reports</TabsTrigger>
          <TabsTrigger value="profile-data">Profile data</TabsTrigger>
          <TabsTrigger value="more-features">
            More features
            <span className="rounded-[99px] bg-[#5842B60D] px-1.5 py-0.5 text-xs leading-5 text-[#8474CC]">
              Coming soon
            </span>
          </TabsTrigger>
        </TabsList>
      </div>
      <div className="flex justify-center">
        <TabsContent
          value="medical-reports"
          className="flex w-full gap-6 px-5 sm:px-20"
        >
          <MedicalReports />
        </TabsContent>
        <TabsContent value="profile-data">
          Change your password here.
        </TabsContent>
        <TabsContent value="more-features">
          Change your password here.
        </TabsContent>
      </div>
    </Tabs>
  );
};

const Menu = (props: { children: ReactNode }) => {
  const { children } = props;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="flex w-60 flex-col gap-2 rounded-xl border border-[#1D1D1D0D] p-1 shadow-[0px_16px_16px_0px_#00000008]"
      >
        <div className="rounded-none rounded-t-lg border-b-[3px] border-[#F9F9F9] bg-[#F9F9F9] p-2">
          <p className="text-sm leading-[22px] font-medium -tracking-[0.03em] text-[#1D1D1D]">
            Abolaji Olunuga Oladipo
          </p>
          <p className="text-xs leading-5 -tracking-[0.03em] text-[#7C7C7C]">
            Patient ID: 102917
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <DropdownMenuItem className="group rounded-lg p-2 leading-[22px] -tracking-[0.03em] text-[#636363] focus:bg-[#FAFAFA] focus:text-[#1D1D1D]">
            <Lock className="group-focus:hidden" />
            <Lock className="hidden group-focus:block" stroke="#636363" />
            Change password
          </DropdownMenuItem>
          <DropdownMenuItem className="group rounded-lg p-2 leading-[22px] -tracking-[0.03em] text-[#636363] focus:bg-[#FAFAFA] focus:text-[#1D1D1D]">
            <ChatBubbleQuestion className="group-focus:hidden" />
            <ChatBubbleQuestion
              className="hidden group-focus:block"
              fill="#636363"
            />
            Feedback and support
          </DropdownMenuItem>
          <DropdownMenuSeparator className="mx-1 bg-[#1D1D1D0D]" />
          <DropdownMenuItem
            variant="destructive"
            className="group rounded-lg px-2 pt-2 pb-2.5 data-[variant=destructive]:text-[#636363] data-[variant=destructive]:focus:bg-[#FE5D5D0D] data-[variant=destructive]:focus:text-[#FE5D5D]"
          >
            <LogOut className="group-focus:hidden" />
            <LogOut className="hidden group-focus:block" fill="#FE5D5D" />
            Log out
          </DropdownMenuItem>
          <span className="px-2 py-1 text-xs leading-5 -tracking-[0.03em] text-[#7C7C7C]">
            Version V1.0
          </span>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
