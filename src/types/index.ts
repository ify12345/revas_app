/* eslint-disable import/no-cycle */
import { Role } from "./apiResponse";

export interface Country {
  countryName: string
  countryId: number
  countryCode: string;
  countryDialCode: string
}

export interface Appointment {
  id: number
  status: AppointmentStatus
  salon:string
  service: string
  price: number
  startTime: Date
  clientName: string
  clientImage: string
}

export enum AppointmentStatus {
  pending = "PENDING",
  completed = "COMPLETED",
  canceled = "CANCELLED",
  confirmed = "CONFIRMED",
  no_show = "NO_SHOW",
  arrived = "ARRIVED",
  checked_in = "CHECKED_IN",
  checked_out = "CHECKED_OUT",
  in_service = "IN_SERVICE",
  paid = "PAID"
}

export interface Notification {
  id: number;
  userId: number;
  createdAt: Date;
  body: string;
  subject: string;
}

export interface Schedule {
  id: number
  stylist: string
  schedule_date: Date
  start_time: string
  closing_time: string
  isAvailable: boolean
  forHomeService: boolean
  breaks: null | Break[]
}

export interface Break {
  id: number
  break_date: string;
  start_time: string;
  closing_time: string;
  isAvailable: boolean
  forHomeService: boolean
}

export enum ScheduleStatus {
  open = "open",
  closed = "closed"
}

export interface PickerData {
  label: string;
  value: string;
}

export interface Language {
  code: string;
  name: string;
}

export type Service = 'home_service' | 'walk_in'

export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  updatedat: string;
  createdat: string;
  emailverified: boolean;
}

export interface Earning {
  id: number;
  status: AppointmentStatus
  createdAt: Date;
  service: string;
  price: number;
}

export enum AccountType {
  new = "new_account",
  existing = "existing_account"
}

export type Account = {
  id: number;
  bankName: string;
  accountNumber: string;
  routingNumber: string;
  accountName: string
}

export type UpdateState = 'checking' | 'available' | 'downloading' | 'reload'

export type Bank = {
  id: number;
  name: string;
}

export type BrandImage = {
  id: number;
  name: string;
  url: string;
  createdAt: string;
}