import './SideBar.css';

function SideBar() {

    return (
        <div className="side-bar">
            <p className="title">XO.</p>
            <div className="profile">
                <img alt="profile_photo" src="profile_photo.png" />
                <div className="profile-text">
                    <p className="name">Ahmed Reda</p>
                    <p className="id">#1253724</p>
                </div>
            </div>
            <div className="dashboard">
                <img alt="dashboard" src="dashboard.png"></img>
                <p className="side-bar-text">Dashboard</p>
            </div>
            <div className="side-bar-container">
                <img alt="Requests" src="requests.png"></img>
                <p className="side-bar-text">Requests</p>
            </div>
            <div className="requests-subtext-container">
                <p className="side-bar-text">Pending</p>
                <p className="side-bar-text">Confirmed</p>
                <p className="side-bar-text">All Requests</p>
            </div>
            <div className="side-bar-container">
                <img alt="Users" src="users.png"></img>
                <p className="side-bar-text">Users</p>
            </div>
            <div className="side-bar-container">
                <img alt="Boxes" src="boxes.png"></img>
                <p className="side-bar-text">Boxes</p>
            </div>
            <div className="side-bar-container">
                <img alt="Orders" src="orders.png"></img>
                <p className="side-bar-text">Orders</p>
            </div>
            <hr/>
            <div className="dashboard">
                <img alt="Settings" src="settings.png"></img>
                <p className="side-bar-text">Settings</p>
            </div>
            <div className="logout-container">
                <img alt="Logout" src="logout.png"></img>
                <p className="side-bar-text">Logout</p>
            </div>
        </div>
    );
}

export default SideBar;
