let data = [
    {
        id: 0,
        name: "肥宅心碎賞櫻3日",
        imgUrl: "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
        area: "高雄",
        description: "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
        group: 87,
        price: 1400,
        rate: 10,
    },
    {
        id: 1,
        name: "貓空纜車雙程票",
        imgUrl: "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        area: "台北",
        description:
            "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
        group: 99,
        price: 240,
        rate: 2,
    },
    {
        id: 2,
        name: "台中谷關溫泉會1日",
        imgUrl: "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        area: "台中",
        description:
            "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
        group: 20,
        price: 1765,
        rate: 7,
    },
];

const area = document.querySelector("#area");
const areaList = document.querySelector("#area-list");
const form = document.querySelector("#form");

const render = (data) => {
    areaList.innerHTML = "";

    const htmlList = data
        .map((item) => {
            const { name, imgUrl, area, description, group, price, rate } =
                item;

            return `
        <li class="relative bg-white flex flex-col">
            <img
                src=${imgUrl}
                alt="綠島自由行套裝行程"
                class="h-[180px] w-full object-cover"
            />
            <div class="relative flex flex-col grow gap-5 px-5 pt-5 pb-[14px]">
                <span
                    class="absolute top-0 left-0 -translate-y-1/2 bg-primary py-[5px] px-2 text-white"
                >
                    ${rate}
                </span>
                <div>
                    <h2
                        class="border-b-2 border-primary text-[1.5rem] font-medium text-primary"
                    >
                        ${name}
                    </h2>
                    <p class="text-dark-grey">${description}</p>
                </div>
                <div class="flex items-center justify-between">
                    <p class="font-medium text-primary">
                        剩下最後 ${group} 組
                    </p>
                    <p
                        class="flex items-center gap-1 font-medium text-primary"
                    >
                        <span>TWD</span>
                        <span class="text-[2rem]"> $${price} </span>
                    </p>
                </div>
            </div>
            <span
                class="absolute -top-2 left-0 bg-accent py-2 px-5 text-[1.25rem] text-white"
            >
                ${area}
            </span>
        </li>
    `;
        })
        .join("");

    areaList.insertAdjacentHTML("afterbegin", htmlList);
    document.querySelector(
        "#found-data-amount"
    ).innerText = `本次搜尋共 ${data.length} 筆資料`;
};

area.addEventListener("change", (e) => {
    const { value } = e.target;
    if (value === "全部地區") return render(data);
    render(data.filter((item) => item.area === value));
});

render(data);
