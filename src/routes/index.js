import React from "react";
import { Switch,Route } from "react-router-dom";
import Home from"../views/home";
import AllMentors from "../views/AllMentors";
import Dashboard from "../views/Dashboard";
import DashMentors from "../views/dashboard/Mentors";
import SignupForm from "../components/SignupForm";


const Index=()=>{

    return (
        <Switch>
            <Route component={AllMentors} path={["/allMentors"]}/>
            <Route component={Dashboard} path="/dashboard"/>
            <Route component={DashMentors} path="/dashmentors"/>
            <Route component={SignupForm} path={["/SignupForm"]}/>
            <Route component={Home} path={["/home","/"]}/>
        </Switch>
    )


}
export default Index;