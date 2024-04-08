import { ITag } from "../types/customer.type";

export const joinTags = (tags: ITag[], seperator = ", ") => {
  return tags.map((tag) => tag.name).join(seperator);
};
