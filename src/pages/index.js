import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import Puzzle from '@site/src/components/Puzzle'
import { useState, useEffect } from 'react'

import Heading from '@theme/Heading'
import styles from './index.module.css'

function HomepageHeader() {
  const [scrollDownArrowDisplay, setScrollDownArrowDisplay] = useState('block')

  const setScroll = () => {
    const displayValue =
      window.scrollY / document.body.scrollHeight < 0.05 ? 'block' : 'none'
    setScrollDownArrowDisplay(displayValue)
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
    <div id="hero-landing" className="font-sans rounded-3xl overflow-hidden m-5 lg:m-0 2xl:py-16 xl:py-8 py-10 flex flex-col text-center items-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-syncoBlue">
      <Puzzle />
      <h1 className="text-4xl font-bold text-white m-8">{siteConfig.title}</h1>
      <p className="text-2xl text-white min-w-96 max-w-screen-lg">
        {siteConfig.tagline}
      </p>
      <div className="pt-2 pb-20">
        <Link
          href="#_"
          className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-500 rounded-md hover:bg-green-400 hover:no-underline sm:w-auto sm:mb-0"
          data-primary="green-400"
          data-rounded="rounded-2xl"
          data-primary-reset="{}"
          to="/case-study"
        >
          Read Case Study
        </Link>
      </div>
      <div className="pt-5">
        <img
          style={{ display: scrollDownArrowDisplay }}
          className="opacity-10 animate-pulse"
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
