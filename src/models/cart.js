import { signal } from "@preact/signals-react";

export class Cart {
  items = signal([]);

  get count() {
    return this.items.value.length;
  }

  addItem(item) {
    this.items.value = this.items.value.concat(item);
  }
}
