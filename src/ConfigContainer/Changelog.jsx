import React, { Component } from "react";

function Changelog(props) {
    if (props.isViewingChangelog) {
        return (
            <div id="changelog">
                <span className="notification">
                    <p id="version-name">Social Raid version 1.1</p>
                    <ul>
                        <li>Added a customizable description of rewards for streamers to use</li>
                        <li>Adjusted the visibility of some interface elements</li>
                        <li>Some miscellaneous bug fixes</li>
                    </ul>

                    <div>  <a className="support-link" href='mailto:support@moopaloo.com'>Need Support?</a>
                        <a className="support-link" target="_blank" href='https://twitter.com/social_raid'>Our Twitter</a></div>

                </span>


            </div >
        );
    } else {
        return null;
    }
}

export default Changelog;