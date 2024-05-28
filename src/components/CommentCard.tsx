import { Card } from "keep-react";
import styles from "@/styles/commentCard.module.css";

type TCommentCardProps = {
  commenter: string;
  comment: string;
};

export default function CommentCard(props: TCommentCardProps) {
  return (
    <div className={styles.container}>
      <p className="font-semibold">{props.commenter}</p>
      <Card.Description>{props.comment}</Card.Description>
    </div>
  );
}
