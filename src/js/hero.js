const heroDataList = [
    {
        followLink: "https://www.instagram.com/goitclub/",
        text:"IG",
    },
    {
        followLink: "https://www.facebook.com/goITclub/",
        text: "FB",
    },
    {
        followLink: "https://www.youtube.com/c/GoIT",
        text: "YT",
    },
    {
        followLink:"https://github.com/RamiiaHolomoza/light-summer-project" ,
        text: "GH",
    },
    {
        followLink: "mailto:lloydjefferson@gmail.com",
        text:"lloydjefferson@gmail.com" ,
    }
]

const heroList = document.querySelector('.hero-list')

export function createAboutInfoMarkup(structure) {
    return structure
        .map(
            ({ followLink, text }) => `<li class="hero-list-item"><a
          href="${followLink}"
          class="hero-list-link"
          target="_blank"
          >${text}</a
        ></li>`
    )
        .join("")
}

heroList.insertAdjacentHTML("beforeend", createAboutInfoMarkup(heroDataList)); 