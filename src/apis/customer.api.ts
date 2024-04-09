import httpRequest from "../configs/http.config";
import { IApiResponseWithPagination } from "../types/api.type";
import { ICustomer } from "../types/customer.type";
import { IPaginateQueryParams } from "../types/query.type";

export const getCustomers = (
  params: IPaginateQueryParams & { keys?: string[] }
) => {
  return httpRequest.get<IApiResponseWithPagination<ICustomer[]>>(
    "/api/v1/customers",
    { params }
  );
};
