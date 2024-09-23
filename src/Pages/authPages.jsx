import { Link } from "react-router-dom";

function AuthPages() {
    return(
        <div class="auth-card">
            <div class="auth-header">
                <div class="auth-tab active">Автаризация</div>
                <Link to="/reg" class="auth-tab">Регестрация</Link>
                <Link to="/" className="auth-x">X</Link>
            </div>
        <div class="auth-body">
            <div class="auth-form">
                <label for="email">Введите e-mail</label>
                <input type="email" placeholder="E-mail" required />

                <label for="password">Пароль</label>
                <input type="password" placeholder="Пароль" required />

                <button type="submit" class="btn-sumbit">Войти</button>

                <a href="#" class="forgot-password">Восстановить пароль</a>
                <div class="auth-footer">
                    <p>Авторизуясь через социальные сети, вы соглашаетесь с <a href="#">правилами использования сайта</a> и <a href="#">политикой обработки персональных данных</a>.</p>
                    <p>Форма защищена Google reCAPTCHA (<a href="#">политика обработки персональных данных</a>, <a href="#">условия работы</a>).</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default AuthPages;