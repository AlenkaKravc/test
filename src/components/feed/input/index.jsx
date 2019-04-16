import React, {Component} from 'react';
import styles from './styles.scss';


import open_img from '../../../assets/media/open.png';
import close from '../../../assets/media/close.png';
import question from '../../../assets/media/question.png';

export const InputText = ({label = "", value = "", width = "100%", onChange}) => (
    <div className={styles.formInput} style={{width: width}}>
        <label className={styles.label}>{label}</label>
        <input className={styles.input}
               type={"text"}
               onChange={(e) => onChange(e)}
               value={value}/>
    </div>
);

export const InputData = ({label = "", value = "", width = "100%", onChange}) => (
    <div className={styles.formInput} style={{width: width}}>
        <label className={styles.label}>{label}</label>
        <input className={styles.inputDate}
               type={"text"}
               placeholder={"ДД-MM-ГГГГ"}
               maxLength={10}
               onChange={(e) => onChange(e)}
               value={value}/>
    </div>
);


export const InputSelect = ({value = "", width = "100%", onChange}) => (
    <div className={styles.formInput} style={{width: width}}>
        <input className={styles.inputSelect}
               type={"text"}
               readOnly={"readonly"}
               placeholder={"Занятие спортом"}
               onChange={(e) => onChange(e)}
               value={value}/>
        <img src={open_img} alt={"open"} className={styles.openImg}/>
    </div>
);

/*
export function CheckBox({state = false, isHint = false, hint = "", label = "", width = "100%", margin = "0", onChange}) {

    return <div className={styles.checkboxForm} style={{width: width, margin: margin}}>
        <div className={styles.checkbox} onClick={onChange}>
            {state && <img src={close} alt={"select"} className={styles.selectImg}/>}
        </div>
        {label}
        {isHint && <img src={question} alt={"hint"} className={styles.questionImg}
                        onMouseOver={() => openHint()}
                        onMouseOut={() => closeHint()}/>}
    </div>
}*/

export class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHintShow: false,
        }
    }


    render() {
        let {state = false, isHint = false, hint = "", label = "", width = "100%", margin = "0", onChange} = this.props;
        return <div className={styles.checkboxForm} style={{width: width, margin: margin}}>
            <div className={styles.checkbox} onClick={onChange}>
                {state && <img src={close} alt={"select"} className={styles.selectImg}/>}
            </div>
            {label}
            {isHint && <div className={styles.hintBloclk}>
                <img src={question} alt={"hint"} className={styles.questionImg}
                     onMouseOver={() => this.setState({isHintShow: true})}
                     onMouseOut={() => this.setState({isHintShow: false})}/>
                {this.state.isHintShow &&
                <div className={styles.hint}>
                    {hint}
                </div>}
                {this.state.isHintShow &&
                    <div className={styles.triangle}/>
                }
            </div>}

        </div>
    }
}

