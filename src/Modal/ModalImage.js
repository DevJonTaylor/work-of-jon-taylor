function ModalImage({ url, alt, png = undefined }) {
  if(png !== undefined) {
    url = `./assets/images/${png}.png`;
  }
  return (
    <img src={url} alt={alt} />
  )
}

export { ModalImage }