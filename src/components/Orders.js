import { useState, useEffect } from 'react';
import DropDownList from './DropDownList';
import OrdersTable from './OrdersTable';
import Pagination from './Pagination';
import './Orders.css';

function Orders() {
    const OrdersInPage = 8;
    const [orders, setOrders] = useState([]);
    const [currentOrders, setCurrentOrders] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    let sort = [{ value: "total", name: "Total A-Z" }, { value: "status", name: "Status A-Z" }]
    let filters = [{ value: 2000, name: "$2000-3000" }, { value: 3001, name: "$3001-more" }]

    const paginate = pageNumber => setPageNum(pageNumber);


    const search = e => {
        let name = e.target.value.toLowerCase()
        if (name) {
            setCurrentOrders(orders.filter(order => {
                return order.customer.fname.toLowerCase().includes(name) || order.customer.lname.toLowerCase().includes(name)
            }))
        }
        else {
            setCurrentOrders(orders)
        }
    }

    const filtering = filter => {
        setCurrentOrders(
            orders.filter(order => {
                if (filter === "3001") {
                    return order.total > 3000
                } else {
                    return order.total <= 3000
                }
            }))
    }

    const sorting = filter => {
        setCurrentOrders(
            [...currentOrders].sort((order1, order2) => {
                if (filter === "total") {
                    return order1.total - order2.total
                } else {
                    return order1.status.localeCompare(order2.status)
                }
            }))
    }

    useEffect(() => {
        async function fetchOrders() {
            const response = await fetch("https://o53hpo7bf9.execute-api.us-west-2.amazonaws.com/dev/orders");
            const json = await response.json();
            setOrders(json.orders)
            setCurrentOrders(json.orders)
        }
        fetchOrders();
    }, []);

    const indexOfLastOrder = pageNum * OrdersInPage;
    const indexOfFirstOrder = indexOfLastOrder - OrdersInPage;
    const currentOrdersInpage = currentOrders.slice(indexOfFirstOrder, indexOfLastOrder);

    return (
        <div className="orders-container">
            <input type="text" id="search-name" onKeyUp={search} placeholder="Search by name" title="Type in a name"></input>
            <div className="orders">
                <div className="filters-container">
                    <p className="requests">Requests</p>
                    <DropDownList listName="sort-by" label="Sort by" list={sort} onChange={sorting} />
                    <DropDownList listName="filters" label="Filters" list={filters} onChange={filtering} />
                </div>
                <OrdersTable orders={currentOrdersInpage} />
                <Pagination ordersInPage={OrdersInPage} total={currentOrders.length} paginate={paginate} />
            </div>
        </div>
    );
}

export default Orders;