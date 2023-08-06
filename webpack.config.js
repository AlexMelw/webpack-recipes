import webpack from "webpack";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const currentFileName = fileURLToPath(import.meta.url);
const currentDirectoryName = dirname(currentFileName);

const config = {
    entry: {
        "main": path.resolve(currentDirectoryName, "src", "index.js"),
    },
    output: {
        clean: true,
        path: path.resolve(currentDirectoryName, "dist"),
        filename: "[name].[contenthash].js"
    }
};

export default config;
