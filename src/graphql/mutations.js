/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createMeme = /* GraphQL */ `
  mutation CreateMeme(
    $input: CreateMemeInput!
    $condition: ModelMemeConditionInput
  ) {
    createMeme(input: $input, condition: $condition) {
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
export const updateMeme = /* GraphQL */ `
  mutation UpdateMeme(
    $input: UpdateMemeInput!
    $condition: ModelMemeConditionInput
  ) {
    updateMeme(input: $input, condition: $condition) {
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
export const deleteMeme = /* GraphQL */ `
  mutation DeleteMeme(
    $input: DeleteMemeInput!
    $condition: ModelMemeConditionInput
  ) {
    deleteMeme(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createMemeLike = /* GraphQL */ `
  mutation CreateMemeLike(
    $input: CreateMemeLikeInput!
    $condition: ModelMemeLikeConditionInput
  ) {
    createMemeLike(input: $input, condition: $condition) {
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
export const updateMemeLike = /* GraphQL */ `
  mutation UpdateMemeLike(
    $input: UpdateMemeLikeInput!
    $condition: ModelMemeLikeConditionInput
  ) {
    updateMemeLike(input: $input, condition: $condition) {
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
export const deleteMemeLike = /* GraphQL */ `
  mutation DeleteMemeLike(
    $input: DeleteMemeLikeInput!
    $condition: ModelMemeLikeConditionInput
  ) {
    deleteMemeLike(input: $input, condition: $condition) {
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
export const createCommentLike = /* GraphQL */ `
  mutation CreateCommentLike(
    $input: CreateCommentLikeInput!
    $condition: ModelCommentLikeConditionInput
  ) {
    createCommentLike(input: $input, condition: $condition) {
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
export const updateCommentLike = /* GraphQL */ `
  mutation UpdateCommentLike(
    $input: UpdateCommentLikeInput!
    $condition: ModelCommentLikeConditionInput
  ) {
    updateCommentLike(input: $input, condition: $condition) {
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
export const deleteCommentLike = /* GraphQL */ `
  mutation DeleteCommentLike(
    $input: DeleteCommentLikeInput!
    $condition: ModelCommentLikeConditionInput
  ) {
    deleteCommentLike(input: $input, condition: $condition) {
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
export const createFollowing = /* GraphQL */ `
  mutation CreateFollowing(
    $input: CreateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    createFollowing(input: $input, condition: $condition) {
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
export const updateFollowing = /* GraphQL */ `
  mutation UpdateFollowing(
    $input: UpdateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    updateFollowing(input: $input, condition: $condition) {
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
export const deleteFollowing = /* GraphQL */ `
  mutation DeleteFollowing(
    $input: DeleteFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    deleteFollowing(input: $input, condition: $condition) {
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
