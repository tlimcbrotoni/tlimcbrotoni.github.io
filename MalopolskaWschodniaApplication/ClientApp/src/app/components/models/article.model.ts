import { Article_Type } from "./article_type";
import { User } from "./user.model";

export interface Article {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  date: string;
  googleLink: string;
  typeId: number;
  type: Article_Type;
  userId: string;
  user: User;
}
