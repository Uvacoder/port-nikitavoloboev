// @refresh reload
import { Suspense } from "solid-js"
import { ErrorBoundary } from "solid-start/error-boundary"
import { Links, Meta, Routes, Scripts } from "solid-start/root"
import "./index.css"

export default function Root() {
  return (
    <html lang="en">
      <head>
        <title>Nikita Voloboev</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Nikita's personal site"></meta>
        <Meta />
        <Links />
      </head>
      <body class="antialiased">
        <ErrorBoundary>
          <Suspense>
            <Routes />
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </body>
    </html>
  )
}
