import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
import breaks from 'remark-breaks'
//

export default withRouteData(({ post }) => {
  console.log(post)
  return (
  <div className="blog-post">
    <Head>
      <title>{post.data.title}</title>
    </Head>
    <Link to="/blog/">{'<'} Back</Link>
    <br />
    <h3>{post.data.title}</h3>
    <Moment format="MMMM Do, YYYY">{post.data.date}</Moment>
    {/* <img className="image" src={post.data.thumbnail} alt="" /> */}
    <Markdown source={post.data.mdone} escapeHtml={false} plugins={[breaks]} />
    <Markdown source={post.data.mdtwo} escapeHtml={false} plugins={[breaks]} />
    {/* <Markdown source={post.content} escapeHtml={false} /> */}
  </div>
)})
