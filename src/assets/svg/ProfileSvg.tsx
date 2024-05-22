import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export default function ProfileSvg (props: SvgProps) {
  return (
    <Svg
      width={16}
      height={16}
      fill="none"
      {...props}
    >
      <Path
        stroke="#808494"
        d="M10.046 4.673c0 1.098-.93 2.077-2.046 2.077-1.116 0-2.045-.979-2.045-2.077C5.955 3.551 6.907 2.5 8 2.5s2.046 1.051 2.046 2.173Zm3.454 6.512c0 .543-.303 1.1-1.163 1.547-.876.457-2.285.768-4.337.768-2.052 0-3.46-.31-4.337-.768-.86-.448-1.163-1.004-1.163-1.547 0-.469.424-1.047 1.47-1.537C4.975 9.176 6.4 8.87 8 8.87s3.025.306 4.03.778c1.046.49 1.47 1.068 1.47 1.537Z"
      />
    </Svg>
  )
}