import Hospital from '@/assets/jsx-icons/hospital';
import Logo from '@/assets/jsx-icons/logo';
import { HOSPITAL_LIST } from '@/auth/login';
import AvatarCustom from '@/components/ui/avatar-custom';
import { Separator } from '@/components/ui/separator';
import { useHospitalStore } from '@/store/select-hospital-control';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MedicalReports from './medical-reports/medical-reports';
import LogoSmall from '@/assets/jsx-icons/logo-small';
import Menu from './components/menu-dropdown';
import { cn, removeParameter } from '@/lib/utils';
import { useNavigate, useSearchParams } from 'react-router';
import MedicalReportDetails from './medical-reports/details';
import ProfileData from './profile-data';

const Home = () => {
  const { selectedHospital } = useHospitalStore();
  const [searchParams] = useSearchParams();
  const paramValue = searchParams.get('report');

  return (
    <section className="flex flex-col items-center">
      <div
        className={cn(
          'w-full px-5 pt-6 pb-3 sm:px-6 sm:pb-2',
          paramValue && 'max-sm:hidden',
        )}
      >
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
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const paramValue = searchParams.get('report');

  return (
    <Tabs defaultValue="medical-reports" className="w-full self-start">
      <div
        className={cn(
          'scrollbar flex w-full justify-center border-b border-[#1E1E1E0D] max-sm:overflow-auto',
          paramValue && 'max-sm:hidden',
        )}
      >
        <TabsList className="w-full px-5 sm:px-6">
          <TabsTrigger
            onClick={() => removeParameter('report', navigate)}
            value="medical-reports"
          >
            Medical reports
          </TabsTrigger>
          <TabsTrigger
            onClick={() => removeParameter('report', navigate)}
            value="profile-data"
          >
            Profile data
          </TabsTrigger>
          <TabsTrigger
            onClick={() => removeParameter('report', navigate)}
            value="more-features"
          >
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
          className={cn('w-full px-5 sm:px-20 md:px-10 lg:px-20')}
        >
          {paramValue ? <MedicalReportDetails /> : <MedicalReports />}
        </TabsContent>
        <TabsContent value="profile-data">
          <ProfileData />
        </TabsContent>
        <TabsContent value="more-features">
          Change your password here.
        </TabsContent>
      </div>
    </Tabs>
  );
};
