import { useState } from "react";
import validate from "./validation";
import style from "./form.module.css";

const Form = ({ login }) => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
        setErrors(
            validate({ ...userData, [event.target.name]: event.target.value })
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        login(userData);
    };

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                />
                <p>{errors.email}</p>

                <label htmlFor="password">Password</label>
                <input
                    type="text"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                />
                <p>{errors.password}</p>

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Form;
