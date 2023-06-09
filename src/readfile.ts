"use strict";
import * as fs from "node:fs/promises";
import process from "node:process";

const filePath = "./src/inputs/text02.txt";
// fs.lstat(filePath).then((v) => console.log(v));

const contents = fs.readFile(filePath, { encoding: "utf-8" });
contents
  .then((v) => console.log(v))
  .catch((err) => {
    console.log({ mesage: err.message });
    for (const e in err) {
      console.log({ [e]: err[e] });
    }
    process.exit(0);
  });
