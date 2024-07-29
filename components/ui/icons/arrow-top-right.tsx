import { SVGProps } from 'react';

export function ArrowTopLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      className="ml-0.5 size-3.5"
      {...props}
    >
      <path
        fill="currentColor"
        d="M204 64v104a12 12 0 01-24 0V93L72.49 200.49a12 12 0 01-17-17L163 76H88a12 12 0 010-24h104a12 12 0 0112 12"
      />
    </svg>
  );
}
