export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Hermes Agent</title>
        <meta name="description" content="AI Agent on Abstract Chain" />
      </head>
      <body>{children}</body>
    </html>
  );
}
