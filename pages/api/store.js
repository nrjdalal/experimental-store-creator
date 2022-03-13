import { prisma, xid } from 'lib/prisma'

export default async function handle(req, res) {
  try {
    switch (req.method) {
      // ~ CREATE
      case 'POST': {
        const { email, name, password, store } = req.body

        const data = {
          xid: xid(),
          email,
          name,
          password,
          store,
        }

        const response = await prisma.store.create({
          data,
        })

        return res.status(201).json(response)
      }
      // ~ DEFAULT
      default:
        return res.status(405).json({
          error: 'Method not allowed',
        })
    }
  } catch (error) {
    return res.status(400).json(error)
  }
}
