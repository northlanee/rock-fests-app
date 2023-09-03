// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import events from "./data.json";
import { Event } from "@/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Event[] | { message: string }>
) {
  if (req.method === "GET") {
    res.status(200).json(events);
  } else {
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
