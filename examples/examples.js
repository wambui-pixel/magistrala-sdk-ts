// Import the SDK class from the mainflux-sdk package
import SDK from '../mainflux/sdk.js';

// Create an instance of the SDK
// const mySdk = new SDK('http://localhost:9002');
// const thingSdk = new SDK('http://localhost:9000');

const defaultUrl = "http://localhost";

const mySdk = new SDK({
  usersUrl: defaultUrl+ ":9002",
  groupsUrl: defaultUrl+ ":9002",
  thingsUrl: defaultUrl + ":9000",
  groupsUrl: defaultUrl + ":9000",
});

//Things.js examples.
// mySdk.things.Create({"name": "thing2"},"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTM5NzkwMTgsImlhdCI6MTY5MzkyNTAxOCwiaWRlbnRpdHkiOiJmcmllbmRseV9qb25lc0BlbWFpbC5jb20iLCJpc3MiOiJjbGllbnRzLmF1dGgiLCJzdWIiOiJiYmRlMGQzNC1hNzFmLTQ2MDItOGM0Ni0xZTcwZjk4YTdhMWMiLCJ0eXBlIjoiYWNjZXNzIn0.plbuKvE4iSHWddF5Xdy07h5MIxGZUASeiJsyL4xUAISaldNoHiJcV8iRQenzkPjsDR6sHJBzh_Ho24cjkmCIeA");
// mySdk.things.Get("fd4f7da5-b7bf-49b7-bf2f-99995e78afd6","eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQzOTc0NjEsImlhdCI6MTY5NDM0MzQ2MSwiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.gnGm9wkufCfZaH4rZ1lRpVofKEEWjRUq_DNhropP1Rk0dmZDcHJjukUHjp3SyspdSjIRXKGZv4_kWOiRMPdjsw");
// mySdk.things.Create_bulk([{"name": "thing3"}, {"name": "thing4"}],"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTM5NzkwMTgsImlhdCI6MTY5MzkyNTAxOCwiaWRlbnRpdHkiOiJmcmllbmRseV9qb25lc0BlbWFpbC5jb20iLCJpc3MiOiJjbGllbnRzLmF1dGgiLCJzdWIiOiJiYmRlMGQzNC1hNzFmLTQ2MDItOGM0Ni0xZTcwZjk4YTdhMWMiLCJ0eXBlIjoiYWNjZXNzIn0.plbuKvE4iSHWddF5Xdy07h5MIxGZUASeiJsyL4xUAISaldNoHiJcV8iRQenzkPjsDR6sHJBzh_Ho24cjkmCIeA");
// mySdk.things.Get_all({"offset": 0, "limit": 3},"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ1NTk0NzcsImlhdCI6MTY5NDUwNTQ3NywiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.eW2a7i0N66bhPHGPpUc0Xd_ecPv8IA1RRIXpWp6VglKjLjgxMyCp969baz2UaXxyzpukcPDiFoW-bwxtrGM_iw");
// mySdk.things.Disable("6cba4ea5-5820-4419-b389-86984309ad35","eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQzOTc0NjEsImlhdCI6MTY5NDM0MzQ2MSwiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.gnGm9wkufCfZaH4rZ1lRpVofKEEWjRUq_DNhropP1Rk0dmZDcHJjukUHjp3SyspdSjIRXKGZv4_kWOiRMPdjsw");
// mySdk.things.Update("2bb290ff-0cb1-4f06-9da3-aff91c1d039d",{"name": "thing_nuts"},"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQwNDYxMDQsImlhdCI6MTY5Mzk5MjEwNCwiaWRlbnRpdHkiOiJmcmllbmRseV9qb25lc0BlbWFpbC5jb20iLCJpc3MiOiJjbGllbnRzLmF1dGgiLCJzdWIiOiJiYmRlMGQzNC1hNzFmLTQ2MDItOGM0Ni0xZTcwZjk4YTdhMWMiLCJ0eXBlIjoiYWNjZXNzIn0.C6oZHB8yC4pn-ziVVYaVZG5M2pPgw6sYYHGvIwd2Me_031t5E2D_xpYxVDcQ23B4_6LMpx9JJ5eDTPUafKnk4Q");
// mySdk.things.Update_thing_secret("fd4f7da5-b7bf-49b7-bf2f-99995e78afd6",{"secret": "12345678"},"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQwNDYxMDQsImlhdCI6MTY5Mzk5MjEwNCwiaWRlbnRpdHkiOiJmcmllbmRseV9qb25lc0BlbWFpbC5jb20iLCJpc3MiOiJjbGllbnRzLmF1dGgiLCJzdWIiOiJiYmRlMGQzNC1hNzFmLTQ2MDItOGM0Ni0xZTcwZjk4YTdhMWMiLCJ0eXBlIjoiYWNjZXNzIn0.C6oZHB8yC4pn-ziVVYaVZG5M2pPgw6sYYHGvIwd2Me_031t5E2D_xpYxVDcQ23B4_6LMpx9JJ5eDTPUafKnk4Q");
// mySdk.things.Update_thing_tags("fd4f7da5-b7bf-49b7-bf2f-99995e78afd6",{"tags": ["comms","reader"]},"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQwNDYxMDQsImlhdCI6MTY5Mzk5MjEwNCwiaWRlbnRpdHkiOiJmcmllbmRseV9qb25lc0BlbWFpbC5jb20iLCJpc3MiOiJjbGllbnRzLmF1dGgiLCJzdWIiOiJiYmRlMGQzNC1hNzFmLTQ2MDItOGM0Ni0xZTcwZjk4YTdhMWMiLCJ0eXBlIjoiYWNjZXNzIn0.C6oZHB8yC4pn-ziVVYaVZG5M2pPgw6sYYHGvIwd2Me_031t5E2D_xpYxVDcQ23B4_6LMpx9JJ5eDTPUafKnk4Q");
// mySdk.things.Update_thing_owner("fd4f7da5-b7bf-49b7-bf2f-99995e78afd6",{"owner": "5d971c43-913e-4ca5-83e8-3943ed478d9f"},"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQwNDYxMDQsImlhdCI6MTY5Mzk5MjEwNCwiaWRlbnRpdHkiOiJmcmllbmRseV9qb25lc0BlbWFpbC5jb20iLCJpc3MiOiJjbGllbnRzLmF1dGgiLCJzdWIiOiJiYmRlMGQzNC1hNzFmLTQ2MDItOGM0Ni0xZTcwZjk4YTdhMWMiLCJ0eXBlIjoiYWNjZXNzIn0.C6oZHB8yC4pn-ziVVYaVZG5M2pPgw6sYYHGvIwd2Me_031t5E2D_xpYxVDcQ23B4_6LMpx9JJ5eDTPUafKnk4Q");
// mySdk.things.Connect("2bb290ff-0cb1-4f06-9da3-aff91c1d039d", "34ba03e3-ffde-421f-b68f-12d5e197c171", ["m_read"], "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQzOTc0NjEsImlhdCI6MTY5NDM0MzQ2MSwiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.gnGm9wkufCfZaH4rZ1lRpVofKEEWjRUq_DNhropP1Rk0dmZDcHJjukUHjp3SyspdSjIRXKGZv4_kWOiRMPdjsw");
// mySdk.things.Disconnect(["2bb290ff-0cb1-4f06-9da3-aff91c1d039d"], ["34ba03e3-ffde-421f-b68f-12d5e197c171"], "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQzOTc0NjEsImlhdCI6MTY5NDM0MzQ2MSwiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.gnGm9wkufCfZaH4rZ1lRpVofKEEWjRUq_DNhropP1Rk0dmZDcHJjukUHjp3SyspdSjIRXKGZv4_kWOiRMPdjsw");
// mySdk.things.Connects(["4ea328b8-0887-482c-9884-5ce92ff850c9", "abe7e909-cbc7-4525-9d65-f9ba3276ce8a"], ["34ba03e3-ffde-421f-b68f-12d5e197c171"], ["m_read", "c_list"], "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQzOTc0NjEsImlhdCI6MTY5NDM0MzQ2MSwiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.gnGm9wkufCfZaH4rZ1lRpVofKEEWjRUq_DNhropP1Rk0dmZDcHJjukUHjp3SyspdSjIRXKGZv4_kWOiRMPdjsw");
// mySdk.things.Get_by_channel("4ea328b8-0887-482c-9884-5ce92ff850c9", {"offset": 0, "limit": 5}, "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ1NTk0NzcsImlhdCI6MTY5NDUwNTQ3NywiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.eW2a7i0N66bhPHGPpUc0Xd_ecPv8IA1RRIXpWp6VglKjLjgxMyCp969baz2UaXxyzpukcPDiFoW-bwxtrGM_iw");
// mySdk.things.Identify_thing("12345678");
// mySdk.things.Authorise_thing("2bb290ff-0cb1-4f06-9da3-aff91c1d039d","34ba03e3-ffde-421f-b68f-12d5e197c171", "m_read", "group", "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQzOTc0NjEsImlhdCI6MTY5NDM0MzQ2MSwiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.gnGm9wkufCfZaH4rZ1lRpVofKEEWjRUq_DNhropP1Rk0dmZDcHJjukUHjp3SyspdSjIRXKGZv4_kWOiRMPdjsw");


//Users.js
/*
mySdk.users.Create(
    { "credentials": { "identity": "sinatra@email.com", "secret": "12345678" } },
    "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ1NzE1OTYsImlhdCI6MTY5NDUxNzU5NiwiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.FiW0pphIs2sK9ilLEZU-oAsmesdOeHygT9mtYP7yhjAGFBackNhGBoouyvik623f2PM_YFKkM5sVPyPIbdfLlQ"
)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

mySdk.users.Get(
    "886b4266-77d1-4258-abae-2931fb4f16de",
    "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ1NzE1OTYsImlhdCI6MTY5NDUxNzU5NiwiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.FiW0pphIs2sK9ilLEZU-oAsmesdOeHygT9mtYP7yhjAGFBackNhGBoouyvik623f2PM_YFKkM5sVPyPIbdfLlQ"
)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

mySdk.users.Login(
    {"identity": "sinatra@email.com", "secret": "12345678"}
)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

mySdk.users.Refresh_token(
    "c52d-3b0d-43b9-8c3e-275c087d875af",
    "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ2MTE2MjUsImlhdCI6MTY5NDUyNTIyNSwiaWRlbnRpdHkiOiJzaW5hdHJhQGVtYWlsLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImM1NjUwNTJkLTNiMGQtNDNiOS04YzNlLTI3NWMwODdkODc1YSIsInR5cGUiOiJyZWZyZXNoIn0.gSmaazSC3daQjZgxpyILb05HqS18Cf5GieipPcmhv7HAV7BGY4jSJnXdEga7B6XmtCNsxm2_fbr5K6MhhqfYHg"
)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

mySdk.users.Update(
    {"id": "886b4266-77d1-4258-abae-2931fb4f16de", "name": "fkatwigs" },
    "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ1NzE1OTYsImlhdCI6MTY5NDUxNzU5NiwiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.FiW0pphIs2sK9ilLEZU-oAsmesdOeHygT9mtYP7yhjAGFBackNhGBoouyvik623f2PM_YFKkM5sVPyPIbdfLlQ"
)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

mySdk.users.Update_user_identity(
    { "id": "4d9a82e2-bea4-4c24-aec0-4da57aeb8311", "identity": "fkatwigs@email.com" },
    "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ1NzE1OTYsImlhdCI6MTY5NDUxNzU5NiwiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.FiW0pphIs2sK9ilLEZU-oAsmesdOeHygT9mtYP7yhjAGFBackNhGBoouyvik623f2PM_YFKkM5sVPyPIbdfLlQ"
)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

mySdk.users.Update_user_tags(
    { "id": "886b4266-77d1-4258-abae-2931fb4f16de", "tags": ["holy", "terrain"] },
    "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ1NzE1OTYsImlhdCI6MTY5NDUxNzU5NiwiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.FiW0pphIs2sK9ilLEZU-oAsmesdOeHygT9mtYP7yhjAGFBackNhGBoouyvik623f2PM_YFKkM5sVPyPIbdfLlQ"
)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

mySdk.users.Update_user_owner(
    { "id": "886b4266-77d1-4258-abae-2931fb4f16de", "owner": "hozier@email.com" },
    "JhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ1NzE1OTYsImlhdCI6MTY5NDUxNzU5NiwiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.FiW0pphIs2sK9ilLEZU-oAsmesdOeHygT9mtYP7yhjAGFBackNhGBoouyvik623f2PM_YFKkM5sVPyPIbdfLlQ"
)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

mySdk.users.Disable(
    { "id": "c565052d-3b0d-43b9-8c3e-275c087d875a" },
    "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ1NzkxNDMsImlhdCI6MTY5NDUyNTE0MywiaWRlbnRpdHkiOiJzaW5hdHJhQGVtYWlsLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImM1NjUwNTJkLTNiMGQtNDNiOS04YzNlLTI3NWMwODdkODc1YSIsInR5cGUiOiJhY2Nlc3MifQ.OBVLSkvCfMXW9LAjWLDZ9bznMqsqr9LEvvBckgkXQ6MZrZm3KHrwejL7tG-UNlk7lzsIsPZlZyVrSNuoKBVX2w"
)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

mySdk.users.Enable(
    {"id":"c565052d-3b0d-43b9-8c3e-275c087d875a"},
    "JhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ1NzkxNDMsImlhdCI6MTY5NDUyNTE0MywiaWRlbnRpdHkiOiJzaW5hdHJhQGVtYWlsLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImM1NjUwNTJkLTNiMGQtNDNiOS04YzNlLTI3NWMwODdkODc1YSIsInR5cGUiOiJhY2Nlc3MifQ.OBVLSkvCfMXW9LAjWLDZ9bznMqsqr9LEvvBckgkXQ6MZrZm3KHrwejL7tG-UNlk7lzsIsPZlZyVrSNuoKBVX2w"
)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

mySdk.users.Get_all(
    {"offset": 0, "limit": 10},
    "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ1NzE1OTYsImlhdCI6MTY5NDUxNzU5NiwiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.FiW0pphIs2sK9ilLEZU-oAsmesdOeHygT9mtYP7yhjAGFBackNhGBoouyvik623f2PM_YFKkM5sVPyPIbdfLlQ"
)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

mySdk.users.Update_user_password(
    "12345678", "98765432",
    "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ1NzkyMjUsImlhdCI6MTY5NDUyNTIyNSwiaWRlbnRpdHkiOiJzaW5hdHJhQGVtYWlsLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImM1NjUwNTJkLTNiMGQtNDNiOS04YzNlLTI3NWMwODdkODc1YSIsInR5cGUiOiJhY2Nlc3MifQ.7Qqm0v6_pAd8VG2PomugKeS2YWqUjox2u6hkCQdX3GUA06cgQSWVBUKJ8qD6iApKZe0J3oq3j8J26mKsAwiK9w"
)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

mySdk.users.Memberships(
    "886b4266-77d1-4258-abae-2931fb4f16de",
    {"offset": 0, "limit": 5},
    "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ1NzE1OTYsImlhdCI6MTY5NDUxNzU5NiwiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.FiW0pphIs2sK9ilLEZU-oAsmesdOeHygT9mtYP7yhjAGFBackNhGBoouyvik623f2PM_YFKkM5sVPyPIbdfLlQ"
)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

mySdk.users.Authorise_user(
    "886b4266-77d1-4258-abae-2931fb4f16de",
    "3ba0da3f-05ca-4093-ab0d-cdb177c3670c",
    "m_read",
    "group",
    ""
)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });
*/


//Groups.js
/*
mySdk.groups.Create(
    {"name": "shakiraGroup"},
    "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQzOTc0NjEsImlhdCI6MTY5NDM0MzQ2MSwiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.gnGm9wkufCfZaH4rZ1lRpVofKEEWjRUq_DNhropP1Rk0dmZDcHJjukUHjp3SyspdSjIRXKGZv4_kWOiRMPdjsw"
)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

mySdk.groups.Get(
    "36c548ab-2e87-40c6-ad3e-640a8191366f",
    "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ1NzE1OTYsImlhdCI6MTY5NDUxNzU5NiwiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.FiW0pphIs2sK9ilLEZU-oAsmesdOeHygT9mtYP7yhjAGFBackNhGBoouyvik623f2PM_YFKkM5sVPyPIbdfLlQ"
)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });
*/
// mySdk.groups.Get_all({"offset": 0, "limit": 1}, "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ0NzgyODUsImlhdCI6MTY5NDQyNDI4NSwiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.NkdgqzxfewEujP8JRKH4XknwzNu908heA4_-qeRnew_22RdJMy_-GG4351mgReJjft2sz8BGCrdmT6MZOm_vjw");
// mySdk.groups.Update({"id":"290b0f49-7a57-4b8c-9e4e-fbf17c6ab7d9","name": "nickiD", "parent_id":"36c548ab-2e87-40c6-ad3e-640a8191366f"}, "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ1MjIwMDcsImlhdCI6MTY5NDQ2ODAwNywiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.vfPjfNRT-ppcrNNV9GexYIhMRHPo1xHk-lslQrWlzmLsQ1WXPgamwHrLxjeuYRvMz_De4jGD1qVTrscbtR4mtA");
// mySdk.groups.Children("ba0da3f-05ca-4093-ab0d-cdb177c3670c", {"offset": 0, "limit": 3}, "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ1NTk0NzcsImlhdCI6MTY5NDUwNTQ3NywiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.eW2a7i0N66bhPHGPpUc0Xd_ecPv8IA1RRIXpWp6VglKjLjgxMyCp969baz2UaXxyzpukcPDiFoW-bwxtrGM_iw");
// mySdk.groups.Parents({"id":"3ba0da3f-05ca-4093-ab0d-cdb177c3670c"}, {"offset": 0, "limit": 5}, "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ1NTk0NzcsImlhdCI6MTY5NDUwNTQ3NywiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.eW2a7i0N66bhPHGPpUc0Xd_ecPv8IA1RRIXpWp6VglKjLjgxMyCp969baz2UaXxyzpukcPDiFoW-bwxtrGM_iw");
// mySdk.groups.Assign("8a3dbaa3-05b5-4358-8d77-3e5b7c5aee2b", "1c6de974-733b-4d9f-a091-15732b87520", ["m_read", "g_add"], "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQzOTc0NjEsImlhdCI6MTY5NDM0MzQ2MSwiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.gnGm9wkufCfZaH4rZ1lRpVofKEEWjRUq_DNhropP1Rk0dmZDcHJjukUHjp3SyspdSjIRXKGZv4_kWOiRMPdjsw");
// mySdk.groups.Unassign("886b4266-77d1-4258-abae-2931fb4f16de", "3ba0da3f-05ca-4093-ab0d-cdb177c3670c","eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQyMTkyMDgsImlhdCI6MTY5NDE2NTIwOCwiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.Rk5Jc_13I3nJVsOtZodmDNVtxDgeE_TKK4CH8EXqDNj5BOkcHljO574kU7p-RNe_y6etT_0trTeqMHXrCj0cCg" );
// mySdk.groups.Disable("f20e0b0e-b05e-401e-ac53-59b99eea3519","eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQyMTkyMDgsImlhdCI6MTY5NDE2NTIwOCwiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.Rk5Jc_13I3nJVsOtZodmDNVtxDgeE_TKK4CH8EXqDNj5BOkcHljO574kU7p-RNe_y6etT_0trTeqMHXrCj0cCg");
// mySdk.groups.Members("3ba0da3f-05ca-4093-ab0d-cdb177c3670c", {"offset": 0, "limit": 5}, "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ1NTk0NzcsImlhdCI6MTY5NDUwNTQ3NywiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.eW2a7i0N66bhPHGPpUc0Xd_ecPv8IA1RRIXpWp6VglKjLjgxMyCp969baz2UaXxyzpukcPDiFoW-bwxtrGM_iw");

//Channels.js

//mySdk.channels.Create({"name":"neptune"}, "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQzMDI2NjIsImlhdCI6MTY5NDI0ODY2MiwiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.kM5XgANUj501xnwX-DdGaa8XaritRK7mYh6spQjx3zaFGJISQCeehRMAQf7-DQ_I1-QLaFa8OJSUVWhfhbdsYA");
//mySdk.channels.Get("8e98fe46-2c85-49be-b8a0-69acb510207b","eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQzMDI2NjIsImlhdCI6MTY5NDI0ODY2MiwiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.kM5XgANUj501xnwX-DdGaa8XaritRK7mYh6spQjx3zaFGJISQCeehRMAQf7-DQ_I1-QLaFa8OJSUVWhfhbdsYA");
//mySdk.channels.Create_bulk([{"name":"madonna"}, {"name":"raye"}], "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQzMDI2NjIsImlhdCI6MTY5NDI0ODY2MiwiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.kM5XgANUj501xnwX-DdGaa8XaritRK7mYh6spQjx3zaFGJISQCeehRMAQf7-DQ_I1-QLaFa8OJSUVWhfhbdsYA");
// mySdk.channels.Get_all({"offset": 0, "limit": 2}, "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ1NTk0NzcsImlhdCI6MTY5NDUwNTQ3NywiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.eW2a7i0N66bhPHGPpUc0Xd_ecPv8IA1RRIXpWp6VglKjLjgxMyCp969baz2UaXxyzpukcPDiFoW-bwxtrGM_iw");
//mySdk.channels.Update({"id":"46b364e0-69d0-45a4-9ccf-7fbffc980b95", "name":"doja"}, "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQzOTc0NjEsImlhdCI6MTY5NDM0MzQ2MSwiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.gnGm9wkufCfZaH4rZ1lRpVofKEEWjRUq_DNhropP1Rk0dmZDcHJjukUHjp3SyspdSjIRXKGZv4_kWOiRMPdjsw");
//mySdk.channels.Disable({"id":"f7089646-c19c-47e0-b8b8-b5f46ae8cdc4"}, "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQzOTc0NjEsImlhdCI6MTY5NDM0MzQ2MSwiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.gnGm9wkufCfZaH4rZ1lRpVofKEEWjRUq_DNhropP1Rk0dmZDcHJjukUHjp3SyspdSjIRXKGZv4_kWOiRMPdjsw");
// mySdk.channels.Get_by_thing("34ba03e3-ffde-421f-b68f-12d5e197c171", {"offset": 0, "limit": 5}, "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ1NTk0NzcsImlhdCI6MTY5NDUwNTQ3NywiaWRlbnRpdHkiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlzcyI6ImNsaWVudHMuYXV0aCIsInN1YiI6ImE3MjVlMjZkLWRjMWYtNDQ1Mi04MGRjLTQxZmM2NTRhYTM4YiIsInR5cGUiOiJhY2Nlc3MifQ.eW2a7i0N66bhPHGPpUc0Xd_ecPv8IA1RRIXpWp6VglKjLjgxMyCp969baz2UaXxyzpukcPDiFoW-bwxtrGM_iw");
//mySdk.channels.Identify_thing("12345678");
