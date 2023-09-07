// import { NextApiRequest, NextApiResponse } from "next";
// import { Event } from "@/types";
// import events from "./data.json";

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Event[] | { message: string }>
// ) {
//   const evt = events.filter((ev) => ev.slug === req.query.slug);

//   if (req.method === "GET") {
//     res.status(200).json(evt);
//   } else {
//     res.status(405).json({ message: `Method ${req.method} is not allowed` });
//   }
// }
