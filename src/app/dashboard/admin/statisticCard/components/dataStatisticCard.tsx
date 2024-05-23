import { FaUsers, FaGlobe, FaEye , FaClock} from "react-icons/fa6";
export const DataStatisticCard = [
  {
    icon: <FaUsers/>,
    title: "Tổng số lượng account",
    description: "100.000",
    rate:"10%",
    status: true
  },
  {
    icon:<FaGlobe/>,
    title: "Tổng truy cập hôm nay",
    description: "10.000",
    rate:"10%",
    status:false
  },
  {
    icon:<FaEye/>,
    title: "Số người đang sử dụng",
    description: "1.000",
    rate:"10%",
    status: true
  },
  {
    icon:<FaClock/>,
    title: "Số giờ trung bình sử dụng",
    description: "3h",
    rate:"10%",
    status: false
  }
];
