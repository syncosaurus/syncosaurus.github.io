import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

import FadeInSection from './FadeInSection'

export default function HomepageFeatures() {
  return (
    <>
      <FadeInSection>
        <div className="text-center mt-5 pt-10 pb-2">
          <h1 className="text-5xl text-green-500">Key Features</h1>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="w-9/12 h-30 py-10 my-20 mx-auto md:px-6">
          <section className="mb-27">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12 ">
                <object
                  type="image/svg+xml"
                  data="/img/diagrams/diag-whiteboard-demo-dual.svg"
                ></object>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12 align-middle">
                <div className="flex h-full items-center rounded-lg bg-primary p-6  text-black lg:pl-12 lg:text-left">
                  <div className="lg:pl-12">
                    <h2 className="mb-6 text-3xl font-bold  text-syncoBlue">
                      Robust and Flexible Collaboration Engine
                    </h2>
                    <p className="text-2xl text-pretty">
                      Fast and reliable user updates are at the heart of
                      real-time, collaborative web applications. But what
                      happens when multiple clients make conflicting changes
                      simultaneously? <br></br> <br></br>
                      Synocusaurus provides the backbone for
                      both performant state synchronization <i>and</i> flexible
                      conflict resolution logic using client-side prediction and
                      server reconcilliation, techniques developed originally
                      for multi-player video games.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="grid w-9/12 h-30 py-10 my-20 mx-auto md:px-6">
          <section className="mb-27">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-4/12">
                <h2 className="mb-6 text-3xl font-bold text-syncoBlue">
                  Easy Development and Deployment
                </h2>
                <p className="text-2xl text-pretty">
                  Seamlessly create, iterate, deploy, and manage your Syncosaurus
                  applications with our convenient CLI tool.
                </p>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-8/12 align-center">
                <div className="flex h-full rounded-lg bg-primary p-6 text-center text-black lg:pl-12 lg:text-left">
                  <div className="lg:pl-12">
                    <img
                      src="/img/syncosaurus-deploy.png"
                      className="w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[10px] z-[10]"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="grid w-9/12 h-30 py-10 my-20 mx-auto md:px-6">
          <section className="mb-27">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-8/12">
                <div className="flex lg:py-12 w-auto">
                  <img
                    src="img/dashboard_screenshot.png"
                    className="w-full rounded-lg shadow-lg dark:shadow-black/30 lg:ml-[25px] z-[10]"
                    alt="image"
                  />
                </div>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-4/12">
                <div className="flex h-full items-center rounded-lg bg-primary p-6 text-center text-black lg:pl-12 lg:text-left">
                  <div className="lg:pl-12">
                    <h2 className="mb-6 text-3xl  text-syncoBlue font-bold">
                      Built-in Analytics
                    </h2>
                    <p className="text-2xl text-pretty">
                      Monitor your collaborative application's usage metrics, in aggregate or on a
                      per-room basis, with our beautiful dashboard application.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </FadeInSection>
    </>
  )
}
