const INCHES_VALUE = 'inches';
const CENTIMETERS_VALUE = 'centimeters';

const summaryUnits = {
  [INCHES_VALUE]: 'in.',
  [CENTIMETERS_VALUE]: 'cm.',
};

const formatUnit = (unit) => summaryUnits[unit] || unit;

// eslint-disable-next-line import/prefer-default-export
export const computeDimensionSummary = ({ data }) => {
  const measuredPart = data.get('measuredPart');
  const dimensionSubGroups = data.getIn(['dimensionSubGroupList', 'dimensionSubGroup']);
  const measuredPartNote = data.get('measuredPartNote');

  // Collect the necessary measurements for the summary. Measurements with units other than inches
  // and centimeters are excluded. Measurements with empty values are excluded. A dimension could
  // be measured more than once. If this happens, the first (top-most) measurement of that
  // dimension is used. All others are excluded.

  const measurements = {};

  if (dimensionSubGroups) {
    dimensionSubGroups.forEach((dimensionSubGroup) => {
      const dimension = dimensionSubGroup.get('dimension');
      const value = dimensionSubGroup.get('value');
      const unit = dimensionSubGroup.get('measurementUnit');

      if (
        value
        && (unit === INCHES_VALUE || unit === CENTIMETERS_VALUE)
        && !(dimension in measurements)
      ) {
        measurements[dimension] = {
          value,
          unit,
        };
      }
    });
  }

  // Order the collected measurements by dimension, and drop measurements of dimensions that are
  // not used in the summary.

  const orderedDimensions = ['height', 'width', 'length', 'depth', 'diameter'];
  const orderedMeasurements = [];
  const usedUnits = {};

  orderedDimensions.forEach((dimension) => {
    const measurement = measurements[dimension];

    if (measurement) {
      orderedMeasurements.push(measurement);

      usedUnits[measurement.unit] = true;
    }
  });

  // Create descriptions of each measurement. If all measurements share a common unit, this is just
  // the value of the measurement. Otherwise, it's the value and the unit.

  const hasCommonUnit = (Object.keys(usedUnits).length === 1);

  const orderedMeasurementDescriptions = orderedMeasurements.map(({ value, unit }) => (hasCommonUnit ? value : `${value} ${formatUnit(unit)}`));

  // Join all measurement descriptions with x.

  let measurementSummary = orderedMeasurementDescriptions.join(' x ');

  // If there is a common unit, append it.

  if (hasCommonUnit) {
    const commonUnit = (Object.keys(usedUnits))[0];

    measurementSummary = `${measurementSummary} ${formatUnit(commonUnit)}`;
  }

  // Compose this with the measured part and the measured part note.

  const summaryParts = [
    measuredPart && `${measuredPart}:`,
    measurementSummary,
    measuredPartNote && `(${measuredPartNote})`,
  ];

  return data.set('dimensionSummary', summaryParts.filter((part) => !!part).join(' '));
};
