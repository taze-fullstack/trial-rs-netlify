import React from 'react'
import { withSiteData } from 'react-static'
//
import logoImg from '../logo.png'
import cmsHomepage from '../dynamic/homepage.json'

export default withSiteData(() => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
    <img src={logoImg} alt="" />
    <div>{cmsHomepage.title}</div>
  </div>
))
