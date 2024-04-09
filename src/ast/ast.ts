import {AstAttr, AstElement, AstType} from './ast_type';

export function createAstElement(tag: string, attrs: AstAttr[] = []): AstElement {
  return {
    attrsMap: makeAttrsMap(attrs),
    attrslist: [],
    tag: '',
    children: [],
    type: AstType.Element
  }
}

function makeAttrsMap(attrs: AstAttr[]): Map<string, AstAttr> {
  const rst: Map<string, AstAttr> = new Map()
  for (const item of attrs) {
    rst.set(item.name, item)
  }
  return rst
}
