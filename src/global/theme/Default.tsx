import { ReactNode } from 'react'

interface DefaultProps {
  children: ReactNode;
}

export function DefaultTheme({children}: DefaultProps) {
  return (
    <h1>theme</h1>
  )
}