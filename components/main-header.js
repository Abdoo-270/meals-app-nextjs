import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import classes from "@/components/main-header.module.css";
export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} priority alt="a plate with foods and fruits" />
        Güzel Yemekler
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse meals</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
