let qrValue = document.querySelector("#Qr-value");

let imgQr = document.querySelector(".img-qr");

let qrButton = document.querySelector(".Qr-button");

let imgBox = document.querySelector(".img-box");

function Generator(){
            if(qrValue.value.length > 0){
            let qrApi = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=%${qrValue.value}`
      
            imgQr.src= qrApi;
      
            imgBox.classList.add("img-box-show")
            qrValue.classList.remove("error");

      
      
      }
      else{
            qrValue.classList.add("error");
            imgBox.classList.remove("img-box-show")
            //     imgBox.classList.remove("img-box-show")
      }
}



qrButton.addEventListener("click",Generator)