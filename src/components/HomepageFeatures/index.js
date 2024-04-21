import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

import FadeInSection from './FadeInSection'

export default function HomepageFeatures() {
  return (
    <>
      <FadeInSection>
        <div className="text-center mt-12">
          <h1>Features</h1>
        </div>

        <div class="container my-20 mx-auto md:px-6">
          <section class="mb-27">
            <div class="flex flex-wrap">
              <div class="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
                <div class="flex lg:py-12">
                  <img
                    src={
                      require('@site/static/img/docusaurus-social-card.jpg')
                        .default
                    }
                    class="w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[10px] z-[10]"
                    alt="image"
                  />
                </div>
              </div>
              <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div class="flex h-full items-center rounded-lg bg-primary p-6 text-center text-black lg:pl-12 lg:text-left">
                  <div class="lg:pl-12">
                    <h2 class="mb-6 text-3xl font-bold">
                      A Robust and Flexible Collaboration Engine
                    </h2>
                    <p>
                      Fast and reliable user updates are at the heart of
                      real-time, collaborative web applications. But what
                      happens when multiple clients make conflicting changes
                      simulatenously? Client data can be overwritten and a
                      client's experience can become unresponsive and/or
                      illogical. Synocusaurus provides the backbone for both
                      performant state synchronization <i>and</i> flexible
                      conflict resolution logic using client-side prediction and
                      server reconcilliation, techniques originally developed
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
        <div class="container my-20 mx-auto md:px-6">
          <section class="mb-27">
            <div class="flex flex-wrap">
              <div class="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
                <div class="flex h-full items-center rounded-lg bg-primary p-6 text-center text-black lg:pl-12 lg:text-left">
                  <div class="lg:pl-12">
                    <h2 class="mb-6 text-3xl font-bold">
                      Simple Development, Deployment, and Management
                    </h2>
                    <p>
                      Seamlessly initialize, iterate, deploy, and manage your Syncosaurus applications from your terminal
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div class="flex lg:py-12">
                  <img
                    src={
                      require('@site/static/img/syncosaurus-deploy.gif').default
                    }
                    class="w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[10px] z-[10]"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div class="container my-20 mx-auto md:px-6">
          <section class="mb-27">
            <div class="flex flex-wrap">
              <div class="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12">
                <div class="flex lg:py-12">
                  <img
                    src={
                      require('@site/static/img/dashboard_screenshot.png')
                        .default
                    }
                    class="w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[25px] z-[10]"
                    alt="image"
                  />
                </div>
              </div>
              <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12">
                <div class="flex h-full items-center rounded-lg bg-primary p-6 text-center text-black lg:pl-12 lg:text-left">
                  <div class="lg:pl-12">
                    <h2 class="mb-6 text-3xl font-bold">
                      An analytics dashboard to monitor your collaborative
                      application's usage and error metrics
                    </h2>
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
