import React, { useState } from "react";
import { Button, Card, Row, Col  } from 'react-bootstrap';
import axios from 'axios';


function UserCard(props) {

    const [hidden, setHidden] = useState(true);

    const [userData, setUserData] = useState();
    

    const { user } = props;

    const handleToggleDetails = () => {

        setHidden(!hidden)
        

        console.log("Button clicked for user:", user);

        if (userData) {
            return;
        }

        axios.get('https://randomuser.me/api?results=25')

            .then( res => {

                // console.log(res.data);

                const { data } = res;

                setUserData(data.results.map(user => ({ ...user, show: false}))) 

            })

        
    

        
        

    };

    return (
        
   

    <Card style={{ width: '18rem',

        display: 'flexbox',
        placeItems: 'center',

        position: 'relative',
    
    
    }}>

      <Card.Img variant="top" src={user.picture.large} />

      <Card.Body>

        <Card.Title>{user.name.first} {user.name.last} </Card.Title>

        <Card.Text>

        {!hidden && userData && (

                    <div>
                        
                        {user.email}
                        <br />
                        {user.gender}
                        <br/>
                        {user.location.city}
                        <br />
                        {user.phone}
                        <br />
                        {user.cell}
                        
                    </div>

                )}
            
            
          

        </Card.Text>

        <Button variant="primary" onClick={handleToggleDetails}> {hidden ? 'Show More!' : 'Hide!'}!</Button>
        

      </Card.Body>

    </Card>
    )


}

export default UserCard;