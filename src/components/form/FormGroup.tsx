import React, { ReactNode, ReactNodeArray } from 'react';
import styles from './FormGroup.module.scss';

interface Props {
	children?: ReactNode | ReactNodeArray;
}

export const FormGroup: React.FunctionComponent<Props> = ({ children }) => {
	return (
		<div className={styles.container}>
			{React.Children.toArray(children)}
		</div>
	);
};
