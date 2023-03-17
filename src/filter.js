const filter = (arrs) => {
  const upFilters = [];
  const upNames = [];
  arrs.filter((site) => {
    const cMonth = new Date(site.startTime).getMonth();
    const cyear = new Date(site.startTime).getFullYear();
    const curMonth = new Date().getMonth();
    const curYear = new Date().getFullYear();

    if (cMonth > curMonth && cyear >= curYear) {
      const checks = site.siteName.replace('::', '_').replace(' ', '_').split('');
      const newcheck = checks
        .map((check, idx) => {
          if (check === check.toUpperCase()) {
            if (idx !== 0) {
              if (checks[idx - 1] === '_') return `${check.toLowerCase()}`;
              if (checks[idx - 1] === 'e' && check === 'F') return `${check.toLowerCase()}`;
              return `_${check.toLowerCase()}`;
            }
            return check.toLowerCase();
          }
          return check;
        })
        .join('')
        .replace('__', '_');

      if (!upNames.includes(site.siteName)) {
        upNames.push(site.siteName);
        upFilters.push({ name: site.siteName, detail: [{ ...site, linkName: newcheck }] });
      } else {
        upFilters[Object.keys(upFilters)[Object.keys(upFilters).length - 1]].detail.push({
          ...site,
          linkName: newcheck,
        });
      }
    }
    return site;
  });

  return upFilters;
};

export default filter;
