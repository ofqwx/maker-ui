import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function AaveCircleColorIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 800 800"
      enableBackground="new 0 0 14 9"
      width={width + 'px'}
      height={height + 'px'}
      fill={color}
      {...props}
    >
      <g>
        <defs>
          <linearGradient
            id="aave_a"
            x1="0.907"
            y1="0.227"
            x2="0.163"
            y2="0.853"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#b6509e" />
            <stop offset="1" stopColor="#2ebac6" />
          </linearGradient>
          <clipPath id="aave_c">
            <rect width="800" height="800" />
          </clipPath>
        </defs>
        <g id="aave_b" clipPath="url(#aave_c)">
          <circle
            cx="388"
            cy="388"
            r="388"
            transform="translate(12 12)"
            fill="url(#aave_a)"
          />
          <path
            d="M343.986,341.581,212.753,24.422C205.337,8.033,194.374,0,179.864,0H168.257c-14.51,0-25.473,8.033-32.889,24.422L78.3,162.6H35.089a23.63,23.63,0,0,0-23.538,23.458v.321a23.63,23.63,0,0,0,23.538,23.458H58.3L3.812,341.581a27.793,27.793,0,0,0-1.612,9c0,7.391,2.257,13.175,6.449,17.674S18.644,375,26.061,375A23.574,23.574,0,0,0,39.6,370.5c4.192-2.892,7.094-7.069,9.351-11.889l59.974-148.779h41.595a23.63,23.63,0,0,0,23.538-23.458v-.643a23.63,23.63,0,0,0-23.538-23.458H128.274L174.06,48.2,298.845,358.612c2.257,4.82,5.159,9,9.351,11.889a23.574,23.574,0,0,0,13.543,4.5q11.124,0,17.412-6.748c4.192-4.5,6.449-10.283,6.449-17.674A21.246,21.246,0,0,0,343.986,341.581Z"
            transform="translate(225.8 213)"
            fill="#fff"
          />
        </g>
      </g>
    </Svg>
  );
}

AaveCircleColorIcon.displayName = '<AaveCircleColorIcon />';
