import { apiGet, apiPublicPost } from './methods';

export const authRoutes = {

    login: async (email, password) => {
        const response = await apiPublicPost('/auth/login', {email: email, password: password});

        return response;
    },

    me: async (token) => {
        const response = await apiGet('/auth/me',token);

        return response;
    }

}