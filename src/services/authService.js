import jwtDecode from "jwt-decode";
import http from "./httpService";

const apiEndPoint = "/auth";
const tokenKey = "madx-dcv-token";

http.setJwt(getJwt());

export async function login(email, password) {
    const { data: jwt } = await http.post(apiEndPoint, { email, password });
    localStorage.setItem(tokenKey, jwt);
}

export async function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}

export async function logOut() {
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecode(jwt);
    } catch (ex) {
        return null;
    }
}

export function getJwt() {
    return localStorage.getItem(tokenKey);
}

export default {
    login,
    loginWithJwt,
    logOut,
    getCurrentUser,
    getJwt
}