import React from 'react';
import style from './emptyItem.module.scss'

const EmptyItem = () => {
    return (
        <div className={style.empty}>
            <div className={style.empty__content}>
                <div className={style.empty__name}/>
            </div>
        </div>
    );
};

export default EmptyItem;