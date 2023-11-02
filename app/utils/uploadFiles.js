import { uploadFiles } from "./uploadthing";

export const uploadFile = async (files) => {
  const res = await uploadFiles({
    files: [files],
    endpoint: "productImage",
    input: {}, // will be typesafe to match the input set for `imageUploader` in your FileRouter
  });

  return res;
};
