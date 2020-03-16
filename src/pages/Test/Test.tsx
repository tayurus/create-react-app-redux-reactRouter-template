import React from "react";
import { withNaming } from "@bem-react/classname";
const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("test");
export class Test extends React.Component<any, any> {
  render() {
    return <div className={b()}>Тестовая страница)</div>;
  }
}
