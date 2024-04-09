export enum AstType {
  Element = 1,
  Expression = 2,
  Text = 3
}

export interface IPosable {
  start?: number
  end?: number
}

type BaseAst = IPosable & {
  type: AstType
}

type AstText = BaseAst & {
  type: AstType.Text
}

export interface AstElement extends BaseAst {
  type: AstType.Element
  tag: string
  attrslist: AstAttr[]
  attrsMap: Map<string, AstAttr>
  parent?: AstElement
  children: AstNode[]
}

/**
 * Ast中的属性
 */
export interface AstAttr extends IPosable {
  name: string
  value: any
}

type AstExpression = BaseAst & {
  type: AstType.Expression
}

type AstNode = AstElement | AstText | AstExpression
