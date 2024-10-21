import { defineMessages } from 'react-intl';
import { computeMovementSummary } from './utils';

export default (configContext) => {
  const {
    AutocompleteInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    formatHelpers,
  } = configContext;

  return {
    document: {
      'ns2:movements_common': {
        locationDate: {
          [config]: {
            required: true,
          },
        },
        reasonForMove: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'movereason',
              },
            },
          },
        },
        movementMethods: {
          movementMethod: {
            [config]: {
              view: {
                type: TermPickerInput,
                props: {
                  source: 'movemethod',
                },
              },
            },
          },
        },
        movementContact: {
          [config]: {
            view: {
              type: TextInput,
              props: null,
            },
          },
        },
      },
      'ns2:movements_bampfa': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/movement/local/bampfa',
          },
        },
        crate: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.movements_bampfa.crate.name',
                defaultMessage: 'Box or container',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'location/crate',
              },
            },
          },
        },
        computedSummary: {
          [config]: {
            compute: (args) => computeMovementSummary(args, formatHelpers),
          },
        },
      },
    },
  };
};
