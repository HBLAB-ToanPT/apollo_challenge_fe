export interface ITag {
  id: number;
  name: string;
}

export interface ICustomer {
  id: number;
  name: string;
  tags: ITag[];
}

export interface ICustomerModel {
  name: string;
  tags: ITag[];
}
