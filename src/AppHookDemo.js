import { useEffect, useState } from "react";
import axios from 'axios';
import './App.css';
import UserCard from "./UserCard";




function AppHookDemo () {

    const [users, setUsers] = useState([]);

    

    // const getUsersFromApi = () => {

    //     axios.get('https://randomuser.me/api?results=25')
    //         .then( res => {
    //             console.log(res.data);
    //             const { data } = res;
    //             setUsers(data.results.map(user => ({ ...user, show: false}))) 
    //         })

    // };

    

    


    useEffect(() => {

        

        axios.get('https://randomuser.me/api?results=25')

            .then( res => {

                // console.log(res.data);

                const { data } = res;

                setUsers(data.results.map(user => ({ ...user, show: false}))) 

            })

    }, [])

    

    const toggleDetails = (id) => {

        // console.log("Toggling details", id);

        setUsers(

            users.map((user, index) => {

                if (index === id) {

                    return {

                        ...user,

                        show: !user.show
                    }
                }

                return user
            })
        )

    }

    return (

        

        <div>
            
            {users.map((user, idx) => (
                

                <UserCard
                
                 key = {idx}

                 user = {user}

                 id = {idx}

                 img = {user.picture.large}

                 name = {`${user.name.first} ${user.name.last}`}

                 email = {user.email} 

                //  show = {user.show}

                 onClick = {() => toggleDetails}

                 />
            ))}
            
        </div>

    );


}



export default AppHookDemo;