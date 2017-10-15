module.exports = {
  "columns": {
    "sex": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "feature"
    },
    "education_2003_revision": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "feature"
    },
    "marital_status": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "feature"
    },
    //target
    "detail_age": {
      "dataType": "numeric",
      "imputation": "mean",
      "aggregation": "sum",
      "role": "target"
    },
    // below are excluded
    "race": {
      "dataType": "numeric",
      "imputation": "zeroes",
      "aggregation": "sum",
      "role": "none"
    },
    "autopsy": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },

    "activity_code": {
      "dataType": "numeric",
      "imputation": "zeroes",
      "aggregation": "sum",
      "role": "none"
    },
    "race_recode_3": {
      "dataType": "numeric",
      "imputation": "zeroes",
      "aggregation": "sum",
      "role": "none"
    },
    "race_recode_5": {
      "dataType": "numeric",
      "imputation": "zeroes",
      "aggregation": "sum",
      "role": "none"
    },
    "injury_at_work": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },

    "month_of_death": {
      "dataType": "numeric",
      "imputation": "zeroes",
      "aggregation": "sum",
      "role": "none"
    },
    "39_cause_recode": {
      "dataType": "numeric",
      "imputation": "zeroes",
      "aggregation": "sum",
      "role": "none"
    },
    "detail_age_type": {
      "dataType": "numeric",
      "imputation": "zeroes",
      "aggregation": "sum",
      "role": "none"
    },
    "hispanic_origin": {
      "dataType": "numeric",
      "imputation": "zeroes",
      "aggregation": "sum",
      "role": "none"
    },
    "manner_of_death": {
      "dataType": "numeric",
      "imputation": "zeroes",
      "aggregation": "sum",
      "role": "none"
    },
    "resident_status": {
      "dataType": "numeric",
      "imputation": "zeroes",
      "aggregation": "sum",
      "role": "none"
    },
    "113_cause_recode": {
      "dataType": "numeric",
      "imputation": "zeroes",
      "aggregation": "sum",
      "role": "none"
    },
    "358_cause_recode": {
      "dataType": "numeric",
      "imputation": "zeroes",
      "aggregation": "sum",
      "role": "none"
    },
    "bridged_race_flag": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "current_data_year": {
      "dataType": "numeric",
      "imputation": "zeroes",
      "aggregation": "sum",
      "role": "none"
    },
    "entity_condition_1": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "entity_condition_2": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "entity_condition_3": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "entity_condition_4": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "entity_condition_5": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "entity_condition_6": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "entity_condition_7": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "entity_condition_8": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "entity_condition_9": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "record_condition_1": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "record_condition_2": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "record_condition_3": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "record_condition_4": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "record_condition_5": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "record_condition_6": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "record_condition_7": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "record_condition_8": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "record_condition_9": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "entity_condition_10": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "entity_condition_11": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "entity_condition_12": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "entity_condition_13": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "entity_condition_14": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "entity_condition_15": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "entity_condition_16": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "entity_condition_17": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "entity_condition_18": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "entity_condition_19": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "entity_condition_20": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "record_condition_10": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "record_condition_11": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "record_condition_12": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "record_condition_13": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "record_condition_14": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "record_condition_15": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "record_condition_16": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "record_condition_17": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "record_condition_18": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "record_condition_19": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "record_condition_20": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "day_of_week_of_death": {
      "dataType": "numeric",
      "imputation": "zeroes",
      "aggregation": "sum",
      "role": "none"
    },
    "race_imputation_flag": {
      "dataType": "numeric",
      "imputation": "zeroes",
      "aggregation": "sum",
      "role": "none"
    },
    "method_of_disposition": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "icd_code_10th_revision": {
      "dataType": "string",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "130_infant_cause_recode": {
      "dataType": "numeric",
      "imputation": "zeroes",
      "aggregation": "sum",
      "role": "none"
    },

    "education_reporting_flag": {
      "dataType": "numeric",
      "imputation": "mode",
      "aggregation": "mode",
      "role": "none"
    },
    "hispanic_originrace_recode": {
      "dataType": "numeric",
      "imputation": "zeroes",
      "aggregation": "sum",
      "role": "none"
    },
    "number_of_entity_axis_conditions": {
      "dataType": "numeric",
      "imputation": "zeroes",
      "aggregation": "sum",
      "role": "none"
    },
    "number_of_record_axis_conditions": {
      "dataType": "numeric",
      "imputation": "zeroes",
      "aggregation": "sum",
      "role": "none"
    },
    "place_of_death_and_decedents_status": {
      "dataType": "numeric",
      "imputation": "zeroes",
      "aggregation": "sum",
      "role": "none"
    }
  }


};
