import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Catform = () => {
    const [username, setName] = useState("");
    const [price, setPrice] = useState("₹");
    const [description, setDescription] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const isValidate = () => {
        let isProceed = true;
        let errorMessage = [];

        if (!phone) {
            isProceed = false;
            errorMessage.push("Please enter phone number.");
        } else if (!/^[6-9]\d{9}$/.test(phone)) {
            isProceed = false;
            errorMessage.push("Please enter a valid phone number.");
        }

        if (!username) {
            isProceed = false;
            errorMessage.push("Please enter the full name.");
        }

        if (!address) {
            isProceed = false;
            errorMessage.push("Please enter the address.");
        }

        if (!description) {
            isProceed = false;
            errorMessage.push("Please enter the description.");
        }

        if (!price || price === "₹") {
            isProceed = false;
            errorMessage.push("Please enter the price.");
        }

        if (!image) {
            isProceed = false;
            errorMessage.push("Please upload an image.");
        }

        if (!title) {
            isProceed = false;
            errorMessage.push("Please enter the title.");
        }

        setErrorMessage(errorMessage.join(" "));
        return isProceed;
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file && !file.type.startsWith("image/")) {
            alert("Please upload a valid image file.");
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isValidate()) {
            // Generate unique ID dynamically
            const uniqueId = `cat_${Date.now()}`;

            const formData = {
                id: uniqueId, // Use generated ID
                username,
                phone,
                address,
                image,
                description,
                price,
                title,
            };

            fetch("https://petsconnectapi.onrender.com/cat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error("Failed to submit");
                    }
                    navigate("/cat");
                })
                .catch((err) => {
                    console.error("Failed:", err.message);
                });
        }
    };

    return (
        <div className="Maincontainer">
            <form className="container" onSubmit={handleSubmit}>
                <div className="card">
                    <div className="card-header">
                        <h1>Ads For Cat</h1>
                    </div>
                    <div className="card-body">
                        <div className="formelements">
                            <label>AD Title <span className="errmsg">*</span></label>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
                        </div>

                        <div className="formelements">
                            <label>Description <span className="errmsg">*</span></label>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" />
                        </div>

                        <div className="formelements">
                            <label>SET A PRICE <span className="errmsg">*</span></label>
                            <input value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" />
                        </div>

                        <div className="formelements">
                            <label>Profile Image <span className="errmsg">*</span></label>
                            <input type="file" accept="image/*" onChange={handleImageChange} className="form-control-file" />
                        </div>

                        <div className="formelements">
                            <label>Address <span className="errmsg">*</span></label>
                            <textarea value={address} onChange={(e) => setAddress(e.target.value)} className="form-control"></textarea>
                        </div>

                        <div className="formelements">
                            <label>Full Name <span className="errmsg">*</span></label>
                            <input value={username} onChange={(e) => setName(e.target.value)} className="form-control" />
                        </div>

                        <div className="formelements">
                            <label>Phone <span className="errmsg">*</span></label>
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" />
                        </div>

                        {errorMessage && <p className="error">{errorMessage}</p>}
                    </div>

                    <div className="footer">
                        <button type="submit" className="submit">Post now</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Catform;
