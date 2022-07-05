import { response_404 } from './error';
import type { NextApiRequest, NextApiResponse } from 'next';
import { searchMusics, MusicVideo } from 'node-youtube-music';

interface SearchParams {
  key: string,
  val: string
};

interface Artist {
  name: string,
  id: string,
}

interface Track {
  id: string,
  url: string,
  title: string,
  thumbnail: string,
  isLive: boolean,
  isExplicit: boolean,
  duration: string,
  album: string,
  artist: Artist[]
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
        const fetched = await searchMusics(val);
        const fetchedLen = fetched.length;

        for (let j = 0; j < fetchedLen; j++) {
          const track = fetched[j];
          const artist: Artist[] = [];
          track.artists?.forEach(e => artist.push({
            id: e.id || '',
            name: e.name
          }));
          musics.push({
            id: track.youtubeId || '',
            url: 'https://music.youtube.com/watch?v=' + track.youtubeId || '',
            title: track.title || '',
            thumbnail: track.thumbnailUrl || '',
            isLive: false,
            isExplicit: track.isExplicit || false,
            duration: track.duration?.label || '0:00',
            album: track.album || '',
            artist: artist
          });
        }

      } catch {}
      return res.json(musics);;
    }

  }
  res.status(404).end(response_404);
}
