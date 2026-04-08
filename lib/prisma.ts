import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@/lib/generated/prisma";
import { loadEnvConfig } from "@next/env";

const prismaClientSingleton = () => {
  if (!process.env.DATABASE_URL) {
    const projectDir = process.cwd();
    loadEnvConfig(projectDir);
  }

  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is required to initialize Prisma.");
  }

  const connectionUrl = new URL(databaseUrl);
  const adapter = new PrismaMariaDb({
    host: connectionUrl.hostname,
    port: Number(connectionUrl.port || 3306),
    user: decodeURIComponent(connectionUrl.username),
    password: decodeURIComponent(connectionUrl.password),
    database: connectionUrl.pathname.slice(1) || undefined,
    connectTimeout: 10_000,
    acquireTimeout: 30_000,
  });

  return new PrismaClient({ adapter });
};

declare const globalThis: {
  prismaGlobal?: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const getPrismaClient = () => {
  if (!globalThis.prismaGlobal) {
    globalThis.prismaGlobal = prismaClientSingleton();
  }

  return globalThis.prismaGlobal;
};

export const prisma = new Proxy({} as ReturnType<typeof prismaClientSingleton>, {
  get(_target, property, receiver) {
    return Reflect.get(getPrismaClient(), property, receiver);
  },
});
