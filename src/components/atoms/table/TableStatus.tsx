import { Typography } from "@mui/material";

interface Props {
  textColor: string;
  bgColor: string;
  text: string;
}

const TableStatus: React.FC<Props> = ({ textColor, bgColor, text }) => {
  return (
    <Typography
      variant="TM"
      className="w-[93px] rounded-[8px] flex justify-center items-center px-[10px] py-[8px]"
      sx={{ color: textColor, backgroundColor: bgColor }}
    >
      {text}
    </Typography>
  );
};

export default TableStatus;
