import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    // this is the method to use props in class based componantes.
    let {title, description, imgurl, newsurl} = this.props;
    return (
      <div>
        <div className="card">
  <img src={!imgurl?"https://gumlet.assettype.com/pratidintime%2F2023-09%2F21c2879b-b1d0-4fb4-8e6f-9be7fa9ba425%2FWEB_PT_Recovered.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true":imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}....</h5>
    <p className="card-text">{description}....</p>
    <a href={newsurl} rel="noreferrer" className="btn btn-sm btn-dark" target='_blank'>Read More</a>
  </div>
</div>
      </div>
    )
  }
}
export default Newsitem
