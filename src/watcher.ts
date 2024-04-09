import {Vuh} from './vuh';

export class Watcher {
  getter: Function
  vm: Vuh
  value: any
  lazy: boolean = false

  constructor(vm: Vuh, getter: Function) {
    this.vm = vm
    this.getter = getter
    this.value = this.lazy? null: this.get()
  }

  get() {
    return this.getter.call(this.vm, this.vm)
  }

}
