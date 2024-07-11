import { Col, Container, Row } from "react-bootstrap";
import LoadingSpinner from "../Components/LoadingSpinner";
import { useNews } from "../data/GetData";

const News = () => {
  const { data, error, isPending } = useNews();

  if (isPending) return <LoadingSpinner />;
  if (error) return "An error occured!!";

  // Sort the news data based on IDs in descending order
  const sortedData = [...data].sort((a, b) => b.id - a.id);

  return (
    <div>
      <section className="commonbg">
        <Container>
          <Row>
            <div className="col-lg-12 text-center">
              <div className="aboutuspage">
                <h1>
                  AWT <span>News</span>
                </h1>

                <h5>
                  Home | <span>News</span>
                </h5>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="p-4 p-md-0">
          {sortedData.map((news, index) => (
            <Row
              key={news.id}
              className={index % 2 === 0 ? "" : "flex-row-reverse"}
            >
              <Col md={6} lg={6} className="order-lg-1 px-0">
                <img
                  src={`https://api.zalimburgers.com/${news.image}`}
                  className="img-fluid w-100"
                  alt=""
                />
              </Col>
              <Col md={6} lg={6} className="order-lg-2 my-3 my-lg-0 px-0">
                <div className="h-100 d-flex flex-column gap-3 justify-content-center align-items-center">
                  <h3 className="text-center m-0">{news.title}</h3>
                  <p className="text-center m-0">{news.description}</p>
                </div>
              </Col>
            </Row>
          ))}
        </Container>
      </section>
    </div>
  );
};

export default News;
