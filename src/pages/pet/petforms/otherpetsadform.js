import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Otherpetsform = () => {

    const [username, setName] = useState("");
    const [price, setPrice] = useState("₹");
    const [description, setDescription] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [title, setTitle] = useState("");

    const [image, setImage] = useState(null);


    const navigate = useNavigate();

    const isValidate = () => {
        let isProceed = true;
        let errorMessage = '';
        if (!phone) {
            isProceed = false;
            errorMessage += 'please enter phone Number';
        }
        if (phone && !/^[6-9]\d{9}$/) {
            isProceed = false;
            errorMessage += 'please enter valid phone Number';
        }
        if (!username) {
            isProceed = false;
            errorMessage += 'Please enter the Full Name. ';
        }
        if (!address) {
            isProceed = false;
            errorMessage += 'Please enter the Address. ';
        }
        if (!description) {
            isProceed = false;
            errorMessage += 'Please enter the description. ';
        }
        if (!price) {
            isProceed = false;
            errorMessage += 'Please enter the price. ';
        }

        if (!image) {
            isProceed = false;
            errorMessage += 'Please upload image. ';
        }
        if (!title) {
            isProceed = false;
            errorMessage += 'Please upload title. ';
        }


        setErrorMessage(errorMessage);
        return isProceed;
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            // Convert the image file to a base64 string
            const imageData = reader.result;
            setImage(imageData);
        };

        reader.readAsDataURL(file);
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (isValidate()) {
            const uniqueid=`hamsters_${Date.now()}`

            const formData = { username, id:uniqueid, phone, address, image, description, price };

            fetch("https://petsconnectapi.onrender.com/others", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            }).then((res) => {
                navigate('/otherpets');
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
                        <div className="card-header">
                            <h1>Ads For Otherpets</h1>
                        </div>
                        <div className="card-body">
                            <div className="formelements">
                                <label>AD Title <span className="errmsg">*</span></label>
                                <input value={title} onChange={e => setTitle(e.target.value)} className="form-control"></input>
                            </div>


                            <div className="formelements">
                                <label>Description <span className="errmsg">*</span></label>
                                <textarea value={description} onChange={e => setDescription(e.target.value)} className="form-control" />

                            </div>
                            <div className="formelements">
                                <label>SET A PRICE <span className="errmsg">*</span></label>
                                <input value={price} onChange={e => setPrice(e.target.value)}  className="form-control"></input>
                            </div>

                            <div className="formelements">
                                <label>Profile Image</label>
                                <input type="file" onChange={handleImageChange} className="form-control-file"></input>
                            </div>


                            <div className="formelements">
                                <label>Address</label>
                                <textarea value={address} onChange={e => setAddress(e.target.value)} className="form-control"></textarea>
                            </div>


                            <div className="formelements">
                                <label>Full Name <span className="errmsg">*</span></label>
                                <input value={username} onChange={e => setName(e.target.value)} className="form-control"></input>
                            </div>


                            <div className="formelements">
                                <label>Phone <span className="errmsg"></span></label>
                                <input value={phone} onChange={e => setPhone(e.target.value)} className="form-control"></input>
                            </div>



                            {errorMessage && <p className="error">{errorMessage}</p>}


                        </div>
                        <div className="footer">
                            <button type="submit" className="submit">Post now</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Otherpetsform;
