export type ExecomCategory = "faculty" | "lead" | "co-lead" | "executive";

export interface TeamMember {
  id: string;
  name: string;
  position: string; // e.g. "Nodal Officer", "Campus Lead", "Technical Lead"
  department: string;
  yearOfStudy?: string;
  imageUrl: string;
  category: ExecomCategory;
  bio?: string;
  socials: {
    linkedin?: string;
    github?: string;
    email?: string;
    instagram?: string;
  };
}

export interface PastExecomYear {
  year: string; // e.g. "2024 - 2025"
  theme?: string;
  members: TeamMember[];
}
