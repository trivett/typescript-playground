const findLongestArray = (twoDArray: string[][]): string[] => {
  return twoDArray.reduce((acc, item) => {
    if (item.length > acc.length) {
      acc = item;
    }
    return acc;
  }, []);
};

export const findContiguousHistory = (
  userA: string[],
  userB: string[]
): string[] => {
  const results = userA.map((item, i) => {
    const subResults: string[] = [];
    if (userB.find((x) => x === item)) {
      let bCursor = userB.indexOf(item);
      let aCursor = i;

      while (bCursor < userB.length) {
        if (userA[aCursor] === userB[bCursor]) {
          subResults.push(userA[aCursor]);
          bCursor++;
          aCursor++;
        } else {
          break;
        }
      }
    }
    return subResults;
  });

  return findLongestArray(results);
};
