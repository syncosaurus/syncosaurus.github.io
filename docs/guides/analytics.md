# Analytics

Syncosaurus includes an application analytics tool to easily view and analyze aggregate and single-room metrics for your Syncosaurus application.

For setup and basic usage of the Syncosaurus application, see [here](https://github.com/syncosaurus/syncosaurus-dashboard?tab=readme-ov-file#syncosaurus-dashboard)

### Metrics Info

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