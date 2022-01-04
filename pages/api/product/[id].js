/*eslint-disable*/

import Product from "../../../models/Product.seq";
import ClassA from "../../../models/class-seq";
import "../../../utils/dbConnect";
import { isAuthorized } from "@/lib/api-helpers";

export default async (req, res) => {
  const { method, query: id, body } = req;
  console.log(req.query);

  switch (method) {
    case "GET":
      try {
        const { status, message } = isAuthorized(req, res);
        console.log(status, message);
        if (status !== 200)
          return res.status(status).json({ success: false, message: message });
        let oneProduct = await Product.findAll({
          where: { id: id.id },
          include: { model: ClassA },
        });
        console.log(oneProduct);
        return res.status(200).json({ success: true, products: oneProduct });
      } catch (error) {
        return res.status(400).json({
          success: false,
          error: error,
        });
      }
    case "POST":
      try {
        const { status, message } = isAuthorized(req, res);
        console.log(status, message);
        if (status !== 200)
          return res.status(status).json({ success: false, message: message });
        console.log("update body prdiuct");
        console.log(body);
        console.log(id);

        let oneClassUpdated = await Product.update(
          { ...body },
          { where: { id: id.id } }
        );
        console.log(oneClassUpdated);
        // if (oneClassUpdated) {
        //   if (
        //     req.query.prevClass &&
        //     req.query.prevClass != "undefined" &&
        //     req.query.newClass
        //   ) {
        //     const removeProductFromClass = await ClassA.findByIdAndUpdate(
        //       req.query.prevClass,
        //       { $pull: { products: id.id } }
        //     );
        //   }
        // }
        return res.status(200).json({ success: true, data: oneClassUpdated });
      } catch (error) {
        console.log(error);
        return res.status(400).json({
          success: false,
          error: error,
        });
      }
    case "DELETE":
      try {
        const { status, message } = isAuthorized(req, res);
        console.log(status, message);
        if (status !== 200)
          return res.status(status).json({ success: false, message: message });
        console.log(id.id);
        const delRes = await Product.destroy({ where: { id: id.id } });
        // console.log("del response @@@@@@@@@@@@@@@@@@");
        console.log(delRes);
        // if (delRes) {
        //   let oneClassUpdated = await ClassA.findByIdAndUpdate(delRes.class, {
        //     $pull: { products: delRes.id },
        //   });
        //   console.log("class res");
        //   console.log(oneClassUpdated);
        // }
        return res.status(200).json({
          success: true,
          data: delRes,
        });
      } catch (error) {
        return res.status(400).json({
          error: error,
          success: false,
        });
      }
    default:
      res.setHeaders("Allow", ["GET", "DELETE", "POST"]);
      return res
        .status(405)
        .json({ success: false })
        .end(`Method ${method} Not Allowed`);
  }
};
