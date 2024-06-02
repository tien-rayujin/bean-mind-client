import { Pagination } from "@/lib/common/Pagination";

// #region Request Model
type CreateSlotRequestModel = Pick<Slot, "startTime" | "endTime">;

type UpdateSlotRequestModel = Pick<Slot, "id" | "startTime" | "endTime">;

// #region Response Model
type GetSlotsResonseModel = Pagination<Slot>;

type GetSlotResponseModel = Slot;

type CreateSlotResponseModel = Slot;

type UpdateSlotResponseModel = Slot;

type DeleteSlotResponseModel = Slot;

export type {
  CreateSlotRequestModel,
  UpdateSlotRequestModel,
  GetSlotResponseModel,
  GetSlotsResonseModel,
  CreateSlotResponseModel,
  UpdateSlotResponseModel,
  DeleteSlotResponseModel,
};
