import { PrismaClient } from '@prisma/client'
import { xid } from 'utils/xid'

const prisma = new PrismaClient()

export { prisma, xid }
