const login = async (data : Object) : Promise<any> => {
    return fetch('http://localhost:3001/user/login', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
        credentials: 'include'
        })
    .then(res => res.json())
    .then(data => data)
    .catch(err => {error: err.message});
}

export default login;