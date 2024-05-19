import React from "react";
import Pic from "./ex.jpg";
import Pic2 from "./icons8-plus-24.png"
import Pic3 from"./icons8-heart-24.png";
import { BookOpenIcon, BanknotesIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react"
import ExchangeBookDialog from "../../components/exchange/ExchangeBookDialog";
import ExchangeMoneyDialog from "../../components/exchange/ExchangeMoneyDialog";
import WrapBar from "../../components/WrapBar";

const BookDetail = () => {
  const [openExchangeBook, setOpenExchangeBook] = React.useState(false);
  const [openExchangeMoney, setOpenExchangeMoney] = React.useState(false)
  const handleOpenExchangeBook = () => setOpenExchangeBook((cur) => !cur);
  const handleOpenExchangeMoney = () => setOpenExchangeMoney((cur) => !cur);

  return (
    <WrapBar>
      <div class="space-y-5">
        <div class="max-w-6xl mx-auto px-5 space-y-5">
          <div class="flex space-x-10">
            <div className="flex flex-col space-y-2">
              <div><img class="w-72 h-96 rounded-lg  shadow-lg" src= {Pic} alt="book"/></div>
              <div className="flex flex-col space-y-2">
                <Button 
                  className="flex items-center font-serif text-nowrap space-x-2 p-4 rounded-lg bg-white text-red-500 w-full h-full justify-center hover:bg-gray-200"
                  onClick={handleOpenExchangeMoney}
                >
                  <BanknotesIcon className="h-6 w-6"/>
                  <div>Exchange with money</div>
                </Button>
                <Button 
                  className="flex items-center font-serif text-nowrap space-x-2 p-4 rounded-lg bg-white text-red-500 w-full h-full justify-center hover:bg-gray-200"
                  onClick={handleOpenExchangeBook}
                >
                  <BookOpenIcon className="h-6 w-6"/>
                  <div>Exchange with another book</div>
                </Button>
                <ExchangeBookDialog
                  open={openExchangeBook}
                  handleOpen={handleOpenExchangeBook}
                  img={Pic}
                />
                <ExchangeMoneyDialog
                  open={openExchangeMoney}
                  handleOpen={handleOpenExchangeMoney}
                  img={Pic}
                />
              </div>
            </div>
            <div class="flex-1 space-y-0.5">
              <div className="flex h-24 space-x-4">
                <button class="flex items-center font-serif text-nowrap space-x-2 p-4 rounded-lg bg-blue-100 text-blue-500 w-1/2 h-1/2 justify-center hover:bg-blue-200">
                  <img class="h-5 w-5" src= {Pic2} alt="add"/>
                  <div>Offer</div>
                </button>
                <button class="flex items-center font-serif text-nowrap space-x-2 p-4 rounded-lg bg-pink-100 text-pink-500 w-1/2 h-1/2 justify-center hover:bg-pink-200">
                  <img class="h-5 w-5" src={Pic3} alt="add-for-wish"/>
                  <div >Add to interest</div>
                </button>
              </div>
              <div class="text-3xl text-gray-800 font-bold ">Một cái gì đó không bao giờ kết thúc</div>
              <div class="text-2xl text-blue-500 font-bold ">Lucy Store</div>
              <div class="text-lg text-blue-500">Nhà xuất bản: <a class="text-blue-500 hover:underline">Liberum Artis</a></div>
              <div class="text-lg flex space-x-3">
                <div>2020</div>
                <div>32 psl.</div>
                <div>ISBN 9786094280245</div>
              </div>
              <div class="text-sm flex italic space-x-4">
                <div>Bìa: mềm</div>
                <div>Tiếng: Litva</div>
              </div>
              <div class="text-lg font-sans">
                <p>Anh ấy không có khuynh hướng yêu một cô gái tốt
      Knox, một thợ cắt tóc cộc cằn, có râu, có xu hướng sống giống như anh ta uống cà phê - một mình, ngoại trừ con chó của anh ta, Waylon, một con chó săn basset.
      Knox không chấp nhận kịch tính, ngay cả khi nó là do cô dâu đang trong tình thế tuyệt vọng đã bỏ chạy khỏi bàn thờ gây ra.
      Naomi không chỉ chạy trốn khỏi đám cưới của mình. Cô đến để giúp đỡ người chị song sinh xa cách của mình ở Knockmouth, một thị trấn gồ ghề ở Virginia, nơi các tranh chấp được giải quyết theo cách cổ điển: nắm đấm và bia. Ở đây bình thường thôi...
      Thật không may, cô em gái xấu xí Tina của Naomi lại không hề thay đổi chút nào. Sau khi lấy lại được xe và tiền mặt của Naomi, bà còn để lại cho cô một bất ngờ - một đứa cháu gái mà chị gái cô cũng không hề nghi ngờ. Một người phụ nữ bị mắc kẹt trong một thị trấn không xe, không việc làm, không tiền và không nhà... Hơn nữa, cô vẫn phải chăm sóc một cô bé mười một tuổi có kinh nghiệm như ba mươi tuổi- cũ.
      Vì lý do nào đó, Knox không thích những người phụ nữ phức tạp và khắt khe, đặc biệt là trong các mối quan hệ lãng mạn, nhưng vì cuộc đời của Naomi đã sụp đổ trước mắt anh nên ít nhất anh cũng sẽ giúp đỡ cô gái. Ngay khi Naomi thoát khỏi rắc rối tái diễn, anh có thể trở lại cuộc sống độc thân lặng lẽ.
      Đó là kế hoạch của Knox cho đến khi rắc rối trở thành mối nguy hiểm nghiêm trọng. </p>
              </div>
              <div class="space-x-2 text-lg text-blue-500">
                <a  class="hover:underline">Viễn tưởng</a>,
                <a  class="hover:underline">Tiểu thuyết</a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </WrapBar>
  );
};
export default BookDetail;
