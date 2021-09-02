/* eslint-disable max-len */
export default (date) => {
  const d = new Date(date);
  const dtf = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });
  const [{ value: mo }, , { value: da }, , { value: ye }, , { value: ho }, , { value: mi }] = dtf.formatToParts(d);

  return `tanggal ${da} ${mo} ${ye} jam ${ho}:${mi}`;
  // return dtf
};
