import React from "react";
import Post from './Post';
import './sass-styles/Posts.scss';

export default function Posts(props) {
  // render Post component for every post in props.posts, send each Post the array of ReactionTypes
  const posts = props.posts.map((post, index) => <Post 
    key={index}
    postIndex={index}
    content={post.content}  
    reactionTypes={props.reactionTypes}
    reactionCounts={post.reaction_counts}
    toggleReaction={props.toggleReaction}
    author={post.created_by.author}
    timestamp={post.created_by.timestamp}
  />)

  return (
    <section className='posts'>
      {posts}
    </section>
  )
}
