export const fetchIllustrations = async (): Promise<string[]> => {
  const response = await fetch("illustrations.json");
  if (!response.ok) {
    throw new Error("Failed to fetch illustrations");
  }
  const data = await response.json();
  return data;
};
