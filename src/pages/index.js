import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import Puzzle from '@site/src/components/Puzzle'
import { useState, useEffect } from 'react'

function HomepageHeader() {
  const [scrollDownArrowOpacity, setScrollDownArrowOpacity] = useState(0.9)

  const setScroll = () => {
    const displayValue =
      window.scrollY / document.body.scrollHeight < 0.05 ? 1 : 0;
    setScrollDownArrowOpacity(displayValue)
  }

  useEffect(() => {
    window.addEventListener('scroll', setScroll)
    return () => {
      window.removeEventListener('scroll', setScroll)
    }
  }, [])

  const { siteConfig } = useDocusaurusContext()

  return (
    // rounded-2xl bg-indigo-50 py-10 overflow-hidden m-5 lg:m-0 2xl:py-16 xl:py-8  lg:rounded-tl-2xl lg:rounded-bl-2xl
    <div
      id="hero-landing"
      className="font-sans min-h-8/10 rounded-3xl lg:rounded-tl-2xl lg:rounded-bl-2xl overflow-hidden m-1 pt-10 pb-5 flex flex-col text-center items-center bg-gradient-to-br from-slate-900 via-slate-800 to-syncoBlue"
    >
      <Puzzle />
      <h1 className="font-jakarta text-6xl font-bold text-white m-8">{siteConfig.title}</h1>
      <p className="text-2xl text-white min-w-96 max-w-screen-lg">
        {siteConfig.tagline}
      </p>
      <div className="pt-2 pb-20">
        <Link
          href="#_"
          className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-xl text-white bg-green-500 shadow-lg shadow-green-500/400 rounded-md hover:bg-green-400 hover:no-underline sm:w-auto sm:mb-0"
          data-primary="green-500"
          data-rounded="rounded-3xl"
          data-primary-reset="{}"
          to="/case-study"
        >
          Read Case Study
        </Link>
      </div>
      <div className="pt-8 pb-0">
        <img
          style={{ opacity: scrollDownArrowOpacity  }}
          className="animate-bounce"
          src={require('@site/static/img/scroll-down-arrow.png').default}
        ></img>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
