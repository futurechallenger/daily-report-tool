import { generatePath } from "../src/util";

describe("example test", async () => {
  test("test", () => {
    expect(2).toEqual(1 + 1);
  });

  /**
   * Sample result:
   * "https://api.github.com/repos/ringcentral/ringcentral-js-widgets/commits?since=2018-8-9T00:00:00Z&until=2018-08-14T:00:00Z"
   */
  test("Test generated commit path", () => {
    expect(
      generatePath({
        owner: "ringcentral",
        repo: "ringcentral-js-widgets",
        since: new Date().getUTCSeconds(),
        until: new Date().getUTCSeconds()
      })
    ).toEqual();
  });
});
