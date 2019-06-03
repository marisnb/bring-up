import React from 'react'
import {Header} from "../header/Header";
import {Modal} from "../model/Modal";
import {PrimarySideNav} from "../nav/PrimarySideNav";
import {SecondarySideNav} from "../nav/SecondarySideNav";
import {Editor} from "../editor/Editor";
import {Profile} from "../profile/Profile";

const Home = () => {
    return (
        <div id="content" className={"content"}>
                <Header/>
                <div id="main" >
                    <div className="watermark">
                        ____bring up____
                    </div>
                    <PrimarySideNav/>
                    {/*<SecondarySideNav/>*/}
                    <Editor/>
                    {/*<Modal/>*/}
                </div>
        </div>
    )
};

export {Home};