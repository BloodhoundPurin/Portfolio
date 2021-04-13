


let topic1 = document.getElementById("topic1");
let comment1 = document.getElementById("comment1");
let comment2 = document.getElementById("comment2");
let num = 0;
//window.onload = pageload;
function postFunction(){
    if(num == 0)
    {
        let text1= document.getElementById("text1").value;
        console.log(text1);
        document.getElementById("topic1").innerHTML = text1;
        num++;
        console.log(num);
        document.getElementById("text1").value = " ";
    }
    else if(num == 1)
    {
        let text1= document.getElementById("text1").value;
        console.log(text1);
        document.getElementById("comment1").innerHTML = text1;
        num++;
        console.log(num);
        document.getElementById("text1").value = " ";
    }
    else if(num == 2)
    {
        let text1= document.getElementById("text1").value;
        console.log(text1);
        document.getElementById("comment2").innerHTML = text1;
        num++;
        console.log(num);
        document.getElementById("text1").value = " ";
    }
    else
    {
        alert("กรุณากดปุ่ม Reset")
    }
}

function clearFunction(){

        document.getElementById("topic1").innerHTML="";
        document.getElementById("comment1").innerHTML="";
        document.getElementById("comment2").innerHTML="";
        num = 0;
}