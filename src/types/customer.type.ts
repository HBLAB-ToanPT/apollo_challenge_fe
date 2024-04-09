export interface ITag {
  id: number;
  title: string;
  createdTime: string;
  updatedTime?: string;
  delete: boolean;
}

export interface ICustomer {
  id: number;
  name: string;
  tags: ITag[];
  createdTime: string;
  updatedTime?: string;
}

export interface ICustomerDto
  extends Omit<ICustomer, "id" | "tags" | "createdTime" | "updatedTime"> {
  tags: (ITag | string)[];
}
