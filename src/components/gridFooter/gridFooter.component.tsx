import React from 'react';
import styles from './gridFooter.module.scss';

export interface GridFooterProps {
    columnHeaders: string[]
}

export const GridFooter = ({ columnHeaders }: GridFooterProps) => (
    <tfoot className={styles.footer}>
        <tr className={styles.row}>
            { columnHeaders.map((columnFooter: string, index: number) => <td className={styles.cell} />) }
        </tr>
    </tfoot>
);