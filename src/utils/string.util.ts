export function truncateString(str: string, num: number) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

export const safeString = (content: any) => {
  if (content == undefined || !content) {
    return "";
  }
  return content;
};
