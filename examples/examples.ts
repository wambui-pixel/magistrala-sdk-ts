// Import the SDK class from the mainflux-sdk package
import SDK from "../mainflux/sdk";

const defaultUrl = "http://localhost";

const mySdk = new SDK({
  usersUrl: defaultUrl + ":9002",
  domainsUrl: defaultUrl + ":8189",
  thingsUrl: defaultUrl + ":9000",
  channelsUrl: defaultUrl + ":9000",
  //     groupsUrl: defaultUrl + ":9002",
  //     httpadapterUrl: defaultUrl,
  //     readersUrl: defaultUrl + ":9011",
  //     certsUrl: defaultUrl + ":9019",
  //     bootstrapsUrl: defaultUrl + ":9013",
});

// //Things.js examples.

// mySdk.things.Create(
//     { "name": "<thing_name>" },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.things.Get(
//     "<thing_id>",
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.things.CreateBulk(
//     [{ "name": "<thing_name>" }, { "name": "<thing_name>" }],
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.things.GetAll(
//     { "offset": 0, "limit": 10 },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.things.Disable(
//     "<thing_id>",
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.things.Update(
//     "<thing_id>",
//     { "name": "<thing_name>" },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.things.UpdateThingSecret(
//     "<thing_id>",
//     { "secret": "<thing_secret>" },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.things.UpdateThingTags(
//     "<thing_id>",
//     { "tags": ["<foo>", "<bar>"] },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.things.UpdateThingOwner(
//     "<thing_id>",
//     { "owner": "<thing_owner>" },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.things.Connect(
//     "<thing_id>",
//     "<channel_id>",
//     ["<actions>"],
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.things.Disconnect(
//     ["<thing_ids>"],
//     ["<channel_ids>"],
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.things.Connects(
//     ["<thing_id>", "<thing_id>"],
//     ["<channel_id>", "<channel_id>"],
//     ["<action>", "<action>", "<action>"],
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.things.GetByChannel(
//     "<thing_id>",
//     { "offset": 0, "limit": 5 },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.things.IdentifyThing(
//     "<thing_secret>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.things.AuthoriseThing(
//     "<thing_id>",
//     "<channel_id>",
//     "<action>",
//     "<enity_type>",
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// //Users.js

// mySdk.users.Create(
//     { "name": "gemma", "credentials": { "identity": "gemma@email.com", "secret": "12345678" } },
//     ""
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.users.User(
//     "<user_id>",
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.users.UserProfile(
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.users.CreateToken(
//     { identity: "admin@example.com", secret: "12345678" , domain_id: "f248d057-283c-43f4-8ba1-13ffc5514c07"}
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.users.RefreshToken(
//     { identity: "user_id" },
//     "<refresh_token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.users.Update(
//     { "id": "<user_id>", "name": "<user_name>" },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.users.UpdateUserIdentity(
//     { "credentials": { "identity": "<user_identity>" } },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.users.UpdateUserTags(
//     { "tags": ["foo", "bar"] },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.users.UpdateUserRole(
//     { "role": "<user_role>" },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.users.Disable(
//     { "id": "<user_id>" },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.users.Enable(
//     { "id": "<user_id>" },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.users.Users(
//     { "offset": 0, "limit": 10 },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.users.UpdateUserPassword(
//     "<old_secret>", "<new_secret>",
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.users.ListUserChannels(
//     "<user_id>",
//     { "offset": 0, "limit": 10 },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.users.ListUserThings(
//     "<user_id>",
//     { "offset": 0, "limit": 10 },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.users.ListUserGroups(
//     "<user_id>",
//     { "offset": 0, "limit": 10 },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.users.ListDomainUsers(
//     "<domain_id>",
//     { offset: 0, limit: 10 },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.users.ResetPasswordRequest(
//     "<email>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.users.ResetPassword(
//     "<password>",
//     "<confPass>",
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// Domains.js

// mySdk.domains.CreateDomain(
//     { name: "<domain_name>" , email: "<domain_email>" },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.domains.UpdateDomain(
//     { name: "video-games" , id: "f248d057-283c-43f4-8ba1-13ffc5514c07" },
//     "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJkb21haW4iOiJmMjQ4ZDA1Ny0yODNjLTQzZjQtOGJhMS0xM2ZmYzU1MTRjMDciLCJleHAiOjE3MTE0NzE3NTYsImlhdCI6MTcxMTQ2ODE1NiwiaXNzIjoibWFnaXN0cmFsYS5hdXRoIiwic3ViIjoiNzA1YmMzYzYtN2Y5My00MWQ2LWJjNGMtMGE4N2Y4NWU0OTczIiwidHlwZSI6MCwidXNlciI6IjcwNWJjM2M2LTdmOTMtNDFkNi1iYzRjLTBhODdmODVlNDk3MyJ9.iMGvgHpErLkwCFB5vrG9smuWXBZFEqexwX4TM7ts3qJog14AOocKYLxGHKau8mlpCivzvpql3mLwS2--yKW6fA"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.domains.Domain(
//     "f248d057-283c-43f4-8ba1-13ffc5514c07",
//     "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJkb21haW4iOiJmMjQ4ZDA1Ny0yODNjLTQzZjQtOGJhMS0xM2ZmYzU1MTRjMDciLCJleHAiOjE3MTE0NzE4MDMsImlhdCI6MTcxMTQ2ODIwMywiaXNzIjoibWFnaXN0cmFsYS5hdXRoIiwic3ViIjoiNzA1YmMzYzYtN2Y5My00MWQ2LWJjNGMtMGE4N2Y4NWU0OTczIiwidHlwZSI6MCwidXNlciI6IjcwNWJjM2M2LTdmOTMtNDFkNi1iYzRjLTBhODdmODVlNDk3MyJ9.Gjhos0VCZiDoIYKsTF6iQAxUlU8CKUz2e6l007_ICI_X9_0t2LTG0G15qbQXsqZKzo4gAPgyuW8BYJKD7SlhuA"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.domains.DomainPermissions(
//     "f248d057-283c-43f4-8ba1-13ffc5514c07",
//     "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJkb21haW4iOiJmMjQ4ZDA1Ny0yODNjLTQzZjQtOGJhMS0xM2ZmYzU1MTRjMDciLCJleHAiOjE3MTE0NzE4MDMsImlhdCI6MTcxMTQ2ODIwMywiaXNzIjoibWFnaXN0cmFsYS5hdXRoIiwic3ViIjoiNzA1YmMzYzYtN2Y5My00MWQ2LWJjNGMtMGE4N2Y4NWU0OTczIiwidHlwZSI6MCwidXNlciI6IjcwNWJjM2M2LTdmOTMtNDFkNi1iYzRjLTBhODdmODVlNDk3MyJ9.Gjhos0VCZiDoIYKsTF6iQAxUlU8CKUz2e6l007_ICI_X9_0t2LTG0G15qbQXsqZKzo4gAPgyuW8BYJKD7SlhuA"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.domains.Domains(
//     {offset: 0, limit: 10 },
//     "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJkb21haW4iOiJmMjQ4ZDA1Ny0yODNjLTQzZjQtOGJhMS0xM2ZmYzU1MTRjMDciLCJleHAiOjE3MTE0NzE4MDMsImlhdCI6MTcxMTQ2ODIwMywiaXNzIjoibWFnaXN0cmFsYS5hdXRoIiwic3ViIjoiNzA1YmMzYzYtN2Y5My00MWQ2LWJjNGMtMGE4N2Y4NWU0OTczIiwidHlwZSI6MCwidXNlciI6IjcwNWJjM2M2LTdmOTMtNDFkNi1iYzRjLTBhODdmODVlNDk3MyJ9.Gjhos0VCZiDoIYKsTF6iQAxUlU8CKUz2e6l007_ICI_X9_0t2LTG0G15qbQXsqZKzo4gAPgyuW8BYJKD7SlhuA"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.domains.ListUserDomains(
//     "65238590-d86c-4bce-b5e1-db1c984fde99",
//     { "offset": 0, "limit": 10 },
//     "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJkb21haW4iOiJmMjQ4ZDA1Ny0yODNjLTQzZjQtOGJhMS0xM2ZmYzU1MTRjMDciLCJleHAiOjE3MTE0NzE4MDMsImlhdCI6MTcxMTQ2ODIwMywiaXNzIjoibWFnaXN0cmFsYS5hdXRoIiwic3ViIjoiNzA1YmMzYzYtN2Y5My00MWQ2LWJjNGMtMGE4N2Y4NWU0OTczIiwidHlwZSI6MCwidXNlciI6IjcwNWJjM2M2LTdmOTMtNDFkNi1iYzRjLTBhODdmODVlNDk3MyJ9.Gjhos0VCZiDoIYKsTF6iQAxUlU8CKUz2e6l007_ICI_X9_0t2LTG0G15qbQXsqZKzo4gAPgyuW8BYJKD7SlhuA"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.domains.EnableDomain(
//     "f248d057-283c-43f4-8ba1-13ffc5514c07",
//     "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJkb21haW4iOiJmMjQ4ZDA1Ny0yODNjLTQzZjQtOGJhMS0xM2ZmYzU1MTRjMDciLCJleHAiOjE3MTE0NzE4MDMsImlhdCI6MTcxMTQ2ODIwMywiaXNzIjoibWFnaXN0cmFsYS5hdXRoIiwic3ViIjoiNzA1YmMzYzYtN2Y5My00MWQ2LWJjNGMtMGE4N2Y4NWU0OTczIiwidHlwZSI6MCwidXNlciI6IjcwNWJjM2M2LTdmOTMtNDFkNi1iYzRjLTBhODdmODVlNDk3MyJ9.Gjhos0VCZiDoIYKsTF6iQAxUlU8CKUz2e6l007_ICI_X9_0t2LTG0G15qbQXsqZKzo4gAPgyuW8BYJKD7SlhuA"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.domains.DisableDomain(
//     "f248d057-283c-43f4-8ba1-13ffc5514c07",
//     "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJkb21haW4iOiJmMjQ4ZDA1Ny0yODNjLTQzZjQtOGJhMS0xM2ZmYzU1MTRjMDciLCJleHAiOjE3MTE0NzE4MDMsImlhdCI6MTcxMTQ2ODIwMywiaXNzIjoibWFnaXN0cmFsYS5hdXRoIiwic3ViIjoiNzA1YmMzYzYtN2Y5My00MWQ2LWJjNGMtMGE4N2Y4NWU0OTczIiwidHlwZSI6MCwidXNlciI6IjcwNWJjM2M2LTdmOTMtNDFkNi1iYzRjLTBhODdmODVlNDk3MyJ9.Gjhos0VCZiDoIYKsTF6iQAxUlU8CKUz2e6l007_ICI_X9_0t2LTG0G15qbQXsqZKzo4gAPgyuW8BYJKD7SlhuA"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.domains.AddUsertoDomain(
//     "f248d057-283c-43f4-8ba1-13ffc5514c07",
//     { user_ids: ["02b5972d-9db4-425d-a3cd-2e2998217a50", "317cae8e-b15f-4393-8d5b-91587f4b0cdc"], relation: "admin" },
//     "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJkb21haW4iOiJmMjQ4ZDA1Ny0yODNjLTQzZjQtOGJhMS0xM2ZmYzU1MTRjMDciLCJleHAiOjE3MTE0NzE4MDMsImlhdCI6MTcxMTQ2ODIwMywiaXNzIjoibWFnaXN0cmFsYS5hdXRoIiwic3ViIjoiNzA1YmMzYzYtN2Y5My00MWQ2LWJjNGMtMGE4N2Y4NWU0OTczIiwidHlwZSI6MCwidXNlciI6IjcwNWJjM2M2LTdmOTMtNDFkNi1iYzRjLTBhODdmODVlNDk3MyJ9.Gjhos0VCZiDoIYKsTF6iQAxUlU8CKUz2e6l007_ICI_X9_0t2LTG0G15qbQXsqZKzo4gAPgyuW8BYJKD7SlhuA"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.domains.RemoveUserfromDomain(
//     "<domain_id>",
//     { userIDs: ["<user_id>", "<user_id2>"], relation: "<role>" },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// //Groups.js

// mySdk.groups.Create(
//     { "name": "<group_name>" },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.groups.Get(
//     "<group_id>",
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.groups.GetAll(
//     { "offset": 0, "limit": 10 },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.groups.Update(
//     "<group_id>",
//     { "name": "<group_name>" },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.groups.Children(
//     "<group_id>",
//     { "offset": 0, "limit": 2, "tree": true },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.groups.Parents(
//     "<group_id>",
//     { "offset": 0, "limit": 5 },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.groups.Assign(
//     "<group_id>",
//     "<member_id>",
//     ["<member_type>"],
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.groups.Unassign(
//     "<member_id>",
//     "<group_id>",
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.groups.Disable(
//     "<group_id>",
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.groups.Members(
//     "<group_id>",
//     { "offset": 0, "limit": 10 },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// //Channels.js

// mySdk.channels.Create(
//     { "name": "<channel_name>" },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.channels.Get(
//     "<channel_id>",
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.channels.CreateBulk(
//     [{ "name": "<channel_name>" }, { "name": "<channel_name>" }],
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.channels.GetAll(
//     { "offset": 0, "limit": 10 },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.channels.Update(
//     "<channel_id>",
//     { "name": "<channel_name>" },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.channels.Disable(
//     "<channel_id>",
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.channels.GetByThing(
//     "<channel_id>",
//     { "offset": 0, "limit": 5 },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// //Certs.js

// mySdk.certs.Issue(
//     "<thing_id>",
//     "<time_limit>",
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.certs.ViewByThing(
//     "<thing_id>",
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.certs.ViewBySerial(
//     "<cert_id>",
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.certs.Revoke(
//     "<thing_id>",
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// // Bootstrap.js

// mySdk.bootstrap.Create(
//     {
//         "external_id": "<external_id>",
//         "external_key": "<external_key>",
//         "thing_id": "<thing_id>",
//         "name": "<name>"
//     },
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.bootstrap.Whitelist(
//     {
//         "external_id": "<external_i>",
//         "external_key": "<external_key>",
//         "thing_id": "<thing_id>",
//         "name": "<name>"

//     },
//     "<thing_id>",
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.bootstrap.Update(
//     {
//         "name": "<config_name>"
//     },
//     "<thing_id>",
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.bootstrap.View(
//     "<thing_id>",
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.bootstrap.UpdateCerts(
//     "<config_id>",
//     "<client_cert>",
//     "<client_key>",
//     "<ca>",
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     }); ole.error(error.message);
// }

// mySdk.bootstrap.Remove(
//     "<config_id>",
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.bootstrap.Bootstrap(
//     "<external_id>",
//     "<external_key>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// //Messages.js

// mySdk.messages.Send(
//     "<channel_id>",
//     ['<msg>'],
//     "<thing_key>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });

// mySdk.messages.Read(
//     "<channel_id>",
//     "<token>"
// )
//     .then((response: any) => {
//         console.log(response);
//     })
//     .catch((error: any) => {
//         if (error.response) {
//             console.error(error.response);
//         } else {
//             console.error(error.message);
//         }
//     });
