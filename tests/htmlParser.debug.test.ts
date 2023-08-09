import { parseHTML } from '@/htmlParser'

test('hello', () => {
  parseHTML("<div>hello</div>", {
    start: (tagName, attrs, someBool, start, end) => {
      console.log('tagName: ', tagName)
      console.log('someBool: ', someBool)
      console.log('start: ', start)
      console.log('end: ', end)
    }
  })
})
