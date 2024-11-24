const recancelEvent = async (id : number) : Promise<any> => {
    return fetch(`http://localhost:3001/event/recancelEvent`, {method: 'POST', credentials: 'include', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({id: id})})
    .then(res => res.json())
    .then(data => data)
    .catch(err => {error: err.message});
}
export default recancelEvent