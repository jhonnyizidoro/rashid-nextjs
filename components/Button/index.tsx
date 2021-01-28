import { ButtonHTMLAttributes } from 'react'
import { ButtonElement } from '@/components/Button/styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	backgroundColor: 'darkGradient' | 'dark' | 'blueGradient' | 'white'
}

const Button = ({
	backgroundColor,
	children,
	...otherProps
}: ButtonProps): JSX.Element => (
	<ButtonElement backgroundColor={backgroundColor} {...otherProps}>
		{children}
	</ButtonElement>
)

export default Button
