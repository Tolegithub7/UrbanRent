import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">Urban Rent</Link>
      <div>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/properties">Properties</Link>
      </div>
      <div>
        <button>Sign In</button>
        <button>Register</button>
      </div>
    </nav>
  );
}
