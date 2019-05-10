import React from 'react'
import {Header} from "../header/Header";
import {PrimarySideNav} from "../nav/PrimarySideNav";
import {SecondarySideNav} from "../nav/SecondarySideNav";
import {Editor} from "../editor/Editor";
import {Profile} from "../profile/Profile";

const Home = () => {
    return (
        <div className={"container-fluid px-0"}>
            <div className="watermark">
                ____bring up____
            </div>
            <Header/>
            <PrimarySideNav/>
            {/*<SecondarySideNav/>*/}
            <Editor/>
            <Profile/>

        </div>
    )
};

export {Home};