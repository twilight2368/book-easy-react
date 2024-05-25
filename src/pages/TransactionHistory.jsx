import { Typography } from "@material-tailwind/react";
import WrapBar from "../components/WrapBar";
import TransactionsTable from "../components/transactions/TransactionsTable";

const TransactionHistory = (props) => {
    return (
        <>
            <WrapBar>
                <div className="  pl-10 pr-10 pt-5">
                    <div className="w-full pl-10 mb-5 min-h-full flex flex-col items-start gap-10">
                        <Typography variant="h4">Transaction History</Typography>
                        <TransactionsTable />
                    </div>
                </div>
            </WrapBar>
        </>
    );
}

export default TransactionHistory;