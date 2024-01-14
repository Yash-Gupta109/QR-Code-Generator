const url ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

let imgBox =document.querySelector(".imgBox");
let qrImage = document.getElementById("qrImage");
let input=document.querySelector("#input");
let btn=document.querySelector(".btn");

function generateQr(){
    if(input.value.length>0){
        let example =input.value;
    let newURl =url+example;
    qrImage.src =newURl;

    imgBox.classList.add("show-img");
    }
    else{
            input.classList.add("error"); 
            setTimeout(()=>{
                input.classList.remove("error"); 
            },1000);
    }
    }
    

