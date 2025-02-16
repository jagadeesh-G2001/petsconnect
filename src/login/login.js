import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../component/button";
import Input from "../component/input";
import './login.css'

export function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!username || !password) {
            setError("Please enter username and password");
            return;
        }

        // Perform login using fetch
        fetch(`https://petsconnectapi.onrender.com/users?username=${username}&password=${password}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Login failed');
                }
            })
            .then(users => {
                // Check if any user matches the provided credentials
                const authenticatedUser = users.find(user => user.username === username && user.password === password);
                if (authenticatedUser) {
                    navigate("/home");
                } else {
                    setError("Invalid username or password");
                }
            })
            .catch(error => {
                setError("Login failed. Please check your credentials.");
            });
    };

    return (
        <div className="form-home">
            <div className="card-login" >
            <div className="headerss">
                <h1>LOGIN</h1>
            </div>
            <div className="form-body">
                <div className="form">
                    <label htmlFor={"username"}>UserName</label>
                    <Input
                        id={"username"}
                        text={"Username"}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form">
                    <label htmlFor={"password"}>Password</label>
                    <Input
                        id={"password"}
                        text={"Password"}
                        type={"password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /></div>
                <div className="form">
                    {error && <div className="error">{error}</div>}
                    </div>
                <div className="form">
                    <Button Text={"Login"} OnClick={handleLogin} />

                   <div className="container2">
                   <div >
                    <h4>Are  you new to Petsconnect</h4>
                    </div>
                    <div>
                    <button>
                        <Link to="/register" className="register">
                            Create your Account
                        </Link>
                    </button>
                    </div>
                   </div>
                   </div>
                    </div>
            </div>
        </div>
    );
}
