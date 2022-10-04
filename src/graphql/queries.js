/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const searchUsers = /* GraphQL */ `
  query SearchUsers(
    $filter: SearchableUserFilterInput
    $sort: [SearchableUserSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableUserAggregationInput]
  ) {
    searchUsers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getMeme = /* GraphQL */ `
  query GetMeme($id: ID!) {
    getMeme(id: $id) {
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
export const listMemes = /* GraphQL */ `
  query ListMemes(
    $filter: ModelMemeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMemes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        meme {
          id
          createdAt
          updatedAt
          userMemesId
          owner
        }
        content
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
        updatedAt
        userCommentsId
        memeCommentsId
        owner
      }
      nextToken
    }
  }
`;
