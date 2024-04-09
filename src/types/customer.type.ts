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
}

export interface ICustomerDto extends Omit<ICustomer, "id" | "tags"> {
  tags: (ITag | string)[];
}
