import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './register.css'

const Register = () => {

    const [id, setId] = useState("");
    const [username, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("india");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("female");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const isValidate = () => {
        let isProceed = true;
        let errorMessage = '';

        if (!id) {
            isProceed = false;
            errorMessage += 'Please enter the Username. ';
        }
        if (!username) {
            isProceed = false;
            errorMessage += 'Please enter the Full Name. ';
        }
        if (!password) {
            isProceed = false;
            errorMessage += 'Please enter the Password. ';
        }
        if (!email) {
            isProceed = false;
            errorMessage += 'Please enter the Email. ';
        }
        if (email && !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
            isProceed = false;
            errorMessage += 'Please enter a valid email. ';
        }

        setErrorMessage(errorMessage);
        return isProceed;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let regObj = { id, username, password, email, phone, country, address, gender };
        if (isValidate()) {

            fetch("https://petsconnectapi.onrender.com/users", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regObj)
            }).then((res) => {
                navigate('/login');
            }).catch((err) => {
                console.error('Failed :' + err.message);
            });
        }
    }

    return (
        <div>
            <div className="Maincontainer">
                <form className="container" onSubmit={handleSubmit}>
                    <div className="card">
                        <div className="headers">
                            <h1>User Registration</h1>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="formelements">
                                    <label>ID <span className="errmsg">*</span></label>
                                    <input value={id} onChange={e => setId(e.target.value)} className="form-control"></input>
                                </div>
                                <div className="formelements">
                                    <label>Password <span className="errmsg">*</span></label>
                                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control"></input>
                                </div>
                                <div className="formelements">
                                    <label>Full Name <span className="errmsg">*</span></label>
                                    <input value={username} onChange={e => setName(e.target.value)} className="form-control"></input>
                                </div>
                                <div className="formelements">
                                    <label>Email <span className="errmsg">*</span></label>
                                    <input value={email} onChange={e => setEmail(e.target.value)} className="form-control"></input>
                                </div>

                                <div className="formelements">
                                    <label>Phone <span className="errmsg"></span></label>
                                    <input value={phone} onChange={e => setPhone(e.target.value)} className="form-control"></input>
                                </div>


                                <div className="formelements">
                                    <label>Country <span className="errmsg">*</span></label>
                                    <select value={country} onChange={e => setCountry(e.target.value)} className="form-control">
                                        <option value="india">India</option>
                                        <option value="usa">USA</option>
                                        <option value="singapore">Singapore</option>
                                    </select>
                                </div>


                                <div className="formelements">
                                    <label>Address</label>
                                    <textarea value={address} onChange={e => setAddress(e.target.value)} className="form-control"></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Gender</label>
                                    <br></br>
                                    <input type="radio" checked={gender === 'male'} onChange={() => setGender('male')} name="gender" className="app-check"></input>
                                    <label>Male</label>
                                    <input type="radio" checked={gender === 'female'} onChange={() => setGender('female')} name="gender" className="app-check"></input>
                                    <label>Female</label>
                                </div>
                                <div className="error">
                                    {errorMessage && <p className="message">{errorMessage}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <button type="submit" className="submit">Register</button>
                            <div className="login">
                            <button>
                                <Link to="/" className="link" >
                                Login
                                </Link>
                            </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
