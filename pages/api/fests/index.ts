// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fests from "./data.json";
import { Fest } from "@/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Fest[] | { message: string }>
) {
  if (req.method === "GET") {
    // res.status(200).json(fests);
  } else {
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
