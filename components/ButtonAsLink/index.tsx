import Button, { ButtonProps } from '@/components/Button'
import Link from 'next/link'

interface ButtonAsLinkProps extends ButtonProps {
	href: string
}

const ButtonAsLink = ({
	href,
	...otherProps
}: ButtonAsLinkProps): JSX.Element => (
	<Link href={href}>
		<a>
			<Button type="button" {...otherProps} />
		</a>
	</Link>
)
export default ButtonAsLink
