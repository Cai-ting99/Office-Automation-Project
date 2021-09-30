import Control, { Include } from "./Control";
import { Button } from "ant-design-vue";

@Include
export default class ButtonControl extends Control {
  Style = {
    width: "100px",
    height: "40px",
  };
  render() {
    return (
      <Button type="primary" style="width:100%;height:100%;">
        按钮
      </Button>
    );
  }
}