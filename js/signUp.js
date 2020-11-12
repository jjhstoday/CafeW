function radioCheck() {
  // HTML에서 아이디 검색 후 변수에 담아주기
  var female = document.getElementById('user_female');
  var male = document.getElementById('user_male');

  // female이 체크됐을때 (true) class추가 및 삭제
  if( female.checked ) {
    female.classList.add('radioOn');
    male.classList.remove('radioOn');
  }
  // female의 checked가 false일때 클래스 삭제 및 추가
  else {
    male.classList.add('radioOn');
    female.classList.remove('radioOn');
  }
}

// 이용약관 체크박스
function guideCheck() {
  var userGuide = document.getElementById('user_guide');
  var userCheck = userGuide.checked;

  if(userCheck) {
    userGuide.parentElement.classList.add('is__check');
  }else {
    userGuide.parentElement.classList.remove('is__check');
  }
}