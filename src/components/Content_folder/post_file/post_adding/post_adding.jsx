import React from 'react';
import post_ad from '../post_adding/post_adding_style.module.css';


const Post_Add = () => {
    return (
        <div className={post_ad.Post}>
            <textarea className={post_ad.textar}></textarea>
            <div>
                <button className={post_ad.btn}>Add</button>
                <button className={post_ad.btn}>Delete</button>
            </div>
        </div>
    );
}

export default Post_Add;