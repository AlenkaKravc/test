import C from '../constans';


export const data = (state = [], action) => {
    switch (action.type) {
        case C.DELETE_PEOPLE:
            let new_state = [...state];
            console.log(state);
            new_state.splice(action.index, 1);

            return [...new_state];

        case C.ADD_NEW_PEOPLE:
            return [...state, {...action.data}];

        case C.EDIT_PEOPLE:
            let edited_state = [...state];
            edited_state.splice(action.index, 1, action.data);

            return [...edited_state];
        default:
            return state;
    }
};