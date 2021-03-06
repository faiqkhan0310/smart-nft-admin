/*eslint-disable*/

import { useCurrentUser } from "@/hooks/index";
import {
  faChevronCircleLeft,
  faChevronLeft,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { router } from "next/router";
import { DashboardComponent } from "../../components/dashboard-component/DashboardComponent";
import { Navbar } from "../../components/layout/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Offer() {
  return (
    <>
      <Navbar />
      <div className="app-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h1 className="app-page-title mb-5 main-title d-flex align-items-center justify-content-between">
                <span className="d-flex align-items-center">
                  {" "}
                  <Link href="/notifications">
                    <a className="back-btn me-4">
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </a>
                  </Link>
                  Offers{" "}
                </span>
              </h1>

              <div className="app-card  h-100">
                <div className="app-card-body p-4 p-lg-5 ">
                  {/* <h3 className="stats-type mb-3"> Recent Notifications</h3> */}
                  <ul className="notification-list">
                    <li>
                      <span className="d-flex align-items-center">
                        <FontAwesomeIcon
                          className="me-4"
                          icon={faShoppingBag}
                        />
                        <Image
                          src={`/image/image-placeholder.png`}
                          height="40px"
                          width="40px"
                        ></Image>
                        <b className="ms-3">@bee</b> bought your artwork{" "}
                        <b>Afro-Ionic</b> fr <b>2.3</b>
                      </span>

                      <span>
                        3 min ago{" "}
                        <a href="" className="ms-3">
                          View
                        </a>
                      </span>
                    </li>

                    <li>
                      <span className="d-flex align-items-center">
                        <FontAwesomeIcon
                          className="me-4"
                          icon={faShoppingBag}
                        />
                        <Image
                          src={`/image/image-placeholder.png`}
                          height="40px"
                          width="40px"
                        ></Image>
                        <b className="ms-3">@bee</b> bought your artwork{" "}
                        <b>Afro-Ionic</b> fr <b>2.3</b>
                      </span>

                      <span>
                        3 min ago{" "}
                        <a href="" className="ms-3">
                          View
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="d-flex align-items-center">
                        <FontAwesomeIcon
                          className="me-4"
                          icon={faShoppingBag}
                        />
                        <Image
                          src={`/image/image-placeholder.png`}
                          height="40px"
                          width="40px"
                        ></Image>
                        <b className="ms-3">@bee</b> bought your artwork{" "}
                        <b>Afro-Ionic</b> fr <b>2.3</b>
                      </span>

                      <span>
                        3 min ago{" "}
                        <a href="" className="ms-3">
                          View
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
