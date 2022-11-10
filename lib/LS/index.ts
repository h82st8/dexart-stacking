export default class LS {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public set(value: string) {
    return localStorage.setItem(this.name, value);
  }

  public get() {
    return localStorage.getItem(this.name);
  }
}