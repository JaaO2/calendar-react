const getEvent = async (id : number) : Promise<Event> => {
    return await fetch(`http://localhost:3001/event/getEvent?id=${id}`, {method: 'GET', credentials: 'include'})
    .then(res => res.json())
    .then(data => data)
    .catch(err => {error: err.message});
}

export default getEvent;