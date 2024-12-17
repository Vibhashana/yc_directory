import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY =
  defineQuery(`*[_type == "startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc) {
    _id, 
    views, 
    image, 
    author -> {
      _id, 
      name, 
      image, 
      bio
    }, 
    slug, 
    _createdAt, 
    title, 
    pitch, 
    category, 
    description
  }`);

export const STARTUP_BY_ID_QUERY =
  defineQuery(`*[_type == "startup" && _id == $id][0]{
  _id, 
  view, 
  image, 
  author -> {
    _id, 
    name, 
    image,
    username, 
    bio
  }, 
  slug, 
  _createdAt, 
  title, 
  pitch, 
  category, 
  description
}`);

export const STARTUP_VIEWS_QUERY = defineQuery(`
  *[_type == "startup" && _id == $id][0]{
      _id, views
  }
`);

export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(`
  *[_type == "author" && id == $id][0]{
    _id,
    id,
    name,
    username,
    email,
    image,
    bio
}
`);

export const AUTHOR_BY_ID_QUERY = defineQuery(`
  *[_type == "author" && _id == $id][0]{
    _id,
    id,
    name,
    username,
    email,
    image,
    bio
}
`);

export const STARTUPS_BY_AUTHOR_QUERY = defineQuery(`
  *[_type == "startup" && author._ref == $id] | order(_createdAt desc) {
    _id,
    title,
    slug,
    views,
    image,
    category,
    description,
    _createdAt,
    author -> {
      _id,
      name,
      image
    }
  }
`);

export const PLAYLIST_BY_SLUG_QUERY = defineQuery(`
  *[_type == "playlist" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    select[] -> {
      _id,
      title,
      slug,
      image,
      category,
      views,
      description,
      _createdAt,
      author -> {
        _id,
        name,
        image
      }
    }
  }
`);

export const MOST_POPULAR_STARTUPS_QUERY = defineQuery(`
  *[_type == "startup" && views > 100] | order(views desc) [0..3] {
    _id,
    title,
    slug,
    image,
    category,
    views,
    description,
    _createdAt,
    author -> {
      _id,
      name,
      image
    }
  }
`);

export const STARTUP_BY_SLUG_QUERY =
  defineQuery(`*[_type == "startup" && slug.current == $slug][0] {
  _id,
  slug
}`);

export const STARTUP_BY_TITLE_QUERY = defineQuery(
  `*[_type == "startup" && title == $title][0]._id`
);
