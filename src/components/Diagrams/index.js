export const Centralized = () => {
  return (
    <figure className="mt-12 mb-12">
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-centralized.svg"
        className="w-1/2"
      ></object>
      <figcaption>
        Centralized architecture with one server and three clients
      </figcaption>
    </figure>
  )
}

export const P2P = () => {
  return (
    <figure className="mt-12 mb-12">
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
    <figure className="mt-8 mb-12">
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
    <figure className="mt-8 mb-12">
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
        className="w-10/12"
      ></object>
      <figcaption></figcaption>
    </figure>
  )
}

export const NewClientConnection = () => {
  return (
    <figure className="mb-12">
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-new-client-connection.svg"
        className="w-1/2"
      ></object>
      <figcaption className="-mt-14">A new client connects, receives a copy of the document from the server</figcaption>
    </figure>
  )
}

export const WhiteboardConflict = () => {
  return (
    <figure className="mb-14">
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-whiteboard-conflict.svg"
        className="w-full"
      ></object>
      <figcaption className="-mt-8">Concurrent edits can lead to conflicting state</figcaption>
    </figure>
  )
}

export const RelativeUpdate = () => {
  return (
    <figure className="mt-12 mb-14">
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
    <figure className="mt-12 mb-14">
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
    <figure className="mt-12 mb-14">
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
    <figure className="mt-12 mb-14">
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-conflict-edits.svg"
        className="w-full"
      ></object>
      <figcaption>Notice how one change is selected by the server</figcaption>
    </figure>
  )
}

export const CRDT = () => {
  return (
    <figure className="mt-16 mb-14">
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-CRDT.svg"
        className="w-11/12"
      ></object>
      <figcaption></figcaption>
    </figure>
  )
}

export const OT = () => {
  return (
    <figure className="mt-16 mb-10">
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-OT.svg"
        className="w-11/12"
      ></object>
      <figcaption></figcaption>
    </figure>
  )
}

export const SyncingModel1 = () => {
  return (
    <figure className="mt-8 mb-12">
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-syncingModel-1.svg"
        className="w-4/12"
      ></object>
      <figcaption className="-mt-8">All local changes are saved in a pending queue</figcaption>
    </figure>
  )
}

export const SyncingModel3 = () => {
  return (
    <figure className="mt-8 mb-12">
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-syncingModel-3.svg"
        className="w-8/12"
      ></object>
      <figcaption className="-mt-8">Local changes are sent to the server, and removed from the pending queue when confirmed</figcaption>
    </figure>
  )
}

export const SyncingModel4 = () => {
  return (
    <figure className="mt-8 mb-8">
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-syncingModel-4.svg"
        className="w-full"
      ></object>
      <figcaption className="-mt-8">Authoritative updates are sent to all connected clients</figcaption>
    </figure>
  )
}

export const GlobalRooms = () => {
  return (
    <figure className="mt-12 mb-12">
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-global-rooms.svg"
        className="w-8/12"
      ></object>
      <figcaption>Multiple rooms with different clients</figcaption>
    </figure>
  )
}

export const CloudflareArchitecture = () => {
  return (
    <figure className="mt-12 mb-12">
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-cloudflare-architecture.svg"
        className="w-8/12"
      ></object>
      <figcaption>New Durable Objects are created on demand, allowing near limitless scaling</figcaption>
    </figure>
  )
}

export const StateUpdates = () => {
  return (
    <figure className="mt-6 mb-12">
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-StateUpdates.svg"
        className="w-8/12"
      ></object>
      <figcaption className="-mt-6">With each sever update, the entire dataset is sent to the client</figcaption>
    </figure>
  )
}

export const DeltaUpdate = () => {
  return (
    <figure className="mt-6 mb-12">
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-DeltaUpdates.svg"
        className="w-8/12"
      ></object>
      <figcaption className="-mt-6">With delta updates, only the changes are sent to the client</figcaption>
    </figure>
  )
}

export const SnapshotID = () => {
  return (
    <figure className="mt-12 mb-12">
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-snapshotId.svg"
        className="w-8/12"
      ></object>
      <figcaption>The client checks the `snapshotID` for every update it receives</figcaption>
    </figure>
  )
}

export const ON2Messaging = () => {
  return (
    <figure className="mt-12 mb-12">
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-ON2-messaging.svg"
        className="w-10/12"
      ></object>
      <figcaption>Each client message received results in a full broadcast to all clients</figcaption>
    </figure>
  )
}

export const TimeDrivenMessages = () => {
  return (
    <figure className="mb-12">
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-timeDrivenMessages.svg"
        className="w-10/12"
      ></object>
      <figcaption className="-mt-8">The server collates all updates received within a specified time interval, and broadcasts them all in a single update </figcaption>
    </figure>
  )
}

export const ONMessaging = () => {
  return (
    <figure className="mt-12 mb-12">
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-ON-messaging.svg"
        className="w-10/12"
      ></object>
      <figcaption>Client messages are collated based on a time interval, greatly reducing how many messages are sent by the server</figcaption>
    </figure>
  )
}

export const Subscriptions = () => {
  return (
    <figure className="mb-12">
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-Subscriptions.svg"
        className="w-10/12"
      ></object>
      <figcaption className="-mt-8">Subscriptions create a link between specific React components and their respective data on the server</figcaption>
    </figure>
  )
}

export const DashboardArchitecture = () => {
  return (
    <figure className="mt-6 mb-6">
      <object
        type="image/svg+xml"
        data="/img/diagrams/diag-Dashboard-Architecture.svg"
        className="w-8/12"
      ></object>
      <figcaption>Both client app and express backend run locally</figcaption>
    </figure>
  )
}
