import React, { useContext, useState } from 'react';
import './loginPage.css';
import { Context, router } from '../../App';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { dbManager } = useContext(Context)

    const handleSubmit = (e) => {
        e.preventDefault();
        // Gestisci la logica di login qui
        dbManager.login(email, password, (res) => console.log(res));
        if (sessionStorage.getItem('userLogged') === 'true') {
            router.navigate('/paginaDocente')
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;