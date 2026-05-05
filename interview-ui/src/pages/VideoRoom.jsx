import { useEffect } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";

const APP_ID = "de415c1f43324731a15696c099abb3ce"; // 🔥 replace this
const CHANNEL = "interview-room";

function VideoRoom() {
  useEffect(() => {
    const init = async () => {
      const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

      await client.join(APP_ID, CHANNEL, null, null);

      const [micTrack, camTrack] =
        await AgoraRTC.createMicrophoneAndCameraTracks();

      camTrack.play("local-video");

      await client.publish([micTrack, camTrack]);

      client.on("user-published", async (user, mediaType) => {
        await client.subscribe(user, mediaType);

        if (mediaType === "video") {
          const player = document.createElement("div");
          player.id = user.uid;
          player.style.width = "400px";
          player.style.height = "300px";
          document.body.appendChild(player);

          user.videoTrack.play(player);
        }
      });
    };

    init();
  }, []);

  return (
    <div>
      <h2>Live Interview Room</h2>
      <div id="local-video" style={{ width: "400px", height: "300px" }}></div>
    </div>
  );
}

export default VideoRoom;