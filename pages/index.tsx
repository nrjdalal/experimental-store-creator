import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Home: NextPage = () => {
  const router = useRouter()

  const [store, setStore] = useState('nrjdalal')
  const [name, setName] = useState('Neeraj Dalal')
  const [email, setEmail] = useState('admin@nrjdalal.com')
  const [password, setPassword] = useState('Dummy@123')

  const createStore = async () => {
    const data = {
      store: store,
      name: name,
      email: email,
      password: password,
    }

    console.log(data)

    const res = await fetch('/api/store', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (res.status === 201) {
      router.push(`https://${data.store}.localhost.next`)
    } else {
      console.log('Something went wrong!')
    }
  }

  return (
    <div className="flex justify-center">
      <div className="flex h-screen w-full max-w-screen-sm flex-col items-center justify-center p-5">
        {
          // ~ store
        }
        <label>Store Name</label>
        <input type="text" value={store} onChange={(e) => setStore(e.target.value)} />
        {
          // ~ name
        }
        <label>Full Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        {
          // ~ email
        }
        <label>Email</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        {
          // ~ password
        }
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button className="mt-10 h-10 w-full rounded-md bg-emerald-500 text-white" onClick={createStore}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default Home
