
import CallMadeIcon from '@mui/icons-material/CallMade'
import {Link} from '@mui/material'
import {
  type DocsContainerProps,
  type SourceState,
  ArgsTable,
  Canvas,
  CURRENT_SELECTION,
  Description,
  DescriptionType,
  DocsContainer,
  Story,
  Title,
} from '@storybook/addon-docs'
import type {PreviewProps} from '@storybook/components'
import type {AnyFramework} from '@storybook/csf'
import type {Parameters} from '@storybook/react'
import {type FC, type ReactNode, useState} from 'react'

/**
This custom container implementation enhances on the default DocsContainer. It's unnecessarily complicated,
but it basically adds the ability to have your parameters.description rendered as actual <Description>, phew.

Also it removes the need to include the <Canvas> and <ArgsTable> components in your .mdx file as these will always be
added here.
 */

type CustomCanvasProps = PreviewProps & {
  readonly children?: ReactNode
  readonly mdxSource?: string
  readonly withSource?: SourceState
}

interface CustomDocContainerProps<TFramework extends AnyFramework = AnyFramework>
  extends DocsContainerProps<TFramework> {
  readonly children?: ReactNode
}

const CanvasWithChildren = Canvas as FC<CustomCanvasProps>

const DocsContainerWithChildren = DocsContainer as FC<CustomDocContainerProps>

export const CustomDocContainer = ({children, context}: CustomDocContainerProps) => {
  const [parameters] = useState<Parameters>(context.storyById(context.id).parameters)

  return (
    <DocsContainerWithChildren context={context}>
      <Title />
      {parameters.figmaUrl && (
        <>
          <Link
            href={parameters.figmaUrl}
            rel="noopener"
            sx={{marginBottom: '1rem'}}
            target="_blank"
            variant="caption"
          >
            figma <CallMadeIcon fontSize="inherit" />
          </Link>
        </>
      )}
      <Description markdown={parameters.description || ''} type={DescriptionType.INFO} />
      {parameters?.docs.page && <div style={{marginTop: '1rem'}}>{children}</div>}
      <CanvasWithChildren withToolbar>
        <Story id={context.id} />
      </CanvasWithChildren>
      <ArgsTable story={CURRENT_SELECTION} />
    </DocsContainerWithChildren>
  )
}