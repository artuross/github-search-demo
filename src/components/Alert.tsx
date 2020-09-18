import classNames from 'classnames';
import React from 'react';
import styles from './Alert.module.scss';

interface Props {
	variant: 'info';
}

export const Alert: React.FunctionComponent<Props> = ({
	variant,
	children,
}) => {
	return (
		<div
			className={classNames({
				[styles.container]: true,
				[styles.info]: variant === 'info',
			})}
		>
			{children}
		</div>
	);
};
