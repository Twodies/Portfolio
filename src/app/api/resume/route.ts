import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'resume.pdf');
    const data = await fs.readFile(filePath);

    return new Response(data, {
      headers: {
        'Content-Type': 'application/pdf',
'Content-Disposition': 'attachment; filename="resume.pdf"',
        'Cache-Control': 'public, max-age=3600, immutable',
      },
    });
  } catch (err) {
    return new NextResponse('Resume not found', { status: 404 });
  }
}
