import React from "react";
import 'bootstrap';
import { FcAddressBook,FcDatabase } from "react-icons/fc";
import { Link } from "react-router-dom";

function TabNav(props){
    return(
        <div className="container-fluid sticky-top tab">
            <div className="row">
                <div class="col p-3">
                    <span className="Ticons"><img src={props.LanguageIcon} height="100px" width="120px"/></span>
                    <span className="Thead">Learn {props.LanguageName} Programming </span>
                </div>

            </div>    
            <div className="row">
                <div class="col"></div>
                <div class="col"><h4 className="Thead"><FcAddressBook />Tutorials</h4></div>
                <div class="col">
                    <h4 className="Thead"><FcDatabase/>
                        <Link to={`/problems/${props.LanguageName}`} style = {{textDecoration : "none"}}>
                            <span className="linkColor">Problems</span>
                        </Link>
                    </h4>
                </div>
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>

            </div>
        </div>    
    );

};
export default TabNav;