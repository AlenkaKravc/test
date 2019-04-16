import React from 'react';

import styles from './styles.scss';

import pencil from '../../../assets/media/pencil.png';
import close from '../../../assets/media/close.png';
import {formDate, getStringAboutPerson} from "../../../utils/common";

export const Card = ({person, index, editClick, deleteClick}) => (
    <div className={styles.card}>
        <div className={styles.firstLine}>
            <div className={styles.mainInfo}>
                {person.first_name.concat(" ", person.last_name)}<span className={styles.date}>{ " ( ".concat(formDate(person.birthday), " )") } </span>
            </div>
            <div className={styles.settings}>
                <img src={pencil} alt={"pencil"} className={styles.cardImg} onClick={() => editClick(index)}/> Редактирвоать
                <img src={close} alt={"pencil"} className={styles.cardImg} onClick={() => deleteClick(index)}/> Удалить
            </div>
        </div>
        <div className={styles.secondLine}>
            <div className={styles.extraInfo}>
                {person.is_master ? "Профессиональное занятие спортом" : "Занятие спортом"}
            </div>
            <div className={styles.info}>
                {getStringAboutPerson(person)}
            </div>
        </div>
    </div>
);
