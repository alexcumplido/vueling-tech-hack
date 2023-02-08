export function Button({ handleClick, className, textButton }) {
  return (
    <button className={className} onClick={handleClick}>
      {textButton}
    </button>
  );
}
