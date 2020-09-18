import React, { SVGAttributes } from 'react';

const ICON_DEFAULT_SIZE = 16;

interface Props extends SVGAttributes<SVGElement> {
	className?: string;
}

export const SearchIcon: React.FunctionComponent<Props> = ({
	width = ICON_DEFAULT_SIZE,
	height = ICON_DEFAULT_SIZE,
	fill = '#4F4F4F',
	className,
}) => {
	return (
		<svg className={className} width={width} height={height}>
			<path
				d="M15.59 14.413l-4.353-4.353a6.19 6.19 0 10-1.179 1.179l4.353 4.352c.328.32.85.32 1.178 0a.834.834 0 000-1.178zM1.832 6.333a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"
				fill={fill}
			/>
		</svg>
	);
};
