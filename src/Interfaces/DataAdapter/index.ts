export default interface DataAdapter {
  serialize: (data: any) => string | JSON;
  update: (data: any | Object) => any | Object;
  getValueByKey: (key: string | any) => any | Object;
  data: any | Object;
}
