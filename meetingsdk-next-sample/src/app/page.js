"use client";
import React, { useEffect } from "react";
import "./page.css";

export default function Zoom() {
  const authEndpoint = "http://localhost:4000";
  const sdkKey = "";
  const meetingNumber = "";
  const passWord = "";
  const role = 0;
  const userName = "React";
  const userEmail = "";
  const registrantToken = "";
  const zakToken = "";
  var leaveUrl = "http://localhost:3000";

  useEffect(() => {
    init();
  }, []);

  async function init() {
    const { ZoomMtg } = await require("@zoomus/websdk");
    ZoomMtg.setZoomJSLib("https://source.zoom.us/2.13.0/lib", "/av");
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareWebSDK();
    document.getElementById("zmmtg-root").style.display = "none";
  }

  function getSignature(e) {
    e.preventDefault();

    fetch(authEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        meetingNumber: meetingNumber,
        role: role,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        startMeeting(response.signature);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async function startMeeting(signature) {
    document.getElementById("zmmtg-root").style.display = "block";
    const { ZoomMtg } = await import("@zoomus/websdk");

    ZoomMtg.init({
      leaveUrl: leaveUrl,
      success: (success) => {
        console.log(success);

        ZoomMtg.join({
          signature,
          sdkKey,
          meetingNumber,
          passWord,
          userName,
          userEmail,
          tk: registrantToken,
          zak: zakToken,
          success: (success) => {
            console.log(success);
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  return (
    <div className="main">
      <main>
        <h1>Zoom Meeting SDK Sample React</h1>

        <button onClick={getSignature}>Join Meeting</button>
      </main>
    </div>
  );
}
