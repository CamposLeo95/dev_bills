interface Categoryprops {
  id?: string;
  name: string;
  color: string;
}
export class Category {
  public id?: string;
  public name: string;
  public color: string;

  constructor(props: Categoryprops) {
    this.id = props.id;
    this.name = props.name;
    this.color = props.color.toUpperCase();
  }
}
