type ReactJSXElementConstructor<Props> =
  | ((props: Props) => React.ReactNode)
  | (new (props: Props) => React.Component<Props, any>)
  | ((props: Props) => Promise<React.ReactNode>);

declare global {
  namespace JSX {
    type ElementType = string | ReactJSXElementConstructor<any>;
  }
}
export {};
