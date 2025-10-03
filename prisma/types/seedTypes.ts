type User = {
  id?: string,
  name?: string,
  email: string,
  emailVerified?: string,
  image?: string
}

enum Category {
  SCIENCE = 'SCIENCE',
  DESIGN = 'DESIGN',
  HEALTH = 'HEALTH',
  IT = 'IT',
  WRITING = 'WRITING'
}

type Blog = {
  id: string,
  userId: string,
  title: string,
  description: string,
  images?: string | string[] | undefined,
  category: Category,
  createdAt: string,
  updatedAt: string
}

export type { User, Category, Blog }