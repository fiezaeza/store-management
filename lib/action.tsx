"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Orders from "@/components/tabledata";

// Define the schema with custom date validation
const OrdersSchema = z.object({
    name: z.string().nonempty("Name is required"),
    price: z.number().positive("Price must be a positive number"),
    qty: z.number().int().positive("Quantity must be a positive integer"),
    supplier: z.string().nonempty("Supplier is required"),
    date: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date format",
    }),
});

export const saveOrders = async (prevState: any, formData: FormData) => {
    // Convert form data entries to an object with correct types
    const rawData = Object.fromEntries(formData.entries());
    const parsedData = {
        name: rawData.name,
        price: parseFloat(rawData.price as string),
        qty: parseInt(rawData.qty as string),
        supplier: rawData.supplier,
        date: rawData.date,
    };

    const validateFields = OrdersSchema.safeParse(parsedData);

    if (!validateFields.success) {
        return {
            Error: validateFields.error.flatten().fieldErrors,
        };
    }

    const { name, price, qty, supplier, date } = validateFields.data;
    const sum = price * qty;

    try {
        await prisma.orders.create({
            data: {
                name: name,
                price: price,
                qty: qty,
                sum: sum,
                supplier: supplier,
                date: date,
            },
        });
    } catch (error) {
        console.error("Failed to create new order:", error);
        return { message: "Failed to create new order" };
    }

    revalidatePath("/orders");
    return redirect("/orders");
};

export const getOrdersList = async (query: string) => {
    try {
        const orders = await prisma.orders.findMany({
            select: {
                id: true,
                name: true,
                price: true,
                qty: true,
                sum: true,
                supplier: true,
                date: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        return orders;
    } catch (error) {
        throw new Error("Failed to fetch order data");
    }
};

export const getData = async (query: string) => {
    try {
        const employees = await prisma.orders.findMany({
            where: {
                name: {
                    contains: query,
                },
            }, 
            orderBy: {
                createdAt: "desc",
            },
        });
        return Orders;

    } catch (error) {
        throw new Error("Failed to fetch employees data";)
    }
}

export const getOrdersById = async (id: string) => {
    try {
        const orders = await prisma.orders.findUnique({
            where: { id },
        });
        return orders;
    } catch (error) {
        throw new Error("Failed to fetch contact data");
    }
};

export const updateOrders = async (
    id: string,
    prevState: any,
    formData: FormData
) => {
    const rawData = Object.fromEntries(formData.entries());
    const parsedData = {
        name: rawData.name,
        price: parseFloat(rawData.price as string),
        qty: parseInt(rawData.qty as string, 10),
        supplier: rawData.supplier,
        date: rawData.date,
    };

    const validateFields = OrdersSchema.safeParse(parsedData);

    if (!validateFields.success) {
        return {
            Error: validateFields.error.flatten().fieldErrors,
        };
    }

    const { name, price, qty, supplier, date } = validateFields.data;
    const sum = price * qty;

    try {
        await prisma.orders.update({
            data: {
                name: name,
                price: price,
                qty: qty,
                sum: sum,
                supplier: supplier,
                date: date,
            },
            where: { id },
        });
    } catch (error) {
        return { message: "Failed to update orders" };
    }

    revalidatePath("/orders");
    return redirect("/orders");
};

export const deleteOrders = async (id: string) => {
    try {
        await prisma.orders.delete({
            where: { id },
        });
    } catch (error) {
        return { message: "Failed to delete orders" };
    }

    revalidatePath("/orders");
};
