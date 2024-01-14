import path from 'path';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPath} from "./config/build/types/config";

const config = (env: BuildEnv) => {
    const paths: BuildPath = {
        html: path.resolve(__dirname, 'public', 'index.html'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build')
    };
    const mode = env.mode || 'development';
    const port = env.port || 3000;
    const isDev = mode === "development";


    return buildWebpackConfig({
        mode,
        paths,
        port,
        isDev
    });
}

export default config;
