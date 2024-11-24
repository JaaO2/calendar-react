const deleteEvent = async (id : number) : Promise<any> => {
    return await fetch(`http://localhost:3001/event/deleteEvent`, {method: 'DELETE', credentials: 'include', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({id: id})})
    .then(res => res.json())
    .then(data => data)
    .catch(err => {error: err.message});   
};
export default deleteEvent;