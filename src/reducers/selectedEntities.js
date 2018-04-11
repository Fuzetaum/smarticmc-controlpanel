const selectedEntities = (
    state = {
        profile: '',
        item: ''
    },
    action
) => {
    console.log(action);
    switch(action.type) {
        case 'TOGGLE_PROFILE':
            return (state.profile !== action.profile) ?
            {
                profile: action.profile,
                item: state.item
            }
            : {
                profile: '',
                item: state.item
            };
        case 'TOGGLE_ITEM':
        return (state.item !== action.item) ?
        {
            profile: state.profile,
            item: action.item
        }
        : {
            profile: state.profile,
            item: ''
        };
        default:
            return state;
    }
}

export default selectedEntities;