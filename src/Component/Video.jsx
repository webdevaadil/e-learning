import React from 'react'

export const Video = () => {
    function revealVideo(div, video_id) {
        var video = document.getElementById(video_id).src;
        document.getElementById(video_id).src = video + '&autoplay=1'; // adding autoplay to the URL
        document.getElementById(div).style.display = 'block';
    }

    // Hiding the lightbox and removing YouTube autoplay
    function hideVideo(div, video_id) {
        var video = document.getElementById(video_id).src;
        var cleaned = video.replace('&autoplay=1', ''); // removing autoplay form url
        document.getElementById(video_id).src = cleaned;
        document.getElementById(div).style.display = 'none';
    }
  return (
    <div className="e-Learning">  <div className="heads-elearning">
    <h2>Video </h2>

</div>



<div id="container">
    <center>
        <p>Play Part 01 mp4</p>
        <button id="playme" onClick={revealVideo('video','youtube')}>Play Video</button>
    </center>
</div>

<div id="video" className="lightbox" onClick={hideVideo('video','youtube')}>
    <div className="lightbox-container">
        <div className="lightbox-content">

            <button onClick={hideVideo('video','youtube')} className="lightbox-close">
             ✕
            </button>
            <div className="video-container">
                <iframe id="youtube" width="960" height="540" src="https://www.youtube.com/embed/WsptdUFthWI?showinfo=0" frameBorder="0" allowfullscreen></iframe>
            </div>

        </div>
    </div>
</div></div>
  )
}
