import { prisma } from "@/lib/db";
import { auth, clerkClient } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { userId } = getAuth(req);
  try {
    if (userId) {
      const user = await prisma.user.findUnique({
        where: {
          externalId: userId
        }
      })
      
      if(user) {
        clerkClient.users.updateUserMetadata(userId, {
          publicMetadata: {
            isAdmin: user.role === "ADMIN" ? true : false
          }
        })
      }

      return NextResponse.json(user)
    }
  } catch (error) {
    console.log('fuck', error)
  }
}

