/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      userId
      memes {
        items {
          id
          authorId
          content
          postImage
          createdAt
          updatedAt
          userMemesId
        }
        nextToken
      }
      createdAt
      updatedAt
      following {
        items {
          id
          followerId
          followingId
          createdAt
          updatedAt
          userFollowingId
        }
        nextToken
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
      commentLikes {
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
      id
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMeme = /* GraphQL */ `
  query GetMeme($id: ID!) {
    getMeme(id: $id) {
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
export const listMemes = /* GraphQL */ `
  query ListMemes(
    $filter: ModelMemeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMemes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMemeLike = /* GraphQL */ `
  query GetMemeLike($id: ID!) {
    getMemeLike(id: $id) {
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
export const listMemeLikes = /* GraphQL */ `
  query ListMemeLikes(
    $filter: ModelMemeLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMemeLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        memeId
        userId
        user {
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
        userLikesId
        memeLikesId
      }
      nextToken
    }
  }
`;
export const getCommentLike = /* GraphQL */ `
  query GetCommentLike($id: ID!) {
    getCommentLike(id: $id) {
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
export const listCommentLikes = /* GraphQL */ `
  query ListCommentLikes(
    $filter: ModelCommentLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        memeId
        commentId
        user {
          userId
          createdAt
          updatedAt
          id
        }
        comment {
          id
          postId
          authorId
          text
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
      nextToken
    }
  }
`;
export const getFollowing = /* GraphQL */ `
  query GetFollowing($id: ID!) {
    getFollowing(id: $id) {
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
export const listFollowings = /* GraphQL */ `
  query ListFollowings(
    $filter: ModelFollowingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        followerId
        followingId
        follower {
          userId
          createdAt
          updatedAt
          id
        }
        following {
          userId
          createdAt
          updatedAt
          id
        }
        createdAt
        updatedAt
        userFollowingId
      }
      nextToken
    }
  }
`;
