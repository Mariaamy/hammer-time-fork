import './UserCard.css';


function UserCard(props) {
    return (
            <div class="user">
                    {/* href to user */}
                    <p className="user--link"><a href="/user">Anna Andersen</a></p>
            </div>
    );
}


  
export default UserCard;