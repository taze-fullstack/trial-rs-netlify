import React from 'react'
import { withSiteData, Head } from 'react-static'
//
import logoImg from '../logo.png'
import cmsHomepage from '../dynamic/homepage.json'

export default withSiteData(() => (
  <div>
    <Head>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Head>
    <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
    <img src={logoImg} alt="" />
    <div>{cmsHomepage.title}</div>
  </div>
))
