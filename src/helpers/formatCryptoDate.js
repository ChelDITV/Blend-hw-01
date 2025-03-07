import { format } from "date-fns";
 
export const formatCryptoDate = (date) => {
  return format(new Date(date), "dd/MM/yyyy, hh:mm a");
};
