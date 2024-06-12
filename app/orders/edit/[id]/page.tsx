import UpdateForm from "@/components/editform";
import { getOrdersById } from "@/lib/action";
import { notFound } from "next/navigation";

const updateOrdersPage = async ({ params } : { params: { id: string} }) => {
    const id = params.id;
    const orders = await getOrdersById(id);
    // console.log(orders);
    if(!orders){
        notFound();
    }
    return (
        <div className="max-w-md mx-auto mt-5">
            <h1 className="text-2xl text-center mb-2">Update Orders</h1>
            <UpdateForm orders={orders}/>
        </div>
    );
};

export default updateOrdersPage