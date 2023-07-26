import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "42e9awfe",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skIE46MAkOFt4OV3sWeDlOaATtV4ZkFsbkgfvxjntxNJrlHBgK2Zlg77cEMsR6JpG7AwsAKACpAqs5DLlPL834RrWRgG8Y0QEyxRfWAKLdSQGsURpsqhJrZcQieakSfjx8qviKFME181Ijn2KvhDOJ3BZFWJ8krLxWjF9J4WtlAnaIIqsEMf",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
