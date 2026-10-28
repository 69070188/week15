const foodList = [
  {
    name: "ผัดกะเพราหมูสับ",
    description: "เมนูคลาสสิคไทย รสจัดจ้านด้วยใบกะเพรา พริกขี้หนู และน้ำปลา เสิร์ฟพร้อมข้าวร้อน",
    price: "฿55",
    image: "ผัดกะเพราหมูสับ.avif"
  },
  {
    name: "ก๋วยเตี๋ยวต้มยำ",
    description: "เส้นหมี่หรือเส้นเล็กในน้ำซุปต้มยำรสเปรี้ยว เผ็ด เค็ม หวาน กลมกล่อม ด้วยลูกชิ้นสดและหมูสับ",
    price: "฿60",
    image: "ก๋วยเตี๋ยวต้มยำ.jpg"
  },
  {
    name: "ข้าวผัดหมู",
    description: "ข้าวสวยผัดกับหมู หอมใหญ่ ต้นหอม ไข่ และซีอิ๊ว ให้รสชาติกลมกล่อม เหมาะกับทุกเวลา",
    price: "฿50",
    image: "ข้าวผัดหมู.jpg"
  },
  {
    name: "ราดหน้าหมู",
    description: "เส้นใหญ่นุ่มๆคลุกกับซอสเข้มข้น ผักคะน้า หมูชิ้น รสชาติหวานเค็มลงตัว",
    price: "฿65",
    image: "ราดหน้าหมู.jpg"
  },
  {
    name: "ข้าวมันไก่",
    description: "ข้าวหอมมะลิหุงในน้ำซุปไก่ นุ่มละมุน เสิร์ฟพร้อมเนื้อไก่ต้ม น้ำจิ้มเต้าเจี้ยวรสเด็ด และซุปอร่อย",
    price: "฿55",
    image: "ข้าวมันไก่.jpg"
  }
];

const foodImg = document.getElementById("food-img");
const foodName = document.getElementById("food-name");
const foodDesc = document.getElementById("food-desc");
const foodPrice = document.getElementById("food-price");
const randomBtn = document.getElementById("random-btn");

let lastIndex = -1;

function getRandomIndex() {
  if (foodList.length <= 1) return 0;
  
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * foodList.length);
  } while (randomIndex === lastIndex);
  
  lastIndex = randomIndex;
  return randomIndex;
}

function displayRandomFood() {
  const index = getRandomIndex();
  const food = foodList[index];

  foodImg.style.opacity = "0";
  foodName.style.opacity = "0";
  foodDesc.style.opacity = "0";
  foodPrice.style.opacity = "0";

  setTimeout(() => {
    foodImg.src = food.image;
    foodImg.alt = food.name;
    foodName.textContent = food.name;
    foodDesc.textContent = food.description;
    foodPrice.textContent = food.price;

    foodImg.style.opacity = "1";
    foodName.style.opacity = "1";
    foodDesc.style.opacity = "1";
    foodPrice.style.opacity = "1";
  }, 200);
}

randomBtn.addEventListener("click", displayRandomFood);

window.addEventListener("load", displayRandomFood);