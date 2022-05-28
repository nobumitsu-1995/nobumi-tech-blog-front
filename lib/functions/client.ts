import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "nobumi-tech",
  apiKey: `${process.env.NEXT_PUBLIC_MICROCMS_API_KEY}`
})