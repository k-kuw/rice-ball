import Image from "next/image";
import classes from "./home.module.css";

export default function HomeTop() {
  return (
    <div className={`has-background-warning-light p-6 ${classes.hometop}`}>
      <figure className="image is-3by1">
        <Image src="/home-top.jpeg" alt="home-top" fill />
      </figure>
    </div>
  );
}
