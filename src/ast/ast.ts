import {Ast, AstType} from './ast_type';
import {parseHTML} from '@/html_parser/htmlParser';

/**
 * 将一个template，转为一个ast
 * @param template
 */
export function compileToAst(template: string): Ast | null {
  // let curParent: Ast | null = null
  let root: Ast | null = null
  parseHTML(template, {
    start(tagName: string, attrs: any[], unary: boolean, start: number, end: number) {
      let ast: Ast | null = null
      if (tagName === 'div') {
        ast = {type: AstType.Element, tag: 'div', children: []}
      }
      if (root == null) {
        root = ast
      }
    }
  })
  return root
}

// export function createAstElement(tag: string, attrs: AstAttr[] = []): AstElement {
//   return {
//     attrsMap: makeAttrsMap(attrs),
//     attrslist: [],
//     tag: '',
//     children: [],
//     type: AstType.Element
//   }
// }
//
// function makeAttrsMap(attrs: AstAttr[]): Map<string, AstAttr> {
//   const rst: Map<string, AstAttr> = new Map()
//   for (const item of attrs) {
//     rst.set(item.name, item)
//   }
//   return rst
// }
