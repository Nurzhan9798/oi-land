import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const {isDev} = options;

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resolvePath: string) =>
                            resolvePath.includes('.module.'),
                        localIdentName: isDev
                            ? '[path][name]__[local]'
                            : '[hash:base64:8]',
                    },
                },
            },
            "sass-loader",
        ],
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        svgLoader,
        fileLoader,
        tsLoader,
        cssLoader
    ]
}
