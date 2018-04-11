const userList = (state = [], action) => {
    switch(action.type) {
/**
 *      This is the action of populating the application's state with the
 * back end server's item list. This must replace the application's current
 * state, in order to let the app reflect the server's state.
 */
        case 'ITEM_GETSTATE':
            return [
                ...action.itemList
            ];
        default:
            return state;
    }
}

export default userList;