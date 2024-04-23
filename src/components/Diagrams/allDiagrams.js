import {Websockets, AbsoluteUpdates, Centralized, ConflictEdits, CRDT, DeltaUpdate, LongPolling, NewClientConnection, ONMessaging, ON2Messaging, OptimisticUI, OT, P2P, RelativeUpdate, StateUpdates, SyncingModel1, SyncingModel2, SyncingModel3, SyncingModel4, TimeDrivenMessages, WhiteboardDemo, WhiteboardDemoLatency } from '@site/src/components/Diagrams/index.js'

const AllDiagrams = () => {

  return (
    <>
    <Websockets />
    <AbsoluteUpdates />
    <Centralized />
    <ConflictEdits />
    <CRDT />
    <DeltaUpdate />
    <LongPolling />
    <NewClientConnection />
    <ONMessaging />
    <ON2Messaging />
    <OptimisticUI />
    <OT />
    <P2P />
    <RelativeUpdate />
    <StateUpdates />
    <SyncingModel1 />
    <SyncingModel2 />
    <SyncingModel3 />
    <SyncingModel4 />
    <TimeDrivenMessages />
    <WhiteboardDemo />
    <WhiteboardDemoLatency />
    </>
  )
}

export default AllDiagrams