'use client';

import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

type User = {
  image: string;
};

export default function Logged({ image }: User) {
  return (
    <li className="flex gap-8 items-center">
      <button
        className="text-sm bg-gray-700 text-white py-2 px-6 rounded-xl"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
      <Link href={'/dashboard'}>
        <Image
          width={48}
          height={48}
          className="w-12 rounded-full"
          src={image}
          alt=""
          priority
        />
      </Link>
    </li>
  );
}
