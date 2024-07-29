export function Footer() {
  return (
    <footer className="mx-auto mt-20 flex min-h-6 w-full flex-col bg-[#F6F6F6] px-5 lg:items-center 2xl:max-w-screen-2xl">
      <div className="mt-10 flex flex-col gap-10 md:mt-[70px] md:flex-row md:justify-between lg:mx-auto lg:w-4/5">
        <div>
          <p className="mb-3 font-inter text-2xl font-medium text-primary md:text-5xl">
            <a href="https://adinspiration.com/">ADINSPIRATION</a>
          </p>
          <p className="font-inter text-lg font-normal text-gray">
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
                href={'#'}
              >
                Suport
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mb-10 mt-14 inline-flex h-14 w-full items-end justify-between border-t border-black/10 lg:w-4/5">
        <div className="font-inter text-sm font-normal leading-[22px] text-primary">
          <a href="#" className="hover-underline-animation">
            Adinspiration
          </a>{' '}
          | Copyright {new Date().getFullYear()}
        </div>
        <div>
          <a
            href="#"
            className="hover-underline-animation font-inter text-sm font-normal leading-[22px] text-primary"
          >
            Privacy Policy
          </a>{' '}
          |{' '}
          <a
            href="#"
            className="hover-underline-animation font-inter text-sm font-normal leading-[22px] text-primary"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
