const cancelEvent = async (id : number) : Promise<void> => {
    const data = {
        id: id
    }
    return await fetch(`http://localhost:3001/event/cancelEvent`, {
        method: 'POST', 
        credentials: 'include',            
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => data)
    .catch(err => {error: err.message});
}

export default cancelEvent;