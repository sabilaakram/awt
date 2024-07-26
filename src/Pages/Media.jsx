import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../Components/LoadingSpinner";
import ImagesSlider from "../Components/ImagesSlider";

const Media = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const fetchData = async (endpoint) => {
    const response = await axios.get(`${baseUrl}${endpoint}`);
    return response.data.images;
  };

  const { data, isPending, error } = useQuery({
    queryKey: ["media"],
    queryFn: () => fetchData("/gallery"),
  });

  if (isPending) return <LoadingSpinner />;
  if (error) return "An error occured!!";

  return (
    <>
      <section className="commonbg">
        <div className="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div className="aboutuspage">
                <h1>
                  Our <span>Gallery</span>
                </h1>

                <h5>
                  Home | <span>Gallery</span>
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
                <h2>Inspiring Lives with Dignified Service</h2>
                <p>
                  Discover the scenic stories of manpowers’ struggle,
                  resilience, and diligence by exploring the gallery of Army
                  Welfare Trust. Witness the success our subsidiaries have
                  achieved so far!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="container my-5 mx-auto">
          <div className="row">
            {data.map((image) => (
              <div className="col-md-4 mb-4" key={image.id}>
                <img
                  src={image.image}
                  alt={`${image.id + 1}`}
                  className="img-fluid w-100 rounded-4 h-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="spaceupdowngray">
        <ImagesSlider />
      </section>
    </>
  );
};

export default Media;
