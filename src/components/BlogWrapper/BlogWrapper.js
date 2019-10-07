import React, { Component } from 'react';
import './BlogWrapper.scss';
import BlogPost from '../BlogPost/BlogPost';

class BlogWrapper extends Component {
    render() {
        let dt = this.props.dataAPI;
        console.log(dt);
        return (
            <div className="blog-wrapper content-wrap">
                <div className="featured-content">
                    {dt && dt.map((value, index) => {
                        return <BlogPost dataObj={value} key={index} />
                    })}
                </div>
            </div>

        )
    }
}
export default BlogWrapper;