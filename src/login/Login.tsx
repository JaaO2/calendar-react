import React, {useRef, useState} from 'react'
import login from '../functions/login';
function Login() {

    const [error, setError] = useState<any>({});
    const usernameRef : React.MutableRefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
    const passwordRef : React.MutableRefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

    const loginViaForm : any = async (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setError(null);
        event.preventDefault();
        event.stopPropagation();

        if (!usernameRef || !usernameRef.current.value) return setError({username: "Nazwa użytkownika jest wymagana"});
        if (!passwordRef || !passwordRef.current.value) return setError({password: "Hasło jest wymagane"});

        const data : Object = {username: usernameRef.current.value, password: passwordRef.current.value};
        const result = await login(data);
        if (result?.errors) return setError({username: result?.errors[0].msg});
        if (!result?.errors) window.location.reload();

    }

  return (
    <main>
      <div className="loginPanel">
        <h2>Zaloguj się</h2>
        <form>
            <input ref={usernameRef} type="text" name="username" placeholder="Nazwa użytkownika" />
            <p className="error">{error?.username && error.username}</p>
            <input ref={passwordRef} type="password" name="password" placeholder="Hasło" />
            <p className="error">{error?.password && error.password}</p>
            <button onClick={e => loginViaForm(e)}>Zaloguj się</button>
        </form>
      </div>
    </main>
  )
}

export default Login
