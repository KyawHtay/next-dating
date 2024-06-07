'use server';

import { prisma } from "@/lib/prisma";
import { LoginSchema } from "@/lib/schemas/loginSchema";
import { RegisterSchema, registerSchema } from "@/lib/schemas/registerSchema";
import bcrypt from 'bcryptjs'
import { AuthError, User } from "next-auth";
import { auth, signIn,signOut } from "@/auth";




export async function sighInUser(data: LoginSchema): Promise<ActionResult<string>>{

    try{

        const result= await signIn('credentials',{
            email: data.email,
            password: data.password,
            redirect: false
        })

        console.log(result)

        return {status:'success',data:'Logged in'}

    }catch(error){
        
        console.log(error);

        if(error instanceof  AuthError){
            switch (error.type){
                case 'CredentialsSignin':
                    return {status:'error',error:'Invalid credentials'}
                default:
                    return {status:'error',error:'Something went wrong! '};
            }
        } else{
            return {status:'error',error:'Something went wrong! '};
        }

    }

}

export async function signOutUser() {
    await signOut({redirectTo:'/'})
    
}

export async function registerUser(data:RegisterSchema):Promise<ActionResult<User>>{
    try{
        
        const validated = registerSchema.safeParse(data);

        if(!validated.success){
            return {status:'error', error: validated.error.errors}
        }

        const {name,email,password} = validated.data;

        const hashedPassword = await bcrypt.hash(password,10);

        const existingUser = await prisma.user.findUnique({
            where: {email}
        })

        if(existingUser) return {status:'error',error:'User already exists'};

        const user= await  prisma.user.create({
            data:{
                name,
                email,
                passwordHash: hashedPassword
            }
        })

        return {status:'success',data: user};

    } catch(error){
        console.log(error);
        return {status:'error',error: 'Something went wrong'}
    }
}

export async function getUserByEmail(email:string){
    return prisma.user.findUnique({where: {email}});
}

export async function getAuthUserId(){
    const session = await auth();
    const userId = session?.user?.id;

    if(!userId) throw new Error('Unauthroised');
    console.log(userId);
    return userId;

}