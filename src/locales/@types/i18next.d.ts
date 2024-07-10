// src/@types/i18next.d.ts
import "i18next";
import Resources from "./resources";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "login" | "home" | "common";
    resources: Resources;
  }
}
