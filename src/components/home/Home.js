import React from 'react'
import {Header} from "../header/Header";
import {PrimarySideNav} from "../nav/PrimarySideNav";
import {SecondarySideNav} from "../nav/SecondarySideNav";
import {Editor} from "../editor/Editor";

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
        </div>
    )
};

export {Home};