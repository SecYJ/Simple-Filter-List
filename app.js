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
            const { name, imgUrl, description, group, price, rate, area } =
                item;

            return `
        <li class="relative bg-white grid grid-rows-[auto,1fr]">
            <img
                src=${imgUrl}
                alt=${name}
                class="h-[180px] w-full object-cover"
            />
            <div class="relative grid grid-rows-[1fr,auto]  px-5 pt-5 pb-[14px]">
                <span
                    class="absolute top-0 left-0 -translate-y-1/2 bg-primary py-[5px] px-2 text-white"
                >
                    ${rate}
                </span>
                <div>
                    <h2
                        class="border-b-2 border-primary text-[1.5rem] font-medium text-primary mb-4"
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

const validation = (input) => {
    return input.match(/\D/g) ? false : true;
};

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const mapFormData = [...new FormData(this)];

    if (mapFormData.length !== 7) return alert("请填写全部内容");
    const inputs = mapFormData.reduce((accumulator, current) => {
        const [key, val] = current;
        accumulator[key] = val.trim();
        return accumulator;
    }, {});

    const { rate, price, group, description } = inputs;

    if (!viewpoint) {
        return alert("请选择地区");
    } else if (isNaN(rate) || rate < 1 || rate > 10) {
        return alert("请输入有效的星級");
    } else if (!validation(price) || !validation(group)) {
        return alert("请输入有效的数字");
    } else if (description.length > 100) {
        return alert("文字不可超过 100");
    }

    data.push({ ...inputs, area: inputs.viewpoint, id: data.length - 1 });
    render(data);
    this.reset();
});

render(data);

// class App {
//     #form = document.querySelector("#form");
//     #areaList = document.querySelector("#area-list");
//     #area = document.querySelector("#area");
//     #data = [];

//     constructor(data) {
//         this.#data = [...data];
//         this.#form.addEventListener("submit", this.#formSubmit.bind(this));
//         this.#area.addEventListener("change", this.#areaChange.bind(this));
//         this.#render(this.#data);
//     }

//     #formSubmit(e) {
//         e.preventDefault();
//         const mapFormData = [...new FormData(this.#form)];
//            if (mapFormData.length !== 7) return alert("请填写全部内容");
//         const inputs = mapFormData.reduce((accumulator, current) => {
//             const [key, val] = current;
//             accumulator[key] = val.trim();
//             return accumulator;
//         }, {});
//         const { rate, price, group, description, viewpoint } = inputs;

//         if (!viewpoint) {
//             return alert("请选择地区");
//         } else if (isNaN(rate) || rate < 1 || rate > 10) {
//             return alert("请输入有效的星級");
//         } else if (!this.#validation(price) || !this.#validation(group)) {
//             return alert("请输入有效的数字");
//         } else if (description.length > 100) {
//             return alert("文字不可超过 100");
//         }

//         this.#data.push({
//             ...inputs,
//             area: inputs.viewpoint,
//             id: data.length - 1,
//         });
//         this.#render(this.#data);
//         this.#form.reset();
//     }

//     #areaChange(e) {
//         const { value } = e.target;
//         if (value === "全部地區") return this.#render(this.#data);
//         this.#render(this.#data.filter((item) => item.area === value));
//     }

//     #validation(input) {
//         return input.match(/\D/g) ? false : true;
//     }

//     #mapHTML(data) {
//         return data
//             .map((item) => {
//                 const { name, imgUrl, description, group, price, rate, area } =
//                     item;

//                 return `
//                     <li class="relative bg-white grid grid-rows-[auto,1fr]">
//                         <img
//                             src=${imgUrl}
//                             alt=${name}
//                             class="h-[180px] w-full object-cover"
//                         />
//                         <div class="relative grid grid-rows-[1fr,auto]  px-5 pt-5 pb-[14px]">
//                             <span
//                                 class="absolute top-0 left-0 -translate-y-1/2 bg-primary py-[5px] px-2 text-white"
//                             >
//                                 ${rate}
//                             </span>
//                             <div>
//                                 <h2
//                                     class="border-b-2 border-primary text-[1.5rem] font-medium text-primary mb-4"
//                                 >
//                                     ${name}
//                                 </h2>
//                                 <p class="text-dark-grey">${description}</p>
//                             </div>
//                             <div class="flex items-center justify-between">
//                                 <p class="font-medium text-primary">
//                                     剩下最後 ${group} 組
//                                 </p>
//                                 <p
//                                     class="flex items-center gap-1 font-medium text-primary"
//                                 >
//                                     <span>TWD</span>
//                                     <span class="text-[2rem]"> $${price} </span>
//                                 </p>
//                             </div>
//                         </div>
//                         <span
//                             class="absolute -top-2 left-0 bg-accent py-2 px-5 text-[1.25rem] text-white"
//                         >
//                             ${area}
//                         </span>
//                     </li>
//             `;
//             })
//             .join("");
//     }

//     #render(data) {
//         this.#areaList.innerHTML = "";
//         this.#areaList.insertAdjacentHTML("afterbegin", this.#mapHTML(data));
//         document.querySelector(
//             "#found-data-amount"
//         ).innerText = `本次搜尋共 ${data.length} 筆資料`;
//     }
// }

// new App(data);
