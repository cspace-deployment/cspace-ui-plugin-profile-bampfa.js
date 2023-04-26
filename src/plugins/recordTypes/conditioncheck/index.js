import fields from './fields';
import forms from './forms';
import idGenerators from './idGenerators';

export default () => configContext => ({
  idGenerators,
  recordTypes: {
    conditioncheck: {
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});