import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export default function HourGlassSvg (props: SvgProps) {
  return (
    <Svg
      width={32}
      height={32}
      fill="none"
      {...props}
    >
      <Path
        stroke="#987952"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 24.666h8m-11.2-22h14.4c.746 0 1.12 0 1.405.146.25.128.454.332.582.583.146.285.146.658.146 1.405v2.766c0 .652 0 .978-.074 1.285a2.666 2.666 0 0 1-.32.77c-.164.27-.395.5-.856.962l-3.909 3.908c-.527.528-.791.792-.89 1.097a1.332 1.332 0 0 0 0 .824c.099.304.363.568.89 1.096l3.909 3.909c.461.461.692.692.857.96.146.24.254.5.319.772.074.306.074.633.074 1.285V27.2c0 .747 0 1.12-.146 1.405-.128.251-.331.455-.582.583-.285.145-.659.145-1.406.145H8.8c-.746 0-1.12 0-1.405-.145a1.333 1.333 0 0 1-.583-.583c-.145-.285-.145-.658-.145-1.405v-2.766c0-.652 0-.979.074-1.285.065-.273.173-.533.319-.771.165-.27.395-.5.857-.961l3.908-3.909c.528-.528.792-.792.891-1.096a1.332 1.332 0 0 0 0-.824c-.099-.305-.363-.569-.89-1.097l-3.91-3.908c-.46-.461-.691-.692-.856-.961a2.666 2.666 0 0 1-.32-.77c-.073-.308-.073-.634-.073-1.286V4.8c0-.747 0-1.12.145-1.405.128-.251.332-.455.583-.583.285-.145.659-.145 1.405-.145Z"
      />
    </Svg>
  )
}