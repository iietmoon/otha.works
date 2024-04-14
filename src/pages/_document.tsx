import Document, { Html, Head, Main, NextScript } from "next/document";
import Layout from "@/pages/_layout";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Layout>
          <Main />
          </Layout>
          <NextScript />
        </body>
      </Html>
    );
  }
}
