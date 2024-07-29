import { CardContent } from '@/components/ui/card';
import Image from 'next/image';

export function ImageSource({ path }: { path: string }) {
  return (
    <CardContent className="relative min-h-[480px] grow rounded-[16px] bg-[#F8F7F4] object-center p-4 md:m-0 md:min-h-[420px] md:overflow-hidden">
      <Image
        src={path}
        alt="capa video"
        className="aspect-w-9 top-0 z-20 size-full rounded-[16px] object-cover"
        height={250}
        width={250}
      />
    </CardContent>
  );
}
