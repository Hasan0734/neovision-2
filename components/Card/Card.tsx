import { useRouter } from "next/router";
import Classes from "./Card.module.css";

const Card = (props: any) => {
  const { pathname } = useRouter();
  const children: any = props.children;
  return <div className={`${Classes.card}`}>{children}</div>;
};

export default Card;
