"use client";

import type { Orders } from "@prisma/client";
import { useFormState } from "react-dom";
import { updateOrders } from "@/lib/action";

const UpdateForm = ({ orders }: { orders: Orders }) => {
    const UpdateOrdersWithId = updateOrders.bind(null, orders.id);
    const [state, formAction] = useFormState(UpdateOrdersWithId, null);

    return (
        <div className="container mx-auto p-6 max-w-lg mt-10">
            <h1 className="text-4xl font-bold text-center mb-8 text-white">Update Order</h1>
            <div className="bg-gray-800 shadow-md rounded-lg p-6">
                <form action={formAction} method="post" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                            Nama Barang
                        </label>
                        <input 
                            type="text"
                            name="name"
                            id="name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-900 text-white"
                            placeholder="Nama Barang"
                            defaultValue={orders.name}
                        />
                        {state?.Error?.name && (
                            <p className="mt-2 text-sm text-red-600" id="name-error">
                                {state.Error.name}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-300">
                            Harga
                        </label>
                        <input 
                            type="number"
                            name="price"
                            id="price"
                            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-900 text-white"
                            placeholder="Harga"
                            defaultValue={orders.price}
                        />
                        {state?.Error?.price && (
                            <p className="mt-2 text-sm text-red-600" id="price-error">
                                {state.Error.price}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="qty" className="block text-sm font-medium text-gray-300">
                            Kuantitas
                        </label>
                        <input 
                            type="number"
                            name="qty"
                            id="qty"
                            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-900 text-white"
                            placeholder="Kuantitas"
                            defaultValue={orders.qty}
                        />
                        {state?.Error?.qty && (
                            <p className="mt-2 text-sm text-red-600" id="qty-error">
                                {state.Error.qty}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="supplier" className="block text-sm font-medium text-gray-300">
                            Supplier
                        </label>
                        <input 
                            type="text"
                            name="supplier"
                            id="supplier"
                            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-900 text-white"
                            placeholder="Supplier"
                            defaultValue={orders.supplier}
                        />
                        {state?.Error?.supplier && (
                            <p className="mt-2 text-sm text-red-600" id="supplier-error">
                                {state.Error.supplier}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-300">
                            Tanggal Pemesanan
                        </label>
                        <input 
                            type="text"
                            name="date"
                            id="date"
                            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-900 text-white"
                            placeholder="Tanggal Pemesanan"
                            defaultValue={orders.date}
                        />
                        {state?.Error?.date && (
                            <p className="mt-2 text-sm text-red-600" id="date-error">
                                {state.Error.date}
                            </p>
                        )}
                    </div>

                    <div>
                        {state?.message && (
                            <p className="mt-2 text-sm text-red-600" id="message-error">
                                {state.message}
                            </p>
                        )}
                    </div>

                    <div className="flex justify-center">
                        <button type="submit" className="btn btn-primary px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateForm;
