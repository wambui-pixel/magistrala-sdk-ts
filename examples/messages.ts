// Import the SDK class from the mainflux-sdk package
import SDK from "../src/sdk";

const defaultUrl = "http://localhost";

const mySdk = new SDK({
  httpadapterUrl: defaultUrl,
  readersUrl: defaultUrl + ":9011",
});

mySdk.messages
  .Send(
    "bc68fd23-5325-4ca4-9dee-6fdefab7154e",
    "msg",
    "8dc7eddd-d584-4a10-b636-e68b0defd0b5",
  )
  .then((response: any) => {
    console.log("response: ", response);
  })
  .catch((error: unknown) => {
    console.log(error);
  });

mySdk.messages
  .Read("6443b466-9b95-48cc-8d17-34522f2b11cb", "token")
  .then((response: any) => {
    console.log("response: ", response);
  })
  .catch((error: unknown) => {
    console.log(error);
  });
