import { Separator } from './ui/separator';

export function Footer() {
  return (
    <footer className="mx-auto w-full bg-[#F6F6F6] px-5 md:p-0">
      <div className="mb-9 flex flex-col px-[2rem] pb-[40px] pt-[70px] lg:mx-auto lg:max-w-[1400px]">
        <div className="mb-[36px] flex w-full flex-col gap-10  md:flex-row md:justify-between ">
          <div>
            <p className="mb-3 font-inter text-2xl font-medium text-primary md:text-5xl">
              <a href="https://adinspiration.com/">ADINSPIRATION.COM</a>
            </p>
            <p className="m mx-1.5 my-2.5 font-inter text-lg font-normal text-gray">
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
        <hr color="#ebebed" />
        <div className="mx-auto mt-5 inline-flex w-full items-end justify-between">
          <div className="inline-flex items-center justify-center font-inter text-sm font-normal leading-[22px] text-primary">
            <a
              href="https://adinspiration.com/"
              className="hover-underline-animation"
            >
              Adinspiration {new Date().getFullYear()}
            </a>
            <Separator
              className="mx-2 h-[20px] w-[1px] bg-[#9e9e9e] md:flex"
              orientation="vertical"
            />
            <a
              href="mailto:hello@adinspiration.com"
              className="hover-underline-animation"
            >
              hello@adinspiration.com
            </a>
          </div>
          <div className="inline-flex items-center justify-center">
            <a
              href="https://adinspiration.com/privacy"
              target="_blank"
              className="hover-underline-animation font-inter text-sm font-normal leading-[22px] text-primary"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
            <Separator
              className="mx-2 h-[20px] w-[1.5px] bg-[#9e9e9e] md:flex"
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
