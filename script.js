//todo: on click get the content page not to make things heavy
function forgah() {


  // Create a div element for the HTML structure
  const container = document.createElement('div');
  container.className = 'container';
  container.innerHTML = `

    <div id="score-display"> <span id="score-value">0</span>💲</div>


           <div id="webtor-container"></div>

      <div class="lighting"></div>
      <div class="lighting-floor"></div>
      <div class="floor">

      </div>
      <div class="media-center">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
      <div class="ps5" onclick="load('websites.js')" emoji="📺"  tip="خدمات اونلاين جامده تنين">
          <div class="base"></div>
          <div class="bottom-2"></div>
          <div class="bottom"></div>
          <div class="middle"></div>
          <div class="glow"></div>
          <div class="top"></div>
      </div>
      <div class="dvr" onclick="load('movies.js')" emoji="🍿"  tip="اختار فيلمك واتفرج اونلاين بالسبتايتل المصري او حمل الفيلم">
          <input  id="opacity"/ style="opacity: 0;">
          <div class="front">
              <div class="display">افلام</div>
          </div>
      </div>
      <div class="lightbars">
          <div class="left"></div>
          <div class="right"></div>
      </div>
      <div class="sound-system" onclick="load('youtube.js')" >
          <div class="sys-l" emoji="🎵"  tip="كفايه اغاني متوحده تعال نشوف اللي حوالينا بيسمعوا ايه">
              <div></div>
              <div></div>
              <div></div>
              <span></span>
          </div>
          <div class="sys-r">
              <div></div>
              <div></div>
              <div></div>
              <span></span>
          </div>
      </div>

  `;

  // Append the container to the body
  document.body.appendChild(container);

       // Check if the license agreement has been accepted
       if (!localStorage.getItem("licenseAccepted")) {
        Swal.fire({
            title: 'اتفاقية الاستخدام',
            html: `
                <ul style="text-align: right; font-size: 16px; line-height: 1.8;">
                    <li>هذا الموقع مخصص للأغراض التعليمية فقط، وليس للاستخدام التجاري.</li>
                    <li>كل المحتوى المعروض على هذا الموقع ليس مسروقًا من السينمات أو منصات البث.</li>
                    <li>نحن لا نحمل حقوق الطبع والنشر لهذه العناصر.</li>
                    <li>يتم عرض المحتوى فقط بعد عرضه في السينمات، وليس بشكل كامل.</li>
                    <li>لا نعرض أي محتوى من منصة شاهد أو أي محتوى عربي.</li>
                    <li>نقتصر فقط على المحتوى الإنجليزي.</li>
                </ul>
            `,
            icon: 'info',
            showCancelButton: false,
            confirmButtonText: 'أوافق',
            allowOutsideClick: false,
            allowEscapeKey: false
        }).then(() => {
            // Save acceptance in localStorage
            localStorage.setItem("licenseAccepted", "true");
        });
    }

}




forgah();


   // Check if "movie" function exists in cache and execute on load
   const cachedMovie = localStorage.getItem('cachedMovie');
   if (cachedMovie) {
       eval(cachedMovie); // Execute the cached function


dyn_ad({
    containerSelector: 'body', // Replace with your container selector
    id: 'test_english',
    emoji:`🐶`,
    position: 'fixed',
    borderPosition: 'bottom',
    popImages: [["https://cdn3d.iconscout.com/3d/premium/thumb/scroll-map-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--direction-isometric-pack-miscellaneous-illustrations-4024740.png?f=webp"
        ,"https://cdn3d.iconscout.com/3d/premium/thumb/money-bag-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--coin-sack-finance-adventure-pack-holidays-illustrations-3626614.png?f=webp"
        ,"https://cdn3d.iconscout.com/3d/premium/thumb/books-3d-icon-download-in-png-blend-fbx-gltf-file-formats--bookshelf-bookcase-book-shelf-library-pack-icons-6174790.png?f=webp"
    ]], // Replace with your image path
    tooltipTheme: 'bubble',
    tippy_zindex:999,
    zIndex: 4,
    imageSize:200,
    emoji: '💰',
    tip:`امتحن علي كلمات الفيلم و اكسب فلوس تظبط بيها اوضتك`,
    distance: [[130, -20]],

    scenario: [
    [
    
      {
        delay: 2000,
          event: (element) => {
      vocab();
      
      },
          event_type: 'click'
        },

  
  ],
    ],

  });

   }else{
    youtube([], [], 'https://www.youtube.com/watch?v=C1q04-0vGSQ');

   }

   //fucntion to remove cached movie
    function removeCachedMovie() {
        localStorage.removeItem('cachedMovie');
     }


// Function to load a specific script and unload others
function load(scriptName) {
    // Array of script filenames
    const scripts = ['movies.js', 'youtube.js', 'websites.js'];

    // Unload all scripts except the one to be loaded
    scripts.forEach(script => {
        if (script !== scriptName) {
            const existingScript = document.querySelector(`script[src="${script}"]`);
            if (existingScript) {
                existingScript.remove(); // Remove the script element
            }
        }
    });

    // Check if the script to be loaded is already present
    const scriptToLoad = document.querySelector(`script[src="${scriptName}"]`);
    if (!scriptToLoad) {
        // Create a new script element
        const newScript = document.createElement('script');
        newScript.src = scriptName;

        // Define the onload event to unload the script after it's fully initiated
        newScript.onload = () => {
            console.log(`${scriptName} has been fully loaded and initiated.`);
            // Perform any necessary actions after the script is loaded

            // Unload the script after it's done
            newScript.remove();
            console.log(`${scriptName} has been unloaded.`);
        };

        document.head.appendChild(newScript); // Append the script to the head
    } else {
        console.log(`${scriptName} is already loaded.`);
    }
}

function movie(magnet, subtitles) {
    let webtorMagnet = magnet; // Placeholder for the Webtor magnet link

    // Check if an iframe already exists in the webtor-container
    const webtorContainer = document.getElementById("webtor-container");

    // Initialize Webtor player after the script loads
    // Update webtor-container with new magnet if movie is called again
//if used movie functio once then refresh the page
  const  webtorPlayer = window.webtor
    webtorPlayer.push({
        id: "webtor-container",
        magnet: magnet,
        subtitles: subtitles,
        on: {
            ready: (player) => {
                console.log("Player ready!");
                webtorMagnet = player.getMagnetUri(); // Fetch the current magnet link
            },
        },
    });

    // Button functionality
    const copyMagnet = () => {
        if (webtorMagnet) {
            navigator.clipboard.writeText(webtorMagnet)
                .then(() => alert("Magnet link copied to clipboard!"))
                .catch((err) => console.error("Failed to copy magnet:", err));
        } else {
            alert("Magnet link not available yet. Please try again later.");
        }
    };

    const openSeedr = () => {
        if (webtorMagnet) {
            // Copy the magnet link to the clipboard
            navigator.clipboard.writeText(webtorMagnet).then(() => {
                // Open Seedr in a new tab with the magnet link
                const seedrUrl = `https://www.seedr.cc`;
                window.open(seedrUrl, "_blank");
            }).catch(err => {
                console.error("Failed to copy magnet link to clipboard: ", err);
                alert("Failed to copy magnet link to clipboard.");
            });
        } else {
            alert("Magnet link not available yet. Please try again later.");
        }
    };

    const downloadSubtitles = async () => {
        const subs_link = subtitles[0].src;
    
        if (subs_link && subs_link.length > 0) {
            try {
                // Fetch the subtitle file content
                const response = await fetch(subs_link);
                if (!response.ok) {
                    throw new Error("Failed to fetch subtitles");
                }
                const text = await response.text();
    
                // Create a Blob and trigger the download
                const blob = new Blob([text], { type: "text/plain" });
                const url = URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.download = "Egyptian-subtitles.srt";
                link.click();
    
                // Clean up the URL object
                URL.revokeObjectURL(url);
            } catch (error) {
                console.error("Error downloading subtitles:", error);
                alert("Failed to download subtitles.");
            }
        } else {
            alert("No subtitles available for download.");
        }
    };

    // Create custom buttons container
    const customButtonsContainer = document.createElement("div");
    customButtonsContainer.className = "iframe-controls";

    // Button 1: Copy Magnet
    const buttonCopyMagnet = document.createElement("button");
    buttonCopyMagnet.className = "custom-button";
    buttonCopyMagnet.setAttribute("data-tip", "خد لينك الفيلم");
    buttonCopyMagnet.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 4H18C19.1046 4 20 4.89543 20 6V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V6C4 4.89543 4.89543 4 6 4H8M10 2H14C15.1046 2 16 2.89543 16 4V8C16 9.10457 15.1046 10 14 10H10C8.89543 10 8 9.10457 8 8V4C8 2.89543 8.89543 2 10 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;
    buttonCopyMagnet.onclick = copyMagnet;

    // Button 2: Open Seedr
    const buttonOpenSeedr = document.createElement("button");
    buttonOpenSeedr.className = "custom-button";
    buttonOpenSeedr.setAttribute("data-tip", "حمله من سيدر (الفيلم من غير السبتايتل)");
    buttonOpenSeedr.innerHTML = `
<svg fill="#ffffff" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(1 1)"> <g> <g> <path d="M189.293,447.853c-27.307-11.947-50.347-30.72-68.267-55.467c-36.693-52.053-46.933-128-26.453-212.48 c0.853-4.267-2.56-9.387-6.827-10.24s-9.387,2.56-10.24,6.827c-20.48,89.6-10.24,169.813,29.867,226.133 C127,429.933,152.6,450.413,183.32,463.213c0.853,0.853,2.56,0.853,3.413,0.853c3.413,0,6.827-2.56,6.827-5.12 C196.12,454.68,193.56,449.56,189.293,447.853z"></path> <path d="M450.413,115.907c-0.853-3.413-4.267-5.973-7.68-5.973c-26.349,0-50.621,12.542-72.452,33.53 C349.096,54.894,305.113-1,255-1c-50.224,0-94.293,56.142-115.423,144.325c-21.795-20.906-46.019-33.392-72.31-33.392 c-3.413,0-6.827,2.56-7.68,5.973C3.267,278.893,48.493,377.88,80.067,422.253C120.173,478.573,184.173,511,255,511 s134.827-32.427,174.933-88.747C461.507,377.88,506.733,278.893,450.413,115.907z M255,16.067 c42.667,0,82.773,56.32,100.693,141.653c-47.787,57.173-75.947,145.067-87.893,192.853c-5.12,15.36-9.387,31.573-12.8,49.493 c-3.413-17.92-7.68-34.133-12.8-49.493c-11.947-47.787-39.253-136.533-87.893-192.853C172.227,72.387,212.333,16.067,255,16.067z M93.72,412.013C43.373,342.04,36.547,237.933,73.24,127c23.253,2.186,44.885,16.133,64.434,37.899 c0.136,0.174,0.27,0.352,0.419,0.501c8.472,9.505,16.792,20.776,24.83,33.542c49.209,78.572,80.417,204.531,83.432,291.381 c0.02,1.196,0.034,2.403,0.048,3.607C183.284,491.353,129.548,462.343,93.72,412.013z M416.28,412.013 c-35.828,50.33-89.564,79.34-152.683,81.917c0.014-1.214,0.028-2.428,0.049-3.633c1.316-37.834,7.981-83.086,19.153-128.611 c0.676-2.012,1.355-4.021,2.068-5.992c20.48-81.067,52.053-150.187,87.04-189.44c0.507-0.761,0.927-1.521,1.261-2.282 c19.328-21.232,40.673-34.816,63.593-36.971C473.453,238.787,466.627,342.04,416.28,412.013z"></path> <path d="M223.427,48.493c-18.773,16.213-34.987,46.933-46.08,85.333c-0.853,4.267,1.707,8.533,5.973,10.24 c0.853,0,1.707,0,2.56,0c3.413,0,6.827-2.56,7.68-5.12c10.24-34.987,24.747-63.147,40.96-77.653 c3.413-3.413,4.267-8.533,0.853-11.947S226.84,45.08,223.427,48.493z"></path> </g> </g> </g> </g></svg>
    `;
    buttonOpenSeedr.onclick = openSeedr;

    // Button 3: Download Subtitles
    const buttonDownloadSubtitles = document.createElement("button");
    buttonDownloadSubtitles.className = "custom-button";
    buttonDownloadSubtitles.setAttribute("data-tip", "حمل السبتايتل المصري");
    buttonDownloadSubtitles.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 17V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V17M17 12L12 17M12 17L7 12M12 17V3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;
    buttonDownloadSubtitles.onclick = downloadSubtitles;


    // Button 4 vocabulary
    const testvocab_button = document.createElement("button");
    testvocab_button.className = "custom-button";
    testvocab_button.setAttribute("data-tip", "كلمات الفيلم");
    testvocab_button.innerHTML = `
      <svg fill="#ffff" height="24" width="24" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 297 297" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M261.489,66.973L197.412,2.895C195.558,1.041,193.044,0,190.423,0H42.499c-5.458,0-9.884,4.426-9.884,9.883v277.233 c0,5.458,4.426,9.884,9.884,9.884h212.002c5.458,0,9.884-4.426,9.884-9.884V73.961C264.385,71.34,263.343,68.826,261.489,66.973z M200.307,33.745l30.333,30.333h-30.333V33.745z M52.383,277.232V19.767h128.156v54.194c0,5.459,4.426,9.884,9.884,9.884h54.194 v193.388H52.383z"></path> <path d="M149.523,136.676c-1.501-3.753-5.136-6.213-9.178-6.213c-4.041,0-7.676,2.46-9.177,6.213l-32.615,81.539 c-2.027,5.068,0.438,10.819,5.506,12.848c5.066,2.025,10.819-0.439,12.848-5.507l4.037-10.095h38.803l4.037,10.095 c1.547,3.864,5.258,6.216,9.181,6.216c1.222,0,2.464-0.229,3.667-0.709c5.068-2.028,7.534-7.779,5.507-12.848L149.523,136.676z M128.852,195.693l11.494-28.735l11.495,28.735H128.852z"></path> <path d="M211.553,133.428h-7.952v-8.002c0-5.458-4.426-9.883-9.884-9.883c-5.458,0-9.883,4.425-9.883,9.883v8.002h-7.952 c-5.459,0-9.884,4.425-9.884,9.883c0,5.459,4.425,9.884,9.884,9.884h7.952v8.002c0,5.458,4.425,9.884,9.883,9.884 c5.458,0,9.884-4.426,9.884-9.884v-8.002h7.952c5.458,0,9.884-4.425,9.884-9.884C221.436,137.852,217.011,133.428,211.553,133.428z "></path> </g> </g></svg>
    `;
    testvocab_button.onclick = vocab;


    // Append buttons to the container
    customButtonsContainer.appendChild(buttonCopyMagnet);
    customButtonsContainer.appendChild(buttonOpenSeedr);
    customButtonsContainer.appendChild(buttonDownloadSubtitles);
    customButtonsContainer.appendChild(testvocab_button);

    // Append the container to the webtor-container
    webtorContainer.appendChild(customButtonsContainer);
    
        
}




  // Example usage
  const books = [

    {
        title: "الكشك السحري",
        thumbnail: "https://ideogram.ai/assets/image/lossless/response/2ae7n0XRRF67Xu0vAGPGiA",
        callback: () => openShop(),
        tip: "اشتري اللي انت عاوزه للأوضة بالفلوس اللي انت جبتها من مذاكرة كلمات الافلام"
      },
    {
      title: "الديزاينر",
      thumbnail: "https://ideogram.ai/assets/image/lossless/response/v1_SQp4aRCmi_xapetT_6A",
      callback: () => theme(),
      tip: "لون اوضتك و حط التاتش بتاعك يا فنان"
    },
  
    {
      title: "مساحه اعلانيه",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWLM5Jt6aBu9y2IQS_boByaixDQQgFm2xAg&s",
      callback: () => console.log(`ad1`),
      tip: "لو انت عاوز اعلان بطريقه كريتيف لمنتجك تعال كلمنا"
    },
    {
        title: "مساحه اعلانيه",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWLM5Jt6aBu9y2IQS_boByaixDQQgFm2xAg&s",
        callback: () => console.log(`ad1`),
        tip: "لو انت عاوز اعلان بطريقه كريتيف لمنتجك تعال كلمنا"
      },
  ];
  
  bookshelf(books);




// Include SweetAlert2 library in your project for this to work
function list(itemsArray, type = 'movies') {
    return new Promise((resolve) => {
        const itemsPerPage = 10; // Number of items per page
        let currentPage = 1; // Current page

        // Extract unique genres
        const genres = [...new Set(itemsArray.flatMap(item => item.genre || []))];

        // Generate genre dropdown options
        const genreOptions = genres.map(genre => `<option value="${genre}">${genre}</option>`);
        genreOptions.unshift('<option value="">All Genres</option>');

        // Function to generate item cards for the current page
        const generateItemCards = (items) => {
            return items.map(item => {
                const thumbnail = item.thumbnail || (item.youtubeUrl ? getYouTubeThumbnail(item.youtubeUrl) : '');
                const rating = item.rating;
                const imdb = item.imdb;
                const ratingEmoji = rating !== undefined ? getRatingEmoji(rating) : '';
                const ratingGlowColor = rating !== undefined ? getRatingGlowColor(rating) : '';
                const imdbGlowColor = imdb !== undefined ? getImdbGlowColor(imdb) : '';

                // Generate flair elements if they exist
                const flairElements = item.flair ? item.flair.map(flair => {
                    const position = flair.position || 'right'; // Default to 'right' if not specified
                    const x = flair.x || '0'; // Default to '0' if not specified
                    const y = flair.y || '0'; // Default to '0' if not specified
                    const tintColor = flair.color; // Convert hex to RGBA with opacity
                    return `
                        <div class="flair" style="background: ${tintColor}; ${position}: ${x}; top: ${y};">
                            ${flair.text}
                        </div>
                    `;
                }).join('') : '';

                return `
                    <div class="item-card" data-tip="${item.tip || ''}" data-genres="${item.genre ? item.genre.join(',') : ''}">
                        <div class="thumbnail-container">
                            <img src="${thumbnail}" alt="${item.title}" class="item-thumbnail" />
                            ${flairElements}
                            <div class="genre-overlay">${item.genre ? item.genre.join(', ') : ''}</div>
                            ${rating !== undefined || imdb !== undefined ? `
                                <div class="ratings-overlay">
                                    ${rating !== undefined ? `<div class="rating" style="text-shadow: 0 0 5px ${ratingGlowColor}, 0 0 10px ${ratingGlowColor}, 0 0 20px ${ratingGlowColor};">${ratingEmoji} ${rating}</div>` : ''}
                                    ${imdb !== undefined ? `<div class="imdb" style="text-shadow: 0 0 5px ${imdbGlowColor}, 0 0 10px ${imdbGlowColor}, 0 0 20px ${imdbGlowColor};">🎬 IMDb: ${imdb}</div>` : ''}
                                </div>
                            ` : ''}
                            <div class="item-title">${item.title}</div>
                        </div>
                    </div>
                `;
            }).join('');
        };

        // Function to update the displayed items based on the current page
        const updateDisplay = () => {
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const currentItems = filteredItems.slice(startIndex, endIndex);
            itemsGrid.innerHTML = generateItemCards(currentItems);

            // Update pagination controls
            paginationControls.innerHTML = `
                <button id="prev-page" ${currentPage === 1 ? 'disabled' : ''}>Previous</button>
                <span>Page ${currentPage} of ${totalPages}</span>
                <button id="next-page" ${currentPage === totalPages ? 'disabled' : ''}>Next</button>
            `;

            // Add event listeners to pagination buttons
            document.getElementById('prev-page')?.addEventListener('click', () => {
                if (currentPage > 1) {
                    currentPage--;
                    updateDisplay();
                }
            });

            document.getElementById('next-page')?.addEventListener('click', () => {
                if (currentPage < totalPages) {
                    currentPage++;
                    updateDisplay();
                }
            });

            // Rebind click events to item cards
            itemsGrid.querySelectorAll('.item-card').forEach((card, index) => {
                const actualIndex = itemsArray.indexOf(currentItems[index]);
                card.addEventListener('click', () => {
                    const selectedItem = itemsArray[actualIndex];
                    resolve(selectedItem);
                    Swal.close();
                });
            });
        };

        // Display SweetAlert2 popup
        Swal.fire({
            title: `اختار ${type === 'movies' ? 'فيلمك' : type === 'youtube' ? 'يوتيوبك' : type === 'websites' ? 'موقعك' : 'تعمل ايه'}`,
            html: `
                <div class="search-container">
                    <input type="text" id="item-search" placeholder="Search ${type === 'movies' ? 'Movies' : type === 'youtube' ? 'Playlists' : type === 'websites' ? 'Websites' : 'Iframes'}" class="search-bar">
                    <select id="genre-filter" class="genre-dropdown">
                        ${genreOptions.join('')}
                    </select>
                </div>
                <div id="items-grid" class="items-grid"></div>
                <div id="pagination-controls" class="pagination-controls"></div>
            `,
            showConfirmButton: false,
            width: '90%',
            customClass: {
                popup: 'glassmorphed-popup',
                container: 'glassmorphed-container'
            },
            background: 'transparent',
            backdrop: `
                rgba(255, 255, 255, 0.1)
                url("/images/background.jpg")
                center left
                no-repeat
            `
        });

        // Add event listeners for search and genre filter
        const searchInput = document.getElementById('item-search');
        const genreFilter = document.getElementById('genre-filter');
        const itemsGrid = document.getElementById('items-grid');
        const paginationControls = document.getElementById('pagination-controls');

        let filteredItems = itemsArray;
        let totalPages = Math.ceil(filteredItems.length / itemsPerPage);

        const filterItems = () => {
            const searchTerm = searchInput.value.toLowerCase();
            const selectedGenre = genreFilter.value.toLowerCase();

            filteredItems = itemsArray.filter(item => {
                const matchesSearch = item.title.toLowerCase().includes(searchTerm) ||
                    (item.genre && item.genre.some(genre => genre.toLowerCase().includes(searchTerm)));
                const matchesGenre = !selectedGenre || (item.genre && item.genre.some(genre => genre.toLowerCase() === selectedGenre));
                return matchesSearch && matchesGenre;
            });

            totalPages = Math.ceil(filteredItems.length / itemsPerPage);
            currentPage = 1; // Reset to the first page after filtering
            updateDisplay();

            // Return whether there are any filtered results
            return filteredItems.length > 0;
        };

        searchInput.addEventListener('input', filterItems);
        genreFilter.addEventListener('change', filterItems);

        // Add event listener for Enter key in search bar
        searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                const hasResults = filterItems(); // Check if there are any results
                if (!hasResults) {
                    const searchQuery = searchInput.value.trim();
                    if (searchQuery) {
                        // Format the Google search URL
                        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
                            `${searchQuery} (site:yts.mx OR site:1337x.to OR site:thepiratebay.org OR site:rarbg.to OR site:limetorrents.info OR site:torrentdownloads.me)`
                        )}`;
                        // Open the Google search in a new tab
                        window.open(googleSearchUrl, '_blank');
                    }
                }
            }
        });

        // Initial display
        filterItems();
    });

    // Helper functions
    function getYouTubeThumbnail(url) {
        if (!url) return '';
        const videoId = url.split('v=')[1];
        return `https://img.youtube.com/vi/${videoId}/0.jpg`;
    }

    function getRatingEmoji(rating) {
        const emojis = ['💩', '😢', '😞', '😐', '🙂', '😊', '😄', '😍', '🤩', '🔥'];
        return emojis[Math.floor(rating - 1)] || '💩';
    }

    function getRatingGlowColor(rating) {
        const colors = ['#ff0000', '#ff4500', '#ff6347', '#ff8c00', '#ffa500', '#ffd700', '#adff2f', '#7cfc00', '#32cd32', '#00ff00'];
        return colors[Math.floor(rating - 1)] || '#ff0000';
    }

    function getImdbGlowColor(imdb) {
        if (imdb > 6) return '#00ff00';
        if (imdb > 4) return '#ffa500';
        return '#ff0000';
    }

    function hexToRgba(hex, opacity) {
        hex = hex.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
}


function cast(moviesArray) {
    // Wipe webtor-container (assuming this is done elsewhere in your code)
  
    // Directly call the list function to select a movie
    (async () => {
        const selectedMovie = await list(moviesArray, 'movies');
        if (selectedMovie) {
            // Cache the movie and reload
            const movieFunction = `
                cachedSubtitles = "${selectedMovie.subs}";
                movie("${selectedMovie.magnet}", [{
                    label: "Egyptian",
                    src: "${selectedMovie.subs}",
                    srclang: "ar",
                }]);
            `;

            // Cache vocab data if the selected movie has a vocab property
            if (selectedMovie.vocab && Array.isArray(selectedMovie.vocab)) {
                localStorage.setItem('cachedVocab', JSON.stringify(selectedMovie.vocab));
            }

            // Cache the movie function
            localStorage.setItem('cachedMovie', movieFunction);

            // Reload the page
            location.reload();
        }
    })();
}
// Global variable for money
let money = parseInt(localStorage.getItem('score')) || 0;

// Object to track mastery progress for each word
let masteryProgress = JSON.parse(localStorage.getItem('masteryProgress')) || {};

// Object to track how many times each word has been shown and answered correctly
let wordStats = JSON.parse(localStorage.getItem('wordStats')) || {};

// Global variable for streak
let streak = 0;

// List of mastered words
let masteredWords = JSON.parse(localStorage.getItem('masteredWords')) || [];

// Function to retrieve and display cached vocab data
function vocab() {
    removeCachedMovie()
    const cachedVocab = JSON.parse(localStorage.getItem('cachedVocab')) || [];
    if (cachedVocab.length === 0) {
        Swal.fire('No Vocab Data', 'No vocabulary data has been cached yet.', 'info');
        return;
    }

    let currentIndex = 0;

    const showVocab = (index) => {
        const [word, translation] = cachedVocab[index];
        Swal.fire({
            title: 'امتحن علي الفيلم',
            html: `
                <div style="display: flex; justify-content: center; align-items: center; height: 100px;">
                    <div id="leftWord" style="flex: 1; background-color: #ffffff; color: #000000; padding: 20px; text-align: center; border: 2px solid #000000; border-radius: 10px 0 0 10px; box-shadow: 4px 4px 0px #000000; cursor: pointer;">
                        <h3>${word}</h3>
                    </div>
                    <div style="width: 50px; text-align: center; font-size: 24px; color: black;">
                        =
                    </div>
                    <div id="rightWord" style="flex: 1; background-color: #ffffff; color: #000000; padding: 20px; text-align: center; border: 2px solid #000000; border-radius: 0 10px 10px 0; box-shadow: 4px 4px 0px #000000;">
                        <h3>${translation}</h3>
                    </div>
                </div>
                <button id="quizButton" style="margin-top: 40px; margin-right:10px;  padding: 10px 20px; background-color: #ffffff; color: #000000; border: 2px solid #000000; border-radius: 5px; cursor: pointer; box-shadow: 4px 4px 0px #000000;">
                    امتحن
                </button>
                <button id="masteryButton" style="margin-top: 40px; margin-left:10px; padding: 10px 20px; background-color: #ffffff; color: #000000; border: 2px solid #000000; border-radius: 5px; cursor: pointer; box-shadow: 4px 4px 0px #000000;">
                    الكلمات المفشوخه حفظ
                </button>
            `,
            showCancelButton: true,
            confirmButtonText: 'اللي بعده',
            cancelButtonText: 'اقفل',
            backdrop: false,
            didOpen: () => {
                document.getElementById('leftWord').addEventListener('click', () => {
                    window.open(`https://www.playphrase.me/#/search?q=${word}`, '_blank');
                });
                document.getElementById('quizButton').addEventListener('click', () => {
                    Swal.close();
                    startQuiz();
                });
                document.getElementById('masteryButton').addEventListener('click', () => {
                    Swal.close();
                    masteryList();
                });
            }
        }).then((result) => {
            if (result.isConfirmed) {
                currentIndex = (currentIndex + 1) % cachedVocab.length;
                showVocab(currentIndex);
            }
        });
    };

    const startQuiz = () => {
        // Filter out mastered words from the quiz
        const quizVocab = cachedVocab.filter(([word]) => !masteredWords.map(([w]) => w).includes(word));

        if (quizVocab.length === 0) {
            Swal.fire('No Words Left', 'All words have been mastered!', 'info');
            return;
        }

        // Select a random word that hasn't been shown 5 times yet
        const availableWords = quizVocab.filter(([word]) => (wordStats[word]?.shown || 0) < 5);
        if (availableWords.length === 0) {
            Swal.fire('No Words Left', 'All words have been shown 5 times!', 'info');
            return;
        }

        const randomIndex = Math.floor(Math.random() * availableWords.length);
        const [quizWord, quizTranslation] = availableWords[randomIndex];

        // Select another random word for the quiz (to create variety)
        const randomIndex2 = Math.floor(Math.random() * quizVocab.length);
        const [quizWord2, quizTranslation2] = quizVocab[randomIndex2];

        // Randomly decide whether to show the correct translation or a wrong one
        const showCorrectTranslation = Math.random() < 0.5; // 50% chance to show the correct translation
        const displayedWord = quizWord;
        const displayedTranslation = showCorrectTranslation ? quizTranslation : quizTranslation2;

        // Update word stats
        if (!wordStats[quizWord]) wordStats[quizWord] = { shown: 0, correct: 0 };
        wordStats[quizWord].shown += 1;

        // Calculate mastery progress
        const masteryPercentage = ((wordStats[quizWord]?.correct || 0) / 5) * 100;

        Swal.fire({
            title: 'Quiz',
            html: `
                <div style="display: flex; justify-content: center; align-items: center; height: 100px;">
                    <div id="quizLeftWord" style="flex: 1; background-color: #ffffff; color: #000000; padding: 20px; text-align: center; border: 2px solid #000000; border-radius: 10px 0 0 10px; box-shadow: 4px 4px 0px #000000; cursor: pointer;">
                        <h3>${displayedWord}</h3>
                        <div style="margin-top: 10px; background-color: #000000; padding: 3px; border-radius: 5px;">
                            <div id="masteryProgressBar" style="width: ${masteryPercentage}%; height: 5px; background-color: #ffeb3b; box-shadow: 0 0 10px #ffeb3b; border-radius: 5px;"></div>
                        </div>
                    </div>
                    <div style="width: 50px; text-align: center; font-size: 24px; color: black;">
                        =
                    </div>
                    <div id="quizRightWord" style="flex: 1; background-color: #ffffff; color: #000000; padding: 20px; text-align: center; border: 2px solid #000000; border-radius: 0 10px 10px 0; box-shadow: 4px 4px 0px #000000;">
                        <h3>${displayedTranslation}</h3>
                    </div>
                </div>
                <div style="margin-top: 40px;">
                    <button id="rightButton" style="margin: 10px; padding: 10px 20px; background-color:rgba(0, 234, 12, 0.75); color: #000000; border: 2px solid #000000; border-radius: 5px; cursor: pointer; box-shadow: 4px 4px 0px #000000;">
                        صح
                    </button>
                    <button id="wrongButton" style=" margin: 10px; padding: 10px 20px; background-color:rgba(200, 26, 26, 0.75); color: #000000; border: 2px solid #000000; border-radius: 5px; cursor: pointer; box-shadow: 4px 4px 0px #000000;">
                        غلط
                    </button>
                </div>
                <div id="moneyDisplay" style="margin-top: 20px; font-size: 18px; text-align: center;">
                    Money: $${money}
                </div>
                <div id="streakDisplay" style="margin-top: 20px; font-size: 18px; text-align: center;">
                    Streak: ${streak}
                </div>
                <div style="margin-top: 20px; background-color: #000000; padding: 3px; border-radius: 5px;">
                    <div id="streakProgress" style="width: ${(streak / 10) * 100}%; height: 5px; background-color: #ffeb3b; box-shadow: 0 0 10px #ffeb3b; border-radius: 5px;"></div>
                </div>
                <button id="goStudyButton" style="margin-top: 20px; padding: 10px 20px; background-color: #ffffff; color: #000000; border: 2px solid #000000; border-radius: 5px; cursor: pointer; box-shadow: 4px 4px 0px #000000;">
                    ارجع ذاكر يا فاشل
                </button>
            `,
            showCancelButton: true,
            cancelButtonText: 'Close',
            backdrop: false,
            didOpen: () => {
                document.getElementById('quizLeftWord').addEventListener('click', () => {
                    window.open(`https://www.playphrase.me/#/search?q=${displayedWord}`, '_blank');
                });
                document.getElementById('rightButton').addEventListener('click', () => {
                    handleQuizAnswer(true, displayedWord, displayedTranslation, quizWord, quizTranslation);
                });
                document.getElementById('wrongButton').addEventListener('click', () => {
                    handleQuizAnswer(false, displayedWord, displayedTranslation, quizWord, quizTranslation);
                });
                document.getElementById('goStudyButton').addEventListener('click', () => {
                    Swal.close();
                    showVocab(currentIndex);
                });
            }
        });
    };

    const handleQuizAnswer = (isRight, displayedWord, displayedTranslation, quizWord, quizTranslation) => {
        const isCorrect = displayedTranslation === quizTranslation;

        if (isRight === isCorrect) {
            // User answered correctly
            money += 1 + streak; // Add streak bonus to money
            streak += 1; // Increase streak
            document.getElementById('quizLeftWord').style.backgroundColor = '#4CAF50';
            document.getElementById('quizRightWord').style.backgroundColor = '#4CAF50';

            // Update word stats
            wordStats[quizWord].correct += 1;

            // Check if the word has been answered correctly 5 times
            if (wordStats[quizWord].correct === 5) {
                masteredWords.push([quizWord, quizTranslation]); // Add to mastered words
                localStorage.setItem('masteredWords', JSON.stringify(masteredWords));
            }

            // Turn modal green for 2 seconds
            document.querySelector('.swal2-popup').style.backgroundColor = '#4CAF50';
            setTimeout(() => {
                document.querySelector('.swal2-popup').style.backgroundColor = '#ffffff';
                startQuiz();
            }, 2000);
        } else {
            // User answered incorrectly
            money -= 1;
            streak = 0; // Reset streak
            document.getElementById('quizLeftWord').style.backgroundColor = '#F44336';
            document.getElementById('quizRightWord').style.backgroundColor = '#F44336';

            // Shake and red neon effect for 2 seconds
            document.querySelector('.swal2-popup').classList.add('shake', 'red-neon');
            setTimeout(() => {
                document.querySelector('.swal2-popup').classList.remove('shake', 'red-neon');
                startQuiz();
            }, 2000);
        }

        document.getElementById('moneyDisplay').textContent = `Money: $${money}`;
        document.getElementById('streakDisplay').textContent = `Streak: ${streak}`;
        document.getElementById('streakProgress').style.width = `${(streak / 10) * 100}%`;
        localStorage.setItem('score', money);
        localStorage.setItem('wordStats', JSON.stringify(wordStats));
    };

    const masteryList = () => {
        if (masteredWords.length === 0) {
            Swal.fire('No Mastered Words', 'You have not mastered any words yet.', 'info');
            return;
        }

        let currentPage = 0;
        const wordsPerPage = 16; // 4 columns x 4 rows

        const showPage = (page) => {
            const start = page * wordsPerPage;
            const end = start + wordsPerPage;
            const pageWords = masteredWords.slice(start, end);

            Swal.fire({
                title: 'Mastered Words',
                html: `
                    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; max-height: 400px; overflow-y: auto;">
                        ${pageWords.map(([word, translation]) => `
                            <div style="background-color: #ffffff; color: #000000; padding: 10px; text-align: center; border: 2px solid #000000; border-radius: 10px; box-shadow: 4px 4px 0px #000000;">
                                <h4 style="margin: 0; font-size: 14px;">${word}</h4>
                                <p style="margin: 0; font-size: 12px;">${translation}</p>
                            </div>
                        `).join('')}
                    </div>
                    <div style="display: flex; justify-content: center; margin-top: 20px;">
                        <button id="prevPage" style="margin: 0 10px; padding: 5px 10px; background-color: #ffffff; color: #000000; border: 2px solid #000000; border-radius: 5px; cursor: pointer; box-shadow: 4px 4px 0px #000000;">
                            Previous
                        </button>
                        <span style="margin: 0 10px; font-size: 16px;">Page ${page + 1} of ${Math.ceil(masteredWords.length / wordsPerPage)}</span>
                        <button id="nextPage" style="margin: 0 10px; padding: 5px 10px; background-color: #ffffff; color: #000000; border: 2px solid #000000; border-radius: 5px; cursor: pointer; box-shadow: 4px 4px 0px #000000;">
                            Next
                        </button>
                    </div>
                `,
                showCancelButton: true,
                cancelButtonText: 'Close',
                backdrop: false,
                didOpen: () => {
                    document.getElementById('prevPage').addEventListener('click', () => {
                        if (currentPage > 0) {
                            currentPage -= 1;
                            showPage(currentPage);
                        }
                    });
                    document.getElementById('nextPage').addEventListener('click', () => {
                        if (currentPage < Math.ceil(masteredWords.length / wordsPerPage) - 1) {
                            currentPage += 1;
                            showPage(currentPage);
                        }
                    });
                }
            });
        };

        showPage(currentPage);
    };

    showVocab(currentIndex);
}

let title = ''; // Global variable to store the song name

function youtube(playlistsArray, customButtons = [], directInput = null) {
    removeCachedMovie()

    // Ensure YouTube IFrame API is loaded
    if (!window.YT || !window.YT.Player) {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);

        // Create a promise to wait for the API to load
        window.youtubeAPIReady = new Promise((resolve) => {
            window.onYouTubeIframeAPIReady = () => {
                console.log("YouTube IFrame API loaded.");
                resolve();
            };
        });
    } else {
        // If the API is already loaded, resolve immediately
        window.youtubeAPIReady = Promise.resolve();
    }

    // Function to extract playlist ID or video ID from a URL or raw ID
    function extractId(input) {
        if (!input) return null; // Handle undefined or null inputs

        // If the input is a URL, extract the ID
        if (input.includes('youtube.com') || input.includes('youtu.be')) {
            // Check for playlist ID first
            const playlistIdMatch = input.match(/list=([a-zA-Z0-9_-]+)/);
            if (playlistIdMatch) {
                return { type: 'playlist', id: playlistIdMatch[1] }; // Return the playlist ID
            }

            // If no playlist ID, check for video ID
            const videoIdMatch = input.match(/v=([a-zA-Z0-9_-]+)/);
            if (videoIdMatch) {
                return { type: 'video', id: videoIdMatch[1] }; // Return the video ID
            }

            // Check for shortened YouTube video URL (youtu.be)
            const shortVideoIdMatch = input.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
            if (shortVideoIdMatch) {
                return { type: 'video', id: shortVideoIdMatch[1] }; // Return the video ID
            }
        }

        // If the input is not a URL, assume it's a raw ID
        // Split on '&' to ignore any extraneous parameters (e.g., 'si=...')
        const rawId = input.split('&')[0];

        // Determine if it's a playlist ID or video ID based on the prefix
        if (rawId.startsWith('PL') || rawId.startsWith('UU') || rawId.startsWith('FL') || rawId.startsWith('RD')) {
            return { type: 'playlist', id: rawId }; // Assume it's a playlist ID
        } else {
            return { type: 'video', id: rawId }; // Assume it's a video ID
        }
    }

    // Create modal structure for YouTube player
    const youtubeModalHTML = `
        <div id="youtube-modal" class="youtube-modal">
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div id="modal-youtube-player"></div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', youtubeModalHTML);

    // Create modal structure for download video
    const downloadModalHTML = `
        <div id="download-modal" class="youtube-modal">
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="tab-icons">
                    <div class="tab-icon" data-service="youtubepp">
                        <img src="https://www.google.com/s2/favicons?domain=youtubepp.com" alt="YouTubePP">
                    </div>
                    <div class="tab-icon" data-service="ssyoutube">
                        <img src="https://www.google.com/s2/favicons?domain=ssyoutube.com" alt="SSYouTube">
                    </div>
                </div>
                <iframe id="download-iframe" src="" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', downloadModalHTML);

    // Function to initialize the YouTube player
    function initializePlayer(id, type) {
        const webtorContainer = document.querySelector('#webtor-container');
        if (webtorContainer) {
            webtorContainer.innerHTML = '';
            const iframeSrc = type === 'playlist'
                ? `https://www.youtube.com/embed/videoseries?list=${id}`
                : `https://www.youtube.com/embed/${id}`;

            const playerDiv = document.createElement('div');
            playerDiv.id = 'youtube-player';
            webtorContainer.appendChild(playerDiv);

            // Ensure YT object and Player instance are accessible globally
            window.YT.player = new YT.Player('youtube-player', {
                videoId: id,
                playerVars: {
                    autoplay: 1,
                    listType: type === 'playlist' ? 'playlist' : undefined,
                    list: type === 'playlist' ? id : undefined,
                },
                events: {
                    onReady: event => {
                        console.log('YouTube Player is ready.');
                    },
                    onError: error => {
                        console.error('YouTube Player encountered an error:', error);
                    },
                    onStateChange: event => {
                        if (event.data === YT.PlayerState.PLAYING) {
                            title = event.target.getVideoData().title; // Save the song name
                            const currentTime = event.target.getCurrentTime(); // Get current time
                            const youtubeLink = `https://www.youtube.com/watch?v=${event.target.getVideoData().video_id}`; // Get YouTube link
                            changed(() => {
                                alert(`Song changed!\nCurrent Time: ${currentTime}\nYouTube Link: ${youtubeLink}`);
                            }); // Call the changed function with callback alert
                        }
                    }
                }
            });

            // Add custom buttons
            const iframeControls = document.createElement('div');
            iframeControls.className = 'iframe-controls';
            iframeControls.innerHTML = `
                <button class="custom-button" data-tip="Pop Out">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H10V6H6V10H4V4ZM20 4H14V6H18V10H20V4ZM4 20H10V18H6V14H4V20ZM20 20H14V18H18V14H20V20Z" fill="currentColor"/>
                    </svg>
                </button>
                <button class="custom-button" data-tip="Download Video">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill="currentColor"/>
                    </svg>
                </button>
                <button class="custom-button" data-tip="Copy Song Link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z" fill="currentColor"/>
                    </svg>
                </button>
                ${customButtons.map(button => `
                    <button class="custom-button" data-tip="${button.tip}" style="--neon-color: ${button.neonColor};">
                        ${button.svg}
                    </button>
                `).join('')}
            `;
            webtorContainer.appendChild(iframeControls);

            // Add event listeners for buttons
            iframeControls.querySelectorAll('.custom-button').forEach((button, index) => {
                if (index === 0) {
                    // Popout button
                    button.addEventListener('click', () => {
                        if (webtorContainer.requestFullscreen) {
                            webtorContainer.requestFullscreen();
                        } else if (webtorContainer.mozRequestFullScreen) { // Firefox
                            webtorContainer.mozRequestFullScreen();
                        } else if (webtorContainer.webkitRequestFullscreen) { // Chrome, Safari, and Opera
                            webtorContainer.webkitRequestFullscreen();
                        } else if (webtorContainer.msRequestFullscreen) { // IE/Edge
                            webtorContainer.msRequestFullscreen();
                        }
                    });
                } else if (index === 1) {
                    // Download video button
                    button.addEventListener('click', () => {
                        const downloadModal = document.getElementById('download-modal');
                        const downloadIframe = document.getElementById('download-iframe');
                        const youtubeLink = `https://www.youtube.com/watch?v=${window.YT.player.getVideoData().video_id}`;
                        const youtubeppUrl = youtubeLink.replace('youtube', 'youtubepp');

                        downloadModal.style.display = 'block';
                        downloadIframe.src = youtubeppUrl; // Default to youtubepp
                    });
                } else if (index === 2) {
                    // Copy song link button
                    button.addEventListener('click', () => {
                        const youtubeLink = `https://www.youtube.com/watch?v=${window.YT.player.getVideoData().video_id}`;
                        navigator.clipboard.writeText(youtubeLink)
                            .then(() => {
                                alert('Song link copied to clipboard!');
                            })
                            .catch(err => {
                                console.error('Failed to copy song link:', err);
                            });
                    });
                } else {
                    customButtons[index - 3].callback({ url: directInput });
                }
            });

            // Close modal when clicking the close button
            document.querySelectorAll('.close-modal').forEach(closeButton => {
                closeButton.addEventListener('click', () => {
                    const modal = closeButton.closest('.youtube-modal');
                    modal.style.display = 'none';

                    if (modal.id === 'youtube-modal') {
                        // Move the YouTube player back to the webtor-container
                        webtorContainer.appendChild(playerDiv);
                    } else if (modal.id === 'download-modal') {
                        // Remove the iframe from the DOM
                        const downloadIframe = document.getElementById('download-iframe');
                        downloadIframe.src = '';
                    }
                });
            });

            // Handle tab icon clicks (open in new tab)
            document.querySelectorAll('.tab-icon').forEach(tabIcon => {
                tabIcon.addEventListener('click', () => {
                    const service = tabIcon.getAttribute('data-service');
                    const youtubeLink = `https://www.youtube.com/watch?v=${window.YT.player.getVideoData().video_id}`;
                    const modifiedUrl = youtubeLink.replace('youtube', service);

                    window.open(modifiedUrl, '_blank'); // Open in new tab
                });
            });
        } else {
            console.error('.webtor-container not found in the DOM.');
        }
    }

    // Directly call the logic to handle playlist selection and player initialization
    (async () => {
        // Wait for the YouTube API to load
        await window.youtubeAPIReady;

        if (directInput) {
            const { type, id } = extractId(directInput);
            if (id) {
                initializePlayer(id, type);
            } else {
                console.error('No valid playlist ID or video ID found in the direct input.');
            }
        } else {
            const selectedPlaylist = await list(playlistsArray, 'playlists');
            if (selectedPlaylist?.url) {
                const { type, id } = extractId(selectedPlaylist.url);
                if (id) {
                    initializePlayer(id, type);
                } else {
                    console.error('No valid playlist ID or video ID found in the URL.');
                }
            } else {
                console.error('No playlist selected or selected playlist does not have a URL.');
            }
        }
    })();
}
function website(websitesArray, customButtons = []) {
    // Directly call the logic to handle website selection and iframe injection
    (async () => {
        // Call the list function to select a website (iframe)
        const selectedWebsite = await list(websitesArray, 'websites');
        removeCachedMovie()

        if (selectedWebsite) {
            // Wipe the webtor-container
            const webtorContainer = document.querySelector('#webtor-container');
            if (webtorContainer) {
                webtorContainer.innerHTML = ''; // Clear the container

                // Inject iframe inside the webtor-container
                const iframeHTML = `
                    <div class="iframe-container">
                        <iframe src="${selectedWebsite.iframeUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div class="iframe-controls">
                            <!-- Default Popout Button -->
                            <button class="custom-button" data-tip="Pop Out" style="--neon-color: purple";>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4H10V6H6V10H4V4ZM20 4V10H18V6H14V4H20ZM4 20V14H6V18H10V20H4ZM20 20H14V18H18V14H20V20Z" fill="white"/>
                                </svg>
                            </button>
                            <!-- Custom Buttons -->
                            ${customButtons.map(button => `
                                <button class="custom-button" data-tip="${button.tip}" style="--neon-color: ${button.neonColor};">
                                    ${button.svg}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                `;
                webtorContainer.insertAdjacentHTML('beforeend', iframeHTML);

                // Add event listeners for buttons
                const iframeElement = webtorContainer.querySelector('iframe');
                const buttons = webtorContainer.querySelectorAll('.custom-button');

                buttons.forEach((button, index) => {
                    if (index === 0) {
                        // Default popout button behavior
                        button.addEventListener('click', () => {
                            const popup = window.open('', 'Website Popout', 'width=800,height=600');
                            popup.document.body.innerHTML = `
                                <style>
                                    body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #000; }
                                    iframe { width: 800px; height: 600px; border: none; }
                                    .close-button { position: absolute; top: 10px; right: 10px; background: none; border: none; cursor: pointer; padding: 0; }
                                    .close-button svg { width: 24px; height: 24px; fill: white; }
                                </style>
                                <button class="close-button">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white"/>
                                    </svg>
                                </button>
                                ${iframeElement.outerHTML}
                            `;

                            // Add event listener for the close button in the popup
                            const closeButton = popup.document.querySelector('.close-button');
                            closeButton.addEventListener('click', () => {
                                webtorContainer.innerHTML = iframeHTML;
                                popup.close();
                            });
                        });
                    } else {
                        // Custom button behavior
                        const customButton = customButtons[index - 1];
                        button.addEventListener('click', () => {
                            customButton.callback(iframeElement);
                        });
                    }
                });
            } else {
                console.error('#webtor-container not found in the DOM.');
            }
        }
    })();
}

function patternize(targetElementSelector, options = {}) {
    // Default options
    const {
        images = ["🚀"], // Array of emojis or image URLs
        height = "200%", // Height of the pattern
        gapX = 10, // Horizontal gap between elements
        gapY = 10, // Vertical gap between rows
        animate = true, // Whether to animate the pattern
        rotation = 0, // Rotation of individual pattern elements in degrees
        pattern_rotation = 0, // Rotation of the entire pattern in degrees
        size = { width: 45, height: 35 }, // Width and height of the pattern elements
    } = options;

    // Find the target element
    const targetElement = document.querySelector(targetElementSelector);
    if (!targetElement) {
        console.warn(`Target element with selector "${targetElementSelector}" not found!`);
        return;
    }

    // Generate a unique ID for the pattern
    const patternId = `pattern-${targetElementSelector.replace(/\W+/g, '-')}-${Date.now()}`;

    // Check if the target element already has a pattern
    let patternElement = targetElement.querySelector('.pattern-container');
    if (patternElement) {
        // If a pattern already exists, remove it to update with the new one
        patternElement.remove();
    }

    // Create the SVG pattern element
    patternElement = document.createElement('div');
    patternElement.classList.add('pattern-container');
    let patternContent = '';

    // Loop through the images and create the pattern content
    const elementWidth = size.width; // Width of each element
    const elementHeight = size.height; // Height of each element
    const elementsPerRow = images.length; // Number of elements per row

    // Calculate the total width and height of the pattern
    const patternWidth = elementsPerRow * (elementWidth + gapX);
    const patternHeightPx = elementHeight + gapY;

    // Create multiple rows of the pattern
    for (let row = 0; row < Math.ceil(parseInt(height) / patternHeightPx); row++) {
        images.forEach((item, index) => {
            const isImage = item.startsWith('http'); // Check if the item is an image URL
            if (isImage) {
                // Add an <image> tag for image URLs
                patternContent += `<image xlink:href="${item}" width="${elementWidth}" height="${elementHeight}" x="${index * (elementWidth + gapX)}" y="${row * (elementHeight + gapY)}" transform="rotate(${rotation}, ${index * (elementWidth + gapX) + elementWidth / 2}, ${row * (elementHeight + gapY) + elementHeight / 2})" />`;
            } else {
                // Add a <text> tag for emojis
                patternContent += `<text font-size="${elementHeight}" x="${index * (elementWidth + gapX)}" y="${row * (elementHeight + gapY) + elementHeight}" transform="rotate(${rotation}, ${index * (elementWidth + gapX) + elementWidth / 2}, ${row * (elementHeight + gapY) + elementHeight / 2})">${item}</text>`;
            }
        });
    }

    // Create the SVG pattern
    patternElement.innerHTML = `<svg version="1.1" baseProfile="full" width="100%" height="${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <pattern id="${patternId}" width="${patternWidth}" height="${patternHeightPx}" patternUnits="userSpaceOnUse" patternTransform="rotate(${pattern_rotation})">
          ${patternContent}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#${patternId})" />
    </svg>`;

    // Apply styles to the pattern element
    patternElement.style.position = 'absolute';
    patternElement.style.zIndex = '-1';
    patternElement.style.width = '100%';
    patternElement.style.height = height;
    patternElement.style.bottom = '-10px';
    patternElement.style.opacity = '0.4';
    patternElement.style.filter = 'blur(1px)';

    // Append the pattern element to the target element
    targetElement.appendChild(patternElement);

    // Add animation to the pattern element if `animate` is true
    if (animate) {
        let direction = 1; // 1 for down, -1 for up
        let position = 0; // current position of the element
        const maxPosition = 100; // maximum position before direction flip
        const speed = 0.4; // speed of animation

        function animatePattern() {
            position += direction * speed;

            // Flip direction when position reaches maxPosition or 0
            if (position >= maxPosition || position <= 0) {
                direction *= -1;
            }

            patternElement.style.bottom = position + 'px';

            requestAnimationFrame(animatePattern);
        }

        requestAnimationFrame(animatePattern);
    }
}
  // Example usage with object parameters and `animate` set to false
  patternize('.lighting', {
    images: [
      "https://cdn3d.iconscout.com/3d/premium/thumb/long-spring-shape-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--sphere-decoration-pack-art-abstract-illustrations-4787004.png?f=webp",
      "https://cdn3d.iconscout.com/3d/premium/thumb/galaxy-abstract-gradient-shape-3d-icon-download-in-png-blend-fbx-gltf-file-formats--glass-pack-wallpaper-icons-9093259.png?f=webp",
      "https://cdn3d.iconscout.com/3d/premium/thumb/u-abstract-shape-3d-icon-download-in-png-blend-fbx-gltf-file-formats--design-pattern-gradient-pack-art-icons-6584981.png?f=webp"
    ],
    height: '400%',
    size: { width: 30, height: 30 },
    rotation: 0,
    pattern_rotation: 45,

    gapX: 40,
    gapY: 30,
    animate: false, // Disable animation
  });

  patternize('.floor', {
    images: [
      "https://5.imimg.com/data5/JD/TJ/MY-61369782/ceramic-tiles-500x500.jpg","https://5.imimg.com/data5/JD/TJ/MY-61369782/ceramic-tiles-500x500.jpg"
    ],
    height: '300%',
    rotation: 0,
    gapX: 0,
    gapY: 0,
    size: { width: 50, height: 50 },
    animate: false, // Disable animation
  });





//
// ##### #    # #####  ####   ####
//   #   #    #   #   #    # #
//   #   #    #   #   #    #  ####
//   #   #    #   #   #    #      #
//   #   #    #   #   #    # #    #
//   #    ####    #    ####   ####


//dog


// dyn_ad({
//     containerSelector: 'body', // Replace with your container selector
//     id: 'dog',
//     emoji:`🐶`,
//     position: 'fixed',
//     borderPosition: 'bottom',
//     popImages: [['https://i.pinimg.com/originals/8f/ef/aa/8fefaa44f99928585b65d34e05556590.png','https://www.freepnglogos.com/uploads/dog-png/bow-wow-gourmet-dog-treats-are-healthy-natural-low-4.png']], // Replace with your image path
//     tip_direction:`top`,
//     tooltipTheme: 'bubble',
//     tippy_height:300,
//     tippy_max_width:200,
//     tippy_max_height:300,

//     scenario: [
//     [
//       { delay: 5000, moveX: 30,
//         tooltipText: [
//           "انا اه كلب...بس انت لو معملتش لايك وسبسكرايب لتتوس فانت ابن ستين كلب",
//           `عارف اللي بياكل وينكر...أهو انت لأنك مش بتعمل لايك وسبسركايب للراجل اللي عمكل كل دا`,

//         ],
  
//       },


//       {delay: 4500, moveX: -20,
//         tooltipText: [
//            `**TikTok**  
//   [![TikTok](https://via.placeholder.com/150?text=TikTok)](https://tiktok.com/@tut.os)  
//   *Click on image*`,

//   ` **YouTube**  
//   [![YouTube](https://via.placeholder.com/150?text=YouTube)](https://youtube.com/@tut_os)  
//   *Click on image* `,

//   `  [![Instagram](https://via.placeholder.com/150?text=Instagram)](https://instagram.com/tutos.official)  
//   *Click on image*`,

//         ]
//       },

//       {
//         delay: 600,
//           event: (element) => {
//       theme();
      
//       },
//           event_type: 'click'
//         },

  
//   ],
//     ],
//     tippy_zindex:999,
//     imageSize:200,
//     slideInTime: 500,
//     slideOutTime: 500,
//     delayBeforeStart: 1000,
//     imageSpacing: 20,
//     customSlideInAnim: '',
//     customSlideOutAnim: '',
//     extraSpacing: 0,
//     delayBetweenElements: true,
//     randomizeSizes: false,
//     elementGap: 50,
//     rotationOnStart: 0,
//     rotationOnActive: 0,
//     rotationOnEnd: 0,
//     randomizeHeights: false,
//     heightVariation: 50,
   
//     onPhoneBorders:[200,200], //not working
  
//     tooltipAutoShow: true,
//     typewriterEffect: true,
//     typewriterSpeed: 50,

//     closeTippyOnClick: false,
//     sticker: false,
//     zIndex: 4,
  
//     distance: [0, 0]
//   });

  function theme(colorParams = {}, stealth = false) {
    // Helper function to convert HEX to RGB
    const hexToRgb = (hex) => {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return [r, g, b];
    };


    // Default color parameters for body, floor1, floor2, desk1, desk2, cupboard1, cupboard2, rgb1, rgb2
    const defaultColorParams = {
        bodyColor: '#e0e0e0', // Body background color
        floor1: '#f0f0f0',   // Light gray
        floor2: '#d0d0d0',   // Gray
        desk1: '#a0a0a0',    // Dark gray
        desk2: '#808080',    // Additional desk color
        cupboard1: '#999999', // Default cupboard1 color
        cupboard2: '#777777', // Default cupboard2 color
        rgb1: '#ffffff',     // Default rgb1 color
        rgb2: '#cccccc',     // Default rgb2 color
        bodyOpacity: 1,      // Default opacity values
        floor1Opacity: 1,
        floor2Opacity: 1,
        desk1Opacity: 1,
        desk2Opacity: 1,
        cupboard1Opacity: 1,
        cupboard2Opacity: 1,
        rgb1Opacity: 1,      // Default rgb1 opacity
        rgb2Opacity: 1,      // Default rgb2 opacity
        grayscale: 0,        // Default grayscale value
        contrast: 100,       // Default contrast value
        invert: 0,           // Default invert value
        brightness: 100,     // Default brightness value
        color1: '#ff0000',   // Default color1 (red)
        color2: '#00ff00'    // Default color2 (green)
    };

    // Retrieve saved color parameters from localStorage or use defaults
    const savedColorParams = JSON.parse(localStorage.getItem('themeColors')) || {};
    const finalColorParams = { ...defaultColorParams, ...savedColorParams, ...colorParams };

    // Function to apply the theme colors to the CSS variables
    const applyTheme = (params) => {
        const getRgbValue = (color) => {
            return hexToRgb(color).join(', ');
        };

        document.documentElement.style.setProperty('--body-color', `rgba(${getRgbValue(params.bodyColor)}, ${params.bodyOpacity})`);
        document.documentElement.style.setProperty('--floor1', `rgba(${getRgbValue(params.floor1)}, ${params.floor1Opacity})`);
        document.documentElement.style.setProperty('--floor2', `rgba(${getRgbValue(params.floor2)}, ${params.floor2Opacity})`);
        document.documentElement.style.setProperty('--desk1', `rgba(${getRgbValue(params.desk1)}, ${params.desk1Opacity})`);
        document.documentElement.style.setProperty('--desk2', `rgba(${getRgbValue(params.desk2)}, ${params.desk2Opacity})`);
        document.documentElement.style.setProperty('--cupboard1', `rgba(${getRgbValue(params.cupboard1)}, ${params.cupboard1Opacity})`);
        document.documentElement.style.setProperty('--cupboard2', `rgba(${getRgbValue(params.cupboard2)}, ${params.cupboard2Opacity})`);
        document.documentElement.style.setProperty('--rgb1', `rgba(${getRgbValue(params.rgb1)}, ${params.rgb1Opacity})`);
        document.documentElement.style.setProperty('--rgb2', `rgba(${getRgbValue(params.rgb2)}, ${params.rgb2Opacity})`);
        document.documentElement.style.setProperty('--grayscale', `${params.grayscale}%`);
        document.documentElement.style.setProperty('--contrast', `${params.contrast}%`);
        document.documentElement.style.setProperty('--invert', `${params.invert}%`);
        document.documentElement.style.setProperty('--brightness', `${params.brightness}%`);
        document.documentElement.style.setProperty('--color1', params.color1); // Apply color1
        document.documentElement.style.setProperty('--color2', params.color2); // Apply color2
    };

    // Apply the theme immediately when the function is called
    applyTheme(finalColorParams);

    // If stealth mode is enabled, return early without showing the modal
    if (stealth) {
        return;
    }

    // Function to update preset button colors
    const updatePresetButtons = () => {
        for (let i = 1; i <= 3; i++) {
            const preset = JSON.parse(localStorage.getItem(`themePreset${i}`));
            const presetButton = document.querySelector(`.preset-slot[data-slot="${i}"]`);
            if (preset) {
                // Set the background color of the button to represent the theme
                presetButton.style.background = `linear-gradient(to right, 
                    ${preset.bodyColor}, 
                    ${preset.floor1}, 
                    ${preset.floor2}, 
                    ${preset.desk1}, 
                    ${preset.desk2}, 
                    ${preset.cupboard1}, 
                    ${preset.cupboard2}, 
                    ${preset.rgb1}, 
                    ${preset.rgb2})`;
            } else {
                // Reset the button style if no preset is saved
                presetButton.style.background = '';
            }
        }
    };

    // Function to show the Swal2 modal with theme parameters
    const showThemeEditor = () => {
        // Create HTML for the Swal2 modal with a grid layout
        const html = `
            <div class="theme-grid">
                <div class="theme-item">
                    <p>Body Color:</p>
                    <input type="color" id="bodyColorPicker" value="${finalColorParams.bodyColor}">
                    <input type="range" id="bodyOpacitySlider" min="0" max="1" step="0.01" value="${finalColorParams.bodyOpacity}">
                    <p>Opacity: <span id="bodyOpacityValue">${finalColorParams.bodyOpacity}</span></p>
                </div>
                <div class="theme-item">
                    <p>Floor 1 Color:</p>
                    <input type="color" id="floor1ColorPicker" value="${finalColorParams.floor1}">
                    <input type="range" id="floor1OpacitySlider" min="0" max="1" step="0.01" value="${finalColorParams.floor1Opacity}">
                    <p>Opacity: <span id="floor1OpacityValue">${finalColorParams.floor1Opacity}</span></p>
                </div>
                <div class="theme-item">
                    <p>Floor 2 Color:</p>
                    <input type="color" id="floor2ColorPicker" value="${finalColorParams.floor2}">
                    <input type="range" id="floor2OpacitySlider" min="0" max="1" step="0.01" value="${finalColorParams.floor2Opacity}">
                    <p>Opacity: <span id="floor2OpacityValue">${finalColorParams.floor2Opacity}</span></p>
                </div>
                <div class="theme-item">
                    <p>Desk 1 Color:</p>
                    <input type="color" id="desk1ColorPicker" value="${finalColorParams.desk1}">
                    <input type="range" id="desk1OpacitySlider" min="0" max="1" step="0.01" value="${finalColorParams.desk1Opacity}">
                    <p>Opacity: <span id="desk1OpacityValue">${finalColorParams.desk1Opacity}</span></p>
                </div>
                <div class="theme-item">
                    <p>Desk 2 Color:</p>
                    <input type="color" id="desk2ColorPicker" value="${finalColorParams.desk2}">
                    <input type="range" id="desk2OpacitySlider" min="0" max="1" step="0.01" value="${finalColorParams.desk2Opacity}">
                    <p>Opacity: <span id="desk2OpacityValue">${finalColorParams.desk2Opacity}</span></p>
                </div>
                <div class="theme-item">
                    <p>Cupboard 1 Color:</p>
                    <input type="color" id="cupboard1ColorPicker" value="${finalColorParams.cupboard1}">
                    <input type="range" id="cupboard1OpacitySlider" min="0" max="1" step="0.01" value="${finalColorParams.cupboard1Opacity}">
                    <p>Opacity: <span id="cupboard1OpacityValue">${finalColorParams.cupboard1Opacity}</span></p>
                </div>
                <div class="theme-item">
                    <p>Cupboard 2 Color:</p>
                    <input type="color" id="cupboard2ColorPicker" value="${finalColorParams.cupboard2}">
                    <input type="range" id="cupboard2OpacitySlider" min="0" max="1" step="0.01" value="${finalColorParams.cupboard2Opacity}">
                    <p>Opacity: <span id="cupboard2OpacityValue">${finalColorParams.cupboard2Opacity}</span></p>
                </div>
                <div class="theme-item">
                    <p>RGB 1 Color:</p>
                    <input type="color" id="rgb1ColorPicker" value="${finalColorParams.rgb1}">
                    <input type="range" id="rgb1OpacitySlider" min="0" max="1" step="0.01" value="${finalColorParams.rgb1Opacity}">
                    <p>Opacity: <span id="rgb1OpacityValue">${finalColorParams.rgb1Opacity}</span></p>
                </div>
                <div class="theme-item">
                    <p>RGB 2 Color:</p>
                    <input type="color" id="rgb2ColorPicker" value="${finalColorParams.rgb2}">
                    <input type="range" id="rgb2OpacitySlider" min="0" max="1" step="0.01" value="${finalColorParams.rgb2Opacity}">
                    <p>Opacity: <span id="rgb2OpacityValue">${finalColorParams.rgb2Opacity}</span></p>
                </div>
                <div class="theme-item">
                    <p>Grayscale:</p>
                    <input type="range" id="grayscaleSlider" min="0" max="100" step="1" value="${finalColorParams.grayscale}">
                    <p>Grayscale: <span id="grayscaleValue">${finalColorParams.grayscale}%</span></p>
                </div>
                <div class="theme-item">
                    <p>Contrast:</p>
                    <input type="range" id="contrastSlider" min="0" max="200" step="1" value="${finalColorParams.contrast}">
                    <p>Contrast: <span id="contrastValue">${finalColorParams.contrast}%</span></p>
                </div>
                <div class="theme-item">
                    <p>Invert:</p>
                    <input type="range" id="invertSlider" min="0" max="100" step="1" value="${finalColorParams.invert}">
                    <p>Invert: <span id="invertValue">${finalColorParams.invert}%</span></p>
                </div>
                <div class="theme-item">
                    <p>Brightness:</p>
                    <input type="range" id="brightnessSlider" min="0" max="200" step="1" value="${finalColorParams.brightness}">
                    <p>Brightness: <span id="brightnessValue">${finalColorParams.brightness}%</span></p>
                </div>
                <div class="theme-item">
                    <p>Color 1:</p>
                    <input type="color" id="color1Picker" value="${finalColorParams.color1}">
                </div>
                <div class="theme-item">
                    <p>Color 2:</p>
                    <input type="color" id="color2Picker" value="${finalColorParams.color2}">
                </div>
            </div>
            <div class="preset-buttons">
                <button id="savePresetButton">💾 Save Preset</button>
                <div id="presetSlots">
                    <button class="preset-slot" data-slot="1">1️⃣</button>
                    <button class="preset-slot" data-slot="2">2️⃣</button>
                    <button class="preset-slot" data-slot="3">3️⃣</button>
                </div>
            </div>
        `;

        // Show the Swal2 modal
        Swal.fire({
            title: 'Theme Editor',
            html: html,
            backdrop: false,
            showConfirmButton: false, // Remove the "Close" button
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            didOpen: () => {
                // Update preset buttons with their saved colors
                updatePresetButtons();

                // Function to update CSS variables
                const updateCSSVariable = (variable, value) => {
                    document.documentElement.style.setProperty(variable, value);
                    autoSaveTheme();
                };

                // Add event listeners for body color
                document.getElementById('bodyColorPicker').addEventListener('input', (e) => {
                    updateCSSVariable('--body-color', `rgba(${hexToRgb(e.target.value).join(', ')}, ${document.getElementById('bodyOpacitySlider').value})`);
                });
                document.getElementById('bodyOpacitySlider').addEventListener('input', (e) => {
                    updateCSSVariable('--body-color', `rgba(${hexToRgb(document.getElementById('bodyColorPicker').value).join(', ')}, ${e.target.value})`);
                    document.getElementById('bodyOpacityValue').textContent = e.target.value;
                });

                // Add event listeners for floor1
                document.getElementById('floor1ColorPicker').addEventListener('input', (e) => {
                    updateCSSVariable('--floor1', `rgba(${hexToRgb(e.target.value).join(', ')}, ${document.getElementById('floor1OpacitySlider').value})`);
                });
                document.getElementById('floor1OpacitySlider').addEventListener('input', (e) => {
                    updateCSSVariable('--floor1', `rgba(${hexToRgb(document.getElementById('floor1ColorPicker').value).join(', ')}, ${e.target.value})`);
                    document.getElementById('floor1OpacityValue').textContent = e.target.value;
                });

                // Add event listeners for floor2
                document.getElementById('floor2ColorPicker').addEventListener('input', (e) => {
                    updateCSSVariable('--floor2', `rgba(${hexToRgb(e.target.value).join(', ')}, ${document.getElementById('floor2OpacitySlider').value})`);
                });
                document.getElementById('floor2OpacitySlider').addEventListener('input', (e) => {
                    updateCSSVariable('--floor2', `rgba(${hexToRgb(document.getElementById('floor2ColorPicker').value).join(', ')}, ${e.target.value})`);
                    document.getElementById('floor2OpacityValue').textContent = e.target.value;
                });

                // Add event listeners for desk1
                document.getElementById('desk1ColorPicker').addEventListener('input', (e) => {
                    updateCSSVariable('--desk1', `rgba(${hexToRgb(e.target.value).join(', ')}, ${document.getElementById('desk1OpacitySlider').value})`);
                });
                document.getElementById('desk1OpacitySlider').addEventListener('input', (e) => {
                    updateCSSVariable('--desk1', `rgba(${hexToRgb(document.getElementById('desk1ColorPicker').value).join(', ')}, ${e.target.value})`);
                    document.getElementById('desk1OpacityValue').textContent = e.target.value;
                });

                // Add event listeners for desk2
                document.getElementById('desk2ColorPicker').addEventListener('input', (e) => {
                    updateCSSVariable('--desk2', `rgba(${hexToRgb(e.target.value).join(', ')}, ${document.getElementById('desk2OpacitySlider').value})`);
                });
                document.getElementById('desk2OpacitySlider').addEventListener('input', (e) => {
                    updateCSSVariable('--desk2', `rgba(${hexToRgb(document.getElementById('desk2ColorPicker').value).join(', ')}, ${e.target.value})`);
                    document.getElementById('desk2OpacityValue').textContent = e.target.value;
                });

                // Add event listeners for cupboard1
                document.getElementById('cupboard1ColorPicker').addEventListener('input', (e) => {
                    updateCSSVariable('--cupboard1', `rgba(${hexToRgb(e.target.value).join(', ')}, ${document.getElementById('cupboard1OpacitySlider').value})`);
                });
                document.getElementById('cupboard1OpacitySlider').addEventListener('input', (e) => {
                    updateCSSVariable('--cupboard1', `rgba(${hexToRgb(document.getElementById('cupboard1ColorPicker').value).join(', ')}, ${e.target.value})`);
                    document.getElementById('cupboard1OpacityValue').textContent = e.target.value;
                });

                // Add event listeners for cupboard2
                document.getElementById('cupboard2ColorPicker').addEventListener('input', (e) => {
                    updateCSSVariable('--cupboard2', `rgba(${hexToRgb(e.target.value).join(', ')}, ${document.getElementById('cupboard2OpacitySlider').value})`);
                });
                document.getElementById('cupboard2OpacitySlider').addEventListener('input', (e) => {
                    updateCSSVariable('--cupboard2', `rgba(${hexToRgb(document.getElementById('cupboard2ColorPicker').value).join(', ')}, ${e.target.value})`);
                    document.getElementById('cupboard2OpacityValue').textContent = e.target.value;
                });

                // Add event listeners for rgb1
                document.getElementById('rgb1ColorPicker').addEventListener('input', (e) => {
                    updateCSSVariable('--rgb1', `rgba(${hexToRgb(e.target.value).join(', ')}, ${document.getElementById('rgb1OpacitySlider').value})`);
                });
                document.getElementById('rgb1OpacitySlider').addEventListener('input', (e) => {
                    updateCSSVariable('--rgb1', `rgba(${hexToRgb(document.getElementById('rgb1ColorPicker').value).join(', ')}, ${e.target.value})`);
                    document.getElementById('rgb1OpacityValue').textContent = e.target.value;
                });

                // Add event listeners for rgb2
                document.getElementById('rgb2ColorPicker').addEventListener('input', (e) => {
                    updateCSSVariable('--rgb2', `rgba(${hexToRgb(e.target.value).join(', ')}, ${document.getElementById('rgb2OpacitySlider').value})`);
                });
                document.getElementById('rgb2OpacitySlider').addEventListener('input', (e) => {
                    updateCSSVariable('--rgb2', `rgba(${hexToRgb(document.getElementById('rgb2ColorPicker').value).join(', ')}, ${e.target.value})`);
                    document.getElementById('rgb2OpacityValue').textContent = e.target.value;
                });

                // Add event listeners for grayscale
                document.getElementById('grayscaleSlider').addEventListener('input', (e) => {
                    updateCSSVariable('--grayscale', `${e.target.value}%`);
                    document.getElementById('grayscaleValue').textContent = `${e.target.value}%`;
                });

                // Add event listeners for contrast
                document.getElementById('contrastSlider').addEventListener('input', (e) => {
                    updateCSSVariable('--contrast', `${e.target.value}%`);
                    document.getElementById('contrastValue').textContent = `${e.target.value}%`;
                });

                // Add event listeners for invert
                document.getElementById('invertSlider').addEventListener('input', (e) => {
                    updateCSSVariable('--invert', `${e.target.value}%`);
                    document.getElementById('invertValue').textContent = `${e.target.value}%`;
                });

                // Add event listeners for brightness
                document.getElementById('brightnessSlider').addEventListener('input', (e) => {
                    updateCSSVariable('--brightness', `${e.target.value}%`);
                    document.getElementById('brightnessValue').textContent = `${e.target.value}%`;
                });

                // Add event listeners for color1
                document.getElementById('color1Picker').addEventListener('input', (e) => {
                    updateCSSVariable('--color1', e.target.value);
                });

                // Add event listeners for color2
                document.getElementById('color2Picker').addEventListener('input', (e) => {
                    updateCSSVariable('--color2', e.target.value);
                });

                // Save Preset button functionality
                document.getElementById('savePresetButton').addEventListener('click', () => {
                    const currentTheme = {
                        bodyColor: document.getElementById('bodyColorPicker').value,
                        floor1: document.getElementById('floor1ColorPicker').value,
                        floor2: document.getElementById('floor2ColorPicker').value,
                        desk1: document.getElementById('desk1ColorPicker').value,
                        desk2: document.getElementById('desk2ColorPicker').value,
                        cupboard1: document.getElementById('cupboard1ColorPicker').value,
                        cupboard2: document.getElementById('cupboard2ColorPicker').value,
                        rgb1: document.getElementById('rgb1ColorPicker').value,
                        rgb2: document.getElementById('rgb2ColorPicker').value,
                        bodyOpacity: parseFloat(document.getElementById('bodyOpacitySlider').value),
                        floor1Opacity: parseFloat(document.getElementById('floor1OpacitySlider').value),
                        floor2Opacity: parseFloat(document.getElementById('floor2OpacitySlider').value),
                        desk1Opacity: parseFloat(document.getElementById('desk1OpacitySlider').value),
                        desk2Opacity: parseFloat(document.getElementById('desk2OpacitySlider').value),
                        cupboard1Opacity: parseFloat(document.getElementById('cupboard1OpacitySlider').value),
                        cupboard2Opacity: parseFloat(document.getElementById('cupboard2OpacitySlider').value),
                        rgb1Opacity: parseFloat(document.getElementById('rgb1OpacitySlider').value),
                        rgb2Opacity: parseFloat(document.getElementById('rgb2OpacitySlider').value),
                        grayscale: parseFloat(document.getElementById('grayscaleSlider').value),
                        contrast: parseFloat(document.getElementById('contrastSlider').value),
                        invert: parseFloat(document.getElementById('invertSlider').value),
                        brightness: parseFloat(document.getElementById('brightnessSlider').value),
                        color1: document.getElementById('color1Picker').value,
                        color2: document.getElementById('color2Picker').value
                    };
                    const slot = prompt("Enter slot number (1, 2, or 3):");
                    if (slot && [1, 2, 3].includes(Number(slot))) {
                        localStorage.setItem(`themePreset${slot}`, JSON.stringify(currentTheme));
                        alert(`Theme saved to Preset ${slot}`);
                        updatePresetButtons(); // Update the preset button colors
                    } else {
                        alert("Invalid slot number. Please choose 1, 2, or 3.");
                    }
                });

                // Apply Preset functionality
                document.querySelectorAll('.preset-slot').forEach(button => {
                    button.addEventListener('click', () => {
                        const slot = button.getAttribute('data-slot');
                        const preset = JSON.parse(localStorage.getItem(`themePreset${slot}`));
                        if (preset) {
                            // Apply the preset colors and opacities
                            applyTheme(preset);

                            // Update the color pickers and sliders to match the preset
                            document.getElementById('bodyColorPicker').value = preset.bodyColor;
                            document.getElementById('bodyOpacitySlider').value = preset.bodyOpacity;
                            document.getElementById('bodyOpacityValue').textContent = preset.bodyOpacity;

                            document.getElementById('floor1ColorPicker').value = preset.floor1;
                            document.getElementById('floor1OpacitySlider').value = preset.floor1Opacity;
                            document.getElementById('floor1OpacityValue').textContent = preset.floor1Opacity;

                            document.getElementById('floor2ColorPicker').value = preset.floor2;
                            document.getElementById('floor2OpacitySlider').value = preset.floor2Opacity;
                            document.getElementById('floor2OpacityValue').textContent = preset.floor2Opacity;

                            document.getElementById('desk1ColorPicker').value = preset.desk1;
                            document.getElementById('desk1OpacitySlider').value = preset.desk1Opacity;
                            document.getElementById('desk1OpacityValue').textContent = preset.desk1Opacity;

                            document.getElementById('desk2ColorPicker').value = preset.desk2;
                            document.getElementById('desk2OpacitySlider').value = preset.desk2Opacity;
                            document.getElementById('desk2OpacityValue').textContent = preset.desk2Opacity;

                            document.getElementById('cupboard1ColorPicker').value = preset.cupboard1;
                            document.getElementById('cupboard1OpacitySlider').value = preset.cupboard1Opacity;
                            document.getElementById('cupboard1OpacityValue').textContent = preset.cupboard1Opacity;

                            document.getElementById('cupboard2ColorPicker').value = preset.cupboard2;
                            document.getElementById('cupboard2OpacitySlider').value = preset.cupboard2Opacity;
                            document.getElementById('cupboard2OpacityValue').textContent = preset.cupboard2Opacity;

                            document.getElementById('rgb1ColorPicker').value = preset.rgb1;
                            document.getElementById('rgb1OpacitySlider').value = preset.rgb1Opacity;
                            document.getElementById('rgb1OpacityValue').textContent = preset.rgb1Opacity;

                            document.getElementById('rgb2ColorPicker').value = preset.rgb2;
                            document.getElementById('rgb2OpacitySlider').value = preset.rgb2Opacity;
                            document.getElementById('rgb2OpacityValue').textContent = preset.rgb2Opacity;

                            document.getElementById('grayscaleSlider').value = preset.grayscale;
                            document.getElementById('grayscaleValue').textContent = `${preset.grayscale}%`;

                            document.getElementById('contrastSlider').value = preset.contrast;
                            document.getElementById('contrastValue').textContent = `${preset.contrast}%`;

                            document.getElementById('invertSlider').value = preset.invert;
                            document.getElementById('invertValue').textContent = `${preset.invert}%`;

                            document.getElementById('brightnessSlider').value = preset.brightness;
                            document.getElementById('brightnessValue').textContent = `${preset.brightness}%`;

                            document.getElementById('color1Picker').value = preset.color1;
                            document.getElementById('color2Picker').value = preset.color2;

                            Swal.close();
                        } else {
                            alert(`No theme saved in Preset ${slot}`);
                        }
                    });
                });
            },
            willOpen: () => {
                // Apply grid styles to the Swal2 modal
                const popup = Swal.getPopup();
                popup.style.width = '600px'; // Increase width to accommodate the grid
                popup.style.padding = '20px';

                const htmlContainer = Swal.getHtmlContainer();
                htmlContainer.style.fontSize = '14px';

                // Add CSS for the grid layout
                const style = document.createElement('style');
                style.textContent = `
                    .theme-grid {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        gap: 10px;
                    }
                    .theme-item {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .theme-item input[type="color"] {
                        width: 100%;
                        margin-bottom: 5px;
                    }
                    .theme-item input[type="range"] {
                        width: 100%;
                    }
                    .preset-buttons {
                        margin-top: 20px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 10px;
                    }
                    #savePresetButton {
                        background-color: #4CAF50;
                        color: white;
                        padding: 15px 30px;
                        border: none;
                        border-radius: 5px;
                        font-size: 16px;
                        cursor: pointer;
                        transition: background-color 0.3s ease;
                    }
                    #savePresetButton:hover {
                        background-color: #45a049;
                    }
                    #presetSlots {
                        display: flex;
                        gap: 10px;
                    }
                    .preset-slot {
                        padding: 15px;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 20px;
                        text-align: center;
                        width: 50px;
                        height: 50px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                `;
                document.head.appendChild(style);
            }
        });
    };

    // Auto-save theme changes
    const autoSaveTheme = () => {
        const savedColors = {
            bodyColor: document.getElementById('bodyColorPicker').value,
            floor1: document.getElementById('floor1ColorPicker').value,
            floor2: document.getElementById('floor2ColorPicker').value,
            desk1: document.getElementById('desk1ColorPicker').value,
            desk2: document.getElementById('desk2ColorPicker').value,
            cupboard1: document.getElementById('cupboard1ColorPicker').value,
            cupboard2: document.getElementById('cupboard2ColorPicker').value,
            rgb1: document.getElementById('rgb1ColorPicker').value,
            rgb2: document.getElementById('rgb2ColorPicker').value,
            bodyOpacity: parseFloat(document.getElementById('bodyOpacitySlider').value),
            floor1Opacity: parseFloat(document.getElementById('floor1OpacitySlider').value),
            floor2Opacity: parseFloat(document.getElementById('floor2OpacitySlider').value),
            desk1Opacity: parseFloat(document.getElementById('desk1OpacitySlider').value),
            desk2Opacity: parseFloat(document.getElementById('desk2OpacitySlider').value),
            cupboard1Opacity: parseFloat(document.getElementById('cupboard1OpacitySlider').value),
            cupboard2Opacity: parseFloat(document.getElementById('cupboard2OpacitySlider').value),
            rgb1Opacity: parseFloat(document.getElementById('rgb1OpacitySlider').value),
            rgb2Opacity: parseFloat(document.getElementById('rgb2OpacitySlider').value),
            grayscale: parseFloat(document.getElementById('grayscaleSlider').value),
            contrast: parseFloat(document.getElementById('contrastSlider').value),
            invert: parseFloat(document.getElementById('invertSlider').value),
            brightness: parseFloat(document.getElementById('brightnessSlider').value),
            color1: document.getElementById('color1Picker').value,
            color2: document.getElementById('color2Picker').value
        };
        localStorage.setItem('themeColors', JSON.stringify(savedColors));
    };

    // Show the theme editor when the function is called
    showThemeEditor();
}
  //bookshelf 

  function bookshelf(books) {
    // Create the bookshelf container
    const bookshelfElement = document.createElement("div");
    bookshelfElement.className = "bookshelf";

    // Create the books container
    const booksContainer = document.createElement("div");
    booksContainer.className = "books";


  
    // Add each book to the books container
    books.forEach(book => {
      const bookElement = document.createElement("div");
      bookElement.className = "book";
      bookElement.style.setProperty("--bg-image", `url(${book.thumbnail})`);
      bookElement.setAttribute("tip", book.tip);
  
      // Add title as a tooltip (optional)
      bookElement.title = book.title;
  
      // Add click event listener
      bookElement.addEventListener("click", book.callback);
  
      // Append the book to the books container
      booksContainer.appendChild(bookElement);
    });
  
    // Append the books container to the bookshelf
    bookshelfElement.appendChild(booksContainer);
  
    // Inject the bookshelf into the DOM
    document.body.appendChild(bookshelfElement);
  


  }
  


  //xat 

  function xat() {
    // Variables for customization
    const config = {
        // Container sizes
        minimizedWidth: '60px',
        minimizedHeight: '60px',
        maximizedWidth: '430px', // Default width before fitting content
        maximizedHeight: '450px', // Default height before fitting content
        minimizedBorderRadius: '50%',
        maximizedBorderRadius: '15px',

        // Colors
        containerBackground: '#2c3e50',
        buttonBackground: '#34495e',
        textColor: '#ecf0f1',
        progressBarColor: '#00bcd4', // Default color of the circular progress bar

        // Shadows
        containerShadow: `
            8px 8px 15px rgba(0, 0, 0, 0.3),
            -8px -8px 15px rgba(255, 255, 255, 0.05)
        `,
        buttonShadow: `
            inset 4px 4px 6px rgba(0, 0, 0, 0.3),
            inset -4px -4px 6px rgba(255, 255, 255, 0.05)
        `,

        // Button sizes
        buttonWidth: '50px',
        buttonHeight: '50px',
        buttonFontSize: '24px',

        // Progress bar
        progressBarThickness: '3px', // Thickness of the progress bar

        // Position
        containerLeft: '20px',
        containerBottom: '20px',
        buttonTopMaximized: '10px', // Position of the button when maximized
    };

    // Create the chat container
    const chatContainer = document.createElement('div');
    chatContainer.id = 'chat-container';
    chatContainer.style.position = 'fixed';
    chatContainer.style.left = config.containerLeft;
    chatContainer.style.bottom = config.containerBottom;
    chatContainer.style.width = config.minimizedWidth;
    chatContainer.style.height = config.minimizedHeight;
    chatContainer.style.borderRadius = config.minimizedBorderRadius;
    chatContainer.style.background = config.containerBackground;
    chatContainer.style.boxShadow = config.containerShadow;
    chatContainer.style.transition = 'all 0.3s ease';
    chatContainer.style.zIndex = '1000';
    chatContainer.style.overflow = 'hidden';

    // Create the toggle button container
    const buttonContainer = document.createElement('div');
    buttonContainer.style.position = 'absolute';
    buttonContainer.style.top = '50%';
    buttonContainer.style.left = '50%';
    buttonContainer.style.transform = 'translate(-50%, -50%)';
    buttonContainer.style.width = config.buttonWidth;
    buttonContainer.style.height = config.buttonHeight;

    // Create the circular progress bar
    const progressBar = document.createElement('div');
    progressBar.style.position = 'absolute';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.width = '100%';
    progressBar.style.height = '100%';
    progressBar.style.borderRadius = '50%';
    progressBar.style.border = `${config.progressBarThickness} solid transparent`;
    progressBar.style.borderTopColor = config.progressBarColor;
    progressBar.style.transform = 'rotate(-90deg)';
    progressBar.style.transition = 'all 0.3s ease';

    // Create the toggle button
    const toggleButton = document.createElement('button');
    toggleButton.id = 'toggle-button';
    toggleButton.style.position = 'absolute';
    toggleButton.style.top = '50%';
    toggleButton.style.left = '50%';
    toggleButton.style.transform = 'translate(-50%, -50%)';
    toggleButton.style.width = `calc(100% - ${config.progressBarThickness} * 2)`;
    toggleButton.style.height = `calc(100% - ${config.progressBarThickness} * 2)`;
    toggleButton.style.borderRadius = '50%';
    toggleButton.style.background = config.buttonBackground;
    toggleButton.style.border = 'none';
    toggleButton.style.boxShadow = config.buttonShadow;
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.color = config.textColor;
    toggleButton.style.fontSize = config.buttonFontSize;
    toggleButton.innerHTML = `
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
        </svg>
    `; // Speech bubble icon for minimized state

    // Append progress bar and button to the button container
    buttonContainer.appendChild(progressBar);
    buttonContainer.appendChild(toggleButton);

    // Create the chat iframe
    const chatIframe = document.createElement('iframe');
    chatIframe.id = 'chat-iframe';
    chatIframe.src = 'https://xat.com/embed/chat.php#id=220530353&gn=ForgahParty';
    chatIframe.style.width = '100%';
    chatIframe.style.height = '100%';
    chatIframe.style.border = 'none';
    chatIframe.style.display = 'none'; // Hidden by default

    // Append button container and iframe to the chat container
    chatContainer.appendChild(buttonContainer);
    chatContainer.appendChild(chatIframe);

    // Add the container to the body
    document.body.appendChild(chatContainer);

    // Function to generate a random color
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Change button and container color on hover
    toggleButton.addEventListener('mouseenter', () => {
        const randomColor = getRandomColor();
        toggleButton.style.background = randomColor;
        chatContainer.style.background = randomColor;
    });

    // Change button and container opacity on scroll
    chatContainer.addEventListener('wheel', (event) => {
        const currentOpacity = parseFloat(chatContainer.style.opacity || 1);
        const delta = event.deltaY > 0 ? -0.1 : 0.1; // Scroll down decreases opacity, scroll up increases it
        let newOpacity = currentOpacity + delta;

        // Ensure opacity stays between 10% and 100%
        newOpacity = Math.max(0.1, Math.min(1, newOpacity));
        chatContainer.style.opacity = newOpacity;
        toggleButton.style.opacity = newOpacity;

        // Update the progress bar color and rotation
        const progress = newOpacity * 100;
        const hue = (progress / 100) * 120; // Green (0) to Red (120) based on opacity
        progressBar.style.borderTopColor = `hsl(${hue}, 100%, 50%)`;
        progressBar.style.transform = `rotate(${-90 + (progress * 3.6)}deg)`;
    });

    // Toggle minimize/maximize functionality
    toggleButton.addEventListener('click', () => {
        if (chatContainer.style.width === config.minimizedWidth) {
            // Maximize
            chatContainer.style.width = config.maximizedWidth;
            chatContainer.style.height = config.maximizedHeight;
            chatContainer.style.borderRadius = config.maximizedBorderRadius;
            toggleButton.innerHTML = `
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M19 13H5v-2h14v2z"/>
                </svg>
            `; // Minus icon for maximized state
            buttonContainer.style.position = 'absolute';
            buttonContainer.style.top = config.buttonTopMaximized;
            buttonContainer.style.left = '50%';
            buttonContainer.style.transform = 'translateX(-50%)';
            chatIframe.style.display = 'block';

            // Adjust container size to fit the chat exactly
            chatIframe.onload = () => {
                const iframeDocument = chatIframe.contentDocument || chatIframe.contentWindow.document;
                const chatContent = iframeDocument.querySelector('body');
                if (chatContent) {
                    chatContainer.style.width = `${chatContent.scrollWidth}px`;
                    chatContainer.style.height = `${chatContent.scrollHeight + parseInt(config.buttonHeight, 10)}px`; // Add space for the toggle button
                }
            };
        } else {
            // Minimize
            chatContainer.style.width = config.minimizedWidth;
            chatContainer.style.height = config.minimizedHeight;
            chatContainer.style.borderRadius = config.minimizedBorderRadius;
            toggleButton.innerHTML = `
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                </svg>
            `; // Speech bubble icon for minimized state
            buttonContainer.style.position = 'absolute';
            buttonContainer.style.top = '50%';
            buttonContainer.style.left = '50%';
            buttonContainer.style.transform = 'translate(-50%, -50%)';
            chatIframe.style.display = 'none';
        }
    });
}

// Call the function to create the chat widget
xat();



        function save_load() {
            // Create the button container
            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'button-container';
            document.body.appendChild(buttonContainer);
        
            // Create the main Save/Load button
            const saveLoadButton = document.createElement('div');
            saveLoadButton.id = 'save_load';
            saveLoadButton.className = 'save-load-button';
            saveLoadButton.textContent = 'متخليش تعبك يضيع ';
            buttonContainer.appendChild(saveLoadButton);
        
            // Create the split buttons container (Save and Load buttons)
            const splitButtons = document.createElement('div');
            splitButtons.className = 'split-buttons';
            buttonContainer.appendChild(splitButtons);
        
            // Create the Save button
            const saveButton = document.createElement('div');
            saveButton.className = 'save-button';
            saveButton.textContent = 'Save';
            splitButtons.appendChild(saveButton);
        
            // Create the Load button
            const loadButton = document.createElement('div');
            loadButton.className = 'load-button';
            loadButton.textContent = 'Load';
            splitButtons.appendChild(loadButton);
        
            // Function to show split buttons
            function showSplitButtons() {
                splitButtons.style.display = 'flex';
            }
        
            // Function to hide split buttons
            function hideSplitButtons() {
                splitButtons.style.display = 'none';
            }
        
            // Toggle display of buttons on main button click
            saveLoadButton.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent click from bubbling to document
                if (splitButtons.style.display === 'none') {
                    showSplitButtons();
                }
            });
        
 
            // Hide split buttons when clicking anywhere else on the document
            document.addEventListener('click', () => {
                hideSplitButtons();
            });
        
            // Save functionality
            saveButton.addEventListener('click', () => {
                const localStorageData = JSON.stringify({ ...localStorage });
                const blob = new Blob([localStorageData], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'localStorage.json';
                a.click();
                URL.revokeObjectURL(url);
            });
        
            // Load functionality
            loadButton.addEventListener('click', () => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = 'application/json';
                input.onchange = (event) => {
                    const file = event.target.files[0];
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const data = JSON.parse(e.target.result);
                        for (const key in data) {
                            localStorage.setItem(key, data[key]);
                        }
                        alert('Local storage loaded successfully!');
                    };
                    reader.readAsText(file);
                };
                input.click();
            });
        }
        
        // Call the function to inject the button
        save_load();


        //---

        
//shop

        // Load cached score from localStorage
        let score = parseInt(localStorage.getItem('score')) || 1000; // Default score is 1000
        let currentPage = 1; // Current page for pagination
        const itemsPerPage = 8; // Max items per page

        // Load cached items from localStorage
        let cachedItems = JSON.parse(localStorage.getItem('cachedItems')) || [];

        // Load used promo codes from localStorage
        let usedPromoCodes = JSON.parse(localStorage.getItem('usedPromoCodes')) || [];

        // Update the score display
        const scoreDisplay = document.getElementById('score-value');
        scoreDisplay.textContent = score;

        // Track clicks on the score display
        let clickCount = 0;
        const scoreContainer = document.getElementById('score-display');
        scoreContainer.addEventListener('click', () => {
            clickCount++;
            if (clickCount === 11) {
                const password = prompt("Enter the password:");
                if (password === "ahmed" && !usedPromoCodes.includes("ahmed")) {
                    score += 10000;
                    usedPromoCodes.push("ahmed");
                    alert("You got 10,000 جنيه!");
                } else if (password === "heba" && !usedPromoCodes.includes("heba")) {
                    score += 100000;
                    usedPromoCodes.push("heba");
                    alert("You got 100,000 جنيه!");
                } else if (usedPromoCodes.includes(password)) {
                    alert("This promo code has already been used.");
                } else {
                    alert("Invalid password.");
                }
                // Update localStorage
                localStorage.setItem('score', score);
                localStorage.setItem('usedPromoCodes', JSON.stringify(usedPromoCodes));
                // Update the score display
                scoreDisplay.textContent = score;
                // Reset click count
                clickCount = 0;
            }
        });

        // Define shopItems before using it in functions
        const shopItems = [
            { id: 1, thumbnail: 'https://i.giphy.com/SaJMubXW9W5tEfmBAP.webp', title: 'سبونج بوب المعرص', price: 500, tip: 'مفيش احلي من سبونج بوب معرص عندك في الاوضه', emoji: '🧽', type: 'شخص',
             callback: () => dyn_ad({
        
    containerSelector: 'body', // Replace with your container selector
    id: 'test_english',
    position: 'fixed',
    borderPosition: 'bottom-left',
    popImages: [["https://i.giphy.com/SaJMubXW9W5tEfmBAP.webp"]], // Replace with your image path
    tooltipTheme: 'bubble',
    tippy_zindex:999,
    tip_direction:`top`,
        tooltipTheme: 'bubble',
        tippy_height:300,
        tippy_max_width:200,
        tippy_max_height:300,
        
    tooltipAutoShow: true,
    typewriterEffect: true,
    typewriterSpeed: 50,

    closeTippyOnClick: false,
    zIndex: 4,
    imageSize:200,
    distance: [[130, -20]],

    scenario: [
    [
    
      {
        delay: 2000,
        tooltipText:[`انا معرص يا سيدي`,`مش بقدر ابطل تعريص`,`انا سبونج بوب`,"احيبلك شاي او قهوه يا سيد الناس؟","مش عارف اقولك ايه بجد..بس انا مشفتش اجمل منك بني ادم","اقسم بالله ما شفت جمال بالشكل دا"]

      },
      {
        delay: 8000,
        tooltipText:[`تعرف انك لو دوست علي صورة تتوس و عملت لايك لكل صفحاته هيجيلك فلوس كتير؟`]
      },
  
  ],
    ],
    }) 
     },

            { id: 2, thumbnail: 'https://via.placeholder.com/80', title: 'اوضة البشوات', price: 1, tip: 'اللوان جامده و ستايل رايق', emoji: '⚡', type: 'اوضه', 
            callback: () => theme({
                // Theme 1: Cyberpunk Glow
                bodyColor: '#1b0325', // Deep Violet Black
                floor1: '#ff0080',    // Hot Pink Glow
                floor2: '#8000ff',    // Vivid Purple Glow
                desk1: '#660099',   
                desk2: '#330066',     // Deep Purple
                elements: '#e6e6e6',  // Soft White Glow
                bodyOpacity: 0.95,
                floor1Opacity: 0.9,
                floor2Opacity: 0.85,
                deskOpacity: 0.7,
                elementsOpacity: 1,
                grayscale: 10,        // Low grayscale
                contrast: 150,        // High contrast
                invert: 2,            // Strong invert
                brightness: 110,      // Brightened
                color1: '#ff00ff',    // Bright Magenta
                color2: '#00ffff',    // Cyan
                element: '#ccccff',   // Soft Light Blue
                cupboard1: '#222222', 
                cupboard2: '#333333' 
            }, true)
            
             },
            { id: 3, thumbnail: 'https://via.placeholder.com/80', title: 'اوضتي الدهبيه', price: 1, tip: 'شفت اوضتي الدهبيه؟ طب شفتها؟ طب هتشوفها؟', emoji: '🔥', type: 'اوضه', 
             callback: () => 
                theme({
                    // Theme 2: Sunset Horizon
                    bodyColor: '#332211', // Warm Earth
                    floor1: '#ff4500',    // Orange Glow
                    floor2: '#ffd700',    // Golden Yellow
                    desk1: '#8b4513',   
                    desk2: '#5c3317',     // Dark Brown
                    elements: '#ffffff',  // White
                    bodyOpacity: 0.9,
                    floor1Opacity: 0.85,
                    floor2Opacity: 0.75,
                    deskOpacity: 0.65,
                    elementsOpacity: 1,
                    grayscale: 20,        // Moderate grayscale
                    contrast: 130,        // Enhanced contrast
                    invert: 0,            // No inversion
                    brightness: 95,       // Slightly dimmed
                    color1: '#ff8c00',    // Bright Orange
                    color2: '#ffa500',    // Amber
                    element: '#ffe4b5',   // Light Golden
                    cupboard1: '#704214', 
                    cupboard2: '#8b5a2b'  
                }, true)
             },
            { id: 4, thumbnail: 'https://via.placeholder.com/80', title: 'اوضه هيبي', price: 200, tip: 'This is item 4', emoji: '💧', type: 'اوضه', 
            callback: () => 
                theme({
                    // Theme 4: Aurora Borealis
                    bodyColor: '#0a0f2d', // Dark Night Sky
                    floor1: '#00ff7f',    // Electric Green
                    floor2: '#ff1493',    // Deep Pink
                    desk1: '#004d40',   
                    desk2: '#800080',     // Purple
                    elements: '#ffffff',  // White
                    bodyOpacity: 0.8,
                    floor1Opacity: 0.85,
                    floor2Opacity: 0.9,
                    deskOpacity: 0.7,
                    elementsOpacity: 1,
                    grayscale: 15,        // Light grayscale
                    contrast: 135,        // Strong contrast
                    invert: 1,            // Moderate invert
                    brightness: 105,      // Slightly brightened
                    color1: '#9400d3',    // Purple
                    color2: '#00ff00',    // Green
                    element: '#f0e68c',   // Light Khaki
                    cupboard1: '#2e2e2e', 
                    cupboard2: '#3a3a3a'  
                }, true)
             },
            { id: 5, thumbnail: 'https://via.placeholder.com/80', title: 'زرقان وروقان', price: 300, tip: 'اللي بيحب الازرقات...ليلتكم زرقه ان شاء الله', emoji: '🍀', type: 'اوضه', callback: () => 
                theme({
                    // Theme 3: Ocean Depths
                    bodyColor: '#001f3f', // Midnight Blue
                    floor1: '#0074d9',    // Bright Blue
                    floor2: '#7fdbff',    // Soft Cyan
                    desk1: '#003366',   
                    desk2: '#001a33',     // Deep Navy
                    elements: '#e0f7fa',  // Light Cyan
                    bodyOpacity: 0.85,
                    floor1Opacity: 0.8,
                    floor2Opacity: 0.7,
                    deskOpacity: 0.6,
                    elementsOpacity: 1,
                    grayscale: 25,        // Slight grayscale
                    contrast: 140,        // High contrast
                    invert: 1,            // Moderate invert
                    brightness: 100,      // Normal brightness
                    color1: '#00bcd4',    // Bright Cyan
                    color2: '#009688',    // Teal
                    element: '#cceeff',   // Soft Light Blue
                    cupboard1: '#002244', 
                    cupboard2: '#003366'  
                }, true)
                
        },
            { id: 6, thumbnail: 'https://via.placeholder.com/80', title: 'Item 6', price: 1, tip: 'This is item 6', emoji: '🌈', type: 'اوضه', callback: () => 
                theme({
                    bodyColor: '#000000', // Black
                    floor1: '#000000',    // Black
                    floor2: '#000000',    // Black
                    desk1: '#000000',   
                    desk2: '#000000',     // Black
                    elements: '#ffffff',  // White for contrast
                    bodyOpacity: 1,
                    floor1Opacity: 1,
                    floor2Opacity: 1,
                    deskOpacity: 1,
                    elementsOpacity: 1,
                    grayscale: 0,         // No grayscale
                    contrast: 200,        // High contrast for sharp effect
                    invert: 30,            // Invert colors
                    brightness: 400,      // Normal brightness
                    color1: '#00000',    // White for clarity
                    color2: '#000000',    // White for consistency
                    element: '#cccccc',   // Light gray for soft elements
                    cupboard1: '#333333', 
                    cupboard2: '#444444'  
                }, true)
                
                
                
        },
            { id: 7, thumbnail: 'https://via.placeholder.com/80', title: 'يا برتقالي يا صايع', price: 1, tip: 'ميكس برتقاني مع اللوان داكنه تحفه', emoji: '✨', type: 'اوضه', callback: () => 
                theme({
                    bodyColor: '#212121', // Dark Charcoal
                    floor1: '#ff3b30',    // Bright Neon Red
                    floor2: '#5ac8fa',    // Neon Sky Blue
                    desk1: '#e74c3c',   
                    desk2: '#c0392b',     // Crimson Red
                    elements: '#ffffff',  // White
                    bodyOpacity: 0.8,
                    floor1Opacity: 0.85,
                    floor2Opacity: 0.75,
                    deskOpacity: 0.7,
                    elementsOpacity: 1,
                    grayscale: 30,        // Moderate grayscale
                    contrast: 140,        // High contrast
                    invert: 1,            // Moderate invert
                    brightness: 95,       // Slightly dimmed
                    color1: '#ff0000',    // Red
                    color2: '#00bcd4',    // Light Cyan
                    element: '#d1d1d1',   // Light Gray
                    cupboard1: '#34495e', 
                    cupboard2: '#2c3e50'  
                }, true)
                

            },
            { id: 8, thumbnail: 'https://via.placeholder.com/80', title: 'اخضراني و الشوق ناداني', price: 1, tip: 'الاخضر و عمايله..يستاهل تجربه علي اوضتك', emoji: '🎉', type: 'اوضه', callback: () => 
                theme({
                    bodyColor: '#0d1b2a', // Midnight Blue
                    floor1: '#32cd32',    // Electric Lime
                    floor2: '#00ff00',    // Bright Green
                    desk1: '#4caf50',   
                    desk2: '#388e3c',     // Darker Green
                    elements: '#ffffff',  // White
                    bodyOpacity: 0.85,
                    floor1Opacity: 0.9,
                    floor2Opacity: 0.8,
                    deskOpacity: 0.7,
                    elementsOpacity: 1,
                    grayscale: 10,        // Light grayscale
                    contrast: 150,        // Strong contrast
                    invert: 2,            // Strong invert
                    brightness: 110,      // Brightened
                    color1: '#76ff03',    // Neon Green
                    color2: '#00e676',    // Bright Green
                    element: '#a5d6a7',   // Light Green
                    cupboard1: '#2c6e49', 
                    cupboard2: '#3a5d33'  
                }, true)
                
             },
            { id: 9, thumbnail: 'https://via.placeholder.com/80', title: 'Item 9', price: 100, tip: 'This is item 9', emoji: '💎', type: 'typeC', callback: () => alert('Item 9 used!') },
            { id: 10, thumbnail: 'https://via.placeholder.com/80', title: 'Item 10', price: 200, tip: 'This is item 10', emoji: '🍄', type: 'typeA', callback: () => alert('Item 10 used!') },
            { id: 11, thumbnail: 'https://via.placeholder.com/80', title: 'Item 11', price: 300, tip: 'This is item 11', emoji: '🌙', type: 'typeB', callback: () => alert('Item 11 used!') },
            { id: 12, thumbnail: 'https://via.placeholder.com/80', title: 'Item 12', price: 400, tip: 'This is item 12', emoji: '🌞', type: 'typeC', callback: () => alert('Item 12 used!') }
        ];

        // Automatically use cached items when the site loads
        cachedItems.forEach(itemId => {
            const item = shopItems.find(i => i.id === itemId);
            if (item) item.callback();
        });

        function openShop() {
            renderShopModal(currentPage);
        }

        function renderShopModal(page) {
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const itemsToShow = shopItems.slice(startIndex, endIndex);

            const itemsHtml = itemsToShow.map(item => {
                const isCached = cachedItems.includes(item.id);
                const isExpensive = score < item.price;
                const isAffordable = score >= item.price && !isCached;

                let itemClass = '';
                if (isCached) {
                    itemClass = 'purchased';
                } else if (isExpensive) {
                    itemClass = 'expensive';
                } else if (isAffordable) {
                    itemClass = 'affordable';
                }

                return `
                    <div class="shop-item ${itemClass}" tip="${item.tip}" emoji="${item.emoji}">
                        <div class="title">${item.title}</div>
                        <div class="type">${item.type}</div>
                        <img src="${item.thumbnail}" alt="${item.title}">
                        <div class="price ${isExpensive ? 'cannot-afford' : ''}">💲${item.price}</div>
                        <button class="buy-btn" ${isExpensive ? 'disabled' : ''}>
                            ${isCached ? 'رجعه' : 'استخدم'}
                        </button>
                    </div>
                `;
            }).join('');

            const paginationHtml = `
                <div class="pagination">
                    <button onclick="changePage(${page - 1})" ${page === 1 ? 'disabled' : ''}>Previous</button>
                    <span>Page ${page} of ${Math.ceil(shopItems.length / itemsPerPage)}</span>
                    <button onclick="changePage(${page + 1})" ${endIndex >= shopItems.length ? 'disabled' : ''}>Next</button>
                </div>
            `;

            Swal.fire({
                title: '<div class="magical-title">الكشك السحري</div>',
                html: `<div class="shop-container">${itemsHtml}</div>${paginationHtml}`,
     
                width: '80%',
                background: '#1e1e1e',
                customClass: {
                    popup: 'magical-modal',
                    title: 'magical-title'
                },
                didOpen: () => {
                    document.querySelectorAll('.buy-btn').forEach((btn, index) => {
                        const item = itemsToShow[index];
                        btn.addEventListener('click', () => {
                            if (cachedItems.includes(item.id)) {
                                // Deactivate item
                                cachedItems = cachedItems.filter(id => id !== item.id);
                                score += item.price; // Refund the price
                            } else {
                                // Check if there's an active item of the same type
                                const activeItemOfSameType = cachedItems.find(id => {
                                    const activeItem = shopItems.find(i => i.id === id);
                                    return activeItem && activeItem.type === item.type;
                                });

                                if (activeItemOfSameType) {
                                    // Deactivate the older item
                                    cachedItems = cachedItems.filter(id => id !== activeItemOfSameType);
                                    const olderItem = shopItems.find(i => i.id === activeItemOfSameType);
                                    score += olderItem.price; // Refund the price
                                }

                                // Activate the new item
                                cachedItems.push(item.id);
                                score -= item.price; // Deduct the price
                                item.callback();
                            }
                            // Update localStorage
                            localStorage.setItem('cachedItems', JSON.stringify(cachedItems));
                            localStorage.setItem('score', score);
                            // Update the score display
                            scoreDisplay.textContent = score;
                            // Re-render the modal
                            renderShopModal(currentPage);
                        });
                    });
                }
            });
        }

        function changePage(newPage) {
            if (newPage < 1 || newPage > Math.ceil(shopItems.length / itemsPerPage)) return;
            currentPage = newPage;
            renderShopModal(currentPage);
        }
