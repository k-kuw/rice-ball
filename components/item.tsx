import Image from "next/image";
import classes from "./item.module.css"

export default function Item(props: any) {
  const items = props.items;
  return (
    <ul className="columns is-variable is-8 is-flex-wrap-wrap m-6 is-centered">
      {items.map((item: any) => (
        <li key={item.id} className="card column is-one-quarter m-6">
          <div className="card-image has-background-warning-light">
            <figure className="image is-4by3">
              <Image src={`/onigiri/${item.id}.png`} alt={item.name} fill />
            </figure>
          </div>
          <div className="card-content has-text-centered">
            <p className="title is-4 has-text-weight-bold">
              {item.id}: {item.name}
            </p>
            <p className="subtitle is-5">{item.price}円</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
