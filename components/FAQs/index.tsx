import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { ComponentProps, ReactNode } from 'react';

export function FAQs({
  items
}: {
  items: Array<{ title: string; content: ReactNode }>;
}) {
  return (
    <Accordion type="multiple" className="w-full space-y-5">
      {items.map(({ title, content }, index: number) => (
        <AccorginCustomItem
          key={index}
          value={`${title}-${index}`}
          title={title}
        >
          {content}
        </AccorginCustomItem>
      ))}
    </Accordion>
  );
}

interface CustomItemProps extends ComponentProps<typeof AccordionItem> {
  title: string;
  children: ReactNode;
}

const AccorginCustomItem = ({ title, children, ...props }: CustomItemProps) => {
  return (
    <AccordionItem
      className="gap-4 rounded-[8px] border-0 px-5 py-4 ring-1 ring-neutral-100  [&[data-state=open]]:bg-blue-10"
      {...props}
    >
      <AccordionTrigger className="p-0 text-start font-inter text-base font-semibold leading-7 text-primary hover:no-underline md:text-xl">
        {title}
      </AccordionTrigger>
      <AccordionContent className="mt-4 p-0 font-inter text-base font-normal text-neutral-600">
        {children}
      </AccordionContent>
    </AccordionItem>
  );
};
