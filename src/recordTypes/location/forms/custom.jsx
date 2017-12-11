const template = (pluginContext) => {
  const {
    React,
  } = pluginContext.lib;

  const {
    Col,
    Cols,
    Panel,
    Row,
  } = pluginContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = pluginContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Field name="locTermGroupList">
          <Field name="locTermGroup">
            <Panel>
              <InputTable>
                <Field name="termDisplayName" />
                <Field name="termName" />
                <Field name="termQualifier" />
                <Field name="termType" />
                <Field name="termStatus" />
              </InputTable>

              <InputTable>
                <Field name="termLanguage" />
                <Field name="termPrefForLang" />
                <Field name="termSource" />
                <Field name="termSourceDetail" />
                <Field name="termSourceID" />
                <Field name="termSourceNote" />
              </InputTable>
            </Panel>
          </Field>
        </Field>

        <Cols>
          <Col>
            <Field name="locationType" />
            <Field name="securityNote" />
          </Col>
          <Col>
            <Field name="address" />
            <Field name="accessNote" />
          </Col>
        </Cols>

        <Field name="conditionGroupList">
          <Field name="conditionGroup">
            <Field name="conditionNote" />
            <Field name="conditionNoteDate" />
          </Field>
        </Field>
      </Panel>

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="ns2:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default pluginContext => ({
  template: template(pluginContext),
});
