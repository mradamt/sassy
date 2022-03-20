import Content from './Content';
import Reaction from './Reaction';
import './sass-styles/Post.scss'

export default function Post ({post, reactionTypes, handleReactionCount}) {
  // calculateAge accepts timestamp as milliseconds or new Date() object, returns age in days
  const calculateAge = ms => Math.floor((Date.now() - ms) / 1000 / 60 / 60 / 24)

  // Combine reaction counts and types into an array of Reaction components
  // const reactionArray = post.reactionCounts.map((count, index) => {
  //   // Return simple error if reaction arrays are not equal length
  //   if (post.reactionCounts.length !== reactionTypes.length) {
  //     return "<div>Error</div>"
  //   }
  //   return (
  //     <Reaction 
  //       count={count} 
  //       icon={reactionTypes[index].icon}
  //       label={reactionTypes[index].label}
  //       onClick={() => handleReactionCount(post, index)}
  //       isUserReaction={post.userReaction===index}
  //     />
  //   )
  // })

  return (
    <div className='post'>
      <div className="content">
        <p className="content-text">
          {post.prompt.text}
          <br />
          {post.text}
        </p>
      </div>
      <div className='metadata'>
        <div className='reactions'>
          {"reactionArray"}
        </div>
        <div className='author'>
          <div>'{post.author.username}'</div>
          <div>{calculateAge(new Date(String(post.creation_date)))} days ago</div>
        </div>
      </div>
    </div>
  )
}
