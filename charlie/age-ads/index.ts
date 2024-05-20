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
): { [key: string]: string } => {
  const tally = input.reduce((acc, line) => {
    const splitLine = line.split(",");
    const clicks = Number(splitLine[0]);
    let domainFull = splitLine[1];

    const allDomains = domainKeys(domainFull);

    console.log(allDomains);

    allDomains.forEach((item) => {
      if (acc[item]) {
        acc[item] = acc[item] + clicks;
        // return;
      } else {
        acc[item] = clicks;
      }
    });

    // split full domain into its pieces and loop
    // increment value in object

    return acc;
  }, {});

  // const sumWithInitial = array1.reduce(
  //   accumulator + currentValue,
  //   initialValue,
  // );

  return tally;
};
