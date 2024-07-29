import { Card, CardFooter } from '../ui/card';
import { ImageSource } from './image-source';

export function CardMedia({ path }: { path: string }) {
  return (
    <Card
      className={
        'border-gray-200 group flex w-full flex-col rounded-xl border-none bg-white shadow-none md:h-auto 2xl:w-[256px]'
      }
    >
      <ImageSource path={path} />
      <CardFooter className="m-0 mt-3 flex h-9 items-center justify-center gap-2 bg-transparent py-2 pl-3 pr-2">
        <div className="size-5 rounded-full bg-[#9E9E9E]/10"></div>
        <div className="font-inter text-sm font-normal text-[#9E9E9E]/25">
          User name
        </div>
      </CardFooter>
    </Card>
  );
}
