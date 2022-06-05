import { BigInt } from "@graphprotocol/graph-ts";
import {
  ApprovalForAll,
  Initialized,
  OwnershipTransferred,
  Paused,
  TransferBatch,
  TransferSingle,
  URI,
  Unpaused,
  ClaimedVolunteerHours,
} from "../generated/Borantia/Borantia";
import { BorantiaVolunteer } from "../generated/schema";

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleInitialized(event: Initialized): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePaused(event: Paused): void {}

export function handleTransferBatch(event: TransferBatch): void {}

export function handleTransferSingle(event: TransferSingle): void {}

export function handleURI(event: URI): void {}

export function handleUnpaused(event: Unpaused): void {}

export function handleClaimedVolunteerHours(event: ClaimedVolunteerHours): void {
  let bv = new BorantiaVolunteer(event.transaction.hash.toString())
  bv.xp = event.params.h;
  bv.tokenId = event.params.tid;
  bv.account = event.params.volunteer;
  bv.save();
}
