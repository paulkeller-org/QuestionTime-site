import React, { useState, useMemo } from "react";

type LoginProps = {
    onLogin: (username: string, password: string) => void
}

/*  Simple login react component that will return a login username and password
    to the caller.
*/

const Login = (loginProps: LoginProps) => {

    const { onLogin } = loginProps;
    const [username, SetUserName] = useState("");
    const [password, SetPassword] = useState("");
    const isLoginDisabled = useMemo(() => (username === "" || password === ""), [username, password]);

    return (
        <React.Fragment>
            <div>
                Username: <input name="username" onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    SetUserName(event.target.value.trim() ?? "")} />
            </div>
            <div>
                Password: <input name="password" type="password" onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    SetPassword(event.target.value.trim() ?? "")} />
            </div>
            <div>
                <button name="Login" disabled={isLoginDisabled} onClick={() => onLogin(username, password)}>Login</button>
            </div>
        </React.Fragment>
    );
}

export default Login;