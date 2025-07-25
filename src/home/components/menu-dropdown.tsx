import ChatBubbleQuestion from '@/assets/jsx-icons/chat-bubble-question';
import CheckCircle from '@/assets/jsx-icons/check-circle';
import Lock from '@/assets/jsx-icons/lock';
import LogOut from '@/assets/jsx-icons/log-out';
import Notes from '@/assets/jsx-icons/notes';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import z from 'zod';

const FormSchema = z.object({
  feedback: z.string().min(10, {
    message: 'Feedback must be at least 10 characters.',
  }),
});

const Menu = (props: { children: ReactNode }) => {
  const [success, setSuccess] = useState(false);
  const { children } = props;
  const navigate = useNavigate();

  return (
    <Dialog>
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
            <DialogTrigger asChild>
              <DropdownMenuItem className="group rounded-lg p-2 leading-[22px] -tracking-[0.03em] text-[#636363] focus:bg-[#FAFAFA] focus:text-[#1D1D1D]">
                <ChatBubbleQuestion className="group-focus:hidden" />
                <ChatBubbleQuestion
                  className="hidden group-focus:block"
                  fill="#636363"
                />
                Feedback and support
              </DropdownMenuItem>
            </DialogTrigger>
            <DropdownMenuSeparator className="mx-1 bg-[#1D1D1D0D]" />
            <DropdownMenuItem
              variant="destructive"
              role="button"
              onClick={() => navigate('/auth/login')}
              className="group cursor-pointer rounded-lg px-2 pt-2 pb-2.5 data-[variant=destructive]:text-[#636363] data-[variant=destructive]:focus:bg-[#FE5D5D0D] data-[variant=destructive]:focus:text-[#FE5D5D]"
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
      <DialogContent className="gap-6">
        {!success ? (
          <FeedbackForm setSuccess={setSuccess} />
        ) : (
          <SuccessView setSuccess={setSuccess} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Menu;

const FeedbackForm = (props: {
  setSuccess: Dispatch<SetStateAction<boolean>>;
}) => {
  const { setSuccess } = props;
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      feedback: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    setSuccess(true);
  }

  return (
    <>
      <DialogHeader className="text-start">
        <DialogTitle className="text-base leading-[22px] -tracking-[0.03em] text-[#1D1D1D]">
          Feedback and Support
        </DialogTitle>
        <DialogDescription className="leading-[22px] text-[#7C7C7C]">
          {`We’re here to help. Share your thoughts, questions, or issues.`}
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="feedback"
            render={({ field }) => (
              <FormItem className="gap-3">
                <FormLabel className="leading-[22px] -tracking-[0.03em] text-[#7C7C7C]">
                  <Notes />
                  Enter your feedback
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Share the good, bad, or brilliant!"
                    {...field}
                    className="h-[12.875rem] resize-none rounded-xl border-none bg-[#F9F9F9] p-3 shadow-none placeholder:text-[#ACACAC]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

const SuccessView = (props: {
  setSuccess: Dispatch<SetStateAction<boolean>>;
}) => {
  const { setSuccess } = props;
  return (
    <>
      <div className="flex flex-col items-center gap-4 py-10">
        <div className="w-max rounded-full bg-[#41D7410D] p-4">
          <CheckCircle size="32" />
        </div>
        <DialogHeader className="p-0 sm:text-center">
          <DialogTitle className="text-base leading-[22px] -tracking-[0.03em] text-[#1D1D1D]">
            Thank you for your feedback
          </DialogTitle>
          <DialogDescription className="leading-[22px] -tracking-[0.03em] text-[#7C7C7C]">
            {`We’ve received your message and will get back to you if needed. Your input helps us improve.`}
          </DialogDescription>
        </DialogHeader>
      </div>
      <DialogClose asChild>
        <Button
          onClick={() => setSuccess(false)}
          className="w-full border border-[#1D1D1D1A] bg-white text-[#1D1D1D] hover:bg-white"
        >
          Close
        </Button>
      </DialogClose>
    </>
  );
};
