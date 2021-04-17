import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Leonard J. Ávila S. | Front-end Engineer</title>
          <meta name="title" content="Leonard J. Ávila S. | Front-end Engineer" />
          <meta name="description" content="Web Development, Javascript, React, Next, Node, Web Performance, WordPress, Front-end, Back-end, CSS preprocessors, Frameworks CSS." />
          <meta name="author" content="Leonard J. Ávila S." />
          <meta name="keywords" content="Front-end, Javascript, React" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
