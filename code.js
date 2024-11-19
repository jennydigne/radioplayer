async function getChannels() {
    const response = await fetch("http://api.sr.se/api/v2/channels?format=json");
    const data = await response.json();

    const channels = document.querySelector("#channels");

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
        channelEl.style.backgroundColor = `#${channel.color}`;
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






