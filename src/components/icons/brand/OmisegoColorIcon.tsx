import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function OmisegoColorIcon({
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
          d="M10.39 7.35503C10.39 9.03179 9.03183 10.3912 7.35646 10.3912C5.68107 10.3912 4.32311 9.03179 4.32311 7.35503C4.32311 5.67827 5.68107 4.31942 7.35626 4.31942C9.03145 4.31942 10.3885 5.6792 10.3915 7.35559H10.39V7.35503ZM7.35626 3C5.2848 2.99869 3.49896 4.45894 3.08727 6.491C2.67557 8.52308 3.75165 10.564 5.65905 11.3709C7.88049 12.3021 10.4377 11.2598 11.3708 9.04269C12.0493 7.43046 11.6956 5.56953 10.4726 4.31735H11.7063V3H7.35626ZM16.6488 10.3929C14.9741 10.3929 13.6154 9.03367 13.6154 7.35671C13.6154 5.67975 14.973 4.32055 16.649 4.32055C18.3249 4.32055 19.6825 5.67975 19.6825 7.35671C19.6797 9.03294 18.3223 10.3899 16.649 10.3927L16.6488 10.3929ZM16.6488 3.0002C14.2458 3.0002 12.2976 4.95001 12.2976 7.35523C12.2976 9.76042 14.2458 11.7102 16.6488 11.7102C19.0518 11.7102 21 9.76042 21 7.35523C21 4.95001 19.0521 3 16.649 3L16.6488 3.0002ZM7.35626 19.6826C5.68163 19.6826 4.32291 18.3234 4.32291 16.6465C4.32291 14.9695 5.68107 13.6103 7.35626 13.6103C9.03145 13.6103 10.3898 14.9695 10.3898 16.6465C10.387 18.3219 9.0305 19.6806 7.35626 19.6826ZM7.35626 12.2899C4.95325 12.2899 3.00523 14.2398 3.00523 16.645C3.00523 19.0502 4.95345 21 7.35646 21C9.75945 21 11.7077 19.0502 11.7077 16.645C11.7077 14.2398 9.75963 12.2899 7.35646 12.2899H7.35626Z"
          fill="#2759E7"
        />
      </g>
    </Svg>
  );
}

OmisegoColorIcon.displayName = '<OmisegoColorIcon />';
