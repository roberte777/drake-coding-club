import { MetaTags } from '@redwoodjs/web'
import './index.css'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <main className="px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <h1 className="mb-2 text-6xl font-bold tracking-tight">
          Drake's Coding Club
        </h1>
        <span className="inline-block">
          <p className="typewriter">Coding cool stuff</p>
        </span>
      </main>
    </>
  )
}

export default HomePage
