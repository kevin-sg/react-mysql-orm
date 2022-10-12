import { User } from "@/entities";

export async function createUser({ username, email }: { username: string; email: string }) {
  return { user: await User.create({ username, email }) };
}
