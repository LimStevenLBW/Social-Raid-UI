import React, { Component } from "react";

/*Streamer Customizable Reward Screen*/
function RewardsOverlay(props) {
    if (props.isViewingRewards) {
        return (
            <div className="dialog-overlay">
                <p className="dialog-container">
                    Become immortalized for your support on the leaderboard and receive chat shoutouts for reaching referral milestones. Thank you for helping!    Become immortalized for your support on the leaderboard and receive chat shoutouts for reaching referral milestones. Thank you for helping!

                <div style={{ paddingTop: '15px' }}>
                        <button
                            className="dialog-button"
                            onClick={() => props.onClosingRewards()}
                        >
                            Dismiss
                  </button>
                    </div>
                </p>

            </div >

        );
    } else {
        return null;
    }
}

export default RewardsOverlay;