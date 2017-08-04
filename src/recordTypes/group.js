export default (pluginContext) => {
  const {
    TextInput,
  } = pluginContext.inputComponents;

  const {
    configKey: config,
  } = pluginContext.configHelpers;

  return ({
    fields: {
      document: {
        'ns2:groups_common': {
          owner: {
            [config]: {
              view: {
                type: TextInput,
                props: null,
              },
            },
          },
        },
      },
    },
  });
};