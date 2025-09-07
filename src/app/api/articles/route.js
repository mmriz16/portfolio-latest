// app/api/articles/route.js
import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma'; // <-- Impor "kurir" Prisma kita

// Handler untuk GET
export async function GET() {
  try {
    // Perintahkan Prisma untuk mencari SEMUA artikel di database
    const articles = await prisma.article.findMany();
    
    return NextResponse.json({
      message: 'Data artikel berhasil diambil dari database',
      data: articles,
    });
  } catch (error) {
    // Jika terjadi error, kirim respons error
    return NextResponse.json(
      { message: 'Gagal mengambil data artikel', error: error.message },
      { status: 500 }
    );
  }
}

// Handler untuk POST
export async function POST(request) {
  try {
    const { title, description, imageUrl } = await request.json();

    if (!title || !description || !imageUrl) {
      return NextResponse.json(
        { message: 'Judul, deskripsi, dan URL gambar wajib diisi' },
        { status: 400 }
      );
    }
    
    // Perintahkan Prisma untuk MEMBUAT artikel baru
    const newArticle = await prisma.article.create({
      data: {
        title: title,
        description: description,
        imageUrl: imageUrl,
      },
    });

    return NextResponse.json(
      {
        message: 'Artikel baru berhasil dibuat di database',
        data: newArticle,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Gagal membuat artikel baru', error: error.message },
      { status: 500 }
    );
  }
}