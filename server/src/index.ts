import express, { Request, Response } from 'express';
import { getLatestPosts } from './comics/xkcd';
import { getLatestPdl } from './comics/pdl';

const app = express();

app.get('/', async (req: Request, res: Response) => {
  const bb = await getLatestPosts();
  const b = await getLatestPdl();
  const posts = bb.concat(b);
  res.setHeader ('Access-Control-Allow-Origin', '*');

  res.send(posts);
});

app.listen(4000, () => {
  console.log('listening on post 4000');
});
