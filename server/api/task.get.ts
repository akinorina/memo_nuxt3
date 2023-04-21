/**
 * API /api/task
 */
import { Prisma, PrismaClient } from '@prisma/client'

export default defineEventHandler(async () => {
  const prisma = new PrismaClient()
  const tasks = await prisma.task.findMany()
  return tasks
})
