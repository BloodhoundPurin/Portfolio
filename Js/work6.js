window.onload = pageLoad;
alert("ยินดีต้อนรับ");

function pageLoad()
{
    var form = document.getElementById('myForm');
    form.onsubmit = checkPassword;
}
function checkPassword()
{  
   let x = document.getElementById('password').value;
   let y = document.getElementById('repassword').value;

   if(x == y && x != null && y != null)
   {
       alert("ลงทะเบียนสำเร็จ");
       return true;
   }
   else if(x != y || x == null || y == null)
   {
       alert("กรุณากรอกรหัสใหม่อีกครั้ง");
       return false;
   }
}
