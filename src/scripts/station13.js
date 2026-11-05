const text = document.getElementById("text");
function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  if(e.target.checked){
    text.style.backgroundColor ="red";
  }else{
    text.style.backgroundColor = "white";
  } 
}
