import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function PartnershipIcon({
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
      <path
        d="M16.3826 16.0625H15.7927V2.70312C15.7927 2.31479 15.4758 2 15.0849 2H5.17507C4.78414 2 4.46723 2.31479 4.46723 2.70312V16.0625H3.87736C3.68191 16.0625 3.52344 16.2199 3.52344 16.4141V17H16.7365V16.4141C16.7365 16.2199 16.5781 16.0625 16.3826 16.0625ZM7.29861 4.22656C7.29861 4.03241 7.45707 3.875 7.65253 3.875H8.83227C9.02772 3.875 9.18619 4.03241 9.18619 4.22656V5.39844C9.18619 5.59259 9.02772 5.75 8.83227 5.75H7.65253C7.45707 5.75 7.29861 5.59259 7.29861 5.39844V4.22656ZM7.29861 7.03906C7.29861 6.84491 7.45707 6.6875 7.65253 6.6875H8.83227C9.02772 6.6875 9.18619 6.84491 9.18619 7.03906V8.21094C9.18619 8.40509 9.02772 8.5625 8.83227 8.5625H7.65253C7.45707 8.5625 7.29861 8.40509 7.29861 8.21094V7.03906ZM8.83227 11.375H7.65253C7.45707 11.375 7.29861 11.2176 7.29861 11.0234V9.85156C7.29861 9.65741 7.45707 9.5 7.65253 9.5H8.83227C9.02772 9.5 9.18619 9.65741 9.18619 9.85156V11.0234C9.18619 11.2176 9.02772 11.375 8.83227 11.375ZM11.0738 16.0625H9.18619V13.6016C9.18619 13.4074 9.34466 13.25 9.54011 13.25H10.7199C10.9153 13.25 11.0738 13.4074 11.0738 13.6016V16.0625ZM12.9614 11.0234C12.9614 11.2176 12.8029 11.375 12.6074 11.375H11.4277C11.2322 11.375 11.0738 11.2176 11.0738 11.0234V9.85156C11.0738 9.65741 11.2322 9.5 11.4277 9.5H12.6074C12.8029 9.5 12.9614 9.65741 12.9614 9.85156V11.0234ZM12.9614 8.21094C12.9614 8.40509 12.8029 8.5625 12.6074 8.5625H11.4277C11.2322 8.5625 11.0738 8.40509 11.0738 8.21094V7.03906C11.0738 6.84491 11.2322 6.6875 11.4277 6.6875H12.6074C12.8029 6.6875 12.9614 6.84491 12.9614 7.03906V8.21094ZM12.9614 5.39844C12.9614 5.59259 12.8029 5.75 12.6074 5.75H11.4277C11.2322 5.75 11.0738 5.59259 11.0738 5.39844V4.22656C11.0738 4.03241 11.2322 3.875 11.4277 3.875H12.6074C12.8029 3.875 12.9614 4.03241 12.9614 4.22656V5.39844Z"
        fill="currentColor"
      />
    </Svg>
  );
}

PartnershipIcon.displayName = '<PartnershipIcon />';