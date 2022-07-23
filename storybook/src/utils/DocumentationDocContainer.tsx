import CallMadeIcon from '@mui/icons-material/CallMade'
import {CssBaseline, Link} from '@mui/material'
// import {orcTheme} from '@otto-ec/it-dr-design-system-themes'
import {type DocsContainerProps, DocsContainer} from '@storybook/addon-docs'
import {addons} from '@storybook/addons'
import type {AnyFramework} from '@storybook/csf'
import type {Parameters} from '@storybook/react'
import {type FC, type ReactNode, useEffect, useState} from 'react'
import {DARK_MODE_EVENT_NAME} from 'storybook-dark-mode'

import DarkLogo from '../../.storybook/assets/Storybook-dark.svg'
import LightLogo from '../../.storybook/assets/Storybook-light.svg'

interface CustomDocContainerProps<TFramework extends AnyFramework = AnyFramework>
  extends DocsContainerProps<TFramework> {
  readonly children?: ReactNode
}

const DocsContainerWithChildren = DocsContainer as FC<CustomDocContainerProps>

export const DocumentationDocContainer = ({children, context}: CustomDocContainerProps) => {
  const [parameters] = useState<Parameters>(context.storyById(context.id).parameters)

  // Dark mode:
  const channel = addons.getChannel()

  const [isDark, setDark] = useState(undefined)

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, setDark)
    if (isDark !== undefined) {
      let mode: string
      if (isDark) {
        mode = 'dark'
      }
      if (!isDark) {
        mode = 'light'
      }
      if (window.localStorage.getItem('storybook-color-mode') !== mode) {
        window.localStorage.setItem('storybook-color-mode', mode)
        window.location.reload()
      }
    }
    return () => channel.off(DARK_MODE_EVENT_NAME, setDark)
  }, [channel, setDark, isDark])

  return (
    <DocsContainerWithChildren context={context}>
      {parameters.figmaUrl && (
        <>
          <CssBaseline />
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
      {parameters.logo && (
        <img alt="Design System Logo" src={isDark ? DarkLogo : LightLogo} style={{marginBottom: '60px', maxWidth:'100%'}} />
      )}
      {parameters?.docs.page && <div style={{marginTop: '1rem'}}>{children}</div>}
    </DocsContainerWithChildren>
  )
}
