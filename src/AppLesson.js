// When importing with folder VideoLesson, it automaticcaly connect index.js
import { VideoLesson } from "./components/VideoLesson";

const products = [
  {
    id: 1,
    name: "Espresso",
    price: 4,
    image:
      "https://media.istockphoto.com/photos/hot-coffee-on-wooden-table-picture-id1084020754?k=6&m=1084020754&s=612x612&w=0&h=mmY4i2XQwWpaBkccyGcW1IqL9Suo_CiJqxCUiJpfzy8=",
  },
  {
    id: 2,
    name: "Latte",
    price: 5,
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
  },
  {
    id: 3,
    name: "Cappucino",
    price: 3,
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
  },
  {
    id: 4,
    name: "Круасан",
    price: 2.5,
    image:
      "https://img.iamcook.ru/2020/upl/recipes/middle/u-4a4de86666f4112e166e8a430a690ab8.jpg",
  },
];

function AppLesson() {
  return (
    <div className="App">
      <VideoLesson products={products}>Expensive card</VideoLesson>
    </div>
  );
}

export default AppLesson;
