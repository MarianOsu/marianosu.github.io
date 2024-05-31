// Button links onclick
const osu = document.getElementById("osu");
const twitch = document.getElementById("twitch");
const youtube = document.getElementById("youtube");
const skins = document.getElementById("skins");

osu.addEventListener("click", () => {
    window.open("https://osu.ppy.sh/users/6371395", "_blank");
});
twitch.addEventListener("click", () => {
    window.open("https://www.twitch.tv/marianosu", "_blank");
});
youtube.addEventListener("click", () => {
    window.open("https://www.youtube.com/channel/UCBCI18qth1eU11TjEl4decw", "_blank");
});
skins.addEventListener("click", () => {
    window.open("https://gist.github.com/MarianOsu/2a507d74fbcb66f8d6d6eab9b4d8d902", "_blank");
})

// Glow effect
const syncPointer = ({ x, y }) => {
  document.documentElement.style.setProperty("--x", x.toFixed(2));
  document.documentElement.style.setProperty(
    "--xp",
    (x / window.innerWidth).toFixed(2)
  );
  document.documentElement.style.setProperty("--y", y.toFixed(2));
  document.documentElement.style.setProperty(
    "--yp",
    (y / window.innerHeight).toFixed(2)
  );
};
document.body.addEventListener("pointermove", syncPointer);

// Rank fetch
fetch(
  `https://api.allorigins.win/get?url=${encodeURIComponent('https://osuchan.syrin.me/api/profiles/users/Mariano/stats/0?user_id_type=username')}`, {
}
)
  .then((res) => res.json())
  .then((data) => {
    data = JSON.parse(data.contents);
        document.getElementById("global_rank").innerHTML = `#${data.rank}`;
        document.getElementById("country_rank").innerHTML = `#${data.country_rank}`;
  });
