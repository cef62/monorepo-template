import { useCallback } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import CssBaseline from '@mui/material/CssBaseline'
import { CoolButton } from 'cool-components/CoolButton'

export function App() {
  const handleOnClick = useCallback(() => {
    console.log('CoolButton Clicked')
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
          Hello
          <CoolButton
            label="Do you want to click me?"
            onClick={handleOnClick}
            variant="contained"
          />
        </Paper>
      </Box>
    </>
  )
}
