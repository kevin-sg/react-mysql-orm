import { User } from "@/entities";

export async function updateUserById({ id, username }: { id: string; username: string }) {
  const data = await User.update({ username, status: true }, { where: { id: parseInt(id) } });
  return { user: data && (await User.findByPk(id)) };
}
