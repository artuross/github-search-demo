import classNames from 'classnames';
import React, { useEffect, useState, VoidFunctionComponent } from 'react';
import { LoadingIcon } from './icons/LoadingIcon';
import styles from './Loader.module.scss';

interface Props {
	text?: string;
	delayMs?: number;
	visible?: true;
}

export const Loader: VoidFunctionComponent<Props> = ({
	text = 'Loading',
	delayMs = 100,
	visible,
}) => {
	const [isVisible, setIsVisible] = useState(visible || false);

	useEffect(() => {
		const id = setTimeout(() => setIsVisible(true), delayMs);

		return () => clearTimeout(id);
	}, [delayMs]);

	return (
		<div
			className={classNames({
				[styles.container]: true,
				[styles.visible]: isVisible,
			})}
		>
			<LoadingIcon width={27} height={28} fillColor={'#000'} />
			{Boolean(text) && <span>{text}</span>}
		</div>
	);
};
