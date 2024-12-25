import { DefaultSession, DefaultUser, DefaultProfile } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    githubId?: string;
    githubUsername?: string;
  }

  interface Profile extends DefaultProfile {
    id?: string;
    login?: string;
  }

  declare module "next-auth/jwt" {
    interface JWT {
      githubId?: string;
      githubUsername?: string;
    }
  }
}
