import React, { useState } from 'react';
import styles from './gridBody.module.scss';

export interface GridBodyProps {
    data: any[],
    selectCb?: any
}

export const GridBody = ({ data, selectCb}: GridBodyProps) => (
    <tbody className={styles.body}>
        {
            data.map((row: any, index: number) => (
                <tr aria-controls="cardInfo" key={row.name} className={styles.row} onClick={(e: any) => selectCb(row)}>
                    { Object.entries(row).map((rowData: any[]) => {
                        const [key, cellData] = rowData;
                        return <td key={key} className={styles.cell}>{ cellData }</td>;
                    })}
                </tr>
            ))
        }
    </tbody>
);