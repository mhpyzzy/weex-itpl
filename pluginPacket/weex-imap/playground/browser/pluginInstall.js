import WeexImap from "../../js/src";

if (window.Weex) {
  Weex.install(WeexImap);
} else if (window.weex) {
  weex.install(WeexImap);
}