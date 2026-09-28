const api = sandkit.api;

api.hooks.intercept(
  "item:use",
  (args) => {
    args.prepared.energyCost = 0;
  },
  {
    itemIds: ["laser"]
  }
);
