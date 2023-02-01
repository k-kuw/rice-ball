import Image from "next/image";
import Link from "next/link";
import classes from "./home.module.css";

// HomeページのMenuコンポーネント
export default function HomeMenu() {
  return (
    <div className="columns has-background-warning-light p-6">
      <div className="column mx-6">
      <h2 className="title is-2 has-text-success has-text-weight-bold has-text-centered">
          メニュー
        </h2>
        <p className="is-size-3 my-6">
          人気の「塩にぎり」、「鮭おにぎり」のほか、旬の食材を活かしたおにぎりをご用意しております。
        </p>

        <Link href="/menu">
          <div
            className={`column ${classes.frame} m-6 py-3 has-text-weight-semibold`}
          >
            <p className="is-size-2 has-text-centered">MENU ~メニュー紹介~ →</p>
          </div>
        </Link>
      </div>
      <div className="column">
        <figure className="image is-4by3">
          <Image src="/home-menu.jpeg" alt="home-top" fill />
        </figure>
      </div>
    </div>
  );
}
