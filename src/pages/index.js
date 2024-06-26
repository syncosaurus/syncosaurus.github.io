import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import HomepageBenefits from '@site/src/components/Benefits'
import Puzzle from '@site/src/components/Puzzle'
import { useRef } from 'react'

export default function Home() {
  const featureRef = useRef(null)

  const handleScrollClick = () => {
    if (featureRef.current) {
      featureRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout description="Syncosaurus Homepage">
      <div
        id="hero-landing"
        className="font-sans h-11/12 rounded-3xl lg:rounded-tl-2xl lg:rounded-bl-2xl shadow-md overflow-hidden m-1 pt-10 pb-5 flex flex-col text-center items-center bg-gradient-to-br from-slate-900 from-15% via-slate-800 via-42% to-syncoBlue"
      >
        <Puzzle />
        <h1 className="text-6xl text-white antialiased font-bold m-8">
          {siteConfig.title}
        </h1>
        <p className="text-2xl text-white antialiased min-w-96 max-w-screen-lg">
          {siteConfig.tagline}
        </p>
        <div className="pt-2 pb-20 items-center">
          <Link
            href="#_"
            className="card-shine-effect shadow-xl inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-xl text-white font-700 rounded-md sm:w-auto sm:mb-0"
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
            className="cursor-pointer opacity-10 animate-pulse"
            src="/img/icons/scroll-down-arrow.png"
            onClick={handleScrollClick}
          ></img>
        </div>
      </div>
      <main ref={featureRef}>
        <HomepageBenefits />
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
