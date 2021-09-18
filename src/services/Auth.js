import axios from "axios";


const FREEMENTOR_API_AUTH="https://peermantor.herokuapp.com";

const config={
    headers:{
        'Content-Type':'application/json'
    }
}
class AuthApi{
    async login(data){
try{

    const res=await axios.post(FREEMENTOR_API_AUTH+"/PeerMontor/v1/user/signin", data,config);
    return res;
}
catch(error){
    console.log(error);
}
    }
    async signup(data){
        try{
        
            const res=await axios.post(FREEMENTOR_API_AUTH+"/PeerMontor/v1/user/signup", data,config);
            return res;
        }
        catch(error){
            console.log(error);
        }
            }
}
export default new AuthApi();