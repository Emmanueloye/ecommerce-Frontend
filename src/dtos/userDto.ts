export type User = {
  _id: string;
  fullName: string;
  email: string;
  password?: string;
  isVerified: boolean;
  verifiedDate: Date;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  passwordChangedAt?: Date;
  photo?: string;
  photoPublicId?: string;
  role: string;
  address?: string;
  state?: string;
  country?: string;
  createdAt: Date;
  updatedAt?: Date;
  phone?: number;
  city?: string;
};
