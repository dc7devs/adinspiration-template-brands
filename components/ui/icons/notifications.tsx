import { SVGProps } from 'react';

export function NotificationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.012 1.94c-2.206 0-4 1.793-4 4v1.926c0 .407-.173 1.027-.38 1.373l-.766 1.274c-.474.787-.147 1.66.72 1.953 2.873.96 5.973.96 8.846 0a1.335 1.335 0 00.72-1.953l-.766-1.274c-.2-.346-.374-.966-.374-1.373V5.94c0-2.2-1.8-4-4-4z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <path
        d="M9.246 2.133a4.502 4.502 0 00-2.467 0 1.324 1.324 0 012.467 0z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.014 12.707c0 1.1-.9 2-2 2a2.007 2.007 0 01-2-2"
        stroke="#fff"
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
    </svg>
  );
}
