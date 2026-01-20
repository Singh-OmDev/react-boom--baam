import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const TENOR_KEY = import.meta.env.VITE_TENOR_KEY;

// 📸 Fetch Photos (Unsplash)
export async function fetchPhotos(query, page = 1, per_page = 20) {
  const res = await axios.get(
    "https://api.unsplash.com/search/photos",
    {
      params: { query, page, per_page },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_KEY}`,
      },
    }
  );

  return res.data;
}

// 🎥 Fetch Videos (Pexels)
export async function fetchVideos(query, page = 1, per_page = 15) {
  const res = await axios.get(
    "https://api.pexels.com/videos/search",
    {
      params: { query, page, per_page },
      headers: {
        Authorization: PEXELS_KEY,
      },
    }
  );

  return res.data;
}

// 🎞️ Fetch GIFs (Tenor)
export async function fetchGIFs(query, limit = 20) {
  const res = await axios.get(
    "https://tenor.googleapis.com/v2/search",
    {
      params: {
        q: query,
        key: TENOR_KEY,
        limit,
      },
    }
  );

  return res.data;
}
