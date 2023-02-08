import React, { Fragment } from "react";

export const PhotoCard = ({ photo }) => {
  const { user, urls } = photo;
  return (
    <Fragment>
      <figure>
        <img className="img" src={urls.regular} alt="alternativa" />
        <span>
          <a
            className="credit"
            target="blank"
            href={`https://unsplash.com/@${user.username}`}
          >
            {user.name} |{" "}
          </a>
        </span>
      </figure>
    </Fragment>
  );
};
