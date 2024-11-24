const getUserData = async () : Promise<Person> => {
    return fetch('http://localhost:3001/user/getUserData', {method: 'GET', credentials: 'include'})
    .then(res => res.json())
    .then(data => data)
    .catch(err => {error: err.message})
}

export default getUserData