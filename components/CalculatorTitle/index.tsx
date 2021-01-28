import {
	CalculatorTitleWrapper,
	CalculatorTitleElement,
	CalculatorTitleText,
} from '@/components/CalculatorTitle/styles'

interface CalculatorTitleProps {
	title: string
	text: string
}

const CalculatorTitle = ({
	title,
	text,
}: CalculatorTitleProps): JSX.Element => (
	<CalculatorTitleWrapper>
		<CalculatorTitleElement>{title}</CalculatorTitleElement>
		<CalculatorTitleText>{text}</CalculatorTitleText>
	</CalculatorTitleWrapper>
)

export default CalculatorTitle
