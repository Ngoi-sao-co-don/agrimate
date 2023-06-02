//import { Link, useHistory } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import '../css_pages/FormLogin.css'
import Button from './Button';
import { useState, useEffect } from 'react';

function FormLogin(){
    const [userName, setUserName] = useState(""); 
    const [passWord, setPassWord] = useState(""); 
    let [duongDan, setDuongDan] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (duongDan === "/AdminPage") {
            navigate(duongDan);
        }
    }, [duongDan, navigate]);

    const handleLogin = ()=>{
        if (userName === "doancoso" && passWord === "123456") {
            setDuongDan("/AdminPage");
        }
        else {
            setDuongDan("");
            alert("Bạn vui lòng kiểm tra lại thông tin tài khoản và mật khẩu");
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          handleLogin();
        }
    };
    return <div className="container_login" style={{background: "url('./webImage/bglogin.jpg') top center / cover no-repeat"}}>
        <div className='form_login_container'>
            <h4 to="/" className='logo header_link-logo'>Agri Mate</h4>
            <form className='form_login'>
                <input 
                    className='username' 
                    placeholder='tài khoản'
                    type='text'
                    onChange={(e) => {
                        setUserName(e.target.value)
                    }}
                    autoFocus
                />
                <input 
                    type='password' 
                    className='password' 
                    placeholder='mật khẩu'
                    onChange={(e) => {
                        setPassWord(e.target.value)
                    }}
                    onKeyDown={handleKeyPress}
                />
                <Link to = {duongDan}>
                    <Button onClick={handleLogin} text='Đăng nhập' iden='login_btn'/>             
                </Link>
                <p className='create_new_account_btn'>Tạo tài khoản mới <Button onClick={()=>{}} text="create?"/></p>
            </form>
        </div>
    </div>
}

export default FormLogin;