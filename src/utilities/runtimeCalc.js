const runtimeString = (e) => {
  const hour = Math.floor(e / 60);
  const min = e % 60;
  const concat = hour + "h " + min + "min";
  return concat;
};

export default runtimeString;
