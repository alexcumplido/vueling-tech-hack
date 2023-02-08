export function CardPhoto({ photo }) {
  return (
    <li className="item">
      <img className="item__image" src={photo.regular} alt="alternativa" />
      <a
        className="item__link"
        target="blank"
        href={`https://unsplash.com/@${photo.user}`}
      >
        <span>{photo.username}</span> <span>{photo.description}</span>
      </a>
    </li>
  );
}
