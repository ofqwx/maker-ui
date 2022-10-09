import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function PaperCheckIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 26 35"
      enableBackground="new 0 0 14 9"
      width={width + 'px'}
      height={height + 'px'}
      fill={color}
      {...props}
    >
      <g>
        <path
          d="M2.59995 0C1.17883 0 0 1.17883 0 2.59995V32.3144C0 33.7355 1.17883 34.9143 2.59995 34.9143H23.4001C24.8212 34.9143 26 33.7355 26 32.3144V2.59995C26 1.17883 24.8212 0 23.4001 0H2.59995ZM2.59995 2.22871H23.4001C23.6252 2.22871 23.7716 2.3751 23.7716 2.60025V32.3147C23.7716 32.5396 23.6252 32.6862 23.4001 32.6862H2.59995C2.3748 32.6862 2.22841 32.5398 2.22841 32.3147V2.60025C2.22841 2.37511 2.37479 2.22871 2.59995 2.22871ZM16.9929 4.44576C16.7084 4.47192 16.4364 4.61235 16.2501 4.82869L11.7233 9.99389L9.58762 8.39223C9.12359 8.03055 8.37018 8.12926 8.01467 8.59795C7.6592 9.0669 7.76776 9.81876 8.24112 10.168L11.2126 12.3968C11.6557 12.7325 12.3539 12.6628 12.7216 12.246L17.9215 6.30295C18.2202 5.97261 18.2907 5.45549 18.0917 5.05726C17.8924 4.65853 17.4364 4.40509 16.9929 4.44576ZM5.57139 15.5999C4.95606 15.5999 4.45703 16.0989 4.45703 16.7143C4.45703 17.3296 4.95604 17.8287 5.57139 17.8287H20.4286C21.0439 17.8287 21.543 17.3299 21.543 16.7143C21.543 16.099 21.044 15.5999 20.4286 15.5999H5.57139ZM5.57139 21.543C4.95606 21.543 4.45703 22.042 4.45703 22.6573C4.45703 23.2727 4.95604 23.7717 5.57139 23.7717H20.4286C21.0439 23.7717 21.543 23.2729 21.543 22.6573C21.543 22.042 21.044 21.543 20.4286 21.543H5.57139ZM5.57139 27.486C4.95606 27.486 4.45703 27.985 4.45703 28.6003C4.45703 29.2157 4.95604 29.7147 5.57139 29.7147H20.4286C21.0439 29.7147 21.543 29.216 21.543 28.6003C21.543 27.985 21.044 27.486 20.4286 27.486H5.57139Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
}

PaperCheckIcon.displayName = '<PaperCheckIcon />';
