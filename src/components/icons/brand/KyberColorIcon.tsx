import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function KyberColorIcon({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.1722 2.08031L18.2756 5.83137C18.5033 6.00147 18.4801 6.33718 18.2291 6.47594L10.6716 10.6567L12.5354 2.3086C12.5959 2.03108 12.9352 1.90574 13.1722 2.08031ZM18.4416 16.2764L10.9701 12.0026L18.4416 7.72416C18.704 7.57523 19.0299 7.76027 19.0299 8.06264V15.938C19.0299 16.2358 18.704 16.4254 18.4416 16.2764ZM13.1674 21.9217L18.2751 18.1697C18.5029 17.9996 18.4796 17.6638 18.2333 17.525L10.6716 13.3433L12.5353 21.6933C12.5911 21.9709 12.935 22.0918 13.1674 21.9217ZM10.9608 2.77371L9.029 11.853L10.9608 20.9278C11.0368 21.2846 10.6343 21.5421 10.3481 21.3208L5.40245 17.5084C5.14757 17.3141 5 17.007 5 16.6863V7.01523C5 6.69452 5.14757 6.38736 5.40245 6.19313L10.3481 2.38072C10.6343 2.15939 11.0368 2.41686 10.9608 2.77371Z"
        fill="#31CB9E"
      />
    </Svg>
  );
}

KyberColorIcon.displayName = '<KyberColorIcon />';
