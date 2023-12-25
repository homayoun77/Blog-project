import { gql } from "@apollo/client";

const GET_BLOGS = gql`
  query{
    posts(first:15 , orderBy: updatedAt_DESC) {
      id
      slug
      title
      author {
        name
        avatar {
          url
        }
      }
      cover {
        url
      }
    }
  }
` 

const GET_AUTHORS = gql`
  query {
    authors {
      id
      name
      avatar {
        url
      }
      slug
      field
    }
  }
`

const GET_AUTHOR = gql`
  query authorInfo($slug: String!) {
    author(where: {slug: $slug}) {
      avatar {
        url
      }
      description
      field
      name
      id
      slug
      posts {
        cover {
          url
        }
        id
        slug
        title
      }
    }
  }
`

const GET_BLOG_INFO = gql`
  query blogInfo($slug: String!) {
  post(where: {slug: $slug}) {
    content {
      text
    }
    author {
      avatar {
        url
      }
      field
      name
      posts {
        cover {
          url
        }
        id
        slug
        title
      }
      slug
    }
    cover {
      url
    }
    title
  }
}
`

const GET_COMMENTS = gql`
  query getCommenta($slug: String!) {
    comments(where: {post: {slug: $slug}}) {
      id
      name
      text
    }
  }
`

export { GET_BLOGS, GET_AUTHORS, GET_AUTHOR, GET_BLOG_INFO, GET_COMMENTS }