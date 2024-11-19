
import React from 'react';

const Hidrokarbon_vid = ({ src, title }) => {
    // Check if the source URL is a YouTube URL and convert it to an embeddable URL
    const getEmbedUrl = (url) => {
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
            const videoId = url.split('v=')[1] || url.split('/').pop();
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return url;
    };

    return (
        <div style={{ padding: '1em' }}>
            <h3>{title}</h3>
            <iframe
                width="100%"
                height="400"
                src={getEmbedUrl(src)}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Hidrokarbon_vid;
