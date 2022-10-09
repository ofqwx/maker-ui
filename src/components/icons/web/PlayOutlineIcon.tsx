import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function PlayOutlineIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="undefined"
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
          d="M16.0041 11.4458L7.13582 16.495C5.9798 17.1532 4.50551 16.7559 3.8429 15.6076C3.63357 15.2448 3.52344 14.8339 3.52344 14.4158L3.52344 6.39654C3.52344 5.07297 4.6036 4 5.93606 4C6.357 4 6.77062 4.1094 7.13582 4.31733L16.0041 9.36657C16.5821 9.69566 16.7821 10.4279 16.4508 11.0021C16.3442 11.1867 16.19 11.3399 16.0041 11.4458Z"
          fillOpacity="0"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.93608 4.8499C5.0677 4.8499 4.37346 5.54766 4.37346 6.39644V14.4157C4.37346 14.6844 4.44423 14.9488 4.57915 15.1826C5.00675 15.9237 5.96321 16.1844 6.71528 15.7562L15.5835 10.707C15.6387 10.6756 15.6837 10.6306 15.7146 10.5771C15.8089 10.4136 15.7543 10.2024 15.5835 10.1051L6.71528 5.0559C6.47845 4.92106 6.20981 4.8499 5.93608 4.8499ZM2.67346 6.39644C2.67346 4.59808 4.13956 3.1499 5.93608 3.1499C6.50424 3.1499 7.06283 3.29755 7.55641 3.57857L16.4246 8.62781C17.4099 9.18877 17.7552 10.442 17.187 11.4268C17.0047 11.7427 16.7413 12.004 16.4246 12.1843L7.55641 17.2336C5.99644 18.1218 4.00432 17.5879 3.1067 16.0323C2.82297 15.5406 2.67346 14.9832 2.67346 14.4157V6.39644Z"
          fill="currentColor"
        />
      </g>
      )
    </Svg>
  );
}

PlayOutlineIcon.displayName = '<PlayOutlineIcon />';