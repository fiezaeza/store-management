import { deleteOrders } from "@/lib/action";
  
export const DeleteButton = ({ id }: { id: string }) => {
  const DeleteOrderstWithId = deleteOrders.bind(null, id);
  return (
    <form action={DeleteOrderstWithId}>
      <button className="btn btn-error">
        Delete
      </button>
    </form>
  );
};