import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

const AvatarCustom = (props: {
  src: string | any;
  alt: string;
  fallback: string;
  className?: string;
  fallbackClassName?: string;
}) => {
  return (
    <div className="relative inline-block">
      <Avatar className={cn(props.className)}>
        <AvatarImage
          src={props.src}
          alt={props.alt}
          className="object-cover object-top"
        />
        <AvatarFallback
          className={cn(
            'leading-[100px] font-semibold tracking-[-0.03em] text-white',
            props.fallbackClassName,
          )}
        >
          {props.fallback}
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default AvatarCustom;
