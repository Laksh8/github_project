const BACKEND_URL:string = "http://172.23.176.1:8000/"
const GITHUB_URL: string = "https://api.github.com/users/"

export const endpoint =  {
    "backend_url":BACKEND_URL,
    "github_url":GITHUB_URL,
    "login":`${BACKEND_URL}api/accounts/login/`,
    "register":`${BACKEND_URL}api/accounts/register/`,
    "refresh_token":`${BACKEND_URL}api/accounts/token/refresh/`,
    "logout":`${BACKEND_URL}api/accounts/logout/`
}
