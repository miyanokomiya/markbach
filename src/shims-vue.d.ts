declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<Record, Record, any>;
  export default component;
}
