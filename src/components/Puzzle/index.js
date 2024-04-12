import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

function IFrame() {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext()
  return (
    <iframe
      className="bg-transparent h-full w-full outline-double m-2"
      src={customFields.puzzleUrl}
    ></iframe>
  )
}

export default function Puzzle() {
  return (
    <div className="h-96 w-5/6 col-span-2 flex">
      <IFrame />
      <IFrame />
    </div>
  )
}
