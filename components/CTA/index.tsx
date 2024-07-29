import { Card, CardContent, CardTitle } from '../ui/card';
import { AdsCtaHeroBlob, CtaHeroBlob, CtaUnderlineHeroBlob } from '../ui/blobs';
import { NewsletterSubscribeInput } from './newsletter-subscribe-input';

export function CTA() {
  return (
    <Card
      className={
        'relative flex overflow-hidden rounded-2xl border-none bg-neutral-900 p-5 shadow-none md:p-9 md:px-14 md:py-20 xl:w-[1180px]'
      }
    >
      <CtaHeroBlob className="absolute -left-[156px] -top-12 z-10 hidden stroke-[44.21px] md:block" />
      <AdsCtaHeroBlob className="absolute -top-[60%] md:-right-[160px] md:min-h-[495px] md:min-w-[424.6px] lg:-top-[75%]" />
      <div
        className={'absolute left-0 top-0 size-full bg-black/40 lg:hidden'}
      />

      <CardContent
        className={'z-20 flex flex-col gap-10 p-0 md:w-[60%] md:flex-nowrap'}
      >
        <div className="flex flex-col gap-3">
          <CardTitle className="relative font-inter text-3xl font-semibold text-white md:text-[40px] md:leading-tight">
            <span>Need FREE Winning Ad Examples in your inbox?</span>
            <CtaUnderlineHeroBlob className="absolute left-0 top-[28px] -z-10 h-[15px] w-[184.29px] md:top-[39px] md:h-[21px] md:w-[258px]" />
          </CardTitle>

          <p className="font-inter text-sm font-normal text-neutral-200">
            Do not reinvent the wheel and Discover what it is working for the
            top brands!
          </p>
        </div>

        <div className="flex">
          <NewsletterSubscribeInput />
        </div>
      </CardContent>
    </Card>
  );
}
