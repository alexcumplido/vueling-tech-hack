import React, { useEffect, useState } from "react";
import { unsplashApi } from "../../services/unsplash.js";
import { Button } from "../Button/Button.jsx";
import { Loader } from "../Loader/Loader.jsx";
import { CardPhoto } from "../CardPhoto/CardPhoto.jsx";
import { cleanObject } from "../../services/cleaner";

export const GridSection = () => {
  const [dataFetched, setDataFetched] = useState(null);
  const [images, setImages] = useState([]);
  let [page, setPage] = useState(1);

  const handleClick = () => {
    if (page < dataFetched.response.total_pages) {
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
      setDataFetched(data);
      const resultsMapper = data.response.results.map((element) =>
        cleanObject(element)
      );
      setImages((images) => [...images, ...resultsMapper]);
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
      {dataFetched === null || dataFetched.errors ? (
        <Loader />
      ) : (
        <ul className="gallery">
          {images &&
            images.map((element) => (
              <CardPhoto key={element.id} photo={element} />
            ))}
        </ul>
      )}
    </section>
  );
};
