import React, { Component } from "react";

function Changelog(props) {
    if (props.isViewingChangelog) {
        return (
            <div id="changelog">
                <span className="notification">
                    <p id="version-name">Social Raid version 1.1.0</p>
                    <ul>
                        <li>Added a customizable description of rewards for streamers to use</li>
                        <li>Adjusted the visibility of interface elements</li>
                        <li>Miscellaneous bug fixes</li>
                    </ul>


                    <div id="support-description">
                        <p >Questions, comments, or concerns? Contact us!</p>
                        <a className="support-link" href='mailto:support@moopaloo.com'>Our Email</a>
                        <a className="support-link" target="_blank" href='https://twitter.com/social_raid'>Our Twitter</a>
                    </div>


                </span>


            </div >
        );
    } else {
        return null;
    }
}

export default Changelog;