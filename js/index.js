function modalOpen() {
  document.getElementById('lecture_modal').parentElement.classList.add('is__active');
}

function modalClose() {
  document.getElementById('lecture_modal').parentElement.classList.remove('is__active');
}

function noticeNone() {
  document.getElementById('notice_bar').style.display = 'none';
}