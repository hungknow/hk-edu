import { ClassTimeSlot } from './timeSlot';

export interface Course {
  ID: string;
  createdByUserID: string;
  createdAt: Date;
  title: string;
  thumbnailUrl?: string;
  description?: string;
  lessonIDs: string[];
  participantIDs: string[];
  pricingID?: string;
  classTimeSlots?: ClassTimeSlot[];
  updatedAt?: Date;
}
