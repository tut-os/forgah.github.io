

var web_buttons = [
    {
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white"/>
              </svg>`,
        tip: "Favorite",
        neonColor: "#ff00ff",
        callback: (iframe) => {
            console.log("Favorite button clicked!", iframe);
            // Add your custom logic here
        }
    },
    {
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4V20M20 12H4" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
        tip: "Expand",
        neonColor: "#00ffff",
        callback: (iframe) => {
            console.log("Expand button clicked!", iframe);
            iframe.requestFullscreen(); // Example: Make the iframe fullscreen
        }
    }
];


website([
    {
        title: "اوضة الموسيقي العامه",
        thumbnail: "https://via.placeholder.com/150",
        iframeUrl: "https://jukebox.today/forga",
        genre: ["music", "youtube"],
        tip: "An interactive website for entertainment."
    },
    {
        title: 
    `"
        تعال نسمع سوا؟ 
        (اعمل اوضه خاصه بيكم)
        `,
        thumbnail: "https://via.placeholder.com/150",
        iframeUrl: "https://jukebox.today/",
        genre: ["Education", "Learning"],
        tip: "A platform for learning new skills."
    }
], web_buttons);

