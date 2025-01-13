import { useQuery } from "@tanstack/react-query";

import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("status");
  // const filter =
  //   !filterValue || filterValue === "all"
  //     ? null
  //     : {
  //         field: "status",
  //         value: filterValue,
  //       };
  //  {
  //   field: "totalPrice",
  //   value: 5000,
  //   method: "gte",
  // };

  // // My Code
  // With an array and a for loop
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : {
          field: "status",
          value: filterValue,
        };

  const filter2 = {
    field: "totalPrice",
    value: 5000,
    method: "gte",
  };

  const filterArr = [filter, filter2];
  // //

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filterArr],
    queryFn: () => getBookings({ filterArr }),
  });

  return { isLoading, bookings, error };
}
