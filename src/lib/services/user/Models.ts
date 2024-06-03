// #region Request Model
type GetUserRequestModel = {};

// #region Response Model
type GetUserResponseModel = {
  id: string;
  userName: string;
  phoneNumber: string;
  email: string;
  emailConfirmed: boolean;
  roles: Array<string>;
};

export type { GetUserRequestModel, GetUserResponseModel };
