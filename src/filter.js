const filter = (arrs, siteName) => {
  const curMonth = new Date().getMonth();
  const curYear = new Date().getFullYear();
  const cMonth = (date) => new Date(date.startTime).getMonth();
  const cyear = (date) => new Date(date.startTime).getFullYear();

  let filtArrs;
  if (siteName === 'all') {
    filtArrs = arrs;
  } else if (siteName === 'upcoming') {
    filtArrs = arrs.filter((site) => cMonth(site) > curMonth && cyear(site) >= curYear);
  } else if (siteName === 'live') {
    filtArrs = arrs.filter((site) => cMonth(site) === curMonth && cyear(site) === curYear);
  }

  // console.log(filtArrs.map((fil) => fil.siteName).sort((a, b) => b - a));

  return filtArrs;
};

export default filter;
