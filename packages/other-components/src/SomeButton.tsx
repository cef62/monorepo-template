import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

export const SomeButton = styled(Button, { name: 'SomeButton', skipSx: true, slot: 'Root' })(
  ({ theme, variant = 'text' }) => ({
    color: variant === 'text' ? theme.palette.info.main : '#ffff00',
  }),
)
