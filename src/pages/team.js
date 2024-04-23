import React from 'react'
import Layout from '@theme/Layout'

export default function Team() {
  return (
    <Layout title="The Team" description="Syncosaurus Team Page">
      <div class="mx-auto w-full max-w-4xl px-8 py-8 text-center sm:py-24">
        <h1 class="mb-8 text-[32px] sm:text-5xl text-syncoBlue">The Team</h1>
        <div class="mt-5">
          <div class="mx-auto h-[2px] max-w-md bg-gradient-to-r from-transparent via-syncoGreen to-transparent"></div>
        </div>
        <p class="mx-auto mb-0 mt-4 max-w-prose text-lg sm:mt-8 sm:text-2xl text-syncoBlue"></p>
        <div class="mt-0 grid grid-cols-1 sm:mt-4 sm:grid-cols-3">
          <div class="mt-4 flex flex-col items-center p-4">
            <img
              src="/img/team/alex.jpeg"
              alt="Alex Sklar"
              class="mb-4 mt-4 block w-11/12 max-w-[200px] rounded-full"
            />
            <h3 class="text-syncoBlue mb-3 mt-3 text-center text-2xl sm:text-lg md:text-2xl">
              Alex Sklar
            </h3>
            <div class="flex gap-3">
              <a
                href="https://www.google.com"
                target="_blank"
                className="hover:filter-syncoBlue"
              >
                <img src="/img/icons/website.svg" height={24} width={24}></img>
              </a>
              <a
                href="https://github.com/sklarfox"
                target="_blank"
                className="hover:filter-syncoBlue"
              >
                <img src="/img/icons/github.svg" height={24} width={24}></img>
              </a>
              <a
                href="https://www.linkedin.com/in/alex-sklar-a1829371/"
                target="_blank"
                className="hover:filter-syncoBlue"
              >
                <img src="/img/icons/linkedin.svg" height={24} width={24}></img>
              </a>
              <a
                href="mailto:sklarfox@gmail.com"
                className="hover:filter-syncoBlue"
              >
                <img src="/img/icons/email.svg" height={24} width={24}></img>
              </a>
            </div>
          </div>
          <div class="mt-4 flex flex-col items-center p-4">
            <img
              src="/img/team/erik.jpeg"
              alt="Erik Margetis"
              class="mb-4 mt-4 block w-11/12 max-w-[200px] rounded-full"
            />
            <h3 class="text-syncoBlue mb-3 mt-3 text-center text-2xl sm:text-lg md:text-2xl">
              Erik Margetis
            </h3>
            <div class="flex gap-3">
              <a
                href="https://www.google.com"
                target="_blank"
                className="hover:filter-syncoBlue"
              >
                <img src="/img/icons/website.svg" height={24} width={24}></img>
              </a>
              <a
                href="https://github.com/emargetis"
                target="_blank"
                className="hover:filter-syncoBlue"
              >
                <img src="/img/icons/github.svg" height={24} width={24}></img>
              </a>
              <a
                href="https://www.linkedin.com/in/emargetis/"
                target="_blank"
                className="hover:filter-syncoBlue"
              >
                <img src="/img/icons/linkedin.svg" height={24} width={24}></img>
              </a>
              <a
                href="mailto:erik.margetis@gmail.com"
                className="hover:filter-syncoBlue"
              >
                <img src="/img/icons/email.svg" height={24} width={24}></img>
              </a>
            </div>
          </div>
          <div class="mt-4 flex flex-col items-center p-4">
            <img
              src="/img/team/joseph.jpeg"
              alt="Joseph Liang"
              class="mb-4 mt-4 block w-11/12 max-w-[200px] rounded-full"
            />
            <h3 class="text-syncoBlue mb-3 mt-3 text-center text-2xl sm:text-lg md:text-2xl">
              Joseph Liang
            </h3>
            <div class="flex gap-3">
              <a
                href="https://www.google.com"
                target="_blank"
                className="hover:filter-syncoBlue"
              >
                <img src="/img/icons/website.svg" height={24} width={24}></img>
              </a>
              <a
                href="https://github.com/jgoteam"
                target="_blank"
                className="hover:filter-syncoBlue"
              >
                <img src="/img/icons/github.svg" height={24} width={24}></img>
              </a>
              <a
                href="https://www.linkedin.com/in/joseph-liang-otr-l-1b45668a/"
                target="_blank"
                className="hover:filter-syncoBlue"
              >
                <img src="/img/icons/linkedin.svg" height={24} width={24}></img>
              </a>
              <a
                href="mailto:josephliang@outlook.com"
                className="hover:filter-syncoBlue"
              >
                <img src="/img/icons/email.svg" height={24} width={24}></img>
              </a>
            </div>
          </div>


        </div>
      </div>
    </Layout>
  )
}
