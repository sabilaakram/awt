import { Col, Container, Row } from "react-bootstrap";
import bod from "../assets/Bod/admin.png";
import ImagesSlider from "../Components/ImagesSlider";

const committeOfAdministration = [
  {
    boardRank: "Chairman",
    boardName: "Chief of Army Staff",
    boardImage: bod,
  },
  {
    boardRank: "Vice Chairman",
    boardName: "Adjutant General",
    boardImage: bod,
  },
  {
    boardRank: "Member",
    boardName: "Chief of General Staff",
    boardImage: bod,
  },
  {
    boardRank: "Member",
    boardName: "Quarter Master General",
    boardImage: bod,
  },
  {
    boardRank: "Member",
    boardName: "Chief of Logistics Staff",
    boardImage: bod,
  },
  {
    boardRank: "In attendance",
    boardName: "Managing Director, AWT",
    boardImage: bod,
  },
  {
    boardRank: "Secretary",
    boardName: "Secretary AWT",
    boardImage: bod,
  },
];

const boardOfDirectors = [
  {
    memberRank: "Chairman",
    memberPosition: "Adjutant General, Pakistan Army",
    memberName: "Lt Gen Muhammad Asim Malik",
    memberImage: bod,
  },
  {
    memberRank: "Vice Chairman & MD",
    memberPosition: "Managing Director AWT",
    memberName: "Lt Gen Naveed Mukhtar, HI(M) (Retd)",
    memberImage: bod,
  },
  {
    memberRank: "Member",
    memberPosition: "Director General Welfare & Rehabilitation",
    memberName: "Maj. Gen Azhar Iqbal Abbasi, HI(M)",
    memberImage: bod,
  },
  {
    memberRank: "Member",
    memberPosition: "Director",
    memberName: "Rizwan ullah Khan (COO)",
    memberImage: bod,
  },
  {
    memberRank: "Member",
    memberPosition: "Director",
    memberName: "Air Vice Marshal Muhammad Athar Shams HI(M) (Retd), ED (A&F)",
    memberImage: bod,
  },
  {
    memberRank: "Member",
    memberPosition: "Director",
    memberName: "Maj Gen Fida Hussain Malik, HI(M) (Retd), ED(IF&T)",
    memberImage: bod,
  },
  {
    memberRank: "Member",
    memberPosition: "Director",
    memberName: "Maj Gen Muhammad Samrez Salik, HI(M) (Retd), ED(S)",
    memberImage: bod,
  },
  {
    memberRank: "Member",
    memberPosition: "Director",
    memberName: "Brig. Farooq Zaman (Retd), DIR (HR)",
    memberImage: bod,
  },
  {
    memberRank: "Member",
    memberPosition: "Director",
    memberName: "Malik Riffat Mahmood",
    memberImage: bod,
  },
  {
    memberRank: "Member",
    memberPosition: "Director",
    memberName: "Brig Musharaf khan, (Retd) SI(M)",
    memberImage: bod,
  },
  {
    memberRank: "Member",
    memberPosition: "Director",
    memberName: "Brig Mukhtar Ahmed, (Retd) SI(M)",
    memberImage: bod,
  },
];

const BOD = () => {
  return (
    <div>
      <section className="commonbg">
        <div className="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div className="aboutuspage">
                <h1>
                  {" "}
                  Board of <span>Directors </span>{" "}
                </h1>

                <h5>
                  Home | <span> BOD’s </span>{" "}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutusbox">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="aboutus">
                <span className="linesheading"> AWT</span>
                <h2> Committee of Administration</h2>
                <p>
                  The Army Welfare Trust's administration is based on two tiers
                  of decision making
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Container>
        <Row className="pb-5 justify-content-center">
          {committeOfAdministration.map((item, index) => (
            <Col key={index} md={index < 2 ? 5 : 4} className="card-col">
              <div className="fourimgsbox">
                <div class="block">
                  <div class="hovicon effect-4 sub-b">
                    <img src={item.boardImage} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
              <div className="adminbox">
                <h3>{item.boardRank}</h3>
                <h5>{item.boardName}</h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <section className="aboutusbox">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="aboutus">
                <span className="linesheading"> AWT</span>
                <h2> Board of Directors</h2>
                <p>
                  The Army Welfare Trust's administration is based on two tiers
                  of decision making
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Container>
        <Row className="pb-5 justify-content-center">
          {boardOfDirectors.map((item, index) => (
            <Col key={index} md={4} className="card-col">
              <div className="fourimgsbox">
                <div class="block">
                  <div class="hovicon effect-4 sub-b">
                    <img src={item.memberImage} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
              <div className="adminbox">
                <h3>{item.memberRank}</h3>
                <h5>{item.memberName}</h5>
                <p>{item.memberPosition}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <section className="spaceupdowngray">
        <div className="container-fluid overflow-hidden no-gutters p-0">
          <div className="row">
            <ImagesSlider />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BOD;
