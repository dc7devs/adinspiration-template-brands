import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Page() {
  return (
    <div className="flex h-screen">
      <div className="flex basis-full md:basis-2/4">
        <div className="mx-4 mt-9 flex size-auto w-full flex-col gap-8 md:my-auto lg:mx-auto lg:w-[416px] lg:max-w-[416px]">
          <img
            className="h-7"
            src="/assets/viral-tok-logo.svg"
            alt="logotipo"
          />

          <div className="">
            <h4 className="text-left font-inter text-lg font-semibold leading-7">
              Sign In
            </h4>
            <Button
              variant={'outline'}
              className="mt-6 h-10 w-full rounded-[10px] border border-gray-300 bg-white py-4 shadow-btn-secoundary hover:bg-white hover:shadow-btn-secoundary-hovered focus:shadow-btn-secoundary-focused focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <img
                className="mr-3 size-5"
                src="/assets/google-social-icon.svg"
              />
              Sign in with Google
            </Button>

            <Separator />

            <form className="mb-6">
              <Label
                htmlFor="email"
                className="mb-2 font-inter text-sm font-medium leading-[22px] text-gray-700"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                className="h-10 rounded-[10px] px-1.5 py-2 focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Write you e-mail"
              />

              <Label
                htmlFor="pass"
                className="mb-2 mt-4 flex items-center justify-between"
              >
                <span className="font-inter text-sm font-medium leading-[22px] text-gray-700">
                  Password
                </span>
                <a
                  href="#"
                  className="font-inter text-sm font-medium leading-[22px] text-primary-600"
                >
                  Forgot Password?
                </a>
              </Label>
              <Input
                id="pass"
                type="password"
                className="h-10 rounded-[10px] px-1.5 py-2 focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="your passowrd"
              />

              <Button
                variant={'default'}
                className="border-btn-primary focus:border-btn-primary-focus active:border-btn-primary-focus mt-4 h-10 w-full rounded-[10px] border border-white/20 bg-[#E53724] py-4 shadow-btn-primary hover:bg-[#CE2E1C] focus:shadow-btn-primary-focus focus-visible:ring-0 focus-visible:ring-offset-0 active:shadow-btn-primary-focus"
              >
                Sign In
              </Button>
            </form>

            <p className="font-inter text-sm font-normal leading-[22px] text-gray-700">
              Don’t have any account?{' '}
              <a
                href="#"
                className="font-inter text-sm font-medium leading-[22px] text-primary-600"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="hidden items-center border-l border-solid border-l-[#7b878e] bg-[#EFF0F0] md:flex md:basis-2/4">
        <img
          className="md:size-auto md:object-fill lg:size-full lg:object-contain"
          src="/assets/pic.svg"
        />
      </div>
    </div>
  );
}

const Separator = () => (
  <div className="my-6 flex w-full items-center gap-2">
    <span className="grow border border-solid border-[#CDD5DB]" />
    <span className="font-inter text-sm font-medium leading-[22px] text-[#7B878E]">
      Or
    </span>
    <span className="grow border border-solid border-[#CDD5DB]" />
  </div>
);
