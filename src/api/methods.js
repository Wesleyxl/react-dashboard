import { BASE_URL } from '../env';

export const apiPublicGet = async (endpoint) => {

    const resp = await fetch(BASE_URL + endpoint, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'content-Type': 'application/json'
        },
        body: ''
    });

    const response = await resp.json();

    return response;

}

export const apiGet = async (endpoint, token) => {

    const resp = await fetch(BASE_URL + endpoint, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    });

    const response = await resp.json();

    return response;

}

export const apiPost = async (endpoint, body = {}) => {

    const resp = await fetch(BASE_URL + endpoint, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'content-Type': 'application/json',
            Authorization: `Bearer ${body.token}`
        },
        body: JSON.stringify(body)
    });

    const response = await resp.json();

    return response;

}

export const apiPublicPost = async (endpoint, body = {}) => {

    const resp = await fetch(BASE_URL + endpoint, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const response = await resp.json();

    return response;

}

