function OrdersTable({ orders }) {
    function date_format(date) {
        let d = new Date(date)
        let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        let mon = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
        let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        let time = new Intl.DateTimeFormat('en', { timeStyle: 'short' }).format(d).replace(' ', '');
        return `${mon} ${day}, ${time}, ${year}`
    }

    return (
        <table>
            <thead>
                <tr>
                    <th> <input type="checkbox" /> </th>
                    <th>ID number</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Supplier</th>
                    {/* <th>Total</th> */}
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {orders.map(order =>
                    <tr key={order.id} className={order.status === "pending_confirmation" ? "pending" : ""}>
                        <td> <input type="checkbox" /> </td>
                        <td id="order-id">{"#" + order.id}</td>
                        <td>{order.customer.fname + " " + order.customer.lname}</td>
                        <td>{order.status}</td>
                        <td>{order.supplier}</td>
                        {/* <td>{order.total}</td> */}
                        <td>{date_format(order.created_at)}</td>
                    </tr>)}
            </tbody>
        </table>
    );
}

export default OrdersTable;