import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function KyberCircleColorIcon({
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
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          fill="#00C699"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.9033 6.04819L15.9654 8.29882C16.102 8.40088 16.0881 8.60231 15.9375 8.68557L11.403 11.194L12.5213 6.18516C12.5575 6.01865 12.7611 5.94344 12.9033 6.04819ZM16.065 14.5659L11.5821 12.0015L16.065 9.43449C16.2225 9.34513 16.418 9.45615 16.418 9.63758V14.3628C16.418 14.5415 16.2225 14.6552 16.065 14.5659ZM12.9004 17.953L15.9651 15.7018C16.1017 15.5997 16.0878 15.3983 15.94 15.315L11.403 12.806L12.5212 17.816C12.5547 17.9825 12.761 18.0551 12.9004 17.953ZM11.5765 6.46427L10.4174 11.9118L11.5765 17.3567C11.6221 17.5708 11.3806 17.7253 11.2089 17.5925L8.24147 15.3051C8.08854 15.1885 8 15.0042 8 14.8118V9.00918C8 8.81676 8.08854 8.63246 8.24147 8.51592L11.2089 6.22848C11.3806 6.09568 11.6221 6.25016 11.5765 6.46427Z"
          fill="white"
        />
      </g>
    </Svg>
  );
}

KyberCircleColorIcon.displayName = '<KyberCircleColorIcon />';
