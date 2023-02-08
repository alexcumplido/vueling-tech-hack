export function CardPhoto({ photo, idx }) {
  return (
    <li key={idx} className="item">
      <img className="img" src={photo.urls.regular} alt="alternativa" />
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
  );
}
