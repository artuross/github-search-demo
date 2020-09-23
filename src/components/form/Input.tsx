import classNames from 'classnames';
import React, {
	ComponentType,
	InputHTMLAttributes,
	SVGAttributes,
	VoidFunctionComponent,
} from 'react';
import styles from './Input.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	Icon?: ComponentType<SVGAttributes<SVGElement>>;
	iconWidth?: number;
	iconHeight?: number;
}

export const Input: VoidFunctionComponent<Props> = ({
	Icon = null,
	iconWidth,
	iconHeight,
	...props
}) => {
	return (
		<div className={styles.container}>
			<input
				className={classNames({
					[styles.input]: true,
					[styles.withIcon]: Icon !== null,
				})}
				{...props}
			/>

			{Icon !== null && (
				<Icon
					className={styles.icon}
					width={iconWidth}
					height={iconHeight}
				/>
			)}
		</div>
	);
};
