import { type MouseEventHandler } from 'react'
import Button from '@mui/material/Button'

type Props = {
  label: string
  variant?: 'text' | 'outlined' | 'contained'
  onClick?: MouseEventHandler
}
export function CoolButton(props: Props) {
  const { label, onClick, variant = 'text' } = props

  return (
    <Button onClick={onClick} variant={variant}>
      {label}
    </Button>
  )
}
