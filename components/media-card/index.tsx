import Image from 'next/image';
import { Card, CardFooter } from '../ui/card';
import { ImageSource } from './image-source';

export function CardMedia({
  path_image,
  icon_path,
  brand_name
}: {
  path_image: string;
  icon_path: string;
  brand_name: string;
}) {
  return (
    <Card
      className={
        'border-gray-200 group flex w-full flex-col rounded-xl border-none bg-white shadow-none md:h-auto 2xl:w-[256px]'
      }
    >
      <ImageSource path={path_image} />
      <CardFooter className="m-0 mt-3 flex h-9 items-center justify-center gap-2 bg-transparent py-2 pl-3 pr-2">
        {/* <div className="size-5 rounded-full bg-[#9E9E9E]/10"></div> */}

        <Image
          src={icon_path}
          height={20}
          width={20}
          className="rounded-full bg-[#9E9E9E]/10"
          alt="Logo"
        />
        <div className="font-inter text-sm font-normal text-[#9E9E9E]">
          {brand_name}
        </div>
      </CardFooter>
    </Card>
  );
}
