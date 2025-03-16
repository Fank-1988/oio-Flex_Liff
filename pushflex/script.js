 function sendFlex() {
        var altText =  $('#altText').val()
        var message =  $('#flexjson').val()
        $('#myFlex').html(message)
        //document.getElementById("myFlex").innerHTML = message;

        liff.init({ liffId: "1656032875-dMjmJ80q" }); 
        // liff.id equals to liffId
        liff.ready.then(() => {
          liff
            .sendMessages([
              {
                type: "flex",
                altText: altText,
                contents: JSON.parse(message),
              },
            ])
            .then(() => {
              $('#btnsend').hide()
              $('#btnlad').show()
              Swal.fire({
                position: "center",
                icon: "success",
                title: "ส่ง Flex สำเร็จ !",
                showConfirmButton: false,
                timer: 1500,
              });
              setTimeout(function(){ liff.closeWindow(); }, 1000);
              //console.log("message sent");
            })
            .catch((err) => {
              console.log("error", err);
            });
        });
      } //จบฟังก์ชั่น
      function goSimulator() {
        liff.openWindow({
          url: "https://developers.line.biz/flex-simulator/",
          external: true,
        });
      }
function goSimulator() {
        liff.openWindow({
          url: "https://developers.line.biz/flex-simulator/",
          external: true,
        });
      }

function showFlex() {
  var x = $('#flexjson').val() 
  try {
    $('#flex1').html("") 
    x = JSON.parse(x)
    console.log(x)
    var flexdat = {}
    flexdat["type"] = "flex";
    flexdat["altText"] = "Flex Message";
    flexdat["contents"] = x;
    flex2html("flex1",flexdat);
  }
  catch(err){
    //console.log(err)
    $('#flex1').html("") 
  }
}

function resetJson(){
  $('#flexjson').val("") 
  $('#flex1').html("") 

}


// รับข้อมูลที่คัดลอกจากคลิปบอร์ด
function paste() {
    navigator.clipboard.readText()
        .then((text) => {
            // นำข้อมูลที่คัดลอกมาแปะในส่วนที่คุณต้องการ
            document.getElementById("flexjson").value = text;
        showFlex() 
        })
        .catch((err) => {
            console.error('ไม่สามารถแปะข้อมูลจากคลิปบอร์ดได้: ', err);
        });
}
