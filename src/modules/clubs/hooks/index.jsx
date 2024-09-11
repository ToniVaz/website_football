import useSWR from "swr";

export const AreaLabel = (areaLabelId) => {
  const { data: area_label, mutate: mutate_areaLabel } = useSWR(
    `/area-label/${areaLabelId}`
  );
  return { area_label, mutate_areaLabel };
};

export const CatalogueInList = (shopId) => {
  const { data: catalogue, mutate: mutate_catalogue } = useSWR(
    `/catalogue-in-list/${shopId}`
  );
  return { catalogue, mutate_catalogue };
};
