const cpfsList = document.querySelectorAll(".cpf li");

const elementsInnerText = ([...elements]) => {
  return elements.map((element) => element.innerText);
};

const clearCPF = (cpf) => {
  return cpf.replace(/\D/g, "");
};

const biuldCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
};

const formartCPFS = (cpfs) => {
  return cpfs.map(clearCPF).map(biuldCPF);
};

const replaceCPFS = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);
  const cpfsFormatted = formartCPFS(cpfs);

  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormatted[index];
  });
};
replaceCPFS(cpfsList);
