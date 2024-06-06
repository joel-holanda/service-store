import { useEffect, useState } from "react"

export function useWidth() {
    const [widthScreen, setWidthScreen] = useState<number>(0)

    useEffect(() =>{
      const handleResize = () => {
        setWidthScreen(document.documentElement.clientWidth)
      }
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [])

    return widthScreen
}

