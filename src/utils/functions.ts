export const validateCPF = (cpf: string): boolean => {
  cpf = cpf.replace(/[^\d]+/g, ""); // remove caracteres não numéricos
  if (cpf == "") return false;
  // Elimina CPFs invalidos conhecidos
  if (
    cpf.length != 11 ||
    cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999"
  )
    return false;
  // Valida primeiro digito verificador
  let add = 0;
  for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
  let rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) rev = 0;
  if (rev != parseInt(cpf.charAt(9))) return false;
  // Valida os dois ultimos digitos verificadores
  add = 0;
  for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) rev = 0;
  if (rev != parseInt(cpf.charAt(10))) return false;
  return true;
};

export const validateBirthDate = (v: string) => {
  const today = new Date();
  const date = new Date(v);
  today.setMonth(today.getMonth() - 12);
  // Verifica se a data passada é inválida ou maior do que a data de um ano atras
  if (isNaN(date.getTime()) || date > today) {
    return false;
  }

  return date;
};


