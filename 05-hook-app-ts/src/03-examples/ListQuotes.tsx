import { ResponseApi } from "../interfaces/ResponseApi";
import { Quote } from "./Quote";
import { v4 as uuid } from "uuid";
export const ListQuotes = ({ data }: { data: ResponseApi[] | null }) => {
  return data?.map(({ author, quote }) => (
    <Quote key={uuid()} author={author} quote={quote} />
  ));
};
