import path, { dirname } from "path";
import { fileURLToPath } from "url";

const currentFileName = fileURLToPath(import.meta.url);
const currentDirectoryName = dirname(currentFileName);

const config = {
    entry: {
        "main": path.resolve(currentDirectoryName, "src", "index.ts"),
    },
    output: {
        clean: true,
        path: path.resolve(currentDirectoryName, "dist"),
        filename: "[name].[contenthash].js"
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "ts-loader",
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
};

export default config;
