// 로그인 눈아이콘 //
document.getElementById("pwShowHide").addEventListener("click", function () {
    const userPW = document.getElementById("userPW");
    const passwordIcon = document.getElementById("pwShowHide");
  
    // 패스워드가 표시된 상태인지 확인
    if (userPW.type === "password") {
      // 패스워드 보이기
      userPW.type = "text";
      passwordIcon.src = "../static/assets/img/login/password(2).png";
    } else {
      // 패스워드 숨기기
      userPW.type = "password";
      passwordIcon.src = "../static/assets/img/login/password.png";
    }
  });