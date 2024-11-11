const disguiseFetch = async (path: Array<string>) => {
  const ip = "172.21.112.1";

  const url = new URL(path.join("/"), `http://${ip}/api/`);

  const response = await fetch(url.toString());
  const result = await response.json();
  return result.result;
};

/* console.log("Fetching Systems");

const systems = await disguiseFetch(["service", "system", "detectsystems"]);

for(const system of systems) {
	console.log(`${system.hostname} - ${system.type} v${system.version.major}.${system.version.minor}.${system.version.hotfix}`);
} */

const transports = await disguiseFetch([
  "session",
  "transport",
  "activetransport",
]);
const tracks = await disguiseFetch(["session", "transport", "tracks"]);
for (const transport of transports) {
  console.log(`Transport: ${transport.name}`);
  console.log(
    `Track: ${JSON.stringify(
      tracks.find((track) => track.uid == transport.currentTrack?.uid),
    )}`,
  );
}

// Indirections
/*
 * POST    /api/session/sequencing/changeindirections

Request
{
  "changes": [
    {
      "indirection": {
        "uid": "",
        "name": ""
      },
      "resource": {
        "uid": "",
        "name": ""
      }
    }
  ]
} 


GET    /api/session/sequencing/indirectionresources

Query Params
uid    uint64

name    string



GET    /api/session/sequencing/indirections


*/
