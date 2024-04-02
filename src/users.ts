import Errors from "./errors";

export interface User {
  name?: string;
  id?: string;
  credentials?: {
    identity: string;
    secret?: string;
  };
  owner?: string;
  tags?: [string, string];
  role?: string;
  status?: "enabled" | "disabled";
  createdAt?: string;
  updatedAt?: string;
  updatedBy?: string;
}

interface PageRes {
  total: number;
  offset: number;
  limit: number;
}

interface UsersInterface {
  users: User[];
  page: PageRes;
}

interface Groups {
  groups: Groups[];
  page: PageRes;
}

interface Things {
  things: Things[];
  page: PageRes;
}

interface Channels {
  channel: Channels[];
  page: PageRes;
}

interface Login {
  identity?: string;
  secret?: string;
  domain_id?: string;
}

interface QueryParams {
  offset: number;
  limit: number;
}

interface Token {
  access_token: string;
  refreshToken: string;
}

interface Status {
  status: string;
}

export default class Users {
  // Users API client
  /**
   * @class Users -
   * Users API is used for creating and managing users.
   * It is used for creating new users, logging in, refreshing tokens,
   * getting user information, updating user information, disabling
   * and enabling users.
   * @param {String} usersUrl - URL to the Users service.
   * @returns {Object} - Users object.
   */
  private readonly usersUrl: URL;
  private readonly contentType: string;
  private readonly usersEndpoint: string;
  private readonly userError: Errors;

  public constructor(usersUrl: string) {
    this.usersUrl = new URL(usersUrl);
    this.contentType = "application/json";
    this.usersEndpoint = "users";
    this.userError = new Errors();
  }

  public async Create(user: User, token?: string): Promise<User> {
    // Creates a new user
    /**
     * @method Create - Creates a new user.
     * @param {Object} user - User object.
     * @param {String} token - Access token.
     * @returns {Object} - User object.
     * @example
     * const user = {
     * "credentials": {
     *    "identity": "admin@example.com",
     *   "password": "12345678"
     * }
     * }
     */

    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": this.contentType,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    };

    try {
      const response = await fetch(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        new URL(this.usersEndpoint, this.usersUrl).toString(),
        options,
      );
      if (!response.ok) {
        const errorRes = await response.json();
        throw this.userError.HandleError(errorRes.error, response.status);
      }
      const userData = await response.json();
      console.log(userData);
      return userData;
    } catch (error) {
      throw error;
    }
  }

  public async CreateToken(login: Login): Promise<Token> {
    // Issue Access and Refresh Token used for authenticating into the system
    /**
     * @method CreateToken - Issue Access and Refresh Token used for authenticating into the system.
     * @param {Object} user - User object.
     * @returns {Object} - Access and Refresh Token.
     * @example
     * const user = {
     * "credentials": {
     *   "identity": "admin@example.com",
     *  "password": "12345678"
     * }
     * }
     */

    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": this.contentType,
      },
      body: JSON.stringify(login),
    };
    try {
      const response = await fetch(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        new URL(`${this.usersEndpoint}/tokens/issue`, this.usersUrl).toString(),
        options,
      );
      if (!response.ok) {
        const errorRes = await response.json();
        throw this.userError.HandleError(errorRes.error, response.status);
      }
      const tokenData = await response.json();
      return tokenData;
    } catch (error) {
      throw error;
    }
  }

  async RefreshToken(login: Login, refreshToken: string): Promise<Token> {
    // provides a new access token and refresh token.
    /**
     * @method Refresh_token - Provides a new access token and refresh token.
     * @param {Object} user - User object.
     * @param {String} refreshToken - Refresh token.
     * @returns {Object} - Access and Refresh Token.
     * @example
     * const user = {
     *   "identity": "c52d-3b0d-43b9-8c3e-275c087d875af"
     * }
     *
     */

    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": this.contentType,
        Authorization: `Bearer ${refreshToken}`,
      },
      body: JSON.stringify(login),
    };

    try {
      const response = await fetch(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        new URL(
          `${this.usersEndpoint}/tokens/refresh`,
          this.usersUrl,
        ).toString(),
        options,
      );
      console.log(response);
      if (!response.ok) {
        const errorRes = await response.json();
        throw this.userError.HandleError(errorRes.error, response.status);
      }
      const tokenData = await response.json();
      return tokenData;
    } catch (error) {
      throw error;
    }
  }

  public async Update(user: User, token: string): Promise<User> {
    // Update a user
    /**
     * @method Update - Update a user. Updates a user's name and metadata.
     * @param {Object} user - User object.
     * @param {String} token - Access token.
     * @returns {Object} - User object.
     * @example
     * const user = {
     * "id": "c52d-3b0d-43b9-8c3e-275c087d875af",
     * "name": "John Doe"
     * }
     *
     */

    const options: RequestInit = {
      method: "PATCH",
      headers: {
        "Content-Type": this.contentType,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    };

    try {
      const response = await fetch(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        new URL(`${this.usersEndpoint}/${user.id}`, this.usersUrl).toString(),
        options,
      );
      if (!response.ok) {
        const errorRes = await response.json();
        throw this.userError.HandleError(errorRes.error, response.status);
      }
      const userData = await response.json();
      return userData;
    } catch (error) {
      throw error;
    }
  }

  public async UpdateUserIdentity(user: User, token: string): Promise<User> {
    // Update a user identity
    /**
     * @method UpdateUserIdentity - Update a user identity for a currently logged in user.
     * The user Identity is updated using authorization user_token
     * @param {Object} user - User object.
     * @param {String} token - Access token.
     * @returns {Object} - User object.
     * @example
     * const user = {
     * "id": "c52d-3b0d-43b9-8c3e-275c087d875af",
     * "credentials": {
     *  "identity": "fkatwigs@email.com"
     * }
     *
     * }
     */

    const options: RequestInit = {
      method: "PATCH",
      headers: {
        "Content-Type": this.contentType,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    };
    try {
      const response = await fetch(
        new URL(
          `${this.usersEndpoint}/${user.id}/identity`,
          this.usersUrl,
        ).toString(),
        options,
      );
      if (!response.ok) {
        const errorRes = await response.json();
        throw this.userError.HandleError(errorRes.error, response.status);
      }
      const userData = await response.json();
      return userData;
    } catch (error) {
      throw error;
    }
  }

  public async UpdateUserTags(user: User, token: string): Promise<User> {
    // Update a user's tags.
    /**
     *  Updates tags of the user with provided ID. Tags is updated using
     * authorization user_tokeN.
     * @method UpdateUserTags - Update a user's tags.
     * @param {Object} user - User object.
     * @param{String} token - Access token.
     * @returns {Object} - User object.
     * @example
     * const user = {
     *  "name": "example",
     *      "id": "886b4266-77d1-4258-abae-2931fb4f16de"
     *      "tags": [
     *          "back",
     *           "end"
     *       ]
     *       "metadata": {
     *          "foo": "bar"
     *       }
     *  }
     *
     */

    const options: RequestInit = {
      method: "PATCH",
      headers: {
        "Content-Type": this.contentType,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    };

    try {
      const response = await fetch(
        new URL(
          `${this.usersEndpoint}/${user.id}/tags`,
          this.usersUrl,
        ).toString(),
        options,
      );
      if (!response.ok) {
        const errorRes = await response.json();
        throw this.userError.HandleError(errorRes.error, response.status);
      }
      const userData = await response.json();
      return userData;
    } catch (error) {
      throw error;
    }
  }

  public async UpdateUserPassword(
    oldSecret: string,
    newSecret: string,
    token: string,
  ): Promise<User> {
    // Update a user's password.
    /**
     * Updates password of the user with provided valid token.
     *
     * @method UpdateUserPassword - Update a user's password.
     * @param {String} oldSecret - Old password.
     * @param {String} newSecret - New password.
     * @param {String} token - Access token.
     * @returns {Object} - User object.
     *
     */

    const secret = { old_secret: oldSecret, new_secret: newSecret };
    const options: RequestInit = {
      method: "PATCH",
      headers: {
        "Content-Type": this.contentType,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(secret),
    };

    try {
      const response = await fetch(
        new URL(`${this.usersEndpoint}/secret`, this.usersUrl).toString(),
        options,
      );
      if (!response.ok) {
        const errorRes = await response.json();
        throw this.userError.HandleError(errorRes.error, response.status);
      }
      const userData = await response.json();
      return userData;
    } catch (error) {
      throw error;
    }
  }

  public async UpdateUserRole(user: User, token: string): Promise<User> {
    // Update a user's role.
    /**
     * Updates password of the user with provided valid token.
     *
     * @method UpdateUserRole - Update a user's role.
     * @param {String} role - New role.
     * @param {String} token - Access token.
     * @returns {Object} - User object.
     *
     */

    const options: RequestInit = {
      method: "PATCH",
      headers: {
        "Content-Type": this.contentType,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    };

    try {
      const response = await fetch(
        new URL(
          `${this.usersEndpoint}/${user.id}/role`,
          this.usersUrl,
        ).toString(),
        options,
      );
      if (!response.ok) {
        const errorRes = await response.json();
        throw this.userError.HandleError(errorRes.error, response.status);
      }
      const userData = await response.json();
      return userData;
    } catch (error) {
      throw error;
    }
  }

  public async User(userId: string, token: string): Promise<User> {
    // Gets a user
    /**
     * Provides information about the user with provided ID. The user is
     * retrieved using authorization user_token.
     * @method User - Gets a user.
     * @param {String} userId - User ID.
     * @param {String} token - Access token.
     * @returns {Object} - User object.
     * @example
     * const userId = "886b4266-77d1-4258-abae-2931fb4f16de"
     *
     */

    const options: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": this.contentType,
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(
        new URL(`${this.usersEndpoint}/${userId}`, this.usersUrl).toString(),
        options,
      );
      if (!response.ok) {
        const errorRes = await response.json();
        throw this.userError.HandleError(errorRes.error, response.status);
      }
      const userData = await response.json();
      return userData;
    } catch (error) {
      throw error;
    }
  }

  public async UserProfile(token: string): Promise<User> {
    // Gets a user's profile
    /**
     * Provides information about the user with provided ID. The user is
     * retrieved using authorization user_token.
     * @method UserProfile - Gets a user's Profile.
     * @param {String} userId - User ID.
     * @param {String} token - Access token.
     * @returns {Object} - User object.
     * @example
     * const userId = "886b4266-77d1-4258-abae-2931fb4f16de"
     *
     */

    const options: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": this.contentType,
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(
        new URL(`${this.usersEndpoint}/profile`, this.usersUrl).toString(),
        options,
      );
      if (!response.ok) {
        const errorRes = await response.json();
        throw this.userError.HandleError(errorRes.error, response.status);
      }
      const userData = await response.json();
      return userData;
    } catch (error) {
      throw error;
    }
  }

  public async Users(
    queryParams: QueryParams,
    token: string,
  ): Promise<UsersInterface> {
    // Gets all users with pagination.
    /**
     * Provides information about all users. The users are retrieved using
     * authorization user_token.
     *
     * @method Users - Gets all users with pagination.
     * @param {Object} queryParams - Query parameters.
     * @param {String} token - Access token.
     * @returns {Object} - User object.
     * @example
     * const queryParams = {
     * "offset": 0,
     * "limit": 10
     * }
     *
     */

    const stringParams: Record<string, string> = Object.fromEntries(
      Object.entries(queryParams).map(([key, value]) => [key, String(value)]),
    );

    const options: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": this.contentType,
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(
        new URL(
          `${this.usersEndpoint}?${new URLSearchParams(stringParams).toString()}`,
          this.usersUrl,
        ).toString(),
        options,
      );
      if (!response.ok) {
        const errorRes = await response.json();
        throw this.userError.HandleError(errorRes.error, response.status);
      }
      const usersData = await response.json();
      return usersData;
    } catch (error) {
      throw error;
    }
  }

  public async Disable(user: User, token: string): Promise<string> {
    // Disable a user
    /**
     * Disables a user with provided ID and valid token.
     * @method Disable - Disable a user.
     * @param {Object} user - User object.
     * @param {String} token - Access token.
     * @returns {Object} - User object.
     * @example
     * const user = {
     * "id": "c52d-3b0d-43b9-8c3e-275c087d875af",
     * "status": "disabled"
     * }
     */

    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": this.contentType,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    };

    try {
      const response = await fetch(
        new URL(
          `${this.usersEndpoint}/${user.id}/disable`,
          this.usersUrl,
        ).toString(),
        options,
      );
      if (!response.ok) {
        const errorRes = await response.json();
        throw this.userError.HandleError(errorRes.error, response.status);
      }
      return "User Disabled";
    } catch (error) {
      throw error;
    }
  }

  public async Enable(user: User, token: string): Promise<string> {
    // Enable a user.
    /**
     * Enables a previously disabled user when provided with token and valid ID.
     * @method Enable - Enable a user.
     * @params {Object} user - User object.
     * @param {String} token - Access token.
     * @returns {Object} - User object.
     * @example
     * const user = {
     * "id": "c52d-3b0d-43b9-8c3e-275c087d875af",
     * "status": "enabled"
     * }
     *
     */

    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": this.contentType,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    };
    try {
      const response = await fetch(
        new URL(
          `${this.usersEndpoint}/${user.id}/enable`,
          this.usersUrl,
        ).toString(),
        options,
      );
      if (!response.ok) {
        const errorRes = await response.json();
        throw this.userError.HandleError(errorRes.error, response.status);
      }
      return "User Enabled";
    } catch (error) {
      throw error;
    }
  }

  public async ListUserGroups(
    userId: string,
    queryParams: QueryParams,
    token: string,
  ): Promise<Groups> {
    // Get groups of a user.
    /**
     * Gets the various groups a user belongs to.
     * @method ListUserGroups - Get memberships of a user.
     * @param {String} userId - Member ID.
     * @param {Object} queryParams - Query parameters for example offset and limit.
     * @param {String} token - Access token.
     * @returns {Object} - Groups object.
     */

    const stringParams: Record<string, string> = Object.fromEntries(
      Object.entries(queryParams).map(([key, value]) => [key, String(value)]),
    );

    const options: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": this.contentType,
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await fetch(
        new URL(
          `${this.usersEndpoint}/${userId}/groups?${new URLSearchParams(stringParams).toString()}`,
          this.usersUrl,
        ).toString(),
        options,
      );
      if (!response.ok) {
        const errorRes = await response.json();
        throw this.userError.HandleError(errorRes.error, response.status);
      }
      const groupsData = await response.json();
      return groupsData;
    } catch (error) {
      throw error;
    }
  }

  public async ListUserThings(
    userId: string,
    queryParams: QueryParams,
    token: string,
  ): Promise<Things> {
    // Get things of a user.
    /**
     * Gets the various things a user owns.
     * @method ListUserThings - Get memberships of a user.
     * @param {String} userId - Member ID.
     * @param {Object} queryParams - Query parameters for example offset and limit.
     * @param {String} token - Access token.
     * @returns {Object} - Things object.
     */
    const stringParams: Record<string, string> = Object.fromEntries(
      Object.entries(queryParams).map(([key, value]) => [key, String(value)]),
    );

    const options: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": this.contentType,
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await fetch(
        new URL(
          `${this.usersEndpoint}/${userId}/things?${new URLSearchParams(stringParams).toString()}`,
          this.usersUrl,
        ).toString(),
        options,
      );
      if (!response.ok) {
        const errorRes = await response.json();
        throw this.userError.HandleError(errorRes.error, response.status);
      }
      const thingsData = await response.json();
      return thingsData;
    } catch (error) {
      throw error;
    }
  }

  public async ListUserChannels(
    userId: string,
    queryParams: QueryParams,
    token: string,
  ): Promise<Channels> {
    // Get channels of a user.
    /**
     * Gets the various channels a user owns.
     * @method ListUserChannels - Get channels of a user.
     * @param {String} userId - Member ID.
     * @param {Object} queryParams - Query parameters for example offset and limit.
     * @param {String} token - Access token.
     * @returns {Object} - Channels object.
     */

    const stringParams: Record<string, string> = Object.fromEntries(
      Object.entries(queryParams).map(([key, value]) => [key, String(value)]),
    );

    const options: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": this.contentType,
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await fetch(
        new URL(
          `${this.usersEndpoint}/${userId}/channels?${new URLSearchParams(stringParams).toString()}`,
          this.usersUrl,
        ).toString(),
        options,
      );
      if (!response.ok) {
        const errorRes = await response.json();
        throw this.userError.HandleError(errorRes.error, response.status);
      }
      const channelsData = await response.json();
      return channelsData;
    } catch (error) {
      throw error;
    }
  }

  public async ResetPasswordRequest(email: string): Promise<Status> {
    // Sends a request to reset a password
    /**
     * @method ResetPasswordRequest - Sends a request
     * @param {String} email - User email.
     * @returns {Int} - Status.
     * @example
     * const user = {
     * "credentials": {
     *    "identity": "admin@example.com",
     *   "password": "12345678"
     * }
     * }
     */

    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": this.contentType,
      },
      body: email,
    };
    try {
      const response = await fetch(
        new URL("/password/reset-request", this.usersUrl).toString(),
        options,
      );
      if (!response.ok) {
        const errorRes = await response.json();
        throw this.userError.HandleError(errorRes.error, response.status);
      }
      const status = await response.json();
      return status;
    } catch (error) {
      throw error;
    }
  }

  public async ResetPassword(
    password: string,
    confPass: string,
    token: string,
  ): Promise<Status> {
    // Resets a user password
    /**
     * @method ResetPassword - Resets a password.
     * @param {String} password - User Password.
     * @param {String} confPass - User to confirm the Password.
     * @param {String} token - Access token.
     * @returns {Int} - Status Created.
     * @example
     * const user = {
     * "credentials": {
     *    "identity": "admin@example.com",
     *   "password": "12345678"
     * }
     * }
     */

    const rpr = { password, confPass, token };

    const options: RequestInit = {
      method: "PUT",
      headers: {
        "Content-Type": this.contentType,
      },
      body: JSON.stringify(rpr),
    };
    try {
      const response = await fetch(
        new URL("/password/reset", this.usersUrl).toString(),
        options,
      );
      if (!response.ok) {
        const errorRes = await response.json();
        throw this.userError.HandleError(errorRes.error, response.status);
      }
      const status = await response.json();
      return status;
    } catch (error) {
      throw error;
    }
  }
}
