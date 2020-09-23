import classNames from 'classnames';
import React, { VoidFunctionComponent } from 'react';
import styles from './Avatar.module.scss';

interface Props {
	src: string;
	alt: string;
	variant?: 'small' | 'large';
}

export const Avatar: VoidFunctionComponent<Props> = ({
	src,
	alt,
	variant = 'small',
}) => {
	return (
		<img
			className={classNames({
				[styles.img]: true,
				[styles.large]: variant === 'large',
			})}
			src={src}
			alt={alt}
		/>
	);
};
