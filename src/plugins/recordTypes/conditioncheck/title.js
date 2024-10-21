export default (configContext) => (data, formatterContext) => {
  const {
    getPart,
    deepGet,
  } = configContext.recordDataHelpers;

  const {
    formatOption,
  } = configContext.formatHelpers;

  const {
    getDisplayName,
  } = configContext.refNameHelpers;

  if (!data) {
    return '';
  }

  const common = getPart(data, 'conditionchecks_common');

  if (!common) {
    return '';
  }

  const conditioncheckRefNumber = common.get('conditionCheckRefNumber');
  const condition = getDisplayName(deepGet(common, ['conditionCheckGroupList', 'conditionCheckGroup', 0, 'condition']));
  const formattedCondition = formatOption('conditions', condition, formatterContext);

  return [conditioncheckRefNumber, formattedCondition].filter((part) => !!part).join(' – ');
};
