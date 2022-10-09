import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function LockOpenIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 20 20"
      enableBackground="new 0 0 14 9"
      width={width + 'px'}
      height={height + 'px'}
      fill={color}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 6C8 4.89543 8.89543 4 10 4C10.5922 4 11.1233 4.25615 11.491 4.66691C11.6638 4.85997 11.799 5.08589 11.8865 5.33325C12.0705 5.85396 12.6418 6.12689 13.1625 5.94284C13.6833 5.75879 13.9562 5.18747 13.7721 4.66675C13.5962 4.16887 13.325 3.71713 12.9812 3.33309C12.2502 2.51635 11.1848 2 10 2C7.79086 2 6 3.79086 6 6V8C4.34315 8 3 9.34315 3 11V15C3 16.6569 4.34315 18 6 18H14C15.6569 18 17 16.6569 17 15V11C17 9.34315 15.6569 8 14 8H8V6ZM6 10C5.44772 10 5 10.4477 5 11V15C5 15.5523 5.44772 16 6 16H14C14.5523 16 15 15.5523 15 15V11C15 10.4477 14.5523 10 14 10H6Z"
        fill="currentColor"
      />
    </Svg>
  );
}

LockOpenIcon.displayName = '<LockOpenIcon />';
