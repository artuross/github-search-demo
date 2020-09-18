import React, { ReactNode, ReactNodeArray } from 'react';
import styles from './Container.module.scss';

interface Props {
	children?: ReactNode | ReactNodeArray;
}

export const Container: React.FunctionComponent<Props> = ({ children }) => {
	return (
		<div className={styles.container}>
			{React.Children.toArray(children)}
		</div>
	);
};
