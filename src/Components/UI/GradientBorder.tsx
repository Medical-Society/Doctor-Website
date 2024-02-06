import { ReactNode } from "react";

interface IProps {
    children: ReactNode;
    from: string;
    to: string;
    borderSize: string;
    maxWidth?: string;
}

const GradientBorder = ({children, from, to, borderSize, maxWidth}: IProps) => {
  return (
    <div className={`rounded-2xl bg-gradient-to-r from-${from} to-${to} p-${borderSize} w-10/12 ${maxWidth ? `max-w-${maxWidth}` : ''}`}>
      {children}
    </div>
  )
}

export default GradientBorder