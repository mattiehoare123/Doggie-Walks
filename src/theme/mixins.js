export const flexColumn = () => {
  return`
  display: flex;
  flex-direction: column;
  `
}

export const BackgroundCover = (image) => {
  return`
  background-image: url(${image});
  background-size: cover; //Makes image reponsive
  background-position: center;
  `
}
