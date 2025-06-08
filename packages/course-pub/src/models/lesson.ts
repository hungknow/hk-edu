export interface Lesson {
  ID: string;
  createdByUserID: string;
  createdAt: Date;
  title: string;
  courseID: string;
  thumbnailUrl?: string;
  description?: string;
  updatedAt?: Date;
}