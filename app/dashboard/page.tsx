import Image from 'next/image';

export default function Page() {
  return (
    <div>
      <p> Dashboard Page </p>

      <Image
        src={'/hero-desktop.png'}
        width={560}
        height={620}
        className={'hidden md:block'}
        alt={'Screenshot of the Acme app on a desktop computer'}
      />
    </div>
  );
}
