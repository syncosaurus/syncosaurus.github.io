import FadeInSection from './FadeInSection'

export default function HomepageBenefits() {
  return (
    <FadeInSection>
      <div className="font-sans benefits-bar mx-auto rounded-3xl lg:rounded-tl-2xl lg:rounded-bl-2xl overflow-hidden my-1 pb-6 pl-6 pr-6 flex flex-col text-center justify-center items-center bg-gray-100">
        <div className="flex flex-col items-center justify-center gap-56 md:flex-row pt-10">
          <div className="flex flex-col justify-center items-center md:items-center">
            <p className="tracking-tight text-3xl font-semibold text-syncoBlue p-override">
              Ready to Scale
            </p>
            <img src="img/icons/cloudflare.svg" className="size-24" />
            <p className="text-2xl text-gray-600 text-pretty p-override pt-10">
              Scalable infrastructure <br /> built with Cloudflare
            </p>
          </div>
          <div className="flex flex-col justify-center items-center md:items-center">
            <p className="tracking-tight text-3xl font-semibold text-syncoBlue p-override">
              Quick to Integrate
            </p>
            <img src="img/icons/React_Logo.svg" className="size-24" />
            <p className="text-2xl text-gray-600 text-pretty p-override pt-10 align-text-bottom">
              React SDK to quickly add <br />
              new features to your app
            </p>
          </div>
          <div className="flex flex-col justify-center items-center md:items-center">
            <p className="tracking-tight text-3xl font-semibold text-syncoBlue p-override">
              Easy to Configure
            </p>
            <img src="img/icons/file_icon.svg" className="size-24" />
            <p className="text-2xl text-gray-600 text-pretty p-override pt-10">
              Config file to customize <br />
              default syncing behavior
            </p>
          </div>
        </div>
      </div>
    </FadeInSection>
  )
}
