/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMeme = /* GraphQL */ `
  subscription OnCreateMeme($authorId: String) {
    onCreateMeme(authorId: $authorId) {
      id
      authorId
      content
      postImage
      author {
        userId
        memes {
          nextToken
        }
        createdAt
        updatedAt
        following {
          nextToken
        }
        comments {
          nextToken
        }
        commentLikes {
          nextToken
        }
        likes {
          nextToken
        }
        id
      }
      comments {
        items {
          id
          postId
          authorId
          text
          createdAt
          updatedAt
          userCommentsId
          memeCommentsId
        }
        nextToken
      }
      likes {
        items {
          id
          memeId
          userId
          createdAt
          updatedAt
          userLikesId
          memeLikesId
        }
        nextToken
      }
      createdAt
      updatedAt
      userMemesId
    }
  }
`;
export const onUpdateMeme = /* GraphQL */ `
  subscription OnUpdateMeme($authorId: String) {
    onUpdateMeme(authorId: $authorId) {
      id
      authorId
      content
      postImage
      author {
        userId
        memes {
          nextToken
        }
        createdAt
        updatedAt
        following {
          nextToken
        }
        comments {
          nextToken
        }
        commentLikes {
          nextToken
        }
        likes {
          nextToken
        }
        id
      }
      comments {
        items {
          id
          postId
          authorId
          text
          createdAt
          updatedAt
          userCommentsId
          memeCommentsId
        }
        nextToken
      }
      likes {
        items {
          id
          memeId
          userId
          createdAt
          updatedAt
          userLikesId
          memeLikesId
        }
        nextToken
      }
      createdAt
      updatedAt
      userMemesId
    }
  }
`;
export const onDeleteMeme = /* GraphQL */ `
  subscription OnDeleteMeme($authorId: String) {
    onDeleteMeme(authorId: $authorId) {
      id
      authorId
      content
      postImage
      author {
        userId
        memes {
          nextToken
        }
        createdAt
        updatedAt
        following {
          nextToken
        }
        comments {
          nextToken
        }
        commentLikes {
          nextToken
        }
        likes {
          nextToken
        }
        id
      }
      comments {
        items {
          id
          postId
          authorId
          text
          createdAt
          updatedAt
          userCommentsId
          memeCommentsId
        }
        nextToken
      }
      likes {
        items {
          id
          memeId
          userId
          createdAt
          updatedAt
          userLikesId
          memeLikesId
        }
        nextToken
      }
      createdAt
      updatedAt
      userMemesId
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($authorId: String) {
    onCreateComment(authorId: $authorId) {
      id
      postId
      authorId
      text
      likes {
        items {
          id
          userId
          memeId
          commentId
          createdAt
          updatedAt
          userCommentLikesId
          commentLikesId
        }
        nextToken
      }
      author {
        userId
        memes {
          nextToken
        }
        createdAt
        updatedAt
        following {
          nextToken
        }
        comments {
          nextToken
        }
        commentLikes {
          nextToken
        }
        likes {
          nextToken
        }
        id
      }
      meme {
        id
        authorId
        content
        postImage
        author {
          userId
          createdAt
          updatedAt
          id
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userMemesId
      }
      createdAt
      updatedAt
      userCommentsId
      memeCommentsId
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($authorId: String) {
    onUpdateComment(authorId: $authorId) {
      id
      postId
      authorId
      text
      likes {
        items {
          id
          userId
          memeId
          commentId
          createdAt
          updatedAt
          userCommentLikesId
          commentLikesId
        }
        nextToken
      }
      author {
        userId
        memes {
          nextToken
        }
        createdAt
        updatedAt
        following {
          nextToken
        }
        comments {
          nextToken
        }
        commentLikes {
          nextToken
        }
        likes {
          nextToken
        }
        id
      }
      meme {
        id
        authorId
        content
        postImage
        author {
          userId
          createdAt
          updatedAt
          id
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userMemesId
      }
      createdAt
      updatedAt
      userCommentsId
      memeCommentsId
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($authorId: String) {
    onDeleteComment(authorId: $authorId) {
      id
      postId
      authorId
      text
      likes {
        items {
          id
          userId
          memeId
          commentId
          createdAt
          updatedAt
          userCommentLikesId
          commentLikesId
        }
        nextToken
      }
      author {
        userId
        memes {
          nextToken
        }
        createdAt
        updatedAt
        following {
          nextToken
        }
        comments {
          nextToken
        }
        commentLikes {
          nextToken
        }
        likes {
          nextToken
        }
        id
      }
      meme {
        id
        authorId
        content
        postImage
        author {
          userId
          createdAt
          updatedAt
          id
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userMemesId
      }
      createdAt
      updatedAt
      userCommentsId
      memeCommentsId
    }
  }
`;
export const onCreateMemeLike = /* GraphQL */ `
  subscription OnCreateMemeLike($userId: String) {
    onCreateMemeLike(userId: $userId) {
      id
      memeId
      userId
      user {
        userId
        memes {
          nextToken
        }
        createdAt
        updatedAt
        following {
          nextToken
        }
        comments {
          nextToken
        }
        commentLikes {
          nextToken
        }
        likes {
          nextToken
        }
        id
      }
      meme {
        id
        authorId
        content
        postImage
        author {
          userId
          createdAt
          updatedAt
          id
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userMemesId
      }
      createdAt
      updatedAt
      userLikesId
      memeLikesId
    }
  }
`;
export const onUpdateMemeLike = /* GraphQL */ `
  subscription OnUpdateMemeLike($userId: String) {
    onUpdateMemeLike(userId: $userId) {
      id
      memeId
      userId
      user {
        userId
        memes {
          nextToken
        }
        createdAt
        updatedAt
        following {
          nextToken
        }
        comments {
          nextToken
        }
        commentLikes {
          nextToken
        }
        likes {
          nextToken
        }
        id
      }
      meme {
        id
        authorId
        content
        postImage
        author {
          userId
          createdAt
          updatedAt
          id
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userMemesId
      }
      createdAt
      updatedAt
      userLikesId
      memeLikesId
    }
  }
`;
export const onDeleteMemeLike = /* GraphQL */ `
  subscription OnDeleteMemeLike($userId: String) {
    onDeleteMemeLike(userId: $userId) {
      id
      memeId
      userId
      user {
        userId
        memes {
          nextToken
        }
        createdAt
        updatedAt
        following {
          nextToken
        }
        comments {
          nextToken
        }
        commentLikes {
          nextToken
        }
        likes {
          nextToken
        }
        id
      }
      meme {
        id
        authorId
        content
        postImage
        author {
          userId
          createdAt
          updatedAt
          id
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userMemesId
      }
      createdAt
      updatedAt
      userLikesId
      memeLikesId
    }
  }
`;
export const onCreateCommentLike = /* GraphQL */ `
  subscription OnCreateCommentLike($userId: String) {
    onCreateCommentLike(userId: $userId) {
      id
      userId
      memeId
      commentId
      user {
        userId
        memes {
          nextToken
        }
        createdAt
        updatedAt
        following {
          nextToken
        }
        comments {
          nextToken
        }
        commentLikes {
          nextToken
        }
        likes {
          nextToken
        }
        id
      }
      comment {
        id
        postId
        authorId
        text
        likes {
          nextToken
        }
        author {
          userId
          createdAt
          updatedAt
          id
        }
        meme {
          id
          authorId
          content
          postImage
          createdAt
          updatedAt
          userMemesId
        }
        createdAt
        updatedAt
        userCommentsId
        memeCommentsId
      }
      createdAt
      updatedAt
      userCommentLikesId
      commentLikesId
    }
  }
`;
export const onUpdateCommentLike = /* GraphQL */ `
  subscription OnUpdateCommentLike($userId: String) {
    onUpdateCommentLike(userId: $userId) {
      id
      userId
      memeId
      commentId
      user {
        userId
        memes {
          nextToken
        }
        createdAt
        updatedAt
        following {
          nextToken
        }
        comments {
          nextToken
        }
        commentLikes {
          nextToken
        }
        likes {
          nextToken
        }
        id
      }
      comment {
        id
        postId
        authorId
        text
        likes {
          nextToken
        }
        author {
          userId
          createdAt
          updatedAt
          id
        }
        meme {
          id
          authorId
          content
          postImage
          createdAt
          updatedAt
          userMemesId
        }
        createdAt
        updatedAt
        userCommentsId
        memeCommentsId
      }
      createdAt
      updatedAt
      userCommentLikesId
      commentLikesId
    }
  }
`;
export const onDeleteCommentLike = /* GraphQL */ `
  subscription OnDeleteCommentLike($userId: String) {
    onDeleteCommentLike(userId: $userId) {
      id
      userId
      memeId
      commentId
      user {
        userId
        memes {
          nextToken
        }
        createdAt
        updatedAt
        following {
          nextToken
        }
        comments {
          nextToken
        }
        commentLikes {
          nextToken
        }
        likes {
          nextToken
        }
        id
      }
      comment {
        id
        postId
        authorId
        text
        likes {
          nextToken
        }
        author {
          userId
          createdAt
          updatedAt
          id
        }
        meme {
          id
          authorId
          content
          postImage
          createdAt
          updatedAt
          userMemesId
        }
        createdAt
        updatedAt
        userCommentsId
        memeCommentsId
      }
      createdAt
      updatedAt
      userCommentLikesId
      commentLikesId
    }
  }
`;
export const onCreateFollowing = /* GraphQL */ `
  subscription OnCreateFollowing($followerId: String) {
    onCreateFollowing(followerId: $followerId) {
      id
      followerId
      followingId
      follower {
        userId
        memes {
          nextToken
        }
        createdAt
        updatedAt
        following {
          nextToken
        }
        comments {
          nextToken
        }
        commentLikes {
          nextToken
        }
        likes {
          nextToken
        }
        id
      }
      following {
        userId
        memes {
          nextToken
        }
        createdAt
        updatedAt
        following {
          nextToken
        }
        comments {
          nextToken
        }
        commentLikes {
          nextToken
        }
        likes {
          nextToken
        }
        id
      }
      createdAt
      updatedAt
      userFollowingId
    }
  }
`;
export const onUpdateFollowing = /* GraphQL */ `
  subscription OnUpdateFollowing($followerId: String) {
    onUpdateFollowing(followerId: $followerId) {
      id
      followerId
      followingId
      follower {
        userId
        memes {
          nextToken
        }
        createdAt
        updatedAt
        following {
          nextToken
        }
        comments {
          nextToken
        }
        commentLikes {
          nextToken
        }
        likes {
          nextToken
        }
        id
      }
      following {
        userId
        memes {
          nextToken
        }
        createdAt
        updatedAt
        following {
          nextToken
        }
        comments {
          nextToken
        }
        commentLikes {
          nextToken
        }
        likes {
          nextToken
        }
        id
      }
      createdAt
      updatedAt
      userFollowingId
    }
  }
`;
export const onDeleteFollowing = /* GraphQL */ `
  subscription OnDeleteFollowing($followerId: String) {
    onDeleteFollowing(followerId: $followerId) {
      id
      followerId
      followingId
      follower {
        userId
        memes {
          nextToken
        }
        createdAt
        updatedAt
        following {
          nextToken
        }
        comments {
          nextToken
        }
        commentLikes {
          nextToken
        }
        likes {
          nextToken
        }
        id
      }
      following {
        userId
        memes {
          nextToken
        }
        createdAt
        updatedAt
        following {
          nextToken
        }
        comments {
          nextToken
        }
        commentLikes {
          nextToken
        }
        likes {
          nextToken
        }
        id
      }
      createdAt
      updatedAt
      userFollowingId
    }
  }
`;
