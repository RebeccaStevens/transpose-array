const avaConfig = {
  files: ["tests/**/*.test.*"],
  timeout: "5m",
  extensions: {
    ts: "module",
  },
  nodeArguments: [
    "--loader=ts-node/esm",
    "--experimental-specifier-resolution=node",
  ],
  environmentVariables: {
    TS_NODE_PROJECT: "tests/tsconfig.json",
  },
};

export default avaConfig;
