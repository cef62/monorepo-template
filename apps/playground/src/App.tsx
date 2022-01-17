import { useCallback } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import CssBaseline from '@mui/material/CssBaseline'
import { CoolButton } from 'cool-components/CoolButton'
import { SomeButton } from 'other-components/SomeButton'

export function App() {
  const handleOnClick = useCallback(() => {
    console.log('Button Clicked')
  }, [])

  return (
    <>
      <CssBaseline />

      <Box
        sx={{
          width: '100%',
          height: '100vh',
          background: '#eeeeee',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper
          elevation={8}
          sx={{
            width: '94%',
            height: '94%',
            display: 'flex',
            background: '#eeddee',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Stack spacing={2}>
            <CoolButton label="Cool Button" onClick={handleOnClick} variant="contained" />

            <SomeButton onClick={handleOnClick} variant="contained">
              Some Button
            </SomeButton>
          </Stack>
        </Paper>
      </Box>
    </>
  )
}
