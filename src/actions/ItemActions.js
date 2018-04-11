export const registerItemList = (
    itemList
) => ({
    type: 'ITEM_GETSTATE',
    itemList: itemList
});

export const errorAddItem = () => ({
    type: 'ITEM_ERROR_ADD'
});