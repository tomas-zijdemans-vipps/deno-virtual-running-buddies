import { DefineDatastore, Schema } from "deno-slack-sdk/mod.ts";

export const RUN_DATASTORE = "running_datastore";

const RunningDatastore = DefineDatastore({
  name: RUN_DATASTORE,
  primary_key: "id",
  attributes: {
    id: {
      type: Schema.types.string,
    },
    runner: {
      type: Schema.slack.types.user_id,
    },
    distance: {
      type: Schema.types.number,
    },
    rundate: {
      type: Schema.slack.types.date,
    },
  },
});

export default RunningDatastore;
