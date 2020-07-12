import React, { FunctionComponent } from 'react';
import styles from './gridFooter.module.scss';
import { IGridHeader } from '../../types/index';

export interface GridFooterProps {
    columnHeaders: IGridHeader[]
}

export const GridFooter: FunctionComponent<GridFooterProps> = ({ columnHeaders = [] }) => (
    <tfoot className={styles.footer}>
        <tr className={styles.row}>
            <td colSpan={columnHeaders.length} className={styles.cell} />
        </tr>
    </tfoot>
);