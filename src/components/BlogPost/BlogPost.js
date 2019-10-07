import React, { Component } from 'react';
import './BlogPost.scss';

class BlogPost extends Component {
    render() {
        let dt = this.props.dataObj;
        console.log(dt);
        return (
            <article className="blogposts-list">
                <div className="no-featured-img-box">
                    <div className="content-wrapper">
                        <header className="entry-header">
                            {dt.title && <h2 className="entry-title"><a href="#" rel="bookmark">{dt.title}</a></h2>}
                            <div className="entry-meta">
                                <div className="blog-data-wrapper">
                                    <div className="post-data-divider"></div>
                                    <div className="post-data-positioning">
                                        <div className="post-data-text">
                                            <span className="posted-on">Posted on <a href="#" rel="bookmark"><time className="entry-date published">October 17, 2008</time><time className="updated">September 9, 2011</time></a></span><span className="byline"> by <span className="author vcard"><a className="url fn n" href="#">Theme Admin</a></span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>

                        <div className="entry-content">
                            <p>Boat.</p>
                            <a href="#" className="blogpost-button">Read More</a>
                        </div>

                    </div>
                </div>
            </article>
        )
    }
}
export default BlogPost;