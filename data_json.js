module.exports = {
  "columns": {
    "MPG": {
      "type": "numericMeasure",
      "role": "target"
    },
    "Cylinders": {
      "type": "numericMeasure",
      "role": "feature"
    },
    "Displacement": {
      "type": "numericMeasure",
      "role": "feature"
    },
    "Horsepower": {
      "type": "numericMeasure",
      "role": "feature"
    },
    "Weight": {
      "type": "numericMeasure",
      "role": "feature"
    },
    "Acceleration": {
      "type": "numericMeasure",
      "role": "feature"
    },
    "ModelYear": {
      "type": "string",
      "role": "feature",
      "imputation": "mode"
    },
    "Origin": {
      "type": "numeric",
      "role": "feature",
      "imputation": "mode"
    },
    "Name": {
      "type": "string",
      "role": "none"
    },
    "Make": {
      "type": "string",
      "role": "feature"
    }
  }
