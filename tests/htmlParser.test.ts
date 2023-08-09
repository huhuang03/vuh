import { parseHTML } from '@/htmlParser'

test('normal simple test', () => {
  parseHTML("<div>hello</div>", {
    start: (tagName, attrs, unary, start, end) => {
      expect(tagName).toBe('div')
      expect(unary).toBe(false)
      expect(start).toBe(0)
      expect(end).toBe(5)
    },
    end: (tagName, start, end) => {
      expect(tagName).toBe('div')
      expect(start).toBe(10)
      expect(end).toBe(16)
    }
  })
})

test('normal simple test', () => {
  const toTest = "<img src='https://some_img.jpg' alt='some_alt' />"
  parseHTML(toTest, {
    start: (tagName, attrs, unary, start, end) => {
      expect(tagName).toBe('img')
      expect(unary).toBe(true)
      expect(start).toBe(0)
      expect(end).toBe(toTest.length)
    }
  })
})
