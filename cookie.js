// Cookieの取得
function getCookie(key){
    let cookies = new Array();
    for (let cookie in document.cookie.split(';')) {
        let cookie_pea = document.cookie.split(';')[cookie].replace(' ', '').split('=');
        cookies[cookie_pea[0]] = cookie_pea[1];
    }
    return decodeURI(cookies[key]);
}


// Cookieの設定
function setCookie(key, value, path){
    document.cookie = key + "=" + encodeURI(value) + ";path=" + path;
}
