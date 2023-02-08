import React, { useEffect, useState } from "react";
import { unsplashApi } from "../../services/unsplash.js";
// import { PhotoCard } from "../PhotoCard/PhotoCard.jsx";

export const GridSection = () => {
  const [data, setPhotosResponse] = useState(null);
  const [dataApi, setDataApi] = useState([]);
  let [page, setPage] = useState(1);
  const handleClick = () => {
    if (page < data.response.total_pages) {
      setPage(++page);
    }
  };

  async function fetchUnsplash() {
    try {
      const data = await unsplashApi.search.getPhotos({
        query: "nature",
        page: page,
        perPage: 15,
        color: "green",
        orientation: "landscape",
      });
      setPhotosResponse(data);
      setDataApi((dataApi) => [...dataApi, ...data.response.results]);
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchUnsplash();
  }, [page]);

  if (data === null) {
    return <div>Loading...</div>;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else {
    return (
      <>
        <div className="container-standard button-wrapper">
          <button className="button" onClick={(event) => handleClick(event)}>
            Cargar nuevas fotos
          </button>
        </div>
        <ul className="gallery container-standard">
          {dataApi &&
            dataApi.map((photo, idx) => (
              <li key={idx} className="item">
                <img
                  className="img"
                  src={photo.urls.regular}
                  alt="alternativa"
                />
                <span>
                  <a
                    className="credit"
                    target="blank"
                    href={`https://unsplash.com/@${photo.user.username}`}
                  >
                    {photo.user.name}
                  </a>
                </span>
              </li>
            ))}
        </ul>
      </>
    );
  }
};
