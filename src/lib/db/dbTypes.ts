import { InferModel } from "drizzle-orm";
import { jwt_users } from "./schema/script";

export type JwtUser = InferModel<typeof jwt_users>;
export type NewJwtUser = InferModel<typeof jwt_users, "insert">;
