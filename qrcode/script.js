const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");

let preValue;
generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "กำลังสร้างคิวอาร์โค๊ด";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    document.getElementById("showname").innerHTML = `${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "สร้างคิวอาร์โค๊ด";
		document.getElementById("genqr").style.display = "none";
		document.getElementById("showback").style.display = "block";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
			
    }
});


function blackup(){
	location.reload();  
	 myWindow.close();
		// document.getElementById("genqr").style.display = "block";
 	//   document.getElementById("showback").style.display = "none";
}
