import styled, { css } from 'styled-components'
import { Colors, Fonts } from '@/styles/variables'

export const getInputStyles = css`
	appearance: none;
	box-shadow: 11px 16px 25px rgba(0, 0, 0, 0.03);
	border: 0;
	flex-grow: 1;
	outline: 0;
	padding: 20px;
	width: 100%;

	::placeholder {
		color: ${Colors.LIGHT_3};
		font-style: italic;
		font-weight: ${Fonts.LIGHT};
	}
`

export const InputElement = styled.input`
	${getInputStyles};
`
