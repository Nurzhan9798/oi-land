export type BuildMode = 'development' | 'production';

export interface BuildPath {
    entry: string;
    output: string;
    html: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPath;
}