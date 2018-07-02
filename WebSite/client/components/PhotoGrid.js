import React , { Component } from "react";
import Photo from  './Photo';
class PhotoGrid extends Component{
    render(){
        return(
           <div className="photo-grid">
               {/* <pre>
                   {JSON.stringify(this.props.posts, null, '')}
               </pre>
                 */}
                {this.props.posts.map((post, i)=> <Photo key={i} i={i} post={post} {...this.props}  /> )}
           </div> 
        ); 
    }
}

export default PhotoGrid;