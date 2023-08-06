import webpack from "webpack";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = {
    entry: {
        "main": path.resolve(__dirname, "src", "index.js"),
    },
    output: {
        clean: true,
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js"
    }
};

export default config;
