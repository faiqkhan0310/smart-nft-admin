/*eslint-disable*/

import { useCurrentUser } from "@/hooks/index";
import { faChevronLeft, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { Navbar } from "../../components/layout/Navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { addClass } from "service/class-service";
import { genContext } from "pages/_app";

export default function Addcar() {
  const context = useContext(genContext);
  const router = useRouter();
  const [classA, setClassA] = React.useState({
    name: "",
    type: "sale",
  });
  const [attributes, setAttributes] = React.useState([
    { name: "", type: "", mutable: false },
    { name: "", type: "", mutable: false },
    { name: "", type: "", mutable: false },
  ]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    context.setLoading(true);
    const apibody = {
      name: classA.name,
      type: classA.type,
      attributes: [...attributes],
    };

    const clRes = await addClass(apibody);
    console.log(clRes);
    if (clRes.success) {
      context.setLoading(false);
      toast.success("Class Created!");
      return router.push("/classes");
    } else if (clRes.success === false && productRes?.message) {
      context.setLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return toast.info(clRes?.message);
    } else {
      context.setLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      toast.error("Some error occured!");
      return;
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setClassA((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const addAttribute = () => {
    const attributeObj = { name: "", type: "", mutable: false };
    const attributesCopy = [...attributes];
    if (attributesCopy.length === 10) return;

    attributesCopy.push(attributeObj);
    setAttributes(attributesCopy);
  };
  const handleDelete = (indx) => {
    const attributesCopy = [...attributes];
    console.log(indx);
    console.log(attributesCopy[indx]);
    attributesCopy.splice(indx, 1);
    console.log(attributesCopy);
    setAttributes([...attributesCopy]);
  };
  const handleAttributeChange = (e, indx) => {
    const { name, value, checked } = e.target;
    console.log(name);
    const attributesCopy = [...attributes];
    if (name === "mutable") return (attributesCopy[indx][name] = checked);
    attributesCopy[indx][name] = value;
    setAttributes([...attributesCopy]);
  };
  return (
    <>
      <Navbar ClassesActive="active" />
      <div className="app-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h1 class="app-page-title mb-5 main-title d-flex align-items-center justify-content-between">
                <span className="d-flex align-items-center">
                  {" "}
                  <Link href="/classes">
                    <a className="back-btn me-4">
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </a>
                  </Link>
                  Add Classes{" "}
                </span>
              </h1>

              <div class="app-card  h-100">
                <div class="app-card-body p-4 p-lg-5 ">
                  <div className="row">
                    <div className="col-md-12 col-12 mint-nft-form">
                      <form onSubmit={handleSubmit}>
                        <div className="mint-nft-form w-50 ">
                          <div className="form-group mb-5">
                            <label className="d-block mb-3">Name</label>
                            <input
                              className="form-control"
                              name="name"
                              onChange={handleChange}
                              type="text"
                            />
                          </div>

                          <div className="form-group type-btn mb-5">
                            <label className="d-block mb-4">Type</label>
                            <button type="button" className="btn me-3">
                              Sale
                            </button>
                            <button type="button" className="btn">
                              Sale
                            </button>
                          </div>

                          <div className="form-group add-attr-col mb-5">
                            <label className="d-block mb-4">
                              Add Attributes{" "}
                              <small>(You can add upto 10 attribute)</small>
                            </label>
                            <ol>
                              {attributes &&
                                attributes?.map((attribute, indx) => {
                                  return (
                                    <li>
                                      <div className="d-flex align-items-center mb-4">
                                        <input
                                          type="text"
                                          name="name"
                                          value={attribute?.name}
                                          onChange={(e) =>
                                            handleAttributeChange(e, indx)
                                          }
                                          className="form-control me-2"
                                          placeholder="Enter Attribute Name"
                                        />

                                        <div className="form-check ms-3 me-3">
                                          <input
                                            name="mutable"
                                            className="form-check-input"
                                            type="checkbox"
                                            onChange={(e) =>
                                              handleAttributeChange(e, indx)
                                            }
                                            defaultValue
                                            id="flexCheckDefault3"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault3"
                                          >
                                            Mutable
                                          </label>
                                        </div>
                                        {/* 
                                        <input
                                          type="text"
                                          name="type"
                                          value={attribute?.type}
                                          onChange={(e) =>
                                            handleAttributeChange(e, indx)
                                          }
                                          className="form-control ms-2"
                                          placeholder="Enter Attribute Type"
                                        /> */}
                                        <select
                                          onChange={(e) =>
                                            handleAttributeChange(e, indx)
                                          }
                                          name="type"
                                          id="type"
                                          className="form-control"
                                        >
                                          <option
                                            selected
                                            value="disable"
                                            disabled
                                          >
                                            Select Type
                                          </option>
                                          <option value="text_number">
                                            Text/Number
                                          </option>
                                          <option value="image_s3">
                                            Image/S3
                                          </option>
                                          <option value="image_ipfs">
                                            Image/IPFS
                                          </option>
                                        </select>
                                        <button
                                          className="rounded border-0 ms-5 bg-transparent"
                                          type="button"
                                        >
                                          <FontAwesomeIcon
                                            style={{
                                              color: "red",
                                            }}
                                            icon={faTrash}
                                            onClick={() => handleDelete(indx)}
                                          />
                                        </button>
                                      </div>
                                    </li>
                                  );
                                })}
                            </ol>

                            <div className="form-group type-btn mt-5">
                              <button
                                onClick={addAttribute}
                                type="button"
                                className="add-attr-btn btn ms-0"
                              >
                                Add More Attribute
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="form-group type-btn mt-5 ">
                          <button
                            type="submit"
                            className="add-attr-btn btn w-50 ms-0 "
                          >
                            Create Class
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
