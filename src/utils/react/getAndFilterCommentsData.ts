import { IPostComments, IPostCommentsObjects } from "../../hooks/usePostComments";

export function getAndFilterCommentsData(replies: any) {
  const comments = replies.data.children;
  const filteredComments: IPostComments[] = [];

  comments.map((comment: IPostCommentsObjects) => {
    const kindObjectValue = (Object.values(comment))[0];

    if (kindObjectValue === 't1') {
      filteredComments.push({
        author: comment.data.author,
        body: comment.data.body,
        created: comment.data.created,
        id: comment.data.id,
        key: comment.data.id,
        replies: comment.data.replies
      });
    }
  });

  return filteredComments;
}
