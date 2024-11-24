import React, {useEffect, useState} from 'react';
import Header from './header/Header';
import CalendarBox from './days/CalendarBox';
import getUserData from '../functions/getUserData';

function Calendar() : JSX.Element {
    const [date, setDate] = useState<Date>(new Date());
    const [userInformation, setUserInformation] = useState<Person>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserData();
            setUserInformation(data);
        };
        fetchData();
    }, []);

    return (
	<main>
        <Header date = {date} setDate = {setDate} userInformation = {userInformation}/>
        <CalendarBox date = {date} userInformation = {userInformation}/>
	</main>
	);
}

export default Calendar;
