export interface Price {
  amount: string;
  currency: string;
}

export interface Promotion {
  type: string;
  amount: string;
}

export interface CoursePricing {
  ID: string;
  courseID: string;
  initialPrice: Price;
  finalPrice?: Price;
  promotion?: Promotion;
  createdAt: Date;
  updatedAt?: Date;
}
