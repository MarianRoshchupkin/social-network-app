import { IPostComments, IPostCommentsObjects } from "../../hooks/usePostComments";

export function getAndFilterPostsData(data: any) {
  const posts = data.data[1].data.children;
  const filteredPosts: IPostComments[] = [];

  posts.map((comment: IPostCommentsObjects) => {
    filteredPosts.push({
      author: comment.data.author,
      body: comment.data.body,
      created: comment.data.created,
      id: comment.data.id,
      key: comment.data.id,
      replies: comment.data.replies
    })
  });

  return filteredPosts;
}
