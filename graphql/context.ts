import { PrismaClient } from "@prisma/client";
import prisma from "../lib/prisma";

// we want to export a type
export type Context = {
    // export prisma of type prisma client
    prisma: PrismaClient
}

export async function createContext( req: any, res: any ): Promise<Context> {
    return {
        prisma,
    }
}