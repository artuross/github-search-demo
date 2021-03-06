import React, { FunctionComponent, ReactNode, ReactNodeArray } from 'react';
import styles from './Container.module.scss';

interface Props {
	children?: ReactNode | ReactNodeArray;
}

export const Container: FunctionComponent<Props> = ({ children }) => {
	return (
		<div className={styles.container}>
			{React.Children.toArray(children)}
		</div>
	);
};
