function CardImage({ url, alt, png = undefined }) {
  if(png !== undefined) {
    url = `./assets/images/${png}.png`;
  }
  return (
    <img src={url} className="card-img-top" alt={alt} />
  )
}

export { CardImage }