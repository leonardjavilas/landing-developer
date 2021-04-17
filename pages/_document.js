import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Leonard J. Ávila S. | Front-end Engineer</title>
          {/* Primary Meta Tags */}
          <meta name="title" content="Leonard J. Ávila S. | Front-end Engineer"/>
          <meta name="description" content="Web Development, Javascript, React,  Next, Node, CSS ,Web Performance."/>
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website">
          <meta property="og:url" content="https://www.leonardavila.dev/"/>
          <meta property="og:title" content="Leonard J. Ávila S. | Front-end Engineer"/>
          <meta property="og:description" content="Web Development, Javascript, React,  Next, Node, CSS ,Web Performance.">
          <meta property="og:image" content="../public/developer.png">
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image">
          <meta property="twitter:url" content="https://www.leonardavila.dev/"/>
          <meta property="twitter:title" content="Leonard J. Ávila S. | Front-end Engineer"/>
          <meta property="twitter:description" content="Web Development, Javascript, React,  Next, Node, CSS ,Web Performance."/>
          <meta property="twitter:image" content="../public/developer.png"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
        <body className="Santiago">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;



