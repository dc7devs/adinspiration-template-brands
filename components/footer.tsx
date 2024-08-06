import { Separator } from './ui/separator';

export function Footer() {
  return (
    <footer className="mx-auto w-full px-[1rem] md:bg-[#F6F6F6] md:p-0">
      <div className="flex flex-col pb-[80px] pt-[45px] md:px-[2rem] md:pb-[40px] lg:mx-auto lg:mb-9 lg:max-w-[1400px] lg:pt-[70px]">
        <div className="flex w-full flex-col gap-[2rem] md:mb-[36px] md:flex-row md:justify-between md:gap-10 ">
          <div>
            <p className="mb-[15px] font-inter text-[1.5rem] font-medium text-primary md:mb-3 md:text-5xl">
              <a href="https://adinspiration.com/">ADINSPIRATION.COM</a>
            </p>
            <p className="font-inter text-[19px] font-normal text-gray md:my-2.5 md:text-lg lg:mx-1.5">
              Discover your competitors’ winning ads
            </p>
          </div>

          <div className="md:w-40">
            <p className="mb-4 text-base font-medium text-primary">Menu</p>
            <ul className="space-y-2">
              <li>
                <a
                  className="font-inter text-sm font-normal text-gray"
                  href={'#'}
                >
                  Library
                </a>
              </li>
              <li>
                <a
                  className="font-inter text-sm font-normal text-gray"
                  href={'mailto:hello@adinspiration.com'}
                >
                  Suport
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="hidden md:block" color="#ebebed" />

        <div className="mx-auto mt-7 flex w-full flex-wrap items-start justify-stretch gap-5 md:mt-5 md:items-end md:justify-between">
          <div className="hidden items-center justify-center font-inter text-sm font-normal leading-[22px] text-primary md:inline-flex">
            <a
              href="https://adinspiration.com/"
              className="hover-underline-animation "
            >
              Adinspiration {new Date().getFullYear()}
            </a>
            <Separator
              className="mx-2 h-[20px] w-[1px] bg-[#9e9e9e]"
              orientation="vertical"
            />
            <a
              href="mailto:hello@adinspiration.com"
              className="hover-underline-animation"
            >
              hello@adinspiration.com
            </a>
          </div>
          <div className="flex w-full items-center justify-between md:w-auto md:justify-center">
            <a
              href="https://adinspiration.com/privacy"
              target="_blank"
              className="hover-underline-animation font-inter text-sm font-normal leading-[22px] text-primary"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
            <Separator
              className="mx-2 hidden h-[20px] w-[1.5px] bg-[#9e9e9e] md:flex"
              orientation="vertical"
            />
            <a
              href="https://adinspiration.com/terms"
              target="_blank"
              className="hover-underline-animation font-inter text-sm font-normal leading-[22px] text-primary"
              rel="noreferrer"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
