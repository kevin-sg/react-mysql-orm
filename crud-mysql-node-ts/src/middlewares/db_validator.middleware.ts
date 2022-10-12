import { User } from "@/entities";

export async function isUserById(id: string): Promise<boolean> {
  const user = await User.findByPk(id);
  if (!user) throw new Error("Invalid user");
  return true;
}

export async function isUserByEmail(email: string): Promise<boolean> {
  const user = await User.findOne({ where: { email } });
  if (user) throw new Error("Email already exists");
  return true;
}
