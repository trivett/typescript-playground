import { findContiguousHistory } from "./index";

describe("findContiguousHistory", () => {
  const user0 = [
    "/start",
    "/green",
    "/blue",
    "/pink",
    "/register",
    "/orange",
    "/one/two",
  ];
  const user1 = ["/start", "/pink", "/register", "/orange", "/red", "a"];
  const user2 = ["a", "/one", "/two"];
  const user3 = [
    "/pink",
    "/orange",
    "/yellow",
    "/plum",
    "/blue",
    "/tan",
    "/red",
    "/amber",
    "/HotRodPink",
    "/CornflowerBlue",
    "/LightGoldenRodYellow",
    "/BritishRacingGreen",
  ];
  const user4 = [
    "/pink",
    "/orange",
    "/amber",
    "/BritishRacingGreen",
    "/plum",
    "/blue",
    "/tan",
    "/red",
    "/lavender",
    "/HotRodPink",
    "/CornflowerBlue",
    "/LightGoldenRodYellow",
  ];
  const user5 = ["a"];
  const user6 = [
    "/pink",
    "/orange",
    "/six",
    "/plum",
    "/seven",
    "/tan",
    "/red",
    "/amber",
  ];

  it("finds the longest identical browsing list for the two users", () => {
    expect(findContiguousHistory(user0, user1)).toEqual([
      "/pink",
      "/register",
      "/orange",
    ]);
    expect(findContiguousHistory(user0, user2)).toEqual([]);
    expect(findContiguousHistory(user0, user0)).toEqual([
      "/start",
      "/green",
      "/blue",
      "/pink",
      "/register",
      "/orange",
      "/one/two",
    ]);
    expect(findContiguousHistory(user2, user1)).toEqual(["a"]);
    expect(findContiguousHistory(user5, user2)).toEqual(["a"]);
    expect(findContiguousHistory(user3, user4)).toEqual([
      "/plum",
      "/blue",
      "/tan",
      "/red",
    ]);
    expect(findContiguousHistory(user4, user3)).toEqual([
      "/plum",
      "/blue",
      "/tan",
      "/red",
    ]);
    expect(findContiguousHistory(user3, user6)).toEqual([
      "/tan",
      "/red",
      "/amber",
    ]);
  });
});
