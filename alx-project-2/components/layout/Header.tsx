// components/layout/Header.tsx

import Link from "next/link";

const Header = () => {
  return (
    <header style={{ padding: "10px",  }}>
      <nav>
        <ul style={{ display: "flex", gap: "15px", listStyle: "none", margin: 0, padding: 0 }}>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
