module.exports = (data) => {
  const { MarketingProduct, Parameters } = data;
  const parametersByGroup = new Map();
  Parameters.forEach((parameter) => {
    const groupId = parameter.Group.Id;

    if (
      parameter.Group.Title !== "Дополнительная информация" &&
      parameter.Group.Title !== "Преимущества"
    ) {
      if (parametersByGroup.has(groupId)) {
        var _parametersByGroup$ge;

        (_parametersByGroup$ge = parametersByGroup.get(groupId)) === null ||
        _parametersByGroup$ge === void 0
          ? void 0
          : _parametersByGroup$ge.push(parameter);
      } else {
        parametersByGroup.set(groupId, [parameter]);
      }
    }
  });

  const result = {
    tariffName: MarketingProduct.Title,
    options: Array.from(parametersByGroup),
  };

  return result;
};
