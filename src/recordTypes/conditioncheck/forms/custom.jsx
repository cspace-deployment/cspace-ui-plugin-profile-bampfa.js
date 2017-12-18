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
  } = pluginContext.recordComponents;

  return (
    <Field name="document">

      <Panel name="objectConditionAndTechAssessmentInfo" collapsible>
        <Row>
          <Field name="objectAuditCategory" />
          <Field name="conservationTreatmentPriority" />
          <Field name="nextConditionCheckDate" />
        </Row>

        <Cols>
          <Col>
            <Field name="completenessGroupList">
              <Field name="completenessGroup">
                <Field name="completeness" />
                <Field name="completenessDate" />
                <Field name="completenessNote" />
              </Field>
            </Field>

            <Field name="hazardGroupList">
              <Field name="hazardGroup">
                <Field name="hazard" />
                <Field name="hazardDate" />
                <Field name="hazardNote" />
              </Field>
            </Field>

            <Field name="techAssessmentGroupList">
              <Field name="techAssessmentGroup">
                <Field name="techAssessment" />
                <Field name="techAssessmentDate" />
              </Field>
            </Field>
          </Col>

          <Col>
            <Field name="conditionCheckGroupList">
              <Field name="conditionCheckGroup">
                <Field name="condition" />
                <Field name="conditionDate" />
                <Field name="conditionNote" />
              </Field>
            </Field>

            <Field name="envConditionNoteGroupList">
              <Field name="envConditionNoteGroup">
                <Field name="envConditionNote" />
                <Field name="envConditionNoteDate" />
              </Field>
            </Field>
          </Col>
        </Cols>
      </Panel>

      <Panel name="conditionCheckAndTechAssessmentInfo" collapsible collapsed>
        <Row>
          <Field name="conditionCheckRefNumber" />
          <Field name="conditionCheckAssessmentDate" />
        </Row>

        <Row>
          <Field name="conditionCheckMethod" />
          <Field name="conditionCheckReason" />
          <Field name="conditionChecker" />
        </Row>

        <Field name="conditionCheckNote" />
      </Panel>

      <Panel name="objectRequirementInfo" collapsible collapsed>
        <Cols>
          <Col>
            <Field name="displayRecommendations" />
            <Field name="handlingRecommendations" />
            <Field name="securityRecommendations" />
            <Field name="storageRequirements" />
          </Col>

          <Col>
            <Field name="envRecommendations" />
            <Field name="packingRecommendations" />
            <Field name="specialRequirements" />
            <Field name="legalRequirements" />
          </Col>
        </Cols>

        <Field name="legalReqsHeldGroupList">
          <Field name="legalReqsHeldGroup">
            <Field name="legalReqsHeld" />
            <Field name="legalReqsHeldBeginDate" />
            <Field name="legalReqsHeldEndDate" />
            <Field name="legalReqsHeldNumber" />
            <Field name="legalReqsHeldRenewDate" />
          </Field>
        </Field>

        <Cols>
          <Col>
            <Field name="salvagePriorityCodeGroupList">
              <Field name="salvagePriorityCodeGroup">
                <Field name="salvagePriorityCode" />
                <Field name="salvagePriorityCodeDate" />
              </Field>
            </Field>
          </Col>

          <Col />
        </Cols>
      </Panel>
    </Field>
  );
};

export default pluginContext => ({
  template: template(pluginContext),
});
