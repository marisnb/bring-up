import React from 'react'
import {Header} from "../header/Header";
//import {Modal} from "../model/Modal";
import {PrimarySideNav} from "../nav/PrimarySideNav";
//import {SecondarySideNav} from "../nav/SecondarySideNav";
import Editor from "../editor/Editor";
//import {Profile} from "../profile/Profile";

const Home = () => {
    return (
        <div>
            <Header/>
            <div id="main" >
                <div className="watermark">
                    ____bring up____
                </div>
                <PrimarySideNav/>
                <Editor/>
            </div>
        </div>
    )
};

export {Home};