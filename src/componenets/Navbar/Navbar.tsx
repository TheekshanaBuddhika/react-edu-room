import { Component, ReactNode } from "react";

export class Navbar extends Component {
    render() {
        return (

            <>
                <div className="vw-100 bg-neutral-500 p-3 h-20">
                    <div id="nav-inner-wrapper" className="flex justify-between items-center h-full w-full">
                        <div id="logo-wrapper" className="h-full w-max flex flex-row justify-between items-center">
                            <img src="" className="h-full w-auto me-2" />
                            <span>EDU ROOM</span>
                        </div>
                        <div className="w-6 h-px bg-orange-600"></div>
                    </div>
                </div>
            </>

        );
    };
}