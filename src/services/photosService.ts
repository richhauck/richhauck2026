export const fetchPhotos = async (): Promise<string[]> => {
  const response = await fetch("photos.json");
  if (!response.ok) {
    throw new Error("Failed to fetch photos");
  }
  const data = await response.json();
  return data;
};
