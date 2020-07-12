import React, { FunctionComponent } from 'react';
import styles from './footer.module.scss'

export interface FooterProps {}

export const Footer: FunctionComponent<FooterProps> = () => (
    <footer className={styles.footer}>
        Created By Mark Rupp
    </footer>
);