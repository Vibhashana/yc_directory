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
  *[type == "author" && _id == $id][0]{
    _id,
    id,
    name,
    username,
    email,
    image,
    bio
  }
`);
