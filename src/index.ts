import calculateEaster from "./calculateEaster";
import dayjs from "dayjs";

const main = document.getElementById("main")!;

const date = dayjs();
let nextEaster = calculateEaster(date.year());

if (nextEaster.isSame(date, "day")) {
    main.innerText = "Yes";
} else {
    if (nextEaster.isBefore(date, "day")) {
        nextEaster = calculateEaster(date.year() + 1);
    }

    main.innerHTML = `No<br>The next easter is on ${nextEaster.format("MMMM D, YYYY")}`;
}