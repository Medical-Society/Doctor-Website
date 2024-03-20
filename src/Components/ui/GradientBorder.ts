import { CSSProperties } from 'react';
interface GradientBorderProps {
    borderRadius: string;
  }
const GradientBorder = ({ borderRadius }: GradientBorderProps): CSSProperties => ({
  content: '""',
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  borderRadius: borderRadius,
  border: '2px solid transparent',
  background: 'linear-gradient(50deg, #060B73 0%, #1877F2 100%) border-box',
  WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
  WebkitMaskComposite: 'destination-out',
  maskComposite: 'exclude',
});

export default GradientBorder;