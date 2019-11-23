declare namespace CounterCssModule {
  export interface ICounterCss {
    "counter-text": string;
    counterText: string;
  }
}

declare const CounterCssModule: CounterCssModule.ICounterCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CounterCssModule.ICounterCss;
};

export = CounterCssModule;
