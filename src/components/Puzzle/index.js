import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export default function Puzzle() {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext()

  console.log(customFields.puzzleUrl)
  return (
    <div className="h-24">
      <iframe src={customFields.puzzleUrl}></iframe>
    </div>
  )
}
