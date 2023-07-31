import { signal, computed } from "@preact/signals-react";

export class Cart {
  items = signal([]);

  // can create immediate computed values
  countDouble = computed(() => this.items.value.length * 2);

  // or define values as getters
  get count() {
    return this.items.value.length;
  }

  // methods are just simple functions
  addItem(item) {
    this.items.value = this.items.value.concat(item);
  }
}
