import { NextRequest, NextResponse } from 'next/server';
import { generateBuilderCard } from '@/lib/cardGenerator';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const photo = formData.get('photo') as File | null;
    const name = String(formData.get('name') || 'BUILDER');
    const role = String(formData.get('role') || 'BUILDING THE FUTURE');
    const stack = String(formData.get('stack') || 'FULL STACK · AI · WEB3');
    const location = String(formData.get('location') || 'GOA, INDIA');
    const xHandle = String(formData.get('xHandle') || '');
    const github = String(formData.get('github') || '');

    if (!photo) {
      return NextResponse.json({ error: 'Please upload a photo.' }, { status: 400 });
    }

    const result = await generateBuilderCard({
      name,
      role,
      stack,
      location,
      xHandle,
      github,
      photoFile: photo as File,
    });

    const imageUrl = `data:image/jpeg;base64,${result.image.toString('base64')}`;
    return NextResponse.json({ imageUrl, passId: result.passId });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Unable to generate your builder pass right now.' }, { status: 500 });
  }
}
