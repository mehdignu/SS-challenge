import fetch from 'cross-fetch';

/**
 * helper function to return the latest post number
 */
async function getLastNumPost() {
  return fetch('https://xkcd.com/info.0.json')
    .then((res) => {
      if (res.status >= 400) {
        throw new Error('Bad response from server');
      }
      return res.json();
    })
    .then((data) => {
      return data.num;
    })
    .catch((err) => {
      console.error(err);
      return 0;
    });
}

async function getLatestPosts() {
  const num = await getLastNumPost();
  let posts = new Array();
  var fetches = [];
  for (let i = num - 9; i <= num; i++) {
    fetches.push(
      fetch(`https://xkcd.com/${i}/info.0.json`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          posts.push({
            id: String(res.num),
            title: res.title,
            url: res.img,
            publishDate: new Date(res.year, res.month, res.day),
          });
        })
    );
  }
  return Promise.all(fetches).then(function () {
    return posts;
  });
}

export { getLatestPosts };
