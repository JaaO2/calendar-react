const getUserEvents = async (dates : Dates) : Promise<any> => {
    return await fetch(`http://localhost:3001/event/getUserEvents?firstDay=${dates.firstDay}&lastDay=${dates.lastDay}`, {method: 'GET', credentials: 'include'})
    .then(res => res.json())
    .then(data => data)
    .catch(err => {error: err.message});
}

export default getUserEvents;