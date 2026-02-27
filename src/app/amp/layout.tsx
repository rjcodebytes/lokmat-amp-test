export const dynamic = "force-static";

export default function AmpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" amp="">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />

        <script async src="https://cdn.ampproject.org/v0.js"></script>

        <style amp-boilerplate>{`
          body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both}
          @-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}
        `}</style>

        <noscript>
          <style amp-boilerplate>{`
            body{-webkit-animation:none}
          `}</style>
        </noscript>

        <style amp-custom>{`
          body { font-family: Arial; margin:0; padding:0 }
          .container { max-width:800px; margin:auto; padding:15px }
        `}</style>
      </head>

      <body>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}