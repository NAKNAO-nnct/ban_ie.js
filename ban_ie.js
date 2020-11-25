// ブラウザ判定
window.onload = function () {
  var userAgent = window.navigator.userAgent;
  // console.log(userAgent);

  if (
    userAgent.indexOf("MSIE") != -1 ||
    !!document.documentMode == true ||
    userAgent.indexOf("Trident/7.0") != -1
  ) {
    console.log("IEでのアクセスは規制されています");

    // headの削除
    let head = document.getElementsByTagName('head')[0];
    head.parentNode.removeChild(head);
    
    // bodyを書き換え
    let body = document.getElementsByTagName("body");
    body[0].innerHTML =
      '\
            <div style="text-align: center; margin-top: 55px;">\
              <h1 style="color: red;">IEではこのサイトを閲覧することができません</h1><br>\
              <h3>You can\'t access this site by IE.</h3><br>\
              <h3>動作保証環境: Edge / Chrome / FireFox / Safari</h3>\
            </div>\
        ';
  }
};
