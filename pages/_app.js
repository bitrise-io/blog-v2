import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';

import { fetchCategories } from '../services/butter';

import Navigation from '../components/Navigation';
import SubNav from '../components/SubNav';
import Footer from '../components/Footer';

import '../assets/stylesheets/application.scss';

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    const categories = await fetchCategories();
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps,
      categories
    };
  }

  render() {
    const { Component, pageProps, categories } = this.props;

    return (
      <Container>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TZK32GR"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-53276411-1" />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-53276411-1');`
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TZK32GR');`
            }}
          />

          <link rel="stylesheet" media="screen" href="https://cloud.typography.com/7981312/721124/css/fonts.css" />
          <link
            rel="stylesheet"
            media="screen"
            href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400,300,200,500,600,700,900"
          />
          <meta name="viewport" content="viewport-fit=cover,width=device-width,minimum-scale=1,initial-scale=1" />

          <link rel="alternate" type="application/atom+xml" title="Bitrise Blog - Atom" href="/atom" />
          <link rel="alternate" type="application/rss+xml" title="Bitrise Blog - RSS" href="/rss" />
          <link rel="shortcut icon" type="image/x-icon" href="/static/icons/favicon.ico" />
          <link rel="apple-touch-icon" type="image/png" href="/static/icons/apple-touch-icon.png" />
          <link rel="apple-touch-icon" type="image/png" href="/static/icons/apple-touch-icon-76x76.png" sizes="76x76" />
          <link
            rel="apple-touch-icon"
            type="image/png"
            href="/static/icons/apple-touch-icon-120x120.png"
            sizes="120x120"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            href="/static/icons/apple-touch-icon-152x152.png"
            sizes="152x152"
          />

          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.1.1/themes/reset-min.css"
            integrity="sha256-JQ2nnTmybhOWSjfV3sa8mG0ZVhTCcORER4cyXc5HL10="
            crossOrigin="anonymous"
          />
        </Head>
        <Navigation />
        <SubNav categories={categories} />
        <div className="content">
          <Component {...pageProps} />
        </div>
        <Footer />
      </Container>
    );
  }
}
