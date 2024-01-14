import path from 'path';
import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildOptions} from "./config/build/types/config";

const options: BuildOptions = {
    paths: {
        html: path.resolve(__dirname, 'public', 'index.html'),
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: path.resolve(__dirname, 'build')
    },
    mode: 'development'
}

const config: webpack.Configuration = buildWebpackConfig(options);

export default config;
