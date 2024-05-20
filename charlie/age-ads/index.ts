const domainKeys = (fullDomain: string): string[] => {
  let splitDomain = fullDomain.split(".");
  let acc: string[] = [];
  while (splitDomain.length >= 1) {
    console.log;
    let rejoined = splitDomain.join(".");
    acc.push(rejoined);
    splitDomain = splitDomain.slice(1);
  }

  return acc;
};

export const calculateClicksByDomain = (
  input: string[]
): { [key: string]: number } => {
  const tally = input.reduce((acc: { [key: string]: number }, line: string) => {
    const splitLine = line.split(",");
    const clicks = Number(splitLine[0]);
    let domainFull = splitLine[1];

    const allDomains = domainKeys(domainFull);

    allDomains.forEach((item) => {
      if (acc[item]) {
        acc[item] = acc[item] + clicks;
      } else {
        acc[item] = clicks;
      }
    });

    return acc;
  }, {});

  return tally;
};
