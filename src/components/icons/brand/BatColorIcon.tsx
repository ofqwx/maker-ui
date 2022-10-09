import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function BatColorIcon({
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
        <g clipPath="url(#clip0_bat)">
          <path
            d="M7.19458 17.3973H16.8055L11.999 9.09399L7.19458 17.3973Z"
            fill="white"
          />
          <path
            d="M12.0004 3C11.9196 3.00012 11.8403 3.02152 11.7704 3.06205C11.7006 3.10258 11.6426 3.16081 11.6024 3.23087L2.06113 19.7181C2.0206 19.7883 1.99927 19.8679 1.99927 19.949C1.99927 20.03 2.0206 20.1096 2.06113 20.1798L7.88857 16.7964L12.0004 9.69121V3Z"
            fill="#FF4724"
          />
          <path
            d="M21.9383 19.7181L12.399 3.23087C12.3588 3.16081 12.3008 3.10258 12.231 3.06205C12.1611 3.02152 12.0818 3.00012 12.001 3V9.6932L16.1108 16.7984L21.9383 20.1818C21.9792 20.1114 22.0007 20.0314 22.0007 19.9499C22.0007 19.8685 21.9792 19.7885 21.9383 19.7181Z"
            fill="#9E1F63"
          />
          <path
            d="M21.9384 20.1737L16.1109 16.7903H7.88921L2.06177 20.1737C2.10214 20.2436 2.16014 20.3017 2.22998 20.3423C2.29983 20.3828 2.37908 20.4043 2.45982 20.4046H21.5383C21.6194 20.4046 21.6991 20.3833 21.7693 20.3428C21.8395 20.3022 21.8978 20.2439 21.9384 20.1737Z"
            fill="#662D91"
          />
        </g>
        <defs>
          <clipPath id="clip0_bat">
            <rect
              width="20"
              height="17.4047"
              fill="white"
              transform="translate(2 3)"
            />
          </clipPath>
        </defs>
      </g>
    </Svg>
  );
}

BatColorIcon.displayName = '<BatColorIcon />';
