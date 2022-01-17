/* eslint-disable @typescript-eslint/no-unused-vars */

// Expose the type definitions used by the type-inference to create a `styled component`.
// This workaround is required to allow Typescript to export correct type definitions of the created `styled components`.
//
// For more reference to the issue
// see: https://github.com/microsoft/TypeScript/issues/29808#issuecomment-540292885

import type { CreateStyled } from '@emotion/styled'
import type { CreateMUIStyled } from '@mui/system'
