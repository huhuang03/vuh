import {compileToAst} from '@/ast/ast';
import assert from 'node:assert';
import {AstType} from '@/ast/ast_type';

test('normal simple test', () => {
  const rst = compileToAst("<div>hello</div>")
  assert(rst != null)
  assert(rst?.type === AstType.Element)
  assert(rst?.tag === 'div')
})
