import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import Puzzle from '@site/src/components/Puzzle'

import Heading from '@theme/Heading'
import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className="flex flex-col text-center items-center py-16 bg-gradient-to-br from-slate-400 to-syncoBlue">
      <Puzzle />
      <h1 className="text-4xl font-bold text-white m-8">{siteConfig.title}</h1>
      <p className="text-xl py-6 text-white min-w-96 max-w-screen-lg">
        {siteConfig.tagline}
      </p>
      <div className="py-10">
        <Link
          className="bg-white rounded-md text-gray-500 px-4 py-2"
          to="/case-study"
        >
          Read the case study
        </Link>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
