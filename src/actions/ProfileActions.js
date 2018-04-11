export const registerProfileList = (
    profileList
) => ({
    type: 'PROFILE_GETSTATE',
    profileList: profileList
});

export const errorAddProfile = () => ({
    type: 'PROFILE_ERROR_ADD'
});