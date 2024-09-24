import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function Get(){
    const {getUser} =await getKindeServerSession()
    const user =await getUser()

    if(!user || user === null || user.id)
        throw new Error("Something went wrong with autentication" +  user)

    const dbUser =await prisma.user.findUnique({
        where: {
            id:user.id
        }
    });
    if(!dbUser){
        await prisma.user.create({
            data:{
                id:user.id,
                firstName:user.given_name ?? "",
                lastName:user.family_name ?? "",
                email:user.email ?? ""
            }
        })
    }
}