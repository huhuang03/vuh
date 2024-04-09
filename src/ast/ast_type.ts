export enum AstType {
  Element = 1,
  Expression = 2,
  Text = 3
}

export interface Ast {
  type: AstType,
  children: Ast[],
  tag: string
}

type AstText = Ast & {
  type: AstType.Text,
  text: String,
  tag: '',
  children: []
}

// export interface IPosable {
//   start?: number
//   end?: number
// }
//
// type BaseAst = IPosable & {
//   type: AstType
// }
//
//
// export interface AstElement extends BaseAst {
//   type: AstType.Element
//   tag: string
//   attrslist: AstAttr[]
//   attrsMap: Map<string, AstAttr>
//   parent?: AstElement
//   children: AstNode[]
// }
//
// /**
//  * Ast中的属性
//  */
// export interface AstAttr extends IPosable {
//   name: string
//   value: any
// }
//
// type AstExpression = BaseAst & {
//   type: AstType.Expression
// }
//
// type AstNode = AstElement | AstText | AstExpression
