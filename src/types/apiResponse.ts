/* eslint-disable import/no-cycle */
import { Appointment, Bank, BrandImage, Country, Earning, Notification, Outlet, Schedule } from "~types"

export interface GetCountries {
  data: {
    countries: Country[]
  }
}

export interface Profile {
  firstName?: string
  lastname?: string
  email?: string
  password?: string
  phonenumber?: string
  roles?: Role[]
  hasVerifiedEmail: boolean
 
}

export enum Role {
  ADMIN = 1,
  MANAGER = 2,
  STAFF = 3,
  CLIENT = 4
}

export interface RegisterResponse {
  data: {
    profile: {
      id: string;
      firstname: string;
      lastname: string;
      email: string;
      phonenumber: string;
      updatedat: string;
      createdat: string;
      emailverified: boolean;
    };
  };
}


export interface LoginResponse {
  message: string
  data: {
    profile: Profile
    token: string
  }
}

export interface RequestResponse {
  success: boolean
  message: string
}

export interface VerifyAccountResponse extends RequestResponse {}

export interface GetOverviewResponse {
  success: boolean
  message: string
  data: {
    overview: {
      totalEarning: number
      totalBooked: number
    }
  }
}

export interface PaginatedResponse {
  success: boolean
  message: string
  currentPage: number
  lastPage: number
}

export interface GetAppointmentsResponse extends PaginatedResponse {
  data: Appointment[]
}

export interface GetNotificationsResponse extends PaginatedResponse {
  data: Notification[]
}

export interface GetEarningsResponse extends PaginatedResponse {
  data: Earning[]
  totalEarnings: number
}

export interface UpdateProfileResponse extends RequestResponse {
  data: Profile
}

export interface GetSchedulesResponse extends PaginatedResponse {
  data: Schedule[]
}

export type MinuteInterval = 1 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 15 | 20 | 30;

export interface GetIntervalResponse extends RequestResponse {
  data: {
    interval: MinuteInterval
  }
}

export interface UpdateScheduleResponse extends RequestResponse {
  data: Schedule
}

export interface ToggleScheduleResponse extends RequestResponse {
  data: Schedule
}

export interface CreateBreakResponse extends PaginatedResponse {
  data: [Schedule]
}

export interface GetTimerOptionsResponse extends RequestResponse {
  data: {
    interval: number
    options: string[]
  }
}

export interface GetOutletsResponse extends PaginatedResponse {
  data: Outlet[]
}

export interface GetUserResponse {
  message: string
  data: {
    profile: Profile
  }
}

export interface GetBanksResponse extends PaginatedResponse {
  data: Bank[]
}

export interface UpdateBankResponse extends RequestResponse {
  data: Outlet
}

export interface GetBrandImagesResponse extends PaginatedResponse {
  data: BrandImage[]
}

export interface UploadBrandImageResponse extends RequestResponse {
  data: {
    id: number;
    name: string;
    url: string;
    createdAt: string;
  }
}