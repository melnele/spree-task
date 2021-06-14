import './Pagination.css';

function Pagination({ ordersInPage, total, paginate }) {
    const pages = [];

    for (let i = 1; i <= Math.ceil(total / ordersInPage); i++) {
        pages.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                {pages.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={(e) => {
                            e.preventDefault();
                            paginate(number);
                        }} href="/" className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;