const getPeoples = async () : Promise<any> => {
    return await fetch('http://localhost:3001/user/getAllUsers', {method: 'GET'})
    .then(res  => res.json())
    .then(data => data)
    .catch(err => {error: err.message});
}

export default getPeoples;