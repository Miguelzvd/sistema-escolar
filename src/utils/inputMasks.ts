export const cpfMask = (v: string) => {
  if (!v.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1-$2");
  }
  return v;
};

export const rgMask = (v: string) => {
  // Check if v matches the specific regex pattern for Brazilian RG ID
  if (!v.match(/^(\d{2})\.(\d{3})\.(\d{3})-(\d{1}|(\d{2}))$/)) {
    // If v doesn't match the pattern, remove all non-numeric characters using .replace() with regex \D
    v = v.replace(/\D/g, "");
    // Add periods and hyphens to the formatted string using .replace() with specific regex patterns
    v = v.replace(/(\d{2})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }
  // Return the formatted string
  return v;
};
