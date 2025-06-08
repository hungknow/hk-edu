export interface RoleTimestamp {
  startTimestamp: Date;
  endTimestamp: Date;
}

export interface ParticipantRole {
  role: string;
  timestamps: RoleTimestamp[];
}

export interface CourseParticipant {
  ID: string;
  courseID: string;
  userID: string;
  roles: ParticipantRole[];
  createdAt: Date;
  updatedAt?: Date;
}
