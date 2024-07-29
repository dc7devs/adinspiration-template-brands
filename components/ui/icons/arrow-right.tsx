import { SVGProps } from 'react';

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={17}
      height={16}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.12 3.953L14.165 8l-4.047 4.046M2.834 8h11.22"
        stroke="#fff"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
