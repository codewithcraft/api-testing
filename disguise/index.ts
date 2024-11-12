import { Disguise } from "./disguise";

const disguise = new Disguise({ host: "127.21.122.1" });

console.log("Fetching Systems");

const systems = await disguise.system.detect();

for (const system of systems) {
  console.log(
    `${system.hostname} - ${system.type} v${system.version.major}.${system.version.minor}.${system.version.hotfix}`,
  );
}

const transports = await disguise.transport.active();
const tracks = await disguise.transport.tracks();

for (const transport of transports) {
  console.log(`Transport: ${transport.name}`);
  console.log(
    `Track: ${JSON.stringify(
      tracks.find((track) => track.uid == transport.currentTrack?.uid),
    )}`,
  );
}
