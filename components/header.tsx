'use client';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import { Separator } from './ui/separator';
import { MenuNavMobile } from './menu-mobile';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="mx-auto flex min-h-6 w-full grid-flow-col grid-cols-3 items-center justify-between px-[2rem] py-5 md:grid md:py-[30px] xl:max-w-[1400px]">
      <div className="hidden pl-5 md:flex">
        <a
          href="https://adinspiration.com/signup"
          target="_blank"
          className="w-max font-inter text-sm font-semibold text-primary"
          rel="noreferrer"
        >
          <div className="px-[19px] py-[11px] font-medium">Library</div>
        </a>
      </div>

      <a
        href="https://adinspiration.com/"
        target="_blank"
        className="font-inter text-lg font-normal leading-normal text-primary sm:text-[21px] md:text-center"
        rel="noreferrer"
      >
        ADINSPIRATION.COM
      </a>

      <nav className="hidden grow items-center justify-end gap-2 text-end md:flex">
        <a
          target="_blank"
          href={'https://adinspiration.com/signin'}
          className={cn(
            buttonVariants({ variant: 'link' }),
            'px-[19px] py-[11px] font-inter text-sm font-medium leading-normal'
          )}
          rel="noreferrer"
        >
          Sign In
        </a>
        <Separator
          className="hidden h-[25px] w-[1.085px] bg-[#9e9e9e] md:flex"
          orientation="vertical"
        />
        <a
          target="_blank"
          href={'https://adinspiration.com/signup'}
          className={cn(
            buttonVariants(),
            'ml-[26px] h-[38.8px] w-max rounded-full px-[19px] py-[11px]  font-inter text-sm font-medium',
            'hover:bg-[#595959]'
          )}
          rel="noreferrer"
        >
          Sign Up
        </a>
      </nav>

      <button
        className="my-auto md:hidden"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Menu
          className={cn(
            'size-6 transition-transform delay-100 duration-200 group-data-[state=open]:block',
            isOpen ? 'hidden' : 'block'
          )}
          strokeWidth={2}
        />
        <X
          className={cn('size-6', isOpen ? 'block' : 'hidden')}
          strokeWidth={2}
        />
      </button>
      <MenuNavMobile active={isOpen} className="absolute left-0 top-[43px]" />
    </header>
  );
}
