
        var userId = "";



        function initializeLiff(myLiffId) {
            liff
                .init({
                    liffId: myLiffId
                })
                .then(() => {

                    if (!liff.isInClient() && !liff.isLoggedIn()){
                        // window.alert("กรุณาเข้าสู่ระบบบัญชี LINE ของคุณ");
                        liff.login({redirectUri: window.location.href});
                    }
                    else{

                        liff.getProfile().then(function(profile) {
                            document.getElementById('profileurl').src = '' + profile.pictureUrl
                            document.getElementById('displaynamefield').textContent = '' + profile.displayName ;

                            userId = profile.userId;
                            if (!liff.isInClient()){

                            }
                        }).catch(function(error) {
                            window.alert('Error getting profile: ' + error);
                        })
                    }

                })
        }



    function sendText(text) {
        if (!liff.isInClient()) {
          shareTargetPicker(text);
        } else {
          sendflex(text);
        }
      }
function sendflex(text){
  liff.sendMessages(text).then(function(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'ส่งเข้าแชทเรียบร้อย',
      showConfirmButton: false,
      timer: 1500
    })
    //   .then(()=>{
    //   liff.closeWindow();
    // })

  })
}
     function shareTargetPicker(text) {
        liff.shareTargetPicker(text).then(function (res) {
    if (res) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'ส่งเข้าแชทเรียบร้อย',
        showConfirmButton: false,
        timer: 1500
      })
    //       .then(()=>{
    //   liff.closeWindow();
    // })
    } else {
      // sending message canceled
      console.log("TargetPicker was closed!");
    }
  }).catch(function (error) {
          window.alert("Failed to send message " + error);
        });
      }
