function post (){
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);  //メモ投稿フォームの入力値を取得（非同期で送信のため）
    const XHR = new XMLHttpRequest();     //実際にHTTPリクエストを送信するためのオブジェクト
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
  } );
};

window.addEventListener('turbo:load', post);