import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'
import FadeInSection from './FadeInSection'

export default function HomepageBenefits() {
  return (
    <FadeInSection>
      <section className="font-sans rounded-3xl lg:rounded-tl-2xl lg:rounded-bl-2xl overflow-hidden m-1 pb-14 pl-6 pr-6 flex flex-col text-center items-center bg-gray-200">
        <article className="flex flex-col justify-center gap-8">
          <div className="flex flex-col justify-center gap-40 md:flex-row pt-10">
            <div className="flex flex-col items-center md:items-center">
              <p className="tracking-tight text-3xl font-bold text-syncoBlue p-override">
                Ready to Scale
              </p>
              <object data="/img/icons/cloudflare.svg" className="size-28" />
              <p className="text-2xl text-pretty p-override pt-6">
                Scalable infrastructure <br /> built with Cloudflare
              </p>
            </div>

            <div className="flex flex-col items-center md:items-center">
              <p className="tracking-tight text-3xl font-bold text-syncoBlue p-override">
                Quick to Integrate
              </p>
              <object data="/img/icons/React_Logo.svg" className="size-24" />
              <p className="text-2xl text-pretty p-override pt-10">
                React SDK to quickly add <br />
                new features to your app
              </p>
            </div>

            <div className="flex flex-col items-center md:items-center">
              <p className="tracking-tight text-3xl font-bold text-syncoBlue p-override">
                Easy to Configure
              </p>
              <object data="/img/icons/file_icon.svg" className="size-24" />
              <p className="text-2xl text-pretty p-override pt-10">
                Config file to customize <br />
                default syncing behavior
              </p>
            </div>
          </div>
        </article>
      </section>
    </FadeInSection>
  )
}
