import { Link } from "react-router-dom";

function RegPages() {
    return (
        <div className="auth-card">
            <div className="auth-header">
                <Link to="/auth" className="auth-tab">Авторизация</Link>
                <div className="auth-tab active">Регистрация</div>
                <Link to="/Dota2" className="auth-x">X</Link>
            </div>
            <div className="auth-body">
                <form className="auth-form">
                    <label htmlFor="email">Введите e-mail</label>
                    <input type="email" id="email" placeholder="E-mail" required />

                    <label htmlFor="nickname">Введите никнейм</label>
                    <input type="text" id="nickname" placeholder="Никнейм" required />

                    <label htmlFor="password">Пароль</label>
                    <input type="password" id="password" placeholder="Пароль" required />
                    
                    <label htmlFor="confirm-password">Повторите пароль</label>
                    <input type="password" id="confirm-password" placeholder="Повторите пароль" required />

                    <button type="submit" className="btn-sumbit">Зарегистрироваться</button>
                    <div className="auth-footer">
                        <p>Я принимаю <a href="#">правила пользования сайтом</a> и <a href="#">политику обработки персональных данных</a>.</p>
                        <p>Даю свое согласие на получение по указанному адресу электронной почты уведомлений, информации, в том числе рекламной, включая рассылки.</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegPages;
