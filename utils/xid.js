import { nanoid } from 'nanoid'

const xid = (length = 10) => {
  for (;;) {
    const xid = nanoid(length)

    if (!xid.includes('-') && !xid.includes('_')) {
      return xid
    }
  }
}

export { xid }
