import { useState } from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const changePass = (e) => {
        setPassword(e.target.value);
    }
    const changeUsername = (e) => {
        setUsername(e.target.value);
    };

    const submitButton = async (e) => {
        const res = await fetch(
            `https://test-subject-2021.herokuapp.com/login?username=${username}&password=${password}`
        ).then((response) => {
            return response.json();
        });
    }

    return (
        <div>
            <form>
                <div className="container">
                    <label> Username: </label>
                    <input
                        onChange={changeUsername}
                        type="text"
                        placeholder="Enter Username"
                        name="username"
                        required
                    />
                    <br />
                    <label> PassWord: </label>
                    <input
                        onChange={changePass}
                        type="password"
                        placeholder="Enter PassWord"
                        name="password"
                        required
                    />
                    <br />
                    <button type = "submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
