// тут вытаскивайте любые селекторы которые вам надо

export const getIsLoggedIn = (state) => state.auth.isLoggedIn;
export const getUserId = (state) => state.auth.userId;
export const getIsLoading = (state) => state.auth.isLoading;
export const getToken = (state) => state.auth.token;
