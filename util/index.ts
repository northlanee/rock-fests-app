import cookie from "cookie";
import { IncomingMessage } from "http";

type Req = IncomingMessage & {
  cookies: Partial<{
    [key: string]: string;
  }>;
};

export const parseCookies = (req: Req) => {
  return cookie.parse(req ? req.headers.cookie || "" : "");
};
