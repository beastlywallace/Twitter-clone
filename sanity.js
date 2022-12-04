import { createClient } from "next-sanity";
export const config = {
    projectId :process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ,// "pv8y60vp"
 dataset :process.env.NEXT_PUBLIC_SANITY_DATASET,// "production"
 apiVersion: '2021-03-25',
 useCdn: process.env.NODE_ENV === 'production'
}

export const sanityClient = createClient(config)