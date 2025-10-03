import { prisma } from "@/config/prisma"
import { Blog } from "../../prisma/types/seedTypes"

const blogModel = {
  getBlog: async () => {
    return await prisma.blog.findMany()
  },

  createManyBlog: async (blogs: Blog[]) => {    
    return await prisma.blog.createMany({ data: blogs });
  }
}

export default blogModel