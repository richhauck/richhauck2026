import { fetchPhotos } from "#/services/photosService";
import { useQuery } from "@tanstack/react-query";

export const usePhotos = () => {
  return useQuery({
    queryKey: ["photos"],
    queryFn: fetchPhotos,
  });
};
