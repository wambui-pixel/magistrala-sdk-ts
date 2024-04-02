import Errors from "./errors";

export default class Messages {
  //Messages API Client
  /**
   * @method Messages - Messages is used to manage messages.
   * It provides methods for sending and reading messages.
   * @param {string} readers_url - The url of the readers service.
   * @param {string} httpadapter_url - The URL of the Magistrala Messages adapter.
   * @param {string} content_type - The content type of the request.
   * @returns {Messages} - Returns a Messages object.
   */

  private readonly readersUrl: URL;
  private readonly httpadapterUrl: URL;
  private readonly messageError: Errors;
  private readonly contentType: string;

  public constructor(readersUrl: string, httpadapterUrl: string) {
    this.readersUrl = new URL(readersUrl);
    this.httpadapterUrl = new URL(httpadapterUrl);
    this.contentType = "application/json";
    this.messageError = new Errors();
  }

  public async Send(
    channel_id: string,
    msg: string,
    thing_key: string,
  ): Promise<string> {
    //Send a message
    /**
     * @method Send- Sends message to a given channel via HTTP protocol. Message is sent
     * through a writer add-on such as timescale. Message is sent to a
     * http port specific to the writer add-on. The thing and channel must be
     * created before sending the message and connected.
     * @param {string} channel_id - The channel_id of the channel to send the message to.
     * @param {string} msg -message to send to the channel that should be in encoded into
     *       bytes format for example:
     *       [{"bn":"demo", "bu":"V", "n":"voltage", "u":"V", "v":5}]
     * @param {string} thing_key - The secret of the thing sending the message.
     */

    // if (typeof channel_id !== "string" || channel_id === null) {
    //   throw new Error("Invalid channel_id parameter. Expected a string.");
    // }

    // if (typeof thing_key !== "string" || thing_key === null) {
    //   throw new Error("Invalid thing_key parameter. Expected a string.");
    // }

    // if (!Array.isArray(msg)) {
    //   throw new Error("Invalid msg parameter. Expected an array.");
    // }

    const chan_name_parts = channel_id.split(".", 2);
    const chan_id = chan_name_parts[0];
    let subtopic = "";

    const options: RequestInit = {
      method: "post",
      headers: {
        "Content-Type": this.contentType,
        Authorization: `Thing ${thing_key}`,
      },
      body: JSON.stringify(new TextEncoder().encode(msg)),
    };
    // return axios
    //   .request(options)
    //   .then((_response) => {
    //     return "Message Sent!";
    //   })
    //   .catch((error) => {
    //     if (error.response) {
    //       return this.messageError.HandleError(
    //         this.messageError.messages.send,
    //         error.response.status,
    //       );
    //     }
    //   });

    try {
      const response = await fetch(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        new URL(
          `http/channels/${chan_id}/messages/${subtopic}`,
          this.httpadapterUrl,
        ).toString(),
        options,
      );

      if (!response.ok) {
        const errorRes = await response.json();
        throw this.messageError.HandleError(errorRes.error, response.status);
      }
      return "Message sent";
    } catch (error) {
      throw error;
    }
  }

  public async Read(channelId: string, token: string): Promise<any> {
    //Read messages
    /**
     *
     * @method Read - Read messages from a given channel. Messages are read from a reader
     * add-on such as timescale. Messages are read from a http port specific to the reader
     * @param {string} channel_id - The channel_id of the channel to read the message from.
     * @param {string} token - The token to be used for authentication.
     */

    // if (typeof channel_id !== "string" || channel_id === null) {
    //   throw new Error("Invalid channel_id parameter. Expected a string.");
    // }

    // if (typeof token !== "string" || token === null) {
    //   throw new Error("Invalid token parameter. Expected a string.");
    // }

    const chan_name_parts = channelId.split(".", 2);
    const chan_id = chan_name_parts[0];
    let subtopic = "";

    // if (chan_name_parts.length == 2) {
    //   subtopic = chan_name_parts[1].replace(".", "/", -1);
    // }

    const options = {
      method: "get",
      headers: {
        "Content-Type": this.contentType,
        Authorization: `Bearer ${token}`,
      },
      params: { subtopic: subtopic },
    };
    try {
      const response = await fetch(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        new URL(
          `http/channels/${chan_id}/messages/${subtopic}`,
          this.httpadapterUrl,
        ).toString(),
        options,
      );
      if (!response.ok) {
        const errorRes = await response.json();
        throw this.messageError.HandleError(errorRes.error, response.status);
      }
      const messagedata = await response.json();
      return messagedata;
    } catch (error) {
      throw error;
    }
  }
  //     return axios
  //       .request(options)
  //       .then((response) => {
  //         return response.data;
  //       })
  //       .catch((error) => {
  //         if (error.response) {
  //           return this.messageError.HandleError(
  //             this.messageError.messages.read,
  //             error.response.status,
  //           );
  //         }
  //       });
  //   }
}
