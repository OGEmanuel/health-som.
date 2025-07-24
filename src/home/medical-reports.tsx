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
    </section>
  );
};

export default MedicalReports;

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
      <DialogContent className="gap-6 rounded-3xl border-none p-5 shadow-[0px_40px_40px_0px_#00000008,_0px_16px_24px_0px_#00000008] max-sm:text-start sm:max-w-[30rem] sm:p-8 [&>button]:hidden">
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
            <Button className="h-[42px] w-full cursor-pointer rounded-xl bg-[#5842B6] hover:bg-[#5842B6]/80">
              Change password
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
