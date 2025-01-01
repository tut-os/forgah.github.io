

var youtube_buttons = [
    {
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white"/>
              </svg>`,
        tip: "Favorite",
        neonColor: "#ff00ff",
        callback: (playlist) => {
            console.log("Favorite button clicked!", playlist);
            // Add your custom logic here
        }
    },
    {
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4V20M20 12H4" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
        tip: "Expand",
        neonColor: "#00ffff",
        callback: (playlist) => {
            console.log("Expand button clicked!", playlist);
            // Add your custom logic here
        }
    }
];

youtube([
    {
        title: "Chill Vibes",
        thumbnail: "https://via.placeholder.com/150",
        url: "https://www.youtube.com/watch?v=rvxZT184VSY",
        genre: ["Relaxing", "Chill"],
        tip: "A playlist of relaxing music."
    },
    {
        title: "Workout Beats",
        thumbnail: "https://via.placeholder.com/150",
        url: "PL54GGNG9zVcpeTW64XwQ7z887KT7sPUEX&si=l0C3l5Yp8s6EPcsV",
      
        genre: ["Workout", "Energy"],
        tip: "A playlist of high-energy workout tracks."
    }
], youtube_buttons);

