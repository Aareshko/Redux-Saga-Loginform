export const login = (payload) => fetch('http://0.0.0.0:5000/api/v1/auth/login',{
    method: 'POST',
    body: payload
});