import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (data: any): Promise<any> => {
  try {
    return Promise.resolve(
      await prisma.user.create({ data })
    );
  } catch (e) {
    console.log(e.message)
  }
}
