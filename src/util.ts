import * as moment from "moment";

export function sleep(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

/**
 *
 * @param owner: owner of a repo
 */
export function generatePath({
  owner,
  repo,
  since,
  until
}: {
  owner: string;
  repo: string;
  since: number;
  until: number;
}) {
  const formatedSince = moment.unix(since).format("YYYY-MM-DDTHH:MM:SSZ");
  const formatedUntil = moment.unix(since).format("YYYY-MM-DDTHH:MM:SSZ");
  return `https://api.github.com/repos/${owner}/${repo}/commits?since=${formatedSince}&until=${formatedUntil}`;
}
