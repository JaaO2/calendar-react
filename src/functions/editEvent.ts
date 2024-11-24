const addEvent = async (data : Object) : Promise<AddEventResponse | AddEventResponseError[]> => {
    try {
        const res = await fetch('http://localhost:3001/event/editEvent', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data)
        });
        const data_1 = await res.json();
        if (data_1.errors) {
            throw Error(JSON.stringify(data_1.errors));
        };
        const result_1: AddEventResponse = { status: true };
        return result_1;
    } catch (err) {
        const errorTable = JSON.parse(err.message);
        const result_2: AddEventResponseError[] = [];
        errorTable.forEach((error: { path: string; msg: string; }) => result_2.push({ field: error.path, message: error.msg }));
        return result_2;
    }
}

export default addEvent