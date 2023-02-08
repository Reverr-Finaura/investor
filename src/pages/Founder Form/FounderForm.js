import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { database } from '../../firebase/firebase'
import styles from "./FounderForm.module.css"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const FounderForm = () => {

    const uniqueId=useParams().form_Id

    useEffect(()=>{
const getListOfUniqueId=async()=>{
    try {
        let listOfUniqueId
        await (
          await getDocs(collection(database, `metaData`))
        ).forEach((doc) => {
        if(doc.id==="applyForDeals"){
          listOfUniqueId=( doc.data().uniqueId);
        }
          
        });
        checkForAuthenticity(listOfUniqueId);
      } catch (error) {
        console.log("Err: ", error);
      }
}
        getListOfUniqueId()
    },[])

 useEffect(()=>{
    const getListOfCompletedId=async()=>{
        try {
            let listOfCompletedId
            await (
              await getDocs(collection(database, `metaData`))
            ).forEach((doc) => {
            if(doc.id==="applyForDeals"){
                listOfCompletedId=( doc.data().completedId);
            }
              
            });
            redirectUser(listOfCompletedId);
          } catch (error) {
            console.log("Err: ", error);
          }
    }
getListOfCompletedId()
 },[])  
    
//CHECK FOR AUTHENTICITY
function checkForAuthenticity(idList){
    if(idList.includes(uniqueId)){toast.success("Welcome ! Kindly Fill Out The Form");return}
    toast.error("Not Authenticated")
 window.location.href="https://reverr.io";
 
}

//REDIRECT USER TO SOME OTHER PAGE
function redirectUser(idList){
if(!idList.includes(uniqueId)){return}
toast.error("Already Filled the form")
window.location.href="https://reverr.io";
}

  return (
    <>
<ToastContainer/>
    <div>FounderForm</div>
    </>
  )
}

export default FounderForm