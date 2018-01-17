const template = (pluginContext) => {
  const {
    React,
  } = pluginContext.lib;

  const {
    Col,
    Cols,
    Panel,
  } = pluginContext.layoutComponents;

  const {
    Field,
  } = pluginContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Cols>
          <Col>
            <Field name="valuationcontrolRefNumber" />

            <Field name="valueAmountsList">
              <Field name="valueAmounts">
                <Field name="valueCurrency" />
                <Field name="valueAmount" />
              </Field>
            </Field>

            <Field name="valueDate" />
            <Field name="valueRenewalDate" />
          </Col>

          <Col>
            <Field name="valueSource" />
            <Field name="valueType" />
            <Field name="valueNote" />
          </Col>
        </Cols>
      </Panel>
    </Field>
  );
};

export default pluginContext => ({
  template: template(pluginContext),
});
