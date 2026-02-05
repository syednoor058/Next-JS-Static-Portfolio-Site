import ReactLenis from 'lenis/react'
import { ReactNode } from 'react'

const LenisContainer = ({children}: {children: ReactNode}) => {
  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
        {children}
    </ReactLenis>
  )
}

export default LenisContainer