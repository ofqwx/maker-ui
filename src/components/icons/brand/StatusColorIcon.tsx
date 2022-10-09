import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function StatusColorIcon({
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
          d="M11.9894 2C6.4724 2 2 6.4772 2 12C2 17.5228 6.4724 22 11.9894 22C17.5064 22 21.9788 17.5228 21.9788 12C21.9788 6.4772 17.5064 2 11.9894 2Z"
          fill="#4360DF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.3249 11.5617C12.8265 11.614 13.3282 11.6663 13.9448 11.6319C15.6157 11.5386 16.6278 10.6801 16.556 9.39683C16.4828 8.09123 15.1363 7.28683 13.789 7.36203C11.5934 7.48447 9.97878 9.41421 9.79696 11.6198C10.0951 11.5499 10.409 11.5081 10.705 11.4916C11.3217 11.4572 11.8233 11.5095 12.3249 11.5617ZM8.02074 14.416C8.09003 15.6129 9.36572 16.3503 10.6421 16.2813C12.7222 16.169 14.2518 14.4001 14.4241 12.3783C14.1416 12.4424 13.8443 12.4807 13.5638 12.4959C12.9796 12.5274 12.5043 12.4795 12.0291 12.4316C11.5539 12.3837 11.0786 12.3358 10.4944 12.3673C8.91154 12.4528 7.95261 13.2397 8.02074 14.416Z"
          fill="white"
        />
      </g>
    </Svg>
  );
}

StatusColorIcon.displayName = '<StatusColorIcon />';
