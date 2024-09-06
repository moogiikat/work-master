import { coerce, date, object, string, optional } from "valibot";
import type { Output } from "valibot";

export const FacebookPostSchema = object({
  created_time: coerce(date(), (value) => {
    if (
      typeof value === "string" ||
      typeof value === "number" ||
      value instanceof Date
    ) {
      return new Date(value);
    }
  }),
  id: string(),
  message: optional(string()),
  permalink_url: string(),
});
export type FacebookPost = Output<typeof FacebookPostSchema>;
