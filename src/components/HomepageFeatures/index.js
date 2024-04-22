import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

import FadeInSection from './FadeInSection'

export default function HomepageFeatures() {
  return (
    <>
      <FadeInSection>
        <div class="container my-20 mx-auto md:px-6 border-double border-0 border-b border-blue-900">
          <section class="mb-27">
            <div class="flex flex-wrap">
              <div class="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
                <div class="flex lg:py-12">
                  <img
                    src={require("@site/static/img/docusaurus-social-card.jpg").default}
                    class="w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[10px] z-[10]"
                    alt="image"
                  />
                </div>
              </div>
              <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div class="flex h-full items-center rounded-lg bg-primary p-6 text-center text-black lg:pl-12 lg:text-left">
                  <div class="lg:pl-12">
                    <h2 class="mb-6 text-3xl font-bold">
                    A synchronization engine based on server reconciliation
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div class="container my-20 mx-auto md:px-6 border-solid border-0 border-b border-blue-900">
          <section class="mb-27">
            <div class="flex flex-wrap">
              <div class="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
              <div class="flex h-full items-center rounded-lg bg-primary p-6 text-center text-black lg:pl-12 lg:text-left">
                  <div class="lg:pl-12">
                    <h2 class="mb-6 text-3xl font-bold">
                    A convenient CLI tool to seamlessly create, configure, manage, and deploy your collaborative application
                    </h2>
                  </div>
                </div>
              </div>
              <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">

                <div class="flex lg:py-12">
                  <img
                    src={require("@site/static/img/syncosaurus-deploy.gif").default}
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
                    src={require("@site/static/img/dashboard_screenshot.png").default}
                    class="w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[25px] z-[10]"
                    alt="image"
                  />
                </div>
              </div>
              <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12">
                <div class="flex h-full items-center rounded-lg bg-primary p-6 text-center text-black lg:pl-12 lg:text-left">
                  <div class="lg:pl-12">
                    <h2 class="mb-6 text-3xl font-bold">
                    An analytics dashboard to monitor your collaborative application's usage and error metrics
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
