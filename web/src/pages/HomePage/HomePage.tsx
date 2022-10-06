import { MetaTags } from '@redwoodjs/web'
import './index.css'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>Drake's Coding Club</h1>
      <span className="inline">
        <p className="typewriter">Coding cool stuff</p>
      </span>
    </>
  )
}

export default HomePage
