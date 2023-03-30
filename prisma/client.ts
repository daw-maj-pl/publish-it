import { PrismaClient } from '@prisma/client';

declare global {
  namespace NodeJS {
    interface Global {}
  }
}

// Add Prisma to the NodeJS global type
interface CustomNodeJsGlobal extends NodeJS.Global {
  prisma: PrismaClient;
}

// Prevent multiple instances of Prisma Client in development
declare const globalThis: CustomNodeJsGlobal;

const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;
