import { ChangeEvent, InputHTMLAttributes } from 'react'

import { InputMoneyElement } from './styles'

interface InputMoneyProps extends InputHTMLAttributes<HTMLInputElement> {
	onChangeEvent: (event: ChangeEvent<HTMLInputElement>) => void
}

const InputMoney = (props: InputMoneyProps): JSX.Element => (
	<InputMoneyElement
		{...props}
		decimalSeparator=","
		thousandSeparator="."
		prefix="R$ "
		inputMode="numeric"
	/>
)

export default InputMoney
