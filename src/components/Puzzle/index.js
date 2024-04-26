import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import ClientWindow from '/landing/Client-window2.svg'
import Signal from './Signal'
import SignalVertical from './SignalVertical'
import { useEffect, useState } from 'react'

const divStyle = {
  border: '14px solid',
  borderImage: 'url(' + '/landing/Client-window2.svg' + ') 15',
}

function IFrame({ narrow }) {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext()

  if (narrow === 'sm') {
    return (
      <div style={divStyle}>
        <iframe
          className="bg-transparent h-96 w-[475px] ml-[-35px]"
          src={'https://c218db58.website-puzzle.pages.dev/'}
        ></iframe>
      </div>
    )
  }

  return (
    <div className="container inline-block w-[500px] m-0 p-0">
      <iframe
        className="bg-transparent h-96 w-[500px]"
        src={'https://c218db58.website-puzzle.pages.dev/'}
      ></iframe>
      <ClientWindow className="absolute w-[502px] -translate-x-[501px] -translate-y-4 pointer-events-none opacity-60" />
    </div>
  )
}

export default function Puzzle() {
  const [windowWidth, setWindowWidth] = useState()

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', e => setWindowWidth(e.target.innerWidth))
  }, [])

  if (windowWidth < 600) {
    return (
      <div className="grid grid-cols-1 gap-0 justify-center w-full">
        <IFrame narrow={'sm'} />
        <SignalVertical />
        <IFrame narrow={'sm'} />
      </div>
    )
  }

  if (windowWidth < 1094) {
    return (
      <div className="grid grid-cols-1 gap-0 justify-center">
        <IFrame narrow={'md'} />
        <SignalVertical />
        <IFrame narrow={'md'} />
      </div>
    )
  }
  return (
    <div className="flex">
      <IFrame narrow={'lg'} />
      <Signal />
      <IFrame narrow={'lg'} />
    </div>
  )
}
