import { fetchIllustrations } from "#/services/illustrationService";
import { useQuery } from "@tanstack/react-query";

export const useIllustrations = () => {
  return useQuery({
    queryKey: ["illustrations"],
    queryFn: fetchIllustrations,
  });
};
