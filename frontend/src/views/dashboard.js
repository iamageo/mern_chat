import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const dashboard = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [chatrooms, setChatRooms] = React.useState([]);

    const getChatRooms = () => {
        axios.get("http://localhost:8000/chatroom", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }).then(response => {
            setChatRooms(response.data);
        }).catch(err => {
            setTimeout(getChatRooms, 3000)
        });
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect( () =>{
        getChatRooms()
        //eslint-disable-next-line
    }, [])

  return (
    <div className="card">
    <div className="cardHeader">Chat</div>
    
    <div className="cardBody">
    
    <div className="inputGroup">
        <label htmlFor="chatRoom"> Nome da Sala </label>
        <input type="text" name="chatRoom" id="chatRoom" placeholder="Dota 2 Chat"/>
    </div>

    <button>Criar Chat</button>

    <div className="chatrooms">
        
        {chatrooms.map((chatroom) => (
        
        <div key={chatroom._id} className="chatroom">
            <div>{chatroom.name}</div>
            <Link to={"/chatroom/" + chatroom._id} >
                <div className="join">Entrar</div>
            </Link>

        </div>
        
        ))}
    
    </div>
    </div>
    </div>
  
  );
};

export default dashboard;