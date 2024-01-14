import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/config";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    return {
        mode: 'development',
        entry: options.paths.entry,
        output: {
            path: options.paths.output,
            filename: '[name].[contenthash:8].js',
            clean: true
        },
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),

        plugins: buildPlugins(options),
    }
}
