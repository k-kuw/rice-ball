import Link from "next/link";

export default function Header() {
  return (
    <header className="columns is-fluid level my-6">
      <div className="column is-one-quarter level-left">
        <div className="is-flex-direction-column level-item">
        <h5 className="subtitle is-4">おにぎり屋さん</h5>
          <h1 className="title is-1 has-text-success has-text-weight-bold m-0 has-text-centered">
            にぎり~NIGIRI~
          </h1>
        </div>
      </div>
      <nav className="column is-half pt-5 mr-3">
        <ul className="columns level-item has-text-weight-bold">
          <li className="column">
            <Link href="/">
              <div className="has-text-centered">
                HOME
                <br />
                ホーム
              </div>
            </Link>
          </li>
          <li className="column">
            <Link href="/about-us">
            <div className="has-text-centered">

                ABOUT US
                <br />
                私たちについて
              </div>
            </Link>
          </li>
          <li className="column">
            <Link href="/menu">
            <div className="has-text-centered">

                MENU
                <br />
                メニュー
              </div>
            </Link>
          </li>

          <li className="column">
            <Link href="/access">
            <div className="has-text-centered">

                ACCESS
                <br />
                アクセス
              </div>
            </Link>
          </li>
          <li className="column">
            <Link href="/contact">
            <div className="has-text-centered">

                CONTACT
                <br />
                コンタクト
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="column is-one-quarter level-right pr-6">
        <div className="box has-background-success-light m-4 level-item is-flex-direction-column has-text-weight-semibold">
          <p>営業時間 / 10:00~18:00</p>
          <p>水曜定休日</p>
        </div>
      </div>
    </header>
  );
}
