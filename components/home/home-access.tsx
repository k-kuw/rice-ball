import Link from "next/link";
import AccessMap from "../access-map";
import classes from "./home.module.css";

export default function HomeAccess() {
  return (
    <div className="columns is-flex-direction-row-reverse pt-6">
      <div className="column">
        <div className="has-text-centered">
          <h2 className="title is-2 has-text-success has-text-weight-bold">
            お店までのアクセス
          </h2>
          <p className="is-size-3 m-4">〒000-0000 東京都新宿区新宿0-0-0</p>
        </div>
        <div className="columns is-centered pt-6 mb-6">
          <Link href="/aboutus">
            <div
              className={`column ${classes.frame}  px-6 py-3 has-text-weight-semibold has-text-centered mx-6`}
            >
              <p className="is-size-2">ACCESS ~アクセス~ →</p>
            </div>
          </Link>
        </div>
      </div>
      <AccessMap />
    </div>
  );
}
