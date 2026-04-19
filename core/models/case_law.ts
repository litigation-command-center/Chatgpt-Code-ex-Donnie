export interface CaseLaw {
  case_name: string;
  citation: string;
  court: keyof typeof import("../authority/court_hierarchy").COURT_HIERARCHY;
  jurisdiction: "Texas" | "Federal";

  holding: string;

  binding: boolean;

  relevant_statutes?: string[];
  decision_date: string;
}
