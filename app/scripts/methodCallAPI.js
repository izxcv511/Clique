function login(data, callback) {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(APILogin, options)
    .then((response) => response.json())
    .then(callback);
}

function getListPost(
  { currentUser, status = 11, pageSize = 50, pageIndex = 0 },
  callback
) {
  let config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${currentUser.access_token}`,
    },
  };
  fetch(
    APIGetListPost +
      `?status=${status}&pageSize=${pageSize}&pageIndex=${pageIndex}`,
    config
  )
    .then((response) => response.json())
    .then(callback);
}
function favoritePost({ currentUser, postId }, callback) {
  let config = {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${currentUser.access_token}`,
    },
  };
  console.log("favorite");
  console.log(`${APIUnFavoritePost}/${postId}`);
  console.log(`Bearer ${currentUser.access_token}`);
  fetch(`${APIFavoritePost}/${postId}`, config)
    .then((response) => response.json())
    .then(callback);
}
function unFavoritePost({ currentUser, postId }, callback) {
  let config = {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${currentUser.access_token}`,
    },
  };
  console.log("unFavorite");
  console.log(`${APIUnFavoritePost}/${postId}`);
  console.log(`Bearer ${currentUser.access_token}`);
  fetch(`${APIUnFavoritePost}/${postId}`, config)
    .then((response) => response.json())
    .then(callback);
}
