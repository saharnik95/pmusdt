import CopyIconComponent from "@/components/icons/CopyIconComponent";
import DiamondsIconComponent from "@/components/icons/DiamondsIconComponent";
import PersonsIconComponent from "@/components/icons/PersonsIconComponent";
import { Button, Typography } from "@mui/material";
import StickyHeadTable from "./CustomPaginationActionsTable";
import TableStatus from "@/components/atoms/table/TableStatus";

interface Column {
  id: string;
  label: string;
  minWidth: number;
  align?: "right" | "left" | "center";
  format?: (value: any) => string | JSX.Element;
}
const columns: Column[] = [
  { id: "Amount", label: "Amount", minWidth: 100, align: "center" },
  { id: "To", label: "To", minWidth: 100, align: "center" },
  { id: "Date", label: "Date", minWidth: 150, align: "center" },
  { id: "Status", label: "Status", minWidth: 100, align: "center" },
];

const rows = Array.from({ length: 4 }, (_, i) => {
  // Determine status and corresponding styles
  const statusText =
    i % 3 === 0 ? "Completed" : i % 3 === 1 ? "Pending" : "Failed";
  const statusStyles = {
    Completed: { textColor: "#035610", bgColor: "#40A578" },
    Pending: { textColor: "#603E0F", bgColor: "#F3AC76" },
    Failed: { textColor: "#60140F", bgColor: "#F66066" },
  };

  return {
    To: "x09aa998ee454c456255daf3ac94908f1dcfb7033",

    Amount: (
      <span className="flex flex-row items-center gap-2">
        <img
          src="./images/tether.png"
          alt=""
          className="w-6 h-6 rounded-full"
        />
        USDT
      </span>
    ),

    Date: `25-02-2023`,
    Status: (
      <TableStatus
        textColor={statusStyles[statusText].textColor}
        bgColor={statusStyles[statusText].bgColor}
        text={statusText}
      />
    ),
    Link: <a href="#">See More</a>,
  };
});

export default function UserPartner() {
  return (
    <div className="flex flex-col   bg-form-background lg:pt-[38px] lg:pb-[61px] lg:w-[850px]  lg:px-[20px]  rounded-[20px]">
      {/*affilient link*/}
      <div className=" flex flex-col lg:gap-4">
        <Typography className="text-footer-text" variant="FT">
          Your Affiliate Link :
        </Typography>
        <div className="flex justify-between h-full  bg-primary-background rounded-[10px]">
          <span className=" lg:py-[19px] lg:px-[26px]">
            <Typography className="text-white" variant="FI">
              https://en.flashobmen.com/ref/acc0c4c8-c799-4216-a281-6d3d3c43a480{" "}
            </Typography>
          </span>

          <div className="flex items-center justify-center  bg-[#363F50] lg:py-[12px] lg:px-[21px]  rounded-[10px] gap-[6px]">
            <span>
              <CopyIconComponent />
            </span>
            <Typography className="text-footer-text" variant="FR">
              Copy{" "}
            </Typography>
          </div>
        </div>
      </div>

      {/*wallet balance and friends*/}
      <div className="flex justify-between lg:gap-[23px] lg:pt-[11px]">
        {/*wallet balance */}

        <div className="flex items-center  justify-between lg:w-[517px]  bg-primary-background rounded-[10px] lg:px-[16px] lg:py-[22px]">
          <div className="flex items-center justify-between lg:gap-[92px]">
            <div className="flex items-center justify-between lg:gap-4 ">
              <div className="bg-topBar-success flex justify-center items-center w-[67px] h-[67px] rounded-full shadow-boxShadow">
                <DiamondsIconComponent size={25} color="white" />
              </div>

              <div className="flex flex-col  lg:gap-[14px]">
                <Typography variant="PH" className="text-white text-nowrap">
                  Your Wallet Balance{" "}
                </Typography>
                <Typography variant="FH" className="text-topBar-success">
                  320 USDT{" "}
                </Typography>
              </div>
            </div>

            <div>
              <Button
                sx={{
                  color: "white",
                  width: "133px",
                  height: "51px",
                  background: "#40A578",
                  borderRadius: "10px",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "20.8px",
                }}
              >
                withdraw
              </Button>
            </div>
          </div>
        </div>

        {/* friends*/}

        <div className="flex justify-between lg:w-[271px]  bg-primary-background rounded-[10px] lg:py-[22px] lg:px-[32px] lg:gap-[19px]">
          <div className="bg-topBar-pink flex justify-center items-center w-[67px] h-[67px] rounded-full shadow-PinkboxShadow">
            <PersonsIconComponent />
          </div>

          <div className="flex flex-col  lg:gap-[14px]">
            <Typography variant="PH" className="text-white text-nowrap">
              Your Friends{" "}
            </Typography>
            <Typography variant="FH" className="text-topBar-pink">
              320{" "}
            </Typography>
          </div>
        </div>
      </div>

      <div className="lg:mt-4">
        <Typography
          variant="FI"
          className="text-footer-text flex items-center lg:mt-4"
        >
          Get 10
          <span className="px-1">
            <DiamondsIconComponent size={19} color="#40A578" />
          </span>
          For Each Invited User
        </Typography>
      </div>

      <div className="lg:mt-[44px] lg:mb-[22px]">
        <Typography variant="FH" className="text-white">
          Your Impressions
        </Typography>
        <StickyHeadTable columns={columns} rows={rows} />
      </div>
    </div>
  );
}
