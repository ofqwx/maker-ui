import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function StatusIcon({
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
          d="M2 12C2 6.4772 6.4724 2 11.9894 2C17.5064 2 21.9788 6.4772 21.9788 12C21.9788 17.5228 17.5064 22 11.9894 22C6.4724 22 2 17.5228 2 12ZM13.9448 11.6319C13.3282 11.6663 12.8265 11.614 12.3249 11.5617C11.8233 11.5095 11.3217 11.4572 10.705 11.4916C10.409 11.5081 10.0951 11.5499 9.79696 11.6198C9.97878 9.41421 11.5934 7.48447 13.789 7.36203C15.1363 7.28683 16.4828 8.09123 16.556 9.39683C16.6278 10.6801 15.6157 11.5386 13.9448 11.6319ZM10.6421 16.2813C9.36572 16.3503 8.09003 15.6129 8.02074 14.416C7.95261 13.2397 8.91154 12.4528 10.4944 12.3673C11.0786 12.3358 11.5539 12.3837 12.0291 12.4316C12.5043 12.4795 12.9796 12.5274 13.5638 12.4959C13.8443 12.4807 14.1416 12.4424 14.4241 12.3783C14.2519 14.4001 12.7222 16.169 10.6421 16.2813Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
}

StatusIcon.displayName = '<StatusIcon />';
