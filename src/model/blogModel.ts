import { prisma } from "@/config/prisma"

const blogModel = {
  getBlog: async () => {
    return await prisma.blog.findMany()
  },
}

export default blogModel