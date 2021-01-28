import { InputHTMLAttributes } from 'react'

import { InputElement } from './styles'

const Input = (props: InputHTMLAttributes<HTMLInputElement>): JSX.Element => (
	<InputElement {...props} />
)

export default Input
