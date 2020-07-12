import React, { FunctionComponent } from 'react';
import styles from './gridBody.module.scss';

export interface GridBodyProps {
    data: Object[],
    selectCb?: (row: Object) => void
}

export const GridBody: FunctionComponent<GridBodyProps> = ({ data = [], selectCb}) => {
    const handleRowClick = (row: Object) => {
        if (selectCb) {
            selectCb(row)
        }
    };

    return (
        <tbody className={styles.body}>
        {
            data.map((row: Object, index: number) => (
                <tr aria-controls="cardInfo" key={index} className={styles.row} onClick={() => handleRowClick(row)}>
                    { Object.entries(row).map(([key, cellData]: any[], index: number) => <td key={index} className={styles.cell}>{ cellData }</td>) }
                </tr>
            ))
        }
        </tbody>
    );
}