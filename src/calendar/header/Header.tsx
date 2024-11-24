import React from 'react';
import HeaderDate from './HeaderDate';
import logout from '../../functions/logout';

function Header(props : any) {

    const username : string = props.userInformation?.username ? props.userInformation?.username : "Ładowanie...";

    const loginout = () : void => {
        logout();
        window.location.reload();
    }

    return (
        <header>
            <div className="name">Kalendarz</div>
            <HeaderDate date = {props.date} setDate = {props.setDate} />
            <div className="user">
                <p>{username}</p>
                <p className="logout" onClick={e => loginout()}>Wyloguj się</p>
            </div>
        </header>
  );
}

export default Header;
