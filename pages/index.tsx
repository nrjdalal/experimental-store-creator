import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center p-5">
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
      {
        // ~ country
      }
      <label>Store Country</label>
      <select>
        <option value="India">India</option>
        <option value="USA">USA</option>
      </select>

      <button className="mt-10 h-8 w-full rounded-md bg-emerald-500 text-white">Submit</button>
    </div>
  )
}

export default Home
