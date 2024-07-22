export const login = (user) => ({
    type: 'LOGIN',
    payload: user,
});

export const logout = () => ({
    type: 'LOGOUT',
});

export const signup = (user) => ({
    type: 'SIGNUP',
    payload: user,
});