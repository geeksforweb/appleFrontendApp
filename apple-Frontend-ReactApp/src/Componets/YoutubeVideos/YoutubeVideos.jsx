import React from "react";
import { useEffect, useState } from "react";
import "./YoutubeVideos.css";

function YoutubeVideos() {
  const [videos, setvideos] = useState([]);
    // useEffect(() => {
    //   fetch(
    //     "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBF8z-SAozQuJGZZRZOYl1spVIv0W5xvGg&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet&order=date&maxResults=8"
    //   )
    //     .then((response) => response.json())
    //     .then((data) => setvideos(data.items));
    // }, []);

  return (
    
    <div className="all-videos-wrapper">
      <div className="video-container">
        <div className="title-section">
          <div className="video-title-wrapper">Latest Videos</div>
        </div>
      </div>

      <div className="videos-grid">
        {videos.map((singleVideo, i) => {
          const vidId = singleVideo.id.videoId;
          const vidLink = `https://www.youtube.com/watch?v=${vidId}`;

          return (
            <div key={i} className="video-item">
              <div className="single-video-wrapper">
                <div className="video-thumbnail">
                  <a href={vidLink} target="_blank" rel="noopener noreferrer">
                    <img
                      src={singleVideo.snippet.thumbnails.high.url}
                      alt={singleVideo.snippet.title}
                    />
                  </a>
                </div>

                <div className="video-info-wrapper">
                  <h3 className="video-title">
                    <a href={vidLink} target="_blank" rel="noopener noreferrer">
                      {singleVideo.snippet.title}
                    </a>
                  </h3>
                  <p className="video-desc">
                    {singleVideo.snippet.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default YoutubeVideos;
