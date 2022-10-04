/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateMeme = /* GraphQL */ `
  subscription OnCreateMeme($owner: String) {
    onCreateMeme(owner: $owner) {
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
export const onUpdateMeme = /* GraphQL */ `
  subscription OnUpdateMeme($owner: String) {
    onUpdateMeme(owner: $owner) {
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
export const onDeleteMeme = /* GraphQL */ `
  subscription OnDeleteMeme($owner: String) {
    onDeleteMeme(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
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
