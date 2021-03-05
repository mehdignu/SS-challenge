import Parser from 'rss-parser';

async function getLastNumPost() {
  let posts = new Array();
  const parser = new Parser();

  const feed = await parser.parseURL(
    'http://feeds.feedburner.com/PoorlyDrawnLines'
  );

  feed.items.slice(0, 10).forEach((res) => {
    posts.push({
      id: String(res.guid).split("?p=")[1],
      title: res.title,
      url: res.link,
      publishDate: res.isoDate,
    });
  });
  return posts;
}

/**
 * helper function to return the latest post number
 */
async function getLatestPdl() {
  const p = await getLastNumPost();
  return p;
}

export { getLatestPdl };
