const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexPassword = /^.{8,}$/;
const pagesize = 20;
const CONFIG_USERNAME = "us";
const CONFIG_PASSWORD = "pa";
const APILogin = "https://test.cliquefan.com/api/portal/app/login";
const APIGetListPost = "https://test.cliquefan.com/api/portal/fan/home";
const APIFavoritePost = "https://test.cliquefan.com/api/portal/news/reaction/love";
const APIUnFavoritePost = "https://test.cliquefan.com/api/portal/news/unreaction/love";
const TIME_ALERT = 5000;