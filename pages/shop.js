import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import Pagination from "../src/Pagination";
const Shop = () => {
  return (
    <Layout>
      <PageBanner pageName={"Shop"} />
      <section className="shop-page-area py-130 rpy-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="shop-sidebar rmb-55">
                <div className="widget widget-search wow fadeInUp delay-0-2s">
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <input type="text" placeholder="Search" required="" />
                    <button
                      type="submit"
                      className="searchbutton fa fa-search"
                    />
                  </form>
                </div>
                <div className="widget widget-menu wow fadeInUp delay-0-4s">
                  <h4 className="widget-title">Category</h4>
                  <ul>
                    <li>
                      <Link href="/course-grid">Life Course </Link>{" "}
                      <span>05</span>
                    </li>
                    <li>
                      <Link href="/course-grid">Health Course </Link>{" "}
                      <span>03</span>
                    </li>
                    <li>
                      <Link href="/course-grid">Web Development </Link>{" "}
                      <span>07</span>
                    </li>
                    <li>
                      <Link href="/course-grid">UX/UI Strategy </Link>{" "}
                      <span>04</span>
                    </li>
                    <li>
                      <Link href="/course-grid">Digital Marketing </Link>{" "}
                      <span>09</span>
                    </li>
                    <li>
                      <Link href="/course-grid">SEO Optimization </Link>{" "}
                      <span>15</span>
                    </li>
                    <li>
                      <Link href="/course-grid">Business Strategy </Link>{" "}
                      <span>06</span>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-products wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Sale Products</h4>
                  <ul>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/product1.png"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <Link href="/product-details">
                            Historical Store Book
                          </Link>
                        </h6>
                        <span>
                          By <Link href="/course-list">David Malenga</Link>
                        </span>
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/product2.png"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <Link href="/product-details">
                            Historical Store Book
                          </Link>
                        </h6>
                        <span>
                          By <Link href="/course-list">David Malenga</Link>
                        </span>
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/product3.png"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <Link href="/product-details">
                            Historical Store Book
                          </Link>
                        </h6>
                        <span>
                          By <Link href="/course-list">David Malenga</Link>
                        </span>
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-price-filter wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Filter By Price</h4>
                  <div className="price-slider-range" />
                  <div className="price">
                    <span>5</span> <input type="text" id="price" readOnly="" />
                  </div>
                </div>
                <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Popular Tags</h4>
                  <div className="tag-coulds">
                    <Link href="/blog">Life Course</Link>
                    <Link href="/blog">Health</Link>
                    <Link href="/blog">Web</Link>
                    <Link href="/blog">Business</Link>
                    <Link href="/blog">Development</Link>
                    <Link href="/blog">Digital</Link>
                    <Link href="/blog">Courses</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="prduct-items-wrap">
                <div className="shop-shorter rel z-3 mb-40 wow fadeInUp delay-0-2s">
                  <div className="sort-text">Showing 9 of 55 Books</div>
                  <ul className="grid-list">
                    <li>
                      <a href="#">
                        <i className="fas fa-list-ul" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="active">
                        <i className="fas fa-border-all" />
                      </a>
                    </li>
                  </ul>
                  <div className="products-dropdown">
                    <select>
                      <option value="default">Sort by Newneww</option>
                      <option value="new" selected="">
                        Latest
                      </option>
                      <option value="old">Oldest</option>
                      <option value="hight-to-low">High To Low</option>
                      <option value="low-to-high">Low To High</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 wow fadeInUp delay-0-4s">
                    <div className="product-item">
                      <div className="product-image">
                        <span className="off">25% off</span>
                        <img
                          src="assets/images/shop/product1.png"
                          alt="Products"
                        />
                        <Link href="/contact">
                          <a className="cart-btn">add to cart</a>
                        </Link>
                      </div>
                      <div className="product-content">
                        <h6>
                          <Link href="/product-details">PSD Book Mockup</Link>
                        </h6>
                        <span className="category">Medical Equipment</span>
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="price">
                          <del>73.56</del>
                          <span>53.56</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 wow fadeInUp delay-0-6s">
                    <div className="product-item">
                      <div className="product-image">
                        <img
                          src="assets/images/shop/product2.png"
                          alt="Products"
                        />
                        <Link href="/contact">
                          <a className="cart-btn">add to cart</a>
                        </Link>
                      </div>
                      <div className="product-content">
                        <h6>
                          <Link href="/product-details">PSD Book Mockup</Link>
                        </h6>
                        <span className="category">Medical Equipment</span>
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="price">
                          <span>53.56</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 wow fadeInUp delay-0-8s">
                    <div className="product-item">
                      <div className="product-image">
                        <span className="off">25% off</span>
                        <img
                          src="assets/images/shop/product3.png"
                          alt="Products"
                        />
                        <Link href="/contact">
                          <a className="cart-btn">add to cart</a>
                        </Link>
                      </div>
                      <div className="product-content">
                        <h6>
                          <Link href="/product-details">PSD Book Mockup</Link>
                        </h6>
                        <span className="category">Medical Equipment</span>
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="price">
                          <del>73.56</del>
                          <span>53.56</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 wow fadeInUp delay-0-2s">
                    <div className="product-item">
                      <div className="product-image">
                        <span className="off">25% off</span>
                        <img
                          src="assets/images/shop/product4.png"
                          alt="Products"
                        />
                        <Link href="/contact">
                          <a className="cart-btn">add to cart</a>
                        </Link>
                      </div>
                      <div className="product-content">
                        <h6>
                          <Link href="/product-details">PSD Book Mockup</Link>
                        </h6>
                        <span className="category">Medical Equipment</span>
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="price">
                          <del>73.56</del>
                          <span>53.56</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 wow fadeInUp delay-0-4s">
                    <div className="product-item">
                      <div className="product-image">
                        <span className="off">25% off</span>
                        <img
                          src="assets/images/shop/product5.png"
                          alt="Products"
                        />
                        <Link href="/contact">
                          <a className="cart-btn">add to cart</a>
                        </Link>
                      </div>
                      <div className="product-content">
                        <h6>
                          <Link href="/product-details">PSD Book Mockup</Link>
                        </h6>
                        <span className="category">Medical Equipment</span>
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="price">
                          <del>73.56</del>
                          <span>53.56</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 wow fadeInUp delay-0-6s">
                    <div className="product-item">
                      <div className="product-image">
                        <img
                          src="assets/images/shop/product6.png"
                          alt="Products"
                        />
                        <Link href="/contact">
                          <a className="cart-btn">add to cart</a>
                        </Link>
                      </div>
                      <div className="product-content">
                        <h6>
                          <Link href="/product-details">PSD Book Mockup</Link>
                        </h6>
                        <span className="category">Medical Equipment</span>
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="price">
                          <span>53.56</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 wow fadeInUp delay-0-2s">
                    <div className="product-item">
                      <div className="product-image">
                        <img
                          src="assets/images/shop/product7.png"
                          alt="Products"
                        />
                        <Link href="/contact">
                          <a className="cart-btn">add to cart</a>
                        </Link>
                      </div>
                      <div className="product-content">
                        <h6>
                          <Link href="/product-details">PSD Book Mockup</Link>
                        </h6>
                        <span className="category">Medical Equipment</span>
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="price">
                          <span>53.56</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 wow fadeInUp delay-0-4s">
                    <div className="product-item">
                      <div className="product-image">
                        <span className="off">25% off</span>
                        <img
                          src="assets/images/shop/product8.png"
                          alt="Products"
                        />
                        <Link href="/contact">
                          <a className="cart-btn">add to cart</a>
                        </Link>
                      </div>
                      <div className="product-content">
                        <h6>
                          <Link href="/product-details">PSD Book Mockup</Link>
                        </h6>
                        <span className="category">Medical Equipment</span>
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="price">
                          <del>73.56</del>
                          <span>53.56</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 wow fadeInUp delay-0-6s">
                    <div className="product-item">
                      <div className="product-image">
                        <img
                          src="assets/images/shop/product9.png"
                          alt="Products"
                        />
                        <Link href="/contact">
                          <a className="cart-btn">add to cart</a>
                        </Link>
                      </div>
                      <div className="product-content">
                        <h6>
                          <Link href="/product-details">PSD Book Mockup</Link>
                        </h6>
                        <span className="category">Medical Equipment</span>
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="price">
                          <span>53.56</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="pagination flex-wrap justify-content-center mt-20">
                  <Pagination
                    paginationCls={".prduct-items-wrap .row .col-xl-4"}
                    sort={6}
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Shop;
