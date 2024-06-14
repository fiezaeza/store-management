import Link from "next/link";
import { table } from "console"
import { getData, getOrdersList } from "@/lib/action";
import { DeleteButton } from "@/components/delete";

const Orders = async ({
    query
    }: {
    query: string;  
    }) => {
        const orders = await getOrdersList(query);
    return (
        <table className="table table-zebra">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th className="py-3 px-6">ID</th>
                    <th className="py-3 px-6">Nama Barang</th>
                    <th className="py-3 px-6">Harga</th>
                    <th className="py-3 px-6">Kuantitas</th>
                    <th className="py-3 px-6">Total</th>
                    <th className="py-3 px-6">Supplier</th>
                    <th className="py-3 px-6">Tanggal Pemesanan</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((rs, index) => (
                    <tr key={index} className="border-b">
                    <td className="py-3 px-6">{index + 1}</td>
                    <td className="py-3 px-6">{rs.name}</td>
                    <td className="py-3 px-6">{rs.price}</td>
                    <td className="py-3 px-6">{rs.qty}</td>
                    <td className="py-3 px-6">{rs.sum}</td>
                    <td className="py-3 px-6">{rs.supplier}</td>
                    <td className="py-3 px-6">{rs.date}</td>
                    <td className="flex justify-center gap-1 py-3">
                        <Link
                            href={`/orders/edit/${rs.id}`}
                            className="btn btn-info">
                        Edit
                        </Link> 
                        <DeleteButton id={rs.id}></DeleteButton>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default Orders;