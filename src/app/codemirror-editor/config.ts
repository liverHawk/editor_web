/** language import start*/
import { angular } from "@codemirror/lang-angular";
import { cpp } from "@codemirror/lang-cpp";
import { css } from "@codemirror/lang-css";
import { go } from "@codemirror/lang-go";
import { html } from "@codemirror/lang-html";
import { java } from "@codemirror/lang-java";
import { javascript } from "@codemirror/lang-javascript";
import { json } from "@codemirror/lang-json";
import { liquid } from "@codemirror/lang-liquid";
import { less } from "@codemirror/lang-less";
import { markdown } from "@codemirror/lang-markdown";
import { php } from "@codemirror/lang-php";
import { python } from "@codemirror/lang-python";
import { sql } from "@codemirror/lang-sql";
import { vue } from "@codemirror/lang-vue";
import { wast } from "@codemirror/lang-wast";
import { xml } from "@codemirror/lang-xml";
import { yaml } from "@codemirror/lang-yaml";

// import {ruby} from "@codemirror/legacy-modes/modes";
/** language import end*/

import { Extension } from "@codemirror/state";
import { LanguageSupport } from "@codemirror/language";

function splitFilename(filename: string): string[] {
  return filename.split(".");
}

export function getLanguageExtension(filename: string): (() => LanguageSupport) | undefined {
  const file_split = splitFilename(filename);
  const ext = file_split.pop();
  if (file_split.includes("component")) return angular;

  if (!ext) return undefined;
  console.log("ext: ", ext);

  switch (ext) {
    case "cpp":
      return cpp;
    case "css":
      return css;
    case "go":
      return go;
    case "html":
      return html;
    case "java":
      return java;
    case "js":
      return javascript;
    case "json":
      return json;
    case "liquid":
      return liquid;
    case "less":
      return less;
    case "md":
      return markdown;
    case "php":
      return php;
    case "py":
      return python;
    case "sql":
      return sql;
    case "vue":
      return vue;
    case "wast":
      return wast;
    case "xml":
      return xml;
    case "yaml":
    case "yml":
      return yaml;
    default:
      return undefined;
  }
}
