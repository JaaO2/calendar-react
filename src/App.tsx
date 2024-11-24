import React, { useEffect, useState } from "react";
import './styles/index.scss';
import Calendar from "./calendar/Calendar";
import Login from './login/Login';
import isLogin from './functions/isLogin';
import Loading from "./calendar/Loading";

function App() : JSX.Element {
	const [mainRoute, setMainRoute] = useState(<Loading/>);

	useEffect(() : void =>  {
		(async () => {
		  const resultLogin : LoginResult = await isLogin();
		  const isLoginR : boolean = resultLogin?.result;
			setMainRoute(isLoginR ? <Calendar /> : <Login />);
		})();
	  }, []);
	
	return mainRoute;
}

export default App;
