import styled, { css } from 'styled-components'
import { Colors } from '@/styles/variables'
import { onDesktop } from '@/styles/media-queries'

interface ButtonStyles {
	backgroundColor: 'darkGradient' | 'dark' | 'blueGradient' | 'white'
}

const getButtonBackgroundColor = ({ backgroundColor }: ButtonStyles) => {
	switch (backgroundColor) {
		case 'dark':
			return css`
				background: ${Colors.DARK_1};
				color: ${Colors.WHITE};
			`
		case 'blueGradient':
			return css`
				background: linear-gradient(45deg, ${Colors.BLUE_1}, ${Colors.BLUE_2});
				color: ${Colors.WHITE};
			`
		case 'darkGradient':
			return css`
				background: linear-gradient(45deg, ${Colors.DARK_1}, ${Colors.DARK_2});
				color: ${Colors.WHITE};
			`
		case 'white':
		default:
			return css`
				background: ${Colors.WHITE};
			`
	}
}

export const ButtonElement = styled.button<ButtonStyles>`
	${getButtonBackgroundColor};
	border: 0;
	box-shadow: 12px 28px 22px rgba(0, 0, 0, 0.11);
	cursor: pointer;
	outline: 0;
	padding: 15px 80px;

	svg {
		fill: ${Colors.WHITE};
		height: 1.3em;
		width: 1.3em;
	}

	${onDesktop`
    transition: 450ms;
    &:hover {
      box-shadow: 16px 32px 32px rgba(0, 0, 0, 0.15);
      transform: translate(-2px, -2px);
    }
  `}
`
