import styled from 'styled-components'
import { getInputStyles } from '@/components/Input/styles'
import CurrencyInput from 'react-currency-input'

export const InputMoneyElement = styled(CurrencyInput)`
	${getInputStyles};
`
