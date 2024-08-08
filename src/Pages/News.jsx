import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import LoadingSpinner from "../Components/LoadingSpinner";
import { GetResources } from "../data/GetData";
import { getStrapiURL } from "../lib/utils";

const News = () => {
  const { data, error, isPending } = GetResources();
  const apiurl = getStrapiURL();

  if (isPending) return <LoadingSpinner />;
  if (error) return "An error occured!!";

  // Sort the news data based on IDs in descending order
  // const sortedData = [...data].sort((a, b) => b.id - a.id);

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
                <Breadcrumb>
                  <Breadcrumb.Item href="/" className="">
                    Home
                  </Breadcrumb.Item>

                  <Breadcrumb.Item active>News</Breadcrumb.Item>
                </Breadcrumb>{" "}
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="p-4 p-md-0">
          {data.map((news, index) => (
            <Row
              key={news.id}
              className={index % 2 === 0 ? "" : "flex-row-reverse"}
            >
              <Col md={6} lg={6} className="order-lg-1 px-0">
                <img
                  src={`${apiurl}${news.Image.url}`}
                  className="img-fluid w-100"
                  alt={news.Image.alternativeText}
                />
              </Col>
              <Col md={6} lg={6} className="order-lg-2 my-3 my-lg-0 px-0">
                <div className="h-100 d-flex flex-column gap-3 justify-content-center align-items-center">
                  <h3 className="text-center m-0">{news.Title}</h3>
                  <p className="text-center m-0">{news.Description}</p>
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
