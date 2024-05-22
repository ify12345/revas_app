import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export default function DeleteSvg (props: SvgProps) {
  return (
    <Svg
      width={16}
      height={17}
      fill="none"
      {...props}
    >
      <Path
        stroke="#E43B3F"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.667 4.5v-.533c0-.747 0-1.12-.146-1.406a1.333 1.333 0 0 0-.582-.582c-.286-.146-.659-.146-1.406-.146H7.467c-.747 0-1.12 0-1.406.146-.25.127-.455.331-.582.582-.146.285-.146.659-.146 1.406V4.5m1.334 3.667V11.5m2.666-3.333V11.5M2 4.5h12m-1.333 0v7.467c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.988.218-2.108.218H6.533c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874c-.218-.428-.218-.988-.218-2.108V4.5"
      />
    </Svg>
  )
}