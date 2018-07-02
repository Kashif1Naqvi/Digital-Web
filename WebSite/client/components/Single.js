import React ,{ Component } from "react";
import Photo from './Photo';
import Comments from './Comments';
class Single extends Component{
    render(){
        const  {postId}  = this.props.params;
        const i = this.props.posts.findIndex((post)=>post.code ===this.props.params.postId);
        const post = this.props.posts[i];
        const postcomments = this.props.comments[postId] || [];
        return(
           <div className="single-photo">
               <Photo i={i} post={post} {...this.props}  />
               <Comments postcomments={postcomments} {...this.props}  />
           </div> 
        ); 
    }
} 
export default Single;

