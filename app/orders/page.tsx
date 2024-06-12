import Link from "next/link";
import { Suspense } from "react";
import TableData from "@/components/tabledata"

const Home = () => {
    return (
<div className="w-screen py-20 flex justify-center flex-col items-center">
      <div className="flex items-center justify-between gap-1 mb-5">
        <h1 className="text-4xl font-bold">BetaMart</h1>
      </div>    
        <div className="overflow-x-auto">
          <div className="mb-2 w-full text-right">
            <Link
              href="/orders/create"
              className="btn btn-primary">
              Create
            </Link>
          </div>
          <TableData/>
      </div>  
    </div>
    );
}

export default Home;