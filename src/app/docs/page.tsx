import { redirect } from 'next/navigation';

export default function DocsPage() {
  // Server-side redirect to the introduction section
  redirect('/docs/introduction');
}
