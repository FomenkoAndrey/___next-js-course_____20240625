'use client'

import Navbar from '@/components/Navbar'
import ImageSlider from '@/components/ImageSlider'
import { useTheme } from '@/contexts/themeProvider'
import { clientUtils } from '@/utils/clientUtils'

export default function ClientRoutePage() {
  const theme = useTheme()
  const result = clientUtils()
  return (
    <>
      <Navbar />
      <h1 className="header" style={{ color: theme.colors.primary }}>
        Client Route Page
      </h1>
      <h2 className="header2">{result}</h2>
      <ImageSlider />
    </>
  )
}
