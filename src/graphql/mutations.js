/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const updateMeme = /* GraphQL */ `
  mutation UpdateMeme(
    $input: UpdateMemeInput!
    $condition: ModelMemeConditionInput
  ) {
    updateMeme(input: $input, condition: $condition) {
      id
      user {
        id
        username
        avatar {
          bucket
          region
          key
        }
        header {
          bucket
          region
          key
        }
        bio
        name
        followers {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        following {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        memes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      img {
        bucket
        region
        key
      }
      likes {
        id
        username
        avatar {
          bucket
          region
          key
        }
        header {
          bucket
          region
          key
        }
        bio
        name
        followers {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        following {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        memes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      dislikes {
        id
        username
        avatar {
          bucket
          region
          key
        }
        header {
          bucket
          region
          key
        }
        bio
        name
        followers {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        following {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        memes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      reposts {
        id
        username
        avatar {
          bucket
          region
          key
        }
        header {
          bucket
          region
          key
        }
        bio
        name
        followers {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        following {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        memes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          userCommentsId
          memeCommentsId
          owner
        }
        nextToken
      }
      updatedAt
      userMemesId
      owner
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      avatar {
        bucket
        region
        key
      }
      header {
        bucket
        region
        key
      }
      bio
      name
      followers {
        id
        username
        avatar {
          bucket
          region
          key
        }
        header {
          bucket
          region
          key
        }
        bio
        name
        followers {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        following {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        memes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      following {
        id
        username
        avatar {
          bucket
          region
          key
        }
        header {
          bucket
          region
          key
        }
        bio
        name
        followers {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        following {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        memes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      memes {
        items {
          id
          createdAt
          updatedAt
          userMemesId
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          userCommentsId
          memeCommentsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      avatar {
        bucket
        region
        key
      }
      header {
        bucket
        region
        key
      }
      bio
      name
      followers {
        id
        username
        avatar {
          bucket
          region
          key
        }
        header {
          bucket
          region
          key
        }
        bio
        name
        followers {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        following {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        memes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      following {
        id
        username
        avatar {
          bucket
          region
          key
        }
        header {
          bucket
          region
          key
        }
        bio
        name
        followers {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        following {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        memes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      memes {
        items {
          id
          createdAt
          updatedAt
          userMemesId
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          userCommentsId
          memeCommentsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      avatar {
        bucket
        region
        key
      }
      header {
        bucket
        region
        key
      }
      bio
      name
      followers {
        id
        username
        avatar {
          bucket
          region
          key
        }
        header {
          bucket
          region
          key
        }
        bio
        name
        followers {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        following {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        memes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      following {
        id
        username
        avatar {
          bucket
          region
          key
        }
        header {
          bucket
          region
          key
        }
        bio
        name
        followers {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        following {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        memes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      memes {
        items {
          id
          createdAt
          updatedAt
          userMemesId
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          userCommentsId
          memeCommentsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
      user {
        id
        username
        avatar {
          bucket
          region
          key
        }
        header {
          bucket
          region
          key
        }
        bio
        name
        followers {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        following {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        memes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      img {
        bucket
        region
        key
      }
      likes {
        id
        username
        avatar {
          bucket
          region
          key
        }
        header {
          bucket
          region
          key
        }
        bio
        name
        followers {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        following {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        memes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      dislikes {
        id
        username
        avatar {
          bucket
          region
          key
        }
        header {
          bucket
          region
          key
        }
        bio
        name
        followers {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        following {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        memes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      reposts {
        id
        username
        avatar {
          bucket
          region
          key
        }
        header {
          bucket
          region
          key
        }
        bio
        name
        followers {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        following {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        memes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          userCommentsId
          memeCommentsId
          owner
        }
        nextToken
      }
      updatedAt
      userMemesId
      owner
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
      user {
        id
        username
        avatar {
          bucket
          region
          key
        }
        header {
          bucket
          region
          key
        }
        bio
        name
        followers {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        following {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        memes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      img {
        bucket
        region
        key
      }
      likes {
        id
        username
        avatar {
          bucket
          region
          key
        }
        header {
          bucket
          region
          key
        }
        bio
        name
        followers {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        following {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        memes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      dislikes {
        id
        username
        avatar {
          bucket
          region
          key
        }
        header {
          bucket
          region
          key
        }
        bio
        name
        followers {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        following {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        memes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      reposts {
        id
        username
        avatar {
          bucket
          region
          key
        }
        header {
          bucket
          region
          key
        }
        bio
        name
        followers {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        following {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        memes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          userCommentsId
          memeCommentsId
          owner
        }
        nextToken
      }
      updatedAt
      userMemesId
      owner
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
      meme {
        id
        user {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        img {
          bucket
          region
          key
        }
        likes {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        dislikes {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        reposts {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        comments {
          nextToken
        }
        updatedAt
        userMemesId
        owner
      }
      content
      user {
        id
        username
        avatar {
          bucket
          region
          key
        }
        header {
          bucket
          region
          key
        }
        bio
        name
        followers {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        following {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        memes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      userCommentsId
      memeCommentsId
      owner
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
      meme {
        id
        user {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        img {
          bucket
          region
          key
        }
        likes {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        dislikes {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        reposts {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        comments {
          nextToken
        }
        updatedAt
        userMemesId
        owner
      }
      content
      user {
        id
        username
        avatar {
          bucket
          region
          key
        }
        header {
          bucket
          region
          key
        }
        bio
        name
        followers {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        following {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        memes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      userCommentsId
      memeCommentsId
      owner
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
      meme {
        id
        user {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        img {
          bucket
          region
          key
        }
        likes {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        dislikes {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        reposts {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        comments {
          nextToken
        }
        updatedAt
        userMemesId
        owner
      }
      content
      user {
        id
        username
        avatar {
          bucket
          region
          key
        }
        header {
          bucket
          region
          key
        }
        bio
        name
        followers {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        following {
          id
          username
          bio
          name
          createdAt
          updatedAt
          owner
        }
        memes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      userCommentsId
      memeCommentsId
      owner
    }
  }
`;
