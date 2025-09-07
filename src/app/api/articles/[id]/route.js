// app/api/articles/[id]/route.js
import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id);

    // Perintahkan Prisma untuk mencari satu artikel yang ID-nya cocok
    const article = await prisma.article.findUnique({
      where: { id: id },
    });

    if (!article) {
      return NextResponse.json(
        { message: `Artikel dengan ID ${id} tidak ditemukan` },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: `Detail artikel ID ${id}`,
      data: article,
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Gagal mengambil data artikel', error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const id = parseInt(params.id);
    const { title, description, imageUrl } = await request.json();

    // Perintahkan Prisma untuk MEMPERBARUI artikel yang ID-nya cocok
    const updatedArticle = await prisma.article.update({
      where: { id: id },
      data: {
        title,
        description,
        imageUrl,
      },
    });

    return NextResponse.json({
      message: `Artikel dengan ID ${id} berhasil diperbarui`,
      data: updatedArticle,
    });
  } catch (error) {
    // Prisma akan error jika ID tidak ditemukan, kita bisa menangkapnya
    if (error.code === 'P2025') {
      return NextResponse.json(
        { message: `Artikel dengan ID ${params.id} tidak ditemukan` },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: 'Gagal memperbarui artikel', error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const id = parseInt(params.id);

    // Perintahkan Prisma untuk MENGHAPUS artikel yang ID-nya cocok
    await prisma.article.delete({
      where: { id: id },
    });

    return NextResponse.json({
      message: `Artikel dengan ID ${id} berhasil dihapus`,
    });
  } catch (error) {
    if (error.code === 'P2025') {
      return NextResponse.json(
        { message: `Artikel dengan ID ${params.id} tidak ditemukan` },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: 'Gagal menghapus artikel', error: error.message },
      { status: 500 }
    );
  }
}