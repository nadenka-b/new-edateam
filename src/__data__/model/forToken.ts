import { jwtDecode } from 'jwt-decode';

export const isTokenValid = (token: string) => {
    if (!token) {
        return false;
    }
    const decoded = jwtDecode<{ exp: number }>(token);
    return decoded.exp * 1000 > Date.now(); // Сравниваем с текущим временем
};