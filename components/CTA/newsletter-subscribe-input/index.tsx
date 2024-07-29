'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  email: z
    .string()
    .email({ message: "The 'email' field must be a valid email address." })
});

export function NewsletterSubscribeInput() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ''
    }
  });

  const { control, handleSubmit, reset } = form;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    reset();
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="inline-flex items-center rounded-full bg-white pr-2">
                  <FormControl>
                    <Input
                      className={cn(
                        'h-full rounded-none border-none bg-transparent px-4 py-[14px] focus-visible:ring-0 focus-visible:ring-offset-0',
                        'text-gray-700 text-sm font-medium placeholder:font-inter placeholder:text-xs placeholder:font-normal placeholder:text-neutral-400'
                      )}
                      placeholder="Enter your email address"
                      {...field}
                    />
                  </FormControl>

                  <Button
                    className={cn(
                      'min-h-9 w-max rounded-full bg-blue-500 px-8 py-2 hover:bg-blue-500/90',
                      'font-inter text-sm font-medium text-white'
                    )}
                  >
                    Subscribe
                  </Button>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
