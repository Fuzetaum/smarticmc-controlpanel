export const toggleSelectedProfile = (profileUsername) => ({
    type: 'TOGGLE_PROFILE',
    profile: profileUsername
});

export const toggleSelectedItem = (itemName) => ({
    type: 'TOGGLE_ITEM',
    item: itemName
});