import { Button, MenuItem, Select, Typography } from "@material-tailwind/react";
import { Modal, Box, TextField } from "@mui/material"
import WrapBar from "../components/WrapBar";
import TransactionsTable from "../components/transactions/TransactionsTable";
import { useLocation } from "react-router";
import SuccessMessage from "../components/SuccessMessage";
import { useState } from "react";
import environment from "../environment";

const TransactionHistory = (props) => {
    const { state } = useLocation();
    const { successMessage } = state || {};
    const [ openSuccessMessage, setOpenSuccessMessage ] = useState(true);
    
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
            { successMessage && <SuccessMessage message={successMessage} open={openSuccessMessage} handleClose={() => setOpenSuccessMessage(false)} /> }
        </>
    );
}

export default TransactionHistory;