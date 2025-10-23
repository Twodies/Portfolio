import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'resume.pdf');
    const file = await fs.readFile(filePath);

    // Convert Buffer to Uint8Array to satisfy DOM Blob typings
    const uint8 = new Uint8Array(file);
    const blob = new Blob([uint8], { type: 'application/pdf' });

    return new Response(blob, {
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
