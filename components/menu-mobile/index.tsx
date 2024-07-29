import { cn } from '@/lib/utils';

export function MenuNavMobile({
  className,
  active
}: {
  className?: string;
  active: boolean;
}) {
  return (
    <nav
      className={cn(
        'flex h-auto w-full flex-col overflow-auto border-none bg-transparent px-8 py-4',
        'flex w-full flex-col space-y-4 text-sm font-semibold text-[#4B5768]',
        className,
        active ? 'flex md:hidden' : 'hidden md:hidden'
      )}
    >
      <a
        target="_blank"
        href={'https://google.com'}
        className={'font-inter text-sm font-semibold'}
        rel="noreferrer"
      >
        Sign In
      </a>
      <a
        target="_blank"
        href={'https://google.com'}
        className={'w-max font-inter text-sm font-semibold'}
        rel="noreferrer"
      >
        Sign Up
      </a>
    </nav>
  );
}
