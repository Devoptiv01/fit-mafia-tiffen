import dotenv from 'dotenv';

dotenv.config();

export const MONGODB_URL = process.env.MONGODB_URL  
export const DB_NAME = process.env.DB_NAME
export const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET