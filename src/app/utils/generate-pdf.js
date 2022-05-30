/* eslint-disable prefer-template */
import html2pdf from 'html2pdf.js';
import Logo from '../../assets/images/HeaderLogo.svg';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const generatePdf = (paramList, tariffName) => {
  const doc = document.createElement('div');

  const header = document.createElement('div');
  header.classList.add('pdf__header');

  const logo = document.createElement('img');
  logo.src = Logo;

  const startTariffDate = document.createElement('p');
  startTariffDate.innerHTML = 'Тариф открыт для перехода с 27.05.2022';
  startTariffDate.classList.add('pdf__header-start-tariff-date');

  header.appendChild(logo);
  header.appendChild(startTariffDate);

  const tariffDescription = document.createElement('div');
  tariffDescription.classList.add('pdf__tariff-description');

  const tariffDescriptionTitle = document.createElement('h1');
  tariffDescriptionTitle.innerHTML = tariffName;
  tariffDescriptionTitle.classList.add('pdf__tariff-description-title');

  const tariffDescriptionText = document.createElement('p');
  tariffDescriptionText.innerHTML = 'Авансовый метод расчетов за месяц';
  tariffDescriptionText.classList.add('pdf__tariff-description-text');

  tariffDescription.appendChild(tariffDescriptionTitle);
  tariffDescription.appendChild(tariffDescriptionText);

  const table = document.createElement('table');
  table.classList.add('pdf__table');

  paramList.forEach(([, value]) => {
    const trSection = document.createElement('tr');

    const tdSectionName = document.createElement('td');
    tdSectionName.classList.add('pdf__table__section');

    tdSectionName.innerHTML = value[0].Group.Title;
    tdSectionName.colSpan = 2;

    trSection.appendChild(tdSectionName);

    table.appendChild(trSection);

    value.forEach(parameter => {
      const parameterValue = `${parameter.NumValue} ${parameter.Unit.Display}`;
      const parameterDescription = parameter.Title;

      const trParameter = document.createElement('tr');
      const tdParameterValue = document.createElement('td');
      tdParameterValue.classList.add(
        'pdf__table__value',
        'pdf__table__parameter-value',
      );
      tdParameterValue.innerHTML = parameterValue;
      const tdParameterDescription = document.createElement('td');
      tdParameterDescription.classList.add('pdf__table__parameter-description');
      tdParameterDescription.innerHTML = parameterDescription;

      trParameter.appendChild(tdParameterValue);
      trParameter.appendChild(tdParameterDescription);
      table.appendChild(trParameter);
    });
  });

  doc.appendChild(header);
  doc.appendChild(tariffDescription);
  doc.appendChild(table);
  const opt = {
    filename: `${tariffName}.pdf`,
  };
  html2pdf().set(opt).from(doc).save();
};

export default generatePdf;
