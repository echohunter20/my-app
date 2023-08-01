import { cookies } from 'next/headers';

export const runtime = 'edge';

export async function GET(request) {
	const cookieStore = cookies();
	const token = cookieStore.get('token');

	return new Response('Hello, Next.js!12312312', {
		status: 200,
		headers: { 'Set-Cookie': `token=${token}` },
	});
}