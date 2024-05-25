import { FaUsers, FaGlobe, FaEye , FaClock, FaCreditCard, FaMoneyCheckDollar} from "react-icons/fa6";
export const DataStatisticCard = [
  {
    icon: <FaCreditCard/>,
    title: "Payment - Today",
    description: "$6781.00",
    rate:"4.2",
    rateDetail:'40.85 this week',
    status: true,
  },
  {
    icon: <FaCreditCard/>,
    title: "Payment - This Month",
    description: "$935,270.16",
    rate:"3.2",
    rateDetail:'28.90k this week',
    status: true,
  },
  {
    icon:<FaMoneyCheckDollar/>,
    title: "Invoices - Due",
    description: "$1.000",
    rate:"10%",
    rateDetail:'40.85 this week',
    status: true
  },
  {
    icon:<FaMoneyCheckDollar/>,
    title: "Invoices - Overdue",
    description: "$9,700.6",
    rate:"4.0",
    rateDetail:'28.85 this week',
    status: false
  }
];
