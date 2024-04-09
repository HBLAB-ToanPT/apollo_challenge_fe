import { ITag } from "../types/customer.type";

export const joinTags = (tags: ITag[], seperator = ", ") => {
  return tags.map((tag) => tag.title).join(seperator);
};
