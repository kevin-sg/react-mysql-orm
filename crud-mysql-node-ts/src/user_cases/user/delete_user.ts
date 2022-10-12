import { User } from "@/entities";

export async function deleteUserById({ id }: { id: string }) {
  await User.update({ status: false }, { where: { id } });
  return { success: true };
}
