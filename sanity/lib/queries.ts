import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY =
  defineQuery(`*[_type == "startup" && defined(slug.current)] | order(_createdAt desc) {
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
