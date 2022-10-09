import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function YoutubeIcon({
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.2511 4.3307C16.9395 4.51267 17.4816 5.04882 17.6656 5.7297C18 6.96373 18 9.53846 18 9.53846C18 9.53846 18 12.1132 17.6656 13.3473C17.4816 14.0281 16.9395 14.5643 16.2511 14.7463C15.0034 15.0769 10 15.0769 10 15.0769C10 15.0769 4.99666 15.0769 3.7489 14.7463C3.06051 14.5643 2.51832 14.0281 2.33434 13.3473C2 12.1132 2 9.53846 2 9.53846C2 9.53846 2 6.96373 2.33434 5.7297C2.51832 5.04882 3.06051 4.51267 3.7489 4.3307C4.99666 4 10 4 10 4C10 4 15.0034 4 16.2511 4.3307ZM12.5455 9.5386L8.36367 11.8761V7.20083L12.5455 9.5386Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
}

YoutubeIcon.displayName = '<YoutubeIcon />';
