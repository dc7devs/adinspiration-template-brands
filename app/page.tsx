'use client';

import { CTA } from '@/components/CTA';
import { FAQs } from '@/components/FAQs';
import { CardMedia } from '@/components/media-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BrandLego, IconoirInternet } from '@/components/ui/icons';
import { NotificationIcon } from '@/components/ui/icons';
import { braindInfo } from '@/content/braind';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <section className="mx-auto flex h-auto w-full flex-col items-center px-5 pb-14 pt-20 md:px-10 lg:px-0">
        <div className="flex flex-col items-center md:w-2/3">
          <Badge className="mb-4 h-[39px] w-max bg-blue-10 px-4 py-2.5 font-inter text-base font-medium text-blue-500 ring-1 ring-blue-200 hover:bg-blue-10">
            Best Facebook and Instagram Ads
          </Badge>

          <h1 className="mb-6 flex flex-col items-center gap-5 text-center font-inter text-4xl font-bold text-mainblack lg:flex-row lg:gap-3 lg:text-5xl">
            {braindInfo.logo ? (
              <Image
                className="shrink rounded-full"
                src={braindInfo.logo}
                height={64}
                width={64}
                alt="Logotipo"
              />
            ) : (
              <BrandLego className="size-[64px] shrink rounded-full" />
            )}
            <span>
              {braindInfo.braind_name ? braindInfo.braind_name : '[Brand Name]'}{' '}
              Meta Ads Library
            </span>
          </h1>

          <p className="text-center font-inter text-base font-normal text-neutral-500 lg:text-lg">
            This page is dedicated to showcasing the best Bali Body ads on Meta
            platforms: Facebook and Instagram and Its innovative advertising
            strategies that play a big part in the{' '}
            {braindInfo.industry ? braindInfo.industry : '[Industry]'} and{' '}
            {braindInfo.sub_industry
              ? braindInfo.sub_industry
              : '[Sub_Industry]'}
            industry.
          </p>
        </div>
      </section>

      <section className="mx-auto flex w-full items-center bg-blue-900 px-5 py-10 md:px-10 md:py-6 lg:px-0">
        <div className="mx-auto flex flex-wrap items-stretch justify-center gap-y-20 md:gap-20 lg:gap-32">
          <div className="w-2/4 space-y-3 text-center md:w-auto">
            <p className="font-inter text-xl font-semibold text-neutral-100">
              Industry
            </p>
            <p className="font-inter text-lg font-normal text-neutral-200">
              {braindInfo.industry ? braindInfo.industry : '[Industry]'}
            </p>
          </div>
          <div className="w-2/4 space-y-3 text-center md:w-auto">
            <p className="font-inter text-xl font-semibold text-neutral-100">
              Total Ads Tracked
            </p>
            <p className="font-inter text-lg font-normal text-neutral-200">
              {braindInfo.total_ads_tracked
                ? braindInfo.total_ads_tracked
                : '[number of ads]'}
            </p>
          </div>
          <div className="w-2/4 space-y-3 text-center md:w-auto">
            <p className="font-inter text-xl font-semibold text-neutral-100">
              Last Update
            </p>
            <p className="font-inter text-lg font-normal text-neutral-200">
              {braindInfo.last_update
                ? braindInfo.last_update
                : '[Last update]'}
            </p>
          </div>
          <div className="w-2/4 space-y-3 text-center md:w-auto">
            <p className="font-inter text-xl font-semibold text-neutral-100">
              Website
            </p>
            <p className="font-inter text-lg font-normal text-neutral-200">
              <a
                href={braindInfo.website ? braindInfo.website : '#'}
                target="_blank"
                className="group"
                rel="noreferrer"
              >
                <IconoirInternet className="mx-auto size-6 group-hover:brightness-75" />
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full flex-col gap-14 px-5 pt-20 md:px-10 lg:max-w-[1180px] lg:px-0">
        <div className={'flex flex-col gap-5 md:flex-row md:space-x-[59px]'}>
          <h2 className="font-inter text-[26px] font-semibold text-mainblack">
            Want to track{' '}
            {braindInfo.braind_name ? braindInfo.braind_name : '[Brand]'}’s
            winning ads?
          </h2>

          <Button className="inline-flex w-max items-center gap-2 rounded-full bg-blue-500 px-8 py-[11px] font-inter font-medium text-white hover:bg-blue-500/90">
            <NotificationIcon />
            <span>
              Track{' '}
              {braindInfo.braind_name ? braindInfo.braind_name : '[Brand]'} Ads
            </span>
          </Button>
        </div>

        <div
          className={cn(
            'grid h-full w-full',
            'gap-y-6 min-[920px]:gap-x-3 2xl:gap-6',
            'min-[920px]:grid-cols-2 min-[1090px]:grid-cols-3 min-[1360px]:grid-cols-4 2xl:flex 2xl:flex-wrap'
          )}
        >
          {ads.map(_ => (
            <CardMedia key={_.id} path={_.image} />
          ))}
        </div>
      </section>

      <section className="mx-auto flex flex-col items-center px-5 py-20 md:px-10 lg:max-w-[1180px] lg:px-0">
        <CTA />
      </section>

      <section className="mx-auto flex flex-col items-center gap-14 px-5 py-10 lg:max-w-[1086px] lg:gap-14 lg:pb-[100px] lg:pt-20">
        <h2 className="font-inter text-3xl font-semibold text-primary md:text-[40px]">
          Frequently Asked Questions
        </h2>

        <div className="w-full lg:w-[800px] xl:w-[1086px]">
          <FAQs items={faqsItems} />
        </div>
      </section>
    </>
  );
}

const faqsItems = [
  {
    title: 'How Many Ads is [Brand] Running Right Now?',
    content:
      'Discover the current ad campaigns from [Brand] and explore their best-performing ads across Meta platforms. Here, you’ll find the latest winning ads from [Brand] and gain insights into other ads from various brands within the [Category].'
  },
  {
    title: 'How to Find the Best [Category] Meta Ad Examples?',
    content:
      'Searching for more [Category] ad inspiration? We’ve listed top brands here. Click on any brand name to access their complete Facebook Ads Library and discover a treasure trove of ads, including those from [Brand].'
  },
  {
    title:
      'Why is it Essential to Study Top Facebook Ads in the [Industry] Sector?',
    content:
      'Analyzing the best ads in the [Industry] sector, including those from [Brand], provides insights into current market trends, consumer preferences, and effective advertising strategies specific to that sector. This knowledge can help you craft compelling and successful ad campaigns in the [Category].'
  },
  {
    title: 'How Do I Tailor My Ad Strategy to Fit the [Industry] Market?',
    content:
      'Understanding the unique nuances of the [Industry] market is crucial. By studying the top-performing ads in this sector, such as those from [Brand], you can incorporate their successful elements and techniques into your [Category] campaigns. This targeted approach ensures your ads resonate with your audience and achieve better results.'
  },
  {
    title: 'Are the Facebook Ad Formats the Same Across All Industries?',
    content:
      'While Facebook provides a standard set of ad formats, the effectiveness and application of these formats can vary by industry. For instance, video ads might perform exceptionally well in the [Industry] sector, including for [Brand], but may not yield the same results in another. In the [Category], certain formats might be more effective.'
  },
  {
    title: 'How Often Should I Refresh or Update My [Industry] Facebook Ads?',
    content:
      'The [Industry] sector, like many others, evolves over time. It’s recommended to regularly monitor, test, and update your ads to align with current trends and audience preferences. For brands like [Brand] in the [Category], keeping your ads fresh and relevant ensures sustained engagement and effectiveness.'
  },
  {
    title: 'Trends and Innovations in [Industry] Facebook Ads',
    content:
      'Stay updated with the latest ad trends, innovative campaigns, and groundbreaking strategies that are making waves in the [Industry] sector. Subscribing to our newsletter ensures you never miss out on creative ads from leading brands like [Brand] in the [Category].'
  }
];

const ads = [
  {
    id: 1,
    title: 'Ad Title',
    image: '/assets/ad-01.svg'
  },
  {
    id: 2,
    title: 'Ad Title',
    image: '/assets/ad-02.svg'
  },
  {
    id: 3,
    title: 'Ad Title',
    image: '/assets/ad-03.svg'
  },
  {
    id: 3,
    title: 'Ad Title',
    image: '/assets/ad-04.svg'
  },
  {
    id: 4,
    title: 'Ad Title',
    image: '/assets/ad-05.svg'
  },
  {
    id: 5,
    title: 'Ad Title',
    image: '/assets/ad-06.svg'
  },
  {
    id: 6,
    title: 'Ad Title',
    image: '/assets/ad-07.svg'
  },
  {
    id: 6,
    title: 'Ad Title',
    image: '/assets/ad-08.svg'
  }
];
