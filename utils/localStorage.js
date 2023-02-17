class LocalStorageItem {
  constructor(name) {
    this.name = name;
  }

  get() {
    return localStorage.getItem(this.name);
  }

  set(value) {
    localStorage.setItem(this.name, value);
  }

  remove() {
    localStorage.removeItem(this.name);
  }
}

// eslint-disable-next-line import/prefer-default-export
export const LocalStorageUtm = new LocalStorageItem('utm');