import { Pagination } from "@/lib/common/Pagination";

// #region Request Model
type CreateTeachingSlotRequestModel = Pick<
  TeachingSlot,
  "date" | "slotId" | "lecturerId" | "gradeLevelId"
>;

type UpdateTeachingSlotRequestModel = Pick<
  TeachingSlot,
  "id" | "date" | "slotId" | "lecturerId" | "gradeLevelId"
>;

// #region Response Model
type GetTeachingSlotsResonseModel = Pagination<TeachingSlot>;

type GetTeachingSlotResponseModel = TeachingSlot;

type CreateTeachingSlotResponseModel = TeachingSlot;

type UpdateTeachingSlotResponseModel = TeachingSlot;

type DeleteTeachingSlotResponseModel = TeachingSlot;

export type {
  CreateTeachingSlotRequestModel,
  UpdateTeachingSlotRequestModel,
  GetTeachingSlotResponseModel,
  GetTeachingSlotsResonseModel,
  CreateTeachingSlotResponseModel,
  UpdateTeachingSlotResponseModel,
  DeleteTeachingSlotResponseModel,
};
