import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const timelineData = [
  {
    timelineTitle: "Askari Farms & Seeds",
    timelineSubtitle: 1972,
    timelineText:
      "Askari Farms and Seeds is the first economic venture of AWT that involves both conventional and modern agriculture.",
    timelineDate: 1972,
  },
  {
    timelineTitle: "Askari Travel Wing",
    timelineSubtitle: 1980,
    timelineText:
      "Askari Travel Wing is comprised of Askari Travels and Tours (AT&T) established in 1981 and Services Travels and Tours (ST&T) initiated in 1982. Both companies are certified by the International Air Transport Association (IATA)",
    timelineDate: 1980,
  },
  {
    timelineTitle: "Army Welfare Sugar Mills",
    timelineSubtitle: 1984,
    timelineText:
      "Army Welfare Sugar Mills is one of the premier sugar projects in the province of Sindh providing employment to retired army personnel.",
    timelineDate: 1984,
  },
  {
    timelineTitle: "Askari Real Estate",
    timelineSubtitle: 1990,
    timelineText:
      "Askari Real Estate is transforming the lives of people by turning their home visions into realities.",
    timelineDate: 1990,
  },
  {
    timelineTitle: "Askari Shoes",
    timelineSubtitle: 1990,
    timelineText:
      "Askari Shoes manufactures strong and durable DNS boots with the best missionary from DESMA. Along with this, it designs footwear for the civil market as well.",
    timelineDate: 1990,
  },
  {
    timelineTitle: "Askari Woolen",
    timelineSubtitle: 1990,
    timelineText:
      "Askari Woolen Mills is renowned for being the greatest producer of woolen products in Pakistan.",
    timelineDate: 1990,
  },
  {
    timelineTitle: "Blue Lagoon and Army Welfare Mess",
    timelineSubtitle: 1990,
    timelineText:
      "Blue Lagoon and Army Welfare Mess has a centered location in the Rawalpindi Cantt Area and is considered to be one of the most captivating places to visit.",
    timelineDate: 1990,
  },
  {
    timelineTitle: "Askari Aviation",
    timelineSubtitle: 1995,
    timelineText:
      "Askari Aviation has prominence in the industry as a leader. They are rendering quality services and are popularly known for their devotion and excellence.",
    timelineDate: 1995,
  },
  {
    timelineTitle: "Askari General Insurance Company Limited",
    timelineSubtitle: 1995,
    timelineText:
      "Ranked among the top ten Pakistan insurers in terms of gross premium, Askari General Insurance Company Limited holds a position in the local insurance industry as a reliable and loyal partner.",
    timelineDate: 1995,
  },
  {
    timelineTitle: "Askari Guards Private Limited",
    timelineSubtitle: 1996,
    timelineText:
      " Askari Guards Private Limited is rising as a well-recognized provider of guarding services throughout Pakistan and offering holistic security to both national and international companies.",
    timelineDate: 1996,
  },
  {
    timelineTitle:
      "Mal Pakistan Limited (Mobil Askari Lubricants Pakistan Ltd.)",
    timelineSubtitle: 1996,
    timelineText:
      "Mal Pakistan Limited is a state-of-the-art oil lubricant company established by a strategic partnership with the Largest oil company Mobil Lubricants.",
    timelineDate: 1996,
  },
  {
    timelineTitle: "Askari Fuels",
    timelineSubtitle: 2002,
    timelineText:
      "Askari Fuels has become a giant system comprising 30 CNG stations spanning all over Pakistan.",
    timelineDate: 2002,
  },
  {
    timelineTitle: "Askari Enterprises Pvt Ltd",
    timelineSubtitle: 2009,
    timelineText:
      "Askari Enterprises Private Limited is a special unit responsible for the distribution of weapons, ammunition, vehicles, and additional equipment.",
    timelineDate: 2009,
  },
  {
    timelineTitle: "Fauji Security Services Pvt Ltd",
    timelineSubtitle: 2014,
    timelineText:
      "Fauji Security Services Private Limited has the best reputation as a security company in Pakistan.",
    timelineDate: 2014,
  },
  {
    timelineTitle: "Askari Development Holdings Private Limited",
    timelineSubtitle: 2015,
    timelineText:
      "Askari Development Holdings Private Limited is a 100% owned business unit of AWT.",
    timelineDate: 2015,
  },
  {
    timelineTitle: "AWT Investments Limited (Non-Banking Finance Company)",
    timelineSubtitle: 2017,
    timelineText:
      "Licensed by the Securities and Exchange Commission of Pakistan, AWT Investments Limited oversees the management of open and closed-end funds.",
    timelineDate: 2017,
  },
  {
    timelineTitle: "Medask",
    timelineSubtitle: 2017,
    timelineText:
      "MedAsk by Pakistan Army is the leading healthcare provider serving its Army personnel and their families.",
    timelineDate: 2017,
  },
  {
    timelineTitle: "Askari Life Insurance Company Limited",
    timelineSubtitle: 2018,
    timelineText:
      "Askari Life Insurance Company Limited has a current capital of Rs. 750 million. Their shares are publicly listed on the Pakistan Stock Exchange.",
    timelineDate: 2018,
  },
  {
    timelineTitle: "Jolidays",
    timelineSubtitle: 2020,
    timelineText:
      "Jolidays is dedicated to providing quality travel arrangements to its clients that make their experience a true value for money.",
    timelineDate: 2020,
  },
];

const AboutTimeline = () => {
  return (
    <>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical__timeline_element"
            date={item.timelineDate}
            icon={<i class="fa fa-calendar" aria-hidden="true"></i>}
          >
            <div className="vertical__timeline_element-container">
              <h3 className="vertical__timeline_element-title">
                {item.timelineTitle}
              </h3>
              <h4 className="vertical__timeline_element-subtitle">
                {item.timelineSubtitle}
              </h4>
            </div>
            <p className="vertical__timeline_element-text">
              {item.timelineText}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
};

export default AboutTimeline;
