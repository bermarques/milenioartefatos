export const getValuesToServer = (data, uploadedFile, category) => ({
  description: data.description,
  inStock: !!data.inStock,
  indications: data.indications,
  name: data.name,
  image: uploadedFile[0]?.key,
  providingAndDurability: data.providingAndDurability,
  recommendations: data.recommendations,
  category: Number(category),
  upholstery: !!data.tags.find((item) => item === "upholstery"),
  purses: !!data.tags.find((item) => item === "purses"),
  visualCommunication: !!data.tags.find(
    (item) => item === "visualCommunication"
  ),
  decoration: !!data.tags.find((item) => item === "decoration"),
  tapestry: !!data.tags.find((item) => item === "tapestry"),
  awning: !!data.tags.find((item) => item === "awning"),
});
