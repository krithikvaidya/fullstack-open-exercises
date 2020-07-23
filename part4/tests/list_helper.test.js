
const listHelper = require('../utils/list_helper')
const Blog = require ('../models/blog')

describe('dummy', () => {

  test('dummy returns 1', () => {
	
	const blog_list = []
	const result = listHelper.dummy (blog_list)

    expect(result).toBe(1)
  })

})


describe('total likes', () => {

  test('of empty blog list is 0', () => {
	
    const blog_list = []
    const result = listHelper.totalLikes (blog_list)

    expect(result).toBe(0)

  })

  test('when blog list has only 1 item is the likes of that item', () => {
	
    const blog_list = [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
      }
    ]

    const result = listHelper.totalLikes (blog_list)

    expect(result).toBe(5)

  })


  test('when blog list has many items, is equal to sum of likes of all items', () => {
	
    const blog_list = [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
      },
      {
        _id: '5a422aa71b54a67625j2ksd0',
        title: 'afafs',
        author: 'asdra',
        url: 'http://www.adsaa.com',
        likes: 0,
        __v: 0
      },
      {
        _id: '5a422aa71b54a676239fh37z',
        title: 'test3',
        author: 't3',
        url: 'tesst3',
        likes: 14,
        __v: 0
      },
      {
        _id: '5a422aa71b54a67629f1kalf',
        title: 'Go To Stful',
        author: 'Edtra',
        url: 'http://www.u.arizona.edu/~rubinson/',
        likes: 7,
        __v: 0
      }
    ]

    const result = listHelper.totalLikes (blog_list)
    const total_Likes = blog_list
                       .reduce ((sum, curr) => sum + curr.likes, 0)

    expect(result).toBe(total_Likes)

  })

})


describe ('favourite blog', () => {

  test ('most liked blog of empty list is null', () => {

    const blog_list = []

    const result = listHelper.favouriteBlog (blog_list)

    expect(result).toBe (null)

  })


  test ('most liked blog of singleton list is that blog itself', () => {

    // const blog = new Blog(request.body)
    const blog_list = [

      new Blog ({
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
      })

    ]

    const expected_result = 
      {
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        likes: 5,
      }

    const result = listHelper.favouriteBlog (blog_list)

    expect(result).toEqual (expected_result)

  })


  test ('most liked blog of list of many blogs is a single blog object', () => {

    // const blog = new Blog(request.body)
    const blog_list = [

      new Blog ({
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
      }),

      new Blog ({
        title: 'Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 25,
      }),

      new Blog ({
        title: 'Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: -20,
      }),

      new Blog ({
        title: 'S23ent Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 0,
      }),

    ]

    const expected_result = 
      {
        title: 'Considered Harmful',
        author: 'Edsger W. Dijkstra',
        likes: 25,
      }

    const result = listHelper.favouriteBlog (blog_list)

    expect(result).toEqual (expected_result)

  })


})