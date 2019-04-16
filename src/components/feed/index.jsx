import React, {Component} from 'react';
import {connect} from "react-redux";
import styles from './style.scss';
import {Footer} from '../footer';
import {Card} from "./card";
import {Button} from "./button";
import {CheckBox, InputData, InputSelect, InputText} from "./input";
import {checkDatePattern} from "../../utils/common";
import {addNewPeople, editPeople, removePeople} from "../../actions/feed";

class FeedUI extends Component {
    constructor(props) {
        super(props);
        this.state = {

            first_name: "",
            last_name: "",
            birthday: "",

            extra_info: "",
            is_master: false,

            is_pregnancy: false,
            is_alcohol: false,
            is_study_abroad: false,
            is_chronic_disease: false,
            is_treatment: false,
            is_full_package: false,

            isOpenEdit: false,
            editId: null,

        };

    };


    addNewPeopleClick = () => {
        let data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            birthday: this.state.birthday,

            extra_info: this.state.extra_info,
            is_master: this.state.is_master,

            is_pregnancy: this.state.is_master,
            is_alcohol: this.state.is_alcohol,
            is_study_abroad: this.state.is_study_abroad,
            is_chronic_disease: this.state.is_chronic_disease,
            is_treatment: this.state.is_treatment,
            is_full_package: this.state.is_full_package,
        };

        this.props.addPeople(data);
        this.setState({
            first_name: "",
            last_name: "",
            birthday: "",

            extra_info: "",
            is_master: false,

            is_pregnancy: false,
            is_alcohol: false,
            is_study_abroad: false,
            is_chronic_disease: false,
            is_treatment: false,
            is_full_package: false,

            isOpenEdit: false,
            editId: null,
        })
    };

    deleteClick = (id) => {
        this.props.removePeople(id);
    };

    editClick = (id) => {
        let person = this.props.data[id];
        this.setState({
            first_name: person.first_name,
            last_name: person.last_name,
            birthday: person.birthday,

            extra_info: person.extra_info,
            is_master: person.is_master,

            is_pregnancy: person.is_pregnancy,
            is_alcohol: person.is_alcohol,
            is_study_abroad: person.is_study_abroad,
            is_chronic_disease: person.is_chronic_disease,
            is_treatment: person.is_treatment,
            is_full_package: person.is_full_package,

            isOpenEdit: true,
            editId: id,
        });
        window.scroll({top: 99999, left: 0, behavior: 'smooth'});
    };

    saveEditClick = () => {
        let data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            birthday: this.state.birthday,

            extra_info: this.state.extra_info,
            is_master: this.state.is_master,

            is_pregnancy: this.state.is_master,
            is_alcohol: this.state.is_alcohol,
            is_study_abroad: this.state.is_study_abroad,
            is_chronic_disease: this.state.is_chronic_disease,
            is_treatment: this.state.is_treatment,
            is_full_package: this.state.is_full_package,
        };
        this.props.editPeople(this.state.editId, data);

        this.setState({

            first_name: "",
            last_name: "",
            birthday: "",

            extra_info: "",
            is_master: false,

            is_pregnancy: false,
            is_alcohol: false,
            is_study_abroad: false,
            is_chronic_disease: false,
            is_treatment: false,
            is_full_package: false,

            isOpenEdit: false,
            editId: null,
        });
    };

    onChangeFirstName = (e) => this.setState({first_name: e.target.value});
    onChangeLastName = (e) => this.setState({last_name: e.target.value});
    onChangeBirthday = (e) => this.setState({birthday: checkDatePattern(e.target.value) ? e.target.value : this.state.birthday});
    onChangeExtra = (e) => this.setState({extra: e.target.value});

    onChangeMaster = () => this.setState({is_master: !this.state.is_master});

    onChangePregnancy = () => this.setState({is_pregnancy: !this.state.is_pregnancy});
    onChangeAlcohol = () => this.setState({is_alcohol: !this.state.is_alcohol});
    onChangeStudy = () => this.setState({is_study_abroad: !this.state.is_study_abroad});
    onChangeChronicDisease = () => this.setState({is_chronic_disease: !this.state.is_chronic_disease});
    onChangeTreatment = () => this.setState({is_treatment: !this.state.is_treatment});
    onChangeFullPackage = () => this.setState({is_full_package: !this.state.is_full_package});




    render() {
        return (
            <div className={styles.fullPageBack}>
                <div className={styles.fullPageContent}>
                    <div className={styles.fullPage}>
                        {this.props.data.map((person, key) => <Card key={key} index={key} person={person} deleteClick={this.deleteClick} editClick={this.editClick}/>)}


                        <div className={styles.formNewPeople}>
                            <div className={styles.blockInputs}>
                                <InputText label={"Имя"} value={this.state.first_name} onChange={this.onChangeFirstName}
                                           width={"260px"}/>
                                <InputText label={"Фамилия"} value={this.state.last_name}
                                           onChange={this.onChangeLastName} width={"260px"}/>
                                <InputData label={"Дата рождения"} value={this.state.birthday}
                                           onChange={this.onChangeBirthday} width={"124px"}/>
                            </div>
                            <div className={styles.extraInfo}>
                                <div className={styles.title}>
                                    Дополнительные покрытия
                                </div>
                                <div className={styles.extraInfoLine}>
                                    <InputSelect value={this.state.extra} onChange={this.onChangeExtra}
                                                 width={"330px"}/>
                                    <CheckBox state={this.state.is_master} label={"Профессионально"}
                                              onChange={this.onChangeMaster} width={"260px"} margin={"0 0 0 27px"}/>
                                </div>
                            </div>
                            <div className={styles.checkboxExtra}>
                                <div className={styles.blockCheckBox} style={{marginRight: "27px"}}>
                                    <CheckBox state={this.state.is_pregnancy} label={"Беременность"}
                                              onChange={this.onChangePregnancy} margin={"0 0 24px 0"}/>
                                    <CheckBox state={this.state.is_alcohol} label={"Алкогольное опьянение"}
                                              onChange={this.onChangeAlcohol} margin={"0 0 24px 0"}/>
                                    <CheckBox state={this.state.is_study_abroad} label={"Обучение за рубежем"}
                                              onChange={this.onChangeStudy} margin={"0"}/>
                                </div>
                                <div className={styles.blockCheckBox}>
                                    <CheckBox state={this.state.is_chronic_disease} label={"Хронические заболевания"}
                                              onChange={this.onChangeChronicDisease} margin={"0 0 24px 0"}/>
                                    <CheckBox state={this.state.is_treatment} label={"Лечение в РФ"}
                                              onChange={this.onChangeTreatment} margin={"0 0 24px 0"}/>
                                    <CheckBox state={this.state.is_full_package} label={"Полный пакет"}
                                              onChange={this.onChangeFullPackage} margin={"0"}
                                              isHint={true}
                                              hint="Применяется при страховании всех рисков (Гражданская ответственность, Багаж, Несчастный случай) одновременно"/>
                                </div>
                            </div>
                        </div>


                        <Button text={this.state.isOpenEdit ? "Сохранить изменения": "Добавить человека"} onClick={this.state.isOpenEdit ? this.saveEditClick :this.addNewPeopleClick }/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}


export const Feed = connect(
    store => ({
        data: store.data,
    }),
    dispatch => ({
        removePeople(index) {
            dispatch(removePeople(index));
        },
        addPeople(data) {
            dispatch(addNewPeople(data));
        },
        editPeople(index, data) {
            dispatch(editPeople(index,data));
        }
    })
)(FeedUI);