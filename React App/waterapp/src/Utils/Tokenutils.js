export function Authorization()
{
    return getToken()?true:false;
}
export function getToken(){
    return localStorage.getItem("token");
}
export function logOut()
{
    return localStorage.removeItem("token");
}