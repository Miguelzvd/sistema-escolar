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
  if (!v.match(/^(\d{2})\.(\d{3})\.(\d{3})-(\d{1}|(\d{2}))$/)) {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{2})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  return v;
};

// export const dateMask = (v: string) => {
//   if (!v.match(/^(\d{2})-(\d{2})-(\d{4})$/)) {
//     v = v.replace(/\D/g, "");
//     v = v.replace(/(\d{2})(\d)/, "$1-$2");
//     v = v.replace(/(\d{2})(\d)/, "$1-$2");
//     v = v.replace(/(\d{4})(\d)/, "$1-$4");
//   }
//   return v;
// };


