import React, { Component } from "react";

/*If the user has not shared their ID, we display the dialog*/
function PermissionsOverlay(props) {
    if (!props.hasPermissionsShared) {
        return (
            <div className="dialog-overlay">
                <p className="dialog-container">
                    Earn points for referring viewers and help out your favorite streamer!
                    But first, to track your points, we'll need something to call you.

                    <div style={{ paddingTop: '15px' }}>
                        <button className="dialog-button" onClick={() => props.onClosingPermissions()}>
                            Use an Alias
                        </button>

                        <button className="dialog-button" onClick={() => props.onClosingPermissions()}>
                            Use Username
                        </button>
                    </div>



                </p>
            </div >
        );
    } else {
        return null;
    }
}
export default PermissionsOverlay;