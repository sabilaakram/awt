const TopMenu = () => {
  return (
    <div>
      <section className="TopMenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="infotopmenulinks">
                <ul>
                  <li>
                    {" "}
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <a href="tel:92-51-9272400-4"> +92-51-9272400-4 </a>
                  </li>
                  <li>
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    <a href="mailto:infoawt@awt.com.pk"> infoawt@awt.com.pk </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="topmenusociallinks">
                <ul>
                  <li>
                    <a>
                    
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                    
                      <i class="fa fa-pinterest-square" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                    
                    <i class="fa fa-instagram" aria-hidden="true"></i>

                    </a>
                  </li>
                  <li>
                    <a>
                    
                    <i class="fa fa-youtube-play" aria-hidden="true"></i>

                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopMenu;
