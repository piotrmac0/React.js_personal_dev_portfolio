import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

/*
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '4d7063vr',
    dataset:'production',
    apiVersion:'2021-10-21',
    useCdn: true,
    token: 'skI8Alzx259QCjU7OVJPdllnvQVYydpd7iQjj1EoJIUBx1wcIQcNgxjye4MN7yjtlhHHgGE5RSEndzgD2BtCPa6c7xPO788fRNX0jj1IUczn32pymIG1YXQSxDfksyMlOY1scDAHc7qfxsg73UprLLqMvpoORrbjugGT0NQHnPBmfRj2LHwh'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
*/