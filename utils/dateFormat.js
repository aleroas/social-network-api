const addZero = (num) => (num < 10 ? `0${num}` : num);

module.exports = (date) => {
  const formattedDate = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())} ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`;
  return formattedDate;
};
