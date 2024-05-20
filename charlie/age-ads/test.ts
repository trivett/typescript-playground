import { calculateClicksByDomain } from "./index";

describe("calculateClicksByDomain", () => {
  const counts = [
    "60,mail.yahoo.com",
    "900,google.com",
    "10,mobile.sports.yahoo.com",
    "40,sports.yahoo.com",
    "300,yahoo.com",
    "10,stackoverflow.com",
    "20,overflow.com",
    "5,com.com",
    "2,en.wikipedia.org",
    "1,m.wikipedia.org",
    "1,mobile.sports",
    "1,google.co.uk",
  ];

  const expectedOutput = {
    com: 1345,
    "google.com": 900,
    "stackoverflow.com": 10,
    "overflow.com": 20,
    "yahoo.com": 410,
    "mail.yahoo.com": 60,
    "mobile.sports.yahoo.com": 10,
    "sports.yahoo.com": 50,
    "com.com": 5,
    org: 3,
    "wikipedia.org": 3,
    "en.wikipedia.org": 2,
    "m.wikipedia.org": 1,
    "mobile.sports": 1,
    sports: 1,
    uk: 1,
    "co.uk": 1,
    "google.co.uk": 1,
  };

  test("returns a data structure containing the number of clicks that were recorded on each domain AND each subdomain under it", () => {
    const output = calculateClicksByDomain(counts);

    expect(output).toEqual(expectedOutput);
  });
});
