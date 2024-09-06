import {  date, object, string, optional } from "valibot";

export const FacebookPostSchema = object({
  created_time: date(),
  id: string(),
  message: optional(string()),
  permalink_url: string(),
});
export type FacebookPost = any;