import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import Puzzle from '@site/src/components/Puzzle'
import { useState, useEffect, useRef } from 'react'

export default function Home() {
  const featureRef = useRef(null)
  const [scrollDownArrowOpacity, setScrollDownArrowOpacity] = useState(0.9)

  const setScroll = () => {
    const displayValue =
      window.scrollY / document.body.scrollHeight < 0.05 ? 1 : 0;
    setScrollDownArrowOpacity(displayValue)
  }

  const handleScrollClick = () => {
    if (featureRef.current) {
      featureRef.current.scrollIntoView({ behavior: 'smooth'});
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', setScroll)
    return () => {
      window.removeEventListener('scroll', setScroll)
    }
  }, [])

  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout description="Syncosaurus Homepage">
      <div
      id="hero-landing"
      className="font-sans h-11/12 rounded-3xl lg:rounded-tl-2xl lg:rounded-bl-2xl overflow-hidden m-1 pt-10 pb-5 flex flex-col text-center items-center bg-gradient-to-br from-slate-900 via-slate-800 to-syncoBlue"
    >
      <Puzzle />
      <h1 className="font-jakarta text-6xl font-bold text-white m-8">{siteConfig.title}</h1>
      <p className="text-2xl text-white min-w-96 max-w-screen-lg">
        {siteConfig.tagline}
      </p>
      <div className="pt-2 pb-20">
        <Link
          href="#_"
          className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-xl text-white font-lg font-800 bg-syncoGreen shadow-lg shadow-green-500/400 rounded-md hover:syncoGreen-800 hover:no-underline sm:w-auto sm:mb-0"
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
          className="opacity-10 animate-pulse"
          src="/img/icons/scroll-down-arrow.png"
          onClick={handleScrollClick}
        ></img>
      </div>
    </div>
      <main ref={featureRef}>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
