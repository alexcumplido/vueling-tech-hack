import ReactDOM from "react-dom";
import React, { Fragment, useEffect, useState } from "react";
import { createApi } from "unsplash-js";

const unsplashApi = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "rZ8h1EOAVbc9LxzA3NkR-VwYuCAm_F5CVxhkOWrH0S4",
});

const PhotoComp = ({ photo }) => {
  const { user, urls } = photo;

  return (
    <Fragment>
      <figure>
        <img className="img" src={urls.regular} alt="alternativa" />
        <figcaption>
          <a
            className="credit"
            target="blank"
            href={`https://unsplash.com/@${user.username}`}
          >
            {user.name}
          </a>
        </figcaption>
      </figure>
    </Fragment>
  );
};

const Body = () => {
  const [data, setPhotosResponse] = useState(null);
  const [dataApi, setDataApi] = useState([]);
  let [page, setPage] = useState(1);
  const handleClick = (event) => {
    if (page < data.response.total_pages) {
      console.log(event);
      setPage(++page);
      console.log(++page);
    }
  };
  //  async function requestPhotos() {
  //    try {
  //      const result = await unsplashApi.search.getPhotos({
  //        query: "nature",
  //        page: 1,
  //        perPage: 15,
  //        color: "green",
  //        orientation: "landscape",
  //      });
  //      setPhotosResponse(result);
  //    } catch (error) {
  //      throw new Error(error);
  //    }
  //  }

  const fetchUnsplash = () => {
    unsplashApi.search
      .getPhotos({
        query: "sky",
        page: page,
        perPage: 15,
        color: "green",
        orientation: "landscape",
      })
      .then((resp) => {
        setPhotosResponse(resp);
        setDataApi((dataApi) => [...dataApi, ...resp.response.results]);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  };

  useEffect(() => {
    console.log(page);
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
      <div className="feed">
        <ul className="container">
          {dataApi &&
            dataApi.map((photo, idx) => (
              <li key={idx} className="li">
                <PhotoComp photo={photo} />
              </li>
            ))}
        </ul>
        <button className="padding" onClick={(event) => handleClick(event)}>
          Give me more unsplash
        </button>
      </div>
    );
  }
};

const Home = () => {
  return (
    <main className="root">
      <Body />
    </main>
  );
};

ReactDOM.render(<Home />, document.getElementById("root"));
