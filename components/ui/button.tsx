import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes } from 'react';
export function Button({ asChild, className, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }) {
 const Comp = asChild ? Slot : 'button';
 return <Comp className={cn('button', className)} {...props} />;
}
