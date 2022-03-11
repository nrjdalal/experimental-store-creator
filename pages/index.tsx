import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="flex justify-center">
      <div className="flex h-screen w-full max-w-screen-sm flex-col items-center justify-center p-5">
        {
          // ~ store
        }
        <label>Store Name</label>
        <input type="text" />
        {
          // ~ name
        }
        <label>Full Name</label>
        <input type="text" />
        {
          // ~ email
        }
        <label>Email</label>
        <input type="text" />
        {
          // ~ password
        }
        <label>Password</label>
        <input type="password" />

        <button className="mt-10 h-10 w-full rounded-md bg-emerald-500 text-white">Submit</button>
      </div>
    </div>
  )
}

export default Home
