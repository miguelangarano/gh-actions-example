#!/usr/bin/env node
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/tsup/assets/cjs_shims.js
var getImportMetaUrl, importMetaUrl;
var init_cjs_shims = __esm({
  "../../node_modules/tsup/assets/cjs_shims.js"() {
    "use strict";
    getImportMetaUrl = () => typeof document === "undefined" ? new URL("file:" + __filename).href : document.currentScript && document.currentScript.src || new URL("main.js", document.baseURI).href;
    importMetaUrl = /* @__PURE__ */ getImportMetaUrl();
  }
});

// bin/lib/@commander-js/extra-typings/index.js
var require_extra_typings = __commonJS({
  "bin/lib/@commander-js/extra-typings/index.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    var commander = require("commander");
    exports = module2.exports = {};
    exports.program = new commander.Command();
    exports.Argument = commander.Argument;
    exports.Command = commander.Command;
    exports.CommanderError = commander.CommanderError;
    exports.Help = commander.Help;
    exports.InvalidArgumentError = commander.InvalidArgumentError;
    exports.InvalidOptionArgumentError = commander.InvalidArgumentError;
    exports.Option = commander.Option;
    exports.createCommand = (name) => new commander.Command(name);
    exports.createOption = (flags, description) => new commander.Option(flags, description);
    exports.createArgument = (name, description) => new commander.Argument(name, description);
  }
});

// bin/cli.ts
init_cjs_shims();
var import_register = require("source-map-support/register");

// lib/errors.ts
init_cjs_shims();
var ValidationError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "";
  }
};

// lib/log.ts
init_cjs_shims();
var import_chalk = __toESM(require("chalk"));
var import_util = __toESM(require("util"));
var log = (...args) => console.log(import_util.default.format(...args));
var info = log;
var format = import_util.default.format;
var withError = (msg) => import_chalk.default.bgRed.white(" ERROR ") + " " + msg;
var withWarning = (msg) => import_chalk.default.bgYellow.black(" WARNING ") + " " + msg;
var warn = (...args) => log(withWarning(import_util.default.format(...args)));
var error = (...args) => log(withError(import_util.default.format(...args)) + "\n");
var title = (color, ...args) => info("\n  " + import_chalk.default[color].bold(import_util.default.format(...args)) + "  \n");
var divider = () => console.log("\n" + import_chalk.default.gray(Array(100).fill("=").join("")) + "\n");
var spacer = (n = 0) => console.log(Array(n).fill("").join("\n"));
var cyan = import_chalk.default.cyan;
var blue = import_chalk.default.blueBright;
var red = import_chalk.default.red;
var green = import_chalk.default.greenBright;
var gray = import_chalk.default.gray;
var white = import_chalk.default.white;
var magenta = import_chalk.default.magenta;
var bold = import_chalk.default.bold;
var dim = import_chalk.default.dim;

// lib/run.ts
init_cjs_shims();

// lib/init.ts
init_cjs_shims();

// lib/require.ts
init_cjs_shims();
var import_module = require("module");
var require2 = (0, import_module.createRequire)(importMetaUrl);

// lib/stdout.ts
init_cjs_shims();
var import_child_process = __toESM(require("child_process"));
var orginal = import_child_process.default.spawn;
import_child_process.default.spawn = function(command, args, options) {
  if (command.match(/Cypress/)) {
    const process2 = orginal(command, args, {
      ...options,
      // using pipe enables capturing stdout and stderr
      stdio: ["pipe", "pipe", "pipe"]
    });
    return process2;
  }
  return orginal(command, args, options);
};

// lib/ws/index.ts
init_cjs_shims();

// lib/ws/ws.ts
init_cjs_shims();
var import_debug = __toESM(require("debug"));
var import_http = __toESM(require("http"));
var import_lil_http_terminator = __toESM(require("lil-http-terminator"));
var import_ts_pattern = require("ts-pattern");
var WebSocket = __toESM(require("ws"));

// lib/pubsub/index.ts
init_cjs_shims();

// lib/pubsub/events.ts
init_cjs_shims();
var Event = /* @__PURE__ */ ((Event2) => {
  Event2["RUN_CANCELLED"] = "run:cancelled";
  Event2["RUN_RESULT"] = "run:result";
  Event2["TEST_AFTER_RUN"] = "test:after:run";
  Event2["TEST_BEFORE_RUN"] = "test:before:run";
  Event2["AFTER_SCREENSHOT"] = "after:screenshot";
  Event2["AFTER_SPEC"] = "after:spec";
  return Event2;
})(Event || {});
var allEvents = Object.values(Event);

// lib/pubsub/pubsub.ts
init_cjs_shims();
var import_events = __toESM(require("events"));
var _pubsub = null;
var getPubSub = () => {
  if (!_pubsub) {
    _pubsub = new import_events.default();
  }
  return _pubsub;
};

// lib/ws/ws.ts
var debug = (0, import_debug.default)("currents:ws");
var server = null;
var wss = null;
var httpTerminator = null;
var getWSSPort = () => (0, import_ts_pattern.match)(server?.address()).with({ port: import_ts_pattern.P.number }, (address) => address.port).otherwise(() => 0);
var stopWSS = async () => {
  debug("terminating wss server: %d", getWSSPort());
  if (!httpTerminator) {
    debug("no wss server");
    return;
  }
  const { success, code, message, error: error2 } = await httpTerminator.terminate();
  if (!success) {
    if (code === "TIMED_OUT")
      error2(message);
    if (code === "SERVER_ERROR")
      error2(message, error2);
    if (code === "INTERNAL_ERROR")
      error2(message, error2);
  }
  debug("terminated wss server: %d", getWSSPort());
};
var startWSS = () => {
  if (wss) {
    return;
  }
  server = import_http.default.createServer().on("listening", () => {
    if (!server) {
      throw new Error("Server not initialized");
    }
    wss = new WebSocket.WebSocketServer({
      server
    });
    debug("starting wss on port %d", getWSSPort());
    wss.on("connection", function connection(ws) {
      ws.on("message", function incoming(event) {
        const message = JSON.parse(event.toString());
        getPubSub().emit(message.type, message.payload);
      });
    });
  }).listen();
  httpTerminator = (0, import_lil_http_terminator.default)({
    server
  });
};

// lib/capture.ts
init_cjs_shims();
var import_debug2 = __toESM(require("debug"));
var debug2 = (0, import_debug2.default)("currents:capture");
var _write = process.stdout.write;
var _log = process.log;
var restore = function() {
  process.stdout.write = _write;
  process.log = _log;
};
var stdout = function() {
  debug2("capturing stdout");
  let logs = [];
  const { write } = process.stdout;
  const { log: log2 } = process;
  if (log2) {
    process.log = function(str) {
      logs.push(str);
      return log2.apply(this, arguments);
    };
  }
  process.stdout.write = function(str) {
    logs.push(str);
    return write.apply(this, arguments);
  };
  return {
    toString() {
      return logs.join("");
    },
    data: logs,
    restore,
    reset: () => {
      debug2("resetting captured stdout");
      logs = [];
    }
  };
};
var initialOutput = "";
var capturedOutput = null;
var initCapture = () => capturedOutput = stdout();
var cutInitialOutput = () => {
  if (!capturedOutput)
    throw new Error("capturedOutput is null");
  initialOutput = capturedOutput.toString();
  capturedOutput.reset();
};
var resetCapture = () => {
  if (!capturedOutput)
    throw new Error("capturedOutput is null");
  capturedOutput.reset();
};
var getCapturedOutput = () => {
  if (!capturedOutput)
    throw new Error("capturedOutput is null");
  return capturedOutput.toString();
};
var getInitialOutput = () => initialOutput;

// lib/state/global.ts
init_cjs_shims();
var _runId = void 0;
var setRunId = (runId) => {
  _runId = runId;
};
var _cypressVersion = void 0;
var setCypressVersion = (cypressVersion) => {
  _cypressVersion = cypressVersion;
};
var _currentsVersion = void 0;
var setCurrentsVersion = (v) => {
  _currentsVersion = v;
};

// lib/init.ts
var cypressPkg = require2("cypress/package.json");
var pkg = require2("asdfghjkl/package.json");
initCapture();
setCypressVersion(cypressPkg.version);
setCurrentsVersion(pkg.version);

// lib/run.ts
var import_debug25 = __toESM(require("debug"));

// legal.ts
init_cjs_shims();
function getLegalNotice() {
  return `
Copyright (C) ${(/* @__PURE__ */ new Date()).getFullYear()} Currents Software Inc https://currents.dev
This is free software, and you are welcome to redistribute it under certain
conditions. This program comes with no warranty. Parts of this program are MIT
licensed. Refer to the license for details
https://github.com/currents-dev/asdfghjkl/blob/main/LICENSE.md
`;
}

// lib/api/index.ts
init_cjs_shims();

// lib/api/api.ts
init_cjs_shims();

// lib/httpClient/index.ts
init_cjs_shims();

// lib/httpClient/config.ts
init_cjs_shims();
var import_axios = require("axios");
var isRetriableError = (err) => {
  if (err.code === "ECONNABORTED") {
    return true;
  }
  if (err.code === "ECONNREFUSED") {
    return true;
  }
  if (err.code === "ETIMEDOUT") {
    return true;
  }
  if (!(0, import_axios.isAxiosError)(err)) {
    return false;
  }
  return !!(err?.response?.status && 500 <= err.response.status && err.response.status < 600);
};
var getDelay = (i) => [5 * 1e3, 10 * 1e3, 30 * 1e3][i - 1];
var baseURL = "https://cy.currents.dev";
var getAPIBaseUrl = () => baseURL ?? "https://cy.currents.dev";
var setAPIBaseUrl = (url) => baseURL = url ?? "https://cy.currents.dev";

// lib/httpClient/httpClient.ts
init_cjs_shims();
var import_axios2 = __toESM(require("axios"));
var import_axios_retry = __toESM(require("axios-retry"));
var import_debug10 = __toESM(require("debug"));
var import_lodash5 = __toESM(require("lodash"));
var import_pretty_ms = __toESM(require("pretty-ms"));

// lib/config/index.ts
init_cjs_shims();

// lib/config/config.ts
init_cjs_shims();
var import_debug7 = __toESM(require("debug"));
var import_ts_pattern3 = require("ts-pattern");

// lib/bootstrap/index.ts
init_cjs_shims();

// lib/bootstrap/bootstrap.ts
init_cjs_shims();
var import_cy2 = require("cy2");
var import_debug6 = __toESM(require("debug"));
var import_execa = __toESM(require("execa"));
var import_fs = __toESM(require("fs"));

// lib/fs.ts
init_cjs_shims();
var import_tmp_promise = require("tmp-promise");
var createTempFile = async () => {
  const { path: path5 } = await (0, import_tmp_promise.file)();
  return path5;
};

// lib/bootstrap/serializer.ts
init_cjs_shims();
var import_debug4 = __toESM(require("debug"));
var import_lodash = __toESM(require("lodash"));

// lib/debug/index.ts
init_cjs_shims();
var import_debug3 = __toESM(require("debug"));
var import_ts_pattern2 = require("ts-pattern");

// types.ts
init_cjs_shims();
var DebugMode = /* @__PURE__ */ ((DebugMode2) => {
  DebugMode2["None"] = "none";
  DebugMode2["All"] = "all";
  DebugMode2["Currents"] = "currents";
  DebugMode2["Cypress"] = "cypress";
  DebugMode2["CommitInfo"] = "commit-info";
  return DebugMode2;
})(DebugMode || {});

// lib/debug/index.ts
function shouldEnablePluginDebug(param) {
  return (0, import_ts_pattern2.match)(param).with(import_ts_pattern2.P.nullish, () => false).with("none" /* None */, () => false).with(true, () => true).with("all" /* All */, () => true).with("currents" /* Currents */, () => true).with(
    import_ts_pattern2.P.array(import_ts_pattern2.P.string),
    (v) => v.includes("all" /* All */) || v.includes("currents" /* Currents */)
  ).otherwise(() => false);
}
function activateDebug(mode) {
  (0, import_ts_pattern2.match)(mode).with(import_ts_pattern2.P.instanceOf(Array), (i) => i.forEach(setDebugMode)).with(true, () => setDebugMode("all" /* All */)).with(
    import_ts_pattern2.P.union(
      "all" /* All */,
      "currents" /* Currents */,
      "cypress" /* Cypress */,
      "commit-info" /* CommitInfo */
    ),
    (i) => setDebugMode(i)
  ).otherwise(() => setDebugMode("none" /* None */));
}
function setDebugMode(mode) {
  if (mode === "none" /* None */) {
    return;
  }
  const tokens = new Set(process.env.DEBUG ? process.env.DEBUG.split(",") : []);
  (0, import_ts_pattern2.match)(mode).with("all" /* All */, () => {
    tokens.add("commit-info" /* CommitInfo */);
    tokens.add("currents:*" /* Currents */);
    tokens.add("cypress:*" /* Cypress */);
  }).with("currents" /* Currents */, () => tokens.add("currents:*" /* Currents */)).with("cypress" /* Cypress */, () => tokens.add("cypress:*" /* Cypress */)).with("commit-info" /* CommitInfo */, () => tokens.add("commit-info" /* CommitInfo */)).otherwise(() => {
  });
  import_debug3.default.enable(Array.from(tokens).join(","));
}

// lib/lang.ts
init_cjs_shims();
var import_bluebird = __toESM(require("bluebird"));
import_bluebird.default.Promise.config({
  cancellation: true
});
var BPromise = import_bluebird.default.Promise;
var safe = (fn, ifFaled, ifSucceed) => async (...args) => {
  try {
    const r = await fn(...args);
    ifSucceed();
    return r;
  } catch (e) {
    return ifFaled(e);
  }
};
var sortObjectKeys = (obj) => {
  return Object.keys(obj).sort().reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});
};

// lib/nano.ts
init_cjs_shims();
var import_nanoid = require("nanoid");
var getRandomString = (0, import_nanoid.customAlphabet)("abcdefghijklmnopqrstuvwxyz", 10);

// lib/bootstrap/serializer.ts
var debug4 = (0, import_debug4.default)("currents:boot");
function getBootstrapArgs({
  params,
  tempFilePath
}) {
  return import_lodash.default.chain(getCypressCLIParams(params)).thru((opts) => ({
    ...opts,
    // merge the env with the currents specific env variables
    env: {
      ...opts.env ?? {},
      currents_marker: true,
      currents_temp_file: tempFilePath,
      currents_debug_enabled: shouldEnablePluginDebug(params.cloudDebug)
    }
  })).tap((opts) => {
    debug4("cypress bootstrap params: %o", opts);
  }).thru((opts) => ({
    ...opts,
    env: sortObjectKeys(opts.env ?? {})
  })).thru(serializeOptions).tap((opts) => {
    debug4("cypress bootstrap serialized params: %o", opts);
  }).thru((args) => {
    return [
      ...args,
      "--spec",
      getRandomString(),
      params.testingType === "component" ? "--component" : "--e2e"
    ];
  }).value();
}
function getCypressCLIParams(params) {
  const result = getCypressRunAPIParams(params);
  const testingType = result.testingType === "component" ? {
    component: true
  } : {};
  return {
    ...import_lodash.default.omit(result, "testingType"),
    ...testingType
  };
}
function serializeOptions(options) {
  return Object.entries(options).flatMap(([key, value]) => {
    const _key = dashed(key);
    if (typeof value === "boolean") {
      return value === true ? [`--${_key}`] : [`--${_key}`, false];
    }
    if (import_lodash.default.isObject(value)) {
      return [`--${_key}`, serializeComplexParam(value)];
    }
    return [`--${_key}`, value.toString()];
  });
}
function serializeComplexParam(param) {
  return JSON.stringify(param);
}
var dashed = (v) => v.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());

// lib/bootstrap/bootstrap.ts
var debug5 = (0, import_debug6.default)("currents:boot");
var bootCypress = async (params) => {
  debug5("booting cypress...");
  const tempFilePath = await createTempFile();
  const cypressBin = await (0, import_cy2.getBinPath)(require2.resolve("cypress"));
  debug5("cypress executable location: %s", cypressBin);
  const args = getBootstrapArgs({ tempFilePath, params });
  debug5("booting cypress with args: %o", args);
  const { stdout: stdout2, stderr } = await execCypress(cypressBin, args);
  if (!import_fs.default.existsSync(tempFilePath)) {
    throw new Error(
      `Cannot resolve cypress configuration from ${tempFilePath}. Please report the issue.`
    );
  }
  try {
    const f = import_fs.default.readFileSync(tempFilePath, "utf-8");
    if (!f) {
      throw new Error("Is asdfghjkl/plugin installed?");
    }
    debug5("cypress config '%s': '%s'", tempFilePath, f);
    return JSON.parse(f);
  } catch (err) {
    debug5("read config temp file failed: %o", err);
    info(bold("Cypress stdout:\n"), stdout2);
    info(bold("Cypress stderr:\n"), stderr);
    throw new ValidationError(`Unable to resolve cypress configuration
- make sure that 'asdfghjkl/plugin' is installed
- report the issue together with cypress stdout and stderr
`);
  }
};
async function execCypress(cypressBin, args) {
  let stdout2 = "";
  let stderr = "";
  try {
    await (0, import_execa.default)(cypressBin, ["run", ...args], {
      stdio: "pipe",
      env: {
        ...process.env,
        // prevent warnings about recording mode
        CYPRESS_RECORD_KEY: void 0,
        CYPRESS_PROJECT_ID: void 0
      }
    });
  } catch (err) {
    debug5("exec cypress failed (certain failures are expected): %o", err);
    stdout2 = err.stdout;
    stderr = err.stderr;
  }
  return { stdout: stdout2, stderr };
}

// lib/config/path.ts
init_cjs_shims();
var import_is_absolute = __toESM(require("is-absolute"));
var import_lodash2 = __toESM(require("lodash"));
var import_path = __toESM(require("path"));
var defaultFilenames = [
  "currents.config.js",
  "currents.config.cjs",
  "currents.config.mjs"
];
function getConfigFilePath(projectRoot = null, explicitConfigFilePath) {
  const prefix = projectRoot ?? process.cwd();
  if (import_lodash2.default.isString(explicitConfigFilePath) && (0, import_is_absolute.default)(explicitConfigFilePath)) {
    return [explicitConfigFilePath];
  }
  if (import_lodash2.default.isString(explicitConfigFilePath)) {
    return [normalizePath(prefix, explicitConfigFilePath)];
  }
  return defaultFilenames.map((p) => normalizePath(prefix, p));
}
function normalizePath(prefix, filename) {
  return `file://${import_path.default.resolve(prefix, filename)}`;
}

// lib/config/config.ts
var debug6 = (0, import_debug7.default)("currents:config");
var _config = null;
var defaultConfig = {
  e2e: {
    batchSize: 3
  },
  component: {
    batchSize: 5
  },
  cloudServiceUrl: "https://cy.currents.dev",
  networkHeaders: void 0
};
async function getCurrentsConfig(projectRoot, explicitConfigFilePath) {
  if (_config) {
    return _config;
  }
  const configFilePath = getConfigFilePath(projectRoot, explicitConfigFilePath);
  for (const filepath of configFilePath) {
    const config = (0, import_ts_pattern3.match)(await loadConfigFile(filepath)).with({ default: import_ts_pattern3.P.not(import_ts_pattern3.P.nullish) }, (c) => c.default).with(import_ts_pattern3.P.not(import_ts_pattern3.P.nullish), (c) => c).otherwise(() => null);
    if (config) {
      debug6("loaded currents config from '%s'\n%O", filepath, config);
      info(`Using config file: ${dim(filepath)}`);
      _config = {
        ...defaultConfig,
        ...config
      };
      return _config;
    }
  }
  warn(
    "Failed to load config file, falling back to the default config. Attempted locations: %s",
    configFilePath
  );
  _config = defaultConfig;
  return _config;
}
async function loadConfigFile(filepath) {
  try {
    debug6("loading currents config file from '%s'", filepath);
    return await import(filepath);
  } catch (e) {
    debug6("failed loading config file from: %s", e);
    return null;
  }
}
async function getMergedConfig(params) {
  debug6("resolving cypress config");
  const cypressResolvedConfig = await bootCypress(params);
  debug6("cypress resolvedConfig: %O", cypressResolvedConfig);
  const rawE2EPattern = cypressResolvedConfig.rawJson?.e2e?.specPattern;
  let additionalIgnorePattern = [];
  if (params.testingType === "component" && rawE2EPattern) {
    additionalIgnorePattern = rawE2EPattern;
  }
  const result = {
    projectRoot: cypressResolvedConfig?.projectRoot || process.cwd(),
    projectId: params.projectId,
    specPattern: cypressResolvedConfig?.specPattern || "**/*.*",
    excludeSpecPattern: (
      // @ts-ignore
      cypressResolvedConfig?.resolved.excludeSpecPattern.value ?? []
    ),
    additionalIgnorePattern,
    resolved: cypressResolvedConfig,
    experimentalCoverageRecording: params.experimentalCoverageRecording
  };
  debug6("merged config: %O", result);
  return result;
}

// lib/config/params.ts
init_cjs_shims();
var import_debug8 = __toESM(require("debug"));
var import_lodash3 = __toESM(require("lodash"));
var debug7 = (0, import_debug8.default)("currents:validateParams");
async function resolveCurrentsParams(params) {
  const configFromFile = await getCurrentsConfig(
    params.project,
    params.cloudConfigFile
  );
  debug7("resolving currents params: %o", params);
  debug7("resolving currents config file: %o", configFromFile);
  const cloudServiceUrl = params.cloudServiceUrl ?? process.env.CURRENTS_API_URL ?? configFromFile.cloudServiceUrl;
  const recordKey = params.recordKey ?? process.env.CURRENTS_RECORD_KEY ?? configFromFile.recordKey;
  const projectId = params.projectId ?? process.env.CURRENTS_PROJECT_ID ?? configFromFile.projectId;
  const testingType = params.testingType ?? "e2e";
  let batchSize = params.batchSize;
  if (!batchSize) {
    batchSize = testingType === "e2e" ? configFromFile.e2e.batchSize : configFromFile.component.batchSize;
  }
  return {
    ...params,
    cloudServiceUrl,
    recordKey,
    projectId,
    batchSize,
    testingType
  };
}
var projectIdError = `Cannot resolve projectId. Please use one of the following:
- provide it as a "projectId" property for "run" API method
- set CURRENTS_PROJECT_ID environment variable
- set "projectId" in "currents.config.{c}js" file`;
var cloudServiceUrlError = `Cannot resolve cloud service URL. Please use one of the following:
- provide it as a "cloudServiceUrl" property for "run" API method
- set CURRENTS_API_URL environment variable
- set "cloudServiceUrl" in "currents.config.{c}js" file`;
var cloudServiceInvalidUrlError = `Invalid cloud service URL provided`;
var recordKeyError = `Cannot resolve record key. Please use one of the following:

- pass it as a CLI flag '-k, --key <record-key>'
- provide it as a "recordKey" property for "run" API method
- set CURRENTS_RECORD_KEY environment variable
- set "recordKey" in "currents.config.{c}js" file
`;
async function validateParams(_params) {
  const params = await resolveCurrentsParams(_params);
  debug7("validating currents params: %o", params);
  if (!params.cloudServiceUrl) {
    throw new ValidationError(cloudServiceUrlError);
  }
  if (!params.projectId) {
    throw new ValidationError(projectIdError);
  }
  if (!params.recordKey) {
    throw new ValidationError(recordKeyError);
  }
  validateURL(params.cloudServiceUrl);
  const requiredParameters = [
    "testingType",
    "batchSize",
    "projectId"
  ];
  requiredParameters.forEach((key) => {
    if (typeof params[key] === "undefined") {
      error('Missing required parameter "%s"', key);
      throw new Error("Missing required parameter");
    }
  });
  params.tag = parseTags(params.tag);
  params.autoCancelAfterFailures = getAutoCancelValue(
    params.autoCancelAfterFailures
  );
  debug7("validated currents params: %o", params);
  return params;
}
function getAutoCancelValue(value) {
  if (typeof value === "undefined") {
    return void 0;
  }
  if (typeof value === "boolean") {
    return value ? 1 : false;
  }
  if (typeof value === "number" && value > 0) {
    return value;
  }
  throw new ValidationError(
    `autoCancelAfterFailures: should be a positive integer or "false". Got: "${value}"`
  );
}
function isOffline(params) {
  return params.record === false;
}
function parseTags(tagString) {
  if (!tagString) {
    return [];
  }
  if (Array.isArray(tagString)) {
    return tagString.filter(Boolean);
  }
  return tagString.split(",").map((tag) => tag.trim()).filter(Boolean);
}
function validateURL(url) {
  try {
    new URL(url);
  } catch (err) {
    throw new ValidationError(`${cloudServiceInvalidUrlError}: "${url}"`);
  }
}
function getCypressRunAPIParams(params) {
  return {
    ...import_lodash3.default.pickBy(
      import_lodash3.default.omit(params, [
        "cloudDebug",
        "cloudConfigFile",
        "autoCancelAfterFailures",
        "cloudServiceUrl",
        "batchSize",
        "projectId",
        "key",
        "recordKey",
        "record",
        "group",
        "parallel",
        "tag",
        "ciBuildId",
        "spec",
        "exit",
        "headless",
        "experimentalCoverageRecording"
      ]),
      Boolean
    ),
    record: false,
    env: {
      ...params.env,
      currents_debug_enabled: shouldEnablePluginDebug(params.cloudDebug)
    }
  };
}
function preprocessParams(params) {
  return {
    ...params,
    spec: processSpecParam(params.spec)
  };
}
function processSpecParam(spec) {
  if (!spec) {
    return void 0;
  }
  if (Array.isArray(spec)) {
    return import_lodash3.default.flatten(spec.map((i) => i.split(",")));
  }
  return spec.split(",");
}

// lib/httpClient/printErrors.ts
init_cjs_shims();
var import_lodash4 = __toESM(require("lodash"));
function maybePrintErrors(err) {
  if (!err.response?.data || !err.response?.status) {
    return;
  }
  const { message, errors } = err.response.data;
  switch (err.response.status) {
    case 401:
      warn("Received 401 Unauthorized");
      break;
    case 422:
      spacer(1);
      warn(...formatGenericError(message, errors));
      spacer(1);
      break;
    default:
      break;
  }
}
function formatGenericError(message, errors) {
  if (!import_lodash4.default.isString(message)) {
    return ["Unexpected error from the cloud service"];
  }
  if (errors?.length === 0) {
    return [message];
  }
  return [
    message,
    `
${(errors ?? []).map((e) => `  - ${e}`).join("\n")}
`
  ];
}

// lib/httpClient/httpClient.ts
var debug8 = (0, import_debug10.default)("currents:api");
var MAX_RETRIES = 3;
var TIMEOUT_MS = 30 * 1e3;
var _client = null;
async function getClient() {
  if (_client) {
    return _client;
  }
  const currentsConfig = await getCurrentsConfig();
  _client = import_axios2.default.create({
    baseURL: getAPIBaseUrl(),
    timeout: TIMEOUT_MS
  });
  _client.interceptors.request.use((config) => {
    const ccyVerson = _currentsVersion ?? "0.0.0";
    const headers = {
      ...config.headers,
      // @ts-ignore
      "x-cypress-request-attempt": config["axios-retry"]?.retryCount ?? 0,
      "x-cypress-version": _cypressVersion ?? "0.0.0",
      "x-ccy-version": ccyVerson,
      "User-Agent": `asdfghjkl/${ccyVerson}`
    };
    if (_runId) {
      headers["x-cypress-run-id"] = _runId;
    }
    if (!headers["Content-Type"]) {
      headers["Content-Type"] = "application/json";
    }
    if (currentsConfig.networkHeaders) {
      const filteredHeaders = import_lodash5.default.omit(currentsConfig.networkHeaders, [
        "x-cypress-request-attempt",
        "x-cypress-version",
        "x-ccy-version",
        "x-cypress-run-id",
        "Content-Type"
      ]);
      debug8("using custom network headers: %o", filteredHeaders);
      Object.assign(headers, filteredHeaders);
    }
    const req = {
      ...config,
      headers
    };
    debug8("network request: %o", {
      ...import_lodash5.default.pick(req, "method", "url", "headers"),
      data: Buffer.isBuffer(req.data) ? "buffer" : req.data
    });
    return req;
  });
  (0, import_axios_retry.default)(_client, {
    retries: MAX_RETRIES,
    retryCondition: isRetriableError,
    retryDelay: getDelay,
    // @ts-ignore
    onRetry,
    shouldResetTimeout: true
  });
  return _client;
}
function onRetry(retryCount, err, config) {
  warn(
    "Network request '%s' failed: '%s'. Next attempt is in %s (%d/%d).",
    `${config.method} ${config.url}`,
    err.message,
    (0, import_pretty_ms.default)(getDelay(retryCount)),
    retryCount,
    MAX_RETRIES
  );
}
var makeRequest = async (config) => {
  return (await getClient())(config).then((res) => {
    debug8("network response: %o", import_lodash5.default.omit(res, "request", "config"));
    return res;
  }).catch((error2) => {
    maybePrintErrors(error2);
    throw new ValidationError(error2.message);
  });
};

// lib/api/warnings.ts
init_cjs_shims();
var import_lodash6 = __toESM(require("lodash"));
function printWarnings(warnings) {
  warn("Notice from cloud service:");
  warnings.map((w) => {
    spacer(1);
    info(magenta.bold(w.message));
    Object.entries(import_lodash6.default.omit(w, "message")).map(([key, value]) => {
      info("- %s: %s", key, value);
    });
    spacer(1);
  });
}

// lib/api/api.ts
var createRun = async (payload) => {
  const response = await makeRequest({
    method: "POST",
    url: "/runs",
    data: payload
  });
  if ((response.data.warnings?.length ?? 0) > 0) {
    printWarnings(response.data.warnings);
  }
  return response.data;
};
var createInstance = async ({
  runId,
  groupId,
  machineId,
  platform: platform2
}) => {
  const response = await makeRequest({
    method: "POST",
    url: `runs/${runId}/instances`,
    data: {
      runId,
      groupId,
      machineId,
      platform: platform2
    }
  });
  return response.data;
};
var createBatchedInstances = async (data) => {
  const respone = await makeRequest({
    method: "POST",
    url: `runs/${data.runId}/cy/instances`,
    data
  });
  return respone.data;
};
var setInstanceTests = (instanceId, payload) => makeRequest({
  method: "POST",
  url: `instances/${instanceId}/tests`,
  data: payload
}).then((result) => result.data);
var updateInstanceResults = (instanceId, payload) => makeRequest({
  method: "POST",
  url: `instances/${instanceId}/results`,
  data: payload
}).then((result) => result.data);
var reportInstanceResultsMerged = (instanceId, payload) => makeRequest({
  method: "POST",
  url: `instances/${instanceId}/cy/results`,
  data: payload
}).then((result) => result.data);
var updateInstanceStdout = (instanceId, stdout2) => makeRequest({
  method: "PUT",
  url: `instances/${instanceId}/stdout`,
  data: {
    stdout: stdout2
  }
});

// lib/api/types/index.ts
init_cjs_shims();

// lib/api/types/instance.ts
init_cjs_shims();

// lib/api/types/run.ts
init_cjs_shims();

// lib/ciProvider.ts
init_cjs_shims();
var import_debug11 = __toESM(require("debug"));
var import_lodash7 = __toESM(require("lodash"));
var debug9 = (0, import_debug11.default)("currents:ci");
var join = (char, ...pieces) => {
  return import_lodash7.default.chain(pieces).compact().join(char).value();
};
var toCamelObject = (obj, key) => {
  return import_lodash7.default.set(obj, import_lodash7.default.camelCase(key), process.env[key]);
};
var extract = (envKeys) => {
  return import_lodash7.default.transform(envKeys, toCamelObject, {});
};
var isTeamFoundation = () => {
  return process.env.TF_BUILD && process.env.TF_BUILD_BUILDNUMBER;
};
var isAzureCi = () => {
  return process.env.TF_BUILD && process.env.AZURE_HTTP_USER_AGENT;
};
var isAWSCodeBuild = () => {
  return import_lodash7.default.some(process.env, (val, key) => {
    return /^CODEBUILD_/.test(key);
  });
};
var isBamboo = () => {
  return process.env.bamboo_buildNumber;
};
var isCodeshipBasic = () => {
  return process.env.CI_NAME && process.env.CI_NAME === "codeship" && process.env.CODESHIP;
};
var isCodeshipPro = () => {
  return process.env.CI_NAME && process.env.CI_NAME === "codeship" && !process.env.CODESHIP;
};
var isConcourse = () => {
  return import_lodash7.default.some(process.env, (val, key) => {
    return /^CONCOURSE_/.test(key);
  });
};
var isGitlab = () => {
  return process.env.GITLAB_CI || process.env.CI_SERVER_NAME && /^GitLab/.test(process.env.CI_SERVER_NAME);
};
var isGoogleCloud = () => {
  return process.env.GCP_PROJECT || process.env.GCLOUD_PROJECT || process.env.GOOGLE_CLOUD_PROJECT;
};
var isJenkins = () => {
  return process.env.JENKINS_URL || process.env.JENKINS_HOME || process.env.JENKINS_VERSION || process.env.HUDSON_URL || process.env.HUDSON_HOME;
};
var isWercker = () => {
  return process.env.WERCKER || process.env.WERCKER_MAIN_PIPELINE_STARTED;
};
var CI_PROVIDERS = {
  appveyor: "APPVEYOR",
  azure: isAzureCi,
  awsCodeBuild: isAWSCodeBuild,
  bamboo: isBamboo,
  bitbucket: "BITBUCKET_BUILD_NUMBER",
  buildkite: "BUILDKITE",
  circle: "CIRCLECI",
  codeshipBasic: isCodeshipBasic,
  codeshipPro: isCodeshipPro,
  concourse: isConcourse,
  codeFresh: "CF_BUILD_ID",
  drone: "DRONE",
  githubActions: "GITHUB_ACTIONS",
  gitlab: isGitlab,
  goCD: "GO_JOB_NAME",
  googleCloud: isGoogleCloud,
  jenkins: isJenkins,
  semaphore: "SEMAPHORE",
  shippable: "SHIPPABLE",
  teamcity: "TEAMCITY_VERSION",
  teamfoundation: isTeamFoundation,
  travis: "TRAVIS",
  wercker: isWercker,
  netlify: "NETLIFY",
  layerci: "LAYERCI"
};
function _detectProviderName() {
  const { env } = process;
  return import_lodash7.default.findKey(CI_PROVIDERS, (value) => {
    if (import_lodash7.default.isString(value)) {
      return env[value];
    }
    if (import_lodash7.default.isFunction(value)) {
      return value();
    }
  });
}
var _providerCiParams = () => {
  return {
    appveyor: extract([
      "APPVEYOR_JOB_ID",
      "APPVEYOR_ACCOUNT_NAME",
      "APPVEYOR_PROJECT_SLUG",
      "APPVEYOR_BUILD_NUMBER",
      "APPVEYOR_BUILD_VERSION",
      "APPVEYOR_PULL_REQUEST_NUMBER",
      "APPVEYOR_PULL_REQUEST_HEAD_REPO_BRANCH"
    ]),
    azure: extract([
      "BUILD_BUILDID",
      "BUILD_BUILDNUMBER",
      "BUILD_CONTAINERID",
      "BUILD_REPOSITORY_URI"
    ]),
    awsCodeBuild: extract([
      "CODEBUILD_BUILD_ID",
      "CODEBUILD_BUILD_NUMBER",
      "CODEBUILD_RESOLVED_SOURCE_VERSION",
      "CODEBUILD_SOURCE_REPO_URL",
      "CODEBUILD_SOURCE_VERSION"
    ]),
    bamboo: extract([
      "bamboo_buildNumber",
      "bamboo_buildResultsUrl",
      "bamboo_planRepository_repositoryUrl",
      "bamboo_buildKey"
    ]),
    bitbucket: extract([
      "BITBUCKET_REPO_SLUG",
      "BITBUCKET_REPO_OWNER",
      "BITBUCKET_BUILD_NUMBER",
      "BITBUCKET_PARALLEL_STEP",
      "BITBUCKET_STEP_RUN_NUMBER",
      // the PR variables are only set on pull request builds
      "BITBUCKET_PR_ID",
      "BITBUCKET_PR_DESTINATION_BRANCH",
      "BITBUCKET_PR_DESTINATION_COMMIT"
    ]),
    buildkite: extract([
      "BUILDKITE_REPO",
      "BUILDKITE_SOURCE",
      "BUILDKITE_JOB_ID",
      "BUILDKITE_BUILD_ID",
      "BUILDKITE_BUILD_URL",
      "BUILDKITE_BUILD_NUMBER",
      "BUILDKITE_PULL_REQUEST",
      "BUILDKITE_PULL_REQUEST_REPO",
      "BUILDKITE_PULL_REQUEST_BASE_BRANCH"
    ]),
    circle: extract([
      "CIRCLE_JOB",
      "CIRCLE_BUILD_NUM",
      "CIRCLE_BUILD_URL",
      "CIRCLE_PR_NUMBER",
      "CIRCLE_PR_REPONAME",
      "CIRCLE_PR_USERNAME",
      "CIRCLE_COMPARE_URL",
      "CIRCLE_WORKFLOW_ID",
      "CIRCLE_PULL_REQUEST",
      "CIRCLE_REPOSITORY_URL",
      "CI_PULL_REQUEST"
    ]),
    codeshipBasic: extract([
      "CI_BUILD_ID",
      "CI_REPO_NAME",
      "CI_BUILD_URL",
      "CI_PROJECT_ID",
      "CI_BUILD_NUMBER",
      "CI_PULL_REQUEST"
    ]),
    // CodeshipPro provides very few CI variables
    // https://documentation.codeship.com/pro/builds-and-configuration/environment-variables/
    codeshipPro: extract(["CI_BUILD_ID", "CI_REPO_NAME", "CI_PROJECT_ID"]),
    // https://concourse-ci.org/implementing-resource-types.html#resource-metadata
    concourse: extract([
      "BUILD_ID",
      "BUILD_NAME",
      "BUILD_JOB_NAME",
      "BUILD_PIPELINE_NAME",
      "BUILD_TEAM_NAME",
      "ATC_EXTERNAL_URL"
    ]),
    // https://codefresh.io/docs/docs/codefresh-yaml/variables/
    codeFresh: extract([
      "CF_BUILD_ID",
      "CF_BUILD_URL",
      "CF_CURRENT_ATTEMPT",
      "CF_STEP_NAME",
      "CF_PIPELINE_NAME",
      "CF_PIPELINE_TRIGGER_ID",
      // variables added for pull requests
      "CF_PULL_REQUEST_ID",
      "CF_PULL_REQUEST_IS_FORK",
      "CF_PULL_REQUEST_NUMBER",
      "CF_PULL_REQUEST_TARGET"
    ]),
    drone: extract([
      "DRONE_JOB_NUMBER",
      "DRONE_BUILD_LINK",
      "DRONE_BUILD_NUMBER",
      "DRONE_PULL_REQUEST"
    ]),
    // https://help.github.com/en/actions/automating-your-workflow-with-github-actions/using-environment-variables#default-environment-variables
    githubActions: extract([
      "GITHUB_WORKFLOW",
      "GITHUB_ACTION",
      "GITHUB_EVENT_NAME",
      "GITHUB_RUN_ID",
      "GITHUB_RUN_ATTEMPT",
      "GITHUB_REPOSITORY"
    ]),
    // see https://docs.gitlab.com/ee/ci/variables/
    gitlab: extract([
      // pipeline is common among all jobs
      "CI_PIPELINE_ID",
      "CI_PIPELINE_URL",
      // individual jobs
      "CI_BUILD_ID",
      // build id and job id are aliases
      "CI_JOB_ID",
      "CI_JOB_URL",
      "CI_JOB_NAME",
      // other information
      "GITLAB_HOST",
      "CI_PROJECT_ID",
      "CI_PROJECT_URL",
      "CI_REPOSITORY_URL",
      "CI_ENVIRONMENT_URL",
      "CI_DEFAULT_BRANCH"
      // for PRs: https://gitlab.com/gitlab-org/gitlab-ce/issues/23902
    ]),
    // https://docs.gocd.org/current/faq/dev_use_current_revision_in_build.html#standard-gocd-environment-variables
    goCD: extract([
      "GO_SERVER_URL",
      "GO_ENVIRONMENT_NAME",
      "GO_PIPELINE_NAME",
      "GO_PIPELINE_COUNTER",
      "GO_PIPELINE_LABEL",
      "GO_STAGE_NAME",
      "GO_STAGE_COUNTER",
      "GO_JOB_NAME",
      "GO_TRIGGER_USER",
      "GO_REVISION",
      "GO_TO_REVISION",
      "GO_FROM_REVISION",
      "GO_MATERIAL_HAS_CHANGED"
    ]),
    googleCloud: extract([
      // individual jobs
      "BUILD_ID",
      "PROJECT_ID",
      // other information
      "REPO_NAME",
      "BRANCH_NAME",
      "TAG_NAME",
      "COMMIT_SHA",
      "SHORT_SHA"
      // https://cloud.google.com/cloud-build/docs/api/reference/rest/Shared.Types/Build
    ]),
    jenkins: extract(["BUILD_ID", "BUILD_URL", "BUILD_NUMBER", "ghprbPullId"]),
    // https://semaphoreci.com/docs/available-environment-variables.html
    // some come from v1, some from v2 of semaphore
    semaphore: extract([
      "SEMAPHORE_BRANCH_ID",
      "SEMAPHORE_BUILD_NUMBER",
      "SEMAPHORE_CURRENT_JOB",
      "SEMAPHORE_CURRENT_THREAD",
      "SEMAPHORE_EXECUTABLE_UUID",
      "SEMAPHORE_GIT_BRANCH",
      "SEMAPHORE_GIT_DIR",
      "SEMAPHORE_GIT_REF",
      "SEMAPHORE_GIT_REF_TYPE",
      "SEMAPHORE_GIT_REPO_SLUG",
      "SEMAPHORE_GIT_SHA",
      "SEMAPHORE_GIT_URL",
      "SEMAPHORE_JOB_COUNT",
      "SEMAPHORE_JOB_ID",
      // v2
      "SEMAPHORE_JOB_NAME",
      "SEMAPHORE_JOB_UUID",
      // v1
      "SEMAPHORE_PIPELINE_ID",
      "SEMAPHORE_PLATFORM",
      "SEMAPHORE_PROJECT_DIR",
      "SEMAPHORE_PROJECT_HASH_ID",
      "SEMAPHORE_PROJECT_ID",
      // v2
      "SEMAPHORE_PROJECT_NAME",
      "SEMAPHORE_PROJECT_UUID",
      // v1
      "SEMAPHORE_REPO_SLUG",
      "SEMAPHORE_TRIGGER_SOURCE",
      "SEMAPHORE_WORKFLOW_ID",
      "PULL_REQUEST_NUMBER"
      // pull requests from forks ONLY
    ]),
    // see http://docs.shippable.com/ci/env-vars/
    shippable: extract([
      // build variables
      "SHIPPABLE_BUILD_ID",
      // "5b93354cabfabb07007f01fd"
      "SHIPPABLE_BUILD_NUMBER",
      // "4"
      "SHIPPABLE_COMMIT_RANGE",
      // "sha1...sha2"
      "SHIPPABLE_CONTAINER_NAME",
      // "c.exec.cypress-example-kitchensink.4.1"
      "SHIPPABLE_JOB_ID",
      // "1"
      "SHIPPABLE_JOB_NUMBER",
      // "1"
      "SHIPPABLE_REPO_SLUG",
      // "<username>/<repo>"
      // additional information that Shippable provides
      "IS_FORK",
      // "true"
      "IS_GIT_TAG",
      // "false"
      "IS_PRERELEASE",
      // "false"
      "IS_RELEASE",
      // "false"
      "REPOSITORY_URL",
      // "https://github.com/....git"
      "REPO_FULL_NAME",
      // "<username>/<repo>"
      "REPO_NAME",
      // "cypress-example-kitchensink"
      "BUILD_URL",
      // "https://app.shippable.com/github/<username>/<repo>/runs/1"
      // Pull request information
      "BASE_BRANCH",
      // Name of the target branch into which the pull request changes will be merged.
      "HEAD_BRANCH",
      // This is only set for pull requests and is the name of the branch the pull request was opened from.
      "IS_PULL_REQUEST",
      // "false" or "true"
      "PULL_REQUEST",
      // Pull request number if the job is a pull request. If not, this will be set to false.
      "PULL_REQUEST_BASE_BRANCH",
      // Name of the branch that the pull request will be merged into. It should be the same as BASE_BRANCH.
      "PULL_REQUEST_REPO_FULL_NAME"
      // Full name of the repository from where the pull request originated.
    ]),
    teamcity: null,
    teamfoundation: extract([
      "BUILD_BUILDID",
      "BUILD_BUILDNUMBER",
      "BUILD_CONTAINERID"
    ]),
    travis: extract([
      "TRAVIS_JOB_ID",
      "TRAVIS_BUILD_ID",
      "TRAVIS_BUILD_WEB_URL",
      "TRAVIS_REPO_SLUG",
      "TRAVIS_JOB_NUMBER",
      "TRAVIS_EVENT_TYPE",
      "TRAVIS_COMMIT_RANGE",
      "TRAVIS_BUILD_NUMBER",
      "TRAVIS_PULL_REQUEST",
      "TRAVIS_PULL_REQUEST_BRANCH",
      "TRAVIS_PULL_REQUEST_SHA"
    ]),
    wercker: null,
    // https://docs.netlify.com/configure-builds/environment-variables/#deploy-urls-and-metadata
    netlify: extract([
      "BUILD_ID",
      "CONTEXT",
      "URL",
      "DEPLOY_URL",
      "DEPLOY_PRIME_URL",
      "DEPLOY_ID"
    ]),
    // https://layerci.com/docs/layerfile-reference/build-env
    layerci: extract([
      "LAYERCI_JOB_ID",
      "LAYERCI_RUNNER_ID",
      "RETRY_INDEX",
      "LAYERCI_PULL_REQUEST",
      "LAYERCI_REPO_NAME",
      "LAYERCI_REPO_OWNER",
      "LAYERCI_BRANCH",
      "GIT_TAG"
      // short hex for commits
    ])
  };
};
var _providerCommitParams = () => {
  const { env } = process;
  return {
    appveyor: {
      sha: env.APPVEYOR_REPO_COMMIT,
      // since APPVEYOR_REPO_BRANCH will be the target branch on a PR
      // we need to use PULL_REQUEST_HEAD_REPO_BRANCH if it exists.
      // e.g. if you have a PR: develop <- my-feature-branch
      // my-feature-branch is APPVEYOR_PULL_REQUEST_HEAD_REPO_BRANCH
      // develop           is APPVEYOR_REPO_BRANCH
      branch: env.APPVEYOR_PULL_REQUEST_HEAD_REPO_BRANCH || env.APPVEYOR_REPO_BRANCH,
      message: join(
        "\n",
        env.APPVEYOR_REPO_COMMIT_MESSAGE,
        env.APPVEYOR_REPO_COMMIT_MESSAGE_EXTENDED
      ),
      authorName: env.APPVEYOR_REPO_COMMIT_AUTHOR,
      authorEmail: env.APPVEYOR_REPO_COMMIT_AUTHOR_EMAIL
      // remoteOrigin: ???
      // defaultBranch: ???
    },
    awsCodeBuild: {
      sha: env.CODEBUILD_RESOLVED_SOURCE_VERSION,
      // branch: ???,
      // message: ???
      // authorName: ???
      // authorEmail: ???
      remoteOrigin: env.CODEBUILD_SOURCE_REPO_URL
      // defaultBranch: ???
    },
    azure: {
      sha: env.BUILD_SOURCEVERSION,
      branch: env.BUILD_SOURCEBRANCHNAME,
      message: env.BUILD_SOURCEVERSIONMESSAGE,
      authorName: env.BUILD_SOURCEVERSIONAUTHOR,
      authorEmail: env.BUILD_REQUESTEDFOREMAIL
    },
    bamboo: {
      sha: env.bamboo_planRepository_revision,
      branch: env.bamboo_planRepository_branch,
      // message: ???
      authorName: env.bamboo_planRepository_username,
      // authorEmail: ???
      remoteOrigin: env.bamboo_planRepository_repositoryURL
      // defaultBranch: ???
    },
    bitbucket: {
      sha: env.BITBUCKET_COMMIT,
      branch: env.BITBUCKET_BRANCH
      // message: ???
      // authorName: ???
      // authorEmail: ???
      // remoteOrigin: ???
      // defaultBranch: ???
    },
    buildkite: {
      sha: env.BUILDKITE_COMMIT,
      branch: env.BUILDKITE_BRANCH,
      message: env.BUILDKITE_MESSAGE,
      authorName: env.BUILDKITE_BUILD_CREATOR,
      authorEmail: env.BUILDKITE_BUILD_CREATOR_EMAIL,
      remoteOrigin: env.BUILDKITE_REPO,
      defaultBranch: env.BUILDKITE_PIPELINE_DEFAULT_BRANCH
    },
    circle: {
      sha: env.CIRCLE_SHA1,
      branch: env.CIRCLE_BRANCH,
      // message: ???
      authorName: env.CIRCLE_USERNAME,
      // authorEmail: ???
      remoteOrigin: env.CIRCLE_REPOSITORY_URL
      // defaultBranch: ???
    },
    codeshipBasic: {
      sha: env.CI_COMMIT_ID,
      branch: env.CI_BRANCH,
      message: env.CI_COMMIT_MESSAGE,
      authorName: env.CI_COMMITTER_NAME,
      authorEmail: env.CI_COMMITTER_EMAIL
      // remoteOrigin: ???
      // defaultBranch: ???
    },
    codeshipPro: {
      sha: env.CI_COMMIT_ID,
      branch: env.CI_BRANCH,
      message: env.CI_COMMIT_MESSAGE,
      authorName: env.CI_COMMITTER_NAME,
      authorEmail: env.CI_COMMITTER_EMAIL
      // remoteOrigin: ???
      // defaultBranch: ???
    },
    codeFresh: {
      sha: env.CF_REVISION,
      branch: env.CF_BRANCH,
      message: env.CF_COMMIT_MESSAGE,
      authorName: env.CF_COMMIT_AUTHOR
    },
    drone: {
      sha: env.DRONE_COMMIT_SHA,
      // https://docs.drone.io/pipeline/environment/reference/drone-source-branch/
      branch: env.DRONE_SOURCE_BRANCH,
      message: env.DRONE_COMMIT_MESSAGE,
      authorName: env.DRONE_COMMIT_AUTHOR,
      authorEmail: env.DRONE_COMMIT_AUTHOR_EMAIL,
      remoteOrigin: env.DRONE_GIT_HTTP_URL,
      defaultBranch: env.DRONE_REPO_BRANCH
    },
    githubActions: {
      sha: env.GITHUB_SHA,
      branch: env.GH_BRANCH || env.GITHUB_REF,
      defaultBranch: env.GITHUB_BASE_REF,
      remoteBranch: env.GITHUB_HEAD_REF,
      runAttempt: env.GITHUB_RUN_ATTEMPT
    },
    gitlab: {
      sha: env.CI_COMMIT_SHA,
      branch: env.CI_COMMIT_REF_NAME,
      message: env.CI_COMMIT_MESSAGE,
      authorName: env.GITLAB_USER_NAME,
      authorEmail: env.GITLAB_USER_EMAIL,
      remoteOrigin: env.CI_REPOSITORY_URL,
      defaultBranch: env.CI_DEFAULT_BRANCH
    },
    googleCloud: {
      sha: env.COMMIT_SHA,
      branch: env.BRANCH_NAME
      // message: ??
      // authorName: ??
      // authorEmail: ??
      // remoteOrigin: ???
      // defaultBranch: ??
    },
    jenkins: {
      sha: env.GIT_COMMIT,
      branch: env.GIT_BRANCH
      // message: ???
      // authorName: ???
      // authorEmail: ???
      // remoteOrigin: ???
      // defaultBranch: ???
    },
    // Only from forks? https://semaphoreci.com/docs/available-environment-variables.html
    semaphore: {
      sha: env.SEMAPHORE_GIT_SHA,
      branch: env.SEMAPHORE_GIT_BRANCH,
      // message: ???
      // authorName: ???
      // authorEmail: ???
      remoteOrigin: env.SEMAPHORE_GIT_REPO_SLUG
      // defaultBranch: ???
    },
    shippable: {
      sha: env.COMMIT,
      branch: env.BRANCH,
      message: env.COMMIT_MESSAGE,
      authorName: env.COMMITTER
      // authorEmail: ???
      // remoteOrigin: ???
      // defaultBranch: ???
    },
    snap: null,
    teamcity: null,
    teamfoundation: {
      sha: env.BUILD_SOURCEVERSION,
      branch: env.BUILD_SOURCEBRANCHNAME,
      message: env.BUILD_SOURCEVERSIONMESSAGE,
      authorName: env.BUILD_SOURCEVERSIONAUTHOR
    },
    travis: {
      sha: env.TRAVIS_PULL_REQUEST_SHA || env.TRAVIS_COMMIT,
      // for PRs, TRAVIS_BRANCH is the base branch being merged into
      branch: env.TRAVIS_PULL_REQUEST_BRANCH || env.TRAVIS_BRANCH,
      // authorName: ???
      // authorEmail: ???
      message: env.TRAVIS_COMMIT_MESSAGE
      // remoteOrigin: ???
      // defaultBranch: ???
    },
    wercker: null,
    netlify: {
      sha: env.COMMIT_REF,
      branch: env.BRANCH,
      remoteOrigin: env.REPOSITORY_URL
    },
    layerci: {
      sha: env.GIT_COMMIT,
      branch: env.LAYERCI_BRANCH,
      message: env.GIT_COMMIT_TITLE
    }
  };
};
var _get = (fn) => {
  const providerName = getCiProvider();
  if (!providerName)
    return {};
  return import_lodash7.default.chain(fn()).get(providerName).value();
};
function checkForCiBuildFromCi(ciProvider) {
  if (ciProvider && detectableCiBuildIdProviders().includes(ciProvider))
    return true;
  throw new ValidationError(
    `Could not determine CI build ID from the environment. Please provide a unique CI build ID using the --ci-build-id CLI flag or 'ciBuildId' parameter for 'run' method.`
  );
}
function detectableCiBuildIdProviders() {
  return import_lodash7.default.chain(_providerCiParams()).omitBy(import_lodash7.default.isNull).keys().value();
}
function getCiProvider() {
  return _detectProviderName() || null;
}
function getCiParams() {
  return _get(_providerCiParams);
}
function getCommitParams() {
  return _get(_providerCommitParams);
}
function getCI(ciBuildId) {
  const params = getCiParams();
  const provider = getCiProvider();
  if (!ciBuildId)
    checkForCiBuildFromCi(provider);
  debug9("detected CI provider: %s", provider);
  debug9("detected CI params: %O", params);
  return {
    params,
    provider
  };
}
function getCommitDefaults(existingInfo) {
  debug9("git commit existing info");
  debug9(existingInfo);
  const commitParamsObj = getCommitParams();
  debug9("commit info from provider environment variables: %O", commitParamsObj);
  const combined = import_lodash7.default.transform(
    existingInfo,
    (memo, value, key) => {
      return memo[key] = import_lodash7.default.defaultTo(value || commitParamsObj[key], null);
    }
  );
  debug9("combined git and environment variables from provider");
  debug9(combined);
  return combined;
}

// lib/cypress/index.ts
init_cjs_shims();

// lib/cypress/cypress.ts
init_cjs_shims();
var import_cypress = __toESM(require("cypress"));
var import_debug12 = __toESM(require("debug"));
var import_lodash8 = __toESM(require("lodash"));

// lib/results/moduleAPIResult.ts
init_cjs_shims();
var import_date_fns2 = require("date-fns");

// lib/results/specAfterResult.ts
init_cjs_shims();
var import_date_fns = require("date-fns");
var import_ts_pattern4 = require("ts-pattern");
var SpecAfterResult = class _SpecAfterResult {
  /**
   * Combine standalone attempts and screenshots into standard result
   * @param specResult - spec:after results
   * @param executionState - ccy execution state
   * @returns unified results, including attempts and screenshot details
   */
  static getSpecAfterStandard(specAfterResults, executionState) {
    return {
      error: specAfterResults.error,
      // hooks: "hooks" in specAfterResults ? specAfterResults.hooks : null,
      hooks: null,
      reporter: specAfterResults.reporter,
      reporterStats: specAfterResults.reporterStats,
      spec: _SpecAfterResult.getSpecStandard(specAfterResults.spec),
      tests: _SpecAfterResult.getTestStandard(
        specAfterResults,
        executionState.getAttemptsData()
      ),
      video: specAfterResults.video,
      stats: _SpecAfterResult.getStatsStandard(specAfterResults.stats),
      screenshots: _SpecAfterResult.getScreenshotsStandard(
        specAfterResults.screenshots,
        executionState.getScreenshotsData()
      )
    };
  }
  static getAttemptError(err) {
    if (!err) {
      return null;
    }
    return {
      name: err.name,
      message: err.message,
      stack: err.stack,
      codeFrame: err.codeFrame
    };
  }
  static getAttemptVideoTimestamp(attemptStartedAtMs, specStartedAtMs) {
    return Math.max(attemptStartedAtMs - specStartedAtMs, 0);
  }
  static getSpecStartedAt(stats) {
    if ("startedAt" in stats) {
      return (0, import_date_fns.parseISO)(stats.startedAt);
    }
    if ("wallClockStartedAt" in stats) {
      return (0, import_date_fns.parseISO)(stats.wallClockStartedAt);
    }
    warn("Cannot determine spec start date from stats: %o", stats);
    return /* @__PURE__ */ new Date();
  }
  static getDummyTestAttemptError(attemptState) {
    return (0, import_ts_pattern4.match)(attemptState).with("failed", () => ({
      name: "Error",
      message: "[asdfghjkl] Could not get cypress attempt error details",
      stack: "",
      codeFrame: null
    })).with("skipped", () => ({
      name: "Error",
      message: "The test was skipped because of a hook failure",
      stack: "",
      codeFrame: null
    })).otherwise(() => null);
  }
  static getTestAttemptStandard(mochaAttempt, cypressAttempt, specStartedAt) {
    if (!mochaAttempt) {
      const error2 = "error" in cypressAttempt ? cypressAttempt.error : null;
      const duration = "wallClockDuration" in cypressAttempt ? cypressAttempt.wallClockDuration : null;
      return {
        state: cypressAttempt.state,
        error: error2 ? error2 : _SpecAfterResult.getDummyTestAttemptError(cypressAttempt.state),
        timings: "timings" in cypressAttempt ? cypressAttempt.timings : null,
        wallClockStartedAt: "wallClockStartedAt" in cypressAttempt ? cypressAttempt.wallClockStartedAt : (/* @__PURE__ */ new Date()).toISOString(),
        wallClockDuration: duration ? duration : 0,
        failedFromHookId: "failedFromHookId" in cypressAttempt ? cypressAttempt.failedFromHookId : null,
        videoTimestamp: "videoTimestamp" in cypressAttempt ? cypressAttempt.videoTimestamp : 0
      };
    }
    return {
      state: cypressAttempt.state,
      error: "error" in cypressAttempt ? cypressAttempt.error : _SpecAfterResult.getAttemptError(mochaAttempt.err),
      timings: "timings" in cypressAttempt ? cypressAttempt.timings : mochaAttempt.timings,
      wallClockStartedAt: mochaAttempt.wallClockStartedAt ?? (/* @__PURE__ */ new Date()).toISOString(),
      wallClockDuration: mochaAttempt.duration ?? -1,
      failedFromHookId: "failedFromHookId" in cypressAttempt ? cypressAttempt.failedFromHookId : null,
      videoTimestamp: "videoTimestamp" in cypressAttempt ? cypressAttempt.videoTimestamp : _SpecAfterResult.getAttemptVideoTimestamp(
        (0, import_date_fns.parseISO)(mochaAttempt.wallClockStartedAt).getTime(),
        specStartedAt.getTime()
      )
    };
  }
  static getTestStandard(specAfterResults, attempts) {
    const standardTestList = (specAfterResults.tests ?? []).map((test, i) => {
      const mochaAttempts = attempts.filter(
        (attempt) => attempt.fullTitle === test.title.join(" ")
      );
      const standardAttempts = (test.attempts ?? []).map(
        (cypressAttempt, j) => {
          const mochaAttempt = mochaAttempts.find(
            (ma) => ma.currentRetry === j
          );
          return _SpecAfterResult.getTestAttemptStandard(
            mochaAttempt ?? null,
            cypressAttempt,
            _SpecAfterResult.getSpecStartedAt(specAfterResults.stats)
          );
        }
      );
      return {
        body: "body" in test ? test.body : mochaAttempts[0]?.body ?? "",
        testId: "testId" in test ? test.testId : mochaAttempts[0]?.id ?? `r${i}`,
        title: test.title,
        displayError: test.displayError,
        state: test.state,
        attempts: standardAttempts
      };
    });
    return standardTestList;
  }
  static getSpecStandard(spec) {
    return {
      name: spec.name,
      relative: spec.relative,
      absolute: spec.absolute,
      fileExtension: spec.fileExtension,
      baseName: "baseName" in spec ? spec.baseName : "",
      fileName: "fileName" in spec ? spec.fileName : "",
      relativeToCommonRoot: "relativeToCommonRoot" in spec ? spec.relativeToCommonRoot : "",
      specFileExtension: "specFileExtension" in spec ? spec.specFileExtension : "",
      specType: "specType" in spec ? spec.specType : ""
    };
  }
  static getStatsStandard(stats) {
    const result = {
      skipped: stats.skipped,
      suites: stats.suites,
      tests: stats.tests,
      passes: stats.passes,
      pending: stats.pending,
      failures: stats.failures,
      wallClockStartedAt: "wallClockStartedAt" in stats ? stats.wallClockStartedAt : stats.startedAt,
      wallClockEndedAt: "wallClockEndedAt" in stats ? stats.wallClockEndedAt : stats.endedAt,
      wallClockDuration: "wallClockDuration" in stats ? stats.wallClockDuration : stats.duration ?? 0
    };
    result.tests = result.passes + result.failures + result.pending + result.skipped;
    return result;
  }
  static getScreenshotsStandard(specAfterScreenshots, screenshotEvents) {
    if (!specAfterScreenshots.length) {
      return [];
    }
    return specAfterScreenshots.map((specScreenshot) => {
      const es = screenshotEvents.find(
        (screenshot) => screenshot.path === specScreenshot.path
      );
      if (!es) {
        warn(
          'Could not find details for screenshot at path "%s", skipping...',
          specScreenshot.path
        );
      }
      return {
        height: specScreenshot.height,
        width: specScreenshot.width,
        name: specScreenshot.name ?? es?.name ?? null,
        path: specScreenshot.path,
        takenAt: specScreenshot.takenAt,
        testAttemptIndex: "testAttemptIndex" in specScreenshot ? specScreenshot.testAttemptIndex : es?.testAttemptIndex ?? -1,
        testId: "testId" in specScreenshot ? specScreenshot.testId : es?.testId ?? "unknown",
        screenshotId: "screenshotId" in specScreenshot ? specScreenshot.screenshotId : getRandomString()
      };
    });
  }
};

// lib/results/moduleAPIResult.ts
var ModuleAPIResults = class _ModuleAPIResults {
  static getRunScreenshots(run2) {
    if ("screenshots" in run2) {
      return run2.screenshots;
    }
    return (run2.tests ?? []).flatMap(
      (t) => t.attempts.flatMap((a) => a.screenshots)
    );
  }
  static getTests(run2, executionState) {
    const tests = run2.tests ?? [];
    return tests.map((test, i) => {
      const mochaAttempts = executionState.getAttemptsData().filter((attempt) => attempt.fullTitle === test.title.join(" "));
      const testId = "testId" in test ? test.testId : mochaAttempts[0]?.id ?? `r${i}`;
      const runScreenshotPaths = _ModuleAPIResults.getRunScreenshots(run2).map(
        (i2) => i2.path
      );
      const testScreenshots = executionState.getScreenshotsData().filter((s) => runScreenshotPaths.includes(s.path)).filter((s) => s.testId === testId);
      const standardAttempts = (test.attempts ?? []).map(
        (cypressAttempt, j) => {
          const mochaAttempt = mochaAttempts.find(
            (ma) => ma.currentRetry === j
          );
          const attemptScreenshots = testScreenshots.filter(
            (t) => t.testAttemptIndex === j
          );
          return _ModuleAPIResults.getTestAttempt(
            mochaAttempt ?? null,
            cypressAttempt,
            attemptScreenshots,
            // run only has 1 spec
            SpecAfterResult.getSpecStartedAt(run2.stats)
          );
        }
      );
      return {
        body: "body" in test ? test.body : mochaAttempts[0]?.body ?? "",
        testId,
        title: test.title,
        displayError: test.displayError,
        state: test.state,
        attempts: standardAttempts
      };
    });
  }
  /**
   * Convert version-specific attempt to a standard test attempt
   */
  static getTestAttempt(mochaAttempt, cypressAttempt, screenshots, specStartedAt) {
    if (!mochaAttempt) {
      return {
        state: cypressAttempt.state,
        error: "error" in cypressAttempt ? cypressAttempt.error : SpecAfterResult.getDummyTestAttemptError(cypressAttempt.state),
        startedAt: "startedAt" in cypressAttempt ? cypressAttempt.startedAt : (/* @__PURE__ */ new Date()).toISOString(),
        duration: "duration" in cypressAttempt ? cypressAttempt.duration : 0,
        videoTimestamp: "videoTimestamp" in cypressAttempt ? cypressAttempt.videoTimestamp : 0,
        screenshots: "screenshots" in cypressAttempt ? cypressAttempt.screenshots : screenshots
      };
    }
    return {
      state: cypressAttempt.state,
      error: "error" in cypressAttempt ? cypressAttempt.error : SpecAfterResult.getAttemptError(mochaAttempt.err),
      startedAt: "startedAt" in cypressAttempt ? cypressAttempt.startedAt : mochaAttempt.wallClockStartedAt ?? (/* @__PURE__ */ new Date()).toISOString(),
      duration: "duration" in cypressAttempt ? cypressAttempt.duration : mochaAttempt.duration ?? -1,
      videoTimestamp: "videoTimestamp" in cypressAttempt ? cypressAttempt.videoTimestamp : SpecAfterResult.getAttemptVideoTimestamp(
        (0, import_date_fns2.parseISO)(mochaAttempt.wallClockStartedAt).getTime(),
        specStartedAt.getTime()
      ),
      screenshots: "screenshots" in cypressAttempt ? cypressAttempt.screenshots : screenshots
    };
  }
  static getRun(run2, executionState) {
    return {
      ...run2,
      tests: _ModuleAPIResults.getTests(run2, executionState),
      spec: SpecAfterResult.getSpecStandard(run2.spec),
      // hooks: "hooks" in run ? run.hooks : [],
      hooks: null,
      shouldUploadVideo: "shouldUploadVideo" in run2 ? run2.shouldUploadVideo : true
    };
  }
  /**
   * Converts different Cypress versions to standard form
   */
  static getStandardResult(result, executionState) {
    if (result.runs.length !== 1) {
      throw new Error("Expected single run");
    }
    const run2 = result.runs[0];
    const stats = SpecAfterResult.getStatsStandard(run2.stats);
    return {
      ...result,
      runs: [_ModuleAPIResults.getRun(run2, executionState)],
      totalSuites: 1,
      totalDuration: stats.wallClockDuration,
      totalTests: stats.tests,
      totalFailed: stats.failures,
      totalPassed: stats.passes,
      totalPending: stats.pending,
      totalSkipped: stats.skipped,
      startedTestsAt: stats.wallClockStartedAt,
      endedTestsAt: stats.wallClockEndedAt,
      status: "finished"
    };
  }
  static isFailureResult(result) {
    return "status" in result && result.status === "failed";
  }
  static {
    this.isSuccessResult = (result) => {
      if ("status" in result) {
        return result.status === "finished";
      }
      return true;
    };
  }
  static getEmptyResult(config) {
    return {
      status: "finished",
      totalDuration: 0,
      totalSuites: 0,
      totalPending: 0,
      totalFailed: 0,
      totalSkipped: 0,
      totalPassed: 0,
      totalTests: 0,
      startedTestsAt: (/* @__PURE__ */ new Date()).toISOString(),
      endedTestsAt: (/* @__PURE__ */ new Date()).toISOString(),
      runs: [],
      // @ts-ignore
      config
    };
  }
};

// lib/cypress/cypress.ts
var debug10 = (0, import_debug12.default)("currents:cypress");
function runBareCypress(params = {}) {
  const p = {
    ...params,
    ciBuildId: void 0,
    tag: void 0,
    parallel: void 0,
    record: false,
    group: void 0,
    spec: import_lodash8.default.flatten(params.spec).join(",")
  };
  debug10("Running bare Cypress with params %o", p);
  return import_cypress.default.run(p);
}
async function runSpecFile({ spec }, cypressRunOptions) {
  const runAPIOptions = getCypressRunAPIParams(cypressRunOptions);
  const options = {
    ...runAPIOptions,
    config: {
      ...runAPIOptions.config,
      trashAssetsBeforeRuns: false
    },
    env: {
      ...runAPIOptions.env,
      currents_ws: getWSSPort(),
      currents_marker: true
    },
    spec
  };
  debug10("running cypress with options %o", options);
  const result = await import_cypress.default.run(options);
  if (ModuleAPIResults.isFailureResult(result)) {
    warn('Cypress runner failed with message: "%s"', result.message);
    warn(
      "The following spec files will be marked as failed: %s",
      spec.split(",").map((i) => `
 - ${i}`).join("")
    );
  }
  debug10("cypress run result %o", result);
  return result;
}
var runSpecFileSafe = (spec, cypressRunOptions) => safe(
  runSpecFile,
  (error2) => {
    const message = `Cypress runnner crashed with an error:
${error2.message}
${error2.stack}}`;
    debug10("cypress run exception %o", error2);
    warn('Cypress runner crashed: "%s"', message);
    warn(
      "The following spec files will be marked as failed: %s",
      spec.spec.split(",").map((i) => `
 - ${i}`).join("")
    );
    return {
      status: "failed",
      failures: 1,
      message
    };
  },
  () => {
  }
)(spec, cypressRunOptions);

// lib/env.ts
init_cjs_shims();
var isCurrents = () => !!process.env.CURRENTS_ENFORCE_IS_CURRENTS || getAPIBaseUrl() === "https://cy.currents.dev";

// lib/git.ts
init_cjs_shims();
var import_commit_info = __toESM(require("@cypress/commit-info"));
var getGitInfo = async (projectRoot) => {
  const commitInfo = await import_commit_info.default.commitInfo(projectRoot);
  return getCommitDefaults({
    branch: commitInfo.branch,
    remoteOrigin: commitInfo.remote,
    authorEmail: commitInfo.email,
    authorName: commitInfo.author,
    message: commitInfo.message,
    sha: commitInfo.sha
  });
};

// lib/listener.ts
init_cjs_shims();
var import_debug20 = __toESM(require("debug"));

// lib/results/captureHooks.ts
init_cjs_shims();
var import_debug19 = __toESM(require("debug"));

// lib/coverage/index.ts
init_cjs_shims();
var import_promises = __toESM(require("fs/promises"));
var import_path3 = require("path");
var getCoverageFilePath = async (coverageFile = "./.nyc_output/out.json") => {
  const path5 = (0, import_path3.join)(process.cwd(), coverageFile);
  try {
    await import_promises.default.access(path5);
    return {
      path: path5,
      error: false
    };
  } catch (error2) {
    return {
      path: path5,
      error: error2
    };
  }
};

// lib/runner/index.ts
init_cjs_shims();

// lib/runner/cancellable.ts
init_cjs_shims();

// lib/runner/runner.ts
init_cjs_shims();
var import_debug18 = __toESM(require("debug"));

// lib/runner/reportTask.ts
init_cjs_shims();
var import_debug17 = __toESM(require("debug"));

// lib/results/index.ts
init_cjs_shims();

// lib/results/summarize.ts
init_cjs_shims();
var import_lodash9 = __toESM(require("lodash"));

// lib/results/empty.ts
init_cjs_shims();
var emptyStats = {
  totalDuration: 0,
  totalSuites: 0,
  totalPending: 0,
  totalFailed: 0,
  totalSkipped: 0,
  totalPassed: 0,
  totalTests: 0
};
var getDummyFailedTest = (start, error2) => ({
  title: ["Unknown"],
  state: "failed",
  body: "// This test is automatically generated due to execution failure",
  displayError: error2,
  attempts: [
    {
      state: "failed",
      startedAt: start,
      duration: 0,
      videoTimestamp: 0,
      screenshots: [],
      error: {
        name: "CypressExecutionError",
        message: error2,
        stack: "",
        codeFrame: null
      }
    }
  ]
});
function getFailedFakeInstanceResult(configState, {
  specs,
  error: error2
}) {
  const start = (/* @__PURE__ */ new Date()).toISOString();
  const end = (/* @__PURE__ */ new Date()).toISOString();
  return {
    // @ts-ignore
    config: configState.getConfig() ?? {},
    status: "finished",
    startedTestsAt: (/* @__PURE__ */ new Date()).toISOString(),
    endedTestsAt: (/* @__PURE__ */ new Date()).toISOString(),
    totalDuration: 0,
    totalSuites: 1,
    totalFailed: 1,
    totalPassed: 0,
    totalPending: 0,
    totalSkipped: 0,
    totalTests: 1,
    browserName: "unknown",
    browserVersion: "unknown",
    browserPath: "unknown",
    osName: "unknown",
    osVersion: "unknown",
    cypressVersion: "unknown",
    runs: specs.map((s) => ({
      stats: {
        suites: 1,
        tests: 1,
        passes: 0,
        pending: 0,
        skipped: 0,
        failures: 1,
        startedAt: start,
        endedAt: end,
        duration: 0
      },
      reporter: "spec",
      reporterStats: {
        suites: 1,
        tests: 1,
        passes: 0,
        pending: 0,
        failures: 1,
        start,
        end,
        duration: 0
      },
      hooks: [],
      error: error2,
      video: null,
      spec: {
        name: s,
        relative: s,
        absolute: s,
        relativeToCommonRoot: s,
        baseName: s,
        specType: "integration",
        fileExtension: "js",
        fileName: s,
        specFileExtension: "js"
      },
      tests: [getDummyFailedTest(start, error2)],
      shouldUploadVideo: false,
      skippedSpec: false
    }))
  };
}

// lib/results/summarize.ts
var summarizeExecution = (input, config) => {
  if (!input.length) {
    return ModuleAPIResults.getEmptyResult(config);
  }
  const overall = input.reduce(
    (acc, {
      totalDuration,
      totalFailed,
      totalPassed,
      totalPending,
      totalSkipped,
      totalTests,
      totalSuites
    }) => ({
      totalDuration: acc.totalDuration + totalDuration,
      totalSuites: acc.totalSuites + totalSuites,
      totalPending: acc.totalPending + totalPending,
      totalFailed: acc.totalFailed + totalFailed,
      totalSkipped: acc.totalSkipped + totalSkipped,
      totalPassed: acc.totalPassed + totalPassed,
      totalTests: acc.totalTests + totalTests
    }),
    emptyStats
  );
  const firstResult = input[0];
  const startItems = input.map((i) => i.startedTestsAt).sort();
  const endItems = input.map((i) => i.endedTestsAt).sort();
  const runs = input.map((i) => i.runs).flat();
  return {
    ...overall,
    runs,
    startedTestsAt: import_lodash9.default.first(startItems),
    endedTestsAt: import_lodash9.default.last(endItems),
    ...import_lodash9.default.pick(
      firstResult,
      "browserName",
      "browserVersion",
      "browserPath",
      "osName",
      "osVersion",
      "cypressVersion",
      "config"
    ),
    status: "finished"
  };
};

// lib/results/table.ts
init_cjs_shims();
var import_common_path_prefix = __toESM(require("common-path-prefix"));
var import_lodash10 = __toESM(require("lodash"));
var import_path4 = __toESM(require("path"));
var import_pretty_ms2 = __toESM(require("pretty-ms"));
var import_table = require("table");
var failureIcon = red("\u2716");
var successIcon = green("\u2714");
var summaryTable = (r) => {
  const overallSpecCount = r.runs.length;
  const failedSpecsCount = import_lodash10.default.sum(
    r.runs.filter((v) => v.stats.failures + v.stats.skipped > 0).map(() => 1)
  );
  const hasFailed = failedSpecsCount > 0;
  const verdict = hasFailed ? red(`${failedSpecsCount} of ${overallSpecCount} failed`) : overallSpecCount > 0 ? "All specs passed!" : "No specs executed";
  const specs = r.runs.map((r2) => r2.spec.relative);
  const commonPath = getCommonPath(specs);
  const data = r.runs.map((r2) => [
    r2.stats.failures + r2.stats.skipped > 0 ? failureIcon : successIcon,
    stripCommonPath(r2.spec.relative, commonPath),
    gray((0, import_pretty_ms2.default)(r2.stats.duration ?? 0)),
    white(r2.stats.tests ?? 0),
    r2.stats.passes ? green(r2.stats.passes) : gray("-"),
    r2.stats.failures ? red(r2.stats.failures) : gray("-"),
    r2.stats.pending ? cyan(r2.stats.pending) : gray("-"),
    r2.stats.skipped ? red(r2.stats.skipped) : gray("-")
  ]);
  return (0, import_table.table)(
    [
      [
        "",
        // marker
        gray("Spec"),
        "",
        gray("Tests"),
        gray("Passing"),
        gray("Failing"),
        gray("Pending"),
        gray("Skipped")
      ],
      ...data,
      [
        hasFailed ? failureIcon : successIcon,
        // marker
        verdict,
        gray((0, import_pretty_ms2.default)(r.totalDuration ?? 0)),
        overallSpecCount > 0 ? white(r.totalTests ?? 0) : gray("-"),
        r.totalPassed ? green(r.totalPassed) : gray("-"),
        r.totalFailed ? red(r.totalFailed) : gray("-"),
        r.totalPending ? cyan(r.totalPending) : gray("-"),
        r.totalSkipped ? red(r.totalSkipped) : gray("-")
      ]
    ],
    {
      border,
      columnDefault: {
        width: 8
      },
      columns: [
        { alignment: "left", width: 2 },
        { alignment: "left", width: 30 },
        { alignment: "right" },
        { alignment: "right" },
        { alignment: "right" },
        { alignment: "right" },
        { alignment: "right" },
        { alignment: "right" }
      ],
      // singleLine: true,
      drawHorizontalLine: (lineIndex, rowCount) => {
        return lineIndex === 1 || lineIndex === 0 || lineIndex === rowCount - 1 || lineIndex === rowCount;
      },
      drawVerticalLine: (lineIndex, rowCount) => {
        return lineIndex === 0 || rowCount === lineIndex;
      }
    }
  );
};
var border = import_lodash10.default.mapValues(
  {
    topBody: `\u2500`,
    topJoin: `\u252C`,
    topLeft: `  \u250C`,
    topRight: `\u2510`,
    bottomBody: `\u2500`,
    bottomJoin: `\u2534`,
    bottomLeft: `  \u2514`,
    bottomRight: `\u2518`,
    bodyLeft: `  \u2502`,
    bodyRight: `\u2502`,
    bodyJoin: `\u2502`,
    joinBody: `\u2500`,
    joinLeft: `  \u251C`,
    joinRight: `\u2524`,
    joinJoin: `\u253C`
  },
  (v) => gray(v)
);
function getCommonPath(specs) {
  if (specs.length === 0) {
    return "";
  }
  if (specs.length === 1) {
    return import_path4.default.dirname(specs[0]) + import_path4.default.sep;
  }
  return (0, import_common_path_prefix.default)(specs);
}
function stripCommonPath(spec, commonPath) {
  return spec.replace(commonPath, "");
}

// lib/results/uploadResults.ts
init_cjs_shims();
var import_debug16 = __toESM(require("debug"));

// lib/artifacts.ts
init_cjs_shims();
var import_debug14 = __toESM(require("debug"));

// lib/upload.ts
init_cjs_shims();
var import_debug13 = __toESM(require("debug"));
var import_fs3 = __toESM(require("fs"));
var readFile = import_fs3.default.promises.readFile;
var debug11 = (0, import_debug13.default)("currents:upload");
function uploadVideo(file2, url) {
  return uploadFile(file2, url, "video/mp4");
}
function uploadImage(file2, url) {
  return uploadFile(file2, url, "image/png");
}
function uploadJson(file2, url) {
  return uploadFile(file2, url, "application/json");
}
async function uploadFile(file2, url, type) {
  debug11('uploading file "%s" to "%s"', file2, url);
  const f = await readFile(file2);
  await makeRequest({
    url,
    method: "PUT",
    data: f,
    headers: {
      "Content-Type": type,
      "Content-Disposition": `inline`
    }
  });
}

// lib/artifacts.ts
var debug12 = (0, import_debug14.default)("currents:artifacts");
async function uploadArtifacts({
  executionState,
  videoPath,
  videoUploadUrl,
  screenshots,
  screenshotUploadUrls,
  coverageFilePath,
  coverageUploadUrl
}) {
  debug12("uploading artifacts: %o", {
    videoPath,
    videoUploadUrl,
    screenshots,
    screenshotUploadUrls,
    coverageFilePath,
    coverageUploadUrl
  });
  const totalUploads = (videoPath ? 1 : 0) + screenshots.length + (coverageUploadUrl ? 1 : 0);
  if (totalUploads === 0) {
    return;
  }
  if (videoUploadUrl && videoPath) {
    await safe(
      uploadVideo,
      (e) => {
        debug12("failed uploading video %s. Error: %o", videoPath, e);
        executionState.addWarning(
          `Failed uploading video ${videoPath}.
${dim(e)}`
        );
      },
      () => debug12("success uploading", videoPath)
    )(videoPath, videoUploadUrl);
  }
  if (screenshotUploadUrls && screenshotUploadUrls.length) {
    await Promise.all(
      screenshots.map((screenshot) => {
        const url = screenshotUploadUrls.find(
          (urls) => urls.screenshotId === screenshot.screenshotId
        )?.uploadUrl;
        if (!url) {
          debug12(
            "No upload url for screenshot %o, screenshotUploadUrls: %o",
            screenshot,
            screenshotUploadUrls
          );
          executionState.addWarning(
            `No upload URL for screenshot ${screenshot.path}`
          );
          return Promise.resolve();
        }
        return safe(
          uploadImage,
          (e) => {
            debug12(
              "failed uploading screenshot %s. Error: %o",
              screenshot.path,
              e
            );
            executionState.addWarning(
              `Failed uploading screenshot ${screenshot.path}.
${dim(e)}`
            );
          },
          () => debug12("success uploading", screenshot.path)
        )(screenshot.path, url);
      })
    );
  }
  if (coverageUploadUrl && coverageFilePath) {
    await safe(
      uploadJson,
      (e) => {
        debug12(
          "failed uploading coverage file %s. Error: %o",
          coverageFilePath,
          e
        );
        executionState.addWarning(
          `Failed uploading coverage file ${coverageFilePath}.
${dim(e)}`
        );
      },
      () => debug12("success uploading", coverageFilePath)
    )(coverageFilePath, coverageUploadUrl);
  }
}
var uploadStdoutSafe = safe(
  updateInstanceStdout,
  () => {
  },
  () => {
  }
);

// lib/cancellation/index.ts
init_cjs_shims();

// lib/cancellation/cancellation.ts
init_cjs_shims();
var state = {
  cancellationReason: null
};
var setCancellationReason = (reason) => {
  if (state.cancellationReason) {
    return;
  }
  state.cancellationReason = reason;
  getPubSub().emit("run:cancelled" /* RUN_CANCELLED */, reason);
};

// lib/results/api.ts
init_cjs_shims();
var import_debug15 = __toESM(require("debug"));
var debug13 = (0, import_debug15.default)("currents:results");
var getInstanceResultPayload = (runResult, coverageFilePath) => {
  debug13("generating instance result payload from %o", runResult);
  return {
    stats: StandardResultsToAPIResults.getStats(runResult.stats),
    reporterStats: runResult.reporterStats,
    exception: runResult.error ?? null,
    video: !!runResult.video,
    // Did the instance generate a video?
    screenshots: StandardResultsToAPIResults.getAllScreenshots(runResult),
    hasCoverage: !!coverageFilePath,
    tests: (runResult.tests ?? []).map(
      StandardResultsToAPIResults.getTestForResults
    )
  };
};
var getInstanceTestsPayload = (runResult, config) => {
  return {
    // @ts-ignore
    config: {
      ...config.getConfig(),
      // @ts-ignore
      videoUploadOnPasses: config.getConfig()?.videoUploadOnPasses ?? true
    },
    tests: (runResult.tests ?? []).map(
      StandardResultsToAPIResults.getTestForSetTests
    ),
    hooks: runResult.hooks
  };
};
var StandardResultsToAPIResults = class _StandardResultsToAPIResults {
  static getTestAttempt(attempt) {
    return {
      state: attempt.state,
      error: attempt.error,
      wallClockStartedAt: attempt.startedAt,
      wallClockDuration: attempt.duration,
      videoTimestamp: attempt.videoTimestamp
    };
  }
  static getTestForResults(test, index) {
    return {
      displayError: test.displayError,
      state: test.state,
      attempts: (test.attempts ?? []).map(
        _StandardResultsToAPIResults.getTestAttempt
      ),
      clientId: `r${index}`
    };
  }
  static getTestForSetTests(test, index) {
    return {
      body: "redacted",
      title: test.title,
      clientId: `r${index}`
    };
  }
  static getAllScreenshots(run2) {
    return (run2.tests ?? []).flatMap(
      (t, i) => t.attempts.flatMap(
        (a, j) => a.screenshots.map((s) => ({
          ...s,
          testId: `r${i}`,
          testAttemptIndex: j,
          screenshotId: getRandomString()
        }))
      )
    );
  }
  static getStats(stats) {
    return {
      ...stats,
      wallClockDuration: stats.duration,
      wallClockStartedAt: stats.startedAt,
      wallClockEndedAt: stats.endedAt
    };
  }
};

// lib/results/uploadResults.ts
var debug14 = (0, import_debug16.default)("currents:results");
async function getReportResultsTask(instanceId, executionState, configState, stdout2, coverageFilePath) {
  const results = executionState.getInstanceResults(configState, instanceId);
  const run2 = results.runs[0];
  if (!run2) {
    throw new Error("No run found in Cypress results");
  }
  const instanceResults = getInstanceResultPayload(run2, coverageFilePath);
  const instanceTests = getInstanceTestsPayload(run2, configState);
  const { videoUploadUrl, screenshotUploadUrls, coverageUploadUrl, cloud } = await reportResults(instanceId, instanceTests, instanceResults);
  if (cloud?.shouldCancel) {
    debug14("instance %s should cancel", instanceId);
    setCancellationReason(cloud.shouldCancel);
  }
  debug14("instance %s artifact upload instructions %o", instanceId, {
    videoUploadUrl,
    screenshotUploadUrls,
    coverageUploadUrl
  });
  return Promise.all([
    uploadArtifacts({
      executionState,
      videoUploadUrl,
      videoPath: run2.video,
      screenshotUploadUrls,
      screenshots: instanceResults.screenshots,
      coverageUploadUrl,
      coverageFilePath
    }),
    uploadStdoutSafe(instanceId, getInitialOutput() + stdout2)
  ]);
}
async function reportResults(instanceId, instanceTests, instanceResults) {
  debug14("reporting instance %s results...", instanceId);
  if (isCurrents()) {
    return reportInstanceResultsMerged(instanceId, {
      tests: instanceTests,
      results: instanceResults
    });
  }
  await setInstanceTests(instanceId, instanceTests);
  return updateInstanceResults(instanceId, instanceResults);
}

// lib/runner/reportTask.ts
var debug15 = (0, import_debug17.default)("currents:reportTask");
var reportTasks = [];
var createReportTask = (configState, executionState, instanceId) => {
  const instance = executionState.getInstance(instanceId);
  if (!instance) {
    error("Cannot find execution state for instance %s", instanceId);
    return;
  }
  if (instance.reportStartedAt) {
    debug15("Report task already created for instance %s", instanceId);
    return;
  }
  instance.reportStartedAt = /* @__PURE__ */ new Date();
  debug15("Creating report task for instanceId %s", instanceId);
  reportTasks.push(
    getReportResultsTask(
      instanceId,
      executionState,
      configState,
      instance.output ?? "no output captured",
      instance.coverageFilePath
    ).catch(error)
  );
};
var createReportTaskSpec = (configState, executionState, spec) => {
  const i = executionState.getSpec(spec);
  if (!i) {
    error("Cannot find execution state for spec %s", spec);
    return;
  }
  debug15("Creating report task for spec %s", spec);
  return createReportTask(configState, executionState, i.instanceId);
};

// lib/runner/runner.ts
var debug16 = (0, import_debug18.default)("currents:runner");
async function runTillDone(executionState, configState, {
  runId,
  groupId,
  machineId,
  platform: platform2,
  specs: allSpecs
}, params) {
  let hasMore = true;
  while (hasMore) {
    const newTasks = await runBatch(executionState, configState, {
      runMeta: {
        runId,
        groupId,
        machineId,
        platform: platform2
      },
      allSpecs,
      params
    });
    if (!newTasks.length) {
      debug16("No more tasks to run. Uploads queue: %d", reportTasks.length);
      hasMore = false;
      break;
    }
    newTasks.forEach(
      (t) => createReportTask(configState, executionState, t.instanceId)
    );
  }
}
async function runBatch(executionState, configState, {
  runMeta,
  params,
  allSpecs
}) {
  let batch = {
    specs: [],
    claimedInstances: 0,
    totalInstances: 0
  };
  if (isCurrents()) {
    debug16("Getting batched tasks: %d", params.batchSize);
    batch = await createBatchedInstances({
      ...runMeta,
      batchSize: params.batchSize
    });
    debug16("Got batched tasks: %o", batch);
  } else {
    const response = await createInstance(runMeta);
    if (response.spec !== null && response.instanceId !== null) {
      batch.specs.push({
        spec: response.spec,
        instanceId: response.instanceId
      });
    }
    batch.claimedInstances = response.claimedInstances;
    batch.totalInstances = response.totalInstances;
  }
  if (batch.specs.length === 0) {
    return [];
  }
  batch.specs.forEach((i) => executionState.initInstance(i));
  divider();
  info(
    "Running: %s (%d/%d)",
    batch.specs.map((s) => s.spec).join(", "),
    batch.claimedInstances,
    batch.totalInstances
  );
  const batchedResult = await runSpecFileSafe(
    {
      // use absolute paths - user can run the program from a different directory, e.g. nx or a monorepo workspace
      // cypress still report the path relative to the project root
      spec: batch.specs.map((bs) => getSpecAbsolutePath(allSpecs, bs.spec)).join(",")
    },
    params
  );
  title("blue", "Reporting results and artifacts in background...");
  const output = getCapturedOutput();
  batch.specs.forEach((spec) => {
    executionState.setInstanceOutput(spec.instanceId, output);
    const singleSpecResult = getSingleSpecRunResult(spec.spec, batchedResult);
    if (!singleSpecResult) {
      return;
    }
    getPubSub().emit("run:result" /* RUN_RESULT */, {
      specRelative: spec.spec,
      instanceId: spec.instanceId,
      runResult: singleSpecResult
    });
  });
  resetCapture();
  return batch.specs;
}
function getSingleSpecRunResult(specRelative, batchedResult) {
  if (!ModuleAPIResults.isSuccessResult(batchedResult)) {
    return;
  }
  const run2 = batchedResult.runs.find((r) => r.spec.relative === specRelative);
  if (!run2) {
    return;
  }
  return {
    ...batchedResult,
    // @ts-ignore
    runs: [run2]
  };
}
function getSpecAbsolutePath(allSpecs, relative) {
  const absolutePath = allSpecs.find((i) => i.relative === relative)?.absolute;
  if (!absolutePath) {
    warn(
      'Cannot find absolute path for spec. Spec: "%s", candidates: %o',
      relative,
      allSpecs
    );
    throw new Error(`Cannot find absolute path for spec`);
  }
  return absolutePath;
}

// lib/runner/cancellable.ts
var cancellable = null;
function onRunCancelled(reason) {
  warn(
    `Run cancelled: %s. Waiting for uploads to complete and stopping execution...`,
    reason
  );
  cancellable?.cancel();
}
async function runTillDoneOrCancelled(...args) {
  return new Promise((_resolve, _reject) => {
    cancellable = new BPromise((resolve, reject, onCancel) => {
      if (!onCancel) {
        _reject(new Error("BlueBird is misconfigured: onCancel is undefined"));
        return;
      }
      onCancel(() => _resolve(void 0));
      runTillDone(...args).then(
        () => {
          resolve();
          _resolve(void 0);
        },
        (error2) => {
          reject();
          _reject(error2);
        }
      );
    });
    getPubSub().addListener("run:cancelled" /* RUN_CANCELLED */, onRunCancelled);
  }).finally(() => {
    getPubSub().removeListener("run:cancelled" /* RUN_CANCELLED */, onRunCancelled);
  });
}

// lib/results/captureHooks.ts
var debug17 = (0, import_debug19.default)("currents:events");
function handleScreenshotEvent(screenshot, executionState) {
  const data = {
    ...screenshot,
    testId: executionState.getCurrentTestID(),
    height: screenshot.dimensions.height,
    width: screenshot.dimensions.width
  };
  executionState.addScreenshotsData(data);
}
function handleTestBefore(testAttempt, executionState) {
  const parsed = JSON.parse(testAttempt);
  executionState.setCurrentTestID(parsed.id);
}
function handleTestAfter(testAttempt, executionState) {
  const test = JSON.parse(testAttempt);
  executionState.addAttemptsData(test);
}
async function handleSpecAfter({
  executionState,
  configState,
  spec,
  results,
  experimentalCoverageRecording = false
}) {
  debug17("after:spec %s %o", spec.relative, results);
  executionState.setSpecAfter(
    spec.relative,
    SpecAfterResult.getSpecAfterStandard(results, executionState)
  );
  executionState.setSpecOutput(spec.relative, getCapturedOutput());
  const config = configState.getConfig();
  if (experimentalCoverageRecording) {
    const config2 = configState.getConfig();
    const { path: path5, error: error2 } = await getCoverageFilePath(
      config2?.env?.coverageFile
    );
    if (!error2) {
      executionState.setSpecCoverage(spec.relative, path5);
    } else {
      executionState.addWarning(
        `Error reading coverage file "${path5}". Coverage recording will be skipped.
${dim(
          error2
        )}`
      );
    }
  }
  createReportTaskSpec(configState, executionState, spec.relative);
}

// lib/listener.ts
var debug18 = (0, import_debug20.default)("currents:events");
function listenToEvents(configState, executionState, experimentalCoverageRecording = false) {
  getPubSub().on(
    "run:result" /* RUN_RESULT */,
    ({
      instanceId,
      runResult,
      specRelative
    }) => {
      debug18("%s %s: %o", "run:result" /* RUN_RESULT */, instanceId, runResult);
      executionState.setInstanceResult(
        instanceId,
        ModuleAPIResults.getStandardResult(runResult, executionState)
      );
    }
  );
  getPubSub().on("test:after:run" /* TEST_AFTER_RUN */, (payload) => {
    debug18("%s %o", "test:after:run" /* TEST_AFTER_RUN */, payload);
    handleTestAfter(payload, executionState);
  });
  getPubSub().on("test:before:run" /* TEST_BEFORE_RUN */, (payload) => {
    debug18("%s %o", "test:before:run" /* TEST_BEFORE_RUN */, payload);
    handleTestBefore(payload, executionState);
  });
  getPubSub().on(
    "after:screenshot" /* AFTER_SCREENSHOT */,
    (screenshot) => {
      debug18("%s %o", "after:screenshot" /* AFTER_SCREENSHOT */, screenshot);
      handleScreenshotEvent(screenshot, executionState);
    }
  );
  getPubSub().on(
    "after:spec" /* AFTER_SPEC */,
    async ({
      spec,
      results
    }) => {
      await handleSpecAfter({
        spec,
        results,
        executionState,
        configState,
        experimentalCoverageRecording
      });
    }
  );
}

// lib/platform/index.ts
init_cjs_shims();

// lib/platform/browser.ts
init_cjs_shims();
var import_debug21 = __toESM(require("debug"));
var debug19 = (0, import_debug21.default)("currents:browser");
function guessBrowser(browser, availableBrowsers = []) {
  debug19(
    "guessing browser from '%s', available browsers: %o",
    browser,
    availableBrowsers
  );
  let result = availableBrowsers.find((b) => b.name === browser);
  if (result) {
    debug19("identified browser by name: %o", result);
    return {
      browserName: result.displayName,
      browserVersion: result.version
    };
  }
  result = availableBrowsers.find((b) => b.path === browser);
  if (result) {
    debug19("identified browser by path: %o", result);
    return {
      browserName: result.displayName ?? result.name,
      browserVersion: result.version
    };
  }
  warn("Unable to identify browser name and version");
  return {
    browserName: "unknown",
    browserVersion: "unknown"
  };
}

// lib/platform/platform.ts
init_cjs_shims();
var import_debug22 = __toESM(require("debug"));
var import_getos = __toESM(require("getos"));
var import_os = require("os");
var import_util2 = require("util");
var debug20 = (0, import_debug22.default)("currents:platform");
var getOsVersion = async () => {
  if ((0, import_os.platform)() === "linux") {
    try {
      const linuxOs = await (0, import_util2.promisify)(import_getos.default)();
      if ("dist" in linuxOs && "release" in linuxOs) {
        return [linuxOs.dist, linuxOs.release].join(" - ");
      } else {
        return (0, import_os.release)();
      }
    } catch {
      return (0, import_os.release)();
    }
  }
  return (0, import_os.release)();
};
var getPlatformInfo = async () => {
  const osVersion = await getOsVersion();
  const result = {
    osName: (0, import_os.platform)(),
    osVersion,
    osCpus: (0, import_os.cpus)(),
    osMemory: {
      free: (0, import_os.freemem)(),
      total: (0, import_os.totalmem)()
    }
  };
  debug20("platform info: %o", result);
  return result;
};

// lib/platform/index.ts
async function getPlatform({
  browser,
  config
}) {
  return {
    ...await getPlatformInfo(),
    ...guessBrowser(browser ?? "electron", config.resolved?.browsers)
  };
}

// lib/shutdown.ts
init_cjs_shims();
async function shutdown() {
  await stopWSS();
}

// lib/specMatcher/index.ts
init_cjs_shims();

// lib/specMatcher/getSpecFiles.ts
init_cjs_shims();

// lib/specMatcher/specMatcher.ts
init_cjs_shims();
var import_debug23 = __toESM(require("debug"));
var import_path6 = __toESM(require("path"));
var import_common_path_prefix2 = __toESM(require("common-path-prefix"));
var import_globby = __toESM(require("globby"));
var import_lodash11 = __toESM(require("lodash"));
var import_os2 = __toESM(require("os"));

// lib/utils.ts
init_cjs_shims();
var import_path5 = __toESM(require("path"));
function toArray(val) {
  return val ? typeof val === "string" ? [val] : val : [];
}
function toPosix(file2, sep = import_path5.default.sep) {
  return file2.split(sep).join(import_path5.default.posix.sep);
}

// lib/specMatcher/specMatcher.ts
var debug21 = (0, import_debug23.default)("currents:specs");
async function findSpecs({
  projectRoot,
  testingType,
  specPattern,
  configSpecPattern,
  excludeSpecPattern,
  additionalIgnorePattern
}) {
  configSpecPattern = toArray(configSpecPattern);
  specPattern = toArray(specPattern);
  excludeSpecPattern = toArray(excludeSpecPattern) || [];
  additionalIgnorePattern = toArray(additionalIgnorePattern) || [];
  debug21("exploring spec files for execution %O", {
    testingType,
    projectRoot,
    specPattern,
    configSpecPattern,
    excludeSpecPattern,
    additionalIgnorePattern
  });
  if (!specPattern || !configSpecPattern) {
    throw Error("Could not find glob patterns for exploring specs");
  }
  let specAbsolutePaths = await getFilesByGlob(projectRoot, specPattern, {
    absolute: true,
    ignore: [...excludeSpecPattern, ...additionalIgnorePattern]
  });
  if (!import_lodash11.default.isEqual(specPattern, configSpecPattern)) {
    const defaultSpecAbsolutePaths = await getFilesByGlob(
      projectRoot,
      configSpecPattern,
      {
        absolute: true,
        ignore: [...excludeSpecPattern, ...additionalIgnorePattern]
      }
    );
    specAbsolutePaths = import_lodash11.default.intersection(
      specAbsolutePaths,
      defaultSpecAbsolutePaths
    );
  }
  return matchedSpecs({
    projectRoot,
    testingType,
    specAbsolutePaths,
    specPattern
  });
}
async function getFilesByGlob(projectRoot, glob, globOptions) {
  const workingDirectoryPrefix = import_path6.default.join(projectRoot, import_path6.default.sep);
  const globs = [].concat(glob).map(
    (globPattern) => globPattern.startsWith("./") ? globPattern.replace("./", "") : globPattern
  ).map((globPattern) => {
    if (globPattern.startsWith(workingDirectoryPrefix)) {
      return globPattern.replace(workingDirectoryPrefix, "");
    }
    return globPattern;
  });
  if (import_os2.default.platform() === "win32") {
    debug21("updating glob patterns to POSIX");
    for (const i in globs) {
      const cur = globs[i];
      if (!cur)
        throw new Error("undefined glob received");
      globs[i] = toPosix(cur);
    }
  }
  try {
    debug21("globbing pattern(s): %o", globs);
    debug21("within directory: %s", projectRoot);
    return matchGlobs(globs, {
      onlyFiles: true,
      absolute: true,
      cwd: projectRoot,
      ...globOptions,
      ignore: (globOptions?.ignore ?? []).concat("**/node_modules/**")
    });
  } catch (e) {
    debug21("error in getFilesByGlob %o", e);
    return [];
  }
}
var matchGlobs = async (globs, globbyOptions) => {
  return await (0, import_globby.default)(globs, globbyOptions);
};
function matchedSpecs({
  projectRoot,
  testingType,
  specAbsolutePaths
}) {
  debug21("found specs %o", specAbsolutePaths);
  let commonRoot = "";
  if (specAbsolutePaths.length === 1) {
    commonRoot = import_path6.default.dirname(specAbsolutePaths[0]);
  } else {
    commonRoot = (0, import_common_path_prefix2.default)(specAbsolutePaths);
  }
  return specAbsolutePaths.map(
    (absolute) => transformSpec({
      projectRoot,
      absolute,
      testingType,
      commonRoot,
      platform: import_os2.default.platform(),
      sep: import_path6.default.sep
    })
  );
}
function transformSpec({
  projectRoot,
  absolute,
  testingType,
  commonRoot,
  platform: platform2,
  sep
}) {
  if (platform2 === "win32") {
    absolute = toPosix(absolute, sep);
    projectRoot = toPosix(projectRoot, sep);
  }
  const relative = import_path6.default.relative(projectRoot, absolute);
  const parsedFile = import_path6.default.parse(absolute);
  const fileExtension = import_path6.default.extname(absolute);
  const specFileExtension = [".spec", ".test", "-spec", "-test", ".cy"].map((ext) => ext + fileExtension).find((ext) => absolute.endsWith(ext)) || fileExtension;
  const parts = absolute.split(projectRoot);
  let name = parts[parts.length - 1] || "";
  if (name.startsWith("/")) {
    name = name.slice(1);
  }
  const LEADING_SLASH = /^\/|/g;
  const relativeToCommonRoot = absolute.replace(commonRoot, "").replace(LEADING_SLASH, "");
  return {
    fileExtension,
    baseName: parsedFile.base,
    fileName: parsedFile.base.replace(specFileExtension, ""),
    specFileExtension,
    relativeToCommonRoot,
    specType: testingType === "component" ? "component" : "integration",
    name,
    relative,
    absolute
  };
}

// lib/specMatcher/getSpecFiles.ts
var getSpecFiles = async ({
  config,
  params
}) => {
  const specPattern = getSpecPattern(config.specPattern, params.spec);
  const specs = await findSpecs({
    // https://docs.cypress.io/guides/guides/command-line#cypress-run-spec-lt-spec-gt
    projectRoot: params.project ?? config.projectRoot,
    testingType: params.testingType,
    specPattern,
    configSpecPattern: config.specPattern,
    excludeSpecPattern: config.excludeSpecPattern,
    additionalIgnorePattern: config.additionalIgnorePattern
  });
  if (specs.length === 0) {
    warn(
      "Found no spec files. Was looking for spec files that match both configSpecPattern and specPattern relative to projectRoot. Configuration: %O",
      {
        projectRoot: config.projectRoot,
        specPattern,
        configSpecPattern: config.specPattern,
        excludeSpecPattern: [
          config.excludeSpecPattern,
          config.additionalIgnorePattern
        ].flat(2),
        testingType: params.testingType
      }
    );
  }
  return { specs, specPattern };
};
function getSpecPattern(configPattern, explicit) {
  return explicit || configPattern;
}

// lib/state/index.ts
init_cjs_shims();

// lib/state/config.ts
init_cjs_shims();
var ConfigState = class {
  constructor() {
    this._config = void 0;
  }
  setConfig(c) {
    this._config = c;
  }
  getConfig() {
    return this._config;
  }
};

// lib/state/execution.ts
init_cjs_shims();

// lib/results/mapResult.ts
init_cjs_shims();
var SpecAfterToModuleAPIMapper = class _SpecAfterToModuleAPIMapper {
  static getTestAttempt(attempt, screenshots) {
    return {
      ...attempt,
      duration: attempt.wallClockDuration,
      startedAt: attempt.wallClockStartedAt,
      screenshots
    };
  }
  static getTest(t, screenshots) {
    return {
      ...t,
      attempts: t.attempts.map(
        (a, i) => _SpecAfterToModuleAPIMapper.getTestAttempt(
          a,
          screenshots.filter(
            (s) => s.testId === t.testId && s.testAttemptIndex === i
          )
        )
      )
    };
  }
  static convert(specAfterResult, configState) {
    const stats = {
      duration: specAfterResult.stats.wallClockDuration,
      endedAt: specAfterResult.stats.wallClockEndedAt,
      startedAt: specAfterResult.stats.wallClockStartedAt,
      failures: specAfterResult.stats.failures ?? 0,
      passes: specAfterResult.stats.passes ?? 0,
      pending: specAfterResult.stats.pending ?? 0,
      skipped: specAfterResult.stats.skipped ?? 0,
      suites: specAfterResult.stats.suites ?? 0,
      tests: specAfterResult.stats.tests ?? 0
    };
    return {
      status: "finished",
      // @ts-ignore
      config: configState.getConfig(),
      totalDuration: stats.duration,
      totalSuites: stats.suites,
      totalTests: stats.tests,
      totalFailed: stats.failures,
      totalPassed: stats.passes,
      totalPending: stats.pending,
      totalSkipped: stats.skipped ?? 0,
      startedTestsAt: stats.startedAt,
      endedTestsAt: stats.endedAt,
      runs: [
        {
          stats,
          reporter: specAfterResult.reporter,
          reporterStats: specAfterResult.reporterStats ?? null,
          spec: specAfterResult.spec,
          error: specAfterResult.error,
          video: specAfterResult.video,
          // @ts-ignore
          shouldUploadVideo: true,
          // not really used
          // @ts-ignore
          // wrong typedef for CypressCommandLine.CypressRunResult
          // actual HookName is "before all" | "before each" | "after all" | "after each"
          hooks: specAfterResult.hooks,
          tests: (specAfterResult.tests ?? []).map(
            (t) => _SpecAfterToModuleAPIMapper.getTest(t, specAfterResult.screenshots)
          )
        }
      ]
    };
  }
  static backfillException(result) {
    return {
      ...result,
      runs: result.runs.map(_SpecAfterToModuleAPIMapper.backfillExceptionRun)
    };
  }
  static backfillExceptionRun(run2) {
    if (!run2.error) {
      return run2;
    }
    return {
      ...run2,
      tests: [getFakeTestFromException(run2.error, run2.stats)]
    };
  }
};
function getFakeTestFromException(error2, stats) {
  return {
    title: ["Unknown"],
    body: "",
    displayError: error2.split("\n")[0],
    state: "failed",
    attempts: [
      {
        state: "failed",
        duration: 0,
        error: {
          name: "Error",
          message: error2.split("\n")[0],
          stack: error2,
          codeFrame: null
        },
        screenshots: [],
        startedAt: stats.startedAt,
        videoTimestamp: 0
      }
    ]
  };
}

// lib/state/execution.ts
var import_debug24 = __toESM(require("debug"));
var debug22 = (0, import_debug24.default)("currents:state");
var ExecutionState = class {
  constructor() {
    this.warnings = /* @__PURE__ */ new Set();
    this.attemptsData = [];
    this.screenshotsData = [];
    this.state = {};
  }
  getWarnings() {
    return this.warnings;
  }
  addWarning(warning) {
    this.warnings.add(warning);
  }
  getResults(configState) {
    return Object.values(this.state).map(
      (i) => this.getInstanceResults(configState, i.instanceId)
    );
  }
  getInstance(instanceId) {
    return this.state[instanceId];
  }
  getSpec(spec) {
    return Object.values(this.state).find((i) => i.spec === spec);
  }
  initInstance({
    instanceId,
    spec
  }) {
    debug22('Init execution state for "%s"', spec);
    this.state[instanceId] = {
      instanceId,
      spec,
      createdAt: /* @__PURE__ */ new Date()
    };
  }
  setSpecBefore(spec) {
    const i = this.getSpec(spec);
    if (!i) {
      warn('Cannot find execution state for spec "%s"', spec);
      return;
    }
    i.specBefore = /* @__PURE__ */ new Date();
  }
  setSpecCoverage(spec, coverageFilePath) {
    const i = this.getSpec(spec);
    if (!i) {
      warn('Cannot find execution state for spec "%s"', spec);
      return;
    }
    debug22("Experimental: coverageFilePath was set");
    i.coverageFilePath = coverageFilePath;
  }
  setSpecAfter(spec, results) {
    const i = this.getSpec(spec);
    if (!i) {
      warn('Cannot find execution state for spec "%s"', spec);
      return;
    }
    i.specAfter = /* @__PURE__ */ new Date();
    i.specAfterResults = results;
  }
  setSpecOutput(spec, output) {
    const i = this.getSpec(spec);
    if (!i) {
      warn('Cannot find execution state for spec "%s"', spec);
      return;
    }
    this.setInstanceOutput(i.instanceId, output);
  }
  setInstanceOutput(instanceId, output) {
    const i = this.state[instanceId];
    if (!i) {
      warn('Cannot find execution state for instance "%s"', instanceId);
      return;
    }
    if (i.output) {
      debug22('Instance "%s" already has output', instanceId);
      return;
    }
    i.output = output;
  }
  setInstanceResult(instanceId, runResults) {
    const i = this.state[instanceId];
    if (!i) {
      warn('Cannot find execution state for instance "%s"', instanceId);
      return;
    }
    i.runResults = {
      ...runResults,
      status: "finished"
    };
    i.runResultsReportedAt = /* @__PURE__ */ new Date();
  }
  getInstanceResults(configState, instanceId) {
    const i = this.getInstance(instanceId);
    if (!i) {
      error('Cannot find execution state for instance "%s"', instanceId);
      return getFailedFakeInstanceResult(configState, {
        specs: ["unknown"],
        error: `[currents] Error while processing cypress results for instance ${instanceId}. See the console output for details.`
      });
    }
    if (i.specAfterResults) {
      debug22('Using spec:after results for %s "%s"', instanceId, i.spec);
      return SpecAfterToModuleAPIMapper.backfillException(
        SpecAfterToModuleAPIMapper.convert(i.specAfterResults, configState)
      );
    }
    if (i.runResults) {
      debug22('Using runResults for %s "%s"', instanceId, i.spec);
      return SpecAfterToModuleAPIMapper.backfillException(i.runResults);
    }
    debug22('No results detected for "%s"', i.spec);
    return getFailedFakeInstanceResult(configState, {
      specs: [i.spec],
      error: `No results detected for the spec file. That usually happens because of cypress crash. See the console output for details.`
    });
  }
  addAttemptsData(attemptDetails) {
    this.attemptsData.push(attemptDetails);
  }
  getAttemptsData() {
    return this.attemptsData;
  }
  addScreenshotsData(screenshotsData) {
    this.screenshotsData.push(screenshotsData);
  }
  getScreenshotsData() {
    return this.screenshotsData;
  }
  setCurrentTestID(testID) {
    this.currentTestID = testID;
  }
  getCurrentTestID() {
    return this.currentTestID;
  }
};

// lib/warnings.ts
init_cjs_shims();
var import_chalk2 = __toESM(require("chalk"));
var import_plur = __toESM(require("plur"));
function printWarnings2(executionState) {
  const warnings = Array.from(executionState.getWarnings());
  if (warnings.length > 0) {
    warn(
      `${warnings.length} ${(0, import_plur.default)(
        "Warning",
        warnings.length
      )} encountered during the execution:
${warnings.map(
        (w, i) => `
${import_chalk2.default.yellow(`[${i + 1}/${warnings.length}]`)} ${w}`
      ).join("\n")}`
    );
  }
}

// lib/run.ts
var debug23 = (0, import_debug25.default)("currents:run");
async function run(params = {}) {
  const executionState = new ExecutionState();
  const configState = new ConfigState();
  activateDebug(params.cloudDebug);
  debug23("run params %o", params);
  params = preprocessParams(params);
  debug23("params after preprocess %o", params);
  if (isOffline(params)) {
    info(`Skipping cloud orchestration because --record is set to false`);
    return runBareCypress(params);
  }
  const validatedParams = await validateParams(params);
  setAPIBaseUrl(validatedParams.cloudServiceUrl);
  if (!isCurrents()) {
    console.log(getLegalNotice());
  }
  const {
    recordKey,
    projectId,
    group,
    parallel,
    ciBuildId,
    tag,
    testingType,
    batchSize,
    autoCancelAfterFailures,
    experimentalCoverageRecording
  } = validatedParams;
  const config = await getMergedConfig(validatedParams);
  configState.setConfig(config?.resolved);
  const { specs, specPattern } = await getSpecFiles({
    config,
    params: validatedParams
  });
  if (specs.length === 0) {
    return;
  }
  const platform2 = await getPlatform({
    config,
    browser: validatedParams.browser
  });
  info(`asdfghjkl version: ${dim(_currentsVersion)}`);
  info(`Cypress version: ${dim(_cypressVersion)}`);
  info("Discovered %d spec files", specs.length);
  info(
    `Tags: ${tag.length > 0 ? tag.join(",") : false}; Group: ${group ?? false}; Parallel: ${parallel ?? false}; Batch Size: ${batchSize}`
  );
  info("Connecting to cloud orchestration service...");
  const run2 = await createRun({
    ci: getCI(ciBuildId),
    specs: specs.map((spec) => spec.relative),
    commit: await getGitInfo(config.projectRoot),
    group,
    platform: platform2,
    parallel: parallel ?? false,
    ciBuildId,
    projectId,
    recordKey,
    specPattern: [specPattern].flat(2),
    tags: tag,
    testingType,
    batchSize,
    autoCancelAfterFailures,
    coverageEnabled: experimentalCoverageRecording
  });
  setRunId(run2.runId);
  info("\u{1F3A5} Run URL:", bold(run2.runUrl));
  cutInitialOutput();
  await startWSS();
  listenToEvents(
    configState,
    executionState,
    config.experimentalCoverageRecording
  );
  await runTillDoneOrCancelled(
    executionState,
    configState,
    {
      runId: run2.runId,
      groupId: run2.groupId,
      machineId: run2.machineId,
      platform: platform2,
      specs
    },
    validatedParams
  );
  divider();
  await Promise.allSettled(reportTasks);
  const _summary = summarizeExecution(
    executionState.getResults(configState),
    config
  );
  title("white", "Cloud Run Finished");
  console.log(summaryTable(_summary));
  printWarnings2(executionState);
  info("\n\u{1F3C1} Recorded Run:", bold(run2.runUrl));
  await shutdown();
  spacer();
  return {
    ..._summary,
    runUrl: run2.runUrl
  };
}

// bin/lib/index.ts
init_cjs_shims();

// bin/lib/cli.ts
init_cjs_shims();
var import_debug27 = __toESM(require("debug"));

// bin/lib/parser.ts
init_cjs_shims();
var import_lodash12 = __toESM(require("lodash"));
var import_node_assert = __toESM(require("assert"));
var nestedObjectsInCurlyBracesRe = /\{(.+?)\}/g;
var nestedArraysInSquareBracketsRe = /\[(.+?)\]/g;
var everythingAfterFirstEqualRe = /=(.*)/;
var sanitizeAndConvertNestedArgs = (str, argName) => {
  if (!str) {
    return;
  }
  (0, import_node_assert.default)(import_lodash12.default.isString(argName) && argName.trim() !== "");
  try {
    if (typeof str === "object") {
      return str;
    }
    const parsed = tryJSONParse(str);
    if (parsed) {
      return parsed;
    }
    return import_lodash12.default.chain(str).replace(nestedObjectsInCurlyBracesRe, commasToPipes).replace(nestedArraysInSquareBracketsRe, commasToPipes).split(",").map((pair) => {
      return pair.split(everythingAfterFirstEqualRe);
    }).fromPairs().mapValues(JSONOrCoerce).value();
  } catch (err) {
    error("could not parse CLI option '%s' value: %s", argName, str);
    error("error %o", err);
    return void 0;
  }
};
var tryJSONParse = (str) => {
  try {
    return JSON.parse(str) === Infinity ? null : JSON.parse(str);
  } catch (err) {
    return null;
  }
};
var commasToPipes = (match5) => {
  return match5.split(",").join("|");
};
var pipesToCommas = (str) => {
  return str.split("|").join(",");
};
var JSONOrCoerce = (str) => {
  const parsed = tryJSONParse(str);
  if (parsed) {
    return parsed;
  }
  str = pipesToCommas(str);
  const parsed2 = tryJSONParse(str);
  if (parsed2) {
    return parsed2;
  }
  return coerce(str);
};
var coerce = (value) => {
  const num = import_lodash12.default.toNumber(value);
  if (import_lodash12.default.invoke(num, "toString") === value) {
    return num;
  }
  const bool = toBoolean(value);
  if (import_lodash12.default.invoke(bool, "toString") === value) {
    return bool;
  }
  const obj = tryJSONParse(value);
  if (obj && typeof obj === "object") {
    return obj;
  }
  const arr = import_lodash12.default.toArray(value);
  if (import_lodash12.default.invoke(arr, "toString") === value) {
    return arr;
  }
  return value;
};
var toBoolean = (value) => {
  switch (value) {
    case "true":
      return true;
    case "false":
      return false;
    default:
      return value;
  }
};

// bin/lib/program.ts
init_cjs_shims();
var import_extra_typings = __toESM(require_extra_typings());
var createProgram = (command = new import_extra_typings.Command()) => command.name("asdfghjkl").description(
  `
Run Cypress tests on CI using https://currents.dev or https://sorry-cypress.dev as an orchestration and reporting service

${getLegalNotice()}
      `
).option(
  "-b, --browser <browser-name-or-path>",
  "runs Cypress in the browser with the given name; if a filesystem path is supplied, Cypress will attempt to use the browser at that path"
).option(
  "--ci-build-id <id>",
  "the unique identifier for a run, this value is automatically detected for most CI providers"
).addOption(
  new import_extra_typings.Option("--component", "runs Cypress component test").default(false).implies({
    e2e: false
  })
).option(
  "-c, --config <config>",
  "sets Cypress configuration values. separate multiple values with a comma. overrides any value in cypress.config.{js,ts,mjs,cjs}"
).option(
  "-e, --env <env>",
  "sets environment variables. separate multiple values with a comma. overrides any value in cypress.config.{js,ts,mjs,cjs} or cypress.env.json"
).option(
  "-C, --config-file <config-file>",
  'specify Cypress config file, path to script file where Cypress configuration values are set. defaults to "cypress.config.{js,ts,mjs,cjs}"'
).addOption(new import_extra_typings.Option("--e2e", "runs end to end tests").default(true)).option("--group <name>", "a named group for recorded runs in Currents").addOption(
  new import_extra_typings.Option(
    "-k, --key <record-key>",
    "your secret Record Key obtained from Currents. you can omit this if you set a CURRENTS_RECORD_KEY environment variable"
  ).env("CURRENTS_RECORD_KEY")
).option(
  "--parallel",
  "enables concurrent runs and automatic load balancing of specs across multiple machines or processes",
  false
).addOption(
  new import_extra_typings.Option(
    "-p, --port <number>",
    "runs Cypress on a specific port. overrides any value in cypress.config.{js,ts,mjs,cjs}"
  ).argParser((i) => parseInt(i, 10))
).option(
  "-P, --project <project-path>",
  "path to your Cypress project root location - defaults to the current working directory"
).option("-q, --quiet", "suppress verbose output from Cypress").addOption(
  new import_extra_typings.Option(
    "--record [bool]",
    "records the run and sends test results, screenshots and videos to Currents"
  ).default(true).argParser((i) => i === "false" ? false : true)
).option(
  "-r, --reporter <reporter>",
  'use a specific mocha reporter for Cypress, pass a path to use a custom reporter, defaults to "spec"'
).option(
  "-o, --reporter-options <reporter-options>",
  'options for the mocha reporter. defaults to "null"'
).addOption(
  new import_extra_typings.Option(
    "-s, --spec <spec-pattern>",
    'define specific glob pattern for running the spec file(s), Defaults to the "specMatch" entry from the "cypress.config.{js,ts,mjs,cjs}" file'
  ).argParser(parseCommaSeparatedList)
).option(
  "-t, --tag <tag>",
  "comma-separated tag(s) for recorded runs in Currents",
  parseCommaSeparatedList
).addOption(
  new import_extra_typings.Option(
    "--auto-cancel-after-failures <number | false>",
    "Automatically abort the run after the specified number of failed tests. Overrides the default project settings. If set, must be a positive integer or 'false' to disable (Currents-only)"
  ).argParser(parseAutoCancelFailures)
).addOption(
  new import_extra_typings.Option("--headed [bool]", "Run cypress in headed mode").default(false).argParser((i) => i === "false" ? false : true)
).addOption(
  new import_extra_typings.Option(
    "--cloud-config-file <path>",
    "Specify the config file for asdfghjkl, defaults to 'currents.config.js' and will be searched in the project root, unless an aboslue path is provided"
  ).default(void 0)
).addOption(
  new import_extra_typings.Option(
    `--cloud-debug [true | string]`,
    `Enable debug mode for asdfghjkl, this will print out logs for troubleshooting. Values: [true | ${Object.values(
      DebugMode
    ).join(
      " | "
    )}]. Use comma to separate multiple values, e.g. --cloud-debug commit-info,currents`
  ).argParser(parseCommaSeparatedList).default(void 0)
).addOption(
  new import_extra_typings.Option(
    `--experimental-coverage-recording [bool]`,
    `Enable recording coverage results, specify the "coverageFile" Cypress environment variable for a custom coverage file, default is "./.nyc_output/out.json"`
  ).default(void 0).argParser((i) => i === "false" ? false : true)
);
var program = createProgram();
function parseCommaSeparatedList(value, previous = []) {
  if (value) {
    return previous.concat(value.split(",").map((t) => t.trim()));
  }
  return previous;
}
function parseAutoCancelFailures(value) {
  if (value === "false") {
    return false;
  }
  const parsedValue = parseInt(value, 10);
  if (isNaN(parsedValue) || parsedValue < 1) {
    throw new Error(
      "Invalid argument provided. Must be a positive integer or 'false'."
    );
  }
  return parsedValue;
}

// bin/lib/cli.ts
var debug24 = (0, import_debug27.default)("currents:cli");
function parseCLIOptions(_program = program, ...args) {
  const opts = _program.parse(...args).opts();
  activateDebug(opts.cloudDebug);
  debug24("parsed CLI flags %o", opts);
  const { e2e, component } = opts;
  if (e2e && component) {
    _program.error("Cannot use both e2e and component options");
  }
  return getRunParametersFromCLI(opts);
}
function getRunParametersFromCLI(cliOptions) {
  const { component, e2e, ...restOptions } = cliOptions;
  const testingType = component ? "component" : "e2e";
  const result = {
    ...restOptions,
    config: sanitizeAndConvertNestedArgs(cliOptions.config, "config"),
    env: sanitizeAndConvertNestedArgs(cliOptions.env, "env"),
    reporterOptions: sanitizeAndConvertNestedArgs(
      cliOptions.reporterOptions,
      "reporterOptions"
    ),
    testingType,
    recordKey: cliOptions.key
  };
  debug24("parsed run params: %o", result);
  return result;
}

// bin/cli.ts
async function main() {
  return run(parseCLIOptions());
}
main().then((result) => {
  if (!result) {
    process.exit(1);
  }
  if (result.status === "failed") {
    process.exit(1);
  }
  const overallFailed = result.totalFailed + result.totalSkipped;
  if (overallFailed > 0) {
    process.exit(overallFailed);
  }
  process.exit(0);
}).catch((err) => {
  if (err instanceof ValidationError) {
    program.error(withError(err.toString()));
  } else {
    console.error(err);
  }
  process.exit(1);
});
/*! @preserve

### MIT

Parts of this code was copied from https://github.com/cypress-io/cypress and is subject to MIT license.

MIT License

Copyright (c) 2022 Cypress.io

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzdXAvYXNzZXRzL2Nqc19zaGltcy5qcyIsICIuLi8uLi9iaW4vbGliL0Bjb21tYW5kZXItanMvZXh0cmEtdHlwaW5ncy9pbmRleC5qcyIsICIuLi8uLi9iaW4vY2xpLnRzIiwgIi4uLy4uL2xpYi9lcnJvcnMudHMiLCAiLi4vLi4vbGliL2xvZy50cyIsICIuLi8uLi9saWIvcnVuLnRzIiwgIi4uLy4uL2xpYi9pbml0LnRzIiwgIi4uLy4uL2xpYi9yZXF1aXJlLnRzIiwgIi4uLy4uL2xpYi9zdGRvdXQudHMiLCAiLi4vLi4vbGliL3dzL2luZGV4LnRzIiwgIi4uLy4uL2xpYi93cy93cy50cyIsICIuLi8uLi9saWIvcHVic3ViL2luZGV4LnRzIiwgIi4uLy4uL2xpYi9wdWJzdWIvZXZlbnRzLnRzIiwgIi4uLy4uL2xpYi9wdWJzdWIvcHVic3ViLnRzIiwgIi4uLy4uL2xpYi9jYXB0dXJlLnRzIiwgIi4uLy4uL2xpYi9zdGF0ZS9nbG9iYWwudHMiLCAiLi4vLi4vbGVnYWwudHMiLCAiLi4vLi4vbGliL2FwaS9pbmRleC50cyIsICIuLi8uLi9saWIvYXBpL2FwaS50cyIsICIuLi8uLi9saWIvaHR0cENsaWVudC9pbmRleC50cyIsICIuLi8uLi9saWIvaHR0cENsaWVudC9jb25maWcudHMiLCAiLi4vLi4vbGliL2h0dHBDbGllbnQvaHR0cENsaWVudC50cyIsICIuLi8uLi9saWIvY29uZmlnL2luZGV4LnRzIiwgIi4uLy4uL2xpYi9jb25maWcvY29uZmlnLnRzIiwgIi4uLy4uL2xpYi9ib290c3RyYXAvaW5kZXgudHMiLCAiLi4vLi4vbGliL2Jvb3RzdHJhcC9ib290c3RyYXAudHMiLCAiLi4vLi4vbGliL2ZzLnRzIiwgIi4uLy4uL2xpYi9ib290c3RyYXAvc2VyaWFsaXplci50cyIsICIuLi8uLi9saWIvZGVidWcvaW5kZXgudHMiLCAiLi4vLi4vdHlwZXMudHMiLCAiLi4vLi4vbGliL2xhbmcudHMiLCAiLi4vLi4vbGliL25hbm8udHMiLCAiLi4vLi4vbGliL2NvbmZpZy9wYXRoLnRzIiwgIi4uLy4uL2xpYi9jb25maWcvcGFyYW1zLnRzIiwgIi4uLy4uL2xpYi9odHRwQ2xpZW50L3ByaW50RXJyb3JzLnRzIiwgIi4uLy4uL2xpYi9hcGkvd2FybmluZ3MudHMiLCAiLi4vLi4vbGliL2FwaS90eXBlcy9pbmRleC50cyIsICIuLi8uLi9saWIvYXBpL3R5cGVzL2luc3RhbmNlLnRzIiwgIi4uLy4uL2xpYi9hcGkvdHlwZXMvcnVuLnRzIiwgIi4uLy4uL2xpYi9jaVByb3ZpZGVyLnRzIiwgIi4uLy4uL2xpYi9jeXByZXNzL2luZGV4LnRzIiwgIi4uLy4uL2xpYi9jeXByZXNzL2N5cHJlc3MudHMiLCAiLi4vLi4vbGliL3Jlc3VsdHMvbW9kdWxlQVBJUmVzdWx0LnRzIiwgIi4uLy4uL2xpYi9yZXN1bHRzL3NwZWNBZnRlclJlc3VsdC50cyIsICIuLi8uLi9saWIvZW52LnRzIiwgIi4uLy4uL2xpYi9naXQudHMiLCAiLi4vLi4vbGliL2xpc3RlbmVyLnRzIiwgIi4uLy4uL2xpYi9yZXN1bHRzL2NhcHR1cmVIb29rcy50cyIsICIuLi8uLi9saWIvY292ZXJhZ2UvaW5kZXgudHMiLCAiLi4vLi4vbGliL3J1bm5lci9pbmRleC50cyIsICIuLi8uLi9saWIvcnVubmVyL2NhbmNlbGxhYmxlLnRzIiwgIi4uLy4uL2xpYi9ydW5uZXIvcnVubmVyLnRzIiwgIi4uLy4uL2xpYi9ydW5uZXIvcmVwb3J0VGFzay50cyIsICIuLi8uLi9saWIvcmVzdWx0cy9pbmRleC50cyIsICIuLi8uLi9saWIvcmVzdWx0cy9zdW1tYXJpemUudHMiLCAiLi4vLi4vbGliL3Jlc3VsdHMvZW1wdHkudHMiLCAiLi4vLi4vbGliL3Jlc3VsdHMvdGFibGUudHMiLCAiLi4vLi4vbGliL3Jlc3VsdHMvdXBsb2FkUmVzdWx0cy50cyIsICIuLi8uLi9saWIvYXJ0aWZhY3RzLnRzIiwgIi4uLy4uL2xpYi91cGxvYWQudHMiLCAiLi4vLi4vbGliL2NhbmNlbGxhdGlvbi9pbmRleC50cyIsICIuLi8uLi9saWIvY2FuY2VsbGF0aW9uL2NhbmNlbGxhdGlvbi50cyIsICIuLi8uLi9saWIvcmVzdWx0cy9hcGkudHMiLCAiLi4vLi4vbGliL3BsYXRmb3JtL2luZGV4LnRzIiwgIi4uLy4uL2xpYi9wbGF0Zm9ybS9icm93c2VyLnRzIiwgIi4uLy4uL2xpYi9wbGF0Zm9ybS9wbGF0Zm9ybS50cyIsICIuLi8uLi9saWIvc2h1dGRvd24udHMiLCAiLi4vLi4vbGliL3NwZWNNYXRjaGVyL2luZGV4LnRzIiwgIi4uLy4uL2xpYi9zcGVjTWF0Y2hlci9nZXRTcGVjRmlsZXMudHMiLCAiLi4vLi4vbGliL3NwZWNNYXRjaGVyL3NwZWNNYXRjaGVyLnRzIiwgIi4uLy4uL2xpYi91dGlscy50cyIsICIuLi8uLi9saWIvc3RhdGUvaW5kZXgudHMiLCAiLi4vLi4vbGliL3N0YXRlL2NvbmZpZy50cyIsICIuLi8uLi9saWIvc3RhdGUvZXhlY3V0aW9uLnRzIiwgIi4uLy4uL2xpYi9yZXN1bHRzL21hcFJlc3VsdC50cyIsICIuLi8uLi9saWIvd2FybmluZ3MudHMiLCAiLi4vLi4vYmluL2xpYi9pbmRleC50cyIsICIuLi8uLi9iaW4vbGliL2NsaS50cyIsICIuLi8uLi9iaW4vbGliL3BhcnNlci50cyIsICIuLi8uLi9iaW4vbGliL3Byb2dyYW0udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIFNoaW0gZ2xvYmFscyBpbiBjanMgYnVuZGxlXG4vLyBUaGVyZSdzIGEgd2VpcmQgYnVnIHRoYXQgZXNidWlsZCB3aWxsIGFsd2F5cyBpbmplY3QgaW1wb3J0TWV0YVVybFxuLy8gaWYgd2UgZXhwb3J0IGl0IGFzIGBjb25zdCBpbXBvcnRNZXRhVXJsID0gLi4uIF9fZmlsZW5hbWUgLi4uYFxuLy8gQnV0IHVzaW5nIGEgZnVuY3Rpb24gd2lsbCBub3QgY2F1c2UgdGhpcyBpc3N1ZVxuXG5jb25zdCBnZXRJbXBvcnRNZXRhVXJsID0gKCkgPT5cbiAgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJ1xuICAgID8gbmV3IFVSTCgnZmlsZTonICsgX19maWxlbmFtZSkuaHJlZlxuICAgIDogKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmMpIHx8XG4gICAgICBuZXcgVVJMKCdtYWluLmpzJywgZG9jdW1lbnQuYmFzZVVSSSkuaHJlZlxuXG5leHBvcnQgY29uc3QgaW1wb3J0TWV0YVVybCA9IC8qIEBfX1BVUkVfXyAqLyBnZXRJbXBvcnRNZXRhVXJsKClcbiIsICJjb25zdCBjb21tYW5kZXIgPSByZXF1aXJlKFwiY29tbWFuZGVyXCIpO1xuXG4vLyBAdHMtY2hlY2tcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIFJldHVybiBhIGRpZmZlcmVudCBnbG9iYWwgcHJvZ3JhbSB0aGFuIGNvbW1hbmRlcixcbi8vIGFuZCBkb24ndCBhbHNvIHJldHVybiBpdCBhcyBkZWZhdWx0IGV4cG9ydC5cbmV4cG9ydHMucHJvZ3JhbSA9IG5ldyBjb21tYW5kZXIuQ29tbWFuZCgpO1xuXG4vKipcbiAqIEV4cG9zZSBjbGFzc2VzLiBUaGUgRm9vVCB2ZXJzaW9ucyBhcmUganVzdCB0eXBlcywgc28gcmV0dXJuIENvbW1hbmRlciBvcmlnaW5hbCBpbXBsZW1lbnRhdGlvbnMhXG4gKi9cblxuZXhwb3J0cy5Bcmd1bWVudCA9IGNvbW1hbmRlci5Bcmd1bWVudDtcbmV4cG9ydHMuQ29tbWFuZCA9IGNvbW1hbmRlci5Db21tYW5kO1xuZXhwb3J0cy5Db21tYW5kZXJFcnJvciA9IGNvbW1hbmRlci5Db21tYW5kZXJFcnJvcjtcbmV4cG9ydHMuSGVscCA9IGNvbW1hbmRlci5IZWxwO1xuZXhwb3J0cy5JbnZhbGlkQXJndW1lbnRFcnJvciA9IGNvbW1hbmRlci5JbnZhbGlkQXJndW1lbnRFcnJvcjtcbmV4cG9ydHMuSW52YWxpZE9wdGlvbkFyZ3VtZW50RXJyb3IgPSBjb21tYW5kZXIuSW52YWxpZEFyZ3VtZW50RXJyb3I7IC8vIERlcHJlY2F0ZWRcbmV4cG9ydHMuT3B0aW9uID0gY29tbWFuZGVyLk9wdGlvbjtcblxuLy8gSW4gQ29tbWFuZGVyLCB0aGUgY3JlYXRlIHJvdXRpbmVzIGVuZCB1cCBiZWluZyBhbGlhc2VzIGZvciB0aGUgbWF0Y2hpbmdcbi8vIG1ldGhvZHMgb24gdGhlIGdsb2JhbCBwcm9ncmFtIGR1ZSB0byB0aGUgKGRlcHJlY2F0ZWQpIGxlZ2FjeSBkZWZhdWx0IGV4cG9ydC5cbi8vIEhlcmUgd2Ugcm9sbCBvdXIgb3duLCB0aGUgd2F5IENvbW1hbmRlciBtaWdodCBpbiBmdXR1cmUuXG5leHBvcnRzLmNyZWF0ZUNvbW1hbmQgPSAobmFtZSkgPT4gbmV3IGNvbW1hbmRlci5Db21tYW5kKG5hbWUpO1xuZXhwb3J0cy5jcmVhdGVPcHRpb24gPSAoZmxhZ3MsIGRlc2NyaXB0aW9uKSA9PlxuICBuZXcgY29tbWFuZGVyLk9wdGlvbihmbGFncywgZGVzY3JpcHRpb24pO1xuZXhwb3J0cy5jcmVhdGVBcmd1bWVudCA9IChuYW1lLCBkZXNjcmlwdGlvbikgPT5cbiAgbmV3IGNvbW1hbmRlci5Bcmd1bWVudChuYW1lLCBkZXNjcmlwdGlvbik7XG4iLCAiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0IFwic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyXCI7XG5cbmltcG9ydCB7IFZhbGlkYXRpb25FcnJvciB9IGZyb20gXCIuLi9saWIvZXJyb3JzXCI7XG5pbXBvcnQgeyB3aXRoRXJyb3IgfSBmcm9tIFwiLi4vbGliL2xvZ1wiO1xuaW1wb3J0IHsgcnVuIH0gZnJvbSBcIi4uL2xpYi9ydW5cIjtcbmltcG9ydCB7IHBhcnNlQ0xJT3B0aW9ucywgcHJvZ3JhbSB9IGZyb20gXCIuL2xpYlwiO1xuXG5hc3luYyBmdW5jdGlvbiBtYWluKCkge1xuICByZXR1cm4gcnVuKHBhcnNlQ0xJT3B0aW9ucygpKTtcbn1cblxubWFpbigpXG4gIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgIH1cblxuICAgIC8vIEB0cy1pZ25vcmU6IHJ1bm5pbmcgYmFyZSBjeXByZXNzIGluIG9mZmxpbmUgbW9kZSBicmVha3MgdGhlIHR5cGVzXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwiZmFpbGVkXCIpIHtcbiAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICB9XG4gICAgLy8gQHRzLWlnbm9yZTogcnVubmluZyBiYXJlIGN5cHJlc3MgaW4gb2ZmbGluZSBtb2RlIGJyZWFrcyB0aGUgdHlwZXNcbiAgICBjb25zdCBvdmVyYWxsRmFpbGVkID0gcmVzdWx0LnRvdGFsRmFpbGVkICsgcmVzdWx0LnRvdGFsU2tpcHBlZDtcbiAgICBpZiAob3ZlcmFsbEZhaWxlZCA+IDApIHtcbiAgICAgIHByb2Nlc3MuZXhpdChvdmVyYWxsRmFpbGVkKTtcbiAgICB9XG4gICAgcHJvY2Vzcy5leGl0KDApO1xuICB9KVxuICAuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChlcnIgaW5zdGFuY2VvZiBWYWxpZGF0aW9uRXJyb3IpIHtcbiAgICAgIHByb2dyYW0uZXJyb3Iod2l0aEVycm9yKGVyci50b1N0cmluZygpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gICAgcHJvY2Vzcy5leGl0KDEpO1xuICB9KTtcbiIsICJleHBvcnQgY2xhc3MgVmFsaWRhdGlvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLm5hbWUgPSBcIlwiO1xuICB9XG59XG4iLCAiaW1wb3J0IGNoYWxrIGZyb20gXCJjaGFsa1wiO1xuaW1wb3J0IHV0aWwgZnJvbSBcInV0aWxcIjtcblxuY29uc3QgbG9nID0gKC4uLmFyZ3M6IHVua25vd25bXSkgPT4gY29uc29sZS5sb2codXRpbC5mb3JtYXQoLi4uYXJncykpO1xuXG5leHBvcnQgY29uc3QgaW5mbyA9IGxvZztcblxuZXhwb3J0IGNvbnN0IGZvcm1hdCA9IHV0aWwuZm9ybWF0O1xuZXhwb3J0IGNvbnN0IHdpdGhFcnJvciA9IChtc2c6IHN0cmluZykgPT5cbiAgY2hhbGsuYmdSZWQud2hpdGUoXCIgRVJST1IgXCIpICsgXCIgXCIgKyBtc2c7XG5leHBvcnQgY29uc3Qgd2l0aFdhcm5pbmcgPSAobXNnOiBzdHJpbmcpID0+XG4gIGNoYWxrLmJnWWVsbG93LmJsYWNrKFwiIFdBUk5JTkcgXCIpICsgXCIgXCIgKyBtc2c7XG5cbmV4cG9ydCBjb25zdCB3YXJuID0gKC4uLmFyZ3M6IHVua25vd25bXSkgPT5cbiAgbG9nKHdpdGhXYXJuaW5nKHV0aWwuZm9ybWF0KC4uLmFyZ3MpKSk7XG5cbmV4cG9ydCBjb25zdCBzdWNjZXNzID0gKC4uLmFyZ3M6IHVua25vd25bXSkgPT5cbiAgbG9nKGNoYWxrLmdyZWVuKHV0aWwuZm9ybWF0KC4uLmFyZ3MpKSk7XG5cbmV4cG9ydCBjb25zdCBlcnJvciA9ICguLi5hcmdzOiB1bmtub3duW10pID0+XG4gIGxvZyh3aXRoRXJyb3IodXRpbC5mb3JtYXQoLi4uYXJncykpICsgXCJcXG5cIik7XG5cbnR5cGUgQ29sb3IgPSBcInJlZFwiIHwgXCJncmVlblwiIHwgXCJ5ZWxsb3dcIiB8IFwiYmx1ZVwiIHwgXCJtYWdlbnRhXCIgfCBcImN5YW5cIiB8IFwid2hpdGVcIjtcbmV4cG9ydCBjb25zdCB0aXRsZSA9IChjb2xvcjogQ29sb3IsIC4uLmFyZ3M6IHVua25vd25bXSkgPT5cbiAgaW5mbyhcIlxcblwiICsgXCIgIFwiICsgY2hhbGtbY29sb3JdLmJvbGQodXRpbC5mb3JtYXQoLi4uYXJncykpICsgXCIgIFwiICsgXCJcXG5cIik7XG5cbmV4cG9ydCBjb25zdCBkaXZpZGVyID0gKCkgPT5cbiAgY29uc29sZS5sb2coXCJcXG5cIiArIGNoYWxrLmdyYXkoQXJyYXkoMTAwKS5maWxsKFwiPVwiKS5qb2luKFwiXCIpKSArIFwiXFxuXCIpO1xuXG5leHBvcnQgY29uc3Qgc3BhY2VyID0gKG46IG51bWJlciA9IDApID0+XG4gIGNvbnNvbGUubG9nKEFycmF5KG4pLmZpbGwoXCJcIikuam9pbihcIlxcblwiKSk7XG5cbmV4cG9ydCBjb25zdCBjeWFuID0gY2hhbGsuY3lhbjtcbmV4cG9ydCBjb25zdCBibHVlID0gY2hhbGsuYmx1ZUJyaWdodDtcbmV4cG9ydCBjb25zdCByZWQgPSBjaGFsay5yZWQ7XG5leHBvcnQgY29uc3QgZ3JlZW4gPSBjaGFsay5ncmVlbkJyaWdodDtcbmV4cG9ydCBjb25zdCBncmF5ID0gY2hhbGsuZ3JheTtcbmV4cG9ydCBjb25zdCB3aGl0ZSA9IGNoYWxrLndoaXRlO1xuZXhwb3J0IGNvbnN0IG1hZ2VudGEgPSBjaGFsay5tYWdlbnRhO1xuZXhwb3J0IGNvbnN0IGJvbGQgPSBjaGFsay5ib2xkO1xuZXhwb3J0IGNvbnN0IGRpbSA9IGNoYWxrLmRpbTtcbiIsICJpbXBvcnQgXCIuL2luaXRcIjtcblxuaW1wb3J0IERlYnVnIGZyb20gXCJkZWJ1Z1wiO1xuaW1wb3J0IHsgZ2V0TGVnYWxOb3RpY2UgfSBmcm9tIFwiLi4vbGVnYWxcIjtcbmltcG9ydCB7IEN1cnJlbnRzUnVuUGFyYW1ldGVycyB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlUnVuIH0gZnJvbSBcIi4vYXBpXCI7XG5pbXBvcnQgeyBjdXRJbml0aWFsT3V0cHV0IH0gZnJvbSBcIi4vY2FwdHVyZVwiO1xuaW1wb3J0IHsgZ2V0Q0kgfSBmcm9tIFwiLi9jaVByb3ZpZGVyXCI7XG5pbXBvcnQge1xuICBnZXRNZXJnZWRDb25maWcsXG4gIGlzT2ZmbGluZSxcbiAgcHJlcHJvY2Vzc1BhcmFtcyxcbiAgdmFsaWRhdGVQYXJhbXMsXG59IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgcnVuQmFyZUN5cHJlc3MgfSBmcm9tIFwiLi9jeXByZXNzXCI7XG5pbXBvcnQgeyBhY3RpdmF0ZURlYnVnIH0gZnJvbSBcIi4vZGVidWdcIjtcbmltcG9ydCB7IGlzQ3VycmVudHMgfSBmcm9tIFwiLi9lbnZcIjtcbmltcG9ydCB7IGdldEdpdEluZm8gfSBmcm9tIFwiLi9naXRcIjtcbmltcG9ydCB7IHNldEFQSUJhc2VVcmwgfSBmcm9tIFwiLi9odHRwQ2xpZW50XCI7XG5pbXBvcnQgeyBsaXN0ZW5Ub0V2ZW50cyB9IGZyb20gXCIuL2xpc3RlbmVyXCI7XG5pbXBvcnQgeyBib2xkLCBkaW0sIGRpdmlkZXIsIGluZm8sIHNwYWNlciwgdGl0bGUgfSBmcm9tIFwiLi9sb2dcIjtcbmltcG9ydCB7IGdldFBsYXRmb3JtIH0gZnJvbSBcIi4vcGxhdGZvcm1cIjtcbmltcG9ydCB7IHN1bW1hcml6ZUV4ZWN1dGlvbiwgc3VtbWFyeVRhYmxlIH0gZnJvbSBcIi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgcmVwb3J0VGFza3MsIHJ1blRpbGxEb25lT3JDYW5jZWxsZWQgfSBmcm9tIFwiLi9ydW5uZXJcIjtcbmltcG9ydCB7IHNodXRkb3duIH0gZnJvbSBcIi4vc2h1dGRvd25cIjtcbmltcG9ydCB7IGdldFNwZWNGaWxlcyB9IGZyb20gXCIuL3NwZWNNYXRjaGVyXCI7XG5pbXBvcnQgeyBDb25maWdTdGF0ZSwgRXhlY3V0aW9uU3RhdGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0IHsgX2N1cnJlbnRzVmVyc2lvbiwgX2N5cHJlc3NWZXJzaW9uLCBzZXRSdW5JZCB9IGZyb20gXCIuL3N0YXRlL2dsb2JhbFwiO1xuaW1wb3J0IHsgcHJpbnRXYXJuaW5ncyB9IGZyb20gXCIuL3dhcm5pbmdzXCI7XG5pbXBvcnQgeyBzdGFydFdTUyB9IGZyb20gXCIuL3dzXCI7XG5cbmNvbnN0IGRlYnVnID0gRGVidWcoXCJjdXJyZW50czpydW5cIik7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBydW4ocGFyYW1zOiBDdXJyZW50c1J1blBhcmFtZXRlcnMgPSB7fSkge1xuICBjb25zdCBleGVjdXRpb25TdGF0ZSA9IG5ldyBFeGVjdXRpb25TdGF0ZSgpO1xuICBjb25zdCBjb25maWdTdGF0ZSA9IG5ldyBDb25maWdTdGF0ZSgpO1xuXG4gIGFjdGl2YXRlRGVidWcocGFyYW1zLmNsb3VkRGVidWcpO1xuXG4gIGRlYnVnKFwicnVuIHBhcmFtcyAlb1wiLCBwYXJhbXMpO1xuICBwYXJhbXMgPSBwcmVwcm9jZXNzUGFyYW1zKHBhcmFtcyk7XG4gIGRlYnVnKFwicGFyYW1zIGFmdGVyIHByZXByb2Nlc3MgJW9cIiwgcGFyYW1zKTtcblxuICBpZiAoaXNPZmZsaW5lKHBhcmFtcykpIHtcbiAgICBpbmZvKGBTa2lwcGluZyBjbG91ZCBvcmNoZXN0cmF0aW9uIGJlY2F1c2UgLS1yZWNvcmQgaXMgc2V0IHRvIGZhbHNlYCk7XG4gICAgcmV0dXJuIHJ1bkJhcmVDeXByZXNzKHBhcmFtcyk7XG4gIH1cblxuICBjb25zdCB2YWxpZGF0ZWRQYXJhbXMgPSBhd2FpdCB2YWxpZGF0ZVBhcmFtcyhwYXJhbXMpO1xuICBzZXRBUElCYXNlVXJsKHZhbGlkYXRlZFBhcmFtcy5jbG91ZFNlcnZpY2VVcmwpO1xuXG4gIGlmICghaXNDdXJyZW50cygpKSB7XG4gICAgY29uc29sZS5sb2coZ2V0TGVnYWxOb3RpY2UoKSk7XG4gIH1cblxuICBjb25zdCB7XG4gICAgcmVjb3JkS2V5LFxuICAgIHByb2plY3RJZCxcbiAgICBncm91cCxcbiAgICBwYXJhbGxlbCxcbiAgICBjaUJ1aWxkSWQsXG4gICAgdGFnLFxuICAgIHRlc3RpbmdUeXBlLFxuICAgIGJhdGNoU2l6ZSxcbiAgICBhdXRvQ2FuY2VsQWZ0ZXJGYWlsdXJlcyxcbiAgICBleHBlcmltZW50YWxDb3ZlcmFnZVJlY29yZGluZyxcbiAgfSA9IHZhbGlkYXRlZFBhcmFtcztcblxuICBjb25zdCBjb25maWcgPSBhd2FpdCBnZXRNZXJnZWRDb25maWcodmFsaWRhdGVkUGFyYW1zKTtcbiAgY29uZmlnU3RhdGUuc2V0Q29uZmlnKGNvbmZpZz8ucmVzb2x2ZWQpO1xuXG4gIGNvbnN0IHsgc3BlY3MsIHNwZWNQYXR0ZXJuIH0gPSBhd2FpdCBnZXRTcGVjRmlsZXMoe1xuICAgIGNvbmZpZyxcbiAgICBwYXJhbXM6IHZhbGlkYXRlZFBhcmFtcyxcbiAgfSk7XG5cbiAgaWYgKHNwZWNzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHBsYXRmb3JtID0gYXdhaXQgZ2V0UGxhdGZvcm0oe1xuICAgIGNvbmZpZyxcbiAgICBicm93c2VyOiB2YWxpZGF0ZWRQYXJhbXMuYnJvd3NlcixcbiAgfSk7XG5cbiAgaW5mbyhgQ3lwcmVzcy1jbG91ZCB2ZXJzaW9uOiAke2RpbShfY3VycmVudHNWZXJzaW9uKX1gKTtcbiAgaW5mbyhgQ3lwcmVzcyB2ZXJzaW9uOiAke2RpbShfY3lwcmVzc1ZlcnNpb24pfWApO1xuICBpbmZvKFwiRGlzY292ZXJlZCAlZCBzcGVjIGZpbGVzXCIsIHNwZWNzLmxlbmd0aCk7XG4gIGluZm8oXG4gICAgYFRhZ3M6ICR7dGFnLmxlbmd0aCA+IDAgPyB0YWcuam9pbihcIixcIikgOiBmYWxzZX07IEdyb3VwOiAke1xuICAgICAgZ3JvdXAgPz8gZmFsc2VcbiAgICB9OyBQYXJhbGxlbDogJHtwYXJhbGxlbCA/PyBmYWxzZX07IEJhdGNoIFNpemU6ICR7YmF0Y2hTaXplfWBcbiAgKTtcbiAgaW5mbyhcIkNvbm5lY3RpbmcgdG8gY2xvdWQgb3JjaGVzdHJhdGlvbiBzZXJ2aWNlLi4uXCIpO1xuXG4gIGNvbnN0IHJ1biA9IGF3YWl0IGNyZWF0ZVJ1bih7XG4gICAgY2k6IGdldENJKGNpQnVpbGRJZCksXG4gICAgc3BlY3M6IHNwZWNzLm1hcCgoc3BlYykgPT4gc3BlYy5yZWxhdGl2ZSksXG4gICAgY29tbWl0OiBhd2FpdCBnZXRHaXRJbmZvKGNvbmZpZy5wcm9qZWN0Um9vdCksXG4gICAgZ3JvdXAsXG4gICAgcGxhdGZvcm0sXG4gICAgcGFyYWxsZWw6IHBhcmFsbGVsID8/IGZhbHNlLFxuICAgIGNpQnVpbGRJZCxcbiAgICBwcm9qZWN0SWQsXG4gICAgcmVjb3JkS2V5LFxuICAgIHNwZWNQYXR0ZXJuOiBbc3BlY1BhdHRlcm5dLmZsYXQoMiksXG4gICAgdGFnczogdGFnLFxuICAgIHRlc3RpbmdUeXBlLFxuICAgIGJhdGNoU2l6ZSxcbiAgICBhdXRvQ2FuY2VsQWZ0ZXJGYWlsdXJlcyxcbiAgICBjb3ZlcmFnZUVuYWJsZWQ6IGV4cGVyaW1lbnRhbENvdmVyYWdlUmVjb3JkaW5nLFxuICB9KTtcblxuICBzZXRSdW5JZChydW4ucnVuSWQpO1xuICBpbmZvKFwiXHVEODNDXHVERkE1IFJ1biBVUkw6XCIsIGJvbGQocnVuLnJ1blVybCkpO1xuICBjdXRJbml0aWFsT3V0cHV0KCk7XG5cbiAgYXdhaXQgc3RhcnRXU1MoKTtcbiAgbGlzdGVuVG9FdmVudHMoXG4gICAgY29uZmlnU3RhdGUsXG4gICAgZXhlY3V0aW9uU3RhdGUsXG4gICAgY29uZmlnLmV4cGVyaW1lbnRhbENvdmVyYWdlUmVjb3JkaW5nXG4gICk7XG5cbiAgYXdhaXQgcnVuVGlsbERvbmVPckNhbmNlbGxlZChcbiAgICBleGVjdXRpb25TdGF0ZSxcbiAgICBjb25maWdTdGF0ZSxcbiAgICB7XG4gICAgICBydW5JZDogcnVuLnJ1bklkLFxuICAgICAgZ3JvdXBJZDogcnVuLmdyb3VwSWQsXG4gICAgICBtYWNoaW5lSWQ6IHJ1bi5tYWNoaW5lSWQsXG4gICAgICBwbGF0Zm9ybSxcbiAgICAgIHNwZWNzLFxuICAgIH0sXG4gICAgdmFsaWRhdGVkUGFyYW1zXG4gICk7XG5cbiAgZGl2aWRlcigpO1xuXG4gIGF3YWl0IFByb21pc2UuYWxsU2V0dGxlZChyZXBvcnRUYXNrcyk7XG4gIGNvbnN0IF9zdW1tYXJ5ID0gc3VtbWFyaXplRXhlY3V0aW9uKFxuICAgIGV4ZWN1dGlvblN0YXRlLmdldFJlc3VsdHMoY29uZmlnU3RhdGUpLFxuICAgIGNvbmZpZ1xuICApO1xuXG4gIHRpdGxlKFwid2hpdGVcIiwgXCJDbG91ZCBSdW4gRmluaXNoZWRcIik7XG4gIGNvbnNvbGUubG9nKHN1bW1hcnlUYWJsZShfc3VtbWFyeSkpO1xuXG4gIHByaW50V2FybmluZ3MoZXhlY3V0aW9uU3RhdGUpO1xuXG4gIGluZm8oXCJcXG5cdUQ4M0NcdURGQzEgUmVjb3JkZWQgUnVuOlwiLCBib2xkKHJ1bi5ydW5VcmwpKTtcblxuICBhd2FpdCBzaHV0ZG93bigpO1xuXG4gIHNwYWNlcigpO1xuXG4gIHJldHVybiB7XG4gICAgLi4uX3N1bW1hcnksXG4gICAgcnVuVXJsOiBydW4ucnVuVXJsLFxuICB9O1xufVxuIiwgImltcG9ydCB7IHJlcXVpcmUgfSBmcm9tIFwiLi4vbGliL3JlcXVpcmVcIjtcbmltcG9ydCBcIi4vc3Rkb3V0XCI7XG5pbXBvcnQgXCIuL3dzXCI7XG5cbmNvbnN0IGN5cHJlc3NQa2cgPSByZXF1aXJlKFwiY3lwcmVzcy9wYWNrYWdlLmpzb25cIik7XG5jb25zdCBwa2cgPSByZXF1aXJlKFwiY3lwcmVzcy1jbG91ZC9wYWNrYWdlLmpzb25cIik7XG5cbmltcG9ydCB7IGluaXRDYXB0dXJlIH0gZnJvbSBcIi4vY2FwdHVyZVwiO1xuaW1wb3J0IHsgc2V0Q3VycmVudHNWZXJzaW9uLCBzZXRDeXByZXNzVmVyc2lvbiB9IGZyb20gXCIuL3N0YXRlL2dsb2JhbFwiO1xuXG5pbml0Q2FwdHVyZSgpO1xuc2V0Q3lwcmVzc1ZlcnNpb24oY3lwcmVzc1BrZy52ZXJzaW9uKTtcbnNldEN1cnJlbnRzVmVyc2lvbihwa2cudmVyc2lvbik7XG4iLCAiaW1wb3J0IHsgY3JlYXRlUmVxdWlyZSB9IGZyb20gXCJtb2R1bGVcIjtcbi8vIHJlcXVpcmVzIHNoaW09dHJ1ZSBpbiBwYWNrYWdlLmpzb25cbmV4cG9ydCBjb25zdCByZXF1aXJlID0gY3JlYXRlUmVxdWlyZShpbXBvcnQubWV0YS51cmwpO1xuIiwgImltcG9ydCBjcCBmcm9tIFwiY2hpbGRfcHJvY2Vzc1wiO1xuY29uc3Qgb3JnaW5hbCA9IGNwLnNwYXduO1xuXG4vLyBAdHMtaWdub3JlXG5jcC5zcGF3biA9IGZ1bmN0aW9uIChjb21tYW5kLCBhcmdzLCBvcHRpb25zKSB7XG4gIC8vIEB0cy1pZ25vcmVcbiAgaWYgKGNvbW1hbmQubWF0Y2goL0N5cHJlc3MvKSkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBwcm9jZXNzID0gb3JnaW5hbChjb21tYW5kLCBhcmdzLCB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgLy8gdXNpbmcgcGlwZSBlbmFibGVzIGNhcHR1cmluZyBzdGRvdXQgYW5kIHN0ZGVyclxuICAgICAgc3RkaW86IFtcInBpcGVcIiwgXCJwaXBlXCIsIFwicGlwZVwiXSxcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvY2VzcztcbiAgfVxuXG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIG9yZ2luYWwoY29tbWFuZCwgYXJncywgb3B0aW9ucyk7XG59O1xuIiwgImV4cG9ydCAqIGZyb20gXCIuL3dzXCI7XG4iLCAiaW1wb3J0IERlYnVnIGZyb20gXCJkZWJ1Z1wiO1xuaW1wb3J0IGh0dHAgZnJvbSBcImh0dHBcIjtcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBIdHRwVGVybWluYXRvciBmcm9tIFwibGlsLWh0dHAtdGVybWluYXRvclwiO1xuaW1wb3J0IHsgbWF0Y2gsIFAgfSBmcm9tIFwidHMtcGF0dGVyblwiO1xuaW1wb3J0ICogYXMgV2ViU29ja2V0IGZyb20gXCJ3c1wiO1xuaW1wb3J0IHsgZ2V0UHViU3ViIH0gZnJvbSBcIi4uL3B1YnN1YlwiO1xuXG5jb25zdCBkZWJ1ZyA9IERlYnVnKFwiY3VycmVudHM6d3NcIik7XG5cbmxldCBzZXJ2ZXI6IGh0dHAuU2VydmVyIHwgbnVsbCA9IG51bGw7XG5sZXQgd3NzOiBXZWJTb2NrZXQuU2VydmVyIHwgbnVsbCA9IG51bGw7XG5sZXQgaHR0cFRlcm1pbmF0b3I6IEh0dHBUZXJtaW5hdG9yIHwgbnVsbCA9IG51bGw7XG5cbmV4cG9ydCBjb25zdCBnZXRXU1NQb3J0ID0gKCkgPT5cbiAgbWF0Y2goc2VydmVyPy5hZGRyZXNzKCkpXG4gICAgLndpdGgoeyBwb3J0OiBQLm51bWJlciB9LCAoYWRkcmVzcykgPT4gYWRkcmVzcy5wb3J0KVxuICAgIC5vdGhlcndpc2UoKCkgPT4gMCk7XG5cbmV4cG9ydCBjb25zdCBzdG9wV1NTID0gYXN5bmMgKCkgPT4ge1xuICBkZWJ1ZyhcInRlcm1pbmF0aW5nIHdzcyBzZXJ2ZXI6ICVkXCIsIGdldFdTU1BvcnQoKSk7XG4gIGlmICghaHR0cFRlcm1pbmF0b3IpIHtcbiAgICBkZWJ1ZyhcIm5vIHdzcyBzZXJ2ZXJcIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHsgc3VjY2VzcywgY29kZSwgbWVzc2FnZSwgZXJyb3IgfSA9IGF3YWl0IGh0dHBUZXJtaW5hdG9yLnRlcm1pbmF0ZSgpO1xuICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICBpZiAoY29kZSA9PT0gXCJUSU1FRF9PVVRcIikgZXJyb3IobWVzc2FnZSk7XG4gICAgaWYgKGNvZGUgPT09IFwiU0VSVkVSX0VSUk9SXCIpIGVycm9yKG1lc3NhZ2UsIGVycm9yKTtcbiAgICBpZiAoY29kZSA9PT0gXCJJTlRFUk5BTF9FUlJPUlwiKSBlcnJvcihtZXNzYWdlLCBlcnJvcik7XG4gIH1cbiAgZGVidWcoXCJ0ZXJtaW5hdGVkIHdzcyBzZXJ2ZXI6ICVkXCIsIGdldFdTU1BvcnQoKSk7XG59O1xuZXhwb3J0IGNvbnN0IHN0YXJ0V1NTID0gKCkgPT4ge1xuICBpZiAod3NzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHNlcnZlciA9IGh0dHBcbiAgICAuY3JlYXRlU2VydmVyKClcbiAgICAub24oXCJsaXN0ZW5pbmdcIiwgKCkgPT4ge1xuICAgICAgaWYgKCFzZXJ2ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VydmVyIG5vdCBpbml0aWFsaXplZFwiKTtcbiAgICAgIH1cbiAgICAgIHdzcyA9IG5ldyBXZWJTb2NrZXQuV2ViU29ja2V0U2VydmVyKHtcbiAgICAgICAgc2VydmVyLFxuICAgICAgfSk7XG4gICAgICBkZWJ1ZyhcInN0YXJ0aW5nIHdzcyBvbiBwb3J0ICVkXCIsIGdldFdTU1BvcnQoKSk7XG4gICAgICB3c3Mub24oXCJjb25uZWN0aW9uXCIsIGZ1bmN0aW9uIGNvbm5lY3Rpb24od3MpIHtcbiAgICAgICAgd3Mub24oXCJtZXNzYWdlXCIsIGZ1bmN0aW9uIGluY29taW5nKGV2ZW50KSB7XG4gICAgICAgICAgY29uc3QgbWVzc2FnZSA9IEpTT04ucGFyc2UoZXZlbnQudG9TdHJpbmcoKSk7XG4gICAgICAgICAgZ2V0UHViU3ViKCkuZW1pdChtZXNzYWdlLnR5cGUsIG1lc3NhZ2UucGF5bG9hZCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAubGlzdGVuKCk7XG5cbiAgaHR0cFRlcm1pbmF0b3IgPSBIdHRwVGVybWluYXRvcih7XG4gICAgc2VydmVyLFxuICB9KTtcbn07XG4iLCAiZXhwb3J0ICogZnJvbSBcIi4vZXZlbnRzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9wdWJzdWJcIjtcbiIsICJleHBvcnQgZW51bSBFdmVudCB7XG4gIFJVTl9DQU5DRUxMRUQgPSBcInJ1bjpjYW5jZWxsZWRcIixcbiAgUlVOX1JFU1VMVCA9IFwicnVuOnJlc3VsdFwiLFxuICBURVNUX0FGVEVSX1JVTiA9IFwidGVzdDphZnRlcjpydW5cIixcbiAgVEVTVF9CRUZPUkVfUlVOID0gXCJ0ZXN0OmJlZm9yZTpydW5cIixcbiAgQUZURVJfU0NSRUVOU0hPVCA9IFwiYWZ0ZXI6c2NyZWVuc2hvdFwiLFxuICBBRlRFUl9TUEVDID0gXCJhZnRlcjpzcGVjXCIsXG59XG5leHBvcnQgY29uc3QgYWxsRXZlbnRzID0gT2JqZWN0LnZhbHVlcyhFdmVudCk7XG4iLCAiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiZXZlbnRzXCI7XG5cbmxldCBfcHVic3ViOiBFdmVudEVtaXR0ZXIgfCBudWxsID0gbnVsbDtcbmV4cG9ydCBjb25zdCBnZXRQdWJTdWIgPSAoKSA9PiB7XG4gIGlmICghX3B1YnN1Yikge1xuICAgIF9wdWJzdWIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIH1cbiAgcmV0dXJuIF9wdWJzdWI7XG59O1xuIiwgImltcG9ydCBEZWJ1ZyBmcm9tIFwiZGVidWdcIjtcbmNvbnN0IGRlYnVnID0gRGVidWcoXCJjdXJyZW50czpjYXB0dXJlXCIpO1xuXG5jb25zdCBfd3JpdGUgPSBwcm9jZXNzLnN0ZG91dC53cml0ZTtcbmNvbnN0IF9sb2cgPSBwcm9jZXNzLmxvZztcblxuZXhwb3J0IGNvbnN0IHJlc3RvcmUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIHJlc3RvcmUgdG8gdGhlIG9yaWdpbmFsc1xuICBwcm9jZXNzLnN0ZG91dC53cml0ZSA9IF93cml0ZTtcbiAgcHJvY2Vzcy5sb2cgPSBfbG9nO1xufTtcblxuY29uc3QgbG9nczogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cbmNvbnN0IHN0ZG91dCA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWcoXCJjYXB0dXJpbmcgc3Rkb3V0XCIpO1xuICBsZXQgbG9nczogc3RyaW5nW10gPSBbXTtcblxuICAvLyBsYXppbHkgYmFja3VwIHdyaXRlIHRvIGVuYWJsZSBpbmplY3Rpb25cbiAgY29uc3QgeyB3cml0ZSB9ID0gcHJvY2Vzcy5zdGRvdXQ7XG4gIGNvbnN0IHsgbG9nIH0gPSBwcm9jZXNzO1xuXG4gIC8vIGVsZWN0cm9uIGFkZHMgYSBuZXcgcHJvY2Vzcy5sb2dcbiAgLy8gbWV0aG9kIGZvciB3aW5kb3dzIGluc3RlYWQgb2YgcHJvY2Vzcy5zdGRvdXQud3JpdGVcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2N5cHJlc3MtaW8vY3lwcmVzcy9pc3N1ZXMvOTc3XG4gIGlmIChsb2cpIHtcbiAgICBwcm9jZXNzLmxvZyA9IGZ1bmN0aW9uIChzdHI6IHN0cmluZykge1xuICAgICAgbG9ncy5wdXNoKHN0cik7XG5cbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICAgIHJldHVybiBsb2cuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgcHJvY2Vzcy5zdGRvdXQud3JpdGUgPSBmdW5jdGlvbiAoc3RyOiBzdHJpbmcpIHtcbiAgICBsb2dzLnB1c2goc3RyKTtcblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgcmV0dXJuIHdyaXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiBsb2dzLmpvaW4oXCJcIik7XG4gICAgfSxcbiAgICBkYXRhOiBsb2dzLFxuICAgIHJlc3RvcmUsXG4gICAgcmVzZXQ6ICgpID0+IHtcbiAgICAgIGRlYnVnKFwicmVzZXR0aW5nIGNhcHR1cmVkIHN0ZG91dFwiKTtcbiAgICAgIGxvZ3MgPSBbXTtcbiAgICB9LFxuICB9O1xufTtcblxubGV0IGluaXRpYWxPdXRwdXQ6IHN0cmluZyA9IFwiXCI7XG5sZXQgY2FwdHVyZWRPdXRwdXQ6IG51bGwgfCBSZXR1cm5UeXBlPHR5cGVvZiBzdGRvdXQ+ID0gbnVsbDtcblxuZXhwb3J0IGNvbnN0IGluaXRDYXB0dXJlID0gKCkgPT4gKGNhcHR1cmVkT3V0cHV0ID0gc3Rkb3V0KCkpO1xuXG5leHBvcnQgY29uc3QgY3V0SW5pdGlhbE91dHB1dCA9ICgpID0+IHtcbiAgaWYgKCFjYXB0dXJlZE91dHB1dCkgdGhyb3cgbmV3IEVycm9yKFwiY2FwdHVyZWRPdXRwdXQgaXMgbnVsbFwiKTtcbiAgaW5pdGlhbE91dHB1dCA9IGNhcHR1cmVkT3V0cHV0LnRvU3RyaW5nKCk7XG4gIGNhcHR1cmVkT3V0cHV0LnJlc2V0KCk7XG59O1xuZXhwb3J0IGNvbnN0IHJlc2V0Q2FwdHVyZSA9ICgpID0+IHtcbiAgaWYgKCFjYXB0dXJlZE91dHB1dCkgdGhyb3cgbmV3IEVycm9yKFwiY2FwdHVyZWRPdXRwdXQgaXMgbnVsbFwiKTtcbiAgY2FwdHVyZWRPdXRwdXQucmVzZXQoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDYXB0dXJlZE91dHB1dCA9ICgpID0+IHtcbiAgaWYgKCFjYXB0dXJlZE91dHB1dCkgdGhyb3cgbmV3IEVycm9yKFwiY2FwdHVyZWRPdXRwdXQgaXMgbnVsbFwiKTtcbiAgcmV0dXJuIGNhcHR1cmVkT3V0cHV0LnRvU3RyaW5nKCk7XG59O1xuZXhwb3J0IGNvbnN0IGdldEluaXRpYWxPdXRwdXQgPSAoKSA9PiBpbml0aWFsT3V0cHV0O1xuIiwgImV4cG9ydCBsZXQgX3J1bklkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5leHBvcnQgY29uc3Qgc2V0UnVuSWQgPSAocnVuSWQ6IHN0cmluZykgPT4ge1xuICBfcnVuSWQgPSBydW5JZDtcbn07XG5cbmV4cG9ydCBsZXQgX2N5cHJlc3NWZXJzaW9uOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5leHBvcnQgY29uc3Qgc2V0Q3lwcmVzc1ZlcnNpb24gPSAoY3lwcmVzc1ZlcnNpb246IHN0cmluZykgPT4ge1xuICBfY3lwcmVzc1ZlcnNpb24gPSBjeXByZXNzVmVyc2lvbjtcbn07XG5cbmV4cG9ydCBsZXQgX2N1cnJlbnRzVmVyc2lvbjogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRzVmVyc2lvbiA9ICh2OiBzdHJpbmcpID0+IHtcbiAgX2N1cnJlbnRzVmVyc2lvbiA9IHY7XG59O1xuIiwgImV4cG9ydCBmdW5jdGlvbiBnZXRMZWdhbE5vdGljZSgpIHtcbiAgcmV0dXJuIGBcbkNvcHlyaWdodCAoQykgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IEN1cnJlbnRzIFNvZnR3YXJlIEluYyBodHRwczovL2N1cnJlbnRzLmRldlxuVGhpcyBpcyBmcmVlIHNvZnR3YXJlLCBhbmQgeW91IGFyZSB3ZWxjb21lIHRvIHJlZGlzdHJpYnV0ZSBpdCB1bmRlciBjZXJ0YWluXG5jb25kaXRpb25zLiBUaGlzIHByb2dyYW0gY29tZXMgd2l0aCBubyB3YXJyYW50eS4gUGFydHMgb2YgdGhpcyBwcm9ncmFtIGFyZSBNSVRcbmxpY2Vuc2VkLiBSZWZlciB0byB0aGUgbGljZW5zZSBmb3IgZGV0YWlsc1xuaHR0cHM6Ly9naXRodWIuY29tL2N1cnJlbnRzLWRldi9jeXByZXNzLWNsb3VkL2Jsb2IvbWFpbi9MSUNFTlNFLm1kXG5gO1xufVxuIiwgImV4cG9ydCAqIGZyb20gXCIuL2FwaVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdHlwZXNcIjtcbiIsICJpbXBvcnQgeyBtYWtlUmVxdWVzdCB9IGZyb20gXCIuLi9odHRwQ2xpZW50XCI7XG5pbXBvcnQge1xuICBDcmVhdGVSdW5QYXlsb2FkLFxuICBDcmVhdGVSdW5SZXNwb25zZSxcbiAgSW5zdGFuY2VBUElQYXlsb2FkLFxufSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgcHJpbnRXYXJuaW5ncyB9IGZyb20gXCIuL3dhcm5pbmdzXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVSdW4gPSBhc3luYyAocGF5bG9hZDogQ3JlYXRlUnVuUGF5bG9hZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG1ha2VSZXF1ZXN0PENyZWF0ZVJ1blJlc3BvbnNlLCBDcmVhdGVSdW5QYXlsb2FkPih7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICB1cmw6IFwiL3J1bnNcIixcbiAgICBkYXRhOiBwYXlsb2FkLFxuICB9KTtcblxuICBpZiAoKHJlc3BvbnNlLmRhdGEud2FybmluZ3M/Lmxlbmd0aCA/PyAwKSA+IDApIHtcbiAgICBwcmludFdhcm5pbmdzKHJlc3BvbnNlLmRhdGEud2FybmluZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlSW5zdGFuY2UgPSBhc3luYyAoe1xuICBydW5JZCxcbiAgZ3JvdXBJZCxcbiAgbWFjaGluZUlkLFxuICBwbGF0Zm9ybSxcbn06IEluc3RhbmNlQVBJUGF5bG9hZC5DcmVhdGVJbnN0YW5jZVBheWxvYWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBtYWtlUmVxdWVzdDxcbiAgICBJbnN0YW5jZUFQSVBheWxvYWQuQ3JlYXRlSW5zdGFuY2VSZXNwb25zZSxcbiAgICBJbnN0YW5jZUFQSVBheWxvYWQuQ3JlYXRlSW5zdGFuY2VQYXlsb2FkXG4gID4oe1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgdXJsOiBgcnVucy8ke3J1bklkfS9pbnN0YW5jZXNgLFxuICAgIGRhdGE6IHtcbiAgICAgIHJ1bklkLFxuICAgICAgZ3JvdXBJZCxcbiAgICAgIG1hY2hpbmVJZCxcbiAgICAgIHBsYXRmb3JtLFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiByZXNwb25zZS5kYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUJhdGNoZWRJbnN0YW5jZXMgPSBhc3luYyAoXG4gIGRhdGE6IEluc3RhbmNlQVBJUGF5bG9hZC5DcmVhdGVJbnN0YW5jZUN5UGF5bG9hZFxuKSA9PiB7XG4gIGNvbnN0IHJlc3BvbmUgPSBhd2FpdCBtYWtlUmVxdWVzdDxcbiAgICBJbnN0YW5jZUFQSVBheWxvYWQuQ3JlYXRlSW5zdGFuY2VzUmVzcG9uc2UsXG4gICAgSW5zdGFuY2VBUElQYXlsb2FkLkNyZWF0ZUluc3RhbmNlQ3lQYXlsb2FkXG4gID4oe1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgdXJsOiBgcnVucy8ke2RhdGEucnVuSWR9L2N5L2luc3RhbmNlc2AsXG4gICAgZGF0YSxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3BvbmUuZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRJbnN0YW5jZVRlc3RzID0gKFxuICBpbnN0YW5jZUlkOiBzdHJpbmcsXG4gIHBheWxvYWQ6IEluc3RhbmNlQVBJUGF5bG9hZC5TZXRJbnN0YW5jZVRlc3RzUGF5bG9hZFxuKSA9PlxuICBtYWtlUmVxdWVzdDx7fSwgSW5zdGFuY2VBUElQYXlsb2FkLlNldEluc3RhbmNlVGVzdHNQYXlsb2FkPih7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICB1cmw6IGBpbnN0YW5jZXMvJHtpbnN0YW5jZUlkfS90ZXN0c2AsXG4gICAgZGF0YTogcGF5bG9hZCxcbiAgfSkudGhlbigocmVzdWx0KSA9PiByZXN1bHQuZGF0YSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVJbnN0YW5jZVJlc3VsdHMgPSAoXG4gIGluc3RhbmNlSWQ6IHN0cmluZyxcbiAgcGF5bG9hZDogSW5zdGFuY2VBUElQYXlsb2FkLlVwZGF0ZUluc3RhbmNlUmVzdWx0c1BheWxvYWRcbikgPT5cbiAgbWFrZVJlcXVlc3Q8XG4gICAgSW5zdGFuY2VBUElQYXlsb2FkLlVwZGF0ZUluc3RhbmNlUmVzdWx0c1Jlc3BvbnNlLFxuICAgIEluc3RhbmNlQVBJUGF5bG9hZC5VcGRhdGVJbnN0YW5jZVJlc3VsdHNQYXlsb2FkXG4gID4oe1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgdXJsOiBgaW5zdGFuY2VzLyR7aW5zdGFuY2VJZH0vcmVzdWx0c2AsXG4gICAgZGF0YTogcGF5bG9hZCxcbiAgfSkudGhlbigocmVzdWx0KSA9PiByZXN1bHQuZGF0YSk7XG5cbmV4cG9ydCBjb25zdCByZXBvcnRJbnN0YW5jZVJlc3VsdHNNZXJnZWQgPSAoXG4gIGluc3RhbmNlSWQ6IHN0cmluZyxcbiAgcGF5bG9hZDogSW5zdGFuY2VBUElQYXlsb2FkLlVwZGF0ZUluc3RhbmNlUmVzdWx0c01lcmdlZFBheWxvYWRcbikgPT5cbiAgbWFrZVJlcXVlc3Q8XG4gICAgSW5zdGFuY2VBUElQYXlsb2FkLlVwZGF0ZUluc3RhbmNlUmVzdWx0c1Jlc3BvbnNlLFxuICAgIEluc3RhbmNlQVBJUGF5bG9hZC5VcGRhdGVJbnN0YW5jZVJlc3VsdHNNZXJnZWRQYXlsb2FkXG4gID4oe1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgdXJsOiBgaW5zdGFuY2VzLyR7aW5zdGFuY2VJZH0vY3kvcmVzdWx0c2AsXG4gICAgZGF0YTogcGF5bG9hZCxcbiAgfSkudGhlbigocmVzdWx0KSA9PiByZXN1bHQuZGF0YSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVJbnN0YW5jZVN0ZG91dCA9IChpbnN0YW5jZUlkOiBzdHJpbmcsIHN0ZG91dDogc3RyaW5nKSA9PlxuICBtYWtlUmVxdWVzdDxhbnksIHsgc3Rkb3V0OiBzdHJpbmcgfT4oe1xuICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICB1cmw6IGBpbnN0YW5jZXMvJHtpbnN0YW5jZUlkfS9zdGRvdXRgLFxuICAgIGRhdGE6IHtcbiAgICAgIHN0ZG91dCxcbiAgICB9LFxuICB9KTtcbiIsICJleHBvcnQgKiBmcm9tIFwiLi9jb25maWdcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2h0dHBDbGllbnRcIjtcbiIsICJpbXBvcnQgeyBBeGlvc0Vycm9yLCBpc0F4aW9zRXJyb3IgfSBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGNvbnN0IGlzUmV0cmlhYmxlRXJyb3IgPSAoZXJyOiBBeGlvc0Vycm9yKTogYm9vbGVhbiA9PiB7XG4gIGlmIChlcnIuY29kZSA9PT0gXCJFQ09OTkFCT1JURURcIikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChlcnIuY29kZSA9PT0gXCJFQ09OTlJFRlVTRURcIikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChlcnIuY29kZSA9PT0gXCJFVElNRURPVVRcIikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKCFpc0F4aW9zRXJyb3IoZXJyKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAhIShcbiAgICBlcnI/LnJlc3BvbnNlPy5zdGF0dXMgJiZcbiAgICA1MDAgPD0gZXJyLnJlc3BvbnNlLnN0YXR1cyAmJlxuICAgIGVyci5yZXNwb25zZS5zdGF0dXMgPCA2MDBcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXREZWxheSA9IChpOiBudW1iZXIpID0+IFs1ICogMTAwMCwgMTAgKiAxMDAwLCAzMCAqIDEwMDBdW2kgLSAxXTtcblxubGV0IGJhc2VVUkwgPSBcImh0dHBzOi8vY3kuY3VycmVudHMuZGV2XCI7XG5leHBvcnQgY29uc3QgZ2V0QVBJQmFzZVVybCA9ICgpID0+IGJhc2VVUkwgPz8gXCJodHRwczovL2N5LmN1cnJlbnRzLmRldlwiO1xuZXhwb3J0IGNvbnN0IHNldEFQSUJhc2VVcmwgPSAodXJsPzogc3RyaW5nKSA9PlxuICAoYmFzZVVSTCA9IHVybCA/PyBcImh0dHBzOi8vY3kuY3VycmVudHMuZGV2XCIpO1xuIiwgImltcG9ydCBheGlvcywge1xuICBBeGlvc0Vycm9yLFxuICBBeGlvc0luc3RhbmNlLFxuICBBeGlvc1JlcXVlc3RDb25maWcsXG4gIEF4aW9zUmVzcG9uc2UsXG4gIFJhd0F4aW9zUmVxdWVzdEhlYWRlcnMsXG59IGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGF4aW9zUmV0cnkgZnJvbSBcImF4aW9zLXJldHJ5XCI7XG5pbXBvcnQgRGVidWcgZnJvbSBcImRlYnVnXCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgcHJldHR5TWlsbGlzZWNvbmRzIGZyb20gXCJwcmV0dHktbXNcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRzQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgVmFsaWRhdGlvbkVycm9yIH0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuaW1wb3J0IHsgd2FybiB9IGZyb20gXCIuLi9sb2dcIjtcbmltcG9ydCB7IF9jdXJyZW50c1ZlcnNpb24sIF9jeXByZXNzVmVyc2lvbiwgX3J1bklkIH0gZnJvbSBcIi4uL3N0YXRlL2dsb2JhbFwiO1xuaW1wb3J0IHsgZ2V0QVBJQmFzZVVybCwgZ2V0RGVsYXksIGlzUmV0cmlhYmxlRXJyb3IgfSBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB7IG1heWJlUHJpbnRFcnJvcnMgfSBmcm9tIFwiLi9wcmludEVycm9yc1wiO1xuXG5jb25zdCBkZWJ1ZyA9IERlYnVnKFwiY3VycmVudHM6YXBpXCIpO1xuXG5jb25zdCBNQVhfUkVUUklFUyA9IDM7XG5jb25zdCBUSU1FT1VUX01TID0gMzAgKiAxMDAwO1xubGV0IF9jbGllbnQ6IEF4aW9zSW5zdGFuY2UgfCBudWxsID0gbnVsbDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENsaWVudCgpIHtcbiAgaWYgKF9jbGllbnQpIHtcbiAgICByZXR1cm4gX2NsaWVudDtcbiAgfVxuICBjb25zdCBjdXJyZW50c0NvbmZpZyA9IGF3YWl0IGdldEN1cnJlbnRzQ29uZmlnKCk7XG4gIF9jbGllbnQgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IGdldEFQSUJhc2VVcmwoKSxcbiAgICB0aW1lb3V0OiBUSU1FT1VUX01TLFxuICB9KTtcblxuICBfY2xpZW50LmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZSgoY29uZmlnKSA9PiB7XG4gICAgY29uc3QgY2N5VmVyc29uID0gX2N1cnJlbnRzVmVyc2lvbiA/PyBcIjAuMC4wXCI7XG4gICAgY29uc3QgaGVhZGVyczogUmF3QXhpb3NSZXF1ZXN0SGVhZGVycyA9IHtcbiAgICAgIC4uLmNvbmZpZy5oZWFkZXJzLFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgXCJ4LWN5cHJlc3MtcmVxdWVzdC1hdHRlbXB0XCI6IGNvbmZpZ1tcImF4aW9zLXJldHJ5XCJdPy5yZXRyeUNvdW50ID8/IDAsXG4gICAgICBcIngtY3lwcmVzcy12ZXJzaW9uXCI6IF9jeXByZXNzVmVyc2lvbiA/PyBcIjAuMC4wXCIsXG4gICAgICBcIngtY2N5LXZlcnNpb25cIjogY2N5VmVyc29uLFxuICAgICAgXCJVc2VyLUFnZW50XCI6IGBjeXByZXNzLWNsb3VkLyR7Y2N5VmVyc29ufWAsXG4gICAgfTtcbiAgICBpZiAoX3J1bklkKSB7XG4gICAgICBoZWFkZXJzW1wieC1jeXByZXNzLXJ1bi1pZFwiXSA9IF9ydW5JZDtcbiAgICB9XG4gICAgaWYgKCFoZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdKSB7XG4gICAgICBoZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gXCJhcHBsaWNhdGlvbi9qc29uXCI7XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRzQ29uZmlnLm5ldHdvcmtIZWFkZXJzKSB7XG4gICAgICBjb25zdCBmaWx0ZXJlZEhlYWRlcnMgPSBfLm9taXQoY3VycmVudHNDb25maWcubmV0d29ya0hlYWRlcnMsIFtcbiAgICAgICAgXCJ4LWN5cHJlc3MtcmVxdWVzdC1hdHRlbXB0XCIsXG4gICAgICAgIFwieC1jeXByZXNzLXZlcnNpb25cIixcbiAgICAgICAgXCJ4LWNjeS12ZXJzaW9uXCIsXG4gICAgICAgIFwieC1jeXByZXNzLXJ1bi1pZFwiLFxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiLFxuICAgICAgXSk7XG4gICAgICBkZWJ1ZyhcInVzaW5nIGN1c3RvbSBuZXR3b3JrIGhlYWRlcnM6ICVvXCIsIGZpbHRlcmVkSGVhZGVycyk7XG4gICAgICBPYmplY3QuYXNzaWduKGhlYWRlcnMsIGZpbHRlcmVkSGVhZGVycyk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVxID0ge1xuICAgICAgLi4uY29uZmlnLFxuICAgICAgaGVhZGVycyxcbiAgICB9O1xuXG4gICAgZGVidWcoXCJuZXR3b3JrIHJlcXVlc3Q6ICVvXCIsIHtcbiAgICAgIC4uLl8ucGljayhyZXEsIFwibWV0aG9kXCIsIFwidXJsXCIsIFwiaGVhZGVyc1wiKSxcbiAgICAgIGRhdGE6IEJ1ZmZlci5pc0J1ZmZlcihyZXEuZGF0YSkgPyBcImJ1ZmZlclwiIDogcmVxLmRhdGEsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxO1xuICB9KTtcblxuICBheGlvc1JldHJ5KF9jbGllbnQsIHtcbiAgICByZXRyaWVzOiBNQVhfUkVUUklFUyxcbiAgICByZXRyeUNvbmRpdGlvbjogaXNSZXRyaWFibGVFcnJvcixcbiAgICByZXRyeURlbGF5OiBnZXREZWxheSxcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb25SZXRyeSxcbiAgICBzaG91bGRSZXNldFRpbWVvdXQ6IHRydWUsXG4gIH0pO1xuICByZXR1cm4gX2NsaWVudDtcbn1cblxuZnVuY3Rpb24gb25SZXRyeShcbiAgcmV0cnlDb3VudDogbnVtYmVyLFxuICBlcnI6IEF4aW9zRXJyb3I8eyBtZXNzYWdlOiBzdHJpbmc7IGVycm9ycz86IHN0cmluZ1tdIH0+LFxuICBjb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZ1xuKSB7XG4gIHdhcm4oXG4gICAgXCJOZXR3b3JrIHJlcXVlc3QgJyVzJyBmYWlsZWQ6ICclcycuIE5leHQgYXR0ZW1wdCBpcyBpbiAlcyAoJWQvJWQpLlwiLFxuICAgIGAke2NvbmZpZy5tZXRob2R9ICR7Y29uZmlnLnVybH1gLFxuICAgIGVyci5tZXNzYWdlLFxuICAgIHByZXR0eU1pbGxpc2Vjb25kcyhnZXREZWxheShyZXRyeUNvdW50KSksXG4gICAgcmV0cnlDb3VudCxcbiAgICBNQVhfUkVUUklFU1xuICApO1xufVxuXG5leHBvcnQgY29uc3QgbWFrZVJlcXVlc3QgPSBhc3luYyA8VCA9IGFueSwgRCA9IGFueT4oXG4gIGNvbmZpZzogQXhpb3NSZXF1ZXN0Q29uZmlnPEQ+XG4pID0+IHtcbiAgcmV0dXJuIChhd2FpdCBnZXRDbGllbnQoKSk8RCwgQXhpb3NSZXNwb25zZTxUPj4oY29uZmlnKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIGRlYnVnKFwibmV0d29yayByZXNwb25zZTogJW9cIiwgXy5vbWl0KHJlcywgXCJyZXF1ZXN0XCIsIFwiY29uZmlnXCIpKTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBtYXliZVByaW50RXJyb3JzKGVycm9yKTtcbiAgICAgIHRocm93IG5ldyBWYWxpZGF0aW9uRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfSk7XG59O1xuIiwgImV4cG9ydCAqIGZyb20gXCIuL2NvbmZpZ1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vcGFyYW1zXCI7XG4iLCAiaW1wb3J0IERlYnVnIGZyb20gXCJkZWJ1Z1wiO1xuXG5pbXBvcnQgeyBQLCBtYXRjaCB9IGZyb20gXCJ0cy1wYXR0ZXJuXCI7XG5pbXBvcnQgeyBEZXRlY3RlZEJyb3dzZXIsIFZhbGlkYXRlZEN1cnJlbnRzUGFyYW1ldGVycyB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgYm9vdEN5cHJlc3MgfSBmcm9tIFwiLi4vYm9vdHN0cmFwXCI7XG5pbXBvcnQgeyBkaW0sIGluZm8sIHdhcm4gfSBmcm9tIFwiLi4vbG9nXCI7XG5pbXBvcnQgeyBnZXRDb25maWdGaWxlUGF0aCB9IGZyb20gXCIuL3BhdGhcIjtcblxuY29uc3QgZGVidWcgPSBEZWJ1ZyhcImN1cnJlbnRzOmNvbmZpZ1wiKTtcblxuZXhwb3J0IHR5cGUgRTJFQ29uZmlnID0ge1xuICBiYXRjaFNpemU6IG51bWJlcjtcbn07XG5leHBvcnQgdHlwZSBDb21wb25lbnRDb25maWcgPSB7XG4gIGJhdGNoU2l6ZTogbnVtYmVyO1xufTtcbmV4cG9ydCB0eXBlIEN1cnJlbnRzQ29uZmlnID0ge1xuICBwcm9qZWN0SWQ/OiBzdHJpbmc7XG4gIHJlY29yZEtleT86IHN0cmluZztcbiAgY2xvdWRTZXJ2aWNlVXJsOiBzdHJpbmc7XG4gIGUyZTogRTJFQ29uZmlnO1xuICBjb21wb25lbnQ6IENvbXBvbmVudENvbmZpZztcbiAgbmV0d29ya0hlYWRlcnM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xufTtcblxubGV0IF9jb25maWc6IEN1cnJlbnRzQ29uZmlnIHwgbnVsbCA9IG51bGw7XG5cbmNvbnN0IGRlZmF1bHRDb25maWc6IEN1cnJlbnRzQ29uZmlnID0ge1xuICBlMmU6IHtcbiAgICBiYXRjaFNpemU6IDMsXG4gIH0sXG4gIGNvbXBvbmVudDoge1xuICAgIGJhdGNoU2l6ZTogNSxcbiAgfSxcbiAgY2xvdWRTZXJ2aWNlVXJsOiBcImh0dHBzOi8vY3kuY3VycmVudHMuZGV2XCIsXG4gIG5ldHdvcmtIZWFkZXJzOiB1bmRlZmluZWQsXG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudHNDb25maWcoXG4gIHByb2plY3RSb290Pzogc3RyaW5nLFxuICBleHBsaWNpdENvbmZpZ0ZpbGVQYXRoPzogc3RyaW5nXG4pOiBQcm9taXNlPEN1cnJlbnRzQ29uZmlnPiB7XG4gIGlmIChfY29uZmlnKSB7XG4gICAgcmV0dXJuIF9jb25maWc7XG4gIH1cblxuICBjb25zdCBjb25maWdGaWxlUGF0aCA9IGdldENvbmZpZ0ZpbGVQYXRoKHByb2plY3RSb290LCBleHBsaWNpdENvbmZpZ0ZpbGVQYXRoKTtcbiAgLy8gdHJ5IGxvYWRpbmcgcG9zc2libGUgY29uZmlnIGZpbGVzXG4gIGZvciAoY29uc3QgZmlsZXBhdGggb2YgY29uZmlnRmlsZVBhdGgpIHtcbiAgICBjb25zdCBjb25maWcgPSBtYXRjaChhd2FpdCBsb2FkQ29uZmlnRmlsZShmaWxlcGF0aCkpXG4gICAgICAud2l0aCh7IGRlZmF1bHQ6IFAubm90KFAubnVsbGlzaCkgfSwgKGMpID0+IGMuZGVmYXVsdClcbiAgICAgIC53aXRoKFAubm90KFAubnVsbGlzaCksIChjKSA9PiBjKVxuICAgICAgLm90aGVyd2lzZSgoKSA9PiBudWxsKTtcblxuICAgIGlmIChjb25maWcpIHtcbiAgICAgIGRlYnVnKFwibG9hZGVkIGN1cnJlbnRzIGNvbmZpZyBmcm9tICclcydcXG4lT1wiLCBmaWxlcGF0aCwgY29uZmlnKTtcbiAgICAgIGluZm8oYFVzaW5nIGNvbmZpZyBmaWxlOiAke2RpbShmaWxlcGF0aCl9YCk7XG4gICAgICBfY29uZmlnID0ge1xuICAgICAgICAuLi5kZWZhdWx0Q29uZmlnLFxuICAgICAgICAuLi5jb25maWcsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIF9jb25maWc7XG4gICAgfVxuICB9XG5cbiAgd2FybihcbiAgICBcIkZhaWxlZCB0byBsb2FkIGNvbmZpZyBmaWxlLCBmYWxsaW5nIGJhY2sgdG8gdGhlIGRlZmF1bHQgY29uZmlnLiBBdHRlbXB0ZWQgbG9jYXRpb25zOiAlc1wiLFxuICAgIGNvbmZpZ0ZpbGVQYXRoXG4gICk7XG4gIF9jb25maWcgPSBkZWZhdWx0Q29uZmlnO1xuICByZXR1cm4gX2NvbmZpZztcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZENvbmZpZ0ZpbGUoZmlsZXBhdGg6IHN0cmluZykge1xuICB0cnkge1xuICAgIGRlYnVnKFwibG9hZGluZyBjdXJyZW50cyBjb25maWcgZmlsZSBmcm9tICclcydcIiwgZmlsZXBhdGgpO1xuICAgIHJldHVybiBhd2FpdCBpbXBvcnQoZmlsZXBhdGgpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZGVidWcoXCJmYWlsZWQgbG9hZGluZyBjb25maWcgZmlsZSBmcm9tOiAlc1wiLCBlKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBNZXJnZWRDb25maWcgPSBBd2FpdGVkPFJldHVyblR5cGU8dHlwZW9mIGdldE1lcmdlZENvbmZpZz4+O1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lcmdlZENvbmZpZyhwYXJhbXM6IFZhbGlkYXRlZEN1cnJlbnRzUGFyYW1ldGVycykge1xuICBkZWJ1ZyhcInJlc29sdmluZyBjeXByZXNzIGNvbmZpZ1wiKTtcbiAgY29uc3QgY3lwcmVzc1Jlc29sdmVkQ29uZmlnOlxuICAgIHwgKEN5cHJlc3MuUmVzb2x2ZWRDb25maWdPcHRpb25zICYge1xuICAgICAgICBwcm9qZWN0Um9vdDogc3RyaW5nO1xuICAgICAgICByYXdKc29uOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgICAgICAgYnJvd3NlcnM6IERldGVjdGVkQnJvd3NlcltdO1xuICAgICAgICB2ZXJzaW9uOiBzdHJpbmc7XG4gICAgICB9KVxuICAgIHwgdW5kZWZpbmVkID0gYXdhaXQgYm9vdEN5cHJlc3MocGFyYW1zKTtcblxuICBkZWJ1ZyhcImN5cHJlc3MgcmVzb2x2ZWRDb25maWc6ICVPXCIsIGN5cHJlc3NSZXNvbHZlZENvbmZpZyk7XG5cbiAgLy8gQHRzLWlnbm9yZVxuICBjb25zdCByYXdFMkVQYXR0ZXJuID0gY3lwcmVzc1Jlc29sdmVkQ29uZmlnLnJhd0pzb24/LmUyZT8uc3BlY1BhdHRlcm47XG4gIGxldCBhZGRpdGlvbmFsSWdub3JlUGF0dGVybjogc3RyaW5nW10gPSBbXTtcbiAgaWYgKHBhcmFtcy50ZXN0aW5nVHlwZSA9PT0gXCJjb21wb25lbnRcIiAmJiByYXdFMkVQYXR0ZXJuKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJuID0gcmF3RTJFUGF0dGVybjtcbiAgfVxuXG4gIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vY3lwcmVzcy1pby9jeXByZXNzL2Jsb2IvZWQwNjY4ZTI0YzJlZTY3NTNiYmQyNWFlNDY3Y2U5NGFlNTg1Nzc0MS9wYWNrYWdlcy9jb25maWcvc3JjL29wdGlvbnMudHMjTDQ1N1xuICAvLyBhbmQgaHR0cHM6Ly9naXRodWIuY29tL2N5cHJlc3MtaW8vY3lwcmVzcy9ibG9iL2RldmVsb3AvcGFja2FnZXMvY29uZmlnL3NyYy9wcm9qZWN0L3V0aWxzLnRzI0w0MTJcbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIHByb2plY3RSb290OiBjeXByZXNzUmVzb2x2ZWRDb25maWc/LnByb2plY3RSb290IHx8IHByb2Nlc3MuY3dkKCksXG4gICAgcHJvamVjdElkOiBwYXJhbXMucHJvamVjdElkLFxuICAgIHNwZWNQYXR0ZXJuOiBjeXByZXNzUmVzb2x2ZWRDb25maWc/LnNwZWNQYXR0ZXJuIHx8IFwiKiovKi4qXCIsXG4gICAgZXhjbHVkZVNwZWNQYXR0ZXJuOlxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY3lwcmVzc1Jlc29sdmVkQ29uZmlnPy5yZXNvbHZlZC5leGNsdWRlU3BlY1BhdHRlcm4udmFsdWUgPz8gW10sXG4gICAgYWRkaXRpb25hbElnbm9yZVBhdHRlcm4sXG4gICAgcmVzb2x2ZWQ6IGN5cHJlc3NSZXNvbHZlZENvbmZpZyxcbiAgICBleHBlcmltZW50YWxDb3ZlcmFnZVJlY29yZGluZzogcGFyYW1zLmV4cGVyaW1lbnRhbENvdmVyYWdlUmVjb3JkaW5nLFxuICB9O1xuICBkZWJ1ZyhcIm1lcmdlZCBjb25maWc6ICVPXCIsIHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCAiZXhwb3J0ICogZnJvbSBcIi4vYm9vdHN0cmFwXCI7XG4iLCAiaW1wb3J0IHsgZ2V0QmluUGF0aCB9IGZyb20gXCJjeTJcIjtcbmltcG9ydCB7IFZhbGlkYXRlZEN1cnJlbnRzUGFyYW1ldGVycyB9IGZyb20gXCJjeXByZXNzLWNsb3VkL3R5cGVzXCI7XG5pbXBvcnQgRGVidWcgZnJvbSBcImRlYnVnXCI7XG5pbXBvcnQgZXhlY2EsIHsgRXhlY2FFcnJvciB9IGZyb20gXCJleGVjYVwiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHsgVmFsaWRhdGlvbkVycm9yIH0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuaW1wb3J0IHsgY3JlYXRlVGVtcEZpbGUgfSBmcm9tIFwiLi4vZnNcIjtcbmltcG9ydCB7IGJvbGQsIGluZm8gfSBmcm9tIFwiLi4vbG9nXCI7XG5pbXBvcnQgeyByZXF1aXJlIH0gZnJvbSBcIi4uL3JlcXVpcmVcIjtcbmltcG9ydCB7IGdldEJvb3RzdHJhcEFyZ3MgfSBmcm9tIFwiLi9zZXJpYWxpemVyXCI7XG5cbmNvbnN0IGRlYnVnID0gRGVidWcoXCJjdXJyZW50czpib290XCIpO1xuXG5leHBvcnQgY29uc3QgYm9vdEN5cHJlc3MgPSBhc3luYyAocGFyYW1zOiBWYWxpZGF0ZWRDdXJyZW50c1BhcmFtZXRlcnMpID0+IHtcbiAgZGVidWcoXCJib290aW5nIGN5cHJlc3MuLi5cIik7XG4gIGNvbnN0IHRlbXBGaWxlUGF0aCA9IGF3YWl0IGNyZWF0ZVRlbXBGaWxlKCk7XG5cbiAgY29uc3QgY3lwcmVzc0JpbiA9IGF3YWl0IGdldEJpblBhdGgocmVxdWlyZS5yZXNvbHZlKFwiY3lwcmVzc1wiKSk7XG4gIGRlYnVnKFwiY3lwcmVzcyBleGVjdXRhYmxlIGxvY2F0aW9uOiAlc1wiLCBjeXByZXNzQmluKTtcblxuICAvLyBpdCBpcyBpbXBvcnRhbnQgdG8gcGFzcyB0aGUgc2FtZSBhcmdzIGluIG9yZGVyIHRvIGdldCB0aGUgc2FtZSBjb25maWcgYXMgZm9yIHRoZSBhY3R1YWwgcnVuXG4gIGNvbnN0IGFyZ3MgPSBnZXRCb290c3RyYXBBcmdzKHsgdGVtcEZpbGVQYXRoLCBwYXJhbXMgfSk7XG4gIGRlYnVnKFwiYm9vdGluZyBjeXByZXNzIHdpdGggYXJnczogJW9cIiwgYXJncyk7XG4gIGNvbnN0IHsgc3Rkb3V0LCBzdGRlcnIgfSA9IGF3YWl0IGV4ZWNDeXByZXNzKGN5cHJlc3NCaW4sIGFyZ3MpO1xuXG4gIGlmICghZnMuZXhpc3RzU3luYyh0ZW1wRmlsZVBhdGgpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYENhbm5vdCByZXNvbHZlIGN5cHJlc3MgY29uZmlndXJhdGlvbiBmcm9tICR7dGVtcEZpbGVQYXRofS4gUGxlYXNlIHJlcG9ydCB0aGUgaXNzdWUuYFxuICAgICk7XG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBmID0gZnMucmVhZEZpbGVTeW5jKHRlbXBGaWxlUGF0aCwgXCJ1dGYtOFwiKTtcbiAgICBpZiAoIWYpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIklzIGN5cHJlc3MtY2xvdWQvcGx1Z2luIGluc3RhbGxlZD9cIik7XG4gICAgfVxuICAgIGRlYnVnKFwiY3lwcmVzcyBjb25maWcgJyVzJzogJyVzJ1wiLCB0ZW1wRmlsZVBhdGgsIGYpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKGYpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWJ1ZyhcInJlYWQgY29uZmlnIHRlbXAgZmlsZSBmYWlsZWQ6ICVvXCIsIGVycik7XG4gICAgaW5mbyhib2xkKFwiQ3lwcmVzcyBzdGRvdXQ6XFxuXCIpLCBzdGRvdXQpO1xuICAgIGluZm8oYm9sZChcIkN5cHJlc3Mgc3RkZXJyOlxcblwiKSwgc3RkZXJyKTtcblxuICAgIHRocm93IG5ldyBWYWxpZGF0aW9uRXJyb3IoYFVuYWJsZSB0byByZXNvbHZlIGN5cHJlc3MgY29uZmlndXJhdGlvblxuLSBtYWtlIHN1cmUgdGhhdCAnY3lwcmVzcy1jbG91ZC9wbHVnaW4nIGlzIGluc3RhbGxlZFxuLSByZXBvcnQgdGhlIGlzc3VlIHRvZ2V0aGVyIHdpdGggY3lwcmVzcyBzdGRvdXQgYW5kIHN0ZGVyclxuYCk7XG4gIH1cbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWNDeXByZXNzKGN5cHJlc3NCaW46IHN0cmluZywgYXJnczogcmVhZG9ubHkgc3RyaW5nW10pIHtcbiAgbGV0IHN0ZG91dCA9IFwiXCI7XG4gIGxldCBzdGRlcnIgPSBcIlwiO1xuICB0cnkge1xuICAgIGF3YWl0IGV4ZWNhKGN5cHJlc3NCaW4sIFtcInJ1blwiLCAuLi5hcmdzXSwge1xuICAgICAgc3RkaW86IFwicGlwZVwiLFxuICAgICAgZW52OiB7XG4gICAgICAgIC4uLnByb2Nlc3MuZW52LFxuICAgICAgICAvLyBwcmV2ZW50IHdhcm5pbmdzIGFib3V0IHJlY29yZGluZyBtb2RlXG4gICAgICAgIENZUFJFU1NfUkVDT1JEX0tFWTogdW5kZWZpbmVkLFxuICAgICAgICBDWVBSRVNTX1BST0pFQ1RfSUQ6IHVuZGVmaW5lZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlYnVnKFwiZXhlYyBjeXByZXNzIGZhaWxlZCAoY2VydGFpbiBmYWlsdXJlcyBhcmUgZXhwZWN0ZWQpOiAlb1wiLCBlcnIpO1xuICAgIHN0ZG91dCA9IChlcnIgYXMgRXhlY2FFcnJvcikuc3Rkb3V0O1xuICAgIHN0ZGVyciA9IChlcnIgYXMgRXhlY2FFcnJvcikuc3RkZXJyO1xuICB9XG4gIHJldHVybiB7IHN0ZG91dCwgc3RkZXJyIH07XG59XG4iLCAiaW1wb3J0IHsgZmlsZSB9IGZyb20gXCJ0bXAtcHJvbWlzZVwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVGVtcEZpbGUgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgcGF0aCB9ID0gYXdhaXQgZmlsZSgpO1xuICByZXR1cm4gcGF0aDtcbn07XG4iLCAiaW1wb3J0IHtcbiAgQ3VycmVudHNSdW5QYXJhbWV0ZXJzLFxuICBDeXByZXNzUnVuUGFyYW1ldGVycyxcbn0gZnJvbSBcImN5cHJlc3MtY2xvdWQvdHlwZXNcIjtcbmltcG9ydCBEZWJ1ZyBmcm9tIFwiZGVidWdcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IGdldEN5cHJlc3NSdW5BUElQYXJhbXMgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBzaG91bGRFbmFibGVQbHVnaW5EZWJ1ZyB9IGZyb20gXCIuLi9kZWJ1Z1wiO1xuaW1wb3J0IHsgc29ydE9iamVjdEtleXMgfSBmcm9tIFwiLi4vbGFuZ1wiO1xuaW1wb3J0IHsgZ2V0UmFuZG9tU3RyaW5nIH0gZnJvbSBcIi4uL25hbm9cIjtcbmNvbnN0IGRlYnVnID0gRGVidWcoXCJjdXJyZW50czpib290XCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm9vdHN0cmFwQXJncyh7XG4gIHBhcmFtcyxcbiAgdGVtcEZpbGVQYXRoLFxufToge1xuICBwYXJhbXM6IEN1cnJlbnRzUnVuUGFyYW1ldGVycztcbiAgdGVtcEZpbGVQYXRoOiBzdHJpbmc7XG59KSB7XG4gIHJldHVybiBfLmNoYWluKGdldEN5cHJlc3NDTElQYXJhbXMocGFyYW1zKSlcbiAgICAudGhydSgob3B0cykgPT4gKHtcbiAgICAgIC4uLm9wdHMsXG4gICAgICAvLyBtZXJnZSB0aGUgZW52IHdpdGggdGhlIGN1cnJlbnRzIHNwZWNpZmljIGVudiB2YXJpYWJsZXNcbiAgICAgIGVudjoge1xuICAgICAgICAuLi4ob3B0cy5lbnYgPz8ge30pLFxuICAgICAgICBjdXJyZW50c19tYXJrZXI6IHRydWUsXG4gICAgICAgIGN1cnJlbnRzX3RlbXBfZmlsZTogdGVtcEZpbGVQYXRoLFxuICAgICAgICBjdXJyZW50c19kZWJ1Z19lbmFibGVkOiBzaG91bGRFbmFibGVQbHVnaW5EZWJ1ZyhwYXJhbXMuY2xvdWREZWJ1ZyksXG4gICAgICB9LFxuICAgIH0pKVxuICAgIC50YXAoKG9wdHMpID0+IHtcbiAgICAgIGRlYnVnKFwiY3lwcmVzcyBib290c3RyYXAgcGFyYW1zOiAlb1wiLCBvcHRzKTtcbiAgICB9KVxuICAgIC50aHJ1KChvcHRzKSA9PiAoe1xuICAgICAgLi4ub3B0cyxcbiAgICAgIGVudjogc29ydE9iamVjdEtleXMob3B0cy5lbnYgPz8ge30pLFxuICAgIH0pKVxuICAgIC50aHJ1KHNlcmlhbGl6ZU9wdGlvbnMpXG4gICAgLnRhcCgob3B0cykgPT4ge1xuICAgICAgZGVidWcoXCJjeXByZXNzIGJvb3RzdHJhcCBzZXJpYWxpemVkIHBhcmFtczogJW9cIiwgb3B0cyk7XG4gICAgfSlcbiAgICAudGhydSgoYXJncykgPT4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uYXJncyxcbiAgICAgICAgXCItLXNwZWNcIixcbiAgICAgICAgZ2V0UmFuZG9tU3RyaW5nKCksXG4gICAgICAgIHBhcmFtcy50ZXN0aW5nVHlwZSA9PT0gXCJjb21wb25lbnRcIiA/IFwiLS1jb21wb25lbnRcIiA6IFwiLS1lMmVcIixcbiAgICAgIF07XG4gICAgfSlcbiAgICAudmFsdWUoKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBDdXJyZW50cyBvcHRpb25zIHRvIEN5cHJlc3MgQ0xJIHBhcmFtcy5cbiAqIEN5cHJlc3MgQ0xJIG9wdGlvbnMgYXJlIGRpZmZlcmVudCBmcm9tIEN5cHJlc3MgbW9kdWxlIEFQSSBvcHRpb25zLlxuICpcbiAqIEBwYXJhbSBwYXJhbXMgQ3VycmVudHMgcGFyYW1cbiAqIEByZXR1cm5zIEN5cHJlc3MgQ0xJIHBhcmFtc1xuICogQHNlZSBodHRwczovL2RvY3MuY3lwcmVzcy5pby9ndWlkZXMvZ3VpZGVzL2NvbW1hbmQtbGluZSNjeXByZXNzLXJ1blxuICogQHNlZSBodHRwczovL2RvY3MuY3lwcmVzcy5pby9hcGkvbW9kdWxlLWFwaVxuICovXG5mdW5jdGlvbiBnZXRDeXByZXNzQ0xJUGFyYW1zKFxuICBwYXJhbXM6IEN1cnJlbnRzUnVuUGFyYW1ldGVyc1xuKTogQ3lwcmVzc1J1blBhcmFtZXRlcnMge1xuICBjb25zdCByZXN1bHQgPSBnZXRDeXByZXNzUnVuQVBJUGFyYW1zKHBhcmFtcyk7XG4gIGNvbnN0IHRlc3RpbmdUeXBlID1cbiAgICByZXN1bHQudGVzdGluZ1R5cGUgPT09IFwiY29tcG9uZW50XCJcbiAgICAgID8ge1xuICAgICAgICAgIGNvbXBvbmVudDogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgOiB7fTtcbiAgcmV0dXJuIHtcbiAgICAuLi5fLm9taXQocmVzdWx0LCBcInRlc3RpbmdUeXBlXCIpLFxuICAgIC4uLnRlc3RpbmdUeXBlLFxuICB9O1xufVxuXG5mdW5jdGlvbiBzZXJpYWxpemVPcHRpb25zKG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogc3RyaW5nW10ge1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXMob3B0aW9ucykuZmxhdE1hcCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgY29uc3QgX2tleSA9IGRhc2hlZChrZXkpO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IHRydWUgPyBbYC0tJHtfa2V5fWBdIDogW2AtLSR7X2tleX1gLCBmYWxzZV07XG4gICAgfVxuXG4gICAgaWYgKF8uaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gW2AtLSR7X2tleX1gLCBzZXJpYWxpemVDb21wbGV4UGFyYW0odmFsdWUpXTtcbiAgICB9XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIFtgLS0ke19rZXl9YCwgdmFsdWUudG9TdHJpbmcoKV07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXJpYWxpemVDb21wbGV4UGFyYW0ocGFyYW06IHt9KSB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShwYXJhbSk7XG59XG5cbmNvbnN0IGRhc2hlZCA9ICh2OiBzdHJpbmcpID0+IHYucmVwbGFjZSgvW0EtWl0vZywgKG0pID0+IFwiLVwiICsgbS50b0xvd2VyQ2FzZSgpKTtcbiIsICJpbXBvcnQgZGVidWcgZnJvbSBcImRlYnVnXCI7XG5pbXBvcnQgeyBtYXRjaCwgUCB9IGZyb20gXCJ0cy1wYXR0ZXJuXCI7XG5pbXBvcnQgeyBDdXJyZW50c1J1blBhcmFtZXRlcnMsIERlYnVnTW9kZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5lbnVtIERlYnVnVG9rZW5zIHtcbiAgQ3VycmVudHMgPSBcImN1cnJlbnRzOipcIixcbiAgQ3lwcmVzcyA9IFwiY3lwcmVzczoqXCIsXG4gIENvbW1pdEluZm8gPSBcImNvbW1pdC1pbmZvXCIsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG91bGRFbmFibGVQbHVnaW5EZWJ1ZyhcbiAgcGFyYW06IEN1cnJlbnRzUnVuUGFyYW1ldGVyc1tcImNsb3VkRGVidWdcIl1cbikge1xuICByZXR1cm4gbWF0Y2gocGFyYW0pXG4gICAgLndpdGgoUC5udWxsaXNoLCAoKSA9PiBmYWxzZSlcbiAgICAud2l0aChEZWJ1Z01vZGUuTm9uZSwgKCkgPT4gZmFsc2UpXG4gICAgLndpdGgodHJ1ZSwgKCkgPT4gdHJ1ZSlcbiAgICAud2l0aChEZWJ1Z01vZGUuQWxsLCAoKSA9PiB0cnVlKVxuICAgIC53aXRoKERlYnVnTW9kZS5DdXJyZW50cywgKCkgPT4gdHJ1ZSlcbiAgICAud2l0aChcbiAgICAgIFAuYXJyYXkoUC5zdHJpbmcpLFxuICAgICAgKHYpID0+IHYuaW5jbHVkZXMoRGVidWdNb2RlLkFsbCkgfHwgdi5pbmNsdWRlcyhEZWJ1Z01vZGUuQ3VycmVudHMpXG4gICAgKVxuICAgIC5vdGhlcndpc2UoKCkgPT4gZmFsc2UpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlRGVidWcobW9kZTogQ3VycmVudHNSdW5QYXJhbWV0ZXJzW1wiY2xvdWREZWJ1Z1wiXSkge1xuICBtYXRjaChtb2RlKVxuICAgIC53aXRoKFAuaW5zdGFuY2VPZihBcnJheSksIChpKSA9PiBpLmZvckVhY2goc2V0RGVidWdNb2RlKSlcbiAgICAud2l0aCh0cnVlLCAoKSA9PiBzZXREZWJ1Z01vZGUoRGVidWdNb2RlLkFsbCkpXG4gICAgLndpdGgoXG4gICAgICBQLnVuaW9uKFxuICAgICAgICBEZWJ1Z01vZGUuQWxsLFxuICAgICAgICBEZWJ1Z01vZGUuQ3VycmVudHMsXG4gICAgICAgIERlYnVnTW9kZS5DeXByZXNzLFxuICAgICAgICBEZWJ1Z01vZGUuQ29tbWl0SW5mb1xuICAgICAgKSxcbiAgICAgIChpKSA9PiBzZXREZWJ1Z01vZGUoaSlcbiAgICApXG4gICAgLm90aGVyd2lzZSgoKSA9PiBzZXREZWJ1Z01vZGUoRGVidWdNb2RlLk5vbmUpKTtcbn1cblxuZnVuY3Rpb24gc2V0RGVidWdNb2RlKG1vZGU6IHN0cmluZykge1xuICBpZiAobW9kZSA9PT0gRGVidWdNb2RlLk5vbmUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB0b2tlbnMgPSBuZXcgU2V0KHByb2Nlc3MuZW52LkRFQlVHID8gcHJvY2Vzcy5lbnYuREVCVUcuc3BsaXQoXCIsXCIpIDogW10pO1xuICBtYXRjaChtb2RlKVxuICAgIC53aXRoKERlYnVnTW9kZS5BbGwsICgpID0+IHtcbiAgICAgIHRva2Vucy5hZGQoRGVidWdUb2tlbnMuQ29tbWl0SW5mbyk7XG4gICAgICB0b2tlbnMuYWRkKERlYnVnVG9rZW5zLkN1cnJlbnRzKTtcbiAgICAgIHRva2Vucy5hZGQoRGVidWdUb2tlbnMuQ3lwcmVzcyk7XG4gICAgfSlcbiAgICAud2l0aChEZWJ1Z01vZGUuQ3VycmVudHMsICgpID0+IHRva2Vucy5hZGQoRGVidWdUb2tlbnMuQ3VycmVudHMpKVxuICAgIC53aXRoKERlYnVnTW9kZS5DeXByZXNzLCAoKSA9PiB0b2tlbnMuYWRkKERlYnVnVG9rZW5zLkN5cHJlc3MpKVxuICAgIC53aXRoKERlYnVnTW9kZS5Db21taXRJbmZvLCAoKSA9PiB0b2tlbnMuYWRkKERlYnVnVG9rZW5zLkNvbW1pdEluZm8pKVxuICAgIC5vdGhlcndpc2UoKCkgPT4ge30pO1xuXG4gIGRlYnVnLmVuYWJsZShBcnJheS5mcm9tKHRva2Vucykuam9pbihcIixcIikpO1xufVxuIiwgImV4cG9ydCB0eXBlIEluc3RhbmNlSWQgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBUZXN0aW5nVHlwZSA9IEN5cHJlc3MuVGVzdGluZ1R5cGU7XG5leHBvcnQgdHlwZSBTcGVjVHlwZSA9IFwiY29tcG9uZW50XCIgfCBcImludGVncmF0aW9uXCI7XG5leHBvcnQgdHlwZSBBcnJheUl0ZW1UeXBlPFQ+ID0gVCBleHRlbmRzIChpbmZlciBVKVtdID8gVSA6IFQ7XG5leHBvcnQgdHlwZSBOb25FbXB0eUFycmF5PFQ+ID0gW1QsIC4uLlRbXV07XG5cbmV4cG9ydCB0eXBlIFBsYXRmb3JtID0ge1xuICBvc05hbWU6IHN0cmluZztcbiAgb3NWZXJzaW9uOiBzdHJpbmc7XG4gIGJyb3dzZXJOYW1lOiBzdHJpbmc7XG4gIGJyb3dzZXJWZXJzaW9uOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBEZXRlY3RlZEJyb3dzZXIgPSB7XG4gIG5hbWU6IHN0cmluZzsgLy8gb3IgZW51bT8gbm90IHN1cmVcbiAgZmFtaWx5OiBzdHJpbmc7XG4gIGNoYW5uZWw6IHN0cmluZztcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcbiAgdmVyc2lvbjogc3RyaW5nO1xuICBwYXRoOiBzdHJpbmc7XG4gIG1pblN1cHBvcnRlZFZlcnNpb246IG51bWJlcjtcbiAgbWFqb3JWZXJzaW9uOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmRTcGVjczxUPiB7XG4gIHByb2plY3RSb290OiBzdHJpbmc7XG4gIHRlc3RpbmdUeXBlOiBUZXN0aW5nVHlwZTtcbiAgLyoqXG4gICAqIFRoaXMgY2FuIGJlIG92ZXItcmlkZGVuIGJ5IHRoZSAtLXNwZWMgYXJndW1lbnQgKHJ1biBtb2RlIG9ubHkpXG4gICAqIE90aGVyd2lzZSBpdCB3aWxsIGJlIHRoZSBzYW1lIGFzIGBjb25maWdTcGVjUGF0dGVybmBcbiAgICovXG4gIHNwZWNQYXR0ZXJuOiBUO1xuICAvKipcbiAgICogVGhlIHNwZWNQYXR0ZXJuIHJlc29sdmVkIGZyb20gZTJlLnNwZWNQYXR0ZXJuIG9yIGNvbXBvbmVudC5zcGVjUGF0dGVyblxuICAgKiBpbnNpZGUgb2YgYGN5cHJlc3MuY29uZmlnYC5cbiAgICovXG4gIGNvbmZpZ1NwZWNQYXR0ZXJuOiBUO1xuICAvKipcbiAgICogVXNlciBjYW4gb3B0IHRvIGV4Y2x1ZGUgY2VydGFpbiBwYXR0ZXJucyBpbiBjeXByZXNzLmNvbmZpZy5cbiAgICovXG4gIGV4Y2x1ZGVTcGVjUGF0dGVybjogVDtcbiAgLyoqXG4gICAqIElmIGluIGNvbXBvbmVudCB0ZXN0aW5nIG1vZGUsIHdlIGV4Y2x1ZGUgYWxsIHNwZWNzIG1hdGNoaW5nIHRoZSBlMmUuc3BlY1BhdHRlcm4uXG4gICAqL1xuICBhZGRpdGlvbmFsSWdub3JlUGF0dGVybjogVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXNlU3BlYyB7XG4gIG5hbWU6IHN0cmluZztcbiAgcmVsYXRpdmU6IHN0cmluZztcbiAgYWJzb2x1dGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTcGVjRmlsZSBleHRlbmRzIEJhc2VTcGVjIHtcbiAgYmFzZU5hbWU6IHN0cmluZztcbiAgZmlsZU5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb3VuZFNwZWMgZXh0ZW5kcyBTcGVjRmlsZSB7XG4gIHNwZWNGaWxlRXh0ZW5zaW9uOiBzdHJpbmc7XG4gIGZpbGVFeHRlbnNpb246IHN0cmluZztcbiAgc3BlY1R5cGU6IFNwZWNUeXBlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNwZWNXaXRoUmVsYXRpdmVSb290IGV4dGVuZHMgRm91bmRTcGVjIHtcbiAgcmVsYXRpdmVUb0NvbW1vblJvb3Q6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY3JlZW5zaG90VXBsb2FkSW5zdHJ1Y3Rpb24ge1xuICBzY3JlZW5zaG90SWQ6IHN0cmluZztcbiAgdXBsb2FkVXJsOiBzdHJpbmc7XG4gIHJlYWRVcmw6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgU2NyZWVuc2hvdEFydGlmYWN0ID0ge1xuICBuYW1lOiBzdHJpbmcgfCBudWxsO1xuICB0YWtlbkF0OiBzdHJpbmc7XG4gIHBhdGg6IHN0cmluZztcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIHRlc3RJZDogc3RyaW5nO1xuICB0ZXN0QXR0ZW1wdEluZGV4OiBudW1iZXI7XG4gIHNjcmVlbnNob3RJZDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGVudW0gRGVidWdNb2RlIHtcbiAgTm9uZSA9IFwibm9uZVwiLFxuICBBbGwgPSBcImFsbFwiLFxuICBDdXJyZW50cyA9IFwiY3VycmVudHNcIixcbiAgQ3lwcmVzcyA9IFwiY3lwcmVzc1wiLFxuICBDb21taXRJbmZvID0gXCJjb21taXQtaW5mb1wiLFxufVxuXG4vLyBFeHBsaWNpdGx5IGZpbHRlciBjeXByZXNzIHJlY29yZC1yZWxhdGVkIGZsYWdzIC0gcHJldmVudCB0cmlnZ2VyaW5nIHJlY29yZGluZyBtb2RlIHRvIGF2b2lkIGNvbmZ1c2lvblxuZXhwb3J0IHR5cGUgU3RyaXBwZWRDeXByZXNzTW9kdWxlQVBJT3B0aW9ucyA9IE9taXQ8XG4gIFBhcnRpYWw8Q3lwcmVzc0NvbW1hbmRMaW5lLkN5cHJlc3NSdW5PcHRpb25zPixcbiAgfCBcImF1dG9DYW5jZWxBZnRlckZhaWx1cmVzXCJcbiAgfCBcInRhZ1wiXG4gIHwgXCJzcGVjXCJcbiAgfCBcImV4aXRcIlxuICB8IFwiaGVhZGVkXCJcbiAgfCBcInJlY29yZFwiXG4gIHwgXCJoZWFkbGVzc1wiXG4gIHwgXCJub0V4aXRcIlxuICB8IFwicGFyYWxsZWxcIlxuICB8IFwia2V5XCJcbiAgfCBcInRhZ1wiXG4gIHwgXCJncm91cFwiXG4gIHwgXCJjaUJ1aWxkSWRcIlxuICB8IFwiY2xvdWRDb25maWdGaWxlXCJcbj47XG5cbi8vIFVzZWQgdG8gcnVuIEN5cHJlc3MgdmlhIG1vZHVsZSBBUEkgYW5kIHZpYSBDTElcbmV4cG9ydCB0eXBlIEN5cHJlc3NSdW5QYXJhbWV0ZXJzID0gU3RyaXBwZWRDeXByZXNzTW9kdWxlQVBJT3B0aW9ucyAmIHtcbiAgcmVjb3JkOiBmYWxzZTtcbn07XG5cbmV4cG9ydCB0eXBlIEN1cnJlbnRzUnVuUGFyYW1ldGVycyA9IFN0cmlwcGVkQ3lwcmVzc01vZHVsZUFQSU9wdGlvbnMgJiB7XG4gIC8qKiBUaGUgQ0kgYnVpbGQgSUQgdG8gdXNlIGZvciB0aGUgcnVuICovXG4gIGNpQnVpbGRJZD86IHN0cmluZztcblxuICAvKiogVGhlIGJhdGNoIHNpemUgZGVmaW5lcyBob3cgbWFueSBzcGVjIGZpbGVzIHdpbGwgYmUgc2VydmVkIGluIG9uZSBvcmNoZXN0cmF0aW9uIFwiYmF0Y2hcIi4gSWYgbm90IHNwZWNpZmllZCwgd2lsbCB1c2UgdGhlIHByb2plY3RJZCBmcm9tIGN1cnJlbnRzLmNvbmZpZy5qcywgdGhlIGRlZmF1bHQgdmFsdWUgaXMgMSAoaS5lLiBubyBiYXRjaGluZykgKi9cbiAgYmF0Y2hTaXplPzogbnVtYmVyO1xuXG4gIC8qKiBXaGV0aGVyIHRvIGFjdGl2YXRlIHJlY29yZCBtb2RlIGFuZCBjb25uZWN0IHRvIGNsb3VkIG9yY2hlc3RyYXRpb24gc2VydmljZSAqL1xuICByZWNvcmQ/OiBib29sZWFuO1xuXG4gIC8qKiBUaGUgVVJMIG9mIHRoZSBjdXJyZW50cyBzZXJ2ZXIgdG8gdXNlLiBJZiBub3Qgc3BlY2lmaWVkLCB3aWxsIHVzZSB0aGUgb25lIGZyb20gY3VycmVudHMuY29uZmlnLmpzICovXG4gIGNsb3VkU2VydmljZVVybD86IHN0cmluZztcbiAgLyoqIFRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgdG8gdXNlIGZvciB0aGUgcnVuICovXG4gIGVudj86IG9iamVjdDtcblxuICAvKiogVGhlIGdyb3VwIGlkIHRvIHVzZSBmb3IgdGhlIHJ1biAqL1xuICBncm91cD86IHN0cmluZztcblxuICAvKiogIFRoZSByZWNvcmQga2V5IHRvIHVzZSAqL1xuICByZWNvcmRLZXk/OiBzdHJpbmc7XG5cbiAgLyoqIFdoZXRoZXIgdG8gcnVuIHRoZSBzcGVjIGZpbGVzIGluIHBhcmFsbGVsICovXG4gIHBhcmFsbGVsPzogYm9vbGVhbjtcblxuICAvKiogVGhlIHByb2plY3QgSUQgdG8gdXNlLiAqL1xuICBwcm9qZWN0SWQ/OiBzdHJpbmc7XG5cbiAgLyoqIENvbW1hLXNlcGFyYXRlZCBzdHJpbmcgb3IgYW4gYXJyYXkgb2Ygc3BlYyBnbG9iIHBhdHRlcm4gZm9yIHRoZSBleGVjdXRpb24gKi9cbiAgc3BlYz86IHN0cmluZyB8IHN0cmluZ1tdO1xuXG4gIC8qKiBDb21tYS1zZXBhcmF0ZWQgc3RyaW5nIG9yIGFuIGFycmF5IG9mIHRhZ3MgKi9cbiAgdGFnPzogc3RyaW5nIHwgc3RyaW5nW107XG5cbiAgLyoqIFwiZTJlXCIgb3IgXCJjb21wb25lbnRcIiwgdGhlIGRlZmF1bHQgdmFsdWUgaXMgXCJlMmVcIiAqL1xuICB0ZXN0aW5nVHlwZT86IFRlc3RpbmdUeXBlO1xuXG4gIC8qKiBBdXRvbWF0aWNhbGx5IGFib3J0IHRoZSBydW4gYWZ0ZXIgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZmFpbGVkIHRlc3RzLiBPdmVycmlkZXMgdGhlIGRlZmF1bHQgcHJvamVjdCBzZXR0aW5ncy4gSWYgc2V0LCBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlciBvciBcImZhbHNlXCIgdG8gZGlzYWJsZSAoQ3VycmVudHMtb25seSkgKi9cbiAgYXV0b0NhbmNlbEFmdGVyRmFpbHVyZXM/OiBudW1iZXIgfCBmYWxzZTtcblxuICAvKipcbiAgICogV2hldGhlciB0byBsYXVuY2ggY3lwcmVzcyBpbiBoZWFkZWQgbW9kZS4gSWYgc2V0LCBtdXN0IGJlIGEgYm9vbGVhbiwgZGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqL1xuICBoZWFkZWQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBDb25maWd1cmF0aW9uIGZpbGUgbmFtZSBvciBhYnNvbHV0ZSBwYXRoLiBEZWZhdWx0IHZhbHVlIGlzICdjdXJyZW50cy5jb25maWcuanMnLCBpZiBzcGVjaWZpZWQsIG11c3QgYmUgYSBzdHJpbmcuIFRoZSBmaWxlIHdpbGwgYmUgcmVzb2x2ZWQgcmVsYXRpdmUgdG8gdGhlIHByb2plY3Qgcm9vdCwgdW5sZXNzIGl0J3MgYW4gYWJzb2x1dGUgcGF0aC5cbiAgICovXG4gIGNsb3VkQ29uZmlnRmlsZT86IHN0cmluZztcblxuICAvKipcbiAgICogRW5hYmxlIGRlYnVnIG1vZGUgZm9yIGN5cHJlc3MtY2xvdWQsIHRoaXMgd2lsbCBwcmludCBvdXQgbG9ncyBmb3IgdHJvdWJsZXNob290aW5nLlxuICAgKi9cbiAgY2xvdWREZWJ1Zz86IERlYnVnTW9kZSB8IHRydWUgfCBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICAvKipcbiAgICogV2hldGhlciB0byByZWNvcmQgY292ZXJhZ2UgcmVzdWx0cy4gSWYgc2V0LCBtdXN0IGJlIGEgYm9vbGVhbiwgZGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqL1xuICBleHBlcmltZW50YWxDb3ZlcmFnZVJlY29yZGluZz86IGJvb2xlYW47XG59O1xuXG4vLyBVc2VyLWZhY2luZyBgcnVuYCBpbnRlcmZhY2Vcbi8vIFdlIGNhbiByZXNvbHZlIHRoZSBwcm9qZWN0SWQgYW5kIHJlY29yZEtleSBmcm9tIGRpZmZlcmVudCBzb3VyY2VzLCBzbyB3ZSBjYW4ndCByZWFsbHkgZW5mb3JjZSB0aGVtIHZpYSB0aGUgdHlwZSBkZWZpbml0aW9uXG5leHBvcnQgaW50ZXJmYWNlIEN1cnJlbnRzUnVuQVBJIGV4dGVuZHMgQ3VycmVudHNSdW5QYXJhbWV0ZXJzIHt9XG5cbi8vIFBhcmFtcyBhZnRlciB2YWxpZGF0aW9uIGFuZCByZXNvbHV0aW9uXG5leHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRlZEN1cnJlbnRzUGFyYW1ldGVycyBleHRlbmRzIEN1cnJlbnRzUnVuUGFyYW1ldGVycyB7XG4gIHJlYWRvbmx5IHByb2plY3RJZDogc3RyaW5nO1xuICByZWFkb25seSBjbG91ZFNlcnZpY2VVcmw6IHN0cmluZztcbiAgcmVhZG9ubHkgYmF0Y2hTaXplOiBudW1iZXI7XG4gIHJlYWRvbmx5IHRlc3RpbmdUeXBlOiBUZXN0aW5nVHlwZTtcbiAgcmVhZG9ubHkgcmVjb3JkS2V5OiBzdHJpbmc7XG4gIHJlYWRvbmx5IHRhZzogc3RyaW5nW107XG4gIHJlYWRvbmx5IGF1dG9DYW5jZWxBZnRlckZhaWx1cmVzOiBudW1iZXIgfCBmYWxzZSB8IHVuZGVmaW5lZDtcbn1cbiIsICJpbXBvcnQgYmx1ZWJpcmQgZnJvbSBcImJsdWViaXJkXCI7XG5cbmJsdWViaXJkLlByb21pc2UuY29uZmlnKHtcbiAgY2FuY2VsbGF0aW9uOiB0cnVlLFxufSk7XG5leHBvcnQgY29uc3QgQlByb21pc2UgPSBibHVlYmlyZC5Qcm9taXNlO1xuXG5leHBvcnQgY29uc3Qgc2FmZSA9XG4gIDxUIGV4dGVuZHMgYW55W10sIFIgZXh0ZW5kcyBhbnksIEYgZXh0ZW5kcyBhbnk+KFxuICAgIGZuOiAoLi4uYXJnczogVCkgPT4gUHJvbWlzZTxSPixcbiAgICBpZkZhbGVkOiAoZTogdW5rbm93bikgPT4gRixcbiAgICBpZlN1Y2NlZWQ6ICgpID0+IGFueVxuICApID0+XG4gIGFzeW5jICguLi5hcmdzOiBUKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHIgPSBhd2FpdCBmbiguLi5hcmdzKTtcbiAgICAgIGlmU3VjY2VlZCgpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGlmRmFsZWQoZSk7XG4gICAgfVxuICB9O1xuXG5leHBvcnQgY29uc3Qgc29ydE9iamVjdEtleXMgPSA8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+KG9iajogVCkgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKVxuICAgIC5zb3J0KClcbiAgICAucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgYWNjW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgVCk7XG59O1xuIiwgImltcG9ydCB7IGN1c3RvbUFscGhhYmV0IH0gZnJvbSBcIm5hbm9pZFwiO1xuXG5leHBvcnQgY29uc3QgZ2V0UmFuZG9tU3RyaW5nID0gY3VzdG9tQWxwaGFiZXQoXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5elwiLCAxMCk7XG4iLCAiaW1wb3J0IGlzQWJzb2x1dGUgZnJvbSBcImlzLWFic29sdXRlXCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdEZpbGVuYW1lcyA9IFtcbiAgXCJjdXJyZW50cy5jb25maWcuanNcIixcbiAgXCJjdXJyZW50cy5jb25maWcuY2pzXCIsXG4gIFwiY3VycmVudHMuY29uZmlnLm1qc1wiLFxuXTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25maWdGaWxlUGF0aChcbiAgcHJvamVjdFJvb3Q6IHN0cmluZyB8IG51bGwgPSBudWxsLFxuICBleHBsaWNpdENvbmZpZ0ZpbGVQYXRoPzogc3RyaW5nXG4pOiBzdHJpbmdbXSB7XG4gIGNvbnN0IHByZWZpeCA9IHByb2plY3RSb290ID8/IHByb2Nlc3MuY3dkKCk7XG4gIGlmIChcbiAgICBfLmlzU3RyaW5nKGV4cGxpY2l0Q29uZmlnRmlsZVBhdGgpICYmXG4gICAgaXNBYnNvbHV0ZShleHBsaWNpdENvbmZpZ0ZpbGVQYXRoKVxuICApIHtcbiAgICByZXR1cm4gW2V4cGxpY2l0Q29uZmlnRmlsZVBhdGhdO1xuICB9XG4gIGlmIChfLmlzU3RyaW5nKGV4cGxpY2l0Q29uZmlnRmlsZVBhdGgpKSB7XG4gICAgcmV0dXJuIFtub3JtYWxpemVQYXRoKHByZWZpeCwgZXhwbGljaXRDb25maWdGaWxlUGF0aCldO1xuICB9XG5cbiAgcmV0dXJuIGRlZmF1bHRGaWxlbmFtZXMubWFwKChwKSA9PiBub3JtYWxpemVQYXRoKHByZWZpeCwgcCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplUGF0aChwcmVmaXg6IHN0cmluZywgZmlsZW5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgZmlsZTovLyR7cGF0aC5yZXNvbHZlKHByZWZpeCwgZmlsZW5hbWUpfWA7XG59XG4iLCAiaW1wb3J0IHtcbiAgQ3VycmVudHNSdW5QYXJhbWV0ZXJzLFxuICBDeXByZXNzUnVuUGFyYW1ldGVycyxcbiAgVmFsaWRhdGVkQ3VycmVudHNQYXJhbWV0ZXJzLFxufSBmcm9tIFwiY3lwcmVzcy1jbG91ZC90eXBlc1wiO1xuaW1wb3J0IERlYnVnIGZyb20gXCJkZWJ1Z1wiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgc2hvdWxkRW5hYmxlUGx1Z2luRGVidWcgfSBmcm9tIFwiLi4vZGVidWdcIjtcbmltcG9ydCB7IFZhbGlkYXRpb25FcnJvciB9IGZyb20gXCIuLi9lcnJvcnNcIjtcbmltcG9ydCB7IGVycm9yIH0gZnJvbSBcIi4uL2xvZ1wiO1xuaW1wb3J0IHsgZ2V0Q3VycmVudHNDb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcbmNvbnN0IGRlYnVnID0gRGVidWcoXCJjdXJyZW50czp2YWxpZGF0ZVBhcmFtc1wiKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc29sdmVDdXJyZW50c1BhcmFtcyhcbiAgcGFyYW1zOiBDdXJyZW50c1J1blBhcmFtZXRlcnNcbik6IFByb21pc2U8Q3VycmVudHNSdW5QYXJhbWV0ZXJzPiB7XG4gIGNvbnN0IGNvbmZpZ0Zyb21GaWxlID0gYXdhaXQgZ2V0Q3VycmVudHNDb25maWcoXG4gICAgcGFyYW1zLnByb2plY3QsXG4gICAgcGFyYW1zLmNsb3VkQ29uZmlnRmlsZVxuICApO1xuXG4gIGRlYnVnKFwicmVzb2x2aW5nIGN1cnJlbnRzIHBhcmFtczogJW9cIiwgcGFyYW1zKTtcbiAgZGVidWcoXCJyZXNvbHZpbmcgY3VycmVudHMgY29uZmlnIGZpbGU6ICVvXCIsIGNvbmZpZ0Zyb21GaWxlKTtcbiAgY29uc3QgY2xvdWRTZXJ2aWNlVXJsID1cbiAgICBwYXJhbXMuY2xvdWRTZXJ2aWNlVXJsID8/XG4gICAgcHJvY2Vzcy5lbnYuQ1VSUkVOVFNfQVBJX1VSTCA/P1xuICAgIGNvbmZpZ0Zyb21GaWxlLmNsb3VkU2VydmljZVVybDtcblxuICBjb25zdCByZWNvcmRLZXkgPVxuICAgIHBhcmFtcy5yZWNvcmRLZXkgPz9cbiAgICBwcm9jZXNzLmVudi5DVVJSRU5UU19SRUNPUkRfS0VZID8/XG4gICAgY29uZmlnRnJvbUZpbGUucmVjb3JkS2V5O1xuXG4gIGNvbnN0IHByb2plY3RJZCA9XG4gICAgcGFyYW1zLnByb2plY3RJZCA/P1xuICAgIHByb2Nlc3MuZW52LkNVUlJFTlRTX1BST0pFQ1RfSUQgPz9cbiAgICBjb25maWdGcm9tRmlsZS5wcm9qZWN0SWQ7XG5cbiAgY29uc3QgdGVzdGluZ1R5cGUgPSBwYXJhbXMudGVzdGluZ1R5cGUgPz8gXCJlMmVcIjtcblxuICBsZXQgYmF0Y2hTaXplID0gcGFyYW1zLmJhdGNoU2l6ZTtcbiAgaWYgKCFiYXRjaFNpemUpIHtcbiAgICBiYXRjaFNpemUgPVxuICAgICAgdGVzdGluZ1R5cGUgPT09IFwiZTJlXCJcbiAgICAgICAgPyBjb25maWdGcm9tRmlsZS5lMmUuYmF0Y2hTaXplXG4gICAgICAgIDogY29uZmlnRnJvbUZpbGUuY29tcG9uZW50LmJhdGNoU2l6ZTtcbiAgfVxuXG4gIC8vIGJhdGNoU2l6ZSBhbmQgY2xvdWRTZXJ2aWNlVXJsIGRlZmF1bHRzIGFyZSBpbiBnZXRDdXJyZW50c0NvbmZpZygpXG4gIHJldHVybiB7XG4gICAgLi4ucGFyYW1zLFxuICAgIGNsb3VkU2VydmljZVVybCxcbiAgICByZWNvcmRLZXksXG4gICAgcHJvamVjdElkLFxuICAgIGJhdGNoU2l6ZSxcbiAgICB0ZXN0aW5nVHlwZSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHByb2plY3RJZEVycm9yID0gYENhbm5vdCByZXNvbHZlIHByb2plY3RJZC4gUGxlYXNlIHVzZSBvbmUgb2YgdGhlIGZvbGxvd2luZzpcbi0gcHJvdmlkZSBpdCBhcyBhIFwicHJvamVjdElkXCIgcHJvcGVydHkgZm9yIFwicnVuXCIgQVBJIG1ldGhvZFxuLSBzZXQgQ1VSUkVOVFNfUFJPSkVDVF9JRCBlbnZpcm9ubWVudCB2YXJpYWJsZVxuLSBzZXQgXCJwcm9qZWN0SWRcIiBpbiBcImN1cnJlbnRzLmNvbmZpZy57Y31qc1wiIGZpbGVgO1xuXG5leHBvcnQgY29uc3QgY2xvdWRTZXJ2aWNlVXJsRXJyb3IgPSBgQ2Fubm90IHJlc29sdmUgY2xvdWQgc2VydmljZSBVUkwuIFBsZWFzZSB1c2Ugb25lIG9mIHRoZSBmb2xsb3dpbmc6XG4tIHByb3ZpZGUgaXQgYXMgYSBcImNsb3VkU2VydmljZVVybFwiIHByb3BlcnR5IGZvciBcInJ1blwiIEFQSSBtZXRob2Rcbi0gc2V0IENVUlJFTlRTX0FQSV9VUkwgZW52aXJvbm1lbnQgdmFyaWFibGVcbi0gc2V0IFwiY2xvdWRTZXJ2aWNlVXJsXCIgaW4gXCJjdXJyZW50cy5jb25maWcue2N9anNcIiBmaWxlYDtcblxuZXhwb3J0IGNvbnN0IGNsb3VkU2VydmljZUludmFsaWRVcmxFcnJvciA9IGBJbnZhbGlkIGNsb3VkIHNlcnZpY2UgVVJMIHByb3ZpZGVkYDtcblxuZXhwb3J0IGNvbnN0IHJlY29yZEtleUVycm9yID0gYENhbm5vdCByZXNvbHZlIHJlY29yZCBrZXkuIFBsZWFzZSB1c2Ugb25lIG9mIHRoZSBmb2xsb3dpbmc6XG5cbi0gcGFzcyBpdCBhcyBhIENMSSBmbGFnICctaywgLS1rZXkgPHJlY29yZC1rZXk+J1xuLSBwcm92aWRlIGl0IGFzIGEgXCJyZWNvcmRLZXlcIiBwcm9wZXJ0eSBmb3IgXCJydW5cIiBBUEkgbWV0aG9kXG4tIHNldCBDVVJSRU5UU19SRUNPUkRfS0VZIGVudmlyb25tZW50IHZhcmlhYmxlXG4tIHNldCBcInJlY29yZEtleVwiIGluIFwiY3VycmVudHMuY29uZmlnLntjfWpzXCIgZmlsZVxuYDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlUGFyYW1zKFxuICBfcGFyYW1zOiBDdXJyZW50c1J1blBhcmFtZXRlcnNcbik6IFByb21pc2U8VmFsaWRhdGVkQ3VycmVudHNQYXJhbWV0ZXJzPiB7XG4gIGNvbnN0IHBhcmFtcyA9IGF3YWl0IHJlc29sdmVDdXJyZW50c1BhcmFtcyhfcGFyYW1zKTtcblxuICBkZWJ1ZyhcInZhbGlkYXRpbmcgY3VycmVudHMgcGFyYW1zOiAlb1wiLCBwYXJhbXMpO1xuICBpZiAoIXBhcmFtcy5jbG91ZFNlcnZpY2VVcmwpIHtcbiAgICB0aHJvdyBuZXcgVmFsaWRhdGlvbkVycm9yKGNsb3VkU2VydmljZVVybEVycm9yKTtcbiAgfVxuICBpZiAoIXBhcmFtcy5wcm9qZWN0SWQpIHtcbiAgICB0aHJvdyBuZXcgVmFsaWRhdGlvbkVycm9yKHByb2plY3RJZEVycm9yKTtcbiAgfVxuICBpZiAoIXBhcmFtcy5yZWNvcmRLZXkpIHtcbiAgICB0aHJvdyBuZXcgVmFsaWRhdGlvbkVycm9yKHJlY29yZEtleUVycm9yKTtcbiAgfVxuXG4gIHZhbGlkYXRlVVJMKHBhcmFtcy5jbG91ZFNlcnZpY2VVcmwpO1xuXG4gIGNvbnN0IHJlcXVpcmVkUGFyYW1ldGVyczogQXJyYXk8a2V5b2YgQ3VycmVudHNSdW5QYXJhbWV0ZXJzPiA9IFtcbiAgICBcInRlc3RpbmdUeXBlXCIsXG4gICAgXCJiYXRjaFNpemVcIixcbiAgICBcInByb2plY3RJZFwiLFxuICBdO1xuICByZXF1aXJlZFBhcmFtZXRlcnMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXNba2V5XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgZXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIFwiJXNcIicsIGtleSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlclwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIHBhcmFtcy50YWcgPSBwYXJzZVRhZ3MocGFyYW1zLnRhZyk7XG4gIHBhcmFtcy5hdXRvQ2FuY2VsQWZ0ZXJGYWlsdXJlcyA9IGdldEF1dG9DYW5jZWxWYWx1ZShcbiAgICBwYXJhbXMuYXV0b0NhbmNlbEFmdGVyRmFpbHVyZXNcbiAgKTtcblxuICBkZWJ1ZyhcInZhbGlkYXRlZCBjdXJyZW50cyBwYXJhbXM6ICVvXCIsIHBhcmFtcyk7XG5cbiAgLy8gVE9ETzogcmVtb3ZlIHRoaXMgY2FzdCBhZnRlciBmaW5kaW5nIGEgd2F5IHRvIHByb3Blcmx5IHJlc29sdmUgcGFyYW1zIHR5cGUgYWZ0ZXIgdmFsaWRhdGlvbnNcbiAgcmV0dXJuIHBhcmFtcyBhcyBWYWxpZGF0ZWRDdXJyZW50c1BhcmFtZXRlcnM7XG59XG5cbmZ1bmN0aW9uIGdldEF1dG9DYW5jZWxWYWx1ZSh2YWx1ZTogdW5rbm93bik6IG51bWJlciB8IGZhbHNlIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICByZXR1cm4gdmFsdWUgPyAxIDogZmFsc2U7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiICYmIHZhbHVlID4gMCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHRocm93IG5ldyBWYWxpZGF0aW9uRXJyb3IoXG4gICAgYGF1dG9DYW5jZWxBZnRlckZhaWx1cmVzOiBzaG91bGQgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyIG9yIFwiZmFsc2VcIi4gR290OiBcIiR7dmFsdWV9XCJgXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09mZmxpbmUocGFyYW1zOiBDdXJyZW50c1J1blBhcmFtZXRlcnMpIHtcbiAgcmV0dXJuIHBhcmFtcy5yZWNvcmQgPT09IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRhZ3ModGFnU3RyaW5nOiBDdXJyZW50c1J1blBhcmFtZXRlcnNbXCJ0YWdcIl0pOiBzdHJpbmdbXSB7XG4gIGlmICghdGFnU3RyaW5nKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHRhZ1N0cmluZykpIHtcbiAgICByZXR1cm4gdGFnU3RyaW5nLmZpbHRlcihCb29sZWFuKTtcbiAgfVxuICByZXR1cm4gdGFnU3RyaW5nXG4gICAgLnNwbGl0KFwiLFwiKVxuICAgIC5tYXAoKHRhZykgPT4gdGFnLnRyaW0oKSlcbiAgICAuZmlsdGVyKEJvb2xlYW4pO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVVSTCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICB0cnkge1xuICAgIG5ldyBVUkwodXJsKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdGhyb3cgbmV3IFZhbGlkYXRpb25FcnJvcihgJHtjbG91ZFNlcnZpY2VJbnZhbGlkVXJsRXJyb3J9OiBcIiR7dXJsfVwiYCk7XG4gIH1cbn1cblxuLyoqXG4gKlxuICogQHJldHVybnMgQ3lwcmVzcyBvcHRpb25zIHdpdGhvdXQgaXRlbXMgdGhhdCBhZmZlY3QgcmVjb3JkaW5nIG1vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEN5cHJlc3NSdW5BUElQYXJhbXMoXG4gIHBhcmFtczogQ3VycmVudHNSdW5QYXJhbWV0ZXJzXG4pOiBDeXByZXNzUnVuUGFyYW1ldGVycyB7XG4gIHJldHVybiB7XG4gICAgLi4uXy5waWNrQnkoXG4gICAgICBfLm9taXQocGFyYW1zLCBbXG4gICAgICAgIFwiY2xvdWREZWJ1Z1wiLFxuICAgICAgICBcImNsb3VkQ29uZmlnRmlsZVwiLFxuICAgICAgICBcImF1dG9DYW5jZWxBZnRlckZhaWx1cmVzXCIsXG4gICAgICAgIFwiY2xvdWRTZXJ2aWNlVXJsXCIsXG4gICAgICAgIFwiYmF0Y2hTaXplXCIsXG4gICAgICAgIFwicHJvamVjdElkXCIsXG4gICAgICAgIFwia2V5XCIsXG4gICAgICAgIFwicmVjb3JkS2V5XCIsXG4gICAgICAgIFwicmVjb3JkXCIsXG4gICAgICAgIFwiZ3JvdXBcIixcbiAgICAgICAgXCJwYXJhbGxlbFwiLFxuICAgICAgICBcInRhZ1wiLFxuICAgICAgICBcImNpQnVpbGRJZFwiLFxuICAgICAgICBcInNwZWNcIixcbiAgICAgICAgXCJleGl0XCIsXG4gICAgICAgIFwiaGVhZGxlc3NcIixcbiAgICAgICAgXCJleHBlcmltZW50YWxDb3ZlcmFnZVJlY29yZGluZ1wiLFxuICAgICAgXSksXG4gICAgICBCb29sZWFuXG4gICAgKSxcbiAgICByZWNvcmQ6IGZhbHNlLFxuICAgIGVudjoge1xuICAgICAgLi4ucGFyYW1zLmVudixcbiAgICAgIGN1cnJlbnRzX2RlYnVnX2VuYWJsZWQ6IHNob3VsZEVuYWJsZVBsdWdpbkRlYnVnKHBhcmFtcy5jbG91ZERlYnVnKSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcHJvY2Vzc1BhcmFtcyhcbiAgcGFyYW1zOiBDdXJyZW50c1J1blBhcmFtZXRlcnNcbik6IEN1cnJlbnRzUnVuUGFyYW1ldGVycyB7XG4gIHJldHVybiB7XG4gICAgLi4ucGFyYW1zLFxuICAgIHNwZWM6IHByb2Nlc3NTcGVjUGFyYW0ocGFyYW1zLnNwZWMpLFxuICB9O1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzU3BlY1BhcmFtKFxuICBzcGVjOiBDdXJyZW50c1J1blBhcmFtZXRlcnNbXCJzcGVjXCJdXG4pOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gIGlmICghc3BlYykge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShzcGVjKSkge1xuICAgIHJldHVybiBfLmZsYXR0ZW4oc3BlYy5tYXAoKGkpID0+IGkuc3BsaXQoXCIsXCIpKSk7XG4gIH1cblxuICByZXR1cm4gc3BlYy5zcGxpdChcIixcIik7XG59XG4iLCAiaW1wb3J0IHsgQXhpb3NFcnJvciB9IGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgc3BhY2VyLCB3YXJuIH0gZnJvbSBcIi4uL2xvZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWF5YmVQcmludEVycm9ycyhcbiAgZXJyOiBBeGlvc0Vycm9yPHsgbWVzc2FnZTogc3RyaW5nOyBlcnJvcnM/OiBzdHJpbmdbXSB9PlxuKSB7XG4gIGlmICghZXJyLnJlc3BvbnNlPy5kYXRhIHx8ICFlcnIucmVzcG9uc2U/LnN0YXR1cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgbWVzc2FnZSwgZXJyb3JzIH0gPSBlcnIucmVzcG9uc2UuZGF0YTtcblxuICBzd2l0Y2ggKGVyci5yZXNwb25zZS5zdGF0dXMpIHtcbiAgICBjYXNlIDQwMTpcbiAgICAgIHdhcm4oXCJSZWNlaXZlZCA0MDEgVW5hdXRob3JpemVkXCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA0MjI6XG4gICAgICBzcGFjZXIoMSk7XG4gICAgICB3YXJuKC4uLmZvcm1hdEdlbmVyaWNFcnJvcihtZXNzYWdlLCBlcnJvcnMpKTtcbiAgICAgIHNwYWNlcigxKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0R2VuZXJpY0Vycm9yKFxuICBtZXNzYWdlPzogc3RyaW5nLFxuICBlcnJvcnM/OiBzdHJpbmdbXVxuKTogc3RyaW5nW10ge1xuICBpZiAoIV8uaXNTdHJpbmcobWVzc2FnZSkpIHtcbiAgICByZXR1cm4gW1wiVW5leHBlY3RlZCBlcnJvciBmcm9tIHRoZSBjbG91ZCBzZXJ2aWNlXCJdO1xuICB9XG5cbiAgaWYgKGVycm9ycz8ubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFttZXNzYWdlIGFzIHN0cmluZ107XG4gIH1cbiAgcmV0dXJuIFtcbiAgICBtZXNzYWdlIGFzIHN0cmluZyxcbiAgICBgXG4keyhlcnJvcnMgPz8gW10pLm1hcCgoZSkgPT4gYCAgLSAke2V9YCkuam9pbihcIlxcblwiKX1cbmAsXG4gIF07XG59XG4iLCAiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgbWFnZW50YSB9IGZyb20gXCIuLi9sb2dcIjtcblxuaW1wb3J0IHsgaW5mbywgc3BhY2VyLCB3YXJuIH0gZnJvbSBcIi4uL2xvZ1wiO1xuaW1wb3J0IHsgQ2xvdWRXYXJuaW5nIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50V2FybmluZ3Mod2FybmluZ3M6IENsb3VkV2FybmluZ1tdKSB7XG4gIHdhcm4oXCJOb3RpY2UgZnJvbSBjbG91ZCBzZXJ2aWNlOlwiKTtcbiAgd2FybmluZ3MubWFwKCh3KSA9PiB7XG4gICAgc3BhY2VyKDEpO1xuICAgIGluZm8obWFnZW50YS5ib2xkKHcubWVzc2FnZSkpO1xuICAgIE9iamVjdC5lbnRyaWVzKF8ub21pdCh3LCBcIm1lc3NhZ2VcIikpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBpbmZvKFwiLSAlczogJXNcIiwga2V5LCB2YWx1ZSk7XG4gICAgfSk7XG4gICAgc3BhY2VyKDEpO1xuICB9KTtcbn1cbiIsICJleHBvcnQgKiBmcm9tIFwiLi9pbnN0YW5jZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vcnVuXCI7XG4iLCAiaW1wb3J0IHsgUGxhdGZvcm0sIFNjcmVlbnNob3RBcnRpZmFjdCB9IGZyb20gXCJjeXByZXNzLWNsb3VkL3R5cGVzXCI7XG5pbXBvcnQgeyBTdGFuZGFyZCB9IGZyb20gXCIuLi8uLi9jeXByZXNzLnR5cGVzXCI7XG5pbXBvcnQgeyBUZXN0QXR0ZW1wdFN0YXRlLCBUZXN0U3RhdGUgfSBmcm9tIFwiLi4vLi4vY3lwcmVzcy50eXBlcy9zaGFyZWRcIjtcblxuZXhwb3J0IG5hbWVzcGFjZSBJbnN0YW5jZUFQSVBheWxvYWQge1xuICBleHBvcnQgaW50ZXJmYWNlIFNjcmVlbnNob3Qge1xuICAgIHNjcmVlbnNob3RJZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZyB8IG51bGw7XG4gICAgdGVzdElkOiBzdHJpbmc7XG4gICAgdGFrZW5BdDogc3RyaW5nO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgc2NyZWVuc2hvdFVSTDogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBJbnN0YW5jZVJlc3VsdFN0YXRzIHtcbiAgICBzdWl0ZXM6IG51bWJlcjtcbiAgICB0ZXN0czogbnVtYmVyO1xuICAgIHBhc3NlczogbnVtYmVyO1xuICAgIHBlbmRpbmc6IG51bWJlcjtcbiAgICBza2lwcGVkOiBudW1iZXI7XG4gICAgZmFpbHVyZXM6IG51bWJlcjtcbiAgICB3YWxsQ2xvY2tTdGFydGVkQXQ6IHN0cmluZztcbiAgICB3YWxsQ2xvY2tFbmRlZEF0OiBzdHJpbmc7XG4gICAgd2FsbENsb2NrRHVyYXRpb246IG51bWJlcjtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgUmVwb3J0ZXJTdGF0cyB7XG4gICAgc3VpdGVzOiBudW1iZXI7XG4gICAgdGVzdHM6IG51bWJlcjtcbiAgICBwYXNzZXM6IG51bWJlcjtcbiAgICBwZW5kaW5nOiBudW1iZXI7XG4gICAgZmFpbHVyZXM6IG51bWJlcjtcbiAgICBzdGFydDogc3RyaW5nO1xuICAgIGVuZDogc3RyaW5nO1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEN5cHJlc3NDb25maWcge1xuICAgIHZpZGVvOiBib29sZWFuO1xuICAgIHZpZGVvVXBsb2FkT25QYXNzZXM6IGJvb2xlYW47XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBJbnN0YW5jZVJlc3VsdCB7XG4gICAgc3RhdHM6IEluc3RhbmNlUmVzdWx0U3RhdHM7XG4gICAgdGVzdHM6IFRlc3RbXTtcbiAgICBlcnJvcj86IHN0cmluZztcbiAgICByZXBvcnRlclN0YXRzOiBSZXBvcnRlclN0YXRzO1xuICAgIGV4Y2VwdGlvbjogbnVsbCB8IHN0cmluZztcbiAgICBjeXByZXNzQ29uZmlnPzogUGlja2VkQ3lwcmVzc0NvbmZpZyB8IG51bGw7XG4gICAgc2NyZWVuc2hvdHM6IFNjcmVlbnNob3RbXTtcbiAgICB2aWRlbzogYm9vbGVhbjtcbiAgICB2aWRlb1VybD86IHN0cmluZztcbiAgICBoYXNDb3ZlcmFnZT86IGJvb2xlYW47XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEFzc2V0VXBsb2FkSW5zdHJ1Y3Rpb24ge1xuICAgIHVwbG9hZFVybDogc3RyaW5nO1xuICAgIHJlYWRVcmw6IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgU2NyZWVuc2hvdFVwbG9hZEluc3RydWN0aW9uIGV4dGVuZHMgQXNzZXRVcGxvYWRJbnN0cnVjdGlvbiB7XG4gICAgc2NyZWVuc2hvdElkOiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgdHlwZSBTZXRSZXN1bHRzVGVzdHNQYXlsb2FkID0gUGljazxcbiAgICBUZXN0LFxuICAgIFwic3RhdGVcIiB8IFwiZGlzcGxheUVycm9yXCIgfCBcImF0dGVtcHRzXCJcbiAgPiAmIHsgY2xpZW50SWQ6IHN0cmluZyB9O1xuXG4gIGV4cG9ydCBpbnRlcmZhY2UgU2V0SW5zdGFuY2VUZXN0c1BheWxvYWQge1xuICAgIGNvbmZpZzogUGlja2VkQ3lwcmVzc0NvbmZpZztcbiAgICB0ZXN0czogQXJyYXk8U2V0VGVzdHNQYXlsb2FkPjtcbiAgICBob29rczogU3RhbmRhcmQuTW9kdWxlQVBJLlJ1bltcImhvb2tzXCJdO1xuICB9XG5cbiAgZXhwb3J0IHR5cGUgUGlja2VkQ3lwcmVzc0NvbmZpZyA9IFBpY2s8XG4gICAgQ3lwcmVzc0NvbmZpZyxcbiAgICBcInZpZGVvXCIgfCBcInZpZGVvVXBsb2FkT25QYXNzZXNcIlxuICA+O1xuXG4gIGV4cG9ydCB0eXBlIENyZWF0ZUluc3RhbmNlUGF5bG9hZCA9IHtcbiAgICBydW5JZDogc3RyaW5nO1xuICAgIGdyb3VwSWQ6IHN0cmluZztcbiAgICBtYWNoaW5lSWQ6IHN0cmluZztcbiAgICBwbGF0Zm9ybTogUGxhdGZvcm07XG4gIH07XG5cbiAgZXhwb3J0IHR5cGUgQ3JlYXRlSW5zdGFuY2VDeVBheWxvYWQgPSBDcmVhdGVJbnN0YW5jZVBheWxvYWQgJiB7XG4gICAgYmF0Y2hTaXplOiBudW1iZXI7XG4gIH07XG4gIGV4cG9ydCB0eXBlIENyZWF0ZUluc3RhbmNlUmVzcG9uc2UgPSB7XG4gICAgc3BlYzogc3RyaW5nIHwgbnVsbDtcbiAgICBpbnN0YW5jZUlkOiBzdHJpbmcgfCBudWxsO1xuICAgIGNsYWltZWRJbnN0YW5jZXM6IG51bWJlcjtcbiAgICB0b3RhbEluc3RhbmNlczogbnVtYmVyO1xuICB9O1xuXG4gIGV4cG9ydCB0eXBlIEluc3RhbmNlUmVzcG9uc2VTcGVjRGV0YWlscyA9IHtcbiAgICBzcGVjOiBzdHJpbmc7XG4gICAgaW5zdGFuY2VJZDogc3RyaW5nO1xuICB9O1xuICBleHBvcnQgdHlwZSBDcmVhdGVJbnN0YW5jZXNSZXNwb25zZSA9IHtcbiAgICBzcGVjczogQXJyYXk8SW5zdGFuY2VSZXNwb25zZVNwZWNEZXRhaWxzPjtcbiAgICBjbGFpbWVkSW5zdGFuY2VzOiBudW1iZXI7XG4gICAgdG90YWxJbnN0YW5jZXM6IG51bWJlcjtcbiAgfTtcblxuICBleHBvcnQgdHlwZSBVcGRhdGVJbnN0YW5jZVJlc3VsdHNQYXlsb2FkID0gUGljazxcbiAgICBJbnN0YW5jZVJlc3VsdCxcbiAgICBcInN0YXRzXCIgfCBcImV4Y2VwdGlvblwiIHwgXCJ2aWRlb1wiIHwgXCJoYXNDb3ZlcmFnZVwiXG4gID4gJiB7XG4gICAgdGVzdHM6IEFycmF5PFNldFJlc3VsdHNUZXN0c1BheWxvYWQ+IHwgbnVsbDtcbiAgfSAmIHtcbiAgICByZXBvcnRlclN0YXRzOiBDeXByZXNzQ29tbWFuZExpbmUuUnVuUmVzdWx0W1wicmVwb3J0ZXJTdGF0c1wiXSB8IG51bGw7XG4gIH0gJiB7XG4gICAgc2NyZWVuc2hvdHM6IFNjcmVlbnNob3RBcnRpZmFjdFtdO1xuICB9O1xuXG4gIGV4cG9ydCB0eXBlIFVwZGF0ZUluc3RhbmNlUmVzdWx0c01lcmdlZFBheWxvYWQgPSB7XG4gICAgdGVzdHM6IFNldEluc3RhbmNlVGVzdHNQYXlsb2FkO1xuICAgIHJlc3VsdHM6IFVwZGF0ZUluc3RhbmNlUmVzdWx0c1BheWxvYWQ7XG4gIH07XG5cbiAgZXhwb3J0IGludGVyZmFjZSBVcGRhdGVJbnN0YW5jZVJlc3VsdHNSZXNwb25zZSB7XG4gICAgdmlkZW9VcGxvYWRVcmw/OiBzdHJpbmcgfCBudWxsO1xuICAgIHNjcmVlbnNob3RVcGxvYWRVcmxzOiBTY3JlZW5zaG90VXBsb2FkSW5zdHJ1Y3Rpb25bXTtcbiAgICBjb3ZlcmFnZVVwbG9hZFVybD86IHN0cmluZyB8IG51bGw7XG4gICAgY2xvdWQ/OiB7XG4gICAgICBzaG91bGRDYW5jZWw6IGZhbHNlIHwgc3RyaW5nO1xuICAgIH07XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIFRlc3RBdHRlbXB0IHtcbiAgICBzdGF0ZTogVGVzdEF0dGVtcHRTdGF0ZTtcbiAgICBlcnJvcjogU3RhbmRhcmQuTW9kdWxlQVBJLlRlc3RBdHRlbXB0W1wiZXJyb3JcIl0gfCBudWxsO1xuICAgIHdhbGxDbG9ja1N0YXJ0ZWRBdDogc3RyaW5nIHwgbnVsbDtcbiAgICB3YWxsQ2xvY2tEdXJhdGlvbjogbnVtYmVyIHwgbnVsbDtcbiAgICB2aWRlb1RpbWVzdGFtcDogbnVtYmVyIHwgbnVsbDtcbiAgfVxuXG4gIGludGVyZmFjZSBUZXN0Q29uZmlnIHtcbiAgICByZXRyaWVzOlxuICAgICAgfCB7XG4gICAgICAgICAgb3Blbk1vZGU6IG51bWJlcjtcbiAgICAgICAgICBydW5Nb2RlOiBudW1iZXI7XG4gICAgICAgIH1cbiAgICAgIHwgbnVtYmVyO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBUZXN0SG9vayB7XG4gICAgY2xpZW50SWQ6IHN0cmluZztcbiAgICB0eXBlOiBcImJlZm9yZSBlYWNoXCI7XG4gICAgdGl0bGU6IHN0cmluZ1tdO1xuICAgIGJvZHk6IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgVGVzdCB7XG4gICAgc3RhdGU6IFRlc3RTdGF0ZTtcbiAgICB0ZXN0SWQ6IHN0cmluZztcbiAgICBkaXNwbGF5RXJyb3I6IHN0cmluZyB8IG51bGw7XG4gICAgdGl0bGU6IHN0cmluZ1tdO1xuICAgIGNvbmZpZz86IG51bGwgfCBUZXN0Q29uZmlnO1xuICAgIGJvZHk6IHN0cmluZztcbiAgICBhdHRlbXB0czogVGVzdEF0dGVtcHRbXTtcbiAgfVxuXG4gIGV4cG9ydCB0eXBlIFNldFRlc3RzUGF5bG9hZCA9IFBpY2s8VGVzdCwgXCJib2R5XCIgfCBcInRpdGxlXCIgfCBcImNvbmZpZ1wiPiAmIHtcbiAgICBjbGllbnRJZDogc3RyaW5nO1xuICB9O1xufVxuIiwgImltcG9ydCB7IENpUGFyYW1zLCBDaVByb3ZpZGVyIH0gZnJvbSBcImN5cHJlc3MtY2xvdWQvbGliL2NpUHJvdmlkZXJcIjtcbmltcG9ydCB7IFBsYXRmb3JtLCBWYWxpZGF0ZWRDdXJyZW50c1BhcmFtZXRlcnMgfSBmcm9tIFwiY3lwcmVzcy1jbG91ZC90eXBlc1wiO1xuXG5leHBvcnQgdHlwZSBDcmVhdGVSdW5QYXlsb2FkID0ge1xuICBjaToge1xuICAgIHBhcmFtczogQ2lQYXJhbXM7XG4gICAgcHJvdmlkZXI6IENpUHJvdmlkZXI7XG4gIH07XG4gIGNpQnVpbGRJZD86IHN0cmluZztcbiAgcHJvamVjdElkOiBzdHJpbmc7XG4gIHJlY29yZEtleTogc3RyaW5nO1xuICBjb21taXQ6IHtcbiAgICBbbWVtb0tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVsbDtcbiAgfTtcbiAgc3BlY3M6IHN0cmluZ1tdO1xuICBncm91cD86IHN0cmluZztcbiAgcGxhdGZvcm06IFBsYXRmb3JtO1xuICBwYXJhbGxlbDogYm9vbGVhbjtcbiAgc3BlY1BhdHRlcm46IHN0cmluZ1tdO1xuICB0YWdzPzogc3RyaW5nW107XG4gIHRlc3RpbmdUeXBlOiBcImUyZVwiIHwgXCJjb21wb25lbnRcIjtcbiAgdGltZW91dD86IG51bWJlcjtcbiAgYmF0Y2hTaXplPzogbnVtYmVyO1xuICBhdXRvQ2FuY2VsQWZ0ZXJGYWlsdXJlczogVmFsaWRhdGVkQ3VycmVudHNQYXJhbWV0ZXJzW1wiYXV0b0NhbmNlbEFmdGVyRmFpbHVyZXNcIl07XG4gIGNvdmVyYWdlRW5hYmxlZD86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgdHlwZSBDbG91ZFdhcm5pbmcgPSB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIHwgRGF0ZTtcbn07XG5cbmV4cG9ydCB0eXBlIENyZWF0ZVJ1blJlc3BvbnNlID0ge1xuICB3YXJuaW5nczogQ2xvdWRXYXJuaW5nW107XG4gIGdyb3VwSWQ6IHN0cmluZztcbiAgbWFjaGluZUlkOiBzdHJpbmc7XG4gIHJ1bklkOiBzdHJpbmc7XG4gIHJ1blVybDogc3RyaW5nO1xuICBpc05ld1J1bjogYm9vbGVhbjtcbn07XG4iLCAiLyohIEBwcmVzZXJ2ZVxuXG4jIyMgTUlUXG5cblBhcnRzIG9mIHRoaXMgY29kZSB3YXMgY29waWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2N5cHJlc3MtaW8vY3lwcmVzcyBhbmQgaXMgc3ViamVjdCB0byBNSVQgbGljZW5zZS5cblxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSAyMDIyIEN5cHJlc3MuaW9cblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbmNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblNPRlRXQVJFLlxuKi9cblxuaW1wb3J0IGRlYnVnRm4gZnJvbSBcImRlYnVnXCI7XG5cbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IFZhbGlkYXRpb25FcnJvciB9IGZyb20gXCIuL2Vycm9yc1wiO1xuXG5jb25zdCBkZWJ1ZyA9IGRlYnVnRm4oXCJjdXJyZW50czpjaVwiKTtcblxuY29uc3Qgam9pbiA9IChjaGFyOiBzdHJpbmcsIC4uLnBpZWNlczogKHN0cmluZyB8IHVuZGVmaW5lZClbXSkgPT4ge1xuICByZXR1cm4gXy5jaGFpbihwaWVjZXMpLmNvbXBhY3QoKS5qb2luKGNoYXIpLnZhbHVlKCk7XG59O1xuXG5jb25zdCB0b0NhbWVsT2JqZWN0ID0gKG9iajogYW55LCBrZXk6IHN0cmluZykgPT4ge1xuICByZXR1cm4gXy5zZXQob2JqLCBfLmNhbWVsQ2FzZShrZXkpLCBwcm9jZXNzLmVudltrZXldKTtcbn07XG5cbmNvbnN0IGV4dHJhY3QgPSAoZW52S2V5czogc3RyaW5nW10pID0+IHtcbiAgcmV0dXJuIF8udHJhbnNmb3JtKGVudktleXMsIHRvQ2FtZWxPYmplY3QsIHt9KTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHJ1bm5pbmcgb24gVGVhbUZvdW5kYXRpb24gc2VydmVyLlxuICogQHNlZSBodHRwczovL3RlY2huZXQubWljcm9zb2Z0LmNvbS9lbi11cy9oaDg1MDQ0OCh2PXZzLjkyKVxuICovXG5jb25zdCBpc1RlYW1Gb3VuZGF0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gcHJvY2Vzcy5lbnYuVEZfQlVJTEQgJiYgcHJvY2Vzcy5lbnYuVEZfQlVJTERfQlVJTEROVU1CRVI7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBydW5uaW5nIG9uIEF6dXJlIENJIHBpcGVsaW5lLlxuICogU2VlIGVudmlyb25tZW50IHZhcmlhYmxlcyBpbiB0aGUgaXNzdWUgIzM2NTdcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2N5cHJlc3MtaW8vY3lwcmVzcy9pc3N1ZXMvMzY1N1xuICovXG5jb25zdCBpc0F6dXJlQ2kgPSAoKSA9PiB7XG4gIHJldHVybiBwcm9jZXNzLmVudi5URl9CVUlMRCAmJiBwcm9jZXNzLmVudi5BWlVSRV9IVFRQX1VTRVJfQUdFTlQ7XG59O1xuXG5jb25zdCBpc0FXU0NvZGVCdWlsZCA9ICgpID0+IHtcbiAgcmV0dXJuIF8uc29tZShwcm9jZXNzLmVudiwgKHZhbCwga2V5KSA9PiB7XG4gICAgcmV0dXJuIC9eQ09ERUJVSUxEXy8udGVzdChrZXkpO1xuICB9KTtcbn07XG5cbmNvbnN0IGlzQmFtYm9vID0gKCkgPT4ge1xuICByZXR1cm4gcHJvY2Vzcy5lbnYuYmFtYm9vX2J1aWxkTnVtYmVyO1xufTtcblxuY29uc3QgaXNDb2Rlc2hpcEJhc2ljID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIHByb2Nlc3MuZW52LkNJX05BTUUgJiZcbiAgICBwcm9jZXNzLmVudi5DSV9OQU1FID09PSBcImNvZGVzaGlwXCIgJiZcbiAgICBwcm9jZXNzLmVudi5DT0RFU0hJUFxuICApO1xufTtcblxuY29uc3QgaXNDb2Rlc2hpcFBybyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICBwcm9jZXNzLmVudi5DSV9OQU1FICYmXG4gICAgcHJvY2Vzcy5lbnYuQ0lfTkFNRSA9PT0gXCJjb2Rlc2hpcFwiICYmXG4gICAgIXByb2Nlc3MuZW52LkNPREVTSElQXG4gICk7XG59O1xuXG5jb25zdCBpc0NvbmNvdXJzZSA9ICgpID0+IHtcbiAgcmV0dXJuIF8uc29tZShwcm9jZXNzLmVudiwgKHZhbCwga2V5KSA9PiB7XG4gICAgcmV0dXJuIC9eQ09OQ09VUlNFXy8udGVzdChrZXkpO1xuICB9KTtcbn07XG5cbmNvbnN0IGlzR2l0bGFiID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIHByb2Nlc3MuZW52LkdJVExBQl9DSSB8fFxuICAgIChwcm9jZXNzLmVudi5DSV9TRVJWRVJfTkFNRSAmJiAvXkdpdExhYi8udGVzdChwcm9jZXNzLmVudi5DSV9TRVJWRVJfTkFNRSkpXG4gICk7XG59O1xuXG5jb25zdCBpc0dvb2dsZUNsb3VkID0gKCkgPT4ge1xuICAvLyBzZXQgYXV0b21hdGljYWxseSBmb3IgdGhlIE5vZGUuanMgNiwgTm9kZS5qcyA4IHJ1bnRpbWVzIChub3QgaW4gTm9kZSAxMClcbiAgLy8gVE9ETzogbWF5IGFsc28gcG90ZW50aWFsbHkgaGF2ZSBYX0dPT0dMRV8qIGVudiB2YXIgc2V0XG4gIC8vIGh0dHBzOi8vY2xvdWQuZ29vZ2xlLmNvbS9mdW5jdGlvbnMvZG9jcy9lbnYtdmFyI2Vudmlyb25tZW50X3ZhcmlhYmxlc19zZXRfYXV0b21hdGljYWxseVxuICByZXR1cm4gKFxuICAgIHByb2Nlc3MuZW52LkdDUF9QUk9KRUNUIHx8XG4gICAgcHJvY2Vzcy5lbnYuR0NMT1VEX1BST0pFQ1QgfHxcbiAgICBwcm9jZXNzLmVudi5HT09HTEVfQ0xPVURfUFJPSkVDVFxuICApO1xufTtcblxuY29uc3QgaXNKZW5raW5zID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIHByb2Nlc3MuZW52LkpFTktJTlNfVVJMIHx8XG4gICAgcHJvY2Vzcy5lbnYuSkVOS0lOU19IT01FIHx8XG4gICAgcHJvY2Vzcy5lbnYuSkVOS0lOU19WRVJTSU9OIHx8XG4gICAgcHJvY2Vzcy5lbnYuSFVEU09OX1VSTCB8fFxuICAgIHByb2Nlc3MuZW52LkhVRFNPTl9IT01FXG4gICk7XG59O1xuXG5jb25zdCBpc1dlcmNrZXIgPSAoKSA9PiB7XG4gIHJldHVybiBwcm9jZXNzLmVudi5XRVJDS0VSIHx8IHByb2Nlc3MuZW52LldFUkNLRVJfTUFJTl9QSVBFTElORV9TVEFSVEVEO1xufTtcblxuLyoqXG4gKiBXZSBkZXRlY3QgQ0kgcHJvdmlkZXJzIGJ5IGRldGVjdGluZyBhbiBlbnZpcm9ubWVudCB2YXJpYWJsZVxuICogdW5pcXVlIHRvIHRoZSBwcm92aWRlciwgb3IgYnkgY2FsbGluZyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0cnVlXG4gKiBmb3IgdGhhdCBwcm92aWRlci5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgQXBwVmV5b3IgQ0kgaGFzIGVudmlyb25tZW50IHRoZVxuICogdmFyaWFibGUgXCJBUFBWRVlPUlwiIHNldCBkdXJpbmcgcnVuXG4gKi9cbmNvbnN0IENJX1BST1ZJREVSUyA9IHtcbiAgYXBwdmV5b3I6IFwiQVBQVkVZT1JcIixcbiAgYXp1cmU6IGlzQXp1cmVDaSxcbiAgYXdzQ29kZUJ1aWxkOiBpc0FXU0NvZGVCdWlsZCxcbiAgYmFtYm9vOiBpc0JhbWJvbyxcbiAgYml0YnVja2V0OiBcIkJJVEJVQ0tFVF9CVUlMRF9OVU1CRVJcIixcbiAgYnVpbGRraXRlOiBcIkJVSUxES0lURVwiLFxuICBjaXJjbGU6IFwiQ0lSQ0xFQ0lcIixcbiAgY29kZXNoaXBCYXNpYzogaXNDb2Rlc2hpcEJhc2ljLFxuICBjb2Rlc2hpcFBybzogaXNDb2Rlc2hpcFBybyxcbiAgY29uY291cnNlOiBpc0NvbmNvdXJzZSxcbiAgY29kZUZyZXNoOiBcIkNGX0JVSUxEX0lEXCIsXG4gIGRyb25lOiBcIkRST05FXCIsXG4gIGdpdGh1YkFjdGlvbnM6IFwiR0lUSFVCX0FDVElPTlNcIixcbiAgZ2l0bGFiOiBpc0dpdGxhYixcbiAgZ29DRDogXCJHT19KT0JfTkFNRVwiLFxuICBnb29nbGVDbG91ZDogaXNHb29nbGVDbG91ZCxcbiAgamVua2luczogaXNKZW5raW5zLFxuICBzZW1hcGhvcmU6IFwiU0VNQVBIT1JFXCIsXG4gIHNoaXBwYWJsZTogXCJTSElQUEFCTEVcIixcbiAgdGVhbWNpdHk6IFwiVEVBTUNJVFlfVkVSU0lPTlwiLFxuICB0ZWFtZm91bmRhdGlvbjogaXNUZWFtRm91bmRhdGlvbixcbiAgdHJhdmlzOiBcIlRSQVZJU1wiLFxuICB3ZXJja2VyOiBpc1dlcmNrZXIsXG4gIG5ldGxpZnk6IFwiTkVUTElGWVwiLFxuICBsYXllcmNpOiBcIkxBWUVSQ0lcIixcbn07XG5cbmZ1bmN0aW9uIF9kZXRlY3RQcm92aWRlck5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgY29uc3QgeyBlbnYgfSA9IHByb2Nlc3M7XG4gIC8vIHJldHVybiB0aGUga2V5IG9mIHRoZSBmaXJzdCBwcm92aWRlclxuICAvLyB3aGljaCBpcyB0cnV0aHlcblxuICByZXR1cm4gXy5maW5kS2V5KENJX1BST1ZJREVSUywgKHZhbHVlKSA9PiB7XG4gICAgaWYgKF8uaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZW52W3ZhbHVlXTtcbiAgICB9XG5cbiAgICBpZiAoXy5pc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlKCk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gVE9ETzogZG9uJ3QgZm9yIGFib3V0IGJ1aWxkTnVtYmVyIVxuLy8gbG9vayBhdCB0aGUgb2xkIGNvbW1pdCB0aGF0IHdhcyByZW1vdmVkIHRvIHNlZSBob3cgd2UgZGlkIGl0XG5jb25zdCBfcHJvdmlkZXJDaVBhcmFtcyA9ICgpOiBQcm92aWRlckNpUGFyYW1zUmVzID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhcHB2ZXlvcjogZXh0cmFjdChbXG4gICAgICBcIkFQUFZFWU9SX0pPQl9JRFwiLFxuICAgICAgXCJBUFBWRVlPUl9BQ0NPVU5UX05BTUVcIixcbiAgICAgIFwiQVBQVkVZT1JfUFJPSkVDVF9TTFVHXCIsXG4gICAgICBcIkFQUFZFWU9SX0JVSUxEX05VTUJFUlwiLFxuICAgICAgXCJBUFBWRVlPUl9CVUlMRF9WRVJTSU9OXCIsXG4gICAgICBcIkFQUFZFWU9SX1BVTExfUkVRVUVTVF9OVU1CRVJcIixcbiAgICAgIFwiQVBQVkVZT1JfUFVMTF9SRVFVRVNUX0hFQURfUkVQT19CUkFOQ0hcIixcbiAgICBdKSxcbiAgICBhenVyZTogZXh0cmFjdChbXG4gICAgICBcIkJVSUxEX0JVSUxESURcIixcbiAgICAgIFwiQlVJTERfQlVJTEROVU1CRVJcIixcbiAgICAgIFwiQlVJTERfQ09OVEFJTkVSSURcIixcbiAgICAgIFwiQlVJTERfUkVQT1NJVE9SWV9VUklcIixcbiAgICBdKSxcbiAgICBhd3NDb2RlQnVpbGQ6IGV4dHJhY3QoW1xuICAgICAgXCJDT0RFQlVJTERfQlVJTERfSURcIixcbiAgICAgIFwiQ09ERUJVSUxEX0JVSUxEX05VTUJFUlwiLFxuICAgICAgXCJDT0RFQlVJTERfUkVTT0xWRURfU09VUkNFX1ZFUlNJT05cIixcbiAgICAgIFwiQ09ERUJVSUxEX1NPVVJDRV9SRVBPX1VSTFwiLFxuICAgICAgXCJDT0RFQlVJTERfU09VUkNFX1ZFUlNJT05cIixcbiAgICBdKSxcbiAgICBiYW1ib286IGV4dHJhY3QoW1xuICAgICAgXCJiYW1ib29fYnVpbGROdW1iZXJcIixcbiAgICAgIFwiYmFtYm9vX2J1aWxkUmVzdWx0c1VybFwiLFxuICAgICAgXCJiYW1ib29fcGxhblJlcG9zaXRvcnlfcmVwb3NpdG9yeVVybFwiLFxuICAgICAgXCJiYW1ib29fYnVpbGRLZXlcIixcbiAgICBdKSxcbiAgICBiaXRidWNrZXQ6IGV4dHJhY3QoW1xuICAgICAgXCJCSVRCVUNLRVRfUkVQT19TTFVHXCIsXG4gICAgICBcIkJJVEJVQ0tFVF9SRVBPX09XTkVSXCIsXG4gICAgICBcIkJJVEJVQ0tFVF9CVUlMRF9OVU1CRVJcIixcbiAgICAgIFwiQklUQlVDS0VUX1BBUkFMTEVMX1NURVBcIixcbiAgICAgIFwiQklUQlVDS0VUX1NURVBfUlVOX05VTUJFUlwiLFxuICAgICAgLy8gdGhlIFBSIHZhcmlhYmxlcyBhcmUgb25seSBzZXQgb24gcHVsbCByZXF1ZXN0IGJ1aWxkc1xuICAgICAgXCJCSVRCVUNLRVRfUFJfSURcIixcbiAgICAgIFwiQklUQlVDS0VUX1BSX0RFU1RJTkFUSU9OX0JSQU5DSFwiLFxuICAgICAgXCJCSVRCVUNLRVRfUFJfREVTVElOQVRJT05fQ09NTUlUXCIsXG4gICAgXSksXG4gICAgYnVpbGRraXRlOiBleHRyYWN0KFtcbiAgICAgIFwiQlVJTERLSVRFX1JFUE9cIixcbiAgICAgIFwiQlVJTERLSVRFX1NPVVJDRVwiLFxuICAgICAgXCJCVUlMREtJVEVfSk9CX0lEXCIsXG4gICAgICBcIkJVSUxES0lURV9CVUlMRF9JRFwiLFxuICAgICAgXCJCVUlMREtJVEVfQlVJTERfVVJMXCIsXG4gICAgICBcIkJVSUxES0lURV9CVUlMRF9OVU1CRVJcIixcbiAgICAgIFwiQlVJTERLSVRFX1BVTExfUkVRVUVTVFwiLFxuICAgICAgXCJCVUlMREtJVEVfUFVMTF9SRVFVRVNUX1JFUE9cIixcbiAgICAgIFwiQlVJTERLSVRFX1BVTExfUkVRVUVTVF9CQVNFX0JSQU5DSFwiLFxuICAgIF0pLFxuICAgIGNpcmNsZTogZXh0cmFjdChbXG4gICAgICBcIkNJUkNMRV9KT0JcIixcbiAgICAgIFwiQ0lSQ0xFX0JVSUxEX05VTVwiLFxuICAgICAgXCJDSVJDTEVfQlVJTERfVVJMXCIsXG4gICAgICBcIkNJUkNMRV9QUl9OVU1CRVJcIixcbiAgICAgIFwiQ0lSQ0xFX1BSX1JFUE9OQU1FXCIsXG4gICAgICBcIkNJUkNMRV9QUl9VU0VSTkFNRVwiLFxuICAgICAgXCJDSVJDTEVfQ09NUEFSRV9VUkxcIixcbiAgICAgIFwiQ0lSQ0xFX1dPUktGTE9XX0lEXCIsXG4gICAgICBcIkNJUkNMRV9QVUxMX1JFUVVFU1RcIixcbiAgICAgIFwiQ0lSQ0xFX1JFUE9TSVRPUllfVVJMXCIsXG4gICAgICBcIkNJX1BVTExfUkVRVUVTVFwiLFxuICAgIF0pLFxuICAgIGNvZGVzaGlwQmFzaWM6IGV4dHJhY3QoW1xuICAgICAgXCJDSV9CVUlMRF9JRFwiLFxuICAgICAgXCJDSV9SRVBPX05BTUVcIixcbiAgICAgIFwiQ0lfQlVJTERfVVJMXCIsXG4gICAgICBcIkNJX1BST0pFQ1RfSURcIixcbiAgICAgIFwiQ0lfQlVJTERfTlVNQkVSXCIsXG4gICAgICBcIkNJX1BVTExfUkVRVUVTVFwiLFxuICAgIF0pLFxuICAgIC8vIENvZGVzaGlwUHJvIHByb3ZpZGVzIHZlcnkgZmV3IENJIHZhcmlhYmxlc1xuICAgIC8vIGh0dHBzOi8vZG9jdW1lbnRhdGlvbi5jb2Rlc2hpcC5jb20vcHJvL2J1aWxkcy1hbmQtY29uZmlndXJhdGlvbi9lbnZpcm9ubWVudC12YXJpYWJsZXMvXG4gICAgY29kZXNoaXBQcm86IGV4dHJhY3QoW1wiQ0lfQlVJTERfSURcIiwgXCJDSV9SRVBPX05BTUVcIiwgXCJDSV9QUk9KRUNUX0lEXCJdKSxcbiAgICAvLyBodHRwczovL2NvbmNvdXJzZS1jaS5vcmcvaW1wbGVtZW50aW5nLXJlc291cmNlLXR5cGVzLmh0bWwjcmVzb3VyY2UtbWV0YWRhdGFcbiAgICBjb25jb3Vyc2U6IGV4dHJhY3QoW1xuICAgICAgXCJCVUlMRF9JRFwiLFxuICAgICAgXCJCVUlMRF9OQU1FXCIsXG4gICAgICBcIkJVSUxEX0pPQl9OQU1FXCIsXG4gICAgICBcIkJVSUxEX1BJUEVMSU5FX05BTUVcIixcbiAgICAgIFwiQlVJTERfVEVBTV9OQU1FXCIsXG4gICAgICBcIkFUQ19FWFRFUk5BTF9VUkxcIixcbiAgICBdKSxcbiAgICAvLyBodHRwczovL2NvZGVmcmVzaC5pby9kb2NzL2RvY3MvY29kZWZyZXNoLXlhbWwvdmFyaWFibGVzL1xuICAgIGNvZGVGcmVzaDogZXh0cmFjdChbXG4gICAgICBcIkNGX0JVSUxEX0lEXCIsXG4gICAgICBcIkNGX0JVSUxEX1VSTFwiLFxuICAgICAgXCJDRl9DVVJSRU5UX0FUVEVNUFRcIixcbiAgICAgIFwiQ0ZfU1RFUF9OQU1FXCIsXG4gICAgICBcIkNGX1BJUEVMSU5FX05BTUVcIixcbiAgICAgIFwiQ0ZfUElQRUxJTkVfVFJJR0dFUl9JRFwiLFxuICAgICAgLy8gdmFyaWFibGVzIGFkZGVkIGZvciBwdWxsIHJlcXVlc3RzXG4gICAgICBcIkNGX1BVTExfUkVRVUVTVF9JRFwiLFxuICAgICAgXCJDRl9QVUxMX1JFUVVFU1RfSVNfRk9SS1wiLFxuICAgICAgXCJDRl9QVUxMX1JFUVVFU1RfTlVNQkVSXCIsXG4gICAgICBcIkNGX1BVTExfUkVRVUVTVF9UQVJHRVRcIixcbiAgICBdKSxcbiAgICBkcm9uZTogZXh0cmFjdChbXG4gICAgICBcIkRST05FX0pPQl9OVU1CRVJcIixcbiAgICAgIFwiRFJPTkVfQlVJTERfTElOS1wiLFxuICAgICAgXCJEUk9ORV9CVUlMRF9OVU1CRVJcIixcbiAgICAgIFwiRFJPTkVfUFVMTF9SRVFVRVNUXCIsXG4gICAgXSksXG4gICAgLy8gaHR0cHM6Ly9oZWxwLmdpdGh1Yi5jb20vZW4vYWN0aW9ucy9hdXRvbWF0aW5nLXlvdXItd29ya2Zsb3ctd2l0aC1naXRodWItYWN0aW9ucy91c2luZy1lbnZpcm9ubWVudC12YXJpYWJsZXMjZGVmYXVsdC1lbnZpcm9ubWVudC12YXJpYWJsZXNcbiAgICBnaXRodWJBY3Rpb25zOiBleHRyYWN0KFtcbiAgICAgIFwiR0lUSFVCX1dPUktGTE9XXCIsXG4gICAgICBcIkdJVEhVQl9BQ1RJT05cIixcbiAgICAgIFwiR0lUSFVCX0VWRU5UX05BTUVcIixcbiAgICAgIFwiR0lUSFVCX1JVTl9JRFwiLFxuICAgICAgXCJHSVRIVUJfUlVOX0FUVEVNUFRcIixcbiAgICAgIFwiR0lUSFVCX1JFUE9TSVRPUllcIixcbiAgICBdKSxcbiAgICAvLyBzZWUgaHR0cHM6Ly9kb2NzLmdpdGxhYi5jb20vZWUvY2kvdmFyaWFibGVzL1xuICAgIGdpdGxhYjogZXh0cmFjdChbXG4gICAgICAvLyBwaXBlbGluZSBpcyBjb21tb24gYW1vbmcgYWxsIGpvYnNcbiAgICAgIFwiQ0lfUElQRUxJTkVfSURcIixcbiAgICAgIFwiQ0lfUElQRUxJTkVfVVJMXCIsXG4gICAgICAvLyBpbmRpdmlkdWFsIGpvYnNcbiAgICAgIFwiQ0lfQlVJTERfSURcIiwgLy8gYnVpbGQgaWQgYW5kIGpvYiBpZCBhcmUgYWxpYXNlc1xuICAgICAgXCJDSV9KT0JfSURcIixcbiAgICAgIFwiQ0lfSk9CX1VSTFwiLFxuICAgICAgXCJDSV9KT0JfTkFNRVwiLFxuICAgICAgLy8gb3RoZXIgaW5mb3JtYXRpb25cbiAgICAgIFwiR0lUTEFCX0hPU1RcIixcbiAgICAgIFwiQ0lfUFJPSkVDVF9JRFwiLFxuICAgICAgXCJDSV9QUk9KRUNUX1VSTFwiLFxuICAgICAgXCJDSV9SRVBPU0lUT1JZX1VSTFwiLFxuICAgICAgXCJDSV9FTlZJUk9OTUVOVF9VUkxcIixcbiAgICAgIFwiQ0lfREVGQVVMVF9CUkFOQ0hcIixcbiAgICAgIC8vIGZvciBQUnM6IGh0dHBzOi8vZ2l0bGFiLmNvbS9naXRsYWItb3JnL2dpdGxhYi1jZS9pc3N1ZXMvMjM5MDJcbiAgICBdKSxcbiAgICAvLyBodHRwczovL2RvY3MuZ29jZC5vcmcvY3VycmVudC9mYXEvZGV2X3VzZV9jdXJyZW50X3JldmlzaW9uX2luX2J1aWxkLmh0bWwjc3RhbmRhcmQtZ29jZC1lbnZpcm9ubWVudC12YXJpYWJsZXNcbiAgICBnb0NEOiBleHRyYWN0KFtcbiAgICAgIFwiR09fU0VSVkVSX1VSTFwiLFxuICAgICAgXCJHT19FTlZJUk9OTUVOVF9OQU1FXCIsXG4gICAgICBcIkdPX1BJUEVMSU5FX05BTUVcIixcbiAgICAgIFwiR09fUElQRUxJTkVfQ09VTlRFUlwiLFxuICAgICAgXCJHT19QSVBFTElORV9MQUJFTFwiLFxuICAgICAgXCJHT19TVEFHRV9OQU1FXCIsXG4gICAgICBcIkdPX1NUQUdFX0NPVU5URVJcIixcbiAgICAgIFwiR09fSk9CX05BTUVcIixcbiAgICAgIFwiR09fVFJJR0dFUl9VU0VSXCIsXG4gICAgICBcIkdPX1JFVklTSU9OXCIsXG4gICAgICBcIkdPX1RPX1JFVklTSU9OXCIsXG4gICAgICBcIkdPX0ZST01fUkVWSVNJT05cIixcbiAgICAgIFwiR09fTUFURVJJQUxfSEFTX0NIQU5HRURcIixcbiAgICBdKSxcbiAgICBnb29nbGVDbG91ZDogZXh0cmFjdChbXG4gICAgICAvLyBpbmRpdmlkdWFsIGpvYnNcbiAgICAgIFwiQlVJTERfSURcIixcbiAgICAgIFwiUFJPSkVDVF9JRFwiLFxuICAgICAgLy8gb3RoZXIgaW5mb3JtYXRpb25cbiAgICAgIFwiUkVQT19OQU1FXCIsXG4gICAgICBcIkJSQU5DSF9OQU1FXCIsXG4gICAgICBcIlRBR19OQU1FXCIsXG4gICAgICBcIkNPTU1JVF9TSEFcIixcbiAgICAgIFwiU0hPUlRfU0hBXCIsXG4gICAgICAvLyBodHRwczovL2Nsb3VkLmdvb2dsZS5jb20vY2xvdWQtYnVpbGQvZG9jcy9hcGkvcmVmZXJlbmNlL3Jlc3QvU2hhcmVkLlR5cGVzL0J1aWxkXG4gICAgXSksXG4gICAgamVua2luczogZXh0cmFjdChbXCJCVUlMRF9JRFwiLCBcIkJVSUxEX1VSTFwiLCBcIkJVSUxEX05VTUJFUlwiLCBcImdocHJiUHVsbElkXCJdKSxcbiAgICAvLyBodHRwczovL3NlbWFwaG9yZWNpLmNvbS9kb2NzL2F2YWlsYWJsZS1lbnZpcm9ubWVudC12YXJpYWJsZXMuaHRtbFxuICAgIC8vIHNvbWUgY29tZSBmcm9tIHYxLCBzb21lIGZyb20gdjIgb2Ygc2VtYXBob3JlXG4gICAgc2VtYXBob3JlOiBleHRyYWN0KFtcbiAgICAgIFwiU0VNQVBIT1JFX0JSQU5DSF9JRFwiLFxuICAgICAgXCJTRU1BUEhPUkVfQlVJTERfTlVNQkVSXCIsXG4gICAgICBcIlNFTUFQSE9SRV9DVVJSRU5UX0pPQlwiLFxuICAgICAgXCJTRU1BUEhPUkVfQ1VSUkVOVF9USFJFQURcIixcbiAgICAgIFwiU0VNQVBIT1JFX0VYRUNVVEFCTEVfVVVJRFwiLFxuICAgICAgXCJTRU1BUEhPUkVfR0lUX0JSQU5DSFwiLFxuICAgICAgXCJTRU1BUEhPUkVfR0lUX0RJUlwiLFxuICAgICAgXCJTRU1BUEhPUkVfR0lUX1JFRlwiLFxuICAgICAgXCJTRU1BUEhPUkVfR0lUX1JFRl9UWVBFXCIsXG4gICAgICBcIlNFTUFQSE9SRV9HSVRfUkVQT19TTFVHXCIsXG4gICAgICBcIlNFTUFQSE9SRV9HSVRfU0hBXCIsXG4gICAgICBcIlNFTUFQSE9SRV9HSVRfVVJMXCIsXG4gICAgICBcIlNFTUFQSE9SRV9KT0JfQ09VTlRcIixcbiAgICAgIFwiU0VNQVBIT1JFX0pPQl9JRFwiLCAvLyB2MlxuICAgICAgXCJTRU1BUEhPUkVfSk9CX05BTUVcIixcbiAgICAgIFwiU0VNQVBIT1JFX0pPQl9VVUlEXCIsIC8vIHYxXG4gICAgICBcIlNFTUFQSE9SRV9QSVBFTElORV9JRFwiLFxuICAgICAgXCJTRU1BUEhPUkVfUExBVEZPUk1cIixcbiAgICAgIFwiU0VNQVBIT1JFX1BST0pFQ1RfRElSXCIsXG4gICAgICBcIlNFTUFQSE9SRV9QUk9KRUNUX0hBU0hfSURcIixcbiAgICAgIFwiU0VNQVBIT1JFX1BST0pFQ1RfSURcIiwgLy8gdjJcbiAgICAgIFwiU0VNQVBIT1JFX1BST0pFQ1RfTkFNRVwiLFxuICAgICAgXCJTRU1BUEhPUkVfUFJPSkVDVF9VVUlEXCIsIC8vIHYxXG4gICAgICBcIlNFTUFQSE9SRV9SRVBPX1NMVUdcIixcbiAgICAgIFwiU0VNQVBIT1JFX1RSSUdHRVJfU09VUkNFXCIsXG4gICAgICBcIlNFTUFQSE9SRV9XT1JLRkxPV19JRFwiLFxuICAgICAgXCJQVUxMX1JFUVVFU1RfTlVNQkVSXCIsIC8vIHB1bGwgcmVxdWVzdHMgZnJvbSBmb3JrcyBPTkxZXG4gICAgXSksXG4gICAgLy8gc2VlIGh0dHA6Ly9kb2NzLnNoaXBwYWJsZS5jb20vY2kvZW52LXZhcnMvXG4gICAgc2hpcHBhYmxlOiBleHRyYWN0KFtcbiAgICAgIC8vIGJ1aWxkIHZhcmlhYmxlc1xuICAgICAgXCJTSElQUEFCTEVfQlVJTERfSURcIiwgLy8gXCI1YjkzMzU0Y2FiZmFiYjA3MDA3ZjAxZmRcIlxuICAgICAgXCJTSElQUEFCTEVfQlVJTERfTlVNQkVSXCIsIC8vIFwiNFwiXG4gICAgICBcIlNISVBQQUJMRV9DT01NSVRfUkFOR0VcIiwgLy8gXCJzaGExLi4uc2hhMlwiXG4gICAgICBcIlNISVBQQUJMRV9DT05UQUlORVJfTkFNRVwiLCAvLyBcImMuZXhlYy5jeXByZXNzLWV4YW1wbGUta2l0Y2hlbnNpbmsuNC4xXCJcbiAgICAgIFwiU0hJUFBBQkxFX0pPQl9JRFwiLCAvLyBcIjFcIlxuICAgICAgXCJTSElQUEFCTEVfSk9CX05VTUJFUlwiLCAvLyBcIjFcIlxuICAgICAgXCJTSElQUEFCTEVfUkVQT19TTFVHXCIsIC8vIFwiPHVzZXJuYW1lPi88cmVwbz5cIlxuICAgICAgLy8gYWRkaXRpb25hbCBpbmZvcm1hdGlvbiB0aGF0IFNoaXBwYWJsZSBwcm92aWRlc1xuICAgICAgXCJJU19GT1JLXCIsIC8vIFwidHJ1ZVwiXG4gICAgICBcIklTX0dJVF9UQUdcIiwgLy8gXCJmYWxzZVwiXG4gICAgICBcIklTX1BSRVJFTEVBU0VcIiwgLy8gXCJmYWxzZVwiXG4gICAgICBcIklTX1JFTEVBU0VcIiwgLy8gXCJmYWxzZVwiXG4gICAgICBcIlJFUE9TSVRPUllfVVJMXCIsIC8vIFwiaHR0cHM6Ly9naXRodWIuY29tLy4uLi5naXRcIlxuICAgICAgXCJSRVBPX0ZVTExfTkFNRVwiLCAvLyBcIjx1c2VybmFtZT4vPHJlcG8+XCJcbiAgICAgIFwiUkVQT19OQU1FXCIsIC8vIFwiY3lwcmVzcy1leGFtcGxlLWtpdGNoZW5zaW5rXCJcbiAgICAgIFwiQlVJTERfVVJMXCIsIC8vIFwiaHR0cHM6Ly9hcHAuc2hpcHBhYmxlLmNvbS9naXRodWIvPHVzZXJuYW1lPi88cmVwbz4vcnVucy8xXCJcbiAgICAgIC8vIFB1bGwgcmVxdWVzdCBpbmZvcm1hdGlvblxuICAgICAgXCJCQVNFX0JSQU5DSFwiLCAvLyBOYW1lIG9mIHRoZSB0YXJnZXQgYnJhbmNoIGludG8gd2hpY2ggdGhlIHB1bGwgcmVxdWVzdCBjaGFuZ2VzIHdpbGwgYmUgbWVyZ2VkLlxuICAgICAgXCJIRUFEX0JSQU5DSFwiLCAvLyBUaGlzIGlzIG9ubHkgc2V0IGZvciBwdWxsIHJlcXVlc3RzIGFuZCBpcyB0aGUgbmFtZSBvZiB0aGUgYnJhbmNoIHRoZSBwdWxsIHJlcXVlc3Qgd2FzIG9wZW5lZCBmcm9tLlxuICAgICAgXCJJU19QVUxMX1JFUVVFU1RcIiwgLy8gXCJmYWxzZVwiIG9yIFwidHJ1ZVwiXG4gICAgICBcIlBVTExfUkVRVUVTVFwiLCAvLyBQdWxsIHJlcXVlc3QgbnVtYmVyIGlmIHRoZSBqb2IgaXMgYSBwdWxsIHJlcXVlc3QuIElmIG5vdCwgdGhpcyB3aWxsIGJlIHNldCB0byBmYWxzZS5cbiAgICAgIFwiUFVMTF9SRVFVRVNUX0JBU0VfQlJBTkNIXCIsIC8vIE5hbWUgb2YgdGhlIGJyYW5jaCB0aGF0IHRoZSBwdWxsIHJlcXVlc3Qgd2lsbCBiZSBtZXJnZWQgaW50by4gSXQgc2hvdWxkIGJlIHRoZSBzYW1lIGFzIEJBU0VfQlJBTkNILlxuICAgICAgXCJQVUxMX1JFUVVFU1RfUkVQT19GVUxMX05BTUVcIiwgLy8gRnVsbCBuYW1lIG9mIHRoZSByZXBvc2l0b3J5IGZyb20gd2hlcmUgdGhlIHB1bGwgcmVxdWVzdCBvcmlnaW5hdGVkLlxuICAgIF0pLFxuICAgIHRlYW1jaXR5OiBudWxsLFxuICAgIHRlYW1mb3VuZGF0aW9uOiBleHRyYWN0KFtcbiAgICAgIFwiQlVJTERfQlVJTERJRFwiLFxuICAgICAgXCJCVUlMRF9CVUlMRE5VTUJFUlwiLFxuICAgICAgXCJCVUlMRF9DT05UQUlORVJJRFwiLFxuICAgIF0pLFxuICAgIHRyYXZpczogZXh0cmFjdChbXG4gICAgICBcIlRSQVZJU19KT0JfSURcIixcbiAgICAgIFwiVFJBVklTX0JVSUxEX0lEXCIsXG4gICAgICBcIlRSQVZJU19CVUlMRF9XRUJfVVJMXCIsXG4gICAgICBcIlRSQVZJU19SRVBPX1NMVUdcIixcbiAgICAgIFwiVFJBVklTX0pPQl9OVU1CRVJcIixcbiAgICAgIFwiVFJBVklTX0VWRU5UX1RZUEVcIixcbiAgICAgIFwiVFJBVklTX0NPTU1JVF9SQU5HRVwiLFxuICAgICAgXCJUUkFWSVNfQlVJTERfTlVNQkVSXCIsXG4gICAgICBcIlRSQVZJU19QVUxMX1JFUVVFU1RcIixcbiAgICAgIFwiVFJBVklTX1BVTExfUkVRVUVTVF9CUkFOQ0hcIixcbiAgICAgIFwiVFJBVklTX1BVTExfUkVRVUVTVF9TSEFcIixcbiAgICBdKSxcbiAgICB3ZXJja2VyOiBudWxsLFxuICAgIC8vIGh0dHBzOi8vZG9jcy5uZXRsaWZ5LmNvbS9jb25maWd1cmUtYnVpbGRzL2Vudmlyb25tZW50LXZhcmlhYmxlcy8jZGVwbG95LXVybHMtYW5kLW1ldGFkYXRhXG4gICAgbmV0bGlmeTogZXh0cmFjdChbXG4gICAgICBcIkJVSUxEX0lEXCIsXG4gICAgICBcIkNPTlRFWFRcIixcbiAgICAgIFwiVVJMXCIsXG4gICAgICBcIkRFUExPWV9VUkxcIixcbiAgICAgIFwiREVQTE9ZX1BSSU1FX1VSTFwiLFxuICAgICAgXCJERVBMT1lfSURcIixcbiAgICBdKSxcbiAgICAvLyBodHRwczovL2xheWVyY2kuY29tL2RvY3MvbGF5ZXJmaWxlLXJlZmVyZW5jZS9idWlsZC1lbnZcbiAgICBsYXllcmNpOiBleHRyYWN0KFtcbiAgICAgIFwiTEFZRVJDSV9KT0JfSURcIixcbiAgICAgIFwiTEFZRVJDSV9SVU5ORVJfSURcIixcbiAgICAgIFwiUkVUUllfSU5ERVhcIixcbiAgICAgIFwiTEFZRVJDSV9QVUxMX1JFUVVFU1RcIixcbiAgICAgIFwiTEFZRVJDSV9SRVBPX05BTUVcIixcbiAgICAgIFwiTEFZRVJDSV9SRVBPX09XTkVSXCIsXG4gICAgICBcIkxBWUVSQ0lfQlJBTkNIXCIsXG4gICAgICBcIkdJVF9UQUdcIiwgLy8gc2hvcnQgaGV4IGZvciBjb21taXRzXG4gICAgXSksXG4gIH07XG59O1xuXG4vLyB0cmllcyB0byBncmFiIGNvbW1pdCBpbmZvcm1hdGlvbiBmcm9tIENJIGVudmlyb25tZW50IHZhcmlhYmxlc1xuLy8gdmVyeSB1c2VmdWwgdG8gZmlsbCBtaXNzaW5nIGluZm9ybWF0aW9uIHdoZW4gR2l0IGNhbm5vdCBncmFiIGNvcnJlY3QgdmFsdWVzXG5jb25zdCBfcHJvdmlkZXJDb21taXRQYXJhbXMgPSAoKTogUHJvdmlkZXJDb21taXRQYXJhbXNSZXMgPT4ge1xuICBjb25zdCB7IGVudiB9ID0gcHJvY2VzcztcblxuICByZXR1cm4ge1xuICAgIGFwcHZleW9yOiB7XG4gICAgICBzaGE6IGVudi5BUFBWRVlPUl9SRVBPX0NPTU1JVCxcbiAgICAgIC8vIHNpbmNlIEFQUFZFWU9SX1JFUE9fQlJBTkNIIHdpbGwgYmUgdGhlIHRhcmdldCBicmFuY2ggb24gYSBQUlxuICAgICAgLy8gd2UgbmVlZCB0byB1c2UgUFVMTF9SRVFVRVNUX0hFQURfUkVQT19CUkFOQ0ggaWYgaXQgZXhpc3RzLlxuICAgICAgLy8gZS5nLiBpZiB5b3UgaGF2ZSBhIFBSOiBkZXZlbG9wIDwtIG15LWZlYXR1cmUtYnJhbmNoXG4gICAgICAvLyBteS1mZWF0dXJlLWJyYW5jaCBpcyBBUFBWRVlPUl9QVUxMX1JFUVVFU1RfSEVBRF9SRVBPX0JSQU5DSFxuICAgICAgLy8gZGV2ZWxvcCAgICAgICAgICAgaXMgQVBQVkVZT1JfUkVQT19CUkFOQ0hcbiAgICAgIGJyYW5jaDpcbiAgICAgICAgZW52LkFQUFZFWU9SX1BVTExfUkVRVUVTVF9IRUFEX1JFUE9fQlJBTkNIIHx8IGVudi5BUFBWRVlPUl9SRVBPX0JSQU5DSCxcbiAgICAgIG1lc3NhZ2U6IGpvaW4oXG4gICAgICAgIFwiXFxuXCIsXG4gICAgICAgIGVudi5BUFBWRVlPUl9SRVBPX0NPTU1JVF9NRVNTQUdFLFxuICAgICAgICBlbnYuQVBQVkVZT1JfUkVQT19DT01NSVRfTUVTU0FHRV9FWFRFTkRFRFxuICAgICAgKSxcbiAgICAgIGF1dGhvck5hbWU6IGVudi5BUFBWRVlPUl9SRVBPX0NPTU1JVF9BVVRIT1IsXG4gICAgICBhdXRob3JFbWFpbDogZW52LkFQUFZFWU9SX1JFUE9fQ09NTUlUX0FVVEhPUl9FTUFJTCxcbiAgICAgIC8vIHJlbW90ZU9yaWdpbjogPz8/XG4gICAgICAvLyBkZWZhdWx0QnJhbmNoOiA/Pz9cbiAgICB9LFxuICAgIGF3c0NvZGVCdWlsZDoge1xuICAgICAgc2hhOiBlbnYuQ09ERUJVSUxEX1JFU09MVkVEX1NPVVJDRV9WRVJTSU9OLFxuICAgICAgLy8gYnJhbmNoOiA/Pz8sXG4gICAgICAvLyBtZXNzYWdlOiA/Pz9cbiAgICAgIC8vIGF1dGhvck5hbWU6ID8/P1xuICAgICAgLy8gYXV0aG9yRW1haWw6ID8/P1xuICAgICAgcmVtb3RlT3JpZ2luOiBlbnYuQ09ERUJVSUxEX1NPVVJDRV9SRVBPX1VSTCxcbiAgICAgIC8vIGRlZmF1bHRCcmFuY2g6ID8/P1xuICAgIH0sXG4gICAgYXp1cmU6IHtcbiAgICAgIHNoYTogZW52LkJVSUxEX1NPVVJDRVZFUlNJT04sXG4gICAgICBicmFuY2g6IGVudi5CVUlMRF9TT1VSQ0VCUkFOQ0hOQU1FLFxuICAgICAgbWVzc2FnZTogZW52LkJVSUxEX1NPVVJDRVZFUlNJT05NRVNTQUdFLFxuICAgICAgYXV0aG9yTmFtZTogZW52LkJVSUxEX1NPVVJDRVZFUlNJT05BVVRIT1IsXG4gICAgICBhdXRob3JFbWFpbDogZW52LkJVSUxEX1JFUVVFU1RFREZPUkVNQUlMLFxuICAgIH0sXG4gICAgYmFtYm9vOiB7XG4gICAgICBzaGE6IGVudi5iYW1ib29fcGxhblJlcG9zaXRvcnlfcmV2aXNpb24sXG4gICAgICBicmFuY2g6IGVudi5iYW1ib29fcGxhblJlcG9zaXRvcnlfYnJhbmNoLFxuICAgICAgLy8gbWVzc2FnZTogPz8/XG4gICAgICBhdXRob3JOYW1lOiBlbnYuYmFtYm9vX3BsYW5SZXBvc2l0b3J5X3VzZXJuYW1lLFxuICAgICAgLy8gYXV0aG9yRW1haWw6ID8/P1xuICAgICAgcmVtb3RlT3JpZ2luOiBlbnYuYmFtYm9vX3BsYW5SZXBvc2l0b3J5X3JlcG9zaXRvcnlVUkwsXG4gICAgICAvLyBkZWZhdWx0QnJhbmNoOiA/Pz9cbiAgICB9LFxuICAgIGJpdGJ1Y2tldDoge1xuICAgICAgc2hhOiBlbnYuQklUQlVDS0VUX0NPTU1JVCxcbiAgICAgIGJyYW5jaDogZW52LkJJVEJVQ0tFVF9CUkFOQ0gsXG4gICAgICAvLyBtZXNzYWdlOiA/Pz9cbiAgICAgIC8vIGF1dGhvck5hbWU6ID8/P1xuICAgICAgLy8gYXV0aG9yRW1haWw6ID8/P1xuICAgICAgLy8gcmVtb3RlT3JpZ2luOiA/Pz9cbiAgICAgIC8vIGRlZmF1bHRCcmFuY2g6ID8/P1xuICAgIH0sXG4gICAgYnVpbGRraXRlOiB7XG4gICAgICBzaGE6IGVudi5CVUlMREtJVEVfQ09NTUlULFxuICAgICAgYnJhbmNoOiBlbnYuQlVJTERLSVRFX0JSQU5DSCxcbiAgICAgIG1lc3NhZ2U6IGVudi5CVUlMREtJVEVfTUVTU0FHRSxcbiAgICAgIGF1dGhvck5hbWU6IGVudi5CVUlMREtJVEVfQlVJTERfQ1JFQVRPUixcbiAgICAgIGF1dGhvckVtYWlsOiBlbnYuQlVJTERLSVRFX0JVSUxEX0NSRUFUT1JfRU1BSUwsXG4gICAgICByZW1vdGVPcmlnaW46IGVudi5CVUlMREtJVEVfUkVQTyxcbiAgICAgIGRlZmF1bHRCcmFuY2g6IGVudi5CVUlMREtJVEVfUElQRUxJTkVfREVGQVVMVF9CUkFOQ0gsXG4gICAgfSxcbiAgICBjaXJjbGU6IHtcbiAgICAgIHNoYTogZW52LkNJUkNMRV9TSEExLFxuICAgICAgYnJhbmNoOiBlbnYuQ0lSQ0xFX0JSQU5DSCxcbiAgICAgIC8vIG1lc3NhZ2U6ID8/P1xuICAgICAgYXV0aG9yTmFtZTogZW52LkNJUkNMRV9VU0VSTkFNRSxcbiAgICAgIC8vIGF1dGhvckVtYWlsOiA/Pz9cbiAgICAgIHJlbW90ZU9yaWdpbjogZW52LkNJUkNMRV9SRVBPU0lUT1JZX1VSTCxcbiAgICAgIC8vIGRlZmF1bHRCcmFuY2g6ID8/P1xuICAgIH0sXG4gICAgY29kZXNoaXBCYXNpYzoge1xuICAgICAgc2hhOiBlbnYuQ0lfQ09NTUlUX0lELFxuICAgICAgYnJhbmNoOiBlbnYuQ0lfQlJBTkNILFxuICAgICAgbWVzc2FnZTogZW52LkNJX0NPTU1JVF9NRVNTQUdFLFxuICAgICAgYXV0aG9yTmFtZTogZW52LkNJX0NPTU1JVFRFUl9OQU1FLFxuICAgICAgYXV0aG9yRW1haWw6IGVudi5DSV9DT01NSVRURVJfRU1BSUwsXG4gICAgICAvLyByZW1vdGVPcmlnaW46ID8/P1xuICAgICAgLy8gZGVmYXVsdEJyYW5jaDogPz8/XG4gICAgfSxcbiAgICBjb2Rlc2hpcFBybzoge1xuICAgICAgc2hhOiBlbnYuQ0lfQ09NTUlUX0lELFxuICAgICAgYnJhbmNoOiBlbnYuQ0lfQlJBTkNILFxuICAgICAgbWVzc2FnZTogZW52LkNJX0NPTU1JVF9NRVNTQUdFLFxuICAgICAgYXV0aG9yTmFtZTogZW52LkNJX0NPTU1JVFRFUl9OQU1FLFxuICAgICAgYXV0aG9yRW1haWw6IGVudi5DSV9DT01NSVRURVJfRU1BSUwsXG4gICAgICAvLyByZW1vdGVPcmlnaW46ID8/P1xuICAgICAgLy8gZGVmYXVsdEJyYW5jaDogPz8/XG4gICAgfSxcbiAgICBjb2RlRnJlc2g6IHtcbiAgICAgIHNoYTogZW52LkNGX1JFVklTSU9OLFxuICAgICAgYnJhbmNoOiBlbnYuQ0ZfQlJBTkNILFxuICAgICAgbWVzc2FnZTogZW52LkNGX0NPTU1JVF9NRVNTQUdFLFxuICAgICAgYXV0aG9yTmFtZTogZW52LkNGX0NPTU1JVF9BVVRIT1IsXG4gICAgfSxcbiAgICBkcm9uZToge1xuICAgICAgc2hhOiBlbnYuRFJPTkVfQ09NTUlUX1NIQSxcbiAgICAgIC8vIGh0dHBzOi8vZG9jcy5kcm9uZS5pby9waXBlbGluZS9lbnZpcm9ubWVudC9yZWZlcmVuY2UvZHJvbmUtc291cmNlLWJyYW5jaC9cbiAgICAgIGJyYW5jaDogZW52LkRST05FX1NPVVJDRV9CUkFOQ0gsXG4gICAgICBtZXNzYWdlOiBlbnYuRFJPTkVfQ09NTUlUX01FU1NBR0UsXG4gICAgICBhdXRob3JOYW1lOiBlbnYuRFJPTkVfQ09NTUlUX0FVVEhPUixcbiAgICAgIGF1dGhvckVtYWlsOiBlbnYuRFJPTkVfQ09NTUlUX0FVVEhPUl9FTUFJTCxcbiAgICAgIHJlbW90ZU9yaWdpbjogZW52LkRST05FX0dJVF9IVFRQX1VSTCxcbiAgICAgIGRlZmF1bHRCcmFuY2g6IGVudi5EUk9ORV9SRVBPX0JSQU5DSCxcbiAgICB9LFxuICAgIGdpdGh1YkFjdGlvbnM6IHtcbiAgICAgIHNoYTogZW52LkdJVEhVQl9TSEEsXG4gICAgICBicmFuY2g6IGVudi5HSF9CUkFOQ0ggfHwgZW52LkdJVEhVQl9SRUYsXG4gICAgICBkZWZhdWx0QnJhbmNoOiBlbnYuR0lUSFVCX0JBU0VfUkVGLFxuICAgICAgcmVtb3RlQnJhbmNoOiBlbnYuR0lUSFVCX0hFQURfUkVGLFxuICAgICAgcnVuQXR0ZW1wdDogZW52LkdJVEhVQl9SVU5fQVRURU1QVCxcbiAgICB9LFxuICAgIGdpdGxhYjoge1xuICAgICAgc2hhOiBlbnYuQ0lfQ09NTUlUX1NIQSxcbiAgICAgIGJyYW5jaDogZW52LkNJX0NPTU1JVF9SRUZfTkFNRSxcbiAgICAgIG1lc3NhZ2U6IGVudi5DSV9DT01NSVRfTUVTU0FHRSxcbiAgICAgIGF1dGhvck5hbWU6IGVudi5HSVRMQUJfVVNFUl9OQU1FLFxuICAgICAgYXV0aG9yRW1haWw6IGVudi5HSVRMQUJfVVNFUl9FTUFJTCxcbiAgICAgIHJlbW90ZU9yaWdpbjogZW52LkNJX1JFUE9TSVRPUllfVVJMLFxuICAgICAgZGVmYXVsdEJyYW5jaDogZW52LkNJX0RFRkFVTFRfQlJBTkNILFxuICAgIH0sXG4gICAgZ29vZ2xlQ2xvdWQ6IHtcbiAgICAgIHNoYTogZW52LkNPTU1JVF9TSEEsXG4gICAgICBicmFuY2g6IGVudi5CUkFOQ0hfTkFNRSxcbiAgICAgIC8vIG1lc3NhZ2U6ID8/XG4gICAgICAvLyBhdXRob3JOYW1lOiA/P1xuICAgICAgLy8gYXV0aG9yRW1haWw6ID8/XG4gICAgICAvLyByZW1vdGVPcmlnaW46ID8/P1xuICAgICAgLy8gZGVmYXVsdEJyYW5jaDogPz9cbiAgICB9LFxuICAgIGplbmtpbnM6IHtcbiAgICAgIHNoYTogZW52LkdJVF9DT01NSVQsXG4gICAgICBicmFuY2g6IGVudi5HSVRfQlJBTkNILFxuICAgICAgLy8gbWVzc2FnZTogPz8/XG4gICAgICAvLyBhdXRob3JOYW1lOiA/Pz9cbiAgICAgIC8vIGF1dGhvckVtYWlsOiA/Pz9cbiAgICAgIC8vIHJlbW90ZU9yaWdpbjogPz8/XG4gICAgICAvLyBkZWZhdWx0QnJhbmNoOiA/Pz9cbiAgICB9LFxuICAgIC8vIE9ubHkgZnJvbSBmb3Jrcz8gaHR0cHM6Ly9zZW1hcGhvcmVjaS5jb20vZG9jcy9hdmFpbGFibGUtZW52aXJvbm1lbnQtdmFyaWFibGVzLmh0bWxcbiAgICBzZW1hcGhvcmU6IHtcbiAgICAgIHNoYTogZW52LlNFTUFQSE9SRV9HSVRfU0hBLFxuICAgICAgYnJhbmNoOiBlbnYuU0VNQVBIT1JFX0dJVF9CUkFOQ0gsXG4gICAgICAvLyBtZXNzYWdlOiA/Pz9cbiAgICAgIC8vIGF1dGhvck5hbWU6ID8/P1xuICAgICAgLy8gYXV0aG9yRW1haWw6ID8/P1xuICAgICAgcmVtb3RlT3JpZ2luOiBlbnYuU0VNQVBIT1JFX0dJVF9SRVBPX1NMVUcsXG4gICAgICAvLyBkZWZhdWx0QnJhbmNoOiA/Pz9cbiAgICB9LFxuICAgIHNoaXBwYWJsZToge1xuICAgICAgc2hhOiBlbnYuQ09NTUlULFxuICAgICAgYnJhbmNoOiBlbnYuQlJBTkNILFxuICAgICAgbWVzc2FnZTogZW52LkNPTU1JVF9NRVNTQUdFLFxuICAgICAgYXV0aG9yTmFtZTogZW52LkNPTU1JVFRFUixcbiAgICAgIC8vIGF1dGhvckVtYWlsOiA/Pz9cbiAgICAgIC8vIHJlbW90ZU9yaWdpbjogPz8/XG4gICAgICAvLyBkZWZhdWx0QnJhbmNoOiA/Pz9cbiAgICB9LFxuICAgIHNuYXA6IG51bGwsXG4gICAgdGVhbWNpdHk6IG51bGwsXG4gICAgdGVhbWZvdW5kYXRpb246IHtcbiAgICAgIHNoYTogZW52LkJVSUxEX1NPVVJDRVZFUlNJT04sXG4gICAgICBicmFuY2g6IGVudi5CVUlMRF9TT1VSQ0VCUkFOQ0hOQU1FLFxuICAgICAgbWVzc2FnZTogZW52LkJVSUxEX1NPVVJDRVZFUlNJT05NRVNTQUdFLFxuICAgICAgYXV0aG9yTmFtZTogZW52LkJVSUxEX1NPVVJDRVZFUlNJT05BVVRIT1IsXG4gICAgfSxcbiAgICB0cmF2aXM6IHtcbiAgICAgIHNoYTogZW52LlRSQVZJU19QVUxMX1JFUVVFU1RfU0hBIHx8IGVudi5UUkFWSVNfQ09NTUlULFxuICAgICAgLy8gZm9yIFBScywgVFJBVklTX0JSQU5DSCBpcyB0aGUgYmFzZSBicmFuY2ggYmVpbmcgbWVyZ2VkIGludG9cbiAgICAgIGJyYW5jaDogZW52LlRSQVZJU19QVUxMX1JFUVVFU1RfQlJBTkNIIHx8IGVudi5UUkFWSVNfQlJBTkNILFxuICAgICAgLy8gYXV0aG9yTmFtZTogPz8/XG4gICAgICAvLyBhdXRob3JFbWFpbDogPz8/XG4gICAgICBtZXNzYWdlOiBlbnYuVFJBVklTX0NPTU1JVF9NRVNTQUdFLFxuICAgICAgLy8gcmVtb3RlT3JpZ2luOiA/Pz9cbiAgICAgIC8vIGRlZmF1bHRCcmFuY2g6ID8/P1xuICAgIH0sXG4gICAgd2VyY2tlcjogbnVsbCxcbiAgICBuZXRsaWZ5OiB7XG4gICAgICBzaGE6IGVudi5DT01NSVRfUkVGLFxuICAgICAgYnJhbmNoOiBlbnYuQlJBTkNILFxuICAgICAgcmVtb3RlT3JpZ2luOiBlbnYuUkVQT1NJVE9SWV9VUkwsXG4gICAgfSxcbiAgICBsYXllcmNpOiB7XG4gICAgICBzaGE6IGVudi5HSVRfQ09NTUlULFxuICAgICAgYnJhbmNoOiBlbnYuTEFZRVJDSV9CUkFOQ0gsXG4gICAgICBtZXNzYWdlOiBlbnYuR0lUX0NPTU1JVF9USVRMRSxcbiAgICB9LFxuICB9O1xufTtcblxudHlwZSBDaVByb3ZpZGVyRGF0YSA9IHtcbiAgc2hhPzogc3RyaW5nO1xuICBicmFuY2g/OiBzdHJpbmc7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIGF1dGhvck5hbWU/OiBzdHJpbmc7XG4gIGF1dGhvckVtYWlsPzogc3RyaW5nO1xuICByZW1vdGVPcmlnaW4/OiBzdHJpbmc7XG4gIGRlZmF1bHRCcmFuY2g/OiBzdHJpbmc7XG4gIHJlbW90ZUJyYW5jaD86IHN0cmluZztcbiAgcnVuQXR0ZW1wdD86IHN0cmluZztcbn07XG5cbmludGVyZmFjZSBQcm92aWRlckNvbW1pdFBhcmFtc1JlcyB7XG4gIFtrZXk6IHN0cmluZ106IENpUHJvdmlkZXJEYXRhIHwgbnVsbDtcbn1cblxuaW50ZXJmYWNlIFByb3ZpZGVyQ2lQYXJhbXNSZXMge1xuICBba2V5OiBzdHJpbmddOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB9IHwgbnVsbDtcbn1cblxuY29uc3QgX2dldCA9IChmbjogKCkgPT4gUHJvdmlkZXJDb21taXRQYXJhbXNSZXMgfCBQcm92aWRlckNpUGFyYW1zUmVzKSA9PiB7XG4gIGNvbnN0IHByb3ZpZGVyTmFtZSA9IGdldENpUHJvdmlkZXIoKTtcbiAgaWYgKCFwcm92aWRlck5hbWUpIHJldHVybiB7fTtcblxuICByZXR1cm4gXy5jaGFpbihmbigpKS5nZXQocHJvdmlkZXJOYW1lKS52YWx1ZSgpO1xufTtcblxuLyoqXG4gKiBJZiB0aGVyZSBpcyBubyBidWlsZCBJRCBzcGVjaWZpY2FsbHkgcHJvdmlkZWQgYnkgdXNlclxuICogQ2hlY2sgaWYgd2UgY2FuIGZldGNoIGl0IGF1dG9tYXRpY2FsbHkgZnJvbSBDSSB2YXJpYWJsZXMuXG4gKiBUaGUgcHJvY2VzcyB3aWxsIHN0b3AgaWYgd2UgY2Fubm90IGRvIGl0XG4gKiBodHRwczovL2RvY3MuY3lwcmVzcy5pby9ndWlkZXMvcmVmZXJlbmNlcy9lcnJvci1tZXNzYWdlcyNXZS1jb3VsZC1ub3QtZGV0ZXJtaW5lLWEtdW5pcXVlLUNJLWJ1aWxkLUlEXG4gKi9cbmZ1bmN0aW9uIGNoZWNrRm9yQ2lCdWlsZEZyb21DaShjaVByb3ZpZGVyOiBzdHJpbmcgfCBudWxsKSB7XG4gIGlmIChjaVByb3ZpZGVyICYmIGRldGVjdGFibGVDaUJ1aWxkSWRQcm92aWRlcnMoKS5pbmNsdWRlcyhjaVByb3ZpZGVyKSlcbiAgICByZXR1cm4gdHJ1ZTtcblxuICB0aHJvdyBuZXcgVmFsaWRhdGlvbkVycm9yKFxuICAgIGBDb3VsZCBub3QgZGV0ZXJtaW5lIENJIGJ1aWxkIElEIGZyb20gdGhlIGVudmlyb25tZW50LiBQbGVhc2UgcHJvdmlkZSBhIHVuaXF1ZSBDSSBidWlsZCBJRCB1c2luZyB0aGUgLS1jaS1idWlsZC1pZCBDTEkgZmxhZyBvciAnY2lCdWlsZElkJyBwYXJhbWV0ZXIgZm9yICdydW4nIG1ldGhvZC5gXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0KCkge1xuICByZXR1cm4gXy5rZXlzKENJX1BST1ZJREVSUyk7XG59XG5cbi8vIGdyYWIgYWxsIGRldGVjdGFibGUgcHJvdmlkZXJzXG4vLyB0aGF0IHdlIGNhbiBleHRyYWN0IGNpQnVpbGRJZCBmcm9tXG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0YWJsZUNpQnVpbGRJZFByb3ZpZGVycygpIHtcbiAgcmV0dXJuIF8uY2hhaW4oX3Byb3ZpZGVyQ2lQYXJhbXMoKSkub21pdEJ5KF8uaXNOdWxsKS5rZXlzKCkudmFsdWUoKTtcbn1cblxuZXhwb3J0IHR5cGUgQ2lQcm92aWRlciA9IHN0cmluZyB8IG51bGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaVByb3ZpZGVyKCk6IENpUHJvdmlkZXIge1xuICByZXR1cm4gX2RldGVjdFByb3ZpZGVyTmFtZSgpIHx8IG51bGw7XG59XG5cbmV4cG9ydCB0eXBlIENpUGFyYW1zID0ge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2lQYXJhbXMoKSB7XG4gIHJldHVybiBfZ2V0KF9wcm92aWRlckNpUGFyYW1zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbW1pdFBhcmFtcygpIHtcbiAgcmV0dXJuIF9nZXQoX3Byb3ZpZGVyQ29tbWl0UGFyYW1zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENJKGNpQnVpbGRJZD86IHN0cmluZykge1xuICBjb25zdCBwYXJhbXMgPSBnZXRDaVBhcmFtcygpO1xuICBjb25zdCBwcm92aWRlciA9IGdldENpUHJvdmlkZXIoKTtcbiAgaWYgKCFjaUJ1aWxkSWQpIGNoZWNrRm9yQ2lCdWlsZEZyb21DaShwcm92aWRlcik7XG5cbiAgZGVidWcoXCJkZXRlY3RlZCBDSSBwcm92aWRlcjogJXNcIiwgcHJvdmlkZXIpO1xuICBkZWJ1ZyhcImRldGVjdGVkIENJIHBhcmFtczogJU9cIiwgcGFyYW1zKTtcbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcHJvdmlkZXIsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb21taXREZWZhdWx0cyhleGlzdGluZ0luZm86IENpUHJvdmlkZXJEYXRhKSB7XG4gIGRlYnVnKFwiZ2l0IGNvbW1pdCBleGlzdGluZyBpbmZvXCIpO1xuICBkZWJ1ZyhleGlzdGluZ0luZm8pO1xuXG4gIGNvbnN0IGNvbW1pdFBhcmFtc09iaiA9IGdldENvbW1pdFBhcmFtcygpO1xuXG4gIGRlYnVnKFwiY29tbWl0IGluZm8gZnJvbSBwcm92aWRlciBlbnZpcm9ubWVudCB2YXJpYWJsZXM6ICVPXCIsIGNvbW1pdFBhcmFtc09iaik7XG5cbiAgLy8gYmFzZWQgb24gdGhlIGV4aXN0aW5nSW5mbyBwcm9wZXJ0aWVzXG4gIC8vIG1lcmdlIGluIHRoZSBjb21taXRQYXJhbXMgaWYgbnVsbCBvciB1bmRlZmluZWRcbiAgLy8gZGVmYXVsdGluZyBiYWNrIHRvIG51bGwgaWYgYWxsIGZhaWxzXG4gIC8vIE5PVEU6IG9ubHkgcHJvcGVydGllcyBkZWZpbmVkIGluIFwiZXhpc3RpbmdJbmZvXCIgd2lsbCBiZSByZXR1cm5lZFxuICBjb25zdCBjb21iaW5lZCA9IF8udHJhbnNmb3JtKFxuICAgIGV4aXN0aW5nSW5mbyxcbiAgICAoXG4gICAgICBtZW1vOiB7IFttZW1vS2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudWxsIH0sXG4gICAgICB2YWx1ZTogc3RyaW5nLFxuICAgICAga2V5OiBzdHJpbmdcbiAgICApID0+IHtcbiAgICAgIHJldHVybiAobWVtb1trZXldID0gXy5kZWZhdWx0VG8odmFsdWUgfHwgY29tbWl0UGFyYW1zT2JqW2tleV0sIG51bGwpKTtcbiAgICB9XG4gICk7XG5cbiAgZGVidWcoXCJjb21iaW5lZCBnaXQgYW5kIGVudmlyb25tZW50IHZhcmlhYmxlcyBmcm9tIHByb3ZpZGVyXCIpO1xuICBkZWJ1Zyhjb21iaW5lZCk7XG5cbiAgcmV0dXJuIGNvbWJpbmVkO1xufVxuIiwgImV4cG9ydCAqIGZyb20gXCIuL2N5cHJlc3NcIjtcbiIsICJpbXBvcnQgY3lwcmVzcyBmcm9tIFwiY3lwcmVzc1wiO1xuaW1wb3J0IHtcbiAgQ3VycmVudHNSdW5QYXJhbWV0ZXJzLFxuICBWYWxpZGF0ZWRDdXJyZW50c1BhcmFtZXRlcnMsXG59IGZyb20gXCJjeXByZXNzLWNsb3VkL3R5cGVzXCI7XG5pbXBvcnQgRGVidWcgZnJvbSBcImRlYnVnXCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBnZXRDeXByZXNzUnVuQVBJUGFyYW1zIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgQ3lwcmVzc1R5cGVzIH0gZnJvbSBcIi4uL2N5cHJlc3MudHlwZXNcIjtcbmltcG9ydCB7IHNhZmUgfSBmcm9tIFwiLi4vbGFuZ1wiO1xuaW1wb3J0IHsgd2FybiB9IGZyb20gXCIuLi9sb2dcIjtcbmltcG9ydCB7IE1vZHVsZUFQSVJlc3VsdHMgfSBmcm9tIFwiLi4vcmVzdWx0cy9tb2R1bGVBUElSZXN1bHRcIjtcbmltcG9ydCB7IGdldFdTU1BvcnQgfSBmcm9tIFwiLi4vd3NcIjtcblxuY29uc3QgZGVidWcgPSBEZWJ1ZyhcImN1cnJlbnRzOmN5cHJlc3NcIik7XG5pbnRlcmZhY2UgUnVuQ3lwcmVzc1NwZWNGaWxlIHtcbiAgc3BlYzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVuQmFyZUN5cHJlc3MocGFyYW1zOiBDdXJyZW50c1J1blBhcmFtZXRlcnMgPSB7fSkge1xuICAvLyByZXZlcnQgY3VycmVudHMgcGFyYW1zIHRvIGN5cHJlc3MgcGFyYW1zXG4gIC8vIGV4Y2x1ZGUgcmVjb3JkIG1vZGUgcGFyYW1zXG4gIGNvbnN0IHAgPSB7XG4gICAgLi4ucGFyYW1zLFxuICAgIGNpQnVpbGRJZDogdW5kZWZpbmVkLFxuICAgIHRhZzogdW5kZWZpbmVkLFxuICAgIHBhcmFsbGVsOiB1bmRlZmluZWQsXG4gICAgcmVjb3JkOiBmYWxzZSxcbiAgICBncm91cDogdW5kZWZpbmVkLFxuICAgIHNwZWM6IF8uZmxhdHRlbihwYXJhbXMuc3BlYykuam9pbihcIixcIiksXG4gIH07XG4gIGRlYnVnKFwiUnVubmluZyBiYXJlIEN5cHJlc3Mgd2l0aCBwYXJhbXMgJW9cIiwgcCk7XG4gIHJldHVybiBjeXByZXNzLnJ1bihwKTtcbn1cblxuLyoqXG4gKiBSdW4gQ3lwcmVzcyB0ZXN0cywgd2UgbmVlZCB0byBwYXNzIGRvd24gdGhlIHN0cmlwcGVkIG9wdGlvbnMgYXMgaWYgd2UndmUgcmVjZWl2ZWQgdGhlbSBmcm9tIHRoZSBDTElcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJ1blNwZWNGaWxlKFxuICB7IHNwZWMgfTogUnVuQ3lwcmVzc1NwZWNGaWxlLFxuICBjeXByZXNzUnVuT3B0aW9uczogVmFsaWRhdGVkQ3VycmVudHNQYXJhbWV0ZXJzXG4pIHtcbiAgY29uc3QgcnVuQVBJT3B0aW9ucyA9IGdldEN5cHJlc3NSdW5BUElQYXJhbXMoY3lwcmVzc1J1bk9wdGlvbnMpO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgLi4ucnVuQVBJT3B0aW9ucyxcbiAgICBjb25maWc6IHtcbiAgICAgIC4uLnJ1bkFQSU9wdGlvbnMuY29uZmlnLFxuICAgICAgdHJhc2hBc3NldHNCZWZvcmVSdW5zOiBmYWxzZSxcbiAgICB9LFxuICAgIGVudjoge1xuICAgICAgLi4ucnVuQVBJT3B0aW9ucy5lbnYsXG4gICAgICBjdXJyZW50c193czogZ2V0V1NTUG9ydCgpLFxuICAgICAgY3VycmVudHNfbWFya2VyOiB0cnVlLFxuICAgIH0sXG4gICAgc3BlYyxcbiAgfTtcbiAgZGVidWcoXCJydW5uaW5nIGN5cHJlc3Mgd2l0aCBvcHRpb25zICVvXCIsIG9wdGlvbnMpO1xuICBjb25zdCByZXN1bHQgPSAoYXdhaXQgY3lwcmVzcy5ydW4ob3B0aW9ucykpIGFzIEN5cHJlc3NUeXBlcy5Nb2R1bGVBUEkuUmVzdWx0O1xuXG4gIGlmIChNb2R1bGVBUElSZXN1bHRzLmlzRmFpbHVyZVJlc3VsdChyZXN1bHQpKSB7XG4gICAgd2FybignQ3lwcmVzcyBydW5uZXIgZmFpbGVkIHdpdGggbWVzc2FnZTogXCIlc1wiJywgcmVzdWx0Lm1lc3NhZ2UpO1xuICAgIHdhcm4oXG4gICAgICBcIlRoZSBmb2xsb3dpbmcgc3BlYyBmaWxlcyB3aWxsIGJlIG1hcmtlZCBhcyBmYWlsZWQ6ICVzXCIsXG4gICAgICBzcGVjXG4gICAgICAgIC5zcGxpdChcIixcIilcbiAgICAgICAgLm1hcCgoaSkgPT4gYFxcbiAtICR7aX1gKVxuICAgICAgICAuam9pbihcIlwiKVxuICAgICk7XG4gIH1cbiAgZGVidWcoXCJjeXByZXNzIHJ1biByZXN1bHQgJW9cIiwgcmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGNvbnN0IHJ1blNwZWNGaWxlU2FmZSA9IChcbiAgc3BlYzogUnVuQ3lwcmVzc1NwZWNGaWxlLFxuICBjeXByZXNzUnVuT3B0aW9uczogVmFsaWRhdGVkQ3VycmVudHNQYXJhbWV0ZXJzXG4pOiBQcm9taXNlPEN5cHJlc3NUeXBlcy5Nb2R1bGVBUEkuUmVzdWx0PiA9PlxuICBzYWZlKFxuICAgIHJ1blNwZWNGaWxlLFxuICAgIChlcnJvcikgPT4ge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBDeXByZXNzIHJ1bm5uZXIgY3Jhc2hlZCB3aXRoIGFuIGVycm9yOlxcbiR7XG4gICAgICAgIChlcnJvciBhcyBFcnJvcikubWVzc2FnZVxuICAgICAgfVxcbiR7KGVycm9yIGFzIEVycm9yKS5zdGFja319YDtcbiAgICAgIGRlYnVnKFwiY3lwcmVzcyBydW4gZXhjZXB0aW9uICVvXCIsIGVycm9yKTtcbiAgICAgIHdhcm4oJ0N5cHJlc3MgcnVubmVyIGNyYXNoZWQ6IFwiJXNcIicsIG1lc3NhZ2UpO1xuICAgICAgd2FybihcbiAgICAgICAgXCJUaGUgZm9sbG93aW5nIHNwZWMgZmlsZXMgd2lsbCBiZSBtYXJrZWQgYXMgZmFpbGVkOiAlc1wiLFxuICAgICAgICBzcGVjLnNwZWNcbiAgICAgICAgICAuc3BsaXQoXCIsXCIpXG4gICAgICAgICAgLm1hcCgoaSkgPT4gYFxcbiAtICR7aX1gKVxuICAgICAgICAgIC5qb2luKFwiXCIpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzOiBcImZhaWxlZFwiIGFzIGNvbnN0LFxuICAgICAgICBmYWlsdXJlczogMSxcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgIH07XG4gICAgfSxcbiAgICAoKSA9PiB7fVxuICApKHNwZWMsIGN5cHJlc3NSdW5PcHRpb25zKTtcbiIsICJpbXBvcnQgeyBwYXJzZUlTTyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgTWVyZ2VkQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgQ3lwcmVzc1R5cGVzLCBTdGFuZGFyZCB9IGZyb20gXCIuLi9jeXByZXNzLnR5cGVzXCI7XG5pbXBvcnQge1xuICBFeGVjdXRpb25TdGF0ZSxcbiAgRXhlY3V0aW9uU3RhdGVTY3JlZW5zaG90LFxuICBFeGVjdXRpb25TdGF0ZVRlc3RBdHRlbXB0LFxufSBmcm9tIFwiLi4vc3RhdGVcIjtcblxuaW1wb3J0IHsgU3BlY0FmdGVyUmVzdWx0IH0gZnJvbSBcIi4vc3BlY0FmdGVyUmVzdWx0XCI7XG5cbmV4cG9ydCBjbGFzcyBNb2R1bGVBUElSZXN1bHRzIHtcbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0UnVuU2NyZWVuc2hvdHMocnVuOiBDeXByZXNzVHlwZXMuTW9kdWxlQVBJLlJ1bikge1xuICAgIGlmIChcInNjcmVlbnNob3RzXCIgaW4gcnVuKSB7XG4gICAgICByZXR1cm4gcnVuLnNjcmVlbnNob3RzO1xuICAgIH1cbiAgICByZXR1cm4gKHJ1bi50ZXN0cyA/PyBbXSkuZmxhdE1hcCgodCkgPT5cbiAgICAgIHQuYXR0ZW1wdHMuZmxhdE1hcCgoYSkgPT4gYS5zY3JlZW5zaG90cylcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0VGVzdHMoXG4gICAgcnVuOiBDeXByZXNzVHlwZXMuTW9kdWxlQVBJLlJ1bixcbiAgICBleGVjdXRpb25TdGF0ZTogRXhlY3V0aW9uU3RhdGVcbiAgKSB7XG4gICAgY29uc3QgdGVzdHMgPSBydW4udGVzdHMgPz8gW107XG5cbiAgICByZXR1cm4gdGVzdHMubWFwKCh0ZXN0LCBpKSA9PiB7XG4gICAgICBjb25zdCBtb2NoYUF0dGVtcHRzID0gZXhlY3V0aW9uU3RhdGVcbiAgICAgICAgLmdldEF0dGVtcHRzRGF0YSgpXG4gICAgICAgIC5maWx0ZXIoKGF0dGVtcHQpID0+IGF0dGVtcHQuZnVsbFRpdGxlID09PSB0ZXN0LnRpdGxlLmpvaW4oXCIgXCIpKTtcblxuICAgICAgY29uc3QgdGVzdElkID1cbiAgICAgICAgXCJ0ZXN0SWRcIiBpbiB0ZXN0ID8gdGVzdC50ZXN0SWQgOiBtb2NoYUF0dGVtcHRzWzBdPy5pZCA/PyBgciR7aX1gO1xuXG4gICAgICBjb25zdCBydW5TY3JlZW5zaG90UGF0aHMgPSBNb2R1bGVBUElSZXN1bHRzLmdldFJ1blNjcmVlbnNob3RzKHJ1bikubWFwKFxuICAgICAgICAoaSkgPT4gaS5wYXRoXG4gICAgICApO1xuICAgICAgY29uc3QgdGVzdFNjcmVlbnNob3RzID0gZXhlY3V0aW9uU3RhdGVcbiAgICAgICAgLmdldFNjcmVlbnNob3RzRGF0YSgpXG4gICAgICAgIC8vIHNwZWMgc2NyZWVuc2hvdHNcbiAgICAgICAgLmZpbHRlcigocykgPT4gcnVuU2NyZWVuc2hvdFBhdGhzLmluY2x1ZGVzKHMucGF0aCkpXG4gICAgICAgIC8vIHRlc3Qgc2NyZWVuc2hvdHNcbiAgICAgICAgLmZpbHRlcigocykgPT4gcy50ZXN0SWQgPT09IHRlc3RJZCk7XG5cbiAgICAgIGNvbnN0IHN0YW5kYXJkQXR0ZW1wdHMgPSAodGVzdC5hdHRlbXB0cyA/PyBbXSkubWFwKFxuICAgICAgICAoY3lwcmVzc0F0dGVtcHQsIGopID0+IHtcbiAgICAgICAgICBjb25zdCBtb2NoYUF0dGVtcHQgPSBtb2NoYUF0dGVtcHRzLmZpbmQoXG4gICAgICAgICAgICAobWEpID0+IG1hLmN1cnJlbnRSZXRyeSA9PT0galxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgYXR0ZW1wdFNjcmVlbnNob3RzID0gdGVzdFNjcmVlbnNob3RzLmZpbHRlcihcbiAgICAgICAgICAgICh0KSA9PiB0LnRlc3RBdHRlbXB0SW5kZXggPT09IGpcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiBNb2R1bGVBUElSZXN1bHRzLmdldFRlc3RBdHRlbXB0KFxuICAgICAgICAgICAgbW9jaGFBdHRlbXB0ID8/IG51bGwsXG4gICAgICAgICAgICBjeXByZXNzQXR0ZW1wdCxcbiAgICAgICAgICAgIGF0dGVtcHRTY3JlZW5zaG90cyxcbiAgICAgICAgICAgIC8vIHJ1biBvbmx5IGhhcyAxIHNwZWNcbiAgICAgICAgICAgIFNwZWNBZnRlclJlc3VsdC5nZXRTcGVjU3RhcnRlZEF0KHJ1bi5zdGF0cylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBib2R5OiBcImJvZHlcIiBpbiB0ZXN0ID8gdGVzdC5ib2R5IDogbW9jaGFBdHRlbXB0c1swXT8uYm9keSA/PyBcIlwiLFxuICAgICAgICB0ZXN0SWQsXG4gICAgICAgIHRpdGxlOiB0ZXN0LnRpdGxlLFxuICAgICAgICBkaXNwbGF5RXJyb3I6IHRlc3QuZGlzcGxheUVycm9yLFxuICAgICAgICBzdGF0ZTogdGVzdC5zdGF0ZSxcbiAgICAgICAgYXR0ZW1wdHM6IHN0YW5kYXJkQXR0ZW1wdHMsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgdmVyc2lvbi1zcGVjaWZpYyBhdHRlbXB0IHRvIGEgc3RhbmRhcmQgdGVzdCBhdHRlbXB0XG4gICAqL1xuICBzdGF0aWMgZ2V0VGVzdEF0dGVtcHQoXG4gICAgbW9jaGFBdHRlbXB0OiBFeGVjdXRpb25TdGF0ZVRlc3RBdHRlbXB0IHwgbnVsbCxcbiAgICBjeXByZXNzQXR0ZW1wdDogQ3lwcmVzc1R5cGVzLk1vZHVsZUFQSS5UZXN0QXR0ZW1wdCxcbiAgICBzY3JlZW5zaG90czogRXhlY3V0aW9uU3RhdGVTY3JlZW5zaG90W10sXG4gICAgc3BlY1N0YXJ0ZWRBdDogRGF0ZVxuICApOiBTdGFuZGFyZC5Nb2R1bGVBUEkuVGVzdEF0dGVtcHQge1xuICAgIGlmICghbW9jaGFBdHRlbXB0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0ZTogY3lwcmVzc0F0dGVtcHQuc3RhdGUsXG4gICAgICAgIGVycm9yOlxuICAgICAgICAgIFwiZXJyb3JcIiBpbiBjeXByZXNzQXR0ZW1wdFxuICAgICAgICAgICAgPyBjeXByZXNzQXR0ZW1wdC5lcnJvclxuICAgICAgICAgICAgOiBTcGVjQWZ0ZXJSZXN1bHQuZ2V0RHVtbXlUZXN0QXR0ZW1wdEVycm9yKGN5cHJlc3NBdHRlbXB0LnN0YXRlKSxcbiAgICAgICAgc3RhcnRlZEF0OlxuICAgICAgICAgIFwic3RhcnRlZEF0XCIgaW4gY3lwcmVzc0F0dGVtcHRcbiAgICAgICAgICAgID8gY3lwcmVzc0F0dGVtcHQuc3RhcnRlZEF0XG4gICAgICAgICAgICA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcblxuICAgICAgICBkdXJhdGlvbjogXCJkdXJhdGlvblwiIGluIGN5cHJlc3NBdHRlbXB0ID8gY3lwcmVzc0F0dGVtcHQuZHVyYXRpb24gOiAwLFxuICAgICAgICB2aWRlb1RpbWVzdGFtcDpcbiAgICAgICAgICBcInZpZGVvVGltZXN0YW1wXCIgaW4gY3lwcmVzc0F0dGVtcHRcbiAgICAgICAgICAgID8gY3lwcmVzc0F0dGVtcHQudmlkZW9UaW1lc3RhbXBcbiAgICAgICAgICAgIDogMCxcbiAgICAgICAgc2NyZWVuc2hvdHM6XG4gICAgICAgICAgXCJzY3JlZW5zaG90c1wiIGluIGN5cHJlc3NBdHRlbXB0XG4gICAgICAgICAgICA/IGN5cHJlc3NBdHRlbXB0LnNjcmVlbnNob3RzXG4gICAgICAgICAgICA6IHNjcmVlbnNob3RzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IGN5cHJlc3NBdHRlbXB0LnN0YXRlLFxuICAgICAgZXJyb3I6XG4gICAgICAgIFwiZXJyb3JcIiBpbiBjeXByZXNzQXR0ZW1wdFxuICAgICAgICAgID8gY3lwcmVzc0F0dGVtcHQuZXJyb3JcbiAgICAgICAgICA6IFNwZWNBZnRlclJlc3VsdC5nZXRBdHRlbXB0RXJyb3IobW9jaGFBdHRlbXB0LmVyciksXG5cbiAgICAgIHN0YXJ0ZWRBdDpcbiAgICAgICAgXCJzdGFydGVkQXRcIiBpbiBjeXByZXNzQXR0ZW1wdFxuICAgICAgICAgID8gY3lwcmVzc0F0dGVtcHQuc3RhcnRlZEF0XG4gICAgICAgICAgOiBtb2NoYUF0dGVtcHQud2FsbENsb2NrU3RhcnRlZEF0ID8/IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIGR1cmF0aW9uOlxuICAgICAgICBcImR1cmF0aW9uXCIgaW4gY3lwcmVzc0F0dGVtcHRcbiAgICAgICAgICA/IGN5cHJlc3NBdHRlbXB0LmR1cmF0aW9uXG4gICAgICAgICAgOiBtb2NoYUF0dGVtcHQuZHVyYXRpb24gPz8gLTEsXG4gICAgICB2aWRlb1RpbWVzdGFtcDpcbiAgICAgICAgXCJ2aWRlb1RpbWVzdGFtcFwiIGluIGN5cHJlc3NBdHRlbXB0XG4gICAgICAgICAgPyBjeXByZXNzQXR0ZW1wdC52aWRlb1RpbWVzdGFtcFxuICAgICAgICAgIDogU3BlY0FmdGVyUmVzdWx0LmdldEF0dGVtcHRWaWRlb1RpbWVzdGFtcChcbiAgICAgICAgICAgICAgcGFyc2VJU08obW9jaGFBdHRlbXB0LndhbGxDbG9ja1N0YXJ0ZWRBdCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgICBzcGVjU3RhcnRlZEF0LmdldFRpbWUoKVxuICAgICAgICAgICAgKSxcbiAgICAgIHNjcmVlbnNob3RzOlxuICAgICAgICBcInNjcmVlbnNob3RzXCIgaW4gY3lwcmVzc0F0dGVtcHRcbiAgICAgICAgICA/IGN5cHJlc3NBdHRlbXB0LnNjcmVlbnNob3RzXG4gICAgICAgICAgOiBzY3JlZW5zaG90cyxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldFJ1bihcbiAgICBydW46IEN5cHJlc3NUeXBlcy5Nb2R1bGVBUEkuUnVuLFxuICAgIGV4ZWN1dGlvblN0YXRlOiBFeGVjdXRpb25TdGF0ZVxuICApOiBTdGFuZGFyZC5Nb2R1bGVBUEkuUnVuIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucnVuLFxuICAgICAgdGVzdHM6IE1vZHVsZUFQSVJlc3VsdHMuZ2V0VGVzdHMocnVuLCBleGVjdXRpb25TdGF0ZSksXG4gICAgICBzcGVjOiBTcGVjQWZ0ZXJSZXN1bHQuZ2V0U3BlY1N0YW5kYXJkKHJ1bi5zcGVjKSxcbiAgICAgIC8vIGhvb2tzOiBcImhvb2tzXCIgaW4gcnVuID8gcnVuLmhvb2tzIDogW10sXG4gICAgICBob29rczogbnVsbCxcbiAgICAgIHNob3VsZFVwbG9hZFZpZGVvOlxuICAgICAgICBcInNob3VsZFVwbG9hZFZpZGVvXCIgaW4gcnVuID8gcnVuLnNob3VsZFVwbG9hZFZpZGVvIDogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGRpZmZlcmVudCBDeXByZXNzIHZlcnNpb25zIHRvIHN0YW5kYXJkIGZvcm1cbiAgICovXG4gIHN0YXRpYyBnZXRTdGFuZGFyZFJlc3VsdChcbiAgICByZXN1bHQ6IEN5cHJlc3NUeXBlcy5Nb2R1bGVBUEkuQ29tcGxldGVkUmVzdWx0LFxuICAgIGV4ZWN1dGlvblN0YXRlOiBFeGVjdXRpb25TdGF0ZVxuICApOiBTdGFuZGFyZC5Nb2R1bGVBUEkuQ29tcGxldGVkUmVzdWx0IHtcbiAgICBpZiAocmVzdWx0LnJ1bnMubGVuZ3RoICE9PSAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBzaW5nbGUgcnVuXCIpO1xuICAgIH1cbiAgICBjb25zdCBydW4gPSByZXN1bHQucnVuc1swXTtcbiAgICBjb25zdCBzdGF0cyA9IFNwZWNBZnRlclJlc3VsdC5nZXRTdGF0c1N0YW5kYXJkKHJ1bi5zdGF0cyk7XG5cbiAgICAvLyBzdGFuZGFyZGl6ZSB0aGUgcmVzdWx0IGZvciBzaW5nZSBzcGVjXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlc3VsdCxcbiAgICAgIHJ1bnM6IFtNb2R1bGVBUElSZXN1bHRzLmdldFJ1bihydW4sIGV4ZWN1dGlvblN0YXRlKV0sXG4gICAgICB0b3RhbFN1aXRlczogMSxcbiAgICAgIHRvdGFsRHVyYXRpb246IHN0YXRzLndhbGxDbG9ja0R1cmF0aW9uLFxuICAgICAgdG90YWxUZXN0czogc3RhdHMudGVzdHMsXG4gICAgICB0b3RhbEZhaWxlZDogc3RhdHMuZmFpbHVyZXMsXG4gICAgICB0b3RhbFBhc3NlZDogc3RhdHMucGFzc2VzLFxuICAgICAgdG90YWxQZW5kaW5nOiBzdGF0cy5wZW5kaW5nLFxuICAgICAgdG90YWxTa2lwcGVkOiBzdGF0cy5za2lwcGVkLFxuICAgICAgc3RhcnRlZFRlc3RzQXQ6IHN0YXRzLndhbGxDbG9ja1N0YXJ0ZWRBdCxcbiAgICAgIGVuZGVkVGVzdHNBdDogc3RhdHMud2FsbENsb2NrRW5kZWRBdCxcbiAgICAgIHN0YXR1czogXCJmaW5pc2hlZFwiLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgaXNGYWlsdXJlUmVzdWx0KFxuICAgIHJlc3VsdDogQ3lwcmVzc1R5cGVzLk1vZHVsZUFQSS5SZXN1bHRcbiAgKTogcmVzdWx0IGlzIEN5cHJlc3NUeXBlcy5Nb2R1bGVBUEkuRmFpbHVyZVJlc3VsdCB7XG4gICAgcmV0dXJuIFwic3RhdHVzXCIgaW4gcmVzdWx0ICYmIHJlc3VsdC5zdGF0dXMgPT09IFwiZmFpbGVkXCI7XG4gIH1cblxuICBzdGF0aWMgaXNTdWNjZXNzUmVzdWx0ID0gKFxuICAgIHJlc3VsdDogQ3lwcmVzc1R5cGVzLk1vZHVsZUFQSS5SZXN1bHRcbiAgKTogcmVzdWx0IGlzIEN5cHJlc3NUeXBlcy5Nb2R1bGVBUEkuQ29tcGxldGVkUmVzdWx0ID0+IHtcbiAgICBpZiAoXCJzdGF0dXNcIiBpbiByZXN1bHQpIHtcbiAgICAgIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBcImZpbmlzaGVkXCI7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHN0YXRpYyBnZXRFbXB0eVJlc3VsdChcbiAgICBjb25maWc6IE1lcmdlZENvbmZpZ1xuICApOiBTdGFuZGFyZC5Nb2R1bGVBUEkuQ29tcGxldGVkUmVzdWx0IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzOiBcImZpbmlzaGVkXCIsXG4gICAgICB0b3RhbER1cmF0aW9uOiAwLFxuICAgICAgdG90YWxTdWl0ZXM6IDAsXG4gICAgICB0b3RhbFBlbmRpbmc6IDAsXG4gICAgICB0b3RhbEZhaWxlZDogMCxcbiAgICAgIHRvdGFsU2tpcHBlZDogMCxcbiAgICAgIHRvdGFsUGFzc2VkOiAwLFxuICAgICAgdG90YWxUZXN0czogMCxcbiAgICAgIHN0YXJ0ZWRUZXN0c0F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICBlbmRlZFRlc3RzQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIHJ1bnM6IFtdLFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY29uZmlnLFxuICAgIH07XG4gIH1cbn1cbiIsICIvKipcbiAqIFRyYW5zZm9ybXMgY3lwcmVzcyBwYXlsb2FkcyBmcm9tIHZhcmlvdXMgdmVyc2lvbnMgdG8gYSBzaW5nbGUgc3RhbmRhcmRcbiAqL1xuXG5pbXBvcnQgeyBwYXJzZUlTTyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgbWF0Y2ggfSBmcm9tIFwidHMtcGF0dGVyblwiO1xuaW1wb3J0IHsgQ3lwcmVzc1R5cGVzLCBTdGFuZGFyZCB9IGZyb20gXCIuLi9jeXByZXNzLnR5cGVzXCI7XG5pbXBvcnQgeyBNb2NoYUVycm9yIH0gZnJvbSBcIi4uL2N5cHJlc3MudHlwZXMvc2hhcmVkXCI7XG5pbXBvcnQgeyB3YXJuIH0gZnJvbSBcIi4uL2xvZ1wiO1xuaW1wb3J0IHsgZ2V0UmFuZG9tU3RyaW5nIH0gZnJvbSBcIi4uL25hbm9cIjtcbmltcG9ydCB7IEV4ZWN1dGlvblN0YXRlLCBFeGVjdXRpb25TdGF0ZVRlc3RBdHRlbXB0IH0gZnJvbSBcIi4uL3N0YXRlXCI7XG5cbmV4cG9ydCBjbGFzcyBTcGVjQWZ0ZXJSZXN1bHQge1xuICAvKipcbiAgICogQ29tYmluZSBzdGFuZGFsb25lIGF0dGVtcHRzIGFuZCBzY3JlZW5zaG90cyBpbnRvIHN0YW5kYXJkIHJlc3VsdFxuICAgKiBAcGFyYW0gc3BlY1Jlc3VsdCAtIHNwZWM6YWZ0ZXIgcmVzdWx0c1xuICAgKiBAcGFyYW0gZXhlY3V0aW9uU3RhdGUgLSBjY3kgZXhlY3V0aW9uIHN0YXRlXG4gICAqIEByZXR1cm5zIHVuaWZpZWQgcmVzdWx0cywgaW5jbHVkaW5nIGF0dGVtcHRzIGFuZCBzY3JlZW5zaG90IGRldGFpbHNcbiAgICovXG4gIHN0YXRpYyBnZXRTcGVjQWZ0ZXJTdGFuZGFyZChcbiAgICBzcGVjQWZ0ZXJSZXN1bHRzOiBDeXByZXNzVHlwZXMuRXZlbnRQYXlsb2FkLlNwZWNBZnRlci5QYXlsb2FkLFxuICAgIGV4ZWN1dGlvblN0YXRlOiBFeGVjdXRpb25TdGF0ZVxuICApIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IHNwZWNBZnRlclJlc3VsdHMuZXJyb3IsXG4gICAgICAvLyBob29rczogXCJob29rc1wiIGluIHNwZWNBZnRlclJlc3VsdHMgPyBzcGVjQWZ0ZXJSZXN1bHRzLmhvb2tzIDogbnVsbCxcbiAgICAgIGhvb2tzOiBudWxsLFxuICAgICAgcmVwb3J0ZXI6IHNwZWNBZnRlclJlc3VsdHMucmVwb3J0ZXIsXG4gICAgICByZXBvcnRlclN0YXRzOiBzcGVjQWZ0ZXJSZXN1bHRzLnJlcG9ydGVyU3RhdHMsXG4gICAgICBzcGVjOiBTcGVjQWZ0ZXJSZXN1bHQuZ2V0U3BlY1N0YW5kYXJkKHNwZWNBZnRlclJlc3VsdHMuc3BlYyksXG4gICAgICB0ZXN0czogU3BlY0FmdGVyUmVzdWx0LmdldFRlc3RTdGFuZGFyZChcbiAgICAgICAgc3BlY0FmdGVyUmVzdWx0cyxcbiAgICAgICAgZXhlY3V0aW9uU3RhdGUuZ2V0QXR0ZW1wdHNEYXRhKClcbiAgICAgICksXG4gICAgICB2aWRlbzogc3BlY0FmdGVyUmVzdWx0cy52aWRlbyxcbiAgICAgIHN0YXRzOiBTcGVjQWZ0ZXJSZXN1bHQuZ2V0U3RhdHNTdGFuZGFyZChzcGVjQWZ0ZXJSZXN1bHRzLnN0YXRzKSxcbiAgICAgIHNjcmVlbnNob3RzOiBTcGVjQWZ0ZXJSZXN1bHQuZ2V0U2NyZWVuc2hvdHNTdGFuZGFyZChcbiAgICAgICAgc3BlY0FmdGVyUmVzdWx0cy5zY3JlZW5zaG90cyxcbiAgICAgICAgZXhlY3V0aW9uU3RhdGUuZ2V0U2NyZWVuc2hvdHNEYXRhKClcbiAgICAgICksXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRBdHRlbXB0RXJyb3IoZXJyPzogTW9jaGFFcnJvciB8IG51bGwpIHtcbiAgICBpZiAoIWVycikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBlcnIubmFtZSxcbiAgICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlLFxuICAgICAgc3RhY2s6IGVyci5zdGFjayxcbiAgICAgIGNvZGVGcmFtZTogZXJyLmNvZGVGcmFtZSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldEF0dGVtcHRWaWRlb1RpbWVzdGFtcChcbiAgICBhdHRlbXB0U3RhcnRlZEF0TXM6IG51bWJlcixcbiAgICBzcGVjU3RhcnRlZEF0TXM6IG51bWJlclxuICApIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoYXR0ZW1wdFN0YXJ0ZWRBdE1zIC0gc3BlY1N0YXJ0ZWRBdE1zLCAwKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRTcGVjU3RhcnRlZEF0KFxuICAgIHN0YXRzOiBDeXByZXNzVHlwZXMuRXZlbnRQYXlsb2FkLlNwZWNBZnRlci5QYXlsb2FkW1wic3RhdHNcIl1cbiAgKTogRGF0ZSB7XG4gICAgaWYgKFwic3RhcnRlZEF0XCIgaW4gc3RhdHMpIHtcbiAgICAgIHJldHVybiBwYXJzZUlTTyhzdGF0cy5zdGFydGVkQXQpO1xuICAgIH1cbiAgICBpZiAoXCJ3YWxsQ2xvY2tTdGFydGVkQXRcIiBpbiBzdGF0cykge1xuICAgICAgcmV0dXJuIHBhcnNlSVNPKHN0YXRzLndhbGxDbG9ja1N0YXJ0ZWRBdCk7XG4gICAgfVxuXG4gICAgd2FybihcIkNhbm5vdCBkZXRlcm1pbmUgc3BlYyBzdGFydCBkYXRlIGZyb20gc3RhdHM6ICVvXCIsIHN0YXRzKTtcbiAgICByZXR1cm4gbmV3IERhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXREdW1teVRlc3RBdHRlbXB0RXJyb3IoXG4gICAgYXR0ZW1wdFN0YXRlOiBcInBhc3NlZFwiIHwgXCJza2lwcGVkXCIgfCBcInBlbmRpbmdcIiB8IFwiZmFpbGVkXCJcbiAgKSB7XG4gICAgcmV0dXJuIG1hdGNoKGF0dGVtcHRTdGF0ZSlcbiAgICAgIC53aXRoKFwiZmFpbGVkXCIsICgpID0+ICh7XG4gICAgICAgIG5hbWU6IFwiRXJyb3JcIixcbiAgICAgICAgbWVzc2FnZTogXCJbY3lwcmVzcy1jbG91ZF0gQ291bGQgbm90IGdldCBjeXByZXNzIGF0dGVtcHQgZXJyb3IgZGV0YWlsc1wiLFxuICAgICAgICBzdGFjazogXCJcIixcbiAgICAgICAgY29kZUZyYW1lOiBudWxsLFxuICAgICAgfSkpXG4gICAgICAud2l0aChcInNraXBwZWRcIiwgKCkgPT4gKHtcbiAgICAgICAgbmFtZTogXCJFcnJvclwiLFxuICAgICAgICBtZXNzYWdlOiBcIlRoZSB0ZXN0IHdhcyBza2lwcGVkIGJlY2F1c2Ugb2YgYSBob29rIGZhaWx1cmVcIixcbiAgICAgICAgc3RhY2s6IFwiXCIsXG4gICAgICAgIGNvZGVGcmFtZTogbnVsbCxcbiAgICAgIH0pKVxuICAgICAgLm90aGVyd2lzZSgoKSA9PiBudWxsKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGdldFRlc3RBdHRlbXB0U3RhbmRhcmQoXG4gICAgbW9jaGFBdHRlbXB0OiBFeGVjdXRpb25TdGF0ZVRlc3RBdHRlbXB0IHwgbnVsbCxcbiAgICBjeXByZXNzQXR0ZW1wdDogQ3lwcmVzc1R5cGVzLkV2ZW50UGF5bG9hZC5TcGVjQWZ0ZXIuVGVzdEF0dGVtcHQsXG4gICAgc3BlY1N0YXJ0ZWRBdDogRGF0ZVxuICApOiBTdGFuZGFyZC5TcGVjQWZ0ZXIuVGVzdEF0dGVtcHQge1xuICAgIGlmICghbW9jaGFBdHRlbXB0KSB7XG4gICAgICBjb25zdCBlcnJvciA9IFwiZXJyb3JcIiBpbiBjeXByZXNzQXR0ZW1wdCA/IGN5cHJlc3NBdHRlbXB0LmVycm9yIDogbnVsbDtcbiAgICAgIGNvbnN0IGR1cmF0aW9uID1cbiAgICAgICAgXCJ3YWxsQ2xvY2tEdXJhdGlvblwiIGluIGN5cHJlc3NBdHRlbXB0XG4gICAgICAgICAgPyBjeXByZXNzQXR0ZW1wdC53YWxsQ2xvY2tEdXJhdGlvblxuICAgICAgICAgIDogbnVsbDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXRlOiBjeXByZXNzQXR0ZW1wdC5zdGF0ZSxcbiAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICAgICAgPyBlcnJvclxuICAgICAgICAgIDogU3BlY0FmdGVyUmVzdWx0LmdldER1bW15VGVzdEF0dGVtcHRFcnJvcihjeXByZXNzQXR0ZW1wdC5zdGF0ZSksXG4gICAgICAgIHRpbWluZ3M6IFwidGltaW5nc1wiIGluIGN5cHJlc3NBdHRlbXB0ID8gY3lwcmVzc0F0dGVtcHQudGltaW5ncyA6IG51bGwsXG4gICAgICAgIHdhbGxDbG9ja1N0YXJ0ZWRBdDpcbiAgICAgICAgICBcIndhbGxDbG9ja1N0YXJ0ZWRBdFwiIGluIGN5cHJlc3NBdHRlbXB0XG4gICAgICAgICAgICA/IGN5cHJlc3NBdHRlbXB0LndhbGxDbG9ja1N0YXJ0ZWRBdFxuICAgICAgICAgICAgOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG5cbiAgICAgICAgd2FsbENsb2NrRHVyYXRpb246IGR1cmF0aW9uID8gZHVyYXRpb24gOiAwLFxuICAgICAgICBmYWlsZWRGcm9tSG9va0lkOlxuICAgICAgICAgIFwiZmFpbGVkRnJvbUhvb2tJZFwiIGluIGN5cHJlc3NBdHRlbXB0XG4gICAgICAgICAgICA/IGN5cHJlc3NBdHRlbXB0LmZhaWxlZEZyb21Ib29rSWRcbiAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgdmlkZW9UaW1lc3RhbXA6XG4gICAgICAgICAgXCJ2aWRlb1RpbWVzdGFtcFwiIGluIGN5cHJlc3NBdHRlbXB0XG4gICAgICAgICAgICA/IGN5cHJlc3NBdHRlbXB0LnZpZGVvVGltZXN0YW1wXG4gICAgICAgICAgICA6IDAsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZTogY3lwcmVzc0F0dGVtcHQuc3RhdGUsXG4gICAgICBlcnJvcjpcbiAgICAgICAgXCJlcnJvclwiIGluIGN5cHJlc3NBdHRlbXB0XG4gICAgICAgICAgPyBjeXByZXNzQXR0ZW1wdC5lcnJvclxuICAgICAgICAgIDogU3BlY0FmdGVyUmVzdWx0LmdldEF0dGVtcHRFcnJvcihtb2NoYUF0dGVtcHQuZXJyKSxcbiAgICAgIHRpbWluZ3M6XG4gICAgICAgIFwidGltaW5nc1wiIGluIGN5cHJlc3NBdHRlbXB0XG4gICAgICAgICAgPyBjeXByZXNzQXR0ZW1wdC50aW1pbmdzXG4gICAgICAgICAgOiBtb2NoYUF0dGVtcHQudGltaW5ncyxcbiAgICAgIHdhbGxDbG9ja1N0YXJ0ZWRBdDpcbiAgICAgICAgbW9jaGFBdHRlbXB0LndhbGxDbG9ja1N0YXJ0ZWRBdCA/PyBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICB3YWxsQ2xvY2tEdXJhdGlvbjogbW9jaGFBdHRlbXB0LmR1cmF0aW9uID8/IC0xLFxuICAgICAgZmFpbGVkRnJvbUhvb2tJZDpcbiAgICAgICAgXCJmYWlsZWRGcm9tSG9va0lkXCIgaW4gY3lwcmVzc0F0dGVtcHRcbiAgICAgICAgICA/IGN5cHJlc3NBdHRlbXB0LmZhaWxlZEZyb21Ib29rSWRcbiAgICAgICAgICA6IG51bGwsXG4gICAgICB2aWRlb1RpbWVzdGFtcDpcbiAgICAgICAgXCJ2aWRlb1RpbWVzdGFtcFwiIGluIGN5cHJlc3NBdHRlbXB0XG4gICAgICAgICAgPyBjeXByZXNzQXR0ZW1wdC52aWRlb1RpbWVzdGFtcFxuICAgICAgICAgIDogU3BlY0FmdGVyUmVzdWx0LmdldEF0dGVtcHRWaWRlb1RpbWVzdGFtcChcbiAgICAgICAgICAgICAgcGFyc2VJU08obW9jaGFBdHRlbXB0LndhbGxDbG9ja1N0YXJ0ZWRBdCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgICBzcGVjU3RhcnRlZEF0LmdldFRpbWUoKVxuICAgICAgICAgICAgKSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0VGVzdFN0YW5kYXJkKFxuICAgIHNwZWNBZnRlclJlc3VsdHM6IEN5cHJlc3NUeXBlcy5FdmVudFBheWxvYWQuU3BlY0FmdGVyLlBheWxvYWQsXG4gICAgYXR0ZW1wdHM6IEV4ZWN1dGlvblN0YXRlW1wiYXR0ZW1wdHNEYXRhXCJdXG4gICkge1xuICAgIGNvbnN0IHN0YW5kYXJkVGVzdExpc3Q6IFN0YW5kYXJkLlNwZWNBZnRlci5QYXlsb2FkW1widGVzdHNcIl0gPSAoXG4gICAgICBzcGVjQWZ0ZXJSZXN1bHRzLnRlc3RzID8/IFtdXG4gICAgKS5tYXAoKHRlc3QsIGkpID0+IHtcbiAgICAgIGNvbnN0IG1vY2hhQXR0ZW1wdHMgPSBhdHRlbXB0cy5maWx0ZXIoXG4gICAgICAgIChhdHRlbXB0KSA9PiBhdHRlbXB0LmZ1bGxUaXRsZSA9PT0gdGVzdC50aXRsZS5qb2luKFwiIFwiKVxuICAgICAgKTtcblxuICAgICAgY29uc3Qgc3RhbmRhcmRBdHRlbXB0cyA9ICh0ZXN0LmF0dGVtcHRzID8/IFtdKS5tYXAoXG4gICAgICAgIChjeXByZXNzQXR0ZW1wdCwgaikgPT4ge1xuICAgICAgICAgIGNvbnN0IG1vY2hhQXR0ZW1wdCA9IG1vY2hhQXR0ZW1wdHMuZmluZChcbiAgICAgICAgICAgIChtYSkgPT4gbWEuY3VycmVudFJldHJ5ID09PSBqXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gU3BlY0FmdGVyUmVzdWx0LmdldFRlc3RBdHRlbXB0U3RhbmRhcmQoXG4gICAgICAgICAgICBtb2NoYUF0dGVtcHQgPz8gbnVsbCxcbiAgICAgICAgICAgIGN5cHJlc3NBdHRlbXB0LFxuICAgICAgICAgICAgU3BlY0FmdGVyUmVzdWx0LmdldFNwZWNTdGFydGVkQXQoc3BlY0FmdGVyUmVzdWx0cy5zdGF0cylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBib2R5OiBcImJvZHlcIiBpbiB0ZXN0ID8gdGVzdC5ib2R5IDogbW9jaGFBdHRlbXB0c1swXT8uYm9keSA/PyBcIlwiLFxuICAgICAgICB0ZXN0SWQ6XG4gICAgICAgICAgXCJ0ZXN0SWRcIiBpbiB0ZXN0ID8gdGVzdC50ZXN0SWQgOiBtb2NoYUF0dGVtcHRzWzBdPy5pZCA/PyBgciR7aX1gLFxuICAgICAgICB0aXRsZTogdGVzdC50aXRsZSxcbiAgICAgICAgZGlzcGxheUVycm9yOiB0ZXN0LmRpc3BsYXlFcnJvcixcbiAgICAgICAgc3RhdGU6IHRlc3Quc3RhdGUsXG4gICAgICAgIGF0dGVtcHRzOiBzdGFuZGFyZEF0dGVtcHRzLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gc3RhbmRhcmRUZXN0TGlzdDtcbiAgfVxuXG4gIHN0YXRpYyBnZXRTcGVjU3RhbmRhcmQoXG4gICAgc3BlYzogQ3lwcmVzc1R5cGVzLkV2ZW50UGF5bG9hZC5TcGVjQWZ0ZXIuU3BlY1xuICApOiBTdGFuZGFyZC5TcGVjQWZ0ZXIuU3BlYyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHNwZWMubmFtZSxcbiAgICAgIHJlbGF0aXZlOiBzcGVjLnJlbGF0aXZlLFxuICAgICAgYWJzb2x1dGU6IHNwZWMuYWJzb2x1dGUsXG4gICAgICBmaWxlRXh0ZW5zaW9uOiBzcGVjLmZpbGVFeHRlbnNpb24sXG4gICAgICBiYXNlTmFtZTogXCJiYXNlTmFtZVwiIGluIHNwZWMgPyBzcGVjLmJhc2VOYW1lIDogXCJcIixcbiAgICAgIGZpbGVOYW1lOiBcImZpbGVOYW1lXCIgaW4gc3BlYyA/IHNwZWMuZmlsZU5hbWUgOiBcIlwiLFxuICAgICAgcmVsYXRpdmVUb0NvbW1vblJvb3Q6XG4gICAgICAgIFwicmVsYXRpdmVUb0NvbW1vblJvb3RcIiBpbiBzcGVjID8gc3BlYy5yZWxhdGl2ZVRvQ29tbW9uUm9vdCA6IFwiXCIsXG4gICAgICBzcGVjRmlsZUV4dGVuc2lvbjpcbiAgICAgICAgXCJzcGVjRmlsZUV4dGVuc2lvblwiIGluIHNwZWMgPyBzcGVjLnNwZWNGaWxlRXh0ZW5zaW9uIDogXCJcIixcbiAgICAgIHNwZWNUeXBlOiBcInNwZWNUeXBlXCIgaW4gc3BlYyA/IHNwZWMuc3BlY1R5cGUgOiBcIlwiLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0U3RhdHNTdGFuZGFyZChcbiAgICBzdGF0czogQ3lwcmVzc1R5cGVzLkV2ZW50UGF5bG9hZC5TcGVjQWZ0ZXIuU3RhdHNcbiAgKTogU3RhbmRhcmQuU3BlY0FmdGVyLlN0YXRzIHtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICBza2lwcGVkOiBzdGF0cy5za2lwcGVkLFxuICAgICAgc3VpdGVzOiBzdGF0cy5zdWl0ZXMsXG4gICAgICB0ZXN0czogc3RhdHMudGVzdHMsXG4gICAgICBwYXNzZXM6IHN0YXRzLnBhc3NlcyxcbiAgICAgIHBlbmRpbmc6IHN0YXRzLnBlbmRpbmcsXG4gICAgICBmYWlsdXJlczogc3RhdHMuZmFpbHVyZXMsXG4gICAgICB3YWxsQ2xvY2tTdGFydGVkQXQ6XG4gICAgICAgIFwid2FsbENsb2NrU3RhcnRlZEF0XCIgaW4gc3RhdHNcbiAgICAgICAgICA/IHN0YXRzLndhbGxDbG9ja1N0YXJ0ZWRBdFxuICAgICAgICAgIDogc3RhdHMuc3RhcnRlZEF0LFxuICAgICAgd2FsbENsb2NrRW5kZWRBdDpcbiAgICAgICAgXCJ3YWxsQ2xvY2tFbmRlZEF0XCIgaW4gc3RhdHMgPyBzdGF0cy53YWxsQ2xvY2tFbmRlZEF0IDogc3RhdHMuZW5kZWRBdCxcbiAgICAgIHdhbGxDbG9ja0R1cmF0aW9uOlxuICAgICAgICBcIndhbGxDbG9ja0R1cmF0aW9uXCIgaW4gc3RhdHNcbiAgICAgICAgICA/IHN0YXRzLndhbGxDbG9ja0R1cmF0aW9uXG4gICAgICAgICAgOiBzdGF0cy5kdXJhdGlvbiA/PyAwLFxuICAgIH07XG5cbiAgICAvLyBmaXggd3JvbmcgdG90YWwgZm9yIGNyYXNoZWQgcnVucyAtIGUuZy4gd2hlbiBjeXByZXNzIGZhaWxzIHRvIGNvbXBpbGVcbiAgICByZXN1bHQudGVzdHMgPVxuICAgICAgcmVzdWx0LnBhc3NlcyArIHJlc3VsdC5mYWlsdXJlcyArIHJlc3VsdC5wZW5kaW5nICsgcmVzdWx0LnNraXBwZWQ7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0U2NyZWVuc2hvdHNTdGFuZGFyZChcbiAgICBzcGVjQWZ0ZXJTY3JlZW5zaG90czogQ3lwcmVzc1R5cGVzLkV2ZW50UGF5bG9hZC5TcGVjQWZ0ZXIuUGF5bG9hZFtcInNjcmVlbnNob3RzXCJdLFxuICAgIHNjcmVlbnNob3RFdmVudHM6IEV4ZWN1dGlvblN0YXRlW1wic2NyZWVuc2hvdHNEYXRhXCJdXG4gICk6IFN0YW5kYXJkLlNwZWNBZnRlci5QYXlsb2FkW1wic2NyZWVuc2hvdHNcIl0ge1xuICAgIGlmICghc3BlY0FmdGVyU2NyZWVuc2hvdHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwZWNBZnRlclNjcmVlbnNob3RzLm1hcCgoc3BlY1NjcmVlbnNob3QpID0+IHtcbiAgICAgIGNvbnN0IGVzID0gc2NyZWVuc2hvdEV2ZW50cy5maW5kKFxuICAgICAgICAoc2NyZWVuc2hvdCkgPT4gc2NyZWVuc2hvdC5wYXRoID09PSBzcGVjU2NyZWVuc2hvdC5wYXRoXG4gICAgICApO1xuICAgICAgaWYgKCFlcykge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdDb3VsZCBub3QgZmluZCBkZXRhaWxzIGZvciBzY3JlZW5zaG90IGF0IHBhdGggXCIlc1wiLCBza2lwcGluZy4uLicsXG4gICAgICAgICAgc3BlY1NjcmVlbnNob3QucGF0aFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVpZ2h0OiBzcGVjU2NyZWVuc2hvdC5oZWlnaHQsXG4gICAgICAgIHdpZHRoOiBzcGVjU2NyZWVuc2hvdC53aWR0aCxcbiAgICAgICAgbmFtZTogc3BlY1NjcmVlbnNob3QubmFtZSA/PyBlcz8ubmFtZSA/PyBudWxsLFxuICAgICAgICBwYXRoOiBzcGVjU2NyZWVuc2hvdC5wYXRoLFxuICAgICAgICB0YWtlbkF0OiBzcGVjU2NyZWVuc2hvdC50YWtlbkF0LFxuICAgICAgICB0ZXN0QXR0ZW1wdEluZGV4OlxuICAgICAgICAgIFwidGVzdEF0dGVtcHRJbmRleFwiIGluIHNwZWNTY3JlZW5zaG90XG4gICAgICAgICAgICA/IHNwZWNTY3JlZW5zaG90LnRlc3RBdHRlbXB0SW5kZXhcbiAgICAgICAgICAgIDogZXM/LnRlc3RBdHRlbXB0SW5kZXggPz8gLTEsXG4gICAgICAgIHRlc3RJZDpcbiAgICAgICAgICBcInRlc3RJZFwiIGluIHNwZWNTY3JlZW5zaG90XG4gICAgICAgICAgICA/IHNwZWNTY3JlZW5zaG90LnRlc3RJZFxuICAgICAgICAgICAgOiBlcz8udGVzdElkID8/IFwidW5rbm93blwiLFxuICAgICAgICBzY3JlZW5zaG90SWQ6XG4gICAgICAgICAgXCJzY3JlZW5zaG90SWRcIiBpbiBzcGVjU2NyZWVuc2hvdFxuICAgICAgICAgICAgPyBzcGVjU2NyZWVuc2hvdC5zY3JlZW5zaG90SWRcbiAgICAgICAgICAgIDogZ2V0UmFuZG9tU3RyaW5nKCksXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgZ2V0QVBJQmFzZVVybCB9IGZyb20gXCIuL2h0dHBDbGllbnQvY29uZmlnXCI7XG5cbmV4cG9ydCBjb25zdCBpc0N1cnJlbnRzID0gKCkgPT5cbiAgISFwcm9jZXNzLmVudi5DVVJSRU5UU19FTkZPUkNFX0lTX0NVUlJFTlRTIHx8XG4gIGdldEFQSUJhc2VVcmwoKSA9PT0gXCJodHRwczovL2N5LmN1cnJlbnRzLmRldlwiO1xuIiwgIi8vIEB0cy1pZ25vcmVcbmltcG9ydCBnaXQgZnJvbSBcIkBjeXByZXNzL2NvbW1pdC1pbmZvXCI7XG5pbXBvcnQgeyBnZXRDb21taXREZWZhdWx0cyB9IGZyb20gXCIuL2NpUHJvdmlkZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdldEdpdEluZm8gPSBhc3luYyAocHJvamVjdFJvb3Q6IHN0cmluZykgPT4ge1xuICBjb25zdCBjb21taXRJbmZvID0gYXdhaXQgZ2l0LmNvbW1pdEluZm8ocHJvamVjdFJvb3QpO1xuICByZXR1cm4gZ2V0Q29tbWl0RGVmYXVsdHMoe1xuICAgIGJyYW5jaDogY29tbWl0SW5mby5icmFuY2gsXG4gICAgcmVtb3RlT3JpZ2luOiBjb21taXRJbmZvLnJlbW90ZSxcbiAgICBhdXRob3JFbWFpbDogY29tbWl0SW5mby5lbWFpbCxcbiAgICBhdXRob3JOYW1lOiBjb21taXRJbmZvLmF1dGhvcixcbiAgICBtZXNzYWdlOiBjb21taXRJbmZvLm1lc3NhZ2UsXG4gICAgc2hhOiBjb21taXRJbmZvLnNoYSxcbiAgfSk7XG59O1xuIiwgImltcG9ydCBEZWJ1ZyBmcm9tIFwiZGVidWdcIjtcblxuaW1wb3J0IHsgQ3lwcmVzc1R5cGVzIH0gZnJvbSBcIi4vY3lwcmVzcy50eXBlc1wiO1xuaW1wb3J0IHsgRXZlbnQsIGFsbEV2ZW50cywgZ2V0UHViU3ViIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5pbXBvcnQge1xuICBoYW5kbGVTY3JlZW5zaG90RXZlbnQsXG4gIGhhbmRsZVNwZWNBZnRlcixcbiAgaGFuZGxlVGVzdEFmdGVyLFxuICBoYW5kbGVUZXN0QmVmb3JlLFxufSBmcm9tIFwiLi9yZXN1bHRzL2NhcHR1cmVIb29rc1wiO1xuaW1wb3J0IHsgTW9kdWxlQVBJUmVzdWx0cyB9IGZyb20gXCIuL3Jlc3VsdHMvbW9kdWxlQVBJUmVzdWx0XCI7XG5pbXBvcnQgeyBDb25maWdTdGF0ZSwgRXhlY3V0aW9uU3RhdGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xuXG5jb25zdCBkZWJ1ZyA9IERlYnVnKFwiY3VycmVudHM6ZXZlbnRzXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RvcExpc3RlbmluZ1RvRXZlbnRzKCkge1xuICBhbGxFdmVudHMuZm9yRWFjaCgoZSkgPT4gZ2V0UHViU3ViKCkucmVtb3ZlQWxsTGlzdGVuZXJzKGUpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBsaXN0ZW5Ub0V2ZW50cyhcbiAgY29uZmlnU3RhdGU6IENvbmZpZ1N0YXRlLFxuICBleGVjdXRpb25TdGF0ZTogRXhlY3V0aW9uU3RhdGUsXG4gIGV4cGVyaW1lbnRhbENvdmVyYWdlUmVjb3JkaW5nOiBib29sZWFuID0gZmFsc2Vcbikge1xuICBnZXRQdWJTdWIoKS5vbihcbiAgICBFdmVudC5SVU5fUkVTVUxULFxuICAgICh7XG4gICAgICBpbnN0YW5jZUlkLFxuICAgICAgcnVuUmVzdWx0LFxuICAgICAgc3BlY1JlbGF0aXZlLFxuICAgIH06IHtcbiAgICAgIHNwZWNSZWxhdGl2ZTogc3RyaW5nO1xuICAgICAgaW5zdGFuY2VJZDogc3RyaW5nO1xuICAgICAgcnVuUmVzdWx0OiBDeXByZXNzVHlwZXMuTW9kdWxlQVBJLkNvbXBsZXRlZFJlc3VsdDtcbiAgICB9KSA9PiB7XG4gICAgICAvLyAlIHNhdmUgcmVzdWx0c1xuICAgICAgLy8gd3JpdGVEYXRhVG9GaWxlKFxuICAgICAgLy8gICBKU09OLnN0cmluZ2lmeShydW5SZXN1bHQpLFxuICAgICAgLy8gICBnZXRTcGVjU2hvcnROYW1lKHNwZWNSZWxhdGl2ZSksXG4gICAgICAvLyAgIFwicnVuUmVzdWx0XCJcbiAgICAgIC8vICk7XG4gICAgICBkZWJ1ZyhcIiVzICVzOiAlb1wiLCBFdmVudC5SVU5fUkVTVUxULCBpbnN0YW5jZUlkLCBydW5SZXN1bHQpO1xuICAgICAgZXhlY3V0aW9uU3RhdGUuc2V0SW5zdGFuY2VSZXN1bHQoXG4gICAgICAgIGluc3RhbmNlSWQsXG4gICAgICAgIE1vZHVsZUFQSVJlc3VsdHMuZ2V0U3RhbmRhcmRSZXN1bHQocnVuUmVzdWx0LCBleGVjdXRpb25TdGF0ZSlcbiAgICAgICk7XG4gICAgfVxuICApO1xuXG4gIGdldFB1YlN1YigpLm9uKEV2ZW50LlRFU1RfQUZURVJfUlVOLCAocGF5bG9hZDogc3RyaW5nKSA9PiB7XG4gICAgZGVidWcoXCIlcyAlb1wiLCBFdmVudC5URVNUX0FGVEVSX1JVTiwgcGF5bG9hZCk7XG4gICAgaGFuZGxlVGVzdEFmdGVyKHBheWxvYWQsIGV4ZWN1dGlvblN0YXRlKTtcbiAgfSk7XG5cbiAgZ2V0UHViU3ViKCkub24oRXZlbnQuVEVTVF9CRUZPUkVfUlVOLCAocGF5bG9hZDogc3RyaW5nKSA9PiB7XG4gICAgZGVidWcoXCIlcyAlb1wiLCBFdmVudC5URVNUX0JFRk9SRV9SVU4sIHBheWxvYWQpO1xuICAgIGhhbmRsZVRlc3RCZWZvcmUocGF5bG9hZCwgZXhlY3V0aW9uU3RhdGUpO1xuICB9KTtcblxuICBnZXRQdWJTdWIoKS5vbihcbiAgICBFdmVudC5BRlRFUl9TQ1JFRU5TSE9ULFxuICAgIChzY3JlZW5zaG90OiBDeXByZXNzVHlwZXMuRXZlbnRQYXlsb2FkLlNjcmVlbnNob3RBZnRlcikgPT4ge1xuICAgICAgZGVidWcoXCIlcyAlb1wiLCBFdmVudC5BRlRFUl9TQ1JFRU5TSE9ULCBzY3JlZW5zaG90KTtcbiAgICAgIGhhbmRsZVNjcmVlbnNob3RFdmVudChzY3JlZW5zaG90LCBleGVjdXRpb25TdGF0ZSk7XG4gICAgfVxuICApO1xuXG4gIGdldFB1YlN1YigpLm9uKFxuICAgIEV2ZW50LkFGVEVSX1NQRUMsXG4gICAgYXN5bmMgKHtcbiAgICAgIHNwZWMsXG4gICAgICByZXN1bHRzLFxuICAgIH06IHtcbiAgICAgIHNwZWM6IEN5cHJlc3NUeXBlcy5FdmVudFBheWxvYWQuU3BlY0FmdGVyLlNwZWM7XG4gICAgICByZXN1bHRzOiBDeXByZXNzVHlwZXMuRXZlbnRQYXlsb2FkLlNwZWNBZnRlci5QYXlsb2FkO1xuICAgIH0pID0+IHtcbiAgICAgIGF3YWl0IGhhbmRsZVNwZWNBZnRlcih7XG4gICAgICAgIHNwZWMsXG4gICAgICAgIHJlc3VsdHMsXG4gICAgICAgIGV4ZWN1dGlvblN0YXRlLFxuICAgICAgICBjb25maWdTdGF0ZSxcbiAgICAgICAgZXhwZXJpbWVudGFsQ292ZXJhZ2VSZWNvcmRpbmcsXG4gICAgICB9KTtcbiAgICB9XG4gICk7XG59XG4iLCAiaW1wb3J0IERlYnVnIGZyb20gXCJkZWJ1Z1wiO1xuaW1wb3J0IHsgZ2V0Q2FwdHVyZWRPdXRwdXQgfSBmcm9tIFwiLi4vY2FwdHVyZVwiO1xuaW1wb3J0IHsgZ2V0Q292ZXJhZ2VGaWxlUGF0aCB9IGZyb20gXCIuLi9jb3ZlcmFnZVwiO1xuaW1wb3J0IHsgQ3lwcmVzc1R5cGVzIH0gZnJvbSBcIi4uL2N5cHJlc3MudHlwZXNcIjtcbmltcG9ydCB7IGRpbSB9IGZyb20gXCIuLi9sb2dcIjtcbmltcG9ydCB7IGNyZWF0ZVJlcG9ydFRhc2tTcGVjIH0gZnJvbSBcIi4uL3J1bm5lclwiO1xuaW1wb3J0IHsgQ29uZmlnU3RhdGUsIEV4ZWN1dGlvblN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlXCI7XG5pbXBvcnQgeyBTcGVjQWZ0ZXJSZXN1bHQgfSBmcm9tIFwiLi9zcGVjQWZ0ZXJSZXN1bHRcIjtcblxuY29uc3QgZGVidWcgPSBEZWJ1ZyhcImN1cnJlbnRzOmV2ZW50c1wiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVNjcmVlbnNob3RFdmVudChcbiAgc2NyZWVuc2hvdDogQ3lwcmVzc1R5cGVzLkV2ZW50UGF5bG9hZC5TY3JlZW5zaG90QWZ0ZXIsXG4gIGV4ZWN1dGlvblN0YXRlOiBFeGVjdXRpb25TdGF0ZVxuKSB7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgLi4uc2NyZWVuc2hvdCxcbiAgICB0ZXN0SWQ6IGV4ZWN1dGlvblN0YXRlLmdldEN1cnJlbnRUZXN0SUQoKSxcbiAgICBoZWlnaHQ6IHNjcmVlbnNob3QuZGltZW5zaW9ucy5oZWlnaHQsXG4gICAgd2lkdGg6IHNjcmVlbnNob3QuZGltZW5zaW9ucy53aWR0aCxcbiAgfTtcblxuICAvLyAlIHNhdmUgcmVzdWx0c1xuICAvLyAgIHdyaXRlRGF0YVRvRmlsZShcbiAgLy8gICAgIEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAvLyAgICAgYCR7c2NyZWVuc2hvdC5zcGVjTmFtZX1gLFxuICAvLyAgICAgYHNjcmVlbnNob3RgLFxuICAvLyAgICAgYF8wJHtnZXRTY3JlZW5zaG90Q291bnQoc2NyZWVuc2hvdC5zcGVjTmFtZSl9YFxuICAvLyAgICk7XG5cbiAgZXhlY3V0aW9uU3RhdGUuYWRkU2NyZWVuc2hvdHNEYXRhKGRhdGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlVGVzdEJlZm9yZShcbiAgdGVzdEF0dGVtcHQ6IHN0cmluZyxcbiAgZXhlY3V0aW9uU3RhdGU6IEV4ZWN1dGlvblN0YXRlXG4pIHtcbiAgY29uc3QgcGFyc2VkOiBDeXByZXNzVHlwZXMuRXZlbnRQYXlsb2FkLlRlc3RCZWZvcmUgPSBKU09OLnBhcnNlKHRlc3RBdHRlbXB0KTtcbiAgZXhlY3V0aW9uU3RhdGUuc2V0Q3VycmVudFRlc3RJRChwYXJzZWQuaWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlVGVzdEFmdGVyKFxuICB0ZXN0QXR0ZW1wdDogc3RyaW5nLFxuICBleGVjdXRpb25TdGF0ZTogRXhlY3V0aW9uU3RhdGVcbikge1xuICBjb25zdCB0ZXN0OiBDeXByZXNzVHlwZXMuRXZlbnRQYXlsb2FkLlRlc3RBZnRlciA9IEpTT04ucGFyc2UodGVzdEF0dGVtcHQpO1xuXG4gIC8vICUgc2F2ZSByZXN1bHRzXG4gIC8vICAgd3JpdGVEYXRhVG9GaWxlKFxuICAvLyAgICAgdGVzdEF0dGVtcHQsXG4gIC8vICAgICBnZXRUZXN0SG9va1NwZWNOYW1lKHRlc3QpLFxuICAvLyAgICAgXCJ0ZXN0QWZ0ZXJcIixcbiAgLy8gICAgIGBfMCR7dGVzdC5jdXJyZW50UmV0cnl9YFxuICAvLyAgICk7XG5cbiAgZXhlY3V0aW9uU3RhdGUuYWRkQXR0ZW1wdHNEYXRhKHRlc3QpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3BlY0FmdGVyKHtcbiAgZXhlY3V0aW9uU3RhdGUsXG4gIGNvbmZpZ1N0YXRlLFxuICBzcGVjLFxuICByZXN1bHRzLFxuICBleHBlcmltZW50YWxDb3ZlcmFnZVJlY29yZGluZyA9IGZhbHNlLFxufToge1xuICBleGVjdXRpb25TdGF0ZTogRXhlY3V0aW9uU3RhdGU7XG4gIGNvbmZpZ1N0YXRlOiBDb25maWdTdGF0ZTtcbiAgc3BlYzogQ3lwcmVzc1R5cGVzLkV2ZW50UGF5bG9hZC5TcGVjQWZ0ZXIuU3BlYztcbiAgcmVzdWx0czogQ3lwcmVzc1R5cGVzLkV2ZW50UGF5bG9hZC5TcGVjQWZ0ZXIuUGF5bG9hZDtcbiAgZXhwZXJpbWVudGFsQ292ZXJhZ2VSZWNvcmRpbmc6IGJvb2xlYW47XG59KSB7XG4gIC8vICUgc2F2ZSByZXN1bHRzXG4gIC8vICAgY29uc3QgcyA9IGdldFNwZWNTaG9ydE5hbWUoc3BlYy5yZWxhdGl2ZSk7XG4gIC8vICAgd3JpdGVEYXRhVG9GaWxlKEpTT04uc3RyaW5naWZ5KHJlc3VsdHMpLCBzLCBcInNwZWNBZnRlclwiKTtcblxuICBkZWJ1ZyhcImFmdGVyOnNwZWMgJXMgJW9cIiwgc3BlYy5yZWxhdGl2ZSwgcmVzdWx0cyk7XG4gIGV4ZWN1dGlvblN0YXRlLnNldFNwZWNBZnRlcihcbiAgICBzcGVjLnJlbGF0aXZlLFxuICAgIFNwZWNBZnRlclJlc3VsdC5nZXRTcGVjQWZ0ZXJTdGFuZGFyZChyZXN1bHRzLCBleGVjdXRpb25TdGF0ZSlcbiAgKTtcbiAgZXhlY3V0aW9uU3RhdGUuc2V0U3BlY091dHB1dChzcGVjLnJlbGF0aXZlLCBnZXRDYXB0dXJlZE91dHB1dCgpKTtcbiAgY29uc3QgY29uZmlnID0gY29uZmlnU3RhdGUuZ2V0Q29uZmlnKCk7XG5cbiAgaWYgKGV4cGVyaW1lbnRhbENvdmVyYWdlUmVjb3JkaW5nKSB7XG4gICAgY29uc3QgY29uZmlnID0gY29uZmlnU3RhdGUuZ2V0Q29uZmlnKCk7XG5cbiAgICBjb25zdCB7IHBhdGgsIGVycm9yIH0gPSBhd2FpdCBnZXRDb3ZlcmFnZUZpbGVQYXRoKFxuICAgICAgY29uZmlnPy5lbnY/LmNvdmVyYWdlRmlsZVxuICAgICk7XG5cbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICBleGVjdXRpb25TdGF0ZS5zZXRTcGVjQ292ZXJhZ2Uoc3BlYy5yZWxhdGl2ZSwgcGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4ZWN1dGlvblN0YXRlLmFkZFdhcm5pbmcoXG4gICAgICAgIGBFcnJvciByZWFkaW5nIGNvdmVyYWdlIGZpbGUgXCIke3BhdGh9XCIuIENvdmVyYWdlIHJlY29yZGluZyB3aWxsIGJlIHNraXBwZWQuXFxuJHtkaW0oXG4gICAgICAgICAgZXJyb3JcbiAgICAgICAgKX1gXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBjcmVhdGVSZXBvcnRUYXNrU3BlYyhjb25maWdTdGF0ZSwgZXhlY3V0aW9uU3RhdGUsIHNwZWMucmVsYXRpdmUpO1xufVxuIiwgImltcG9ydCBmcyBmcm9tIFwiZnMvcHJvbWlzZXNcIjtcbmltcG9ydCB7IGpvaW4gfSBmcm9tIFwicGF0aFwiO1xuXG5leHBvcnQgY29uc3QgZ2V0Q292ZXJhZ2VGaWxlUGF0aCA9IGFzeW5jIChcbiAgY292ZXJhZ2VGaWxlID0gXCIuLy5ueWNfb3V0cHV0L291dC5qc29uXCJcbikgPT4ge1xuICBjb25zdCBwYXRoID0gam9pbihwcm9jZXNzLmN3ZCgpLCBjb3ZlcmFnZUZpbGUpO1xuXG4gIHRyeSB7XG4gICAgYXdhaXQgZnMuYWNjZXNzKHBhdGgpO1xuICAgIHJldHVybiB7XG4gICAgICBwYXRoLFxuICAgICAgZXJyb3I6IGZhbHNlLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGgsXG4gICAgICBlcnJvcixcbiAgICB9O1xuICB9XG59O1xuIiwgImV4cG9ydCAqIGZyb20gXCIuL2NhbmNlbGxhYmxlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9yZXBvcnRUYXNrXCI7XG4iLCAiaW1wb3J0IHsgQlByb21pc2UgfSBmcm9tIFwiLi4vbGFuZ1wiO1xuaW1wb3J0IHsgd2FybiB9IGZyb20gXCIuLi9sb2dcIjtcbmltcG9ydCB7IEV2ZW50LCBnZXRQdWJTdWIgfSBmcm9tIFwiLi4vcHVic3ViXCI7XG5pbXBvcnQgeyBydW5UaWxsRG9uZSB9IGZyb20gXCIuL3J1bm5lclwiO1xuXG5sZXQgY2FuY2VsbGFibGU6IHtcbiAgY2FuY2VsOiAoKSA9PiB2b2lkO1xufSB8IG51bGwgPSBudWxsO1xuXG5mdW5jdGlvbiBvblJ1bkNhbmNlbGxlZChyZWFzb246IHN0cmluZykge1xuICB3YXJuKFxuICAgIGBSdW4gY2FuY2VsbGVkOiAlcy4gV2FpdGluZyBmb3IgdXBsb2FkcyB0byBjb21wbGV0ZSBhbmQgc3RvcHBpbmcgZXhlY3V0aW9uLi4uYCxcbiAgICByZWFzb25cbiAgKTtcbiAgY2FuY2VsbGFibGU/LmNhbmNlbCgpO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJ1blRpbGxEb25lT3JDYW5jZWxsZWQoXG4gIC4uLmFyZ3M6IFBhcmFtZXRlcnM8dHlwZW9mIHJ1blRpbGxEb25lPlxuKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgoX3Jlc29sdmUsIF9yZWplY3QpID0+IHtcbiAgICBjYW5jZWxsYWJsZSA9IG5ldyBCUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0LCBvbkNhbmNlbCkgPT4ge1xuICAgICAgaWYgKCFvbkNhbmNlbCkge1xuICAgICAgICBfcmVqZWN0KG5ldyBFcnJvcihcIkJsdWVCaXJkIGlzIG1pc2NvbmZpZ3VyZWQ6IG9uQ2FuY2VsIGlzIHVuZGVmaW5lZFwiKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG9uQ2FuY2VsKCgpID0+IF9yZXNvbHZlKHZvaWQgMCkpO1xuICAgICAgcnVuVGlsbERvbmUoLi4uYXJncykudGhlbihcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICBfcmVzb2x2ZSh2b2lkIDApO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICBfcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIGdldFB1YlN1YigpLmFkZExpc3RlbmVyKEV2ZW50LlJVTl9DQU5DRUxMRUQsIG9uUnVuQ2FuY2VsbGVkKTtcbiAgfSkuZmluYWxseSgoKSA9PiB7XG4gICAgZ2V0UHViU3ViKCkucmVtb3ZlTGlzdGVuZXIoRXZlbnQuUlVOX0NBTkNFTExFRCwgb25SdW5DYW5jZWxsZWQpO1xuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBTcGVjV2l0aFJlbGF0aXZlUm9vdCxcbiAgVmFsaWRhdGVkQ3VycmVudHNQYXJhbWV0ZXJzLFxufSBmcm9tIFwiY3lwcmVzcy1jbG91ZC90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0Q2FwdHVyZWRPdXRwdXQsIHJlc2V0Q2FwdHVyZSB9IGZyb20gXCIuLi9jYXB0dXJlXCI7XG5cbmltcG9ydCB7IE1vZHVsZUFQSVJlc3VsdHMgfSBmcm9tIFwiLi4vcmVzdWx0cy9tb2R1bGVBUElSZXN1bHRcIjtcblxuaW1wb3J0IERlYnVnIGZyb20gXCJkZWJ1Z1wiO1xuaW1wb3J0IHtcbiAgSW5zdGFuY2VBUElQYXlsb2FkLFxuICBjcmVhdGVCYXRjaGVkSW5zdGFuY2VzLFxuICBjcmVhdGVJbnN0YW5jZSxcbn0gZnJvbSBcIi4uL2FwaVwiO1xuXG5pbXBvcnQgeyBydW5TcGVjRmlsZVNhZmUgfSBmcm9tIFwiLi4vY3lwcmVzc1wiO1xuaW1wb3J0IHsgQ3lwcmVzc1R5cGVzIH0gZnJvbSBcIi4uL2N5cHJlc3MudHlwZXNcIjtcbmltcG9ydCB7IGlzQ3VycmVudHMgfSBmcm9tIFwiLi4vZW52XCI7XG5pbXBvcnQgeyBkaXZpZGVyLCBpbmZvLCB0aXRsZSwgd2FybiB9IGZyb20gXCIuLi9sb2dcIjtcbmltcG9ydCB7IEV2ZW50LCBnZXRQdWJTdWIgfSBmcm9tIFwiLi4vcHVic3ViXCI7XG5pbXBvcnQgeyBDb25maWdTdGF0ZSwgRXhlY3V0aW9uU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGVcIjtcbmltcG9ydCB7IGNyZWF0ZVJlcG9ydFRhc2ssIHJlcG9ydFRhc2tzIH0gZnJvbSBcIi4vcmVwb3J0VGFza1wiO1xuXG5jb25zdCBkZWJ1ZyA9IERlYnVnKFwiY3VycmVudHM6cnVubmVyXCIpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuVGlsbERvbmUoXG4gIGV4ZWN1dGlvblN0YXRlOiBFeGVjdXRpb25TdGF0ZSxcbiAgY29uZmlnU3RhdGU6IENvbmZpZ1N0YXRlLFxuICB7XG4gICAgcnVuSWQsXG4gICAgZ3JvdXBJZCxcbiAgICBtYWNoaW5lSWQsXG4gICAgcGxhdGZvcm0sXG4gICAgc3BlY3M6IGFsbFNwZWNzLFxuICB9OiBJbnN0YW5jZUFQSVBheWxvYWQuQ3JlYXRlSW5zdGFuY2VQYXlsb2FkICYge1xuICAgIHNwZWNzOiBTcGVjV2l0aFJlbGF0aXZlUm9vdFtdO1xuICB9LFxuICBwYXJhbXM6IFZhbGlkYXRlZEN1cnJlbnRzUGFyYW1ldGVyc1xuKSB7XG4gIGxldCBoYXNNb3JlID0gdHJ1ZTtcblxuICB3aGlsZSAoaGFzTW9yZSkge1xuICAgIGNvbnN0IG5ld1Rhc2tzID0gYXdhaXQgcnVuQmF0Y2goZXhlY3V0aW9uU3RhdGUsIGNvbmZpZ1N0YXRlLCB7XG4gICAgICBydW5NZXRhOiB7XG4gICAgICAgIHJ1bklkLFxuICAgICAgICBncm91cElkLFxuICAgICAgICBtYWNoaW5lSWQsXG4gICAgICAgIHBsYXRmb3JtLFxuICAgICAgfSxcbiAgICAgIGFsbFNwZWNzLFxuICAgICAgcGFyYW1zLFxuICAgIH0pO1xuICAgIGlmICghbmV3VGFza3MubGVuZ3RoKSB7XG4gICAgICBkZWJ1ZyhcIk5vIG1vcmUgdGFza3MgdG8gcnVuLiBVcGxvYWRzIHF1ZXVlOiAlZFwiLCByZXBvcnRUYXNrcy5sZW5ndGgpO1xuICAgICAgaGFzTW9yZSA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIG5ld1Rhc2tzLmZvckVhY2goKHQpID0+XG4gICAgICBjcmVhdGVSZXBvcnRUYXNrKGNvbmZpZ1N0YXRlLCBleGVjdXRpb25TdGF0ZSwgdC5pbnN0YW5jZUlkKVxuICAgICk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcnVuQmF0Y2goXG4gIGV4ZWN1dGlvblN0YXRlOiBFeGVjdXRpb25TdGF0ZSxcbiAgY29uZmlnU3RhdGU6IENvbmZpZ1N0YXRlLFxuICB7XG4gICAgcnVuTWV0YSxcbiAgICBwYXJhbXMsXG4gICAgYWxsU3BlY3MsXG4gIH06IHtcbiAgICBydW5NZXRhOiB7XG4gICAgICBydW5JZDogc3RyaW5nO1xuICAgICAgZ3JvdXBJZDogc3RyaW5nO1xuICAgICAgbWFjaGluZUlkOiBzdHJpbmc7XG4gICAgICBwbGF0Zm9ybTogSW5zdGFuY2VBUElQYXlsb2FkLkNyZWF0ZUluc3RhbmNlUGF5bG9hZFtcInBsYXRmb3JtXCJdO1xuICAgIH07XG4gICAgYWxsU3BlY3M6IFNwZWNXaXRoUmVsYXRpdmVSb290W107XG4gICAgcGFyYW1zOiBWYWxpZGF0ZWRDdXJyZW50c1BhcmFtZXRlcnM7XG4gIH1cbikge1xuICBsZXQgYmF0Y2ggPSB7XG4gICAgc3BlY3M6IFtdIGFzIEluc3RhbmNlQVBJUGF5bG9hZC5JbnN0YW5jZVJlc3BvbnNlU3BlY0RldGFpbHNbXSxcbiAgICBjbGFpbWVkSW5zdGFuY2VzOiAwLFxuICAgIHRvdGFsSW5zdGFuY2VzOiAwLFxuICB9O1xuXG4gIGlmIChpc0N1cnJlbnRzKCkpIHtcbiAgICBkZWJ1ZyhcIkdldHRpbmcgYmF0Y2hlZCB0YXNrczogJWRcIiwgcGFyYW1zLmJhdGNoU2l6ZSk7XG4gICAgYmF0Y2ggPSBhd2FpdCBjcmVhdGVCYXRjaGVkSW5zdGFuY2VzKHtcbiAgICAgIC4uLnJ1bk1ldGEsXG4gICAgICBiYXRjaFNpemU6IHBhcmFtcy5iYXRjaFNpemUsXG4gICAgfSk7XG4gICAgZGVidWcoXCJHb3QgYmF0Y2hlZCB0YXNrczogJW9cIiwgYmF0Y2gpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY3JlYXRlSW5zdGFuY2UocnVuTWV0YSk7XG5cbiAgICBpZiAocmVzcG9uc2Uuc3BlYyAhPT0gbnVsbCAmJiByZXNwb25zZS5pbnN0YW5jZUlkICE9PSBudWxsKSB7XG4gICAgICBiYXRjaC5zcGVjcy5wdXNoKHtcbiAgICAgICAgc3BlYzogcmVzcG9uc2Uuc3BlYyxcbiAgICAgICAgaW5zdGFuY2VJZDogcmVzcG9uc2UuaW5zdGFuY2VJZCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBiYXRjaC5jbGFpbWVkSW5zdGFuY2VzID0gcmVzcG9uc2UuY2xhaW1lZEluc3RhbmNlcztcbiAgICBiYXRjaC50b3RhbEluc3RhbmNlcyA9IHJlc3BvbnNlLnRvdGFsSW5zdGFuY2VzO1xuICB9XG5cbiAgaWYgKGJhdGNoLnNwZWNzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCYXRjaCBjYW4gaGF2ZSBtdWx0aXBsZSBzcGVjcy4gV2hpbGUgcnVubmluZyB0aGUgc3BlY3MsXG4gICAqIGN5cHJlc3MgY2FuIGhhcmQtY3Jhc2ggd2l0aG91dCByZXBvcnRpbmcgYW55IHJlc3VsdC5cbiAgICpcbiAgICogV2hlbiBjcmFzaGVkLCBpZGVhbGx5LCB3ZSBuZWVkIHRvOlxuICAgKiAtIGRldGVybWluZSB3aGljaCBzcGVjIGNyYXNoZWRcbiAgICogLSBhc3NvY2lhdGUgdGhlIGNyYXNoIHdpdGggdGhlIHNwZWNcbiAgICogLSBydW4gdGhlIHJlc3Qgb2YgdW5yZXBvcnRlZCBzcGVjcyBpbiB0aGUgYmF0Y2hcbiAgICpcbiAgICogQnV0IGRldGVjdGluZyB0aGUgY3Jhc2hlZCBzcGVjIGlzIGVycm9yLXByb25lIGFuZCBpbmFjY3VyYXRlLFxuICAgKiBzbyB3ZSBmYWxsIGJhY2sgdG8gcmVwb3J0aW5nIGhhcmQgY3Jhc2ggdG8gYWxsIHN1YnNlcXVlbnRcbiAgICogc3BlY3MgaW4gdGhlIGJhdGNoLlxuICAgKlxuICAgKiBXb3JzdC1jYXNlIHNjZW5hcmlvOiB3ZSByZXBvcnQgaGFyZCBjcmFzaCB0byBhbGwgc3BlY3MgaW4gdGhlIGJhdGNoLlxuICAgKi9cblxuICAvLyAlc3RhdGVcbiAgYmF0Y2guc3BlY3MuZm9yRWFjaCgoaSkgPT4gZXhlY3V0aW9uU3RhdGUuaW5pdEluc3RhbmNlKGkpKTtcblxuICBkaXZpZGVyKCk7XG4gIGluZm8oXG4gICAgXCJSdW5uaW5nOiAlcyAoJWQvJWQpXCIsXG4gICAgYmF0Y2guc3BlY3MubWFwKChzKSA9PiBzLnNwZWMpLmpvaW4oXCIsIFwiKSxcbiAgICBiYXRjaC5jbGFpbWVkSW5zdGFuY2VzLFxuICAgIGJhdGNoLnRvdGFsSW5zdGFuY2VzXG4gICk7XG5cbiAgY29uc3QgYmF0Y2hlZFJlc3VsdCA9IGF3YWl0IHJ1blNwZWNGaWxlU2FmZShcbiAgICB7XG4gICAgICAvLyB1c2UgYWJzb2x1dGUgcGF0aHMgLSB1c2VyIGNhbiBydW4gdGhlIHByb2dyYW0gZnJvbSBhIGRpZmZlcmVudCBkaXJlY3RvcnksIGUuZy4gbnggb3IgYSBtb25vcmVwbyB3b3Jrc3BhY2VcbiAgICAgIC8vIGN5cHJlc3Mgc3RpbGwgcmVwb3J0IHRoZSBwYXRoIHJlbGF0aXZlIHRvIHRoZSBwcm9qZWN0IHJvb3RcbiAgICAgIHNwZWM6IGJhdGNoLnNwZWNzXG4gICAgICAgIC5tYXAoKGJzKSA9PiBnZXRTcGVjQWJzb2x1dGVQYXRoKGFsbFNwZWNzLCBicy5zcGVjKSlcbiAgICAgICAgLmpvaW4oXCIsXCIpLFxuICAgIH0sXG4gICAgcGFyYW1zXG4gICk7XG5cbiAgdGl0bGUoXCJibHVlXCIsIFwiUmVwb3J0aW5nIHJlc3VsdHMgYW5kIGFydGlmYWN0cyBpbiBiYWNrZ3JvdW5kLi4uXCIpO1xuXG4gIGNvbnN0IG91dHB1dCA9IGdldENhcHR1cmVkT3V0cHV0KCk7XG5cbiAgYmF0Y2guc3BlY3MuZm9yRWFjaCgoc3BlYykgPT4ge1xuICAgIGV4ZWN1dGlvblN0YXRlLnNldEluc3RhbmNlT3V0cHV0KHNwZWMuaW5zdGFuY2VJZCwgb3V0cHV0KTtcblxuICAgIGNvbnN0IHNpbmdsZVNwZWNSZXN1bHQgPSBnZXRTaW5nbGVTcGVjUnVuUmVzdWx0KHNwZWMuc3BlYywgYmF0Y2hlZFJlc3VsdCk7XG4gICAgaWYgKCFzaW5nbGVTcGVjUmVzdWx0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZ2V0UHViU3ViKCkuZW1pdChFdmVudC5SVU5fUkVTVUxULCB7XG4gICAgICBzcGVjUmVsYXRpdmU6IHNwZWMuc3BlYyxcbiAgICAgIGluc3RhbmNlSWQ6IHNwZWMuaW5zdGFuY2VJZCxcbiAgICAgIHJ1blJlc3VsdDogc2luZ2xlU3BlY1Jlc3VsdCxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmVzZXRDYXB0dXJlKCk7XG5cbiAgcmV0dXJuIGJhdGNoLnNwZWNzO1xufVxuXG5mdW5jdGlvbiBnZXRTaW5nbGVTcGVjUnVuUmVzdWx0KFxuICBzcGVjUmVsYXRpdmU6IHN0cmluZyxcbiAgYmF0Y2hlZFJlc3VsdDogQ3lwcmVzc1R5cGVzLk1vZHVsZUFQSS5SZXN1bHRcbik6IEN5cHJlc3NUeXBlcy5Nb2R1bGVBUEkuQ29tcGxldGVkUmVzdWx0IHwgdW5kZWZpbmVkIHtcbiAgaWYgKCFNb2R1bGVBUElSZXN1bHRzLmlzU3VjY2Vzc1Jlc3VsdChiYXRjaGVkUmVzdWx0KSkge1xuICAgIC8vIFRPRE86IHJldHVybiBkdW1teSByZXN1bHQgZm9yIG1pc3Npbmcgc3BlYyByZXN1bHRzP1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHJ1biA9IGJhdGNoZWRSZXN1bHQucnVucy5maW5kKChyKSA9PiByLnNwZWMucmVsYXRpdmUgPT09IHNwZWNSZWxhdGl2ZSk7XG4gIGlmICghcnVuKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5iYXRjaGVkUmVzdWx0LFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBydW5zOiBbcnVuXSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0U3BlY0Fic29sdXRlUGF0aChcbiAgYWxsU3BlY3M6IFNwZWNXaXRoUmVsYXRpdmVSb290W10sXG4gIHJlbGF0aXZlOiBzdHJpbmdcbikge1xuICBjb25zdCBhYnNvbHV0ZVBhdGggPSBhbGxTcGVjcy5maW5kKChpKSA9PiBpLnJlbGF0aXZlID09PSByZWxhdGl2ZSk/LmFic29sdXRlO1xuICBpZiAoIWFic29sdXRlUGF0aCkge1xuICAgIHdhcm4oXG4gICAgICAnQ2Fubm90IGZpbmQgYWJzb2x1dGUgcGF0aCBmb3Igc3BlYy4gU3BlYzogXCIlc1wiLCBjYW5kaWRhdGVzOiAlbycsXG4gICAgICByZWxhdGl2ZSxcbiAgICAgIGFsbFNwZWNzXG4gICAgKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBmaW5kIGFic29sdXRlIHBhdGggZm9yIHNwZWNgKTtcbiAgfVxuICByZXR1cm4gYWJzb2x1dGVQYXRoO1xufVxuIiwgImltcG9ydCB7IEluc3RhbmNlSWQgfSBmcm9tIFwiY3lwcmVzcy1jbG91ZC90eXBlc1wiO1xuaW1wb3J0IERlYnVnIGZyb20gXCJkZWJ1Z1wiO1xuaW1wb3J0IHsgZXJyb3IgfSBmcm9tIFwiLi4vbG9nXCI7XG5pbXBvcnQgeyBnZXRSZXBvcnRSZXN1bHRzVGFzayB9IGZyb20gXCIuLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBDb25maWdTdGF0ZSwgRXhlY3V0aW9uU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGVcIjtcblxuY29uc3QgZGVidWcgPSBEZWJ1ZyhcImN1cnJlbnRzOnJlcG9ydFRhc2tcIik7XG5cbmV4cG9ydCBjb25zdCByZXBvcnRUYXNrczogUHJvbWlzZTxhbnk+W10gPSBbXTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlcG9ydFRhc2sgPSAoXG4gIGNvbmZpZ1N0YXRlOiBDb25maWdTdGF0ZSxcbiAgZXhlY3V0aW9uU3RhdGU6IEV4ZWN1dGlvblN0YXRlLFxuICBpbnN0YW5jZUlkOiBJbnN0YW5jZUlkXG4pID0+IHtcbiAgY29uc3QgaW5zdGFuY2UgPSBleGVjdXRpb25TdGF0ZS5nZXRJbnN0YW5jZShpbnN0YW5jZUlkKTtcbiAgaWYgKCFpbnN0YW5jZSkge1xuICAgIGVycm9yKFwiQ2Fubm90IGZpbmQgZXhlY3V0aW9uIHN0YXRlIGZvciBpbnN0YW5jZSAlc1wiLCBpbnN0YW5jZUlkKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGluc3RhbmNlLnJlcG9ydFN0YXJ0ZWRBdCkge1xuICAgIGRlYnVnKFwiUmVwb3J0IHRhc2sgYWxyZWFkeSBjcmVhdGVkIGZvciBpbnN0YW5jZSAlc1wiLCBpbnN0YW5jZUlkKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpbnN0YW5jZS5yZXBvcnRTdGFydGVkQXQgPSBuZXcgRGF0ZSgpO1xuXG4gIGRlYnVnKFwiQ3JlYXRpbmcgcmVwb3J0IHRhc2sgZm9yIGluc3RhbmNlSWQgJXNcIiwgaW5zdGFuY2VJZCk7XG4gIHJlcG9ydFRhc2tzLnB1c2goXG4gICAgZ2V0UmVwb3J0UmVzdWx0c1Rhc2soXG4gICAgICBpbnN0YW5jZUlkLFxuICAgICAgZXhlY3V0aW9uU3RhdGUsXG4gICAgICBjb25maWdTdGF0ZSxcbiAgICAgIGluc3RhbmNlLm91dHB1dCA/PyBcIm5vIG91dHB1dCBjYXB0dXJlZFwiLFxuICAgICAgaW5zdGFuY2UuY292ZXJhZ2VGaWxlUGF0aFxuICAgICkuY2F0Y2goZXJyb3IpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUmVwb3J0VGFza1NwZWMgPSAoXG4gIGNvbmZpZ1N0YXRlOiBDb25maWdTdGF0ZSxcbiAgZXhlY3V0aW9uU3RhdGU6IEV4ZWN1dGlvblN0YXRlLFxuICBzcGVjOiBzdHJpbmdcbikgPT4ge1xuICBjb25zdCBpID0gZXhlY3V0aW9uU3RhdGUuZ2V0U3BlYyhzcGVjKTtcbiAgaWYgKCFpKSB7XG4gICAgZXJyb3IoXCJDYW5ub3QgZmluZCBleGVjdXRpb24gc3RhdGUgZm9yIHNwZWMgJXNcIiwgc3BlYyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGRlYnVnKFwiQ3JlYXRpbmcgcmVwb3J0IHRhc2sgZm9yIHNwZWMgJXNcIiwgc3BlYyk7XG4gIHJldHVybiBjcmVhdGVSZXBvcnRUYXNrKGNvbmZpZ1N0YXRlLCBleGVjdXRpb25TdGF0ZSwgaS5pbnN0YW5jZUlkKTtcbn07XG4iLCAiZXhwb3J0ICogZnJvbSBcIi4vc3VtbWFyaXplXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdXBsb2FkUmVzdWx0c1wiO1xuIiwgImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IE1lcmdlZENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IFN0YW5kYXJkIH0gZnJvbSBcIi4uL2N5cHJlc3MudHlwZXNcIjtcbmltcG9ydCB7IGVtcHR5U3RhdHMgfSBmcm9tIFwiLi9lbXB0eVwiO1xuaW1wb3J0IHsgTW9kdWxlQVBJUmVzdWx0cyB9IGZyb20gXCIuL21vZHVsZUFQSVJlc3VsdFwiO1xuXG5leHBvcnQgY29uc3Qgc3VtbWFyaXplRXhlY3V0aW9uID0gKFxuICBpbnB1dDogU3RhbmRhcmQuTW9kdWxlQVBJLkNvbXBsZXRlZFJlc3VsdFtdLFxuICBjb25maWc6IE1lcmdlZENvbmZpZ1xuKTogU3RhbmRhcmQuTW9kdWxlQVBJLkNvbXBsZXRlZFJlc3VsdCA9PiB7XG4gIGlmICghaW5wdXQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIE1vZHVsZUFQSVJlc3VsdHMuZ2V0RW1wdHlSZXN1bHQoY29uZmlnKTtcbiAgfVxuXG4gIGNvbnN0IG92ZXJhbGwgPSBpbnB1dC5yZWR1Y2UoXG4gICAgKFxuICAgICAgYWNjLFxuICAgICAge1xuICAgICAgICB0b3RhbER1cmF0aW9uLFxuICAgICAgICB0b3RhbEZhaWxlZCxcbiAgICAgICAgdG90YWxQYXNzZWQsXG4gICAgICAgIHRvdGFsUGVuZGluZyxcbiAgICAgICAgdG90YWxTa2lwcGVkLFxuICAgICAgICB0b3RhbFRlc3RzLFxuICAgICAgICB0b3RhbFN1aXRlcyxcbiAgICAgIH1cbiAgICApID0+ICh7XG4gICAgICB0b3RhbER1cmF0aW9uOiBhY2MudG90YWxEdXJhdGlvbiArIHRvdGFsRHVyYXRpb24sXG4gICAgICB0b3RhbFN1aXRlczogYWNjLnRvdGFsU3VpdGVzICsgdG90YWxTdWl0ZXMsXG4gICAgICB0b3RhbFBlbmRpbmc6IGFjYy50b3RhbFBlbmRpbmcgKyB0b3RhbFBlbmRpbmcsXG4gICAgICB0b3RhbEZhaWxlZDogYWNjLnRvdGFsRmFpbGVkICsgdG90YWxGYWlsZWQsXG4gICAgICB0b3RhbFNraXBwZWQ6IGFjYy50b3RhbFNraXBwZWQgKyB0b3RhbFNraXBwZWQsXG4gICAgICB0b3RhbFBhc3NlZDogYWNjLnRvdGFsUGFzc2VkICsgdG90YWxQYXNzZWQsXG4gICAgICB0b3RhbFRlc3RzOiBhY2MudG90YWxUZXN0cyArIHRvdGFsVGVzdHMsXG4gICAgfSksXG4gICAgZW1wdHlTdGF0c1xuICApO1xuICBjb25zdCBmaXJzdFJlc3VsdCA9IGlucHV0WzBdO1xuICBjb25zdCBzdGFydEl0ZW1zID0gaW5wdXQubWFwKChpKSA9PiBpLnN0YXJ0ZWRUZXN0c0F0KS5zb3J0KCk7XG4gIGNvbnN0IGVuZEl0ZW1zID0gaW5wdXQubWFwKChpKSA9PiBpLmVuZGVkVGVzdHNBdCkuc29ydCgpO1xuICBjb25zdCBydW5zID0gaW5wdXQubWFwKChpKSA9PiBpLnJ1bnMpLmZsYXQoKTtcbiAgcmV0dXJuIHtcbiAgICAuLi5vdmVyYWxsLFxuICAgIHJ1bnMsXG4gICAgc3RhcnRlZFRlc3RzQXQ6IF8uZmlyc3Qoc3RhcnRJdGVtcykgYXMgc3RyaW5nLFxuICAgIGVuZGVkVGVzdHNBdDogXy5sYXN0KGVuZEl0ZW1zKSBhcyBzdHJpbmcsXG4gICAgLi4uXy5waWNrKFxuICAgICAgZmlyc3RSZXN1bHQsXG4gICAgICBcImJyb3dzZXJOYW1lXCIsXG4gICAgICBcImJyb3dzZXJWZXJzaW9uXCIsXG4gICAgICBcImJyb3dzZXJQYXRoXCIsXG4gICAgICBcIm9zTmFtZVwiLFxuICAgICAgXCJvc1ZlcnNpb25cIixcbiAgICAgIFwiY3lwcmVzc1ZlcnNpb25cIixcbiAgICAgIFwiY29uZmlnXCJcbiAgICApLFxuICAgIHN0YXR1czogXCJmaW5pc2hlZFwiLFxuICB9O1xufTtcbiIsICJpbXBvcnQgeyBTdGFuZGFyZCB9IGZyb20gXCIuLi9jeXByZXNzLnR5cGVzXCI7XG5pbXBvcnQgeyBDb25maWdTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZVwiO1xuXG5leHBvcnQgY29uc3QgZW1wdHlTdGF0cyA9IHtcbiAgdG90YWxEdXJhdGlvbjogMCxcbiAgdG90YWxTdWl0ZXM6IDAsXG4gIHRvdGFsUGVuZGluZzogMCxcbiAgdG90YWxGYWlsZWQ6IDAsXG4gIHRvdGFsU2tpcHBlZDogMCxcbiAgdG90YWxQYXNzZWQ6IDAsXG4gIHRvdGFsVGVzdHM6IDAsXG59O1xuXG5jb25zdCBnZXREdW1teUZhaWxlZFRlc3QgPSAoXG4gIHN0YXJ0OiBzdHJpbmcsXG4gIGVycm9yOiBzdHJpbmdcbik6IFN0YW5kYXJkLk1vZHVsZUFQSS5UZXN0ID0+ICh7XG4gIHRpdGxlOiBbXCJVbmtub3duXCJdLFxuICBzdGF0ZTogXCJmYWlsZWRcIixcbiAgYm9keTogXCIvLyBUaGlzIHRlc3QgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgZHVlIHRvIGV4ZWN1dGlvbiBmYWlsdXJlXCIsXG4gIGRpc3BsYXlFcnJvcjogZXJyb3IsXG4gIGF0dGVtcHRzOiBbXG4gICAge1xuICAgICAgc3RhdGU6IFwiZmFpbGVkXCIsXG4gICAgICBzdGFydGVkQXQ6IHN0YXJ0LFxuICAgICAgZHVyYXRpb246IDAsXG4gICAgICB2aWRlb1RpbWVzdGFtcDogMCxcbiAgICAgIHNjcmVlbnNob3RzOiBbXSxcbiAgICAgIGVycm9yOiB7XG4gICAgICAgIG5hbWU6IFwiQ3lwcmVzc0V4ZWN1dGlvbkVycm9yXCIsXG4gICAgICAgIG1lc3NhZ2U6IGVycm9yLFxuICAgICAgICBzdGFjazogXCJcIixcbiAgICAgICAgY29kZUZyYW1lOiBudWxsLFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGYWlsZWRGYWtlSW5zdGFuY2VSZXN1bHQoXG4gIGNvbmZpZ1N0YXRlOiBDb25maWdTdGF0ZSxcbiAge1xuICAgIHNwZWNzLFxuICAgIGVycm9yLFxuICB9OiB7XG4gICAgc3BlY3M6IHN0cmluZ1tdO1xuICAgIGVycm9yOiBzdHJpbmc7XG4gIH1cbik6IFN0YW5kYXJkLk1vZHVsZUFQSS5Db21wbGV0ZWRSZXN1bHQge1xuICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgY29uc3QgZW5kID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICByZXR1cm4ge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25maWc6IGNvbmZpZ1N0YXRlLmdldENvbmZpZygpID8/IHt9LFxuICAgIHN0YXR1czogXCJmaW5pc2hlZFwiLFxuICAgIHN0YXJ0ZWRUZXN0c0F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgZW5kZWRUZXN0c0F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgdG90YWxEdXJhdGlvbjogMCxcbiAgICB0b3RhbFN1aXRlczogMSxcbiAgICB0b3RhbEZhaWxlZDogMSxcbiAgICB0b3RhbFBhc3NlZDogMCxcbiAgICB0b3RhbFBlbmRpbmc6IDAsXG4gICAgdG90YWxTa2lwcGVkOiAwLFxuICAgIHRvdGFsVGVzdHM6IDEsXG4gICAgYnJvd3Nlck5hbWU6IFwidW5rbm93blwiLFxuICAgIGJyb3dzZXJWZXJzaW9uOiBcInVua25vd25cIixcbiAgICBicm93c2VyUGF0aDogXCJ1bmtub3duXCIsXG4gICAgb3NOYW1lOiBcInVua25vd25cIixcbiAgICBvc1ZlcnNpb246IFwidW5rbm93blwiLFxuICAgIGN5cHJlc3NWZXJzaW9uOiBcInVua25vd25cIixcbiAgICBydW5zOiBzcGVjcy5tYXAoKHMpID0+ICh7XG4gICAgICBzdGF0czoge1xuICAgICAgICBzdWl0ZXM6IDEsXG4gICAgICAgIHRlc3RzOiAxLFxuICAgICAgICBwYXNzZXM6IDAsXG4gICAgICAgIHBlbmRpbmc6IDAsXG4gICAgICAgIHNraXBwZWQ6IDAsXG4gICAgICAgIGZhaWx1cmVzOiAxLFxuICAgICAgICBzdGFydGVkQXQ6IHN0YXJ0LFxuICAgICAgICBlbmRlZEF0OiBlbmQsXG4gICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgfSxcbiAgICAgIHJlcG9ydGVyOiBcInNwZWNcIixcbiAgICAgIHJlcG9ydGVyU3RhdHM6IHtcbiAgICAgICAgc3VpdGVzOiAxLFxuICAgICAgICB0ZXN0czogMSxcbiAgICAgICAgcGFzc2VzOiAwLFxuICAgICAgICBwZW5kaW5nOiAwLFxuICAgICAgICBmYWlsdXJlczogMSxcbiAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICBlbmQ6IGVuZCxcbiAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICB9LFxuICAgICAgaG9va3M6IFtdLFxuICAgICAgZXJyb3IsXG4gICAgICB2aWRlbzogbnVsbCxcbiAgICAgIHNwZWM6IHtcbiAgICAgICAgbmFtZTogcyxcbiAgICAgICAgcmVsYXRpdmU6IHMsXG4gICAgICAgIGFic29sdXRlOiBzLFxuICAgICAgICByZWxhdGl2ZVRvQ29tbW9uUm9vdDogcyxcbiAgICAgICAgYmFzZU5hbWU6IHMsXG4gICAgICAgIHNwZWNUeXBlOiBcImludGVncmF0aW9uXCIsXG4gICAgICAgIGZpbGVFeHRlbnNpb246IFwianNcIixcbiAgICAgICAgZmlsZU5hbWU6IHMsXG4gICAgICAgIHNwZWNGaWxlRXh0ZW5zaW9uOiBcImpzXCIsXG4gICAgICB9LFxuICAgICAgdGVzdHM6IFtnZXREdW1teUZhaWxlZFRlc3Qoc3RhcnQsIGVycm9yKV0sXG4gICAgICBzaG91bGRVcGxvYWRWaWRlbzogZmFsc2UsXG4gICAgICBza2lwcGVkU3BlYzogZmFsc2UsXG4gICAgfSkpLFxuICB9O1xufVxuIiwgImltcG9ydCBnZXRDb21tb25QYXRoUHJlZml4IGZyb20gXCJjb21tb24tcGF0aC1wcmVmaXhcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgcHJldHR5TVMgZnJvbSBcInByZXR0eS1tc1wiO1xuaW1wb3J0IHsgdGFibGUgfSBmcm9tIFwidGFibGVcIjtcbmltcG9ydCB7IFN0YW5kYXJkIH0gZnJvbSBcIi4uL2N5cHJlc3MudHlwZXNcIjtcbmltcG9ydCB7IGN5YW4sIGdyYXksIGdyZWVuLCByZWQsIHdoaXRlIH0gZnJvbSBcIi4uL2xvZ1wiO1xuXG5jb25zdCBmYWlsdXJlSWNvbiA9IHJlZChcIlx1MjcxNlwiKTtcbmNvbnN0IHN1Y2Nlc3NJY29uID0gZ3JlZW4oXCJcdTI3MTRcIik7XG5cbmV4cG9ydCBjb25zdCBzdW1tYXJ5VGFibGUgPSAocjogU3RhbmRhcmQuTW9kdWxlQVBJLkNvbXBsZXRlZFJlc3VsdCkgPT4ge1xuICBjb25zdCBvdmVyYWxsU3BlY0NvdW50ID0gci5ydW5zLmxlbmd0aDtcbiAgY29uc3QgZmFpbGVkU3BlY3NDb3VudCA9IF8uc3VtKFxuICAgIHIucnVucy5maWx0ZXIoKHYpID0+IHYuc3RhdHMuZmFpbHVyZXMgKyB2LnN0YXRzLnNraXBwZWQgPiAwKS5tYXAoKCkgPT4gMSlcbiAgKTtcbiAgY29uc3QgaGFzRmFpbGVkID0gZmFpbGVkU3BlY3NDb3VudCA+IDA7XG5cbiAgY29uc3QgdmVyZGljdCA9IGhhc0ZhaWxlZFxuICAgID8gcmVkKGAke2ZhaWxlZFNwZWNzQ291bnR9IG9mICR7b3ZlcmFsbFNwZWNDb3VudH0gZmFpbGVkYClcbiAgICA6IG92ZXJhbGxTcGVjQ291bnQgPiAwXG4gICAgPyBcIkFsbCBzcGVjcyBwYXNzZWQhXCJcbiAgICA6IFwiTm8gc3BlY3MgZXhlY3V0ZWRcIjtcblxuICBjb25zdCBzcGVjcyA9IHIucnVucy5tYXAoKHIpID0+IHIuc3BlYy5yZWxhdGl2ZSk7XG4gIGNvbnN0IGNvbW1vblBhdGggPSBnZXRDb21tb25QYXRoKHNwZWNzKTtcbiAgY29uc3QgZGF0YSA9IHIucnVucy5tYXAoKHIpID0+IFtcbiAgICByLnN0YXRzLmZhaWx1cmVzICsgci5zdGF0cy5za2lwcGVkID4gMCA/IGZhaWx1cmVJY29uIDogc3VjY2Vzc0ljb24sXG4gICAgc3RyaXBDb21tb25QYXRoKHIuc3BlYy5yZWxhdGl2ZSwgY29tbW9uUGF0aCksXG4gICAgZ3JheShwcmV0dHlNUyhyLnN0YXRzLmR1cmF0aW9uID8/IDApKSxcbiAgICB3aGl0ZShyLnN0YXRzLnRlc3RzID8/IDApLFxuICAgIHIuc3RhdHMucGFzc2VzID8gZ3JlZW4oci5zdGF0cy5wYXNzZXMpIDogZ3JheShcIi1cIiksXG4gICAgci5zdGF0cy5mYWlsdXJlcyA/IHJlZChyLnN0YXRzLmZhaWx1cmVzKSA6IGdyYXkoXCItXCIpLFxuICAgIHIuc3RhdHMucGVuZGluZyA/IGN5YW4oci5zdGF0cy5wZW5kaW5nKSA6IGdyYXkoXCItXCIpLFxuICAgIHIuc3RhdHMuc2tpcHBlZCA/IHJlZChyLnN0YXRzLnNraXBwZWQpIDogZ3JheShcIi1cIiksXG4gIF0pO1xuXG4gIHJldHVybiB0YWJsZShcbiAgICBbXG4gICAgICBbXG4gICAgICAgIFwiXCIsIC8vIG1hcmtlclxuICAgICAgICBncmF5KFwiU3BlY1wiKSxcbiAgICAgICAgXCJcIixcbiAgICAgICAgZ3JheShcIlRlc3RzXCIpLFxuICAgICAgICBncmF5KFwiUGFzc2luZ1wiKSxcbiAgICAgICAgZ3JheShcIkZhaWxpbmdcIiksXG4gICAgICAgIGdyYXkoXCJQZW5kaW5nXCIpLFxuICAgICAgICBncmF5KFwiU2tpcHBlZFwiKSxcbiAgICAgIF0sXG4gICAgICAuLi5kYXRhLFxuICAgICAgW1xuICAgICAgICBoYXNGYWlsZWQgPyBmYWlsdXJlSWNvbiA6IHN1Y2Nlc3NJY29uLCAvLyBtYXJrZXJcbiAgICAgICAgdmVyZGljdCxcbiAgICAgICAgZ3JheShwcmV0dHlNUyhyLnRvdGFsRHVyYXRpb24gPz8gMCkpLFxuICAgICAgICBvdmVyYWxsU3BlY0NvdW50ID4gMCA/IHdoaXRlKHIudG90YWxUZXN0cyA/PyAwKSA6IGdyYXkoXCItXCIpLFxuICAgICAgICByLnRvdGFsUGFzc2VkID8gZ3JlZW4oci50b3RhbFBhc3NlZCkgOiBncmF5KFwiLVwiKSxcbiAgICAgICAgci50b3RhbEZhaWxlZCA/IHJlZChyLnRvdGFsRmFpbGVkKSA6IGdyYXkoXCItXCIpLFxuICAgICAgICByLnRvdGFsUGVuZGluZyA/IGN5YW4oci50b3RhbFBlbmRpbmcpIDogZ3JheShcIi1cIiksXG4gICAgICAgIHIudG90YWxTa2lwcGVkID8gcmVkKHIudG90YWxTa2lwcGVkKSA6IGdyYXkoXCItXCIpLFxuICAgICAgXSxcbiAgICBdLFxuICAgIHtcbiAgICAgIGJvcmRlcixcbiAgICAgIGNvbHVtbkRlZmF1bHQ6IHtcbiAgICAgICAgd2lkdGg6IDgsXG4gICAgICB9LFxuICAgICAgY29sdW1uczogW1xuICAgICAgICB7IGFsaWdubWVudDogXCJsZWZ0XCIsIHdpZHRoOiAyIH0sXG4gICAgICAgIHsgYWxpZ25tZW50OiBcImxlZnRcIiwgd2lkdGg6IDMwIH0sXG4gICAgICAgIHsgYWxpZ25tZW50OiBcInJpZ2h0XCIgfSxcbiAgICAgICAgeyBhbGlnbm1lbnQ6IFwicmlnaHRcIiB9LFxuICAgICAgICB7IGFsaWdubWVudDogXCJyaWdodFwiIH0sXG4gICAgICAgIHsgYWxpZ25tZW50OiBcInJpZ2h0XCIgfSxcbiAgICAgICAgeyBhbGlnbm1lbnQ6IFwicmlnaHRcIiB9LFxuICAgICAgICB7IGFsaWdubWVudDogXCJyaWdodFwiIH0sXG4gICAgICBdLFxuICAgICAgLy8gc2luZ2xlTGluZTogdHJ1ZSxcbiAgICAgIGRyYXdIb3Jpem9udGFsTGluZTogKGxpbmVJbmRleCwgcm93Q291bnQpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBsaW5lSW5kZXggPT09IDEgfHxcbiAgICAgICAgICBsaW5lSW5kZXggPT09IDAgfHxcbiAgICAgICAgICBsaW5lSW5kZXggPT09IHJvd0NvdW50IC0gMSB8fFxuICAgICAgICAgIGxpbmVJbmRleCA9PT0gcm93Q291bnRcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBkcmF3VmVydGljYWxMaW5lOiAobGluZUluZGV4LCByb3dDb3VudCkgPT4ge1xuICAgICAgICByZXR1cm4gbGluZUluZGV4ID09PSAwIHx8IHJvd0NvdW50ID09PSBsaW5lSW5kZXg7XG4gICAgICB9LFxuICAgIH1cbiAgKTtcbn07XG5cbmNvbnN0IGJvcmRlciA9IF8ubWFwVmFsdWVzKFxuICB7XG4gICAgdG9wQm9keTogYFx1MjUwMGAsXG4gICAgdG9wSm9pbjogYFx1MjUyQ2AsXG4gICAgdG9wTGVmdDogYCAgXHUyNTBDYCxcbiAgICB0b3BSaWdodDogYFx1MjUxMGAsXG5cbiAgICBib3R0b21Cb2R5OiBgXHUyNTAwYCxcbiAgICBib3R0b21Kb2luOiBgXHUyNTM0YCxcbiAgICBib3R0b21MZWZ0OiBgICBcdTI1MTRgLFxuICAgIGJvdHRvbVJpZ2h0OiBgXHUyNTE4YCxcblxuICAgIGJvZHlMZWZ0OiBgICBcdTI1MDJgLFxuICAgIGJvZHlSaWdodDogYFx1MjUwMmAsXG4gICAgYm9keUpvaW46IGBcdTI1MDJgLFxuXG4gICAgam9pbkJvZHk6IGBcdTI1MDBgLFxuICAgIGpvaW5MZWZ0OiBgICBcdTI1MUNgLFxuICAgIGpvaW5SaWdodDogYFx1MjUyNGAsXG4gICAgam9pbkpvaW46IGBcdTI1M0NgLFxuICB9LFxuICAodikgPT4gZ3JheSh2KVxuKTtcblxuZnVuY3Rpb24gZ2V0Q29tbW9uUGF0aChzcGVjczogc3RyaW5nW10pIHtcbiAgaWYgKHNwZWNzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIGlmIChzcGVjcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gcGF0aC5kaXJuYW1lKHNwZWNzWzBdKSArIHBhdGguc2VwO1xuICB9XG4gIHJldHVybiBnZXRDb21tb25QYXRoUHJlZml4KHNwZWNzKTtcbn1cbmZ1bmN0aW9uIHN0cmlwQ29tbW9uUGF0aChzcGVjOiBzdHJpbmcsIGNvbW1vblBhdGg6IHN0cmluZykge1xuICByZXR1cm4gc3BlYy5yZXBsYWNlKGNvbW1vblBhdGgsIFwiXCIpO1xufVxuIiwgImltcG9ydCBEZWJ1ZyBmcm9tIFwiZGVidWdcIjtcbmltcG9ydCB7XG4gIEluc3RhbmNlQVBJUGF5bG9hZCxcbiAgcmVwb3J0SW5zdGFuY2VSZXN1bHRzTWVyZ2VkLFxuICBzZXRJbnN0YW5jZVRlc3RzLFxuICB1cGRhdGVJbnN0YW5jZVJlc3VsdHMsXG59IGZyb20gXCIuLi9hcGlcIjtcbmltcG9ydCB7IHVwbG9hZEFydGlmYWN0cywgdXBsb2FkU3Rkb3V0U2FmZSB9IGZyb20gXCIuLi9hcnRpZmFjdHNcIjtcbmltcG9ydCB7IHNldENhbmNlbGxhdGlvblJlYXNvbiB9IGZyb20gXCIuLi9jYW5jZWxsYXRpb25cIjtcbmltcG9ydCB7IGdldEluaXRpYWxPdXRwdXQgfSBmcm9tIFwiLi4vY2FwdHVyZVwiO1xuaW1wb3J0IHsgaXNDdXJyZW50cyB9IGZyb20gXCIuLi9lbnZcIjtcbmltcG9ydCB7IENvbmZpZ1N0YXRlLCBFeGVjdXRpb25TdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZVwiO1xuaW1wb3J0IHsgZ2V0SW5zdGFuY2VSZXN1bHRQYXlsb2FkLCBnZXRJbnN0YW5jZVRlc3RzUGF5bG9hZCB9IGZyb20gXCIuL2FwaVwiO1xuXG5jb25zdCBkZWJ1ZyA9IERlYnVnKFwiY3VycmVudHM6cmVzdWx0c1wiKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlcG9ydFJlc3VsdHNUYXNrKFxuICBpbnN0YW5jZUlkOiBzdHJpbmcsXG4gIGV4ZWN1dGlvblN0YXRlOiBFeGVjdXRpb25TdGF0ZSxcbiAgY29uZmlnU3RhdGU6IENvbmZpZ1N0YXRlLFxuICBzdGRvdXQ6IHN0cmluZyxcbiAgY292ZXJhZ2VGaWxlUGF0aD86IHN0cmluZ1xuKSB7XG4gIGNvbnN0IHJlc3VsdHMgPSBleGVjdXRpb25TdGF0ZS5nZXRJbnN0YW5jZVJlc3VsdHMoY29uZmlnU3RhdGUsIGluc3RhbmNlSWQpO1xuICBjb25zdCBydW4gPSByZXN1bHRzLnJ1bnNbMF07XG4gIGlmICghcnVuKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gcnVuIGZvdW5kIGluIEN5cHJlc3MgcmVzdWx0c1wiKTtcbiAgfVxuICBjb25zdCBpbnN0YW5jZVJlc3VsdHMgPSBnZXRJbnN0YW5jZVJlc3VsdFBheWxvYWQocnVuLCBjb3ZlcmFnZUZpbGVQYXRoKTtcbiAgY29uc3QgaW5zdGFuY2VUZXN0cyA9IGdldEluc3RhbmNlVGVzdHNQYXlsb2FkKHJ1biwgY29uZmlnU3RhdGUpO1xuXG4gIC8vICUgc2F2ZSByZXN1bHRzXG4gIC8vIHdyaXRlRGF0YVRvRmlsZShcbiAgLy8gICBKU09OLnN0cmluZ2lmeSh7XG4gIC8vICAgICB0ZXN0czogaW5zdGFuY2VUZXN0cyxcbiAgLy8gICAgIHJlc3VsdHM6IGluc3RhbmNlUmVzdWx0cyxcbiAgLy8gICB9KSxcbiAgLy8gICBnZXRTcGVjU2hvcnROYW1lKHJlc3VsdHMucnVuc1swXS5zcGVjLnJlbGF0aXZlKSxcbiAgLy8gICBcImFwaUNhbGxcIlxuICAvLyApO1xuXG4gIGNvbnN0IHsgdmlkZW9VcGxvYWRVcmwsIHNjcmVlbnNob3RVcGxvYWRVcmxzLCBjb3ZlcmFnZVVwbG9hZFVybCwgY2xvdWQgfSA9XG4gICAgYXdhaXQgcmVwb3J0UmVzdWx0cyhpbnN0YW5jZUlkLCBpbnN0YW5jZVRlc3RzLCBpbnN0YW5jZVJlc3VsdHMpO1xuXG4gIGlmIChjbG91ZD8uc2hvdWxkQ2FuY2VsKSB7XG4gICAgZGVidWcoXCJpbnN0YW5jZSAlcyBzaG91bGQgY2FuY2VsXCIsIGluc3RhbmNlSWQpO1xuICAgIHNldENhbmNlbGxhdGlvblJlYXNvbihjbG91ZC5zaG91bGRDYW5jZWwpO1xuICB9XG5cbiAgZGVidWcoXCJpbnN0YW5jZSAlcyBhcnRpZmFjdCB1cGxvYWQgaW5zdHJ1Y3Rpb25zICVvXCIsIGluc3RhbmNlSWQsIHtcbiAgICB2aWRlb1VwbG9hZFVybCxcbiAgICBzY3JlZW5zaG90VXBsb2FkVXJscyxcbiAgICBjb3ZlcmFnZVVwbG9hZFVybCxcbiAgfSk7XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICB1cGxvYWRBcnRpZmFjdHMoe1xuICAgICAgZXhlY3V0aW9uU3RhdGUsXG4gICAgICB2aWRlb1VwbG9hZFVybCxcbiAgICAgIHZpZGVvUGF0aDogcnVuLnZpZGVvLFxuICAgICAgc2NyZWVuc2hvdFVwbG9hZFVybHMsXG4gICAgICBzY3JlZW5zaG90czogaW5zdGFuY2VSZXN1bHRzLnNjcmVlbnNob3RzLFxuICAgICAgY292ZXJhZ2VVcGxvYWRVcmwsXG4gICAgICBjb3ZlcmFnZUZpbGVQYXRoLFxuICAgIH0pLFxuICAgIHVwbG9hZFN0ZG91dFNhZmUoaW5zdGFuY2VJZCwgZ2V0SW5pdGlhbE91dHB1dCgpICsgc3Rkb3V0KSxcbiAgXSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlcG9ydFJlc3VsdHMoXG4gIGluc3RhbmNlSWQ6IHN0cmluZyxcbiAgaW5zdGFuY2VUZXN0czogSW5zdGFuY2VBUElQYXlsb2FkLlNldEluc3RhbmNlVGVzdHNQYXlsb2FkLFxuICBpbnN0YW5jZVJlc3VsdHM6IEluc3RhbmNlQVBJUGF5bG9hZC5VcGRhdGVJbnN0YW5jZVJlc3VsdHNQYXlsb2FkXG4pIHtcbiAgZGVidWcoXCJyZXBvcnRpbmcgaW5zdGFuY2UgJXMgcmVzdWx0cy4uLlwiLCBpbnN0YW5jZUlkKTtcbiAgaWYgKGlzQ3VycmVudHMoKSkge1xuICAgIHJldHVybiByZXBvcnRJbnN0YW5jZVJlc3VsdHNNZXJnZWQoaW5zdGFuY2VJZCwge1xuICAgICAgdGVzdHM6IGluc3RhbmNlVGVzdHMsXG4gICAgICByZXN1bHRzOiBpbnN0YW5jZVJlc3VsdHMsXG4gICAgfSk7XG4gIH1cblxuICAvLyBydW4gb25lIGFmdGVyIGFub3RoZXJcbiAgYXdhaXQgc2V0SW5zdGFuY2VUZXN0cyhpbnN0YW5jZUlkLCBpbnN0YW5jZVRlc3RzKTtcbiAgcmV0dXJuIHVwZGF0ZUluc3RhbmNlUmVzdWx0cyhpbnN0YW5jZUlkLCBpbnN0YW5jZVJlc3VsdHMpO1xufVxuIiwgImltcG9ydCBEZWJ1ZyBmcm9tIFwiZGVidWdcIjtcbmltcG9ydCB7IFNjcmVlbnNob3RBcnRpZmFjdCwgU2NyZWVuc2hvdFVwbG9hZEluc3RydWN0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyB1cGRhdGVJbnN0YW5jZVN0ZG91dCB9IGZyb20gXCIuL2FwaVwiO1xuaW1wb3J0IHsgc2FmZSB9IGZyb20gXCIuL2xhbmdcIjtcbmltcG9ydCB7IGRpbSB9IGZyb20gXCIuL2xvZ1wiO1xuaW1wb3J0IHsgRXhlY3V0aW9uU3RhdGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0IHsgdXBsb2FkSW1hZ2UsIHVwbG9hZEpzb24sIHVwbG9hZFZpZGVvIH0gZnJvbSBcIi4vdXBsb2FkXCI7XG5jb25zdCBkZWJ1ZyA9IERlYnVnKFwiY3VycmVudHM6YXJ0aWZhY3RzXCIpO1xuaW50ZXJmYWNlIFVwbG9hZEFydGlmYWN0cyB7XG4gIGV4ZWN1dGlvblN0YXRlOiBFeGVjdXRpb25TdGF0ZTtcbiAgdmlkZW9QYXRoOiBzdHJpbmcgfCBudWxsO1xuICB2aWRlb1VwbG9hZFVybD86IHN0cmluZyB8IG51bGw7XG4gIHNjcmVlbnNob3RzOiBTY3JlZW5zaG90QXJ0aWZhY3RbXTtcbiAgc2NyZWVuc2hvdFVwbG9hZFVybHM6IFNjcmVlbnNob3RVcGxvYWRJbnN0cnVjdGlvbltdO1xuICBjb3ZlcmFnZVVwbG9hZFVybD86IHN0cmluZyB8IG51bGw7XG4gIGNvdmVyYWdlRmlsZVBhdGg/OiBzdHJpbmcgfCBudWxsO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwbG9hZEFydGlmYWN0cyh7XG4gIGV4ZWN1dGlvblN0YXRlLFxuICB2aWRlb1BhdGgsXG4gIHZpZGVvVXBsb2FkVXJsLFxuICBzY3JlZW5zaG90cyxcbiAgc2NyZWVuc2hvdFVwbG9hZFVybHMsXG4gIGNvdmVyYWdlRmlsZVBhdGgsXG4gIGNvdmVyYWdlVXBsb2FkVXJsLFxufTogVXBsb2FkQXJ0aWZhY3RzKSB7XG4gIGRlYnVnKFwidXBsb2FkaW5nIGFydGlmYWN0czogJW9cIiwge1xuICAgIHZpZGVvUGF0aCxcbiAgICB2aWRlb1VwbG9hZFVybCxcbiAgICBzY3JlZW5zaG90cyxcbiAgICBzY3JlZW5zaG90VXBsb2FkVXJscyxcbiAgICBjb3ZlcmFnZUZpbGVQYXRoLFxuICAgIGNvdmVyYWdlVXBsb2FkVXJsLFxuICB9KTtcblxuICBjb25zdCB0b3RhbFVwbG9hZHMgPVxuICAgICh2aWRlb1BhdGggPyAxIDogMCkgKyBzY3JlZW5zaG90cy5sZW5ndGggKyAoY292ZXJhZ2VVcGxvYWRVcmwgPyAxIDogMCk7XG4gIGlmICh0b3RhbFVwbG9hZHMgPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyB1cGxvYWQgdmlkZW9cbiAgaWYgKHZpZGVvVXBsb2FkVXJsICYmIHZpZGVvUGF0aCkge1xuICAgIGF3YWl0IHNhZmUoXG4gICAgICB1cGxvYWRWaWRlbyxcbiAgICAgIChlKSA9PiB7XG4gICAgICAgIGRlYnVnKFwiZmFpbGVkIHVwbG9hZGluZyB2aWRlbyAlcy4gRXJyb3I6ICVvXCIsIHZpZGVvUGF0aCwgZSk7XG4gICAgICAgIGV4ZWN1dGlvblN0YXRlLmFkZFdhcm5pbmcoXG4gICAgICAgICAgYEZhaWxlZCB1cGxvYWRpbmcgdmlkZW8gJHt2aWRlb1BhdGh9LlxcbiR7ZGltKGUpfWBcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICAoKSA9PiBkZWJ1ZyhcInN1Y2Nlc3MgdXBsb2FkaW5nXCIsIHZpZGVvUGF0aClcbiAgICApKHZpZGVvUGF0aCwgdmlkZW9VcGxvYWRVcmwpO1xuICB9XG4gIC8vIHVwbG9hZCBzY3JlZW5zaG90c1xuICBpZiAoc2NyZWVuc2hvdFVwbG9hZFVybHMgJiYgc2NyZWVuc2hvdFVwbG9hZFVybHMubGVuZ3RoKSB7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICBzY3JlZW5zaG90cy5tYXAoKHNjcmVlbnNob3QpID0+IHtcbiAgICAgICAgY29uc3QgdXJsID0gc2NyZWVuc2hvdFVwbG9hZFVybHMuZmluZChcbiAgICAgICAgICAodXJscykgPT4gdXJscy5zY3JlZW5zaG90SWQgPT09IHNjcmVlbnNob3Quc2NyZWVuc2hvdElkXG4gICAgICAgICk/LnVwbG9hZFVybDtcbiAgICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgICBkZWJ1ZyhcbiAgICAgICAgICAgIFwiTm8gdXBsb2FkIHVybCBmb3Igc2NyZWVuc2hvdCAlbywgc2NyZWVuc2hvdFVwbG9hZFVybHM6ICVvXCIsXG4gICAgICAgICAgICBzY3JlZW5zaG90LFxuICAgICAgICAgICAgc2NyZWVuc2hvdFVwbG9hZFVybHNcbiAgICAgICAgICApO1xuICAgICAgICAgIGV4ZWN1dGlvblN0YXRlLmFkZFdhcm5pbmcoXG4gICAgICAgICAgICBgTm8gdXBsb2FkIFVSTCBmb3Igc2NyZWVuc2hvdCAke3NjcmVlbnNob3QucGF0aH1gXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNhZmUoXG4gICAgICAgICAgdXBsb2FkSW1hZ2UsXG4gICAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICAgIGRlYnVnKFxuICAgICAgICAgICAgICBcImZhaWxlZCB1cGxvYWRpbmcgc2NyZWVuc2hvdCAlcy4gRXJyb3I6ICVvXCIsXG4gICAgICAgICAgICAgIHNjcmVlbnNob3QucGF0aCxcbiAgICAgICAgICAgICAgZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGV4ZWN1dGlvblN0YXRlLmFkZFdhcm5pbmcoXG4gICAgICAgICAgICAgIGBGYWlsZWQgdXBsb2FkaW5nIHNjcmVlbnNob3QgJHtzY3JlZW5zaG90LnBhdGh9LlxcbiR7ZGltKGUpfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoKSA9PiBkZWJ1ZyhcInN1Y2Nlc3MgdXBsb2FkaW5nXCIsIHNjcmVlbnNob3QucGF0aClcbiAgICAgICAgKShzY3JlZW5zaG90LnBhdGgsIHVybCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbiAgLy8gdXBsb2FkIGNvdmVyYWdlXG4gIGlmIChjb3ZlcmFnZVVwbG9hZFVybCAmJiBjb3ZlcmFnZUZpbGVQYXRoKSB7XG4gICAgYXdhaXQgc2FmZShcbiAgICAgIHVwbG9hZEpzb24sXG4gICAgICAoZSkgPT4ge1xuICAgICAgICBkZWJ1ZyhcbiAgICAgICAgICBcImZhaWxlZCB1cGxvYWRpbmcgY292ZXJhZ2UgZmlsZSAlcy4gRXJyb3I6ICVvXCIsXG4gICAgICAgICAgY292ZXJhZ2VGaWxlUGF0aCxcbiAgICAgICAgICBlXG4gICAgICAgICk7XG5cbiAgICAgICAgZXhlY3V0aW9uU3RhdGUuYWRkV2FybmluZyhcbiAgICAgICAgICBgRmFpbGVkIHVwbG9hZGluZyBjb3ZlcmFnZSBmaWxlICR7Y292ZXJhZ2VGaWxlUGF0aH0uXFxuJHtkaW0oZSl9YFxuICAgICAgICApO1xuICAgICAgfSxcblxuICAgICAgKCkgPT4gZGVidWcoXCJzdWNjZXNzIHVwbG9hZGluZ1wiLCBjb3ZlcmFnZUZpbGVQYXRoKVxuICAgICkoY292ZXJhZ2VGaWxlUGF0aCwgY292ZXJhZ2VVcGxvYWRVcmwpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1cGxvYWRTdGRvdXRTYWZlID0gc2FmZShcbiAgdXBkYXRlSW5zdGFuY2VTdGRvdXQsXG4gICgpID0+IHt9LFxuICAoKSA9PiB7fVxuKTtcbiIsICJpbXBvcnQgRGVidWcgZnJvbSBcImRlYnVnXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgeyBtYWtlUmVxdWVzdCB9IGZyb20gXCIuL2h0dHBDbGllbnRcIjtcbmNvbnN0IHJlYWRGaWxlID0gZnMucHJvbWlzZXMucmVhZEZpbGU7XG5jb25zdCBkZWJ1ZyA9IERlYnVnKFwiY3VycmVudHM6dXBsb2FkXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gdXBsb2FkVmlkZW8oZmlsZTogc3RyaW5nLCB1cmw6IHN0cmluZykge1xuICByZXR1cm4gdXBsb2FkRmlsZShmaWxlLCB1cmwsIFwidmlkZW8vbXA0XCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBsb2FkSW1hZ2UoZmlsZTogc3RyaW5nLCB1cmw6IHN0cmluZykge1xuICByZXR1cm4gdXBsb2FkRmlsZShmaWxlLCB1cmwsIFwiaW1hZ2UvcG5nXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBsb2FkSnNvbihmaWxlOiBzdHJpbmcsIHVybDogc3RyaW5nKSB7XG4gIHJldHVybiB1cGxvYWRGaWxlKGZpbGUsIHVybCwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xufVxuXG50eXBlIFVwbG9hZFR5cGVzID1cbiAgfCBcInZpZGVvL21wNFwiXG4gIHwgXCJpbWFnZS9wbmdcIlxuICB8IFwicGxhaW4vdGV4dFwiXG4gIHwgXCJhcHBsaWNhdGlvbi9qc29uXCI7XG5hc3luYyBmdW5jdGlvbiB1cGxvYWRGaWxlKGZpbGU6IHN0cmluZywgdXJsOiBzdHJpbmcsIHR5cGU6IFVwbG9hZFR5cGVzKSB7XG4gIGRlYnVnKCd1cGxvYWRpbmcgZmlsZSBcIiVzXCIgdG8gXCIlc1wiJywgZmlsZSwgdXJsKTtcbiAgY29uc3QgZiA9IGF3YWl0IHJlYWRGaWxlKGZpbGUpO1xuICBhd2FpdCBtYWtlUmVxdWVzdCh7XG4gICAgdXJsLFxuICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICBkYXRhOiBmLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IHR5cGUsXG4gICAgICBcIkNvbnRlbnQtRGlzcG9zaXRpb25cIjogYGlubGluZWAsXG4gICAgfSxcbiAgfSk7XG59XG4iLCAiZXhwb3J0ICogZnJvbSBcIi4vY2FuY2VsbGF0aW9uXCI7XG4iLCAiaW1wb3J0IHsgRXZlbnQsIGdldFB1YlN1YiB9IGZyb20gXCIuLi9wdWJzdWJcIjtcblxuaW50ZXJmYWNlIEV4ZWN1dGlvblN0YXRlIHtcbiAgY2FuY2VsbGF0aW9uUmVhc29uOiBzdHJpbmcgfCBudWxsO1xufVxuY29uc3Qgc3RhdGU6IEV4ZWN1dGlvblN0YXRlID0ge1xuICBjYW5jZWxsYXRpb25SZWFzb246IG51bGwsXG59O1xuXG5leHBvcnQgY29uc3Qgc2V0Q2FuY2VsbGF0aW9uUmVhc29uID0gKHJlYXNvbjogc3RyaW5nKSA9PiB7XG4gIGlmIChzdGF0ZS5jYW5jZWxsYXRpb25SZWFzb24pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgc3RhdGUuY2FuY2VsbGF0aW9uUmVhc29uID0gcmVhc29uO1xuICBnZXRQdWJTdWIoKS5lbWl0KEV2ZW50LlJVTl9DQU5DRUxMRUQsIHJlYXNvbik7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FuY2VsbGF0aW9uUmVhc29uID0gKCkgPT4gc3RhdGUuY2FuY2VsbGF0aW9uUmVhc29uO1xuIiwgImltcG9ydCBEZWJ1ZyBmcm9tIFwiZGVidWdcIjtcbmltcG9ydCB7IEluc3RhbmNlQVBJUGF5bG9hZCB9IGZyb20gXCIuLi9hcGlcIjtcblxuaW1wb3J0IHsgU3RhbmRhcmQgfSBmcm9tIFwiLi4vY3lwcmVzcy50eXBlc1wiO1xuaW1wb3J0IHsgZ2V0UmFuZG9tU3RyaW5nIH0gZnJvbSBcIi4uL25hbm9cIjtcbmltcG9ydCB7IENvbmZpZ1N0YXRlIH0gZnJvbSBcIi4uL3N0YXRlXCI7XG5cbmNvbnN0IGRlYnVnID0gRGVidWcoXCJjdXJyZW50czpyZXN1bHRzXCIpO1xuXG5leHBvcnQgY29uc3QgZ2V0SW5zdGFuY2VSZXN1bHRQYXlsb2FkID0gKFxuICBydW5SZXN1bHQ6IFN0YW5kYXJkLk1vZHVsZUFQSS5SdW4sXG4gIGNvdmVyYWdlRmlsZVBhdGg/OiBzdHJpbmdcbik6IEluc3RhbmNlQVBJUGF5bG9hZC5VcGRhdGVJbnN0YW5jZVJlc3VsdHNQYXlsb2FkID0+IHtcbiAgZGVidWcoXCJnZW5lcmF0aW5nIGluc3RhbmNlIHJlc3VsdCBwYXlsb2FkIGZyb20gJW9cIiwgcnVuUmVzdWx0KTtcbiAgcmV0dXJuIHtcbiAgICBzdGF0czogU3RhbmRhcmRSZXN1bHRzVG9BUElSZXN1bHRzLmdldFN0YXRzKHJ1blJlc3VsdC5zdGF0cyksXG4gICAgcmVwb3J0ZXJTdGF0czogcnVuUmVzdWx0LnJlcG9ydGVyU3RhdHMsXG4gICAgZXhjZXB0aW9uOiBydW5SZXN1bHQuZXJyb3IgPz8gbnVsbCxcbiAgICB2aWRlbzogISFydW5SZXN1bHQudmlkZW8sIC8vIERpZCB0aGUgaW5zdGFuY2UgZ2VuZXJhdGUgYSB2aWRlbz9cbiAgICBzY3JlZW5zaG90czogU3RhbmRhcmRSZXN1bHRzVG9BUElSZXN1bHRzLmdldEFsbFNjcmVlbnNob3RzKHJ1blJlc3VsdCksXG4gICAgaGFzQ292ZXJhZ2U6ICEhY292ZXJhZ2VGaWxlUGF0aCxcbiAgICB0ZXN0czogKHJ1blJlc3VsdC50ZXN0cyA/PyBbXSkubWFwKFxuICAgICAgU3RhbmRhcmRSZXN1bHRzVG9BUElSZXN1bHRzLmdldFRlc3RGb3JSZXN1bHRzXG4gICAgKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRJbnN0YW5jZVRlc3RzUGF5bG9hZCA9IChcbiAgcnVuUmVzdWx0OiBTdGFuZGFyZC5Nb2R1bGVBUEkuUnVuLFxuICBjb25maWc6IENvbmZpZ1N0YXRlXG4pOiBJbnN0YW5jZUFQSVBheWxvYWQuU2V0SW5zdGFuY2VUZXN0c1BheWxvYWQgPT4ge1xuICByZXR1cm4ge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25maWc6IHtcbiAgICAgIC4uLmNvbmZpZy5nZXRDb25maWcoKSxcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHZpZGVvVXBsb2FkT25QYXNzZXM6IGNvbmZpZy5nZXRDb25maWcoKT8udmlkZW9VcGxvYWRPblBhc3NlcyA/PyB0cnVlLFxuICAgIH0sXG4gICAgdGVzdHM6IChydW5SZXN1bHQudGVzdHMgPz8gW10pLm1hcChcbiAgICAgIFN0YW5kYXJkUmVzdWx0c1RvQVBJUmVzdWx0cy5nZXRUZXN0Rm9yU2V0VGVzdHNcbiAgICApLFxuICAgIGhvb2tzOiBydW5SZXN1bHQuaG9va3MsXG4gIH07XG59O1xuXG4vKipcbiAqIE1hcCBzdGFuZGFyZCByZXN1bHRzIHRvIEFQSSByZXN1bHRcbiAqL1xuY2xhc3MgU3RhbmRhcmRSZXN1bHRzVG9BUElSZXN1bHRzIHtcbiAgc3RhdGljIGdldFRlc3RBdHRlbXB0KFxuICAgIGF0dGVtcHQ6IFN0YW5kYXJkLk1vZHVsZUFQSS5UZXN0QXR0ZW1wdFxuICApOiBJbnN0YW5jZUFQSVBheWxvYWQuVGVzdEF0dGVtcHQge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZTogYXR0ZW1wdC5zdGF0ZSxcbiAgICAgIGVycm9yOiBhdHRlbXB0LmVycm9yLFxuICAgICAgd2FsbENsb2NrU3RhcnRlZEF0OiBhdHRlbXB0LnN0YXJ0ZWRBdCxcbiAgICAgIHdhbGxDbG9ja0R1cmF0aW9uOiBhdHRlbXB0LmR1cmF0aW9uLFxuICAgICAgdmlkZW9UaW1lc3RhbXA6IGF0dGVtcHQudmlkZW9UaW1lc3RhbXAsXG4gICAgfTtcbiAgfVxuICBzdGF0aWMgZ2V0VGVzdEZvclJlc3VsdHMoXG4gICAgdGVzdDogU3RhbmRhcmQuTW9kdWxlQVBJLlRlc3QsXG4gICAgaW5kZXg6IG51bWJlclxuICApOiBJbnN0YW5jZUFQSVBheWxvYWQuU2V0UmVzdWx0c1Rlc3RzUGF5bG9hZCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3BsYXlFcnJvcjogdGVzdC5kaXNwbGF5RXJyb3IsXG4gICAgICBzdGF0ZTogdGVzdC5zdGF0ZSxcbiAgICAgIGF0dGVtcHRzOiAodGVzdC5hdHRlbXB0cyA/PyBbXSkubWFwKFxuICAgICAgICBTdGFuZGFyZFJlc3VsdHNUb0FQSVJlc3VsdHMuZ2V0VGVzdEF0dGVtcHRcbiAgICAgICksXG4gICAgICBjbGllbnRJZDogYHIke2luZGV4fWAsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRUZXN0Rm9yU2V0VGVzdHMoXG4gICAgdGVzdDogU3RhbmRhcmQuTW9kdWxlQVBJLlRlc3QsXG4gICAgaW5kZXg6IG51bWJlclxuICApOiBJbnN0YW5jZUFQSVBheWxvYWQuU2V0VGVzdHNQYXlsb2FkIHtcbiAgICByZXR1cm4ge1xuICAgICAgYm9keTogXCJyZWRhY3RlZFwiLFxuICAgICAgdGl0bGU6IHRlc3QudGl0bGUsXG4gICAgICBjbGllbnRJZDogYHIke2luZGV4fWAsXG4gICAgfTtcbiAgfVxuICBzdGF0aWMgZ2V0QWxsU2NyZWVuc2hvdHMoXG4gICAgcnVuOiBTdGFuZGFyZC5Nb2R1bGVBUEkuUnVuXG4gICk6IEluc3RhbmNlQVBJUGF5bG9hZC5VcGRhdGVJbnN0YW5jZVJlc3VsdHNQYXlsb2FkW1wic2NyZWVuc2hvdHNcIl0ge1xuICAgIHJldHVybiAocnVuLnRlc3RzID8/IFtdKS5mbGF0TWFwKCh0LCBpKSA9PlxuICAgICAgdC5hdHRlbXB0cy5mbGF0TWFwKChhLCBqKSA9PlxuICAgICAgICBhLnNjcmVlbnNob3RzLm1hcCgocykgPT4gKHtcbiAgICAgICAgICAuLi5zLFxuICAgICAgICAgIHRlc3RJZDogYHIke2l9YCxcbiAgICAgICAgICB0ZXN0QXR0ZW1wdEluZGV4OiBqLFxuICAgICAgICAgIHNjcmVlbnNob3RJZDogZ2V0UmFuZG9tU3RyaW5nKCksXG4gICAgICAgIH0pKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZ2V0U3RhdHMoXG4gICAgc3RhdHM6IFN0YW5kYXJkLk1vZHVsZUFQSS5SdW5bXCJzdGF0c1wiXVxuICApOiBJbnN0YW5jZUFQSVBheWxvYWQuVXBkYXRlSW5zdGFuY2VSZXN1bHRzUGF5bG9hZFtcInN0YXRzXCJdIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdHMsXG4gICAgICB3YWxsQ2xvY2tEdXJhdGlvbjogc3RhdHMuZHVyYXRpb24sXG4gICAgICB3YWxsQ2xvY2tTdGFydGVkQXQ6IHN0YXRzLnN0YXJ0ZWRBdCxcbiAgICAgIHdhbGxDbG9ja0VuZGVkQXQ6IHN0YXRzLmVuZGVkQXQsXG4gICAgfTtcbiAgfVxufVxuIiwgImltcG9ydCB7IE1lcmdlZENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IGd1ZXNzQnJvd3NlciB9IGZyb20gXCIuL2Jyb3dzZXJcIjtcbmltcG9ydCB7IGdldFBsYXRmb3JtSW5mbyB9IGZyb20gXCIuL3BsYXRmb3JtXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQbGF0Zm9ybSh7XG4gIGJyb3dzZXIsXG4gIGNvbmZpZyxcbn06IHtcbiAgYnJvd3Nlcj86IHN0cmluZztcbiAgY29uZmlnOiBNZXJnZWRDb25maWc7XG59KSB7XG4gIHJldHVybiB7XG4gICAgLi4uKGF3YWl0IGdldFBsYXRmb3JtSW5mbygpKSxcbiAgICAuLi5ndWVzc0Jyb3dzZXIoYnJvd3NlciA/PyBcImVsZWN0cm9uXCIsIGNvbmZpZy5yZXNvbHZlZD8uYnJvd3NlcnMpLFxuICB9O1xufVxuIiwgImltcG9ydCBEZWJ1ZyBmcm9tIFwiZGVidWdcIjtcbmltcG9ydCB7IERldGVjdGVkQnJvd3NlciwgUGxhdGZvcm0gfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IHdhcm4gfSBmcm9tIFwiLi4vbG9nXCI7XG5cbmNvbnN0IGRlYnVnID0gRGVidWcoXCJjdXJyZW50czpicm93c2VyXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ3Vlc3NCcm93c2VyKFxuICBicm93c2VyOiBzdHJpbmcsXG4gIGF2YWlsYWJsZUJyb3dzZXJzOiBEZXRlY3RlZEJyb3dzZXJbXSA9IFtdXG4pOiBQaWNrPFBsYXRmb3JtLCBcImJyb3dzZXJOYW1lXCIgfCBcImJyb3dzZXJWZXJzaW9uXCI+IHtcbiAgZGVidWcoXG4gICAgXCJndWVzc2luZyBicm93c2VyIGZyb20gJyVzJywgYXZhaWxhYmxlIGJyb3dzZXJzOiAlb1wiLFxuICAgIGJyb3dzZXIsXG4gICAgYXZhaWxhYmxlQnJvd3NlcnNcbiAgKTtcbiAgLy8gdHJ5IGlkZW50aWZ5aW5nIHRoZSBicm93c2VyIGJ5IG5hbWUgZmlyc3RcbiAgbGV0IHJlc3VsdCA9IGF2YWlsYWJsZUJyb3dzZXJzLmZpbmQoKGIpID0+IGIubmFtZSA9PT0gYnJvd3Nlcik7XG5cbiAgaWYgKHJlc3VsdCkge1xuICAgIGRlYnVnKFwiaWRlbnRpZmllZCBicm93c2VyIGJ5IG5hbWU6ICVvXCIsIHJlc3VsdCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJyb3dzZXJOYW1lOiByZXN1bHQuZGlzcGxheU5hbWUsXG4gICAgICBicm93c2VyVmVyc2lvbjogcmVzdWx0LnZlcnNpb24sXG4gICAgfTtcbiAgfVxuXG4gIC8vIG90aGVyd2lzZSwgdHJ5IGlkZW50aWZ5aW5nIGJ5IHRoZSBwYXRoXG4gIHJlc3VsdCA9IGF2YWlsYWJsZUJyb3dzZXJzLmZpbmQoKGIpID0+IGIucGF0aCA9PT0gYnJvd3Nlcik7XG4gIGlmIChyZXN1bHQpIHtcbiAgICBkZWJ1ZyhcImlkZW50aWZpZWQgYnJvd3NlciBieSBwYXRoOiAlb1wiLCByZXN1bHQpO1xuICAgIHJldHVybiB7XG4gICAgICBicm93c2VyTmFtZTogcmVzdWx0LmRpc3BsYXlOYW1lID8/IHJlc3VsdC5uYW1lLFxuICAgICAgYnJvd3NlclZlcnNpb246IHJlc3VsdC52ZXJzaW9uLFxuICAgIH07XG4gIH1cblxuICB3YXJuKFwiVW5hYmxlIHRvIGlkZW50aWZ5IGJyb3dzZXIgbmFtZSBhbmQgdmVyc2lvblwiKTtcblxuICAvLyBvdGhlcndpc2UsIHJldHVybiBkdW1teSBicm93c2VyXG4gIHJldHVybiB7XG4gICAgYnJvd3Nlck5hbWU6IFwidW5rbm93blwiLFxuICAgIGJyb3dzZXJWZXJzaW9uOiBcInVua25vd25cIixcbiAgfTtcbn1cbiIsICJpbXBvcnQgRGVidWcgZnJvbSBcImRlYnVnXCI7XG5pbXBvcnQgZ2V0b3MgZnJvbSBcImdldG9zXCI7XG5pbXBvcnQgeyBjcHVzLCBmcmVlbWVtLCBwbGF0Zm9ybSwgcmVsZWFzZSwgdG90YWxtZW0gfSBmcm9tIFwib3NcIjtcbmltcG9ydCB7IHByb21pc2lmeSB9IGZyb20gXCJ1dGlsXCI7XG5cbmNvbnN0IGRlYnVnID0gRGVidWcoXCJjdXJyZW50czpwbGF0Zm9ybVwiKTtcblxuY29uc3QgZ2V0T3NWZXJzaW9uID0gYXN5bmMgKCkgPT4ge1xuICBpZiAocGxhdGZvcm0oKSA9PT0gXCJsaW51eFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxpbnV4T3MgPSBhd2FpdCBwcm9taXNpZnkoZ2V0b3MpKCk7XG4gICAgICBpZiAoXCJkaXN0XCIgaW4gbGludXhPcyAmJiBcInJlbGVhc2VcIiBpbiBsaW51eE9zKSB7XG4gICAgICAgIHJldHVybiBbbGludXhPcy5kaXN0LCBsaW51eE9zLnJlbGVhc2VdLmpvaW4oXCIgLSBcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVsZWFzZSgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIHJlbGVhc2UoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlbGVhc2UoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQbGF0Zm9ybUluZm8gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IG9zVmVyc2lvbiA9IGF3YWl0IGdldE9zVmVyc2lvbigpO1xuICBjb25zdCByZXN1bHQgPSB7XG4gICAgb3NOYW1lOiBwbGF0Zm9ybSgpLFxuICAgIG9zVmVyc2lvbixcbiAgICBvc0NwdXM6IGNwdXMoKSxcbiAgICBvc01lbW9yeToge1xuICAgICAgZnJlZTogZnJlZW1lbSgpLFxuICAgICAgdG90YWw6IHRvdGFsbWVtKCksXG4gICAgfSxcbiAgfTtcbiAgZGVidWcoXCJwbGF0Zm9ybSBpbmZvOiAlb1wiLCByZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICJpbXBvcnQgeyBzdG9wV1NTIH0gZnJvbSBcIi4vd3NcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNodXRkb3duKCkge1xuICBhd2FpdCBzdG9wV1NTKCk7XG59XG4iLCAiZXhwb3J0ICogZnJvbSBcIi4vZ2V0U3BlY0ZpbGVzXCI7XG4iLCAiaW1wb3J0IHtcbiAgQ3VycmVudHNSdW5QYXJhbWV0ZXJzLFxuICBWYWxpZGF0ZWRDdXJyZW50c1BhcmFtZXRlcnMsXG59IGZyb20gXCJjeXByZXNzLWNsb3VkL3R5cGVzXCI7XG5pbXBvcnQgeyBNZXJnZWRDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ1wiO1xuaW1wb3J0IHsgd2FybiB9IGZyb20gXCIuLi9sb2dcIjtcbmltcG9ydCB7IGZpbmRTcGVjcyB9IGZyb20gXCIuL3NwZWNNYXRjaGVyXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRTcGVjRmlsZXMgPSBhc3luYyAoe1xuICBjb25maWcsXG4gIHBhcmFtcyxcbn06IHtcbiAgY29uZmlnOiBNZXJnZWRDb25maWc7XG4gIHBhcmFtczogVmFsaWRhdGVkQ3VycmVudHNQYXJhbWV0ZXJzO1xufSkgPT4ge1xuICBjb25zdCBzcGVjUGF0dGVybiA9IGdldFNwZWNQYXR0ZXJuKGNvbmZpZy5zcGVjUGF0dGVybiwgcGFyYW1zLnNwZWMpO1xuICAvLyBmaW5kIHRoZSBzcGVjIGZpbGVzIGFjY29yZGluZyB0byB0aGUgcmVzb2x2ZWQgY29uZmlndXJhdGlvblxuICBjb25zdCBzcGVjcyA9IGF3YWl0IGZpbmRTcGVjcyh7XG4gICAgLy8gaHR0cHM6Ly9kb2NzLmN5cHJlc3MuaW8vZ3VpZGVzL2d1aWRlcy9jb21tYW5kLWxpbmUjY3lwcmVzcy1ydW4tc3BlYy1sdC1zcGVjLWd0XG4gICAgcHJvamVjdFJvb3Q6IHBhcmFtcy5wcm9qZWN0ID8/IGNvbmZpZy5wcm9qZWN0Um9vdCxcbiAgICB0ZXN0aW5nVHlwZTogcGFyYW1zLnRlc3RpbmdUeXBlLFxuICAgIHNwZWNQYXR0ZXJuLFxuICAgIGNvbmZpZ1NwZWNQYXR0ZXJuOiBjb25maWcuc3BlY1BhdHRlcm4sXG4gICAgZXhjbHVkZVNwZWNQYXR0ZXJuOiBjb25maWcuZXhjbHVkZVNwZWNQYXR0ZXJuLFxuICAgIGFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJuOiBjb25maWcuYWRkaXRpb25hbElnbm9yZVBhdHRlcm4sXG4gIH0pO1xuICBpZiAoc3BlY3MubGVuZ3RoID09PSAwKSB7XG4gICAgd2FybihcbiAgICAgIFwiRm91bmQgbm8gc3BlYyBmaWxlcy4gV2FzIGxvb2tpbmcgZm9yIHNwZWMgZmlsZXMgdGhhdCBtYXRjaCBib3RoIGNvbmZpZ1NwZWNQYXR0ZXJuIGFuZCBzcGVjUGF0dGVybiByZWxhdGl2ZSB0byBwcm9qZWN0Um9vdC4gQ29uZmlndXJhdGlvbjogJU9cIixcbiAgICAgIHtcbiAgICAgICAgcHJvamVjdFJvb3Q6IGNvbmZpZy5wcm9qZWN0Um9vdCxcbiAgICAgICAgc3BlY1BhdHRlcm4sXG4gICAgICAgIGNvbmZpZ1NwZWNQYXR0ZXJuOiBjb25maWcuc3BlY1BhdHRlcm4sXG4gICAgICAgIGV4Y2x1ZGVTcGVjUGF0dGVybjogW1xuICAgICAgICAgIGNvbmZpZy5leGNsdWRlU3BlY1BhdHRlcm4sXG4gICAgICAgICAgY29uZmlnLmFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJuLFxuICAgICAgICBdLmZsYXQoMiksXG4gICAgICAgIHRlc3RpbmdUeXBlOiBwYXJhbXMudGVzdGluZ1R5cGUsXG4gICAgICB9XG4gICAgKTtcbiAgfVxuICByZXR1cm4geyBzcGVjcywgc3BlY1BhdHRlcm4gfTtcbn07XG5cbmZ1bmN0aW9uIGdldFNwZWNQYXR0ZXJuKFxuICBjb25maWdQYXR0ZXJuOiBNZXJnZWRDb25maWdbXCJzcGVjUGF0dGVyblwiXSxcbiAgZXhwbGljaXQ/OiBDdXJyZW50c1J1blBhcmFtZXRlcnNbXCJzcGVjXCJdXG4pIHtcbiAgcmV0dXJuIGV4cGxpY2l0IHx8IGNvbmZpZ1BhdHRlcm47XG59XG4iLCAiLyohIEBwcmVzZXJ2ZVxuXG4jIyMgTUlUXG5cblBhcnRzIG9mIHRoaXMgY29kZSB3YXMgY29waWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2N5cHJlc3MtaW8vY3lwcmVzcyBhbmQgaXMgc3ViamVjdCB0byBNSVQgbGljZW5zZS5cblxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSAyMDIyIEN5cHJlc3MuaW9cblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbmNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblNPRlRXQVJFLlxuKi9cblxuaW1wb3J0IERlYnVnIGZyb20gXCJkZWJ1Z1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuaW1wb3J0IGNvbW1vblBhdGhQcmVmaXggZnJvbSBcImNvbW1vbi1wYXRoLXByZWZpeFwiO1xuaW1wb3J0IGdsb2JieSwgeyBHbG9iYnlPcHRpb25zIH0gZnJvbSBcImdsb2JieVwiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IG9zIGZyb20gXCJvc1wiO1xuaW1wb3J0IHtcbiAgRmluZFNwZWNzLFxuICBTcGVjVHlwZSxcbiAgU3BlY1dpdGhSZWxhdGl2ZVJvb3QsXG4gIFRlc3RpbmdUeXBlLFxufSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IHRvQXJyYXksIHRvUG9zaXggfSBmcm9tIFwiLi4vdXRpbHNcIjtcblxuY29uc3QgZGVidWcgPSBEZWJ1ZyhcImN1cnJlbnRzOnNwZWNzXCIpO1xuXG50eXBlIEdsb2JQYXR0ZXJuID0gc3RyaW5nIHwgc3RyaW5nW107XG5cbi8qKlxuICogUmVwbGljYXRlIGhvdyBjeXByZXNzIGlzIGRpc2NvdmVyaW5nIHNwZWMgZmlsZXNcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jeXByZXNzLWlvL2N5cHJlc3MvYmxvYi9iYzllZGI0NDUyM2Q2MmNhOTM0ODI3YjhlODcwZjM4Zjg2NjM0Y2E0L3BhY2thZ2VzL2RhdGEtY29udGV4dC9zcmMvc291cmNlcy9Qcm9qZWN0RGF0YVNvdXJjZS50cyNMMjUwXG4gKiBodHRwczovL2dpdGh1Yi5jb20vY3lwcmVzcy1pby9jeXByZXNzL2Jsb2IvYmM5ZWRiNDQ1MjNkNjJjYTkzNDgyN2I4ZTg3MGYzOGY4NjYzNGNhNC9wYWNrYWdlcy9kYXRhLWNvbnRleHQvc3JjL2FjdGlvbnMvUHJvamVjdEFjdGlvbnMudHMjTDQxN1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmluZFNwZWNzKHtcbiAgcHJvamVjdFJvb3QsXG4gIHRlc3RpbmdUeXBlLFxuICBzcGVjUGF0dGVybixcbiAgY29uZmlnU3BlY1BhdHRlcm4sXG4gIGV4Y2x1ZGVTcGVjUGF0dGVybixcbiAgYWRkaXRpb25hbElnbm9yZVBhdHRlcm4sXG59OiBGaW5kU3BlY3M8c3RyaW5nW10gfCBzdHJpbmc+KTogUHJvbWlzZTxTcGVjV2l0aFJlbGF0aXZlUm9vdFtdPiB7XG4gIGNvbmZpZ1NwZWNQYXR0ZXJuID0gdG9BcnJheShjb25maWdTcGVjUGF0dGVybik7XG4gIHNwZWNQYXR0ZXJuID0gdG9BcnJheShzcGVjUGF0dGVybik7XG4gIGV4Y2x1ZGVTcGVjUGF0dGVybiA9IHRvQXJyYXkoZXhjbHVkZVNwZWNQYXR0ZXJuKSB8fCBbXTtcblxuICAvLyBleGNsdWRlIGFsbCBzcGVjcyBtYXRjaGluZyBlMmUgaWYgaW4gY29tcG9uZW50IHRlc3RpbmdcbiAgYWRkaXRpb25hbElnbm9yZVBhdHRlcm4gPSB0b0FycmF5KGFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJuKSB8fCBbXTtcblxuICBkZWJ1ZyhcImV4cGxvcmluZyBzcGVjIGZpbGVzIGZvciBleGVjdXRpb24gJU9cIiwge1xuICAgIHRlc3RpbmdUeXBlLFxuICAgIHByb2plY3RSb290LFxuICAgIHNwZWNQYXR0ZXJuLFxuICAgIGNvbmZpZ1NwZWNQYXR0ZXJuLFxuICAgIGV4Y2x1ZGVTcGVjUGF0dGVybixcbiAgICBhZGRpdGlvbmFsSWdub3JlUGF0dGVybixcbiAgfSk7XG5cbiAgaWYgKCFzcGVjUGF0dGVybiB8fCAhY29uZmlnU3BlY1BhdHRlcm4pIHtcbiAgICB0aHJvdyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGdsb2IgcGF0dGVybnMgZm9yIGV4cGxvcmluZyBzcGVjc1wiKTtcbiAgfVxuXG4gIGxldCBzcGVjQWJzb2x1dGVQYXRocyA9IGF3YWl0IGdldEZpbGVzQnlHbG9iKHByb2plY3RSb290LCBzcGVjUGF0dGVybiwge1xuICAgIGFic29sdXRlOiB0cnVlLFxuICAgIGlnbm9yZTogWy4uLmV4Y2x1ZGVTcGVjUGF0dGVybiwgLi4uYWRkaXRpb25hbElnbm9yZVBhdHRlcm5dLFxuICB9KTtcblxuICAvLyBJZiB0aGUgc3BlY1BhdHRlcm4gYW5kIGNvbmZpZ1NwZWNQYXR0ZXJuIGFyZSBkaWZmZXJlbnQsXG4gIC8vIGl0IG1lYW5zIHRoZSB1c2VyIHBhc3NlZCBzb21ldGhpbmcgbm9uLWRlZmF1bHQgdmlhIC0tc3BlYyAocnVuIG1vZGUgb25seSlcbiAgLy8gaW4gdGhpcyBzY2VuYXJpbywgd2Ugd2FudCB0byBncmFiIGV2ZXJ5dGhpbmcgdGhhdCBtYXRjaGVzIGAtLXNwZWNgXG4gIC8vIHRoYXQgZmFsbHMgd2l0aGluIHRoZWlyIGRlZmF1bHQgc3BlY1BhdHRlcm4uIFRoZSByZWFzb24gaXMgc28gd2UgYXZvaWRcbiAgLy8gYXR0ZW1wdGluZyB0byBydW4gdGhpbmdzIHRoYXQgYXJlIG5vdCBzcGVjcywgZWcgc291cmNlIGNvZGUsIHZpZGVvcywgZXRjLlxuICAvL1xuICAvLyBFeGFtcGxlOiBkZXZlbG9wZXIgd2FudHMgdG8gcnVuIHRlc3RzIGFzc29jaWF0ZWQgd2l0aCB0aW1lcnMgaW4gcGFja2FnZXMvZHJpdmVyXG4gIC8vIFNvIHRoZXkgcnVuIHlhcm4gY3lwcmVzczpydW4gLS1zcGVjICoqL3RpbWVycypcbiAgLy8gd2UgZG8gKipub3QqKiB3YW50IHRvIGNhcHR1cmUgYHRpbWVycy50c2AgKHNvdXJjZSBjb2RlKSBvciBhIHZpZGVvIGluXG4gIC8vIGN5cHJlc3MvdmlkZW9zL3RpbWVycy5jeS50cy5tcDQsIHNvIHdlIHRha2UgdGhlIGludGVyc2VjdGlvbiBiZXR3ZWVuIHNwZWNQYXR0ZXJuXG4gIC8vIGFuZCAtLXNwZWMuXG4gIGlmICghXy5pc0VxdWFsKHNwZWNQYXR0ZXJuLCBjb25maWdTcGVjUGF0dGVybikpIHtcbiAgICBjb25zdCBkZWZhdWx0U3BlY0Fic29sdXRlUGF0aHMgPSBhd2FpdCBnZXRGaWxlc0J5R2xvYihcbiAgICAgIHByb2plY3RSb290LFxuICAgICAgY29uZmlnU3BlY1BhdHRlcm4sXG4gICAgICB7XG4gICAgICAgIGFic29sdXRlOiB0cnVlLFxuICAgICAgICBpZ25vcmU6IFsuLi5leGNsdWRlU3BlY1BhdHRlcm4sIC4uLmFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJuXSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgc3BlY0Fic29sdXRlUGF0aHMgPSBfLmludGVyc2VjdGlvbihcbiAgICAgIHNwZWNBYnNvbHV0ZVBhdGhzLFxuICAgICAgZGVmYXVsdFNwZWNBYnNvbHV0ZVBhdGhzXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkU3BlY3Moe1xuICAgIHByb2plY3RSb290LFxuICAgIHRlc3RpbmdUeXBlLFxuICAgIHNwZWNBYnNvbHV0ZVBhdGhzLFxuICAgIHNwZWNQYXR0ZXJuLFxuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RmlsZXNCeUdsb2IoXG4gIHByb2plY3RSb290OiBzdHJpbmcsXG4gIGdsb2I6IEdsb2JQYXR0ZXJuLFxuICBnbG9iT3B0aW9uczogR2xvYmJ5T3B0aW9uc1xuKSB7XG4gIGNvbnN0IHdvcmtpbmdEaXJlY3RvcnlQcmVmaXggPSBwYXRoLmpvaW4ocHJvamVjdFJvb3QsIHBhdGguc2VwKTtcbiAgY29uc3QgZ2xvYnMgPSAoW10gYXMgc3RyaW5nW10pXG4gICAgLmNvbmNhdChnbG9iKVxuICAgIC5tYXAoKGdsb2JQYXR0ZXJuKSA9PlxuICAgICAgZ2xvYlBhdHRlcm4uc3RhcnRzV2l0aChcIi4vXCIpID8gZ2xvYlBhdHRlcm4ucmVwbGFjZShcIi4vXCIsIFwiXCIpIDogZ2xvYlBhdHRlcm5cbiAgICApXG4gICAgLm1hcCgoZ2xvYlBhdHRlcm4pID0+IHtcbiAgICAgIC8vIElmIHRoZSBwYXR0ZXJuIGluY2x1ZGVzIHRoZSB3b3JraW5nIGRpcmVjdG9yeSwgd2Ugc3RyaXAgaXQgZnJvbSB0aGUgcGF0dGVybi5cbiAgICAgIC8vIFRoZSB3b3JraW5nIGRpcmVjdG9yeSBwYXRoIG1heSBpbmNsdWRlIGNoYXJhY3RlcnMgdGhhdCBjb25mbGljdCB3aXRoIGdsb2JcbiAgICAgIC8vIHN5bnRheCAoYnJhY2tldHMsIHBhcmVudGhlc2VzLCBldGMuKSBhbmQgY2F1c2Ugb3VyIHNlYXJjaGVzIHRvIGluYWR2ZXJ0ZW50bHkgZmFpbC5cbiAgICAgIC8vIFdlIHNjb3BlIG91ciBzZWFyY2ggdG8gdGhlIHdvcmtpbmcgZGlyZWN0b3J5IHVzaW5nIHRoZSBgY3dkYCBnbG9iYnkgb3B0aW9uLlxuICAgICAgaWYgKGdsb2JQYXR0ZXJuLnN0YXJ0c1dpdGgod29ya2luZ0RpcmVjdG9yeVByZWZpeCkpIHtcbiAgICAgICAgcmV0dXJuIGdsb2JQYXR0ZXJuLnJlcGxhY2Uod29ya2luZ0RpcmVjdG9yeVByZWZpeCwgXCJcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnbG9iUGF0dGVybjtcbiAgICB9KTtcblxuICBpZiAob3MucGxhdGZvcm0oKSA9PT0gXCJ3aW4zMlwiKSB7XG4gICAgLy8gZ2xvYmJ5IGNhbid0IHdvcmsgd2l0aCBiYWNrd2FyZHMgc2xhc2hlc1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvZ2xvYmJ5L2lzc3Vlcy8xNzlcbiAgICBkZWJ1ZyhcInVwZGF0aW5nIGdsb2IgcGF0dGVybnMgdG8gUE9TSVhcIik7XG4gICAgZm9yIChjb25zdCBpIGluIGdsb2JzKSB7XG4gICAgICBjb25zdCBjdXIgPSBnbG9ic1tpXTtcblxuICAgICAgaWYgKCFjdXIpIHRocm93IG5ldyBFcnJvcihcInVuZGVmaW5lZCBnbG9iIHJlY2VpdmVkXCIpO1xuXG4gICAgICBnbG9ic1tpXSA9IHRvUG9zaXgoY3VyKTtcbiAgICB9XG4gIH1cblxuICB0cnkge1xuICAgIGRlYnVnKFwiZ2xvYmJpbmcgcGF0dGVybihzKTogJW9cIiwgZ2xvYnMpO1xuICAgIGRlYnVnKFwid2l0aGluIGRpcmVjdG9yeTogJXNcIiwgcHJvamVjdFJvb3QpO1xuXG4gICAgcmV0dXJuIG1hdGNoR2xvYnMoZ2xvYnMsIHtcbiAgICAgIG9ubHlGaWxlczogdHJ1ZSxcbiAgICAgIGFic29sdXRlOiB0cnVlLFxuICAgICAgY3dkOiBwcm9qZWN0Um9vdCxcbiAgICAgIC4uLmdsb2JPcHRpb25zLFxuICAgICAgaWdub3JlOiAoZ2xvYk9wdGlvbnM/Lmlnbm9yZSA/PyBbXSkuY29uY2F0KFwiKiovbm9kZV9tb2R1bGVzLyoqXCIpLFxuICAgIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZGVidWcoXCJlcnJvciBpbiBnZXRGaWxlc0J5R2xvYiAlb1wiLCBlKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuY29uc3QgbWF0Y2hHbG9icyA9IGFzeW5jIChnbG9iczogR2xvYlBhdHRlcm4sIGdsb2JieU9wdGlvbnM6IEdsb2JieU9wdGlvbnMpID0+IHtcbiAgcmV0dXJuIGF3YWl0IGdsb2JieShnbG9icywgZ2xvYmJ5T3B0aW9ucyk7XG59O1xuXG5pbnRlcmZhY2UgTWF0Y2hlZFNwZWNzIHtcbiAgcHJvamVjdFJvb3Q6IHN0cmluZztcbiAgdGVzdGluZ1R5cGU6IFRlc3RpbmdUeXBlO1xuICBzcGVjQWJzb2x1dGVQYXRoczogc3RyaW5nW107XG4gIHNwZWNQYXR0ZXJuOiBzdHJpbmcgfCBzdHJpbmdbXTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hlZFNwZWNzKHtcbiAgcHJvamVjdFJvb3QsXG4gIHRlc3RpbmdUeXBlLFxuICBzcGVjQWJzb2x1dGVQYXRocyxcbn06IE1hdGNoZWRTcGVjcykge1xuICBkZWJ1ZyhcImZvdW5kIHNwZWNzICVvXCIsIHNwZWNBYnNvbHV0ZVBhdGhzKTtcblxuICBsZXQgY29tbW9uUm9vdCA9IFwiXCI7XG5cbiAgaWYgKHNwZWNBYnNvbHV0ZVBhdGhzLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbW1vblJvb3QgPSBwYXRoLmRpcm5hbWUoc3BlY0Fic29sdXRlUGF0aHNbMF0pO1xuICB9IGVsc2Uge1xuICAgIGNvbW1vblJvb3QgPSBjb21tb25QYXRoUHJlZml4KHNwZWNBYnNvbHV0ZVBhdGhzKTtcbiAgfVxuXG4gIHJldHVybiBzcGVjQWJzb2x1dGVQYXRocy5tYXAoKGFic29sdXRlKSA9PlxuICAgIHRyYW5zZm9ybVNwZWMoe1xuICAgICAgcHJvamVjdFJvb3QsXG4gICAgICBhYnNvbHV0ZSxcbiAgICAgIHRlc3RpbmdUeXBlLFxuICAgICAgY29tbW9uUm9vdCxcbiAgICAgIHBsYXRmb3JtOiBvcy5wbGF0Zm9ybSgpLFxuICAgICAgc2VwOiBwYXRoLnNlcCxcbiAgICB9KVxuICApO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zZm9ybVNwZWMge1xuICBwcm9qZWN0Um9vdDogc3RyaW5nO1xuICBhYnNvbHV0ZTogc3RyaW5nO1xuICB0ZXN0aW5nVHlwZTogVGVzdGluZ1R5cGU7XG4gIGNvbW1vblJvb3Q6IHN0cmluZztcbiAgcGxhdGZvcm06IE5vZGVKUy5QbGF0Zm9ybTtcbiAgc2VwOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVNwZWMoe1xuICBwcm9qZWN0Um9vdCxcbiAgYWJzb2x1dGUsXG4gIHRlc3RpbmdUeXBlLFxuICBjb21tb25Sb290LFxuICBwbGF0Zm9ybSxcbiAgc2VwLFxufTogVHJhbnNmb3JtU3BlYykge1xuICBpZiAocGxhdGZvcm0gPT09IFwid2luMzJcIikge1xuICAgIGFic29sdXRlID0gdG9Qb3NpeChhYnNvbHV0ZSwgc2VwKTtcbiAgICBwcm9qZWN0Um9vdCA9IHRvUG9zaXgocHJvamVjdFJvb3QsIHNlcCk7XG4gIH1cblxuICBjb25zdCByZWxhdGl2ZSA9IHBhdGgucmVsYXRpdmUocHJvamVjdFJvb3QsIGFic29sdXRlKTtcbiAgY29uc3QgcGFyc2VkRmlsZSA9IHBhdGgucGFyc2UoYWJzb2x1dGUpO1xuICBjb25zdCBmaWxlRXh0ZW5zaW9uID0gcGF0aC5leHRuYW1lKGFic29sdXRlKTtcblxuICBjb25zdCBzcGVjRmlsZUV4dGVuc2lvbiA9XG4gICAgW1wiLnNwZWNcIiwgXCIudGVzdFwiLCBcIi1zcGVjXCIsIFwiLXRlc3RcIiwgXCIuY3lcIl1cbiAgICAgIC5tYXAoKGV4dCkgPT4gZXh0ICsgZmlsZUV4dGVuc2lvbilcbiAgICAgIC5maW5kKChleHQpID0+IGFic29sdXRlLmVuZHNXaXRoKGV4dCkpIHx8IGZpbGVFeHRlbnNpb247XG5cbiAgY29uc3QgcGFydHMgPSBhYnNvbHV0ZS5zcGxpdChwcm9qZWN0Um9vdCk7XG4gIGxldCBuYW1lID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMV0gfHwgXCJcIjtcblxuICBpZiAobmFtZS5zdGFydHNXaXRoKFwiL1wiKSkge1xuICAgIG5hbWUgPSBuYW1lLnNsaWNlKDEpO1xuICB9XG5cbiAgY29uc3QgTEVBRElOR19TTEFTSCA9IC9eXFwvfC9nO1xuICBjb25zdCByZWxhdGl2ZVRvQ29tbW9uUm9vdCA9IGFic29sdXRlXG4gICAgLnJlcGxhY2UoY29tbW9uUm9vdCwgXCJcIilcbiAgICAucmVwbGFjZShMRUFESU5HX1NMQVNILCBcIlwiKTtcblxuICByZXR1cm4ge1xuICAgIGZpbGVFeHRlbnNpb24sXG4gICAgYmFzZU5hbWU6IHBhcnNlZEZpbGUuYmFzZSxcbiAgICBmaWxlTmFtZTogcGFyc2VkRmlsZS5iYXNlLnJlcGxhY2Uoc3BlY0ZpbGVFeHRlbnNpb24sIFwiXCIpLFxuICAgIHNwZWNGaWxlRXh0ZW5zaW9uLFxuICAgIHJlbGF0aXZlVG9Db21tb25Sb290LFxuICAgIHNwZWNUeXBlOiAodGVzdGluZ1R5cGUgPT09IFwiY29tcG9uZW50XCJcbiAgICAgID8gXCJjb21wb25lbnRcIlxuICAgICAgOiBcImludGVncmF0aW9uXCIpIGFzIFNwZWNUeXBlLFxuICAgIG5hbWUsXG4gICAgcmVsYXRpdmUsXG4gICAgYWJzb2x1dGUsXG4gIH07XG59XG4iLCAiaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvQXJyYXkodmFsPzogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgcmV0dXJuIHZhbCA/ICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiID8gW3ZhbF0gOiB2YWwpIDogW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1Bvc2l4KGZpbGU6IHN0cmluZywgc2VwOiBzdHJpbmcgPSBwYXRoLnNlcCkge1xuICByZXR1cm4gZmlsZS5zcGxpdChzZXApLmpvaW4ocGF0aC5wb3NpeC5zZXApO1xufVxuIiwgImV4cG9ydCAqIGZyb20gXCIuL2NvbmZpZ1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vZXhlY3V0aW9uXCI7XG4iLCAiZXhwb3J0IGNsYXNzIENvbmZpZ1N0YXRlIHtcbiAgcHJpdmF0ZSBfY29uZmlnOiBDeXByZXNzLlJlc29sdmVkQ29uZmlnT3B0aW9ucyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgcHVibGljIHNldENvbmZpZyhjOiB0eXBlb2YgdGhpcy5fY29uZmlnKSB7XG4gICAgdGhpcy5fY29uZmlnID0gYztcbiAgfVxuICBwdWJsaWMgZ2V0Q29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBJbnN0YW5jZUlkIH0gZnJvbSBcImN5cHJlc3MtY2xvdWQvdHlwZXNcIjtcbmltcG9ydCB7IGVycm9yLCB3YXJuIH0gZnJvbSBcIi4uL2xvZ1wiO1xuaW1wb3J0IHsgZ2V0RmFpbGVkRmFrZUluc3RhbmNlUmVzdWx0IH0gZnJvbSBcIi4uL3Jlc3VsdHMvZW1wdHlcIjtcbmltcG9ydCB7IFNwZWNBZnRlclRvTW9kdWxlQVBJTWFwcGVyIH0gZnJvbSBcIi4uL3Jlc3VsdHMvbWFwUmVzdWx0XCI7XG5cbmltcG9ydCBEZWJ1ZyBmcm9tIFwiZGVidWdcIjtcbmltcG9ydCB7IEN5cHJlc3NUeXBlcywgU3RhbmRhcmQgfSBmcm9tIFwiLi4vY3lwcmVzcy50eXBlc1wiO1xuaW1wb3J0IHsgQ29uZmlnU3RhdGUgfSBmcm9tIFwiLi9jb25maWdcIjtcbmNvbnN0IGRlYnVnID0gRGVidWcoXCJjdXJyZW50czpzdGF0ZVwiKTtcblxudHlwZSBJbnN0YW5jZUV4ZWN1dGlvblN0YXRlID0ge1xuICBpbnN0YW5jZUlkOiBJbnN0YW5jZUlkO1xuICBzcGVjOiBzdHJpbmc7XG4gIG91dHB1dD86IHN0cmluZztcbiAgc3BlY0JlZm9yZT86IERhdGU7XG4gIGNyZWF0ZWRBdDogRGF0ZTtcbiAgcnVuUmVzdWx0cz86IFN0YW5kYXJkLk1vZHVsZUFQSS5Db21wbGV0ZWRSZXN1bHQ7XG4gIHJ1blJlc3VsdHNSZXBvcnRlZEF0PzogRGF0ZTtcbiAgc3BlY0FmdGVyPzogRGF0ZTtcbiAgc3BlY0FmdGVyUmVzdWx0cz86IFN0YW5kYXJkLlNwZWNBZnRlci5QYXlsb2FkO1xuICByZXBvcnRTdGFydGVkQXQ/OiBEYXRlO1xuICBjb3ZlcmFnZUZpbGVQYXRoPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgRXhlY3V0aW9uU3RhdGVTY3JlZW5zaG90ID1cbiAgQ3lwcmVzc1R5cGVzLkV2ZW50UGF5bG9hZC5TY3JlZW5zaG90QWZ0ZXIgJiB7XG4gICAgdGVzdElkPzogc3RyaW5nO1xuICAgIHRlc3RBdHRlbXB0SW5kZXg6IG51bWJlcjtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICB9O1xuZXhwb3J0IHR5cGUgRXhlY3V0aW9uU3RhdGVUZXN0QXR0ZW1wdCA9IEN5cHJlc3NUeXBlcy5FdmVudFBheWxvYWQuVGVzdEFmdGVyO1xuXG5leHBvcnQgY2xhc3MgRXhlY3V0aW9uU3RhdGUge1xuICBwcml2YXRlIHdhcm5pbmdzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoKTtcbiAgcHJpdmF0ZSBhdHRlbXB0c0RhdGE6IEV4ZWN1dGlvblN0YXRlVGVzdEF0dGVtcHRbXSA9IFtdO1xuICBwcml2YXRlIHNjcmVlbnNob3RzRGF0YTogRXhlY3V0aW9uU3RhdGVTY3JlZW5zaG90W10gPSBbXTtcbiAgcHJpdmF0ZSBjdXJyZW50VGVzdElEPzogc3RyaW5nO1xuICBwcml2YXRlIHN0YXRlOiBSZWNvcmQ8SW5zdGFuY2VJZCwgSW5zdGFuY2VFeGVjdXRpb25TdGF0ZT4gPSB7fTtcblxuICBwdWJsaWMgZ2V0V2FybmluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMud2FybmluZ3M7XG4gIH1cblxuICBwdWJsaWMgYWRkV2FybmluZyh3YXJuaW5nOiBzdHJpbmcpIHtcbiAgICB0aGlzLndhcm5pbmdzLmFkZCh3YXJuaW5nKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSZXN1bHRzKFxuICAgIGNvbmZpZ1N0YXRlOiBDb25maWdTdGF0ZVxuICApOiBTdGFuZGFyZC5Nb2R1bGVBUEkuQ29tcGxldGVkUmVzdWx0W10ge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuc3RhdGUpLm1hcCgoaSkgPT5cbiAgICAgIHRoaXMuZ2V0SW5zdGFuY2VSZXN1bHRzKGNvbmZpZ1N0YXRlLCBpLmluc3RhbmNlSWQpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbnN0YW5jZShpbnN0YW5jZUlkOiBJbnN0YW5jZUlkKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVbaW5zdGFuY2VJZF07XG4gIH1cblxuICBwdWJsaWMgZ2V0U3BlYyhzcGVjOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLnN0YXRlKS5maW5kKChpKSA9PiBpLnNwZWMgPT09IHNwZWMpO1xuICB9XG5cbiAgcHVibGljIGluaXRJbnN0YW5jZSh7XG4gICAgaW5zdGFuY2VJZCxcbiAgICBzcGVjLFxuICB9OiB7XG4gICAgaW5zdGFuY2VJZDogSW5zdGFuY2VJZDtcbiAgICBzcGVjOiBzdHJpbmc7XG4gIH0pIHtcbiAgICBkZWJ1ZygnSW5pdCBleGVjdXRpb24gc3RhdGUgZm9yIFwiJXNcIicsIHNwZWMpO1xuICAgIHRoaXMuc3RhdGVbaW5zdGFuY2VJZF0gPSB7XG4gICAgICBpbnN0YW5jZUlkLFxuICAgICAgc3BlYyxcbiAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHNldFNwZWNCZWZvcmUoc3BlYzogc3RyaW5nKSB7XG4gICAgY29uc3QgaSA9IHRoaXMuZ2V0U3BlYyhzcGVjKTtcbiAgICBpZiAoIWkpIHtcbiAgICAgIHdhcm4oJ0Nhbm5vdCBmaW5kIGV4ZWN1dGlvbiBzdGF0ZSBmb3Igc3BlYyBcIiVzXCInLCBzcGVjKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpLnNwZWNCZWZvcmUgPSBuZXcgRGF0ZSgpO1xuICB9XG5cbiAgcHVibGljIHNldFNwZWNDb3ZlcmFnZShzcGVjOiBzdHJpbmcsIGNvdmVyYWdlRmlsZVBhdGg6IHN0cmluZykge1xuICAgIGNvbnN0IGkgPSB0aGlzLmdldFNwZWMoc3BlYyk7XG4gICAgaWYgKCFpKSB7XG4gICAgICB3YXJuKCdDYW5ub3QgZmluZCBleGVjdXRpb24gc3RhdGUgZm9yIHNwZWMgXCIlc1wiJywgc3BlYyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGVidWcoXCJFeHBlcmltZW50YWw6IGNvdmVyYWdlRmlsZVBhdGggd2FzIHNldFwiKTtcbiAgICBpLmNvdmVyYWdlRmlsZVBhdGggPSBjb3ZlcmFnZUZpbGVQYXRoO1xuICB9XG5cbiAgcHVibGljIHNldFNwZWNBZnRlcihzcGVjOiBzdHJpbmcsIHJlc3VsdHM6IFN0YW5kYXJkLlNwZWNBZnRlci5QYXlsb2FkKSB7XG4gICAgY29uc3QgaSA9IHRoaXMuZ2V0U3BlYyhzcGVjKTtcbiAgICBpZiAoIWkpIHtcbiAgICAgIHdhcm4oJ0Nhbm5vdCBmaW5kIGV4ZWN1dGlvbiBzdGF0ZSBmb3Igc3BlYyBcIiVzXCInLCBzcGVjKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaS5zcGVjQWZ0ZXIgPSBuZXcgRGF0ZSgpO1xuICAgIGkuc3BlY0FmdGVyUmVzdWx0cyA9IHJlc3VsdHM7XG4gIH1cblxuICBwdWJsaWMgc2V0U3BlY091dHB1dChzcGVjOiBzdHJpbmcsIG91dHB1dDogc3RyaW5nKSB7XG4gICAgY29uc3QgaSA9IHRoaXMuZ2V0U3BlYyhzcGVjKTtcbiAgICBpZiAoIWkpIHtcbiAgICAgIHdhcm4oJ0Nhbm5vdCBmaW5kIGV4ZWN1dGlvbiBzdGF0ZSBmb3Igc3BlYyBcIiVzXCInLCBzcGVjKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRJbnN0YW5jZU91dHB1dChpLmluc3RhbmNlSWQsIG91dHB1dCk7XG4gIH1cblxuICBwdWJsaWMgc2V0SW5zdGFuY2VPdXRwdXQoaW5zdGFuY2VJZDogc3RyaW5nLCBvdXRwdXQ6IHN0cmluZykge1xuICAgIGNvbnN0IGkgPSB0aGlzLnN0YXRlW2luc3RhbmNlSWRdO1xuICAgIGlmICghaSkge1xuICAgICAgd2FybignQ2Fubm90IGZpbmQgZXhlY3V0aW9uIHN0YXRlIGZvciBpbnN0YW5jZSBcIiVzXCInLCBpbnN0YW5jZUlkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGkub3V0cHV0KSB7XG4gICAgICBkZWJ1ZygnSW5zdGFuY2UgXCIlc1wiIGFscmVhZHkgaGFzIG91dHB1dCcsIGluc3RhbmNlSWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpLm91dHB1dCA9IG91dHB1dDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRJbnN0YW5jZVJlc3VsdChcbiAgICBpbnN0YW5jZUlkOiBzdHJpbmcsXG4gICAgcnVuUmVzdWx0czogU3RhbmRhcmQuTW9kdWxlQVBJLkNvbXBsZXRlZFJlc3VsdFxuICApIHtcbiAgICBjb25zdCBpID0gdGhpcy5zdGF0ZVtpbnN0YW5jZUlkXTtcbiAgICBpZiAoIWkpIHtcbiAgICAgIHdhcm4oJ0Nhbm5vdCBmaW5kIGV4ZWN1dGlvbiBzdGF0ZSBmb3IgaW5zdGFuY2UgXCIlc1wiJywgaW5zdGFuY2VJZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGkucnVuUmVzdWx0cyA9IHtcbiAgICAgIC4uLnJ1blJlc3VsdHMsXG4gICAgICBzdGF0dXM6IFwiZmluaXNoZWRcIixcbiAgICB9O1xuICAgIGkucnVuUmVzdWx0c1JlcG9ydGVkQXQgPSBuZXcgRGF0ZSgpO1xuICB9XG5cbiAgcHVibGljIGdldEluc3RhbmNlUmVzdWx0cyhcbiAgICBjb25maWdTdGF0ZTogQ29uZmlnU3RhdGUsXG4gICAgaW5zdGFuY2VJZDogc3RyaW5nXG4gICk6IFN0YW5kYXJkLk1vZHVsZUFQSS5Db21wbGV0ZWRSZXN1bHQge1xuICAgIGNvbnN0IGkgPSB0aGlzLmdldEluc3RhbmNlKGluc3RhbmNlSWQpO1xuXG4gICAgaWYgKCFpKSB7XG4gICAgICBlcnJvcignQ2Fubm90IGZpbmQgZXhlY3V0aW9uIHN0YXRlIGZvciBpbnN0YW5jZSBcIiVzXCInLCBpbnN0YW5jZUlkKTtcblxuICAgICAgcmV0dXJuIGdldEZhaWxlZEZha2VJbnN0YW5jZVJlc3VsdChjb25maWdTdGF0ZSwge1xuICAgICAgICBzcGVjczogW1widW5rbm93blwiXSxcbiAgICAgICAgZXJyb3I6IGBbY3VycmVudHNdIEVycm9yIHdoaWxlIHByb2Nlc3NpbmcgY3lwcmVzcyByZXN1bHRzIGZvciBpbnN0YW5jZSAke2luc3RhbmNlSWR9LiBTZWUgdGhlIGNvbnNvbGUgb3V0cHV0IGZvciBkZXRhaWxzLmAsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyB1c2Ugc3BlYzphZnRlciByZXN1bHRzIC0gaXQgY2FuIGJlY29tZSBhdmFpbGFibGUgYmVmb3JlIHJ1biByZXN1bHRzXG4gICAgaWYgKGkuc3BlY0FmdGVyUmVzdWx0cykge1xuICAgICAgZGVidWcoJ1VzaW5nIHNwZWM6YWZ0ZXIgcmVzdWx0cyBmb3IgJXMgXCIlc1wiJywgaW5zdGFuY2VJZCwgaS5zcGVjKTtcbiAgICAgIHJldHVybiBTcGVjQWZ0ZXJUb01vZHVsZUFQSU1hcHBlci5iYWNrZmlsbEV4Y2VwdGlvbihcbiAgICAgICAgU3BlY0FmdGVyVG9Nb2R1bGVBUElNYXBwZXIuY29udmVydChpLnNwZWNBZnRlclJlc3VsdHMsIGNvbmZpZ1N0YXRlKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoaS5ydW5SZXN1bHRzKSB7XG4gICAgICBkZWJ1ZygnVXNpbmcgcnVuUmVzdWx0cyBmb3IgJXMgXCIlc1wiJywgaW5zdGFuY2VJZCwgaS5zcGVjKTtcbiAgICAgIHJldHVybiBTcGVjQWZ0ZXJUb01vZHVsZUFQSU1hcHBlci5iYWNrZmlsbEV4Y2VwdGlvbihpLnJ1blJlc3VsdHMpO1xuICAgIH1cblxuICAgIGRlYnVnKCdObyByZXN1bHRzIGRldGVjdGVkIGZvciBcIiVzXCInLCBpLnNwZWMpO1xuICAgIHJldHVybiBnZXRGYWlsZWRGYWtlSW5zdGFuY2VSZXN1bHQoY29uZmlnU3RhdGUsIHtcbiAgICAgIHNwZWNzOiBbaS5zcGVjXSxcbiAgICAgIGVycm9yOiBgTm8gcmVzdWx0cyBkZXRlY3RlZCBmb3IgdGhlIHNwZWMgZmlsZS4gVGhhdCB1c3VhbGx5IGhhcHBlbnMgYmVjYXVzZSBvZiBjeXByZXNzIGNyYXNoLiBTZWUgdGhlIGNvbnNvbGUgb3V0cHV0IGZvciBkZXRhaWxzLmAsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYWRkQXR0ZW1wdHNEYXRhKGF0dGVtcHREZXRhaWxzOiBDeXByZXNzVHlwZXMuRXZlbnRQYXlsb2FkLlRlc3RBZnRlcikge1xuICAgIHRoaXMuYXR0ZW1wdHNEYXRhLnB1c2goYXR0ZW1wdERldGFpbHMpO1xuICB9XG5cbiAgcHVibGljIGdldEF0dGVtcHRzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRlbXB0c0RhdGE7XG4gIH1cblxuICBwdWJsaWMgYWRkU2NyZWVuc2hvdHNEYXRhKHNjcmVlbnNob3RzRGF0YTogRXhlY3V0aW9uU3RhdGVTY3JlZW5zaG90KSB7XG4gICAgdGhpcy5zY3JlZW5zaG90c0RhdGEucHVzaChzY3JlZW5zaG90c0RhdGEpO1xuICB9XG5cbiAgcHVibGljIGdldFNjcmVlbnNob3RzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5zY3JlZW5zaG90c0RhdGE7XG4gIH1cblxuICBwdWJsaWMgc2V0Q3VycmVudFRlc3RJRCh0ZXN0SUQ6IHN0cmluZykge1xuICAgIHRoaXMuY3VycmVudFRlc3RJRCA9IHRlc3RJRDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDdXJyZW50VGVzdElEKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRUZXN0SUQ7XG4gIH1cbn1cbiIsICIvKipcbiAqIE1hcCBNb2R1bGUgQVBJIHJlc3VsdHMgdG8gYWZ0ZXI6c3BlYyByZXN1bHRzXG4gKi9cblxuaW1wb3J0IHsgU3RhbmRhcmQgfSBmcm9tIFwiLi4vY3lwcmVzcy50eXBlc1wiO1xuaW1wb3J0IHsgQ29uZmlnU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGVcIjtcblxuZXhwb3J0IGNsYXNzIFNwZWNBZnRlclRvTW9kdWxlQVBJTWFwcGVyIHtcbiAgc3RhdGljIGdldFRlc3RBdHRlbXB0KFxuICAgIGF0dGVtcHQ6IFN0YW5kYXJkLlNwZWNBZnRlci5UZXN0QXR0ZW1wdCxcbiAgICBzY3JlZW5zaG90czogU3RhbmRhcmQuU3BlY0FmdGVyLlBheWxvYWRbXCJzY3JlZW5zaG90c1wiXVxuICApOiBTdGFuZGFyZC5Nb2R1bGVBUEkuVGVzdEF0dGVtcHQge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5hdHRlbXB0LFxuICAgICAgZHVyYXRpb246IGF0dGVtcHQud2FsbENsb2NrRHVyYXRpb24sXG4gICAgICBzdGFydGVkQXQ6IGF0dGVtcHQud2FsbENsb2NrU3RhcnRlZEF0LFxuICAgICAgc2NyZWVuc2hvdHMsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRUZXN0KFxuICAgIHQ6IFN0YW5kYXJkLlNwZWNBZnRlci5UZXN0LFxuICAgIHNjcmVlbnNob3RzOiBTdGFuZGFyZC5TcGVjQWZ0ZXIuUGF5bG9hZFtcInNjcmVlbnNob3RzXCJdXG4gICk6IFN0YW5kYXJkLk1vZHVsZUFQSS5UZXN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4udCxcbiAgICAgIGF0dGVtcHRzOiB0LmF0dGVtcHRzLm1hcCgoYSwgaSkgPT5cbiAgICAgICAgU3BlY0FmdGVyVG9Nb2R1bGVBUElNYXBwZXIuZ2V0VGVzdEF0dGVtcHQoXG4gICAgICAgICAgYSxcbiAgICAgICAgICBzY3JlZW5zaG90cy5maWx0ZXIoXG4gICAgICAgICAgICAocykgPT4gcy50ZXN0SWQgPT09IHQudGVzdElkICYmIHMudGVzdEF0dGVtcHRJbmRleCA9PT0gaVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGNvbnZlcnQoXG4gICAgc3BlY0FmdGVyUmVzdWx0OiBTdGFuZGFyZC5TcGVjQWZ0ZXIuUGF5bG9hZCxcbiAgICBjb25maWdTdGF0ZTogQ29uZmlnU3RhdGVcbiAgKTogU3RhbmRhcmQuTW9kdWxlQVBJLkNvbXBsZXRlZFJlc3VsdCB7XG4gICAgY29uc3Qgc3RhdHMgPSB7XG4gICAgICBkdXJhdGlvbjogc3BlY0FmdGVyUmVzdWx0LnN0YXRzLndhbGxDbG9ja0R1cmF0aW9uLFxuICAgICAgZW5kZWRBdDogc3BlY0FmdGVyUmVzdWx0LnN0YXRzLndhbGxDbG9ja0VuZGVkQXQsXG4gICAgICBzdGFydGVkQXQ6IHNwZWNBZnRlclJlc3VsdC5zdGF0cy53YWxsQ2xvY2tTdGFydGVkQXQsXG4gICAgICBmYWlsdXJlczogc3BlY0FmdGVyUmVzdWx0LnN0YXRzLmZhaWx1cmVzID8/IDAsXG4gICAgICBwYXNzZXM6IHNwZWNBZnRlclJlc3VsdC5zdGF0cy5wYXNzZXMgPz8gMCxcbiAgICAgIHBlbmRpbmc6IHNwZWNBZnRlclJlc3VsdC5zdGF0cy5wZW5kaW5nID8/IDAsXG4gICAgICBza2lwcGVkOiBzcGVjQWZ0ZXJSZXN1bHQuc3RhdHMuc2tpcHBlZCA/PyAwLFxuICAgICAgc3VpdGVzOiBzcGVjQWZ0ZXJSZXN1bHQuc3RhdHMuc3VpdGVzID8/IDAsXG4gICAgICB0ZXN0czogc3BlY0FmdGVyUmVzdWx0LnN0YXRzLnRlc3RzID8/IDAsXG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzOiBcImZpbmlzaGVkXCIsXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb25maWc6IGNvbmZpZ1N0YXRlLmdldENvbmZpZygpLFxuICAgICAgdG90YWxEdXJhdGlvbjogc3RhdHMuZHVyYXRpb24sXG4gICAgICB0b3RhbFN1aXRlczogc3RhdHMuc3VpdGVzLFxuICAgICAgdG90YWxUZXN0czogc3RhdHMudGVzdHMsXG4gICAgICB0b3RhbEZhaWxlZDogc3RhdHMuZmFpbHVyZXMsXG4gICAgICB0b3RhbFBhc3NlZDogc3RhdHMucGFzc2VzLFxuICAgICAgdG90YWxQZW5kaW5nOiBzdGF0cy5wZW5kaW5nLFxuICAgICAgdG90YWxTa2lwcGVkOiBzdGF0cy5za2lwcGVkID8/IDAsXG4gICAgICBzdGFydGVkVGVzdHNBdDogc3RhdHMuc3RhcnRlZEF0LFxuICAgICAgZW5kZWRUZXN0c0F0OiBzdGF0cy5lbmRlZEF0LFxuICAgICAgcnVuczogW1xuICAgICAgICB7XG4gICAgICAgICAgc3RhdHMsXG4gICAgICAgICAgcmVwb3J0ZXI6IHNwZWNBZnRlclJlc3VsdC5yZXBvcnRlcixcbiAgICAgICAgICByZXBvcnRlclN0YXRzOiBzcGVjQWZ0ZXJSZXN1bHQucmVwb3J0ZXJTdGF0cyA/PyBudWxsLFxuICAgICAgICAgIHNwZWM6IHNwZWNBZnRlclJlc3VsdC5zcGVjLFxuICAgICAgICAgIGVycm9yOiBzcGVjQWZ0ZXJSZXN1bHQuZXJyb3IsXG4gICAgICAgICAgdmlkZW86IHNwZWNBZnRlclJlc3VsdC52aWRlbyxcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgc2hvdWxkVXBsb2FkVmlkZW86IHRydWUsIC8vIG5vdCByZWFsbHkgdXNlZFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAvLyB3cm9uZyB0eXBlZGVmIGZvciBDeXByZXNzQ29tbWFuZExpbmUuQ3lwcmVzc1J1blJlc3VsdFxuICAgICAgICAgIC8vIGFjdHVhbCBIb29rTmFtZSBpcyBcImJlZm9yZSBhbGxcIiB8IFwiYmVmb3JlIGVhY2hcIiB8IFwiYWZ0ZXIgYWxsXCIgfCBcImFmdGVyIGVhY2hcIlxuICAgICAgICAgIGhvb2tzOiBzcGVjQWZ0ZXJSZXN1bHQuaG9va3MsXG4gICAgICAgICAgdGVzdHM6IChzcGVjQWZ0ZXJSZXN1bHQudGVzdHMgPz8gW10pLm1hcCgodCkgPT5cbiAgICAgICAgICAgIFNwZWNBZnRlclRvTW9kdWxlQVBJTWFwcGVyLmdldFRlc3QodCwgc3BlY0FmdGVyUmVzdWx0LnNjcmVlbnNob3RzKVxuICAgICAgICAgICksXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgYmFja2ZpbGxFeGNlcHRpb24oXG4gICAgcmVzdWx0OiBTdGFuZGFyZC5Nb2R1bGVBUEkuQ29tcGxldGVkUmVzdWx0XG4gICk6IFN0YW5kYXJkLk1vZHVsZUFQSS5Db21wbGV0ZWRSZXN1bHQge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXN1bHQsXG4gICAgICBydW5zOiByZXN1bHQucnVucy5tYXAoU3BlY0FmdGVyVG9Nb2R1bGVBUElNYXBwZXIuYmFja2ZpbGxFeGNlcHRpb25SdW4pLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgYmFja2ZpbGxFeGNlcHRpb25SdW4ocnVuOiBTdGFuZGFyZC5Nb2R1bGVBUEkuUnVuKSB7XG4gICAgaWYgKCFydW4uZXJyb3IpIHtcbiAgICAgIHJldHVybiBydW47XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJ1bixcbiAgICAgIHRlc3RzOiBbZ2V0RmFrZVRlc3RGcm9tRXhjZXB0aW9uKHJ1bi5lcnJvciwgcnVuLnN0YXRzKV0sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGZha2UgdGVzdCBpdGVtIGZyb20gYW4gZXhjZXB0aW9uXG4gKlxuICogQHBhcmFtIGVycm9yXG4gKiBAcGFyYW0gc3RhdHNcbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIGdldEZha2VUZXN0RnJvbUV4Y2VwdGlvbihcbiAgZXJyb3I6IHN0cmluZyxcbiAgc3RhdHM6IFN0YW5kYXJkLk1vZHVsZUFQSS5SdW5bXCJzdGF0c1wiXVxuKTogU3RhbmRhcmQuTW9kdWxlQVBJLlRlc3Qge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBbXCJVbmtub3duXCJdLFxuICAgIGJvZHk6IFwiXCIsXG4gICAgZGlzcGxheUVycm9yOiBlcnJvci5zcGxpdChcIlxcblwiKVswXSxcbiAgICBzdGF0ZTogXCJmYWlsZWRcIixcbiAgICBhdHRlbXB0czogW1xuICAgICAge1xuICAgICAgICBzdGF0ZTogXCJmYWlsZWRcIixcbiAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgbmFtZTogXCJFcnJvclwiLFxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLnNwbGl0KFwiXFxuXCIpWzBdLFxuICAgICAgICAgIHN0YWNrOiBlcnJvcixcbiAgICAgICAgICBjb2RlRnJhbWU6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHNjcmVlbnNob3RzOiBbXSxcbiAgICAgICAgc3RhcnRlZEF0OiBzdGF0cy5zdGFydGVkQXQsXG4gICAgICAgIHZpZGVvVGltZXN0YW1wOiAwLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xufVxuIiwgImltcG9ydCBjaGFsayBmcm9tIFwiY2hhbGtcIjtcbmltcG9ydCBwbHVyIGZyb20gXCJwbHVyXCI7XG5pbXBvcnQgeyB3YXJuIH0gZnJvbSBcIi4vbG9nXCI7XG5pbXBvcnQgeyBFeGVjdXRpb25TdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludFdhcm5pbmdzKGV4ZWN1dGlvblN0YXRlOiBFeGVjdXRpb25TdGF0ZSkge1xuICBjb25zdCB3YXJuaW5ncyA9IEFycmF5LmZyb20oZXhlY3V0aW9uU3RhdGUuZ2V0V2FybmluZ3MoKSk7XG4gIGlmICh3YXJuaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgd2FybihcbiAgICAgIGAke3dhcm5pbmdzLmxlbmd0aH0gJHtwbHVyKFxuICAgICAgICBcIldhcm5pbmdcIixcbiAgICAgICAgd2FybmluZ3MubGVuZ3RoXG4gICAgICApfSBlbmNvdW50ZXJlZCBkdXJpbmcgdGhlIGV4ZWN1dGlvbjpcXG4ke3dhcm5pbmdzXG4gICAgICAgIC5tYXAoXG4gICAgICAgICAgKHcsIGkpID0+IGBcXG4ke2NoYWxrLnllbGxvdyhgWyR7aSArIDF9LyR7d2FybmluZ3MubGVuZ3RofV1gKX0gJHt3fWBcbiAgICAgICAgKVxuICAgICAgICAuam9pbihcIlxcblwiKX1gXG4gICAgKTtcbiAgfVxufVxuIiwgImV4cG9ydCAqIGZyb20gXCIuL2NsaVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vcHJvZ3JhbVwiO1xuIiwgImltcG9ydCB7IEN1cnJlbnRzUnVuUGFyYW1ldGVycywgVGVzdGluZ1R5cGUgfSBmcm9tIFwiY3lwcmVzcy1jbG91ZC90eXBlc1wiO1xuaW1wb3J0IERlYnVnIGZyb20gXCJkZWJ1Z1wiO1xuaW1wb3J0IHsgYWN0aXZhdGVEZWJ1ZyB9IGZyb20gXCIuLi8uLi9saWIvZGVidWdcIjtcbmltcG9ydCB7IHNhbml0aXplQW5kQ29udmVydE5lc3RlZEFyZ3MgfSBmcm9tIFwiLi9wYXJzZXJcIjtcbmltcG9ydCB7IHByb2dyYW0gfSBmcm9tIFwiLi9wcm9ncmFtXCI7XG5cbmNvbnN0IGRlYnVnID0gRGVidWcoXCJjdXJyZW50czpjbGlcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNMSU9wdGlvbnMoXG4gIF9wcm9ncmFtOiB0eXBlb2YgcHJvZ3JhbSA9IHByb2dyYW0sXG4gIC4uLmFyZ3M6IFBhcmFtZXRlcnM8dHlwZW9mIHByb2dyYW0ucGFyc2U+XG4pIHtcbiAgY29uc3Qgb3B0cyA9IF9wcm9ncmFtLnBhcnNlKC4uLmFyZ3MpLm9wdHMoKTtcblxuICBhY3RpdmF0ZURlYnVnKG9wdHMuY2xvdWREZWJ1Zyk7XG4gIGRlYnVnKFwicGFyc2VkIENMSSBmbGFncyAlb1wiLCBvcHRzKTtcblxuICBjb25zdCB7IGUyZSwgY29tcG9uZW50IH0gPSBvcHRzO1xuICBpZiAoZTJlICYmIGNvbXBvbmVudCkge1xuICAgIF9wcm9ncmFtLmVycm9yKFwiQ2Fubm90IHVzZSBib3RoIGUyZSBhbmQgY29tcG9uZW50IG9wdGlvbnNcIik7XG4gIH1cblxuICByZXR1cm4gZ2V0UnVuUGFyYW1ldGVyc0Zyb21DTEkob3B0cyk7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgQ0xJIG9wdGlvbnMgaW50byB0aGUgZm9ybWF0IHRoYXQgdGhlIGBydW5gIEFQSSBleHBlY3RzXG4gKlxuICogQHBhcmFtIGNsaU9wdGlvbnNcbiAqIEByZXR1cm5zIEN1cnJlbnRzIHJ1biBwYXJhbWV0ZXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSdW5QYXJhbWV0ZXJzRnJvbUNMSShcbiAgY2xpT3B0aW9uczogUmV0dXJuVHlwZTx0eXBlb2YgcHJvZ3JhbS5vcHRzPlxuKTogQ3VycmVudHNSdW5QYXJhbWV0ZXJzIHtcbiAgY29uc3QgeyBjb21wb25lbnQsIGUyZSwgLi4ucmVzdE9wdGlvbnMgfSA9IGNsaU9wdGlvbnM7XG4gIGNvbnN0IHRlc3RpbmdUeXBlOiBUZXN0aW5nVHlwZSA9IGNvbXBvbmVudCA/IFwiY29tcG9uZW50XCIgOiBcImUyZVwiO1xuXG4gIGNvbnN0IHJlc3VsdDogUGFydGlhbDxDdXJyZW50c1J1blBhcmFtZXRlcnM+ID0ge1xuICAgIC4uLnJlc3RPcHRpb25zLFxuICAgIGNvbmZpZzogc2FuaXRpemVBbmRDb252ZXJ0TmVzdGVkQXJncyhjbGlPcHRpb25zLmNvbmZpZywgXCJjb25maWdcIiksXG4gICAgZW52OiBzYW5pdGl6ZUFuZENvbnZlcnROZXN0ZWRBcmdzKGNsaU9wdGlvbnMuZW52LCBcImVudlwiKSxcbiAgICByZXBvcnRlck9wdGlvbnM6IHNhbml0aXplQW5kQ29udmVydE5lc3RlZEFyZ3MoXG4gICAgICBjbGlPcHRpb25zLnJlcG9ydGVyT3B0aW9ucyxcbiAgICAgIFwicmVwb3J0ZXJPcHRpb25zXCJcbiAgICApLFxuICAgIHRlc3RpbmdUeXBlLFxuICAgIHJlY29yZEtleTogY2xpT3B0aW9ucy5rZXksXG4gIH07XG5cbiAgZGVidWcoXCJwYXJzZWQgcnVuIHBhcmFtczogJW9cIiwgcmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsICIvKiEgQHByZXNlcnZlXG5cbiMjIyBNSVRcblxuUGFydHMgb2YgdGhpcyBjb2RlIHdhcyBjb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vY3lwcmVzcy1pby9jeXByZXNzIGFuZCBpcyBzdWJqZWN0IHRvIE1JVCBsaWNlbnNlLlxuXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIDIwMjIgQ3lwcmVzcy5pb1xuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuU09GVFdBUkUuXG4qL1xuXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJub2RlOmFzc2VydFwiO1xuaW1wb3J0IHsgZXJyb3IgfSBmcm9tIFwiLi4vLi4vbGliL2xvZ1wiO1xuXG5jb25zdCBuZXN0ZWRPYmplY3RzSW5DdXJseUJyYWNlc1JlID0gL1xceyguKz8pXFx9L2c7XG5jb25zdCBuZXN0ZWRBcnJheXNJblNxdWFyZUJyYWNrZXRzUmUgPSAvXFxbKC4rPylcXF0vZztcbmNvbnN0IGV2ZXJ5dGhpbmdBZnRlckZpcnN0RXF1YWxSZSA9IC89KC4qKS87XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jeXByZXNzLWlvL2N5cHJlc3MvYmxvYi9hZmI2NmFiYzcwMjNjZTcxZTI4OTNjYjZkZTY3ZDI0NzA2ZmY3YTFmL3BhY2thZ2VzL3NlcnZlci9saWIvdXRpbC9hcmdzLmpzI0wxNjJcbmV4cG9ydCBjb25zdCBzYW5pdGl6ZUFuZENvbnZlcnROZXN0ZWRBcmdzID0gPFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4oXG4gIHN0cjogdW5rbm93bixcbiAgYXJnTmFtZTogdW5rbm93blxuKTogVCB8IHVuZGVmaW5lZCA9PiB7XG4gIGlmICghc3RyKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGFzc2VydChfLmlzU3RyaW5nKGFyZ05hbWUpICYmIGFyZ05hbWUudHJpbSgpICE9PSBcIlwiKTtcblxuICB0cnkge1xuICAgIGlmICh0eXBlb2Ygc3RyID09PSBcIm9iamVjdFwiKSB7XG4gICAgICByZXR1cm4gc3RyIGFzIFQ7XG4gICAgfVxuXG4gICAgLy8gaWYgdGhpcyBpcyB2YWxpZCBKU09OIHRoZW4ganVzdFxuICAgIC8vIHBhcnNlIGl0IGFuZCBjYWxsIGl0IGEgZGF5XG4gICAgY29uc3QgcGFyc2VkID0gdHJ5SlNPTlBhcnNlKHN0ciBhcyBzdHJpbmcpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG5cbiAgICAvLyBpbnZhbGlkIEpTT04sIHNvIGFzc3VtZSBtaXhlZCB1c2FnZVxuICAgIC8vIGZpcnN0IGZpbmQgZm9vPXthOmIsYjpjfSBhbmQgYmFyPVsxLDIsM11cbiAgICAvLyBzeW50YXggYW5kIHR1cm4gdGhvc2UgaW50b1xuICAgIC8vIGZvbzogYTpifGI6Y1xuICAgIC8vIGJhcjogMXwyfDNcblxuICAgIHJldHVybiBfLmNoYWluKHN0cilcbiAgICAgIC5yZXBsYWNlKG5lc3RlZE9iamVjdHNJbkN1cmx5QnJhY2VzUmUsIGNvbW1hc1RvUGlwZXMpXG4gICAgICAucmVwbGFjZShuZXN0ZWRBcnJheXNJblNxdWFyZUJyYWNrZXRzUmUsIGNvbW1hc1RvUGlwZXMpXG4gICAgICAuc3BsaXQoXCIsXCIpXG4gICAgICAubWFwKChwYWlyKSA9PiB7XG4gICAgICAgIHJldHVybiBwYWlyLnNwbGl0KGV2ZXJ5dGhpbmdBZnRlckZpcnN0RXF1YWxSZSk7XG4gICAgICB9KVxuICAgICAgLmZyb21QYWlycygpXG4gICAgICAubWFwVmFsdWVzKEpTT05PckNvZXJjZSlcbiAgICAgIC52YWx1ZSgpIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IGFzIFQ7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGVycm9yKFwiY291bGQgbm90IHBhcnNlIENMSSBvcHRpb24gJyVzJyB2YWx1ZTogJXNcIiwgYXJnTmFtZSwgc3RyKTtcbiAgICBlcnJvcihcImVycm9yICVvXCIsIGVycik7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufTtcblxuY29uc3QgdHJ5SlNPTlBhcnNlID0gKHN0cjogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKSA9PT0gSW5maW5pdHkgPyBudWxsIDogSlNPTi5wYXJzZShzdHIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuY29uc3QgY29tbWFzVG9QaXBlcyA9IChtYXRjaDogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBtYXRjaC5zcGxpdChcIixcIikuam9pbihcInxcIik7XG59O1xuXG4vLyBmb289YmFyLHZlcnNpb249MS4yLjNcbmNvbnN0IHBpcGVzVG9Db21tYXMgPSAoc3RyOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIHN0ci5zcGxpdChcInxcIikuam9pbihcIixcIik7XG59O1xuXG5jb25zdCBKU09OT3JDb2VyY2UgPSAoc3RyOiBzdHJpbmcpID0+IHtcbiAgLy8gdmFsaWQgSlNPTj8gaG9ycmF5XG4gIGNvbnN0IHBhcnNlZCA9IHRyeUpTT05QYXJzZShzdHIpO1xuXG4gIGlmIChwYXJzZWQpIHtcbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgLy8gY29udmVydCBiYXJzIGJhY2sgdG8gY29tbWFzXG4gIHN0ciA9IHBpcGVzVG9Db21tYXMoc3RyKTtcblxuICAvLyB0cnkgdG8gcGFyc2UgYWdhaW4/XG4gIGNvbnN0IHBhcnNlZDIgPSB0cnlKU09OUGFyc2Uoc3RyKTtcblxuICBpZiAocGFyc2VkMikge1xuICAgIHJldHVybiBwYXJzZWQyO1xuICB9XG5cbiAgLy8gbnVwZSA6LShcbiAgcmV0dXJuIGNvZXJjZShzdHIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvZXJjZSA9ICh2YWx1ZTogYW55KSA9PiB7XG4gIGNvbnN0IG51bSA9IF8udG9OdW1iZXIodmFsdWUpO1xuXG4gIGlmIChfLmludm9rZShudW0sIFwidG9TdHJpbmdcIikgPT09IHZhbHVlKSB7XG4gICAgcmV0dXJuIG51bTtcbiAgfVxuXG4gIGNvbnN0IGJvb2wgPSB0b0Jvb2xlYW4odmFsdWUpO1xuXG4gIGlmIChfLmludm9rZShib29sLCBcInRvU3RyaW5nXCIpID09PSB2YWx1ZSkge1xuICAgIHJldHVybiBib29sO1xuICB9XG5cbiAgY29uc3Qgb2JqID0gdHJ5SlNPTlBhcnNlKHZhbHVlKTtcblxuICBpZiAob2JqICYmIHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgY29uc3QgYXJyID0gXy50b0FycmF5KHZhbHVlKTtcblxuICBpZiAoXy5pbnZva2UoYXJyLCBcInRvU3RyaW5nXCIpID09PSB2YWx1ZSkge1xuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5jb25zdCB0b0Jvb2xlYW4gPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgY2FzZSBcInRydWVcIjpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGNhc2UgXCJmYWxzZVwiOlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn07XG4iLCAiLy8gaHR0cHM6Ly9naXRodWIuY29tL2N1cnJlbnRzLWRldi9jeXByZXNzLWNsb3VkL2lzc3Vlcy83MVxuLy8ga2VlcCB0aGUgbG9jYWwgY29weSB0byBwcmV2ZW50IGZyb20gaW1wb3J0aW5nXG4vLyBjb21tYW5kZXIuanMgZnJvbSB0aGUgZ2xvYmFsIG5vZGVfbW9kdWxlc1xuaW1wb3J0IHsgZ2V0TGVnYWxOb3RpY2UgfSBmcm9tIFwiLi4vLi4vbGVnYWxcIjtcbmltcG9ydCB7IERlYnVnTW9kZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgQ29tbWFuZCwgT3B0aW9uIH0gZnJvbSBcIi4vQGNvbW1hbmRlci1qcy9leHRyYS10eXBpbmdzXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQcm9ncmFtID0gKGNvbW1hbmQ6IENvbW1hbmQgPSBuZXcgQ29tbWFuZCgpKSA9PlxuICBjb21tYW5kXG4gICAgLm5hbWUoXCJjeXByZXNzLWNsb3VkXCIpXG4gICAgLmRlc2NyaXB0aW9uKFxuICAgICAgYFxuUnVuIEN5cHJlc3MgdGVzdHMgb24gQ0kgdXNpbmcgaHR0cHM6Ly9jdXJyZW50cy5kZXYgb3IgaHR0cHM6Ly9zb3JyeS1jeXByZXNzLmRldiBhcyBhbiBvcmNoZXN0cmF0aW9uIGFuZCByZXBvcnRpbmcgc2VydmljZVxuXG4ke2dldExlZ2FsTm90aWNlKCl9XG4gICAgICBgXG4gICAgKVxuICAgIC5vcHRpb24oXG4gICAgICBcIi1iLCAtLWJyb3dzZXIgPGJyb3dzZXItbmFtZS1vci1wYXRoPlwiLFxuICAgICAgXCJydW5zIEN5cHJlc3MgaW4gdGhlIGJyb3dzZXIgd2l0aCB0aGUgZ2l2ZW4gbmFtZTsgaWYgYSBmaWxlc3lzdGVtIHBhdGggaXMgc3VwcGxpZWQsIEN5cHJlc3Mgd2lsbCBhdHRlbXB0IHRvIHVzZSB0aGUgYnJvd3NlciBhdCB0aGF0IHBhdGhcIlxuICAgIClcbiAgICAub3B0aW9uKFxuICAgICAgXCItLWNpLWJ1aWxkLWlkIDxpZD5cIixcbiAgICAgIFwidGhlIHVuaXF1ZSBpZGVudGlmaWVyIGZvciBhIHJ1biwgdGhpcyB2YWx1ZSBpcyBhdXRvbWF0aWNhbGx5IGRldGVjdGVkIGZvciBtb3N0IENJIHByb3ZpZGVyc1wiXG4gICAgKVxuICAgIC5hZGRPcHRpb24oXG4gICAgICBuZXcgT3B0aW9uKFwiLS1jb21wb25lbnRcIiwgXCJydW5zIEN5cHJlc3MgY29tcG9uZW50IHRlc3RcIilcbiAgICAgICAgLmRlZmF1bHQoZmFsc2UpXG4gICAgICAgIC5pbXBsaWVzKHtcbiAgICAgICAgICBlMmU6IGZhbHNlLFxuICAgICAgICB9KVxuICAgIClcbiAgICAub3B0aW9uKFxuICAgICAgXCItYywgLS1jb25maWcgPGNvbmZpZz5cIixcbiAgICAgIFwic2V0cyBDeXByZXNzIGNvbmZpZ3VyYXRpb24gdmFsdWVzLiBzZXBhcmF0ZSBtdWx0aXBsZSB2YWx1ZXMgd2l0aCBhIGNvbW1hLiBvdmVycmlkZXMgYW55IHZhbHVlIGluIGN5cHJlc3MuY29uZmlnLntqcyx0cyxtanMsY2pzfVwiXG4gICAgKVxuICAgIC5vcHRpb24oXG4gICAgICBcIi1lLCAtLWVudiA8ZW52PlwiLFxuICAgICAgXCJzZXRzIGVudmlyb25tZW50IHZhcmlhYmxlcy4gc2VwYXJhdGUgbXVsdGlwbGUgdmFsdWVzIHdpdGggYSBjb21tYS4gb3ZlcnJpZGVzIGFueSB2YWx1ZSBpbiBjeXByZXNzLmNvbmZpZy57anMsdHMsbWpzLGNqc30gb3IgY3lwcmVzcy5lbnYuanNvblwiXG4gICAgKVxuICAgIC5vcHRpb24oXG4gICAgICBcIi1DLCAtLWNvbmZpZy1maWxlIDxjb25maWctZmlsZT5cIixcbiAgICAgICdzcGVjaWZ5IEN5cHJlc3MgY29uZmlnIGZpbGUsIHBhdGggdG8gc2NyaXB0IGZpbGUgd2hlcmUgQ3lwcmVzcyBjb25maWd1cmF0aW9uIHZhbHVlcyBhcmUgc2V0LiBkZWZhdWx0cyB0byBcImN5cHJlc3MuY29uZmlnLntqcyx0cyxtanMsY2pzfVwiJ1xuICAgIClcbiAgICAuYWRkT3B0aW9uKG5ldyBPcHRpb24oXCItLWUyZVwiLCBcInJ1bnMgZW5kIHRvIGVuZCB0ZXN0c1wiKS5kZWZhdWx0KHRydWUpKVxuICAgIC5vcHRpb24oXCItLWdyb3VwIDxuYW1lPlwiLCBcImEgbmFtZWQgZ3JvdXAgZm9yIHJlY29yZGVkIHJ1bnMgaW4gQ3VycmVudHNcIilcbiAgICAuYWRkT3B0aW9uKFxuICAgICAgbmV3IE9wdGlvbihcbiAgICAgICAgXCItaywgLS1rZXkgPHJlY29yZC1rZXk+XCIsXG4gICAgICAgIFwieW91ciBzZWNyZXQgUmVjb3JkIEtleSBvYnRhaW5lZCBmcm9tIEN1cnJlbnRzLiB5b3UgY2FuIG9taXQgdGhpcyBpZiB5b3Ugc2V0IGEgQ1VSUkVOVFNfUkVDT1JEX0tFWSBlbnZpcm9ubWVudCB2YXJpYWJsZVwiXG4gICAgICApLmVudihcIkNVUlJFTlRTX1JFQ09SRF9LRVlcIilcbiAgICApXG4gICAgLm9wdGlvbihcbiAgICAgIFwiLS1wYXJhbGxlbFwiLFxuICAgICAgXCJlbmFibGVzIGNvbmN1cnJlbnQgcnVucyBhbmQgYXV0b21hdGljIGxvYWQgYmFsYW5jaW5nIG9mIHNwZWNzIGFjcm9zcyBtdWx0aXBsZSBtYWNoaW5lcyBvciBwcm9jZXNzZXNcIixcbiAgICAgIGZhbHNlXG4gICAgKVxuICAgIC5hZGRPcHRpb24oXG4gICAgICBuZXcgT3B0aW9uKFxuICAgICAgICBcIi1wLCAtLXBvcnQgPG51bWJlcj5cIixcbiAgICAgICAgXCJydW5zIEN5cHJlc3Mgb24gYSBzcGVjaWZpYyBwb3J0LiBvdmVycmlkZXMgYW55IHZhbHVlIGluIGN5cHJlc3MuY29uZmlnLntqcyx0cyxtanMsY2pzfVwiXG4gICAgICApLmFyZ1BhcnNlcigoaSkgPT4gcGFyc2VJbnQoaSwgMTApKVxuICAgIClcbiAgICAub3B0aW9uKFxuICAgICAgXCItUCwgLS1wcm9qZWN0IDxwcm9qZWN0LXBhdGg+XCIsXG4gICAgICBcInBhdGggdG8geW91ciBDeXByZXNzIHByb2plY3Qgcm9vdCBsb2NhdGlvbiAtIGRlZmF1bHRzIHRvIHRoZSBjdXJyZW50IHdvcmtpbmcgZGlyZWN0b3J5XCJcbiAgICApXG4gICAgLm9wdGlvbihcIi1xLCAtLXF1aWV0XCIsIFwic3VwcHJlc3MgdmVyYm9zZSBvdXRwdXQgZnJvbSBDeXByZXNzXCIpXG4gICAgLmFkZE9wdGlvbihcbiAgICAgIG5ldyBPcHRpb24oXG4gICAgICAgIFwiLS1yZWNvcmQgW2Jvb2xdXCIsXG4gICAgICAgIFwicmVjb3JkcyB0aGUgcnVuIGFuZCBzZW5kcyB0ZXN0IHJlc3VsdHMsIHNjcmVlbnNob3RzIGFuZCB2aWRlb3MgdG8gQ3VycmVudHNcIlxuICAgICAgKVxuICAgICAgICAuZGVmYXVsdCh0cnVlKVxuICAgICAgICAuYXJnUGFyc2VyKChpKSA9PiAoaSA9PT0gXCJmYWxzZVwiID8gZmFsc2UgOiB0cnVlKSlcbiAgICApXG4gICAgLm9wdGlvbihcbiAgICAgIFwiLXIsIC0tcmVwb3J0ZXIgPHJlcG9ydGVyPlwiLFxuICAgICAgJ3VzZSBhIHNwZWNpZmljIG1vY2hhIHJlcG9ydGVyIGZvciBDeXByZXNzLCBwYXNzIGEgcGF0aCB0byB1c2UgYSBjdXN0b20gcmVwb3J0ZXIsIGRlZmF1bHRzIHRvIFwic3BlY1wiJ1xuICAgIClcbiAgICAub3B0aW9uKFxuICAgICAgXCItbywgLS1yZXBvcnRlci1vcHRpb25zIDxyZXBvcnRlci1vcHRpb25zPlwiLFxuICAgICAgJ29wdGlvbnMgZm9yIHRoZSBtb2NoYSByZXBvcnRlci4gZGVmYXVsdHMgdG8gXCJudWxsXCInXG4gICAgKVxuICAgIC5hZGRPcHRpb24oXG4gICAgICBuZXcgT3B0aW9uKFxuICAgICAgICBcIi1zLCAtLXNwZWMgPHNwZWMtcGF0dGVybj5cIixcbiAgICAgICAgJ2RlZmluZSBzcGVjaWZpYyBnbG9iIHBhdHRlcm4gZm9yIHJ1bm5pbmcgdGhlIHNwZWMgZmlsZShzKSwgRGVmYXVsdHMgdG8gdGhlIFwic3BlY01hdGNoXCIgZW50cnkgZnJvbSB0aGUgXCJjeXByZXNzLmNvbmZpZy57anMsdHMsbWpzLGNqc31cIiBmaWxlJ1xuICAgICAgKS5hcmdQYXJzZXIocGFyc2VDb21tYVNlcGFyYXRlZExpc3QpXG4gICAgKVxuICAgIC5vcHRpb24oXG4gICAgICBcIi10LCAtLXRhZyA8dGFnPlwiLFxuICAgICAgXCJjb21tYS1zZXBhcmF0ZWQgdGFnKHMpIGZvciByZWNvcmRlZCBydW5zIGluIEN1cnJlbnRzXCIsXG4gICAgICBwYXJzZUNvbW1hU2VwYXJhdGVkTGlzdFxuICAgIClcbiAgICAuYWRkT3B0aW9uKFxuICAgICAgbmV3IE9wdGlvbihcbiAgICAgICAgXCItLWF1dG8tY2FuY2VsLWFmdGVyLWZhaWx1cmVzIDxudW1iZXIgfCBmYWxzZT5cIixcbiAgICAgICAgXCJBdXRvbWF0aWNhbGx5IGFib3J0IHRoZSBydW4gYWZ0ZXIgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZmFpbGVkIHRlc3RzLiBPdmVycmlkZXMgdGhlIGRlZmF1bHQgcHJvamVjdCBzZXR0aW5ncy4gSWYgc2V0LCBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlciBvciAnZmFsc2UnIHRvIGRpc2FibGUgKEN1cnJlbnRzLW9ubHkpXCJcbiAgICAgICkuYXJnUGFyc2VyKHBhcnNlQXV0b0NhbmNlbEZhaWx1cmVzKVxuICAgIClcbiAgICAuYWRkT3B0aW9uKFxuICAgICAgbmV3IE9wdGlvbihcIi0taGVhZGVkIFtib29sXVwiLCBcIlJ1biBjeXByZXNzIGluIGhlYWRlZCBtb2RlXCIpXG4gICAgICAgIC5kZWZhdWx0KGZhbHNlKVxuICAgICAgICAuYXJnUGFyc2VyKChpKSA9PiAoaSA9PT0gXCJmYWxzZVwiID8gZmFsc2UgOiB0cnVlKSlcbiAgICApXG4gICAgLmFkZE9wdGlvbihcbiAgICAgIG5ldyBPcHRpb24oXG4gICAgICAgIFwiLS1jbG91ZC1jb25maWctZmlsZSA8cGF0aD5cIixcbiAgICAgICAgXCJTcGVjaWZ5IHRoZSBjb25maWcgZmlsZSBmb3IgY3lwcmVzcy1jbG91ZCwgZGVmYXVsdHMgdG8gJ2N1cnJlbnRzLmNvbmZpZy5qcycgYW5kIHdpbGwgYmUgc2VhcmNoZWQgaW4gdGhlIHByb2plY3Qgcm9vdCwgdW5sZXNzIGFuIGFib3NsdWUgcGF0aCBpcyBwcm92aWRlZFwiXG4gICAgICApLmRlZmF1bHQodW5kZWZpbmVkKVxuICAgIClcbiAgICAuYWRkT3B0aW9uKFxuICAgICAgbmV3IE9wdGlvbihcbiAgICAgICAgYC0tY2xvdWQtZGVidWcgW3RydWUgfCBzdHJpbmddYCxcbiAgICAgICAgYEVuYWJsZSBkZWJ1ZyBtb2RlIGZvciBjeXByZXNzLWNsb3VkLCB0aGlzIHdpbGwgcHJpbnQgb3V0IGxvZ3MgZm9yIHRyb3VibGVzaG9vdGluZy4gVmFsdWVzOiBbdHJ1ZSB8ICR7T2JqZWN0LnZhbHVlcyhcbiAgICAgICAgICBEZWJ1Z01vZGVcbiAgICAgICAgKS5qb2luKFxuICAgICAgICAgIFwiIHwgXCJcbiAgICAgICAgKX1dLiBVc2UgY29tbWEgdG8gc2VwYXJhdGUgbXVsdGlwbGUgdmFsdWVzLCBlLmcuIC0tY2xvdWQtZGVidWcgY29tbWl0LWluZm8sY3VycmVudHNgXG4gICAgICApXG4gICAgICAgIC5hcmdQYXJzZXIocGFyc2VDb21tYVNlcGFyYXRlZExpc3QpXG4gICAgICAgIC5kZWZhdWx0KHVuZGVmaW5lZClcbiAgICApXG4gICAgLmFkZE9wdGlvbihcbiAgICAgIG5ldyBPcHRpb24oXG4gICAgICAgIGAtLWV4cGVyaW1lbnRhbC1jb3ZlcmFnZS1yZWNvcmRpbmcgW2Jvb2xdYCxcbiAgICAgICAgYEVuYWJsZSByZWNvcmRpbmcgY292ZXJhZ2UgcmVzdWx0cywgc3BlY2lmeSB0aGUgXCJjb3ZlcmFnZUZpbGVcIiBDeXByZXNzIGVudmlyb25tZW50IHZhcmlhYmxlIGZvciBhIGN1c3RvbSBjb3ZlcmFnZSBmaWxlLCBkZWZhdWx0IGlzIFwiLi8ubnljX291dHB1dC9vdXQuanNvblwiYFxuICAgICAgKVxuICAgICAgICAuZGVmYXVsdCh1bmRlZmluZWQpXG4gICAgICAgIC5hcmdQYXJzZXIoKGkpID0+IChpID09PSBcImZhbHNlXCIgPyBmYWxzZSA6IHRydWUpKVxuICAgICk7XG5cbmV4cG9ydCBjb25zdCBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSgpO1xuXG5mdW5jdGlvbiBwYXJzZUNvbW1hU2VwYXJhdGVkTGlzdCh2YWx1ZTogc3RyaW5nLCBwcmV2aW91czogc3RyaW5nW10gPSBbXSkge1xuICBpZiAodmFsdWUpIHtcbiAgICByZXR1cm4gcHJldmlvdXMuY29uY2F0KHZhbHVlLnNwbGl0KFwiLFwiKS5tYXAoKHQpID0+IHQudHJpbSgpKSk7XG4gIH1cbiAgcmV0dXJuIHByZXZpb3VzO1xufVxuXG5mdW5jdGlvbiBwYXJzZUF1dG9DYW5jZWxGYWlsdXJlcyh2YWx1ZTogc3RyaW5nKTogbnVtYmVyIHwgZmFsc2Uge1xuICBpZiAodmFsdWUgPT09IFwiZmFsc2VcIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHBhcnNlZFZhbHVlID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcblxuICBpZiAoaXNOYU4ocGFyc2VkVmFsdWUpIHx8IHBhcnNlZFZhbHVlIDwgMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwiSW52YWxpZCBhcmd1bWVudCBwcm92aWRlZC4gTXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIgb3IgJ2ZhbHNlJy5cIlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gcGFyc2Vk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LE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRixDQUFDO0FBQUE7QUFBQSxJQUVELFFBQVEsUUFBUTtBQUFBO0FBQUEsTUFFZDtBQUFBLE1BQ0E7QUFBQTtBQUFBLE1BRUE7QUFBQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBO0FBQUEsTUFFQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUE7QUFBQSxJQUVGLENBQUM7QUFBQTtBQUFBLElBRUQsTUFBTSxRQUFRO0FBQUEsTUFDWjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsYUFBYSxRQUFRO0FBQUE7QUFBQSxNQUVuQjtBQUFBLE1BQ0E7QUFBQTtBQUFBLE1BRUE7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUE7QUFBQSxJQUVGLENBQUM7QUFBQSxJQUNELFNBQVMsUUFBUSxDQUFDLFlBQVksYUFBYSxnQkFBZ0IsYUFBYSxDQUFDO0FBQUE7QUFBQTtBQUFBLElBR3pFLFdBQVcsUUFBUTtBQUFBLE1BQ2pCO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBO0FBQUEsSUFDRixDQUFD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QWdCLE9BQU8sY0FBYyxPQUFPO0FBQ2xELE1BQUksZ0JBQWdCLEdBQUc7QUFDckIsWUFBUSxLQUFLLGFBQWE7QUFBQSxFQUM1QjtBQUNBLFVBQVEsS0FBSyxDQUFDO0FBQ2hCLENBQUMsRUFDQSxNQUFNLENBQUMsUUFBUTtBQUNkLE1BQUksZUFBZSxpQkFBaUI7QUFDbEMsWUFBUSxNQUFNLFVBQVUsSUFBSSxTQUFTLENBQUMsQ0FBQztBQUFBLEVBQ3pDLE9BQU87QUFDTCxZQUFRLE1BQU0sR0FBRztBQUFBLEVBQ25CO0FBQ0EsVUFBUSxLQUFLLENBQUM7QUFDaEIsQ0FBQzsiLAogICJuYW1lcyI6IFsibW9kdWxlIiwgInV0aWwiLCAiY2hhbGsiLCAidXRpbCIsICJjaGFsayIsICJyZXF1aXJlIiwgImNwIiwgInByb2Nlc3MiLCAiRXZlbnQiLCAiRXZlbnRFbWl0dGVyIiwgIkRlYnVnIiwgImVycm9yIiwgImh0dHAiLCAiSHR0cFRlcm1pbmF0b3IiLCAiaW1wb3J0X2RlYnVnIiwgImRlYnVnIiwgIkRlYnVnIiwgImRlYnVnIiwgImxvZyIsICJyZXF1aXJlIiwgImltcG9ydF9kZWJ1ZyIsICJpbXBvcnRfYXhpb3MiLCAiaW1wb3J0X2RlYnVnIiwgImltcG9ydF9sb2Rhc2giLCAiaW1wb3J0X2RlYnVnIiwgImltcG9ydF90c19wYXR0ZXJuIiwgImltcG9ydF9kZWJ1ZyIsICJwYXRoIiwgImltcG9ydF9kZWJ1ZyIsICJpbXBvcnRfZGVidWciLCAiaW1wb3J0X3RzX3BhdHRlcm4iLCAiRGVidWdNb2RlIiwgImRlYnVnIiwgImJsdWViaXJkIiwgImRlYnVnIiwgIkRlYnVnIiwgIl8iLCAiZGVidWciLCAiRGVidWciLCAicmVxdWlyZSIsICJzdGRvdXQiLCAiZnMiLCAiZXhlY2EiLCAiaW1wb3J0X2xvZGFzaCIsICJfIiwgImlzQWJzb2x1dGUiLCAicGF0aCIsICJkZWJ1ZyIsICJEZWJ1ZyIsICJpbXBvcnRfZGVidWciLCAiaW1wb3J0X2xvZGFzaCIsICJkZWJ1ZyIsICJEZWJ1ZyIsICJfIiwgImltcG9ydF9sb2Rhc2giLCAiXyIsICJkZWJ1ZyIsICJEZWJ1ZyIsICJheGlvcyIsICJfIiwgImF4aW9zUmV0cnkiLCAicHJldHR5TWlsbGlzZWNvbmRzIiwgImVycm9yIiwgImltcG9ydF9sb2Rhc2giLCAiXyIsICJwbGF0Zm9ybSIsICJzdGRvdXQiLCAiaW1wb3J0X2RlYnVnIiwgImltcG9ydF9sb2Rhc2giLCAiZGVidWciLCAiZGVidWdGbiIsICJfIiwgIl8iLCAiZGVidWciLCAiaW1wb3J0X2RlYnVnIiwgImltcG9ydF9sb2Rhc2giLCAiaW1wb3J0X2RhdGVfZm5zIiwgImltcG9ydF90c19wYXR0ZXJuIiwgImVycm9yIiwgInJ1biIsICJpIiwgImRlYnVnIiwgIkRlYnVnIiwgIl8iLCAiY3lwcmVzcyIsICJlcnJvciIsICJnaXQiLCAiaW1wb3J0X2RlYnVnIiwgImltcG9ydF9kZWJ1ZyIsICJpbXBvcnRfcGF0aCIsICJwYXRoIiwgImZzIiwgImVycm9yIiwgImltcG9ydF9kZWJ1ZyIsICJpbXBvcnRfZGVidWciLCAiaW1wb3J0X2xvZGFzaCIsICJlcnJvciIsICJfIiwgImltcG9ydF9sb2Rhc2giLCAiaW1wb3J0X3BhdGgiLCAiaW1wb3J0X3ByZXR0eV9tcyIsICJfIiwgInIiLCAicHJldHR5TVMiLCAicGF0aCIsICJnZXRDb21tb25QYXRoUHJlZml4IiwgImltcG9ydF9kZWJ1ZyIsICJpbXBvcnRfZGVidWciLCAiaW1wb3J0X2RlYnVnIiwgImltcG9ydF9mcyIsICJmcyIsICJkZWJ1ZyIsICJEZWJ1ZyIsICJmaWxlIiwgImRlYnVnIiwgIkRlYnVnIiwgImltcG9ydF9kZWJ1ZyIsICJkZWJ1ZyIsICJEZWJ1ZyIsICJydW4iLCAiZGVidWciLCAiRGVidWciLCAic3Rkb3V0IiwgInJ1biIsICJkZWJ1ZyIsICJEZWJ1ZyIsICJkZWJ1ZyIsICJEZWJ1ZyIsICJwbGF0Zm9ybSIsICJydW4iLCAiZXJyb3IiLCAiZGVidWciLCAiRGVidWciLCAiY29uZmlnIiwgInBhdGgiLCAiZXJyb3IiLCAiZGVidWciLCAiRGVidWciLCAiZGVidWciLCAiaW1wb3J0X2RlYnVnIiwgImRlYnVnIiwgIkRlYnVnIiwgImltcG9ydF9kZWJ1ZyIsICJpbXBvcnRfdXRpbCIsICJkZWJ1ZyIsICJEZWJ1ZyIsICJnZXRvcyIsICJpbXBvcnRfZGVidWciLCAiaW1wb3J0X3BhdGgiLCAiaW1wb3J0X2NvbW1vbl9wYXRoX3ByZWZpeCIsICJpbXBvcnRfbG9kYXNoIiwgImltcG9ydF9vcyIsICJpbXBvcnRfcGF0aCIsICJmaWxlIiwgInBhdGgiLCAiZGVidWciLCAiRGVidWciLCAiXyIsICJwYXRoIiwgIm9zIiwgImdsb2JieSIsICJjb21tb25QYXRoUHJlZml4IiwgInBsYXRmb3JtIiwgInJ1biIsICJlcnJvciIsICJpbXBvcnRfZGVidWciLCAiZGVidWciLCAiRGVidWciLCAiaW1wb3J0X2NoYWxrIiwgInByaW50V2FybmluZ3MiLCAicGx1ciIsICJjaGFsayIsICJkZWJ1ZyIsICJEZWJ1ZyIsICJwbGF0Zm9ybSIsICJydW4iLCAicHJpbnRXYXJuaW5ncyIsICJpbXBvcnRfZGVidWciLCAiaW1wb3J0X2xvZGFzaCIsICJhc3NlcnQiLCAiXyIsICJtYXRjaCIsICJkZWJ1ZyIsICJEZWJ1ZyJdCn0K