import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Blockquote, PrismWrapper } from './src/components/MDXTemplates'


/*the idea here is basically for every element that appears in our site, we can map it
to a completely different one. And we put them all in components inside the
MDXTemplates folder.

so for example every instance of a blockquote in our MDX file will now instead render
a Blockquote component with its props, and depending on the props, we can return back
specific things. */

const components = {
  blockquote: Blockquote,
  pre: PrismWrapper,
}

// and then here we are using the MDXProvider to pass in those new component mappings.
export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
