export default class LS {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public set(value: string) {
    localStorage.setItem(this.name, value);
  }

  public get() {
    localStorage.getItem(this.name);
  }
}