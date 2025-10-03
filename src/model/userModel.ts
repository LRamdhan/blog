import { prisma } from "@/config/prisma";
import { User } from "./../../prisma/types/seedTypes";

const userModel = {
  createManyUser: async (users: User[]) => {
    return await prisma.user.createMany({ data: users });
  }
}

export default userModel