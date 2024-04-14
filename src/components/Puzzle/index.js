import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import ClientWindow from '/landing/Client-window2.svg'

function IFrame() {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext()
  return (
    <div className="container inline-block w-[500px] ml-6 mr-6 mb-6">
      <iframe
        className="bg-transparent h-96 w-[500px]"
        src={customFields.puzzleUrl}
      ></iframe>
      <ClientWindow className="absolute w-[504px] h-[416px] -translate-x-[235px] -translate-y-[413px] pointer-events-none" />
    </div>
  )
}

export default function Puzzle() {
  return (
    <div className="container">
      <IFrame />
      <IFrame />
    </div>
  )
}
