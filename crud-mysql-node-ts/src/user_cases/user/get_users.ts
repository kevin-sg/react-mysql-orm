import { User } from "@/entities";

export async function getUsers({ order = "username", status = true }: { order: string; status: boolean }) {
  return {
    users: await User.findAll({ order: [[order, "ASC"]], where: { status } }),
    info: { totalDocs: await User.count({ where: { status } }) },
  };
}
