# Analytics

Syncosaurus includes an application analytics tool to easily view and analyze aggregate and single-room metrics for your Syncosaurus application.

## Setup

- Clone this repository to your local environment: git clone https://github.com/syncosaurus/syncosaurus-dashboard.git
- Create an `.env` file with the following environment variables and values in the root directory:
   - `CLOUDFLARE_ACCOUNT_ID`: This is the account ID associated with your Cloudflare account. For instructions on finding your account ID, click [here](https://developers.cloudflare.com/fundamentals/setup/find-account-and-zone-ids/).
   - `BEARER_AUTH`: This is an Cloudflare Analytics API token associated with your account. This is used to access the GraphQL Analytics API. For instructions on creating an API token, click [here](https://developers.cloudflare.com/analytics/graphql-api/getting-started/authentication/api-token-auth/).
   - `X_AUTH_EMAIL`: This is the e-mail address associated with your Cloudflare account.
   - `X_AUTH_KEY`: This is your Cloudflare global API key. This is used to access the Cloudflare API. For instructions on finding your global API key, click [here](https://developers.cloudflare.com/fundamentals/api/get-started/keys/).
   - `PORT`: This is the local port that you want the dashboard app to use. If this value does not exist, the application defaults to port 3001.
- Install dependencies: `npm install`
- Run the dashboard application: `npm start`
- An URL to the dashboard application will be displayed (ex: http://localhost:3001). Click the URL to launch the dashboard application.


## Metrics Info

All metrics are grouped and organized against time, by the hour, over 24 hours (a full day). The timezone for all metrics is GMT.

The following statistics are provided for the aggregated 'All Rooms Metrics' option:
   - Total \# of active rooms per hour
   - Max \# of websocket connections per hour
   - Average \# of connections per active room per hour
   - Total \# of inbound websocket messages per hour
   - Total \# of outbound websocket messages per hour
   - Total \# of exceeded CPU errors per hour
   - Total \# of exceeded memory errors per hour
   - Total \# of fatal internal errors per hour

The following metrics are provided for 'Individual Room Metrics' option:
  - Max \# of websocket connections per hour
  - Total \# of inbound websocket messages per hour
  - Total \# of outbound websocket messages per hour
  - Total \# of exceeded CPU errors per hour
  - Total \# of exceeded memory errors per hour
  - Total \# of fatal internal errors per hour
