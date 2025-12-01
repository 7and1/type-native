import Link from 'next/link';
import { Keyboard } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <Keyboard className="w-20 h-20 mx-auto text-muted-foreground/50" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          <Keyboard className="w-5 h-5" />
          Browse All Keyboards
        </Link>
      </div>
    </main>
  );
}
