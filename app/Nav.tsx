import { getServerSession } from 'next-auth/next';
import { authOptions } from '../pages/api/auth/[...nextauth]';
import Login from './auth/Login';
import Logged from './auth/Logged';
import Link from 'next/link';
import Image from 'next/image';

export default async function Nav() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex justify-between items-center py-8">
      <Link href={'/'}>
        <Image
            src="/publish-it-logo.png"
            alt="Publish It logo"
            width={60}
            height={60}
            priority
          />
      </Link>
      <ul className="flex items-center gap-6">
        {!session?.user && <Login />}
        {session?.user && <Logged image={session.user.image || ''} />}
      </ul>
    </nav>
  );
}
