const tablet = 1024
const mobile = 768

export const onDesktop = (styles: TemplateStringsArray | string): string =>
	`@media (min-width: ${tablet}px) { ${styles} }`

export const onTablet = (styles: TemplateStringsArray | string): string =>
	`@media (max-width: ${tablet}px) and (min-width: ${mobile}px) { ${styles} }`

export const onMobile = (styles: TemplateStringsArray | string): string =>
	`@media (max-width: ${mobile}px) { ${styles} }`
