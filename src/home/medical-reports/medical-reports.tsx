import Sheet from '@/assets/images/sheet';
import Eye from '@/assets/jsx-icons/eye';
import EyeClosed from '@/assets/jsx-icons/eye-closed';
import Lock from '@/assets/jsx-icons/lock';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { useReducer, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Check from '@/assets/jsx-icons/check';
import firstReport from '@/assets/images/report-a1.png';
import secondReport from '@/assets/images/report-b2.png';
import thirdReport from '@/assets/images/report-b3.png';
import ButtonParams from '../components/add-params';

type Report = {
  id: number;
  title: string;
  image: string;
  status: 'ready' | 'pending' | 'unavailable';
  date: string;
};

const REPORTS: Report[] = [
  {
    id: 1,
    title: 'Thorough Examination of Dengue Fever Outcomes',
    image: firstReport,
    status: 'ready',
    date: 'January 15, 2025',
  },
  {
    id: 2,
    title: 'Extensive Summary of Cholera Test Results',
    image: secondReport,
    status: 'pending',
    date: 'December 25, 2024',
  },
  {
    id: 3,
    title: 'Insights into Tuberculosis Diagnostic Findings',
    image: thirdReport,
    date: 'November 10, 2024',
    status: 'unavailable',
  },
  {
    id: 4,
    title: 'Comprehensive Analysis of Hepatitis Test Outcomes',
    image: firstReport,
    date: 'October 11, 2024',
    status: 'pending',
  },
  {
    id: 5,
    title: 'Overview of COVID-19 Evaluation Results',
    image: firstReport,
    date: 'January 15, 2025',
    status: 'pending',
  },
];

const MedicalReports = () => {
  return (
    <section className="flex w-full max-w-[1032px] flex-col gap-8 self-start">
      <ChangePassword />
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
      {REPORTS.length > 0 ? (
        <div className="grid grid-cols-2 gap-x-5 gap-y-[26px] max-sm:pb-[4.3125rem] sm:gap-x-6 sm:gap-y-8 md:grid-cols-3 lg:grid-cols-4">
          {REPORTS.map(report => (
            <ReportList key={report.id} report={report} />
          ))}
        </div>
      ) : (
        <EmptyReport />
      )}
    </section>
  );
};

export default MedicalReports;

const ReportList = (props: { report: Report }) => {
  const { report } = props;

  const statusColor = {
    ready: 'bg-[#41D741]',
    pending: 'bg-[#F1943A]',
    unavailable: 'bg-[#FE5D5D]',
  };

  return (
    <ButtonParams name="report" value={report.id.toString()}>
      <div className="flex flex-col gap-3">
        <div className="relative h-[9.25rem] overflow-hidden rounded-xl border border-transparent bg-[#F9F9F9F9] hover:border-[#5842B6] hover:shadow-[0px_0px_0px_2px_#FFFFFF_inset]">
          <div className="custom-gradient absolute bottom-0 z-10 h-16 w-full"></div>
          <div className="absolute top-9 left-1/2 w-[127.9px] -translate-x-1/2 shadow-[0px_8px_24px_0px_#0000000D]">
            <img
              src={report.image}
              alt={report.id.toString()}
              className="w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 text-start">
          <p className="line-clamp-2 text-sm leading-[22px] font-semibold -tracking-[0.04em] text-ellipsis text-[#1D1D1D] sm:line-clamp-1">
            {report.title}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-sm leading-[22px] tracking-tight text-[#7C7C7C]">
              {report.date}
            </p>
            <span
              className={cn('h-1 w-4 rounded', statusColor[report.status])}
            ></span>
          </div>
        </div>
      </div>
    </ButtonParams>
  );
};

const EmptyReport = () => {
  return (
    <div className="flex justify-center max-sm:flex-col sm:items-center sm:gap-4 sm:pt-[6.25rem]">
      <div className="h-[7.375rem] w-24 sm:h-[164px] sm:w-[140px]">
        <Sheet className="max-sm:hidden" />
        <Sheet width="96" height="118" className="sm:hidden" />
      </div>
      <div className="flex w-full max-w-[324px] flex-col gap-2">
        <p className="leading-[22px] font-semibold tracking-tight text-[#1D1D1D]">
          Waiting on your first report
        </p>
        <p className="text-sm leading-[22px] tracking-tight text-[#7C7C7C]">
          Your medical reports will be available here once shared by your
          healthcare provider.
        </p>
      </div>
    </div>
  );
};

const FormSchema = z.object({
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters long.',
  }),
  newPassword: z.string().min(8, {
    message: 'Password must be at least 8 characters long.',
  }),
});

type PasswordViewState = {
  password: string;
  newPassword: string;
};

type Action = {
  type: keyof PasswordViewState;
};

export const passwordViewReducer = (
  state: PasswordViewState,
  action: Action,
): PasswordViewState => {
  const currentType = state[action.type];
  return {
    ...state,
    [action.type]: currentType === 'password' ? 'text' : 'password',
  };
};

const ChangePassword = () => {
  const [open, setOpen] = useState(true);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password: '',
      newPassword: '',
    },
  });

  const [passwordView, dispatch] = useReducer(passwordViewReducer, {
    password: 'password',
    newPassword: 'password',
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
    setOpen(false);
  };
  return (
    <Dialog open={open}>
      <DialogContent className="gap-6" showCloseButton={false}>
        <DialogHeader className="max-sm:text-start">
          <DialogTitle className="text-base leading-[22px] tracking-tight">
            Change your password
          </DialogTitle>
          <DialogDescription className="leading-[22px] tracking-tight text-[#7C7C7C]">
            Keep your account secure by updating your password.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        className={cn(
                          'focus-visible:border-ring peer h-12 rounded-xl border-none bg-[#F9F9F9] pl-[2.625rem] text-sm leading-[22px] font-semibold tracking-tight text-[#1D1D1D] shadow-none placeholder:font-normal placeholder:text-[#ACACAC] focus-visible:ring-[2px] focus-visible:ring-[#5842B6]',
                          form.formState.errors.password &&
                            'focus-visible:ring-[#FE5D5D]',
                        )}
                        max={8}
                        type={passwordView.password}
                        placeholder="Current password"
                        {...field}
                      />
                      <button
                        onClick={() => dispatch({ type: 'password' })}
                        className="absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer peer-placeholder-shown:hidden"
                      >
                        {passwordView.password === 'password' ? (
                          <Eye />
                        ) : (
                          <EyeClosed />
                        )}
                      </button>
                      <div className="absolute top-1/2 left-3 hidden -translate-y-1/2 cursor-pointer peer-placeholder-shown:block">
                        <Lock />
                      </div>
                    </div>
                  </FormControl>
                  <FormDescription
                    className={cn(
                      'leading-[22px] font-medium tracking-tight text-[#7C7C7C]',
                      form.formState.errors.password && 'text-[#FE5D5D]',
                    )}
                  >
                    <span
                      className={cn(
                        'text-[#5842B6]',
                        form.formState.errors.password && 'text-[#FE5D5D]',
                      )}
                    >
                      *
                    </span>
                    Enter the temporary password used to access your profile.
                  </FormDescription>
                </FormItem>
              )}
            />
            <div className="custom-dashed-border"></div>
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        className={cn(
                          'focus-visible:border-ring peer h-12 rounded-xl border-none bg-[#F9F9F9] pl-[2.625rem] text-sm leading-[22px] font-semibold tracking-tight text-[#1D1D1D] shadow-none placeholder:font-normal placeholder:text-[#ACACAC] focus-visible:ring-[2px] focus-visible:ring-[#5842B6]',
                          form.formState.errors.newPassword &&
                            'focus-visible:ring-[#FE5D5D]',
                        )}
                        max={8}
                        type={passwordView.newPassword}
                        placeholder="New password"
                        {...field}
                      />
                      <button
                        onClick={() => dispatch({ type: 'newPassword' })}
                        className="absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer peer-placeholder-shown:hidden"
                      >
                        {passwordView.newPassword === 'password' ? (
                          <Eye />
                        ) : (
                          <EyeClosed />
                        )}
                      </button>
                      <div className="absolute top-1/2 left-3 hidden -translate-y-1/2 cursor-pointer peer-placeholder-shown:block">
                        <Lock />
                      </div>
                    </div>
                  </FormControl>
                  <FormDescription
                    className={cn(
                      'flex flex-col gap-3 leading-[22px] font-medium tracking-tight text-[#1D1D1D]',
                      form.formState.errors.newPassword && 'text-[#FE5D5D]',
                    )}
                  >
                    <span>
                      <span
                        className={cn(
                          'text-[#5842B6]',
                          form.formState.errors.newPassword && 'text-[#FE5D5D]',
                        )}
                      >
                        *
                      </span>
                      Your new password should:
                    </span>
                    <p className="flex flex-col gap-3">
                      <span className="flex items-center gap-3">
                        {form.getValues('newPassword').length >= 8 ? (
                          <Check />
                        ) : (
                          <Separator
                            className={cn(
                              '!h-[1.25px] !w-2.5 bg-[#D9D9D9]',
                              form.formState.errors.newPassword &&
                                'bg-[#FE5D5D]',
                            )}
                          />
                        )}
                        Be at least 8 characters long
                      </span>
                      <span className="flex items-center gap-3">
                        {form.getValues('newPassword').match(/[a-zA-Z]/g) &&
                        form.getValues('newPassword').match(/[0-9]/g) ? (
                          <Check />
                        ) : (
                          <Separator
                            className={cn(
                              '!h-[1.25px] !w-2.5 bg-[#D9D9D9]',
                              form.formState.errors.newPassword &&
                                'bg-[#FE5D5D]',
                            )}
                          />
                        )}
                        Include a mix of letters and numbers
                      </span>
                    </p>
                  </FormDescription>
                </FormItem>
              )}
            />
            <Button>Change password</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
