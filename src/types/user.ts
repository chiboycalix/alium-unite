export interface User {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "User" | "Guest";
  status: "Active" | "Inactive";
  profilePhoto: string;
}
