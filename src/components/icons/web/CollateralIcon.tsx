import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function CollateralIcon({
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
      <g>
        <path
          d="M6 2C4.34315 2 3 3.34315 3 5V17H10V15H5V5C5 4.44772 5.44772 4 6 4H13C13.5523 4 14 4.44772 14 5V11H16V5C16 3.34315 14.6569 2 13 2H6Z"
          fill="currentColor"
        />
        <path d="M7 12H9V11H7V12Z" fill="currentColor" />
        <path d="M11 10V9H7V10H11Z" fill="currentColor" />
        <path d="M12 8H7V7H12V8Z" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 14C16 12.8954 15.1046 12 14 12C12.8954 12 12 12.8954 12 14V15C11.4477 15 11 15.4477 11 16V17C11 17.5523 11.4477 18 12 18H16C16.5523 18 17 17.5523 17 17V16C17 15.4477 16.5523 15 16 15V14ZM13 15V14C13 13.4477 13.4477 13 14 13C14.5523 13 15 13.4477 15 14V15H13Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
}

CollateralIcon.displayName = '<CollateralIcon />';
