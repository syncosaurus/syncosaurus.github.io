import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import ClientWindow from '/landing/Client-window2.svg'
import Signal from './Signal'
import SignalVertical from './SignalVertical'
import { useEffect, useState } from 'react'

function IFrame() {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext()
  return (
    <div className="container inline-block w-[500px] m-0 p-0">
      <iframe
        className="bg-transparent h-96 w-[500px]"
        src={customFields.puzzleUrl}
      ></iframe>
      <ClientWindow className="absolute w-[502px] -translate-x-[501px] -translate-y-4 pointer-events-none" />
    </div>
  )
}

export default function Puzzle() {
  const [windowWidth, setWindowWidth] = useState()

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', e => setWindowWidth(e.target.innerWidth))
  }, [])

  if (windowWidth < 1094) {
    return (
      <div className="grid grid-cols-1 gap-0 justify-center">
        <IFrame />
        <SignalVertical />
        <IFrame />
      </div>
    )
  }
  return (
    <div className="flex">
      <IFrame />
      <Signal />
      <IFrame />
    </div>
  )
}
