

const dummy = (blogs) => {
	return 1
}

const totalLikes = (blogs) => {

	const total_likes = blogs.length === 0 ?
						0 :
						blogs
						.reduce ((sum, blog) => sum + blog.likes, 0)
	
	return total_likes

}


const favouriteBlog = (blogs) => {

	if (blogs.length === 0)
		return null

	let curr_max = blogs[0]

	const favourite_blog = blogs
						   .reduce ((curr_max, blog) => curr_max.likes > blog.likes ? curr_max : blog, curr_max)
	
	const to_return = {
		title: favourite_blog.title,
		author: favourite_blog.author,
		likes: favourite_blog.likes
	}

	return to_return
}
  
module.exports = {
	dummy, totalLikes, favouriteBlog
}