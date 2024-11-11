  const ip = "172.21.112.1";
  const url = new URL(`http://${ip}/experimental/`);

const socket = new WebSocket(url.toString());



  /*
   * {
  "type": "Subscribe",
  "data":
  {
    "eventType": "media.NewFileEvent"
  }
}
  */


