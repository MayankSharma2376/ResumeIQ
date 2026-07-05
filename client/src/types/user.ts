export interface User {
    _id: string;
    fullName: string;
    username: string;
    email: string;
    avatar?: string;
    role?: "user" | "admin";
    provider?: "local" | "google";
    isVerified?: boolean;
    createdAt: string;
}