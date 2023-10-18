import Link from 'next/link';

export default function Navbar() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
      }}>
      {/* <div>My Website</div> */}
      <div>
        <Link href="/">| Home</Link> |
        <Link href="/About"> About</Link> |
        <Link href="/Contact"> Contacts</Link> |
        <Link href="/posts/hello"> hello</Link> |
      </div>
    </div>
  );
}