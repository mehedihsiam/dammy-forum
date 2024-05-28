import Icons from "@/assets/icons";
import CUSTOM_COLORS from "@/constants/CUSTOM_COLORS";
import styles from "@/styles/postCard.module.css";
import { Button, Card, toast } from "keep-react";
import { useCallback, useMemo, useState } from "react";

type TPostFooterProps = {
  postId: number;
  hideDetails?: boolean;
  handleGoToDetails?: () => void;
};
export default function PostFooter(props: TPostFooterProps) {
  const [liked, setLiked] = useState(false);
  const handleLiked = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);

  const handleCopyToClipboard = useCallback(() => {
    const mainDomain = window.location.origin;
    window.navigator.clipboard
      .writeText(`${mainDomain}/posts/${props.postId}`)
      .then(() => {
        toast("Post link copied!");
      });
  }, [props.postId]);

  const buttons = useMemo(() => {
    const data = [
      {
        id: 1,
        onClick: handleLiked,
        icon: liked
          ? Icons.HeartFilled(20, 20, CUSTOM_COLORS.red)
          : Icons.HeartOutlined(20, 20, CUSTOM_COLORS.gray),
      },

      {
        id: 2,
        onClick: props.hideDetails ? undefined : props.handleGoToDetails,
        icon: props.hideDetails
          ? null
          : Icons.Details(20, 20, CUSTOM_COLORS.gray),
      },

      {
        id: 3,
        onClick: handleCopyToClipboard,
        icon: Icons.Share(20, 20, CUSTOM_COLORS.gray),
      },
    ];
    return data;
  }, [liked]);

  return (
    <>
      <hr />
      <Card.Footer className={styles.card_footer}>
        <hr />
        {buttons.map((button) => (
          <Button
            key={button.id}
            variant="link"
            onClick={button.onClick}
            className={styles.footer_button}
          >
            {button.icon}
          </Button>
        ))}
      </Card.Footer>
    </>
  );
}
