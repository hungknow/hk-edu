export interface TimeSlot {
  type: string;
  dayOfWeek: number; // 0-6
  startTime: string; // 24-hour format without space (e.g., "1730")
  endTime: string;   // 24-hour format without space (e.g., "2100")
}

export interface ClassTimeSlot {
  startTimestamp: Date;
  endTimestamp: Date;
  slots: TimeSlot[];
}
