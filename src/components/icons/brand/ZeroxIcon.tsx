import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function ZeroxIcon({
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
          d="M11.5425 21.9998C11.2971 21.9744 11.0516 21.9516 10.8061 21.9226C9.48638 21.7652 8.21188 21.3435 7.05876 20.6826C7.04148 20.6735 7.02603 20.6598 6.99239 20.6371C8.9979 19.1371 10.9943 17.6462 13.0016 16.1462L13.6062 16.7344C13.9426 17.0635 14.2808 17.389 14.6108 17.7226C14.6926 17.8044 14.7517 17.8035 14.8472 17.7544C15.8469 17.2554 16.7011 16.5071 17.3272 15.5817L17.4245 15.4381C17.4527 15.4708 17.479 15.4972 17.5009 15.5262C18.1982 16.4553 18.8945 17.3844 19.5946 18.3108C19.6555 18.3908 19.6482 18.438 19.5837 18.5108C17.9627 20.3526 15.9481 21.4871 13.5198 21.8753C13.2144 21.9244 12.9044 21.9426 12.5962 21.9762C12.5553 21.9807 12.5144 21.9916 12.4744 21.9998H11.5425ZM12.4244 2C12.5935 2.01727 12.7635 2.03545 12.9335 2.05091C14.3662 2.18727 15.7063 2.61181 16.9545 3.32362C16.9727 3.33453 16.9881 3.34726 17.0181 3.36908L10.9107 7.74995C10.8298 7.67359 10.7516 7.60086 10.6743 7.52541C10.2452 7.10723 9.81429 6.68996 9.38791 6.26814C9.31973 6.20087 9.26791 6.1936 9.18245 6.23633C8.16503 6.73841 7.29682 7.49815 6.6642 8.43994L6.57329 8.57631L4.32959 5.58724C4.55596 5.34724 4.76506 5.10815 4.99143 4.88725C6.46692 3.44817 8.21879 2.53272 10.2488 2.16454C10.6398 2.09364 11.0389 2.07 11.4343 2.02364C11.4789 2.01909 11.5234 2.00818 11.5671 2H12.4244ZM3.32593 7.03087L7.86696 12.9835L6.95057 13.9235C6.72238 14.1572 6.49601 14.3935 6.26328 14.6235C6.19782 14.689 6.1951 14.739 6.2351 14.819C6.73648 15.8366 7.49602 16.7048 8.43789 17.3371C8.46971 17.3571 8.50152 17.378 8.53153 17.4008C8.53698 17.4044 8.53971 17.4135 8.55607 17.4444L5.59144 19.668C3.81867 18.1417 2.66863 16.2608 2.2068 13.9799C1.71224 11.5381 2.11225 9.23085 3.32593 7.03087ZM16.2126 11.0036L17.0472 10.1372C17.28 9.89539 17.509 9.65084 17.7472 9.41539C17.8218 9.34175 17.8209 9.2863 17.7772 9.19903C17.2726 8.16922 16.5041 7.29155 15.5499 6.65541C15.5163 6.63269 15.4835 6.60814 15.4263 6.56723L18.4073 4.33089C20.0955 5.77633 21.2164 7.55813 21.731 9.70812C22.3737 12.3917 21.801 15.0463 20.6882 16.9153L16.2126 11.0036Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
}

ZeroxIcon.displayName = '<ZeroxIcon />';
