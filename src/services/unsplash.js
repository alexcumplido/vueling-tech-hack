import { createApi } from "unsplash-js";

const API__KEY = "rZ8h1EOAVbc9LxzA3NkR-VwYuCAm_F5CVxhkOWrH0S4";

export const unsplashApi = createApi({
  accessKey: API__KEY,
});

export async function fetchUnsplash(page) {
  let data;
  try {
    data = await unsplashApi.search.getPhotos({
      query: "nature",
      page: page,
      perPage: 13,
      color: "green",
      orientation: "landscape",
    });
  } catch (error) {
    throw new Error(error);
  }
  return data;
}
