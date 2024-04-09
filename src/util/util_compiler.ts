import {parseHTML} from '@/html_parser/htmlParser';
import {AstElement} from '@/ast/ast_type';
import {createAstElement} from '@/ast/ast';

/**
 * Create ast from template
 *
 * dom tree to ast tree
 * @param template
 */
export function parseToAst(template: string) {
  let curParent: AstElement | null = null
  parseHTML(template, {
    start(tagName: string, attrs: any[], unary: boolean, start: number, end: number) {
      const ele = createAstElement(tagName)
      if (!unary) {
        curParent = ele
      }
    }
  })
}
