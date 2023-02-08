import React, { useEffect, useState } from "react";
import { unsplashApi } from "../../services/unsplash.js";
import { Button } from "../Button/Button.jsx";
import { Loader } from "../Loader/Loader.jsx";
import { CardPhoto } from "../CardPhoto/CardPhoto.jsx";

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
      const resultsMapper = data.response.results.map(function (element) {
        return {
          id: element.id,
          regular:
            element.urls.regular || element.urls.full || element.urls.raw,
          description: element.description || element.alt_description,
          user: element.user.username,
          username: element.user.name,
        };
      });
      setDataApi((dataApi) => [...dataApi, ...resultsMapper]);
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchUnsplash();
  }, [page]); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="container-standard">
      <Button
        handleClick={handleClick}
        className={"button"}
        textButton={"Cargar nuevas fotos"}
      />
      {data === null || data.errors ? (
        <Loader />
      ) : (
        <ul className="gallery">
          {dataApi &&
            dataApi.map((element) => (
              <CardPhoto photo={element} key={element.id} />
            ))}
        </ul>
      )}
    </section>
  );
};
