import { prisma } from '@/config/prisma';
import { Blog, User } from './types/seedTypes';
import fs from 'fs';
import userModel from '@/model/userModel';
import blogModel from '@/model/blogModel';

const rawData = fs.readFileSync('data/data.json', 'utf-8');
const data = JSON.parse(rawData);

const resetData = async () => {
  await prisma.user.deleteMany();
  await prisma.blog.deleteMany();
}

const createUsers = async () => {
  const users: User[] = data.users;
  await userModel.createManyUser(users)
}

const createBlogs = async () => {
  const blogs: Blog[] = data.blogs;
  await blogModel.createManyBlog(blogs);  
}

(async () => {userModel
  try {
    await prisma.$connect();
    console.log('Connected to database');
    await resetData();
    console.log('User and Blog is clear');
    await createUsers();
    console.log('User is created');
    await createBlogs();
    console.log('Blog is created');
    await prisma.$disconnect();
    console.log('Disconnected from database');
    console.log('Seed success');
  } catch(error) {
    console.log(error);
  }
})()