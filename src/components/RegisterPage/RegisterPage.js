import "./registerPage.css";

const RegisterPage = () => {

    return (
            <div className="wd-R-login">
                <div className="wd-R-container">
                    <input
                        type="text"
                        placeholder="username"
                        id="username"
                        className="wd-R-input"
                    />
                    <input
                        type="email"
                        placeholder="email"
                        id="email"
                        className="wd-R-input"
                    />
                    <input
                        type="password"
                        placeholder="password"
                        id="password"
                        className="wd-R-input"
                    />
                    <button className="wd-button">
                        Register as student
                    </button>
                    <button className="wd-button">
                        Register as Professor
                    </button>
                </div>
            </div>
    );
};
export default RegisterPage;