import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href={'/'}>
        <h1 className="font-bold text-lg">PublishIt.</h1>
      </Link>
    </nav>
  );
}
