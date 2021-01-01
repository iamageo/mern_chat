import React from 'react';

const dashboard = () => {
  return (
    <div className="card">
    <div className="cardHeader">Chat</div>
    
    <div className="cardBody">
    
    <div className="inputGroup">
        <label htmlFor="chatRoom">Nome da Sala</label>
        <input type="text" name="chatRoom" id="chatRoom" placeholder="Dota 2 Chat"/>
    </div>

    <button>Criar Chat</button>

    <div className="chatrooms">
        <div className="chatroom">
            <div>
                Happy newbie
            </div>

            <div className="join">
                Join
            </div>
        </div>

        <div className="chatroom">
            <div>
                Happy newbie
            </div>

            <div className="join">
                Join
            </div>
        </div>

        <div className="chatroom">
            <div>
                Happy newbie
            </div>

            <div className="join">
                Join
            </div>
        </div>
    </div>
    
    </div>

</div>
  )
}

export default dashboard;