import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Puzzle() {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  console.log(customFields.puzzleUrl);
  return (
    <>
      <iframe
        style={{ height: 500, width: 500 }}
        src={customFields.puzzleUrl}
      ></iframe>
    </>
  );
}
