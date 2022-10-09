import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function DotsVIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 4 16"
      enableBackground="new 0 0 14 9"
      width={width + 'px'}
      height={height + 'px'}
      fill={color}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2C4 0.89543 3.10457 0 2 0C0.895431 1.19209e-07 0 0.895431 0 2C0 3.10457 0.895431 4 2 4C3.10457 4 4 3.10457 4 2ZM2 6C3.10457 6 4 6.89543 4 8C4 9.10457 3.10457 10 2 10C0.895431 10 0 9.10457 0 8C0 6.89543 0.895431 6 2 6ZM2 12C3.10457 12 4 12.8954 4 14C4 15.1046 3.10457 16 2 16C0.895431 16 0 15.1046 0 14C0 12.8954 0.895431 12 2 12Z"
        fill="currentColor"
      />
    </Svg>
  );
}

DotsVIcon.displayName = '<DotsVIcon />';
