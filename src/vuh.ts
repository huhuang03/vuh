import {Watcher} from './watcher';
import {getOuterHTML, query} from '@/util/util';
import exp from 'constants';

export class Vuh {
  _watcher: Watcher[] = []
  $options: VuhOptions = {}

  constructor(option: VuhCreateOption) {
  }

  $mount(target: VuhCreateOption['el']) {
    const el = query(target)
    if (!this.$options.render) {
      let template = this.$options.template
      if (!template) {
        template = getOuterHTML(el)
      }
    }
  }

  _init() {
    // have a watcher!
  }
}

/**
 * Vuh的Options
 */
export interface VuhOptions {
  render?: Function
  template?: String
}

export interface VuhCreateOption {
  el: string,
  data?: {
    [key: string]: any
  }
}
