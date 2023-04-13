import { useState } from "react";
import validate from "./validation";
import styles from "./form.module.css";
import imagen from "../../assets/img-login.png";

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
        <div className={styles.container}>
            <div className={styles.containerDiv}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <img src={imagen} alt="" />
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                    />
                    <p>{errors.email}</p>

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                    />
                    <p>{errors.password}</p>

                    <button
                        disabled={
                            !userData.email ||
                            !userData.password ||
                            errors.email ||
                            errors.password
                        }
                        type="submit"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;
