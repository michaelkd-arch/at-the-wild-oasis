// Not neccessary just Optional
// My Code

import { useSearchParams } from "react-router-dom";

export function useUrl() {
  const [searchParams, setSearchParams] = useSearchParams();

  const readUrl = (field) => searchParams.get(field);

  function updateUrl(field, value) {
    searchParams.set(field, value);
    setSearchParams(searchParams);
  }

  return { readUrl, updateUrl };
}
