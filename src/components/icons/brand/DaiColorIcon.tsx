import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function DaiColorIcon({
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
          d="M4.39659 3H11.2934C15.4886 3 18.6685 5.25486 19.8516 8.53596H22V10.5191H20.304C20.3372 10.8325 20.3541 11.1518 20.3541 11.4761V11.5249C20.3541 11.8901 20.3327 12.2491 20.2908 12.6007H22V14.5838H19.8107C18.5965 17.8193 15.4411 20.0526 11.2934 20.0526H4.39659V14.5838H2V12.6007H4.39659V10.5191H2V8.53596H4.39659V3ZM6.32467 14.5838V18.2736H11.2934C14.3596 18.2736 16.6377 16.7958 17.6981 14.5838H6.32467ZM18.2888 12.6007H6.32467V10.5191H18.2918C18.3362 10.8467 18.3588 11.1825 18.3588 11.5249V11.5736C18.3588 11.9238 18.3352 12.2667 18.2888 12.6007ZM11.2934 4.77609C14.3737 4.77609 16.6586 6.29289 17.7127 8.53596H6.32467V4.77609H11.2934Z"
          fill="#F4B731"
        />
      </g>
    </Svg>
  );
}

DaiColorIcon.displayName = '<DaiColorIcon />';
