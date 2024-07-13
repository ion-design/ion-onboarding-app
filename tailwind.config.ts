// eslint-disable-next-line
const colors = require('tailwindcss/colors');
module.exports = {
	content: ['./src/**/**/*.{ts,tsx}', './node_modules/@tremor/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				headers: ['var(--font-inter)'],
				sans: ['var(--font-inter)', 'ui-sans-serif'],
			},
			colors: {
				container: {
					DEFAULT: 'var(--container)',
					high: 'var(--container-high)',
				},
				inverse: {
					DEFAULT: 'var(--inverse)',
				},
				text: {
					sub: 'var(--text-sub)',
					soft: 'var(--text-soft)',
					disabled: 'var(--text-disabled)',
					inverse: 'var(--text-inverse)',
				},
				outline: {
					DEFAULT: 'var(--outline)',
					sub: 'var(--outline-sub)',
					disabled: 'var(--outline-disabled)',
					inverse: 'var(--outline-inverse)',
				},
				primary: {
					accent: 'var(--primary-accent)',
					container: 'var(--primary-container)',
					sub: 'var(--primary-sub)',
					DEFAULT: 'var(--primary)',
					hover: 'var(--primary-hover)',
					pressed: 'var(--primary-pressed)',
				},
				on: {
					inverse: 'var(--on-inverse)',
					disabled: 'var(--on-disabled)',
					primary: 'var(--on-primary)',
					'primary-container': 'var(--on-primary-container)',
					'primary-hover': 'var(--on-primary-hover)',
					'primary-pressed': 'var(--on-primary-pressed)',
					neutral: 'var(--on-neutral)',
					'neutral-container': 'var(--on-neutral-container)',
					'neutral-hover': 'var(--on-neutral-hover)',
					'neutral-pressed': 'var(--on-neutral-pressed)',
					success: 'var(--on-success)',
					'success-container': 'var(--on-success-container)',
					'success-hover': 'var(--on-success-hover)',
					'success-pressed': 'var(--on-success-pressed)',
					warning: 'var(--on-warning)',
					'warning-container': 'var(--on-warning-container)',
					'warning-hover': 'var(--on-warning-hover)',
					'warning-pressed': 'var(--on-warning-pressed)',
					danger: 'var(--on-danger)',
					'danger-container': 'var(--on-danger-container)',
					'danger-hover': 'var(--on-danger-hover)',
					'danger-pressed': 'var(--on-danger-pressed)',
					info: 'var(--on-info)',
					'info-container': 'var(--on-info-container)',
					'info-hover': 'var(--on-info-hover)',
					'info-pressed': 'var(--on-info-pressed)',
				},
				neutral: {
					accent: 'var(--neutral-accent)',
					container: 'var(--neutral-container)',
					sub: 'var(--neutral-sub)',
					DEFAULT: 'var(--neutral)',
					hover: 'var(--neutral-hover)',
					pressed: 'var(--neutral-pressed)',
				},
				success: {
					accent: 'var(--success-accent)',
					container: 'var(--success-container)',
					sub: 'var(--success-sub)',
					DEFAULT: 'var(--success)',
					hover: 'var(--success-hover)',
					pressed: 'var(--success-pressed)',
				},
				warning: {
					accent: 'var(--warning-accent)',
					container: 'var(--warning-container)',
					sub: 'var(--warning-sub)',
					DEFAULT: 'var(--warning)',
					hover: 'var(--warning-hover)',
					pressed: 'var(--warning-pressed)',
				},
				danger: {
					accent: 'var(--danger-accent)',
					container: 'var(--danger-container)',
					sub: 'var(--danger-sub)',
					DEFAULT: 'var(--danger)',
					hover: 'var(--danger-hover)',
					pressed: 'var(--danger-pressed)',
				},
				info: {
					accent: 'var(--info-accent)',
					container: 'var(--info-container)',
					sub: 'var(--info-sub)',
					DEFAULT: 'var(--info)',
					hover: 'var(--info-hover)',
					pressed: 'var(--info-pressed)',
				},
				foreground: 'var(--foreground)',
				background: 'var(--background)',
				soft: 'var(--soft)',
				sub: 'var(--sub)',
				weak: 'var(--weak)',
				'outline-sub': 'var(--outline-sub)',
				disabled: 'var(--disabled)',
				'on-disabled': 'var(--on-disabled)',
				tremor: {
					brand: {
						faint: 'var(--primary-accent)',
						muted: 'var(--primary-container)',
						subtle: 'var(--primary-sub)',
						DEFAULT: 'var(--primary)',
						emphasis: 'var(--primary-pressed)',
						inverted: 'var(--on-primary)',
					},
					background: {
						muted: 'var(--disabled)',
						subtle: 'var(--container)',
						DEFAULT: 'var(--background)',
						emphasis: 'var(--container-high)',
					},
					border: {
						DEFAULT: 'var(--outline-sub)',
					},
					ring: {
						DEFAULT: 'var(--primary)',
					},
					content: {
						subtle: 'var(--on-disabled)',
						DEFAULT: 'var(--soft)',
						emphasis: 'var(--sub)',
						strong: 'var(--foreground)',
						inverted: 'var(--background)',
					},
				},
				'Surface/Overlay': 'white',
				'Content/Secondary': '#8188a0',
				'Actions/Selected': '#f0f2f6',
				'Content/Primary': '#09111c',
				'Surface/Stroke': '#e7e8ee',
				'Accent/Main': '#3d6ae8',
				'Surface/Alternative': '#f0f2f6',
				'Surface/Base': '#fbfcfe',
				'Content/Tertiary': '#c0c5cf',
				'Actions/Hover': '#f6f7f9',
				'Accent/Hover': '#3760d3',
				'State/Error/Hover': '#ff5b5b',
			},
			boxShadow: {
				low: '0px 1px 1px 0px rgba(0, 0, 0, 0.07), 0px 1px 2px 0px rgba(0, 0, 0, 0.08),0px 2px 2px 0px rgba(0, 0, 0, 0.1), 0px 0px 8px 0px rgba(0, 0, 0, 0.05);',
				medium:
					'0px 1px 1px 0px rgba(0, 0, 0, 0.05), 0px 2px 2px 0px rgba(0, 0, 0, 0.05),0px 5px 5px 0px rgba(0, 0, 0, 0.05), 0px 10px 10px 0px rgba(0, 0, 0, 0.05), 0px 0px 8px 0px rgba(0, 0, 0, 0.05)',
				high: '0px 2px 4px 0px rgba(0, 0, 0, 0.03), 0px 6px 6px 0px rgba(0, 0, 0, 0.03),0px 15px 20px 0px rgba(0, 0, 0, 0.03), 0px 30px 40px 0px rgba(0, 0, 0, 0.03),0px 40px 70px 0px rgba(0, 0, 0, 0.03), 0px 4px 30px 0px rgba(0, 0, 0, 0.03), 0px 0px 8px 0px rgba(0, 0, 0, 0.03)',
			},
			borderRadius: {
				'radius-none': 'var(--radius-none)',
				'radius-xs': 'var(--radius-xs)',
				'radius-sm': 'var(--radius-sm)',
				radius: 'var(--radius)',
				'radius-md': 'var(--radius-md)',
				'radius-lg': 'var(--radius-lg)',
				'radius-full': 'var(--radius-full)',
			},
			fontSize: {
				'tremor-label': [
					'0.75rem',
					{
						lineHeight: '1rem',
					},
				],
				'tremor-default': [
					'0.875rem',
					{
						lineHeight: '1.25rem',
					},
				],
				'tremor-title': [
					'1.125rem',
					{
						lineHeight: '1.75rem',
					},
				],
				'tremor-metric': [
					'1.875rem',
					{
						lineHeight: '2.25rem',
					},
				],
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
	safelist: [
		{
			pattern:
				/^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ['hover', 'ui-selected'],
		},
		{
			pattern:
				/^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ['hover', 'ui-selected'],
		},
		{
			pattern:
				/^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ['hover', 'ui-selected'],
		},
		{
			pattern:
				/^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
		},
		{
			pattern:
				/^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
		},
		{
			pattern:
				/^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		...['primary', 'secondary', 'danger'].flatMap((customColor) => [
			...['lightest', 'lighter', 'light', '', 'dark', 'darker', 'darkest'].flatMap((shade) => [
				`bg-${customColor}${shade ? `-${shade}` : ''}`,
				`border-${customColor}${shade ? `-${shade}` : ''}`,
				`hover:bg-${customColor}${shade ? `-${shade}` : ''}`,
				`hover:border-${customColor}${shade ? `-${shade}` : ''}`,
				`hover:text-${customColor}${shade ? `-${shade}` : ''}`,
				`active:bg-${customColor}${shade ? `-${shade}` : ''}`,
				`active:border-${customColor}${shade ? `-${shade}` : ''}`,
				`active:text-${customColor}${shade ? `-${shade}` : ''}`,
				`dark:bg-${customColor}${shade ? `-${shade}` : ''}`,
				`dark:border-${customColor}${shade ? `-${shade}` : ''}`,
				`dark:hover:bg-${customColor}${shade ? `-${shade}` : ''}`,
				`dark:hover:border-${customColor}${shade ? `-${shade}` : ''}`,
				`dark:hover:text-${customColor}${shade ? `-${shade}` : ''}`,
				`dark:active:bg-${customColor}${shade ? `-${shade}` : ''}`,
				`dark:active:border-${customColor}${shade ? `-${shade}` : ''}`,
				`dark:active:text-${customColor}${shade ? `-${shade}` : ''}`,
				`fill-${customColor}${shade ? `-${shade}` : ''}`,
				`ring-${customColor}${shade ? `-${shade}` : ''}`,
				`stroke-${customColor}${shade ? `-${shade}` : ''}`,
				`text-${customColor}${shade ? `-${shade}` : ''}`,
				`text-${customColor}-foreground`,
			]),
			`fill-${customColor}`,
			`ring-${customColor}`,
			`stroke-${customColor}`,
			`text-${customColor}`,
			`ui-selected:bg-${customColor}`,
			`ui-selected:border-${customColor}`,
			`ui-selected:text-${customColor}`,
		]),
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
		{
			pattern:
				/^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
			variants: ['hover', 'ui-selected', 'active'],
		},
	],
};
