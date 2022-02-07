// тут вытаскивайте любые селекторы которые вам надо

export const getIsLoggedIn = (state) => state.auth.isLoggedIn;
export const getUserId = (state) => state.auth.id;
export const getIsLoading = (state) => state.auth.isLoading;
export const getToken = (state) => state.auth.token;
export const getUserName = (state) => state.auth.user.username;
export const getError = (state) => state.auth.error;
export const getMessage = (state) => state.auth.message;
