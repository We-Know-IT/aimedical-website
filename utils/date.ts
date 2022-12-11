const months = [
  "jan",
  "feb",
  "mars",
  "apr",
  "may",
  "june",
  "july",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

function getDateString(date: Date) {
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

export { getDateString };
