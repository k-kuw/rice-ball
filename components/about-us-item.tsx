import Image from "next/image";
import classes from "./about-us-item.module.css"

function AboutUsItem(props: any) {
  return (
    <li className={`columns mt-6 has-background-warning-light ${props.addClass} ${classes.space}`}>
      <div className="mt-6 column mx-6">
        <h3 className={`subtitle is-2 has-text-weight-semibold has-text-centered ${classes.border}`}>{props.title}</h3>
        <p className="is-size-3">{props.children}</p>
      </div>
      <div className="column is-one-third mx-6 py-6">
        <figure className="image is-square">
          <Image
            src={`/${props.image}.jpeg`}
            alt={`${props.image}`}
            fill
            className="is-rounded"
          />
        </figure>
      </div>
    </li>
  );
}

export default AboutUsItem;
