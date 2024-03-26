const axios = require("axios");
const Errors = require("./errors");

class Channels {
  //Channels API client
  /**
   * @class Channels -
   * Channels API is used for managing Channels. It is used for creating new
   * channels, retrieving them, updating them and disabling them
   * @param {string} channels_url - URL to the Channels service
   * @param {string} content_type - Content type for the requests which is an application
   * json
   * @param {string} channelsEndpoint - Endpoint for the channels' service.
   * @returns {Object} -Channels object
   *
   */

    constructor(channels_url) {
        this.channels_url = new URL (channels_url);
        this.content_type = "application/json";
        this.channelsEndpoint = "channels";
    }
    ValidateChannelChannelIDAndToken(channel, channel_id, token) {
        //Validate channel
        if (typeof channel !== "object" || channel === null) {
            throw new Error('Invalid channel parameter. Expected an object.');
        }

        // Validate channel_id
        if (typeof channel_id !== "string" || channel_id === null) {
            throw new Error('Invalid channel_id parameter. Expected a string.');
        }

        // Validate token
        if (typeof token !== "string" || token === null) {
            throw new Error('Invalid token parameter. Expected a string.');
        }
    };

    channelError = new Errors;

    Create(channel, token) {
        //Creates a new channel
        /**
         * @method Create - Creates new channels when provided with a channel object 
         * with viable fresh information and a valid token.
         * @param {Object} channel - Channel Object with a name and id.
         * @param {String} token - An access token that is valid.
         * @returns {Object} - User object.
         * @example
         * const channel = {
         * "name": "channelName",
         * "description": "long channel description",
         * "parent_id": "bb7edb32-2eac-4aad-aebe-ed96fe073879",
         *  "metadata": {
         *       "domain": "example.com"
         *  },
         * "status": "enabled",
         * "owner_id": "bb7edb32-2eac-4aad-aebe-ed96fe073879"
         * }
         * 
         */

        this.ValidateChannelChannelIDAndToken(channel, '', token);

        const options = {
            method: "post",
            maxBodyLength: 2000,
            url: new URL (this.channelsEndpoint, this.channels_url),
            headers: {
                "Content-Type": this.content_type,
                Authorization: `Bearer ${token}`,
            },
            data: channel,
        };
        return axios.request(options)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                if (error.response) {
                    return this.channelError.HandleError(
                        this.channelError.channels.create,
                        error.response.status,
                    );
                };
            });
    }

    CreateBulk(channels, token) {
        //Creates multiple channels.
        /**
         * @method Create_bulk - Creates multiple channels when provided with a channel object
         * with viable fresh information and a valid token.
         * @param {List} channels - Channel Object with a name and id.
         * @param {String} token - An access token that is valid.
         * @returns {Object} - User object.
         * @example
         * const channels = [
         * { "name": "channelA", "id": "bb7edb32-2eac-4aad-aebe-ed96fe073879" },
         * { "name": "channelB", "id": "290b0f49-7a57-4b8c-9e4e-fbf17c6ab7d9" }
         * ]
         */

        if (!Array.isArray(channels)) {
            throw new Error('Invalid parameter. Expected an array for the "channels" parameter.');
        }

        this.ValidateChannelChannelIDAndToken({}, '', token);

        const options = {
            method: "post",
            maxBodyLength: 2000,
            url: new URL (`${this.channelsEndpoint}/bulk`, this.channels_url),
            headers: {
                "Content-Type": this.content_type,
                Authorization: `Bearer ${token}`,
            },
            data: channels,
        };
        return axios.request(options)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                if (error.response) {
                    return this.channelError.HandleError(
                        this.channelError.channels.createbulk,
                        error.response.status,
                    );
                };
            });
    }

    Get(channel_id, token) {
        //Retrieves channel with specified id.
        /**
         * @method Get - Retrieves channel with specified id and a valid token.
         * @param {String} channel_id - Channel id.
         * @param {String} token - An access token that is valid.
         * @returns {Object} - Channel object. 
         */

        this.ValidateChannelChannelIDAndToken({}, channel_id, token);

        const options = {
            method: "get",
            maxBodyLength: 2000,
            url: new URL (`${this.channelsEndpoint}/${channel_id}`, this.channels_url),
            headers: {
                "Content-Type": this.content_type,
                Authorization: `Bearer ${token}`,
            },
        };
        return axios.request(options)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                if (error.response) {
                    return this.channelError.HandleError(
                        this.channelError.channels.get,
                        error.response.status,
                    );
                };
            });
    }

    GetByThing(channel_id, query_params, token) {
        //Retrieves list of things connected to specified channel with pagination metadata.
        /**
         * @method GetByThing - Retrieves list of things connected to specified channel with pagination metadata.
         * @param {String} channel_id - Channel id.
         * @param {Object} query_params - Query parameters for the request.
         * @param {String} token - An access token that is valid.
         * @returns {List} - Things list. 
         */

        if (typeof query_params !== 'object' || query_params === null || Array.isArray(query_params)) {
            throw new Error('Invalid query parameters. Expected an object.');
        };

        this.ValidateChannelChannelIDAndToken({}, channel_id, token);

        const options = {
            method: "get",
            maxBodyLength: 2000,
            url: new URL (`${this.channelsEndpoint}/${channel_id}/things?${new URLSearchParams(query_params).toString()}`, this.channels_url),
            headers: {
                "Content-Type": this.content_type,
                Authorization: `Bearer ${token}`,
            },
        };
        return axios.request(options)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                if (error.response) {
                    return this.channelError.HandleError(
                        this.channelError.channels.getbything,
                        error.response.status,
                    );
                };
            });
    }

    GetAll(query_params, token) {
        //Provides a list of all channels with pagination metadata.
        /**
         * @method GetAll - Provides a list of all channels with pagination metadata.
         * @param {Object} query_params - Query parameters for the request.
         * @param {String} token - An access token that is valid.
         * @returns {Object} - Channel Object. 
         */

        if (typeof query_params !== 'object' || query_params === null || Array.isArray(query_params)) {
            throw new Error('Invalid query parameters. Expected an object.');
          };

        this.ValidateChannelChannelIDAndToken({}, '', token);

        const options = {
            method: "get",
            maxBodyLength: 2000,
            url: new URL (`${this.channelsEndpoint}?${new URLSearchParams(query_params).toString()}`, this.channels_url),
            headers: {
                "Content-Type": this.content_type,
                Authorization: `Bearer ${token}`,
            },
        };
        return axios.request(options)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                if (error.response) {
                    return this.channelError.HandleError(
                        this.channelError.channels.getall,
                        error.response.status,
                    );
                };
            });
    }

    Update(channel_id, channel, token) {
        //Updates channel with specified id.
        /**
         * @method Update - Updates channel with specified id.
         * @param {Object} channel - Channel object with new information.
         * @param {String} token - An access token that is valid.
         * @returns {Object} - Channel Object. 
         */

        this.ValidateChannelChannelIDAndToken(channel, channel_id, token);

        const options = {
            method: "put",
            maxBodyLength: 2000,
            url: new URL (`${this.channelsEndpoint}/${channel_id}`, this.channels_url),
            headers: {
                "Content-Type": this.content_type,
                Authorization: `Bearer ${token}`,
            },
            data: channel,
        };
        return axios.request(options)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                if (error.response) {
                    return this.channelError.HandleError(
                        this.channelError.channels.update,
                        error.response.status,
                    );
                };
            });
    }

    Disable(channel_id, token) {
        //Disables channel with specified id.
        /**
         * @method Disable - Disables channel with specified id.
         * @param {Object} channel - Channel object with new information.
         * @param {String} token - An access token that is valid.
         * @returns {Object} - Channel Object. 
         */

        this.ValidateChannelChannelIDAndToken({}, channel_id, token);
        
        const options = {
            method: "post",
            maxBodyLength: 2000,
            url: new URL (`${this.channelsEndpoint}/${channel_id}/disable`, this.channels_url),
            headers: {
                "Content-Type": this.content_type,
                Authorization: `Bearer ${token}`,
            },
        };
        return axios.request(options)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                if (error.response) {
                    return this.channelError.HandleError(
                        this.channelError.channels.disable,
                        error.response.status,
                    );
                };
            });
    }

  Disable(channel, token) {
    //Disables channel with specified id.
    /**
     * @method Disable - Disables channel with specified id.
     * @param {Object} channel - Channel object with new information.
     * @param {String} token - An access token that is valid.
     * @returns {Object} - Channel Object.
     */
    const options = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${this.channels_url}/${this.channelsEndpoint}/${channel["id"]}/disable`,
      headers: {
        "Content-Type": this.content_type,
        Authorization: `Bearer ${token}`,
      },
    };
    return axios
      .request(options)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  }
}

module.exports = Channels;
