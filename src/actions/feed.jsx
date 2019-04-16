import C from '../constans';


export const removePeople = (index) =>
    ({
        type: C.DELETE_PEOPLE,
        index: index,
    });

export const editPeople = (index, data) =>
    ({
        type: C.EDIT_PEOPLE,
        index: index,
        data: data
    });

export const addNewPeople = (data) => (
    {
        type: C.ADD_NEW_PEOPLE,
        data: data,
    });