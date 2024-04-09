import httpRequest from "../configs/http.config";
import { IApiResponseWithPagination } from "../types/api.type";
import { ICustomer, ICustomerDto } from "../types/customer.type";
import { IPaginateQueryParams } from "../types/query.type";

export const getCustomers = (
  params: IPaginateQueryParams & { keys?: string[] }
) => {
  return httpRequest.get<IApiResponseWithPagination<ICustomer[]>>(
    "/api/v1/customers",
    { params }
  );
};

export const createCustomer = (customer: ICustomerDto) => {
  const formData = new FormData();
  formData.set("name", customer.name);
  if (customer.tags && customer.tags.length) {
    customer.tags.forEach((tag, i) => {
      if (typeof tag === "string") {
        formData.set(`tags[${i}]`, tag);
      } else {
        formData.set(`tags[${i}]`, tag.title);
      }
    });
  }
  return httpRequest.post<ICustomer>("/api/v1/customers", formData);
};
