//config file
import {
  createImageUrlBuilder,
  createCurrentUserHook,
  createClient,
} from "next-sanity";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-03-25",

  useCdn: process.env.NODE_ENV === "production", //content distrubtion network - caches in local server.
};

// Set up the client for fetching data in the getProps page functions
//used to fetch info, make queries to Sanity CMS backend.
export const sanityClient = createClient(config);

// Helper function for generating Image URLs with only the asset reference data in your documents.
//Pass source back from query and will give imageUrl
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

//Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);
