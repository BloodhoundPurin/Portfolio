window.onload = loginLoad;

function loginLoad()
{
    var loginButton = document.getElementById('myLogin');
    loginButton.onsubmit = checkLogin;
}


function checkLogin()
{
    const queryString = window.location.search;
    const UrlIDpass = new URLSearchParams(queryString);
    const IDlogin = UrlIDpass.get('username');
    const Passlogin = UrlIDpass.get('password');
    var User = document.forms["myLogin"]["username"].value;
    var Pass = document.forms["myLogin"]["password"].value;

    if((User == IDlogin) && (Pass == Passlogin))
    {
        alert("เข้าระบบสำเร็จ");
    }
    
    else
    {
        alert("ชื่อหรือรหัสไม่ถูกต้อง กรุณากรอกใหม่อีกครั้ง");
        return false;
    }
    
}