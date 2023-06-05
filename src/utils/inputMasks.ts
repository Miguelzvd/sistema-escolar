export const cpfMask = (v: string) => {
  if (!v.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1-$2");
  }
  return v;
};
