export const Centralized = () => {
  return (
    <figure>
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-centralized.svg"
        className="w-1/2"
      ></object>
      <figcaption className="text-gray-400">
        Centralized architecture with one server and three clients
      </figcaption>
    </figure>
  )
}

export const P2P = () => {
  return (
    <figure>
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-p2p.svg"
        className="w-1/2"
      ></object>
      <figcaption>Decentralized architecture with three nodes</figcaption>
    </figure>
  )
}

export const LongPolling = () => {
  return (
    <figure>
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-long-polling.svg"
        className="w-2/3"
      ></object>
      <figcaption>
        Client sends request to server that is kept open by server until update
        is available
      </figcaption>
    </figure>
  )
}

export const Websockets = () => {
  return (
    <figure>
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-websocket-handshake.svg"
        className="w-2/3"
      ></object>
      <figcaption>
        Client sends websocket request to server which upgrades connection
      </figcaption>
    </figure>
  )
}

export const WhiteboardDemo = () => {
  return (
    <figure>
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-whiteboard-demo-dual.svg"
        className="w-full"
      ></object>
      <figcaption></figcaption>
    </figure>
  )
}

export const WhiteboardDemoLatency = () => {
  return (
    <figure>
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-whiteboard-demo-dual-latency.svg"
        className="w-full"
      ></object>
      <figcaption></figcaption>
    </figure>
  )
}

export const OptimisticUI = () => {
  return (
    <figure>
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-optimistic-ui.svg"
        className="w-3/4"
      ></object>
      <figcaption></figcaption>
    </figure>
  )
}

export const NewClientConnection = () => {
  return (
    <figure>
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-new-client-connection.svg"
        className="w-1/2"
      ></object>
      <figcaption></figcaption>
    </figure>
  )
}

export const WhiteboardConflict = () => {
  return (
    <figure>
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-whiteboard-conflict.svg"
        className="w-full"
      ></object>
      <figcaption></figcaption>
    </figure>
  )
}

export const RelativeUpdate = () => {
  return (
    <figure>
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-relative-update.svg"
        className="w-full"
      ></object>
      <figcaption>Notice how the changes are cumulative</figcaption>
    </figure>
  )
}

export const AbsoluteUpdates = () => {
  return (
    <figure>
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-absolute-update.svg"
        className="w-full"
      ></object>
      <figcaption>Notice how the changes overwrite each other</figcaption>
    </figure>
  )
}

export const NoConflictEdits = () => {
  return (
    <figure>
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-no-conflict-edits.svg"
        className="w-full"
      ></object>
      <figcaption>Notice how the changes are combined</figcaption>
    </figure>
  )
}

export const ConflictEdits = () => {
  return (
    <figure>
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-conflict-edits.svg"
        className="w-full"
      ></object>
      <figcaption>Notice how one change is selected by the server</figcaption>
    </figure>
  )
}

export const SyncingModel1 = () => {
  return (
    <figure>
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-syncingModel-1.svg"
        className="w-4/12"
      ></object>
      <figcaption></figcaption>
    </figure>
  )
}

export const SyncingModel3 = () => {
  return (
    <figure>
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-syncingModel-3.svg"
        className="w-8/12"
      ></object>
      <figcaption></figcaption>
    </figure>
  )
}

export const SyncingModel4 = () => {
  return (
    <figure>
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-syncingModel-4.svg"
        className="w-full"
      ></object>
      <figcaption></figcaption>
    </figure>
  )
}

export const GlobalRooms = () => {
  return (
    <figure>
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-global-rooms.svg"
        className="w-8/12 mt-12"
      ></object>
      <figcaption>Multiple rooms with different clients</figcaption>
    </figure>
  )
}

export const CloudflareArchitecture = () => {
  return (
    <figure>
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-cloudflare-architecture.svg"
        className="w-8/12"
      ></object>
      <figcaption></figcaption>
    </figure>
  )
}

export const StateUpdates = () => {
  return (
    <figure>
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-StateUpdates.svg"
        className="w-8/12"
      ></object>
      <figcaption></figcaption>
    </figure>
  )
}

export const DeltaUpdate = () => {
  return (
    <figure>
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-DeltaUpdates.svg"
        className="w-8/12"
      ></object>
      <figcaption></figcaption>
    </figure>
  )
}

export const SnapshotID = () => {
  return (
    <figure>
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-snapshotId.svg"
        className="w-8/12"
      ></object>
      <figcaption></figcaption>
    </figure>
  )
}

export const ON2Messaging = () => {
  return (
    <figure>
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-ON2-messaging.svg"
        className="w-10/12"
      ></object>
      <figcaption></figcaption>
    </figure>
  )
}

export const TimeDrivenMessages = () => {
  return (
    <figure>
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-timeDrivenMessages.svg"
        className="w-10/12"
      ></object>
      <figcaption></figcaption>
    </figure>
  )
}

export const ONMessaging = () => {
  return (
    <figure>
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-ON-messaging.svg"
        className="w-10/12"
      ></object>
      <figcaption></figcaption>
    </figure>
  )
}

export const Subscriptions = () => {
  return (
    <figure>
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-Subscriptions.svg"
        className="w-10/12"
      ></object>
      <figcaption></figcaption>
    </figure>
  )
}

export const DashboardArchitecture = () => {
  return (
    <figure>
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-Dashboard-Architecture.svg"
        className="w-8/12"
      ></object>
      <figcaption></figcaption>
    </figure>
  )
}

/*------------------------------------------*/

export const CRDT = () => {
  return (
    <figure>
    <object
      type="image/svg+xml"
      data="/img/diagrams/diag-CRDT.svg"
      className="w-8/12"
      ></object>
      <figcaption></figcaption>
    </figure>
  )
}

export const OT = () => {
  return (
    <figure>
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-OT.svg"
        className="w-8/12"
      ></object>
      <figcaption></figcaption>
    </figure>
  )
}
