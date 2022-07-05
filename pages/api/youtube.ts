import ytsr, { Item } from 'ytsr';
import { response_404 } from './error';
import type { NextApiRequest, NextApiResponse } from 'next';

interface SearchParams {
  key: string,
  val: string
};

interface Track {
  id: string,
  url: string,
  title: string,
  thumbnail: string,
  isLive: boolean,
  isExplicit: boolean,
  views: number,
  duration: string,
  author: {
    name: string,
    id: string,
    url: string,
    avatar: string
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Track[]>
) {
  if (req.method !== 'GET') return res.status(404).end(response_404);
  const searchParams: SearchParams[] = [];
  const url = new URL(req.url || '/', 'https://www.google.com');
  url.searchParams.forEach((val, key) => searchParams.push({ key, val }));
  const len = searchParams.length;

  for (let i = 0; i < len; i++) {
    const { key, val } = searchParams[i];

    if (key === 'search_track') {
      let musics: Track[] = [];
      try {
        const fetched = await ytsr(val, {
          limit: 20,
          pages: 1,
          gl: 'US',
          hl: 'en'
        });
        const itemsLen = fetched.items.length;

        for (let j = 0; j < itemsLen; j++) {
          const track = fetched.items[j];
          if (track.type !== 'video') continue;
          musics.push({
            id: track.id,
            url: track.url,
            title: track.title,
            thumbnail: track.bestThumbnail.url || '',
            isLive: track.isLive,
            isExplicit: false,
            views: track.views || 0,
            duration: track.duration || '0:00',
            author: {
              name: track.author?.name || '',
              id: track.author?.channelID || '',
              url: track.author?.url || '',
              avatar: track.author?.bestAvatar?.url || ''
            }
          });
        }
      } catch {}
      return res.json(musics);
    }

  }
  res.status(404).end(response_404);
}
