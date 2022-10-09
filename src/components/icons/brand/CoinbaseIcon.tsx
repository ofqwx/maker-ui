import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function CoinbaseIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      enableBackground="new 0 0 14 9"
      width={width + 'px'}
      height={height + 'px'}
      fill={color}
      {...props}
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM9.5 9C9.22386 9 9 9.22386 9 9.5V14.5C9 14.7761 9.22386 15 9.5 15H14.5C14.7761 15 15 14.7761 15 14.5V9.5C15 9.22386 14.7761 9 14.5 9H9.5Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
}

CoinbaseIcon.displayName = '<CoinbaseIcon />';
