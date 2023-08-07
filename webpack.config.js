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
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                loader: "file-loader", // or "url-loader"
                options: {
                    outputPath: "images", // example: /images/631e5cfc72297907c25a340a15d2471d.svg
                },
            },
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //     type: 'asset/resource', // https://webpack.js.org/guides/asset-modules/
            //     generator: {
            //         filename: 'images/[name][contenthash][ext]' // example: /images/aeronaut-2016f96fa654fe432b85a56e.png
            //     }
            // },

        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            '@assets': path.resolve(currentDirectoryName, 'src/assets/'),
            '@components': path.resolve(currentDirectoryName, 'src/components/'),
        }
    }
};

export default config;
