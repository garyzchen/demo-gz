import React from "react";
import { FaUser, FaTag } from "react-icons/fa";

export function Temp() {
  return <React.Fragment></React.Fragment>;
}

export function Demo() {
  return (
    <React.Fragment>
      <div className="wrap">
        <div className="content">
          <h3>
            <strong>Anonymous user</strong>
          </h3>
          <p>An anonymous user will see only two filters</p>
          <h3>
            <strong>Anonymous user</strong>
          </h3>
          <p>An anonymous user will see only two filters</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export function Demo01() {
  return (
    <React.Fragment>
      <h3>
        <strong>Anonymous user</strong>
      </h3>
      <p>An anonymous user will see only two filters</p>
      <div className="filter-block">
        <div className="filter">Popular</div>
        <div className="filter">Latest</div>
      </div>
      <h3>
        <strong>Signed in user</strong>
      </h3>
      <p>A signed-in user will see four filters</p>
      <div className="filter-block">
        <div className="filter">Popular</div>
        <div className="filter">Latest</div>
        <div className="filter">Starred</div>
        <div className="filter">Favorites</div>
      </div>
    </React.Fragment>
  );
}

export function Demo02() {
  return (
    <React.Fragment>
      <div className="input-icon-wrap">
        <FaUser className="input-icon" color="rgb(255, 191, 116)" size={50} />
        <input className="input-with-icon" type="text" />
      </div>
      <p className="article">
        Note: The reordering capabilities of flex layout intentionally affect
        only the visual rendering, leaving speech order and navigation based on
        the source order. This allows authors to manipulate the visual
        presentation while leaving the source order intact for non-CSS UAs and
        for linear models such as speech and sequential navigation. See
        Reordering and Accessibility and the Flex Layout Overview for examples
        that use this dichotomy to improve accessibility.
      </p>
    </React.Fragment>
  );
}

export function Demo03() {
  return (
    <React.Fragment>
      <header className="header">
        <div>A header</div>
      </header>

      <main className="main">
        <div className="sidebar">
          <a href="#">Some links</a>
          <a href="#">Some links</a>
          <a href="#">Some links</a>
        </div>

        <div className="main-content">
          <p>
            A simple flexbox demo showcasing the flex-direction property to
            achieve source order independence for the classic{" "}
            <em>main content with sidebar</em> layout.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            officiis dignissimos fugiat incidunt ullam optio tempora
            voluptatibus repudiandae harum repellendus a totam necessitatibus
            tenetur vero facere in suscipit ipsam provident.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis asperiores molestias consequatur culpa aliquid quam
            aspernatur aut vero accusantium amet. Quo repudiandae voluptas harum
            fuga dolor facilis similique expedita nemo.
          </p>
        </div>
      </main>

      <footer className="footer">A footer</footer>
    </React.Fragment>
  );
}

export function Demo04() {
  return (
    <React.Fragment>
      <div class="module-comment-block">
        <div class="module-comment-avatar">
          <img src="http://placehold.it/50x50" alt="My Name" width="50" />
        </div>

        <div class="module-comment-text">
          <div>
            <strong>My name</strong>
          </div>
          <div>
            <em>Date</em>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae veniam quo sapiente aspernatur! Reprehenderit eius
              itaque earum deleniti, doloremque dolor, iusto in adipisci maiores
              cupiditate commodi omnis molestias, mollitia, facilis.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export function Demo05() {
  return (
    <React.Fragment>
      <div className="module-card-wrap">
        <div className="module-card">
          <div className="module-card-title">Cheesecake</div>
          <div className="module-card-meta">
            <div className="module-card-category">
              <FaTag />
              <span>Desserts</span>
            </div>
            <div className="module-card-author">
              <FaUser />
              <span>Jenn Davis</span>
            </div>
          </div>

          <div className="module-card-bottom">
            <img
              src="http://placehold.it/400x150"
              alt="cheesecake"
              className="module-card-img"
            />

            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                ipsum sit perspiciatis iusto commodi nihil tenetur veritatis
                adipisci sed? Illo nobis similique in facilis libero ab officia
                ratione nesciunt fugiat.
              </p>
            </div>

            <button className="module-card-button">See More</button>
          </div>
        </div>

        <div className="module-card">
          <div className="module-card-title">Cheesecake</div>
          <div className="module-card-meta">
            <div className="module-card-category">
              <span className="fa fa-tag"></span>
              <span>Desserts</span>
            </div>
            <div className="module-card-author">
              <span className="fa fa-user"></span>
              <span>Jenn Davis</span>
            </div>
          </div>

          <div className="module-card-bottom">
            <img
              src="http://placehold.it/400x100"
              alt="cheesecake"
              className="module-card-img"
            />
            <button className="module-card-button">See More</button>
          </div>
        </div>

        <div className="module-card">
          <div className="module-card-title">Cheesecake</div>
          <div className="module-card-meta">
            <div className="module-card-category">
              <span className="fa fa-tag"></span>
              <span>Desserts</span>
            </div>
            <div className="module-card-author">
              <span className="fa fa-user"></span>
              <span>Jenn Davis</span>
            </div>
          </div>

          <div className="module-card-bottom">
            <img
              src="http://placehold.it/400x300"
              alt="cheesecake"
              className="module-card-img"
            />

            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <button className="module-card-button">See More</button>
          </div>
        </div>

        <div className="module-card">
          <div className="module-card-title">Cheesecake</div>
          <div className="module-card-meta">
            <div className="module-card-category">
              <span className="fa fa-tag"></span>
              <span>Desserts</span>
            </div>
            <div className="module-card-author">
              <span className="fa fa-user"></span>
              <span>Jenn Davis</span>
            </div>
          </div>

          <div className="module-card-bottom">
            <img
              src="http://placehold.it/400x120"
              alt="cheesecake"
              className="module-card-img"
            />

            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                ipsum sit perspiciatis iusto commodi nihil tenetur veritatis
                adipisci sed? Illo nobis similique in facilis libero ab officia
                ratione nesciunt fugiat.
              </p>
            </div>
            <button className="module-card-button">See More</button>
          </div>
        </div>

        <div className="module-card">
          <div className="module-card-title">Cheesecake</div>
          <div className="module-card-meta">
            <div className="module-card-category">
              <span className="fa fa-tag"></span>
              <span>Desserts</span>
            </div>
            <div className="module-card-author">
              <span className="fa fa-user"></span>
              <span>Jenn Davis</span>
            </div>
          </div>

          <div className="module-card-bottom">
            <img
              src="http://placehold.it/400x200"
              alt="cheesecake"
              className="module-card-img"
            />

            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                ipsum sit perspiciatis iusto commodi nihil tenetur veritatis
                adipisci sed? Illo nobis similique in facilis libero ab officia
                ratione nesciunt fugiat.
              </p>
            </div>

            <button className="module-card-button">See More</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
