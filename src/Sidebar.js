import { Avatar, IconButton } from "@material-ui/core";
import React,{useState,useEffect} from "react";
import "./Sidebar.css";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined"
import SidebarChat from "./SidebarChat";
import db from "./firebase"
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
 const[channels, setChannels] = useState([])
 const user = useSelector(selectUser);


  useEffect(() => {
    db.collection("channels").onSnapshot(snapshot =>(setChannels(

      snapshot.docs.map(doc => ({
        id: doc.id,
        channel: doc.data(),
      }))
    )))

},[])


  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar className="sidebar__avatar"/>
        <div className="sidebar__input">
          <SearchIcon />
          <input placeholder="Search" />
        </div>
        <IconButton variant="outlined" className="sidebar__inputButton">
            <RateReviewOutlinedIcon/>
        </IconButton>

      </div>

      <div className="sidebar__chats">

   {channels.map(({id, channel}) => (<SidebarChat
   
   key = {id}
   id ={id}
   channelName = {channel.channelName}

   />))}
         
        
      </div>
    </div>
  );
}

export default Sidebar;
