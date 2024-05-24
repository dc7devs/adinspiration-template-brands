import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Page() {
    return (
        <div className="h-screen flex">
            <div className="basis-full  md:basis-2/4 flex">
                <div className="mt-9 mx-4 md:my-auto lg:mx-auto w-full lg:max-w-[416px] lg:w-[416px] size-auto flex flex-col gap-8">
                    <img
                        className="h-7"
                        src="/assets/viral-tok-logo.svg" alt="logotipo"
                    />

                    <div className="">
                        <h4 className="text-left font-inter font-semibold text-lg leading-7">Sign In</h4>
                        <Button variant={'outline'} className="h-10 mt-6 border border-gray-300 py-4 w-full rounded-[10px] bg-white hover:bg-white shadow-btn-secoundary hover:shadow-btn-secoundary-hovered focus:shadow-btn-secoundary-focused focus-visible:ring-0 focus-visible:ring-offset-0">
                            <img
                                className="size-5 mr-3"
                                src="/assets/google-social-icon.svg"
                            />
                            Sign in with Google
                        </Button>

                        <Separator />

                        <form className="mb-6">
                            <Label htmlFor="email" className="font-inter font-medium text-sm leading-[22px] text-gray-700 mb-2">Email</Label>
                            <Input id="email" type="email" className="h-10 py-2 px-1.5 rounded-[10px] focus-visible:ring-0 focus-visible:ring-offset-0" placeholder="Write you e-mail" />

                            <Label htmlFor="pass" className="flex items-center justify-between mt-4 mb-2">
                                <span className="font-inter font-medium text-sm leading-[22px] text-gray-700">Password</span>
                                <a href="#" className="font-inter font-medium text-sm leading-[22px] text-primary-600">Forgot Password?</a>
                            </Label>
                            <Input id="pass" type="password" className="h-10 py-2 px-1.5 rounded-[10px] focus-visible:ring-0 focus-visible:ring-offset-0" placeholder="your passowrd" />
                            
                            <Button variant={'default'} className="h-10 mt-4 border py-4 w-full rounded-[10px] bg-[#E53724] hover:bg-[#CE2E1C] border-btn-primary shadow-btn-primary border-white/20 focus:border-btn-primary-focus focus:shadow-btn-primary-focus active:border-btn-primary-focus active:shadow-btn-primary-focus focus-visible:ring-0 focus-visible:ring-offset-0">Sign In</Button>
                        </form>

                        <p className="font-inter font-normal text-sm leading-[22px] text-gray-700">Don’t have any account? <a href="#" className="font-inter font-medium text-sm leading-[22px] text-primary-600">Sign Up</a></p>
                    </div>
                </div>
            </div>

            <div className="hidden md:flex items-center md:basis-2/4 bg-[#EFF0F0] border-l border-solid border-l-[#7b878e]">
                <img
                    className="md:size-auto lg:size-full md:object-fill lg:object-contain"
                    src="/assets/pic.svg"
                />
            </div>
        </div>
    )
}

const Separator = () => (
    <div className="flex items-center w-full gap-2 my-6">
        <span className="grow border border-solid border-[#CDD5DB]" />
        <span className="font-inter font-medium text-sm leading-[22px] text-[#7B878E]">Or</span>
        <span className="grow border border-solid border-[#CDD5DB]" />
    </div>
)