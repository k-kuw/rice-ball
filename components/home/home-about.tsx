import Link from "next/link";
import Image from "next/image";
import classes from "./home.module.css";

export default function HomeAbout() {
  return (
    <div className="mt-6">
      <div className="has-text-centered">
        <h2 className="title is-3 has-text-success has-text-weight-bold">
          にぎり~NIGIRI~
        </h2>
        <h2 className="title is-1 has-text-success has-text-weight-bold">
          ３つのこだわり
        </h2>
      </div>
      <ul className="columns mt-5 mx-6">
        <li className="column has-background-success-light has-text-centered mx-5 my-6 p-6">
          <figure className="image is-square">
            <Image
              src="/home-about.jpeg"
              alt="home-about"
              fill
              className="is-rounded"
            />
          </figure>
          <div className="mt-6">
            <h3
              className={`subtitle is-3 has-text-weight-semibold ${classes.border}`}
            >
              にぎりたて
            </h3>
            <p className="is-size-4">にぎりたてを提供できるようにしています</p>
          </div>
        </li>
        <li className="column has-background-success-light has-text-centered mx-5 my-6 p-6">
          <figure className="image is-square">
            <Image
              src="/home-about.jpeg"
              alt="home-about"
              fill
              className="is-rounded"
            />
          </figure>
          <div className="mt-6">
            <h3
              className={`subtitle is-3 has-text-weight-semibold ${classes.border}`}
            >
              魚沼産コシヒカリ使用
            </h3>
            <p className="is-size-4">魚沼産コシヒカリを使用しています</p>
          </div>
        </li>
        <li className="column has-background-success-light has-text-centered mx-5 my-6 p-6">
          <figure className="image is-square">
            <Image
              src="/home-about.jpeg"
              alt="home-about"
              fill
              className="is-rounded"
            />
          </figure>
          <div className="mt-6">
            <h3
              className={`subtitle is-3 has-text-weight-semibold ${classes.border}`}
            >
              国産原料のみ使用
            </h3>
            <p className="is-size-4">具材も国産原料にこだわっています</p>
          </div>
        </li>
      </ul>
      <div className="columns is-centered m-6">
        <Link href="/aboutus">
          <div
            className={`column ${classes.frame}  px-6 py-3 has-text-weight-semibold`}
          >
            <p className="is-size-2">
              ABOUT US ~私たちについて~ →
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
