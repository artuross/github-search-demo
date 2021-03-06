import React, { ReactNode, ReactNodeArray, VoidFunctionComponent } from 'react';
import styles from './FormGroup.module.scss';

interface Props {
	children?: ReactNode | ReactNodeArray;
}

export const FormGroup: VoidFunctionComponent<Props> = ({ children }) => {
	return (
		<div className={styles.container}>
			{React.Children.toArray(children)}
		</div>
	);
};
