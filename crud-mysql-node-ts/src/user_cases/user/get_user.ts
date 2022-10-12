import { User } from "@/entities";

export async function getUserById({ id }: { id: string }) {
  return { user: await User.findByPk(id) };
}
