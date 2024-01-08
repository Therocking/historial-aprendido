import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
   /*const newUser = await prisma.users.create({
      data: {
	 name: "sam",
	 password: "123456",
	 email: "samuel@gmail.com"
      }
   });
   console.log(newUser)*/

   /*const newPost = await prisma.posts.create({
      data: {
	 title: "Prisma",
	 content: "Estoy aprendiendo a utilizar prisma. ¿Quién se une?",
	 user_id: 2,
      }
   })
   console.log(newPost)*/

   /*const newComment = await prisma.comments.create({
      data: {
	 title: "Prisma",
	 content: "¿Con qué empezamos",
	 user_id: 3,
	 post_id: 2,
	 comment_parent_id: 6
      }
   })
   console.log(newComment)*/

   /*const users = await prisma.users.findMany()
   console.log(users)*/

   const posts = await prisma.posts.findMany({ 
      include:{ author: true, _count:true, comments: true},
   })
   console.dir(posts, {depth: Infinity})

   /*const comments = await prisma.comments.findMany({ 
      include: {author: true}, where: { comment_parent_id: 3 } 
   })
   console.dir(comments, {depth: Infinity})*/

   /*const postUpdated = await prisma.posts.update({
      where: {
	    id: 2
      },
      data: {
	 title: "Prisma y postgres",
	 updatedAt: new Date()
      }
   });
   console.log(postUpdated)*/

}
main()
