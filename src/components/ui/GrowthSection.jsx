import GrowthData from "../../api/GrowthSection.json";

import { FiTarget } from "react-icons/fi";
import { FaUsers, FaEye, FaHandshake, FaChartBar, FaHeadset} from "react-icons/fa";
import { IoIosTrendingUp} from "react-icons/io";
import { MdLocalActivity } from "react-icons/md";
import { PiArrowsClockwiseBold } from "react-icons/pi";

import "./GrowthSection.css"

export const GrowthSection = () => {

    const iconMap = {
        FiTarget: <FiTarget />,
        FaUsers: <FaUsers />,
        FaEye: <FaEye />,
        FaHandshake: <FaHandshake />,
        FaChartBar: <FaChartBar />,
        FaHeadset: <FaHeadset />,
        IoIosTrendingUp: <IoIosTrendingUp />,
        PiArrowsClockwiseBold: <PiArrowsClockwiseBold />,
        MdLocalActivity: <MdLocalActivity />,
    };
    
    return (
        <section className="Growth-Section">
                    <div className="growth-heading">
                    <h1> How SparkWave Powers Digital Growth </h1>
                    </div>
                <div className="Growth-Section-inner">
                    <div className="container flex">
                        {
                            GrowthData.map((curData) => {
                                const { id, title, description, icon } = curData;
                                return (
                                        <div className="Growth-Content" key={id}>
                                            <div className="icon">
                                                {iconMap[icon]}
                                            </div>
                                            <div className="Growth-Content-text">
                                                <h3>{title}</h3>
                                                <p>{description}</p>
                                            </div>
                                        </div>
                                )
                            })
                        }
                    </div>
                </div>
        </section>
    )
}