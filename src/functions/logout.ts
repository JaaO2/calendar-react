const logout = async () : Promise<any>  => {
    return fetch('http://localhost:3001/user/logout', {method: 'GET', credentials: 'include'})
    .then(res => res.json())
    .then(data => data)
    .catch(err => {error: err.message});
}

export default logout