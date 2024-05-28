import styles from "@/styles/postDetail.module.css";
import { Fragment } from "react";

type TPostTitleProps = {
  title: string | undefined;
  writer: string | undefined;
};
export default function PostTitle(props: TPostTitleProps) {
  return (
    <Fragment>
      <h1 className={styles.post_title}>{props.title}</h1>
      <p className={styles.author_name}>by {props.writer}</p>
    </Fragment>
  );
}
