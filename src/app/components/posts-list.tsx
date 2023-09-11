import { PostCard } from './post-card'
import { type Post } from '../types/posts'

export function PostList ({ posts }: { posts: Post[] }) {
  return (
    <>
      {
        posts?.map(post => {
          const {
            id,
            user,
            content
          } = post

          const {
            user_name: userName,
            name: userFullName,
            avatar_url: avatarUrl
          } = user

          return (
            <PostCard
              key={id}
              avatarUrl={avatarUrl}
              content={content}
              userFullName={userFullName}
              userName={userName}
            />
          )
        })
      }
    </>
  )
}
