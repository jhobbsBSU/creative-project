import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

//makes sure that scrolling is smoother

export function useLerpedScroll(lerp = 0.1) {
  const lerped = useRef(0)
  useFrame(() => {
    const scroll = window.scrollY / (document.body.offsetHeight - window.innerHeight)
    lerped.current += (scroll - lerped.current) * lerp
  })
  return lerped
}
