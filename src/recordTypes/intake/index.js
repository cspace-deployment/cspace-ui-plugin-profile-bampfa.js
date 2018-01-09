import { defineMessages } from 'react-intl';
import forms from './forms';
import fields from './fields';

export default pluginContext => ({
  recordTypes: {
    intake: {
      forms: forms(pluginContext),
      fields: fields(pluginContext),
    },
  },
  optionLists: {
    receipt: {
      values: [
        'Yes',
        'No',
      ],
      messages: defineMessages({
        yes: {
          id: 'option.receipt.Yes',
          defaultMessage: 'Yes',
        },
        no: {
          id: 'option.receipt.No',
          defaultMessage: 'No',
        },
      }),
    },
  },
});
