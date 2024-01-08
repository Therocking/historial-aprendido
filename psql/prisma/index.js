import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(skip=0) {
    // const posts = await crud(skip)
     const users = await crud(0, 2)
       
    /* relations */
    // const newPost = await prisma.post.create({
    //     data: {
    //         title: "Primer post",
    //         author: {
    //             connect: {
    //                 id: user.id,
    //                 name: user.name,
    //                 email: user.email
    //             }
    //         }
    //     },
    // });

    // const users = await prisma.user.findMany({
    //     include: { posts: true }
    // })
    console.dir(users, { depth:Infinity });
}
main( )



async function crud(offset=0, limit=5) {
    /* create document */
    /* const user = await prisma.user.create({
         data: {
             name: "lucas",
             email: "lucas@gmail.com",
             lastname: "dick"
         }
     });*/

    /* get all documents */
    const [total, users] = await Promise.all([
        prisma.user.count(),
        prisma.user.findMany( {where:{role: "USER"}, skip: offset, take: limit} )
    ])

     /*const [total, posts] = await Promise.all([
         prisma.post.count(),
         prisma.post.findMany( {skip: offset, take: limit} )
     ])*/

     //return user
    return {page: offset, limit,total, users}
    // return {page: offset, limit, total, posts}
}
