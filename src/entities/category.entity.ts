interface Categoryprops {
  _id?: string;
  name: string;
  color: string;
}
export class Category {
  public _id?: string;
  public name: string;
  public color: string;

  constructor(props: Categoryprops) {
    this._id = props._id;
    this.name = props.name;
    this.color = props.color.toUpperCase();
  }
}
