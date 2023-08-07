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
        filename: "[name].[contenthash].js",
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "ts-loader",
            },
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //     type: 'asset/resource',
            // },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                loader: "file-loader", // or "url-loader"
                options: {
                    outputPath: "images", // example: /images/631e5cfc72297907c25a340a15d2471d.svg
                },
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
};

export default config;
