import { NextResponse } from "next/server";
import { prisma } from "@/utils/prismaDB"; // или ./prismaDB — как у тебя
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email и пароль обязательны" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "Пользователь уже существует" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    return NextResponse.json({ message: "Регистрация успешна", userId: user.id });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ error: "Ошибка регистрации" }, { status: 500 });
  }
}
