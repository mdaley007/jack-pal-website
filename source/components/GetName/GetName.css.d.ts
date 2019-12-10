declare namespace GetNameCssModule {
  export interface IGetNameCss {
    'get-name-text': string;
    getNameText: string;
  }
}

declare const GetNameCssModule: GetNameCssModule.IGetNameCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: GetNameCssModule.IGetNameCss;
};

export = GetNameCssModule;
