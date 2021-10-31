// Setting up root-wrapping which comes from the root-mdx file

import { wrapMDX } from './root-mdx'

// the name wrapRootElement is very important!
export const wrapRootElement = wrapMDX
