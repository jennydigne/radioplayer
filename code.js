async function getChannels() {
    const response = await fetch("https://api.sr.se/api/v2/channels?format=json");
    const data = await response.json();

    const channels = document.querySelector("#channels");

    function setChannelColor(channelEl, hex) {
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);
    
        channelEl.style.setProperty("--channel-color-r", r);
        channelEl.style.setProperty("--channel-color-g", g);
        channelEl.style.setProperty("--channel-color-b", b);
    }

    data.channels.forEach((channel) => {
        const channelEl = document.createElement("div");
        const channelImg = document.createElement("img")
        const channelTitle = document.createElement("h4");
        const audioContainer = document.createElement("div");
        const audioEl = document.createElement("audio");
        const sourceEl = document.createElement("source");

        channelEl.classList.add("channelEl");
        channelImg.classList.add("channelImg");
        channelTitle.classList.add("channelTitle");
        audioContainer.classList.add("audioContainer");
        audioEl.classList.add("audioEl");

        channelImg.src = channel.image;
        channelTitle.innerHTML = channel.name;
        channelEl.style.setProperty("--channel-color", `#${channel.color}`);
        setChannelColor(channelEl, channel.color);
        audioEl.controls = true;
        sourceEl.src = channel.liveaudio.url;
        sourceEl.type = "audio/mpeg";

        channels.appendChild(channelEl); 
        channelEl.appendChild(channelImg);
        channelEl.appendChild(audioContainer);
        audioContainer.appendChild(channelTitle);
        audioContainer.appendChild(audioEl);
        audioEl.appendChild(sourceEl);
    })
}

getChannels();






