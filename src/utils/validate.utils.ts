export const nameWithRequireAnd20CharactersRules = [
  (value: string) => {
    if (value) {
      if (value.length > 20) {
        return "Customer name is maximum 20 characters.";
      } else {
        return true;
      }
    } else {
      return "Customer name is required.";
    }
  },
];
