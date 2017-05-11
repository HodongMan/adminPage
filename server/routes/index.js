'use strict'

const cadmin_ad_controller = require("../controllers").cadmin_ad;
const cadmin_user_controller = require("../controllers").cadmin_user;
const cadmin_ad_count_controller = require("../controllers").cadmin_ad_count;
const cadmin_ad_detail_controller = require("../controllers").cadmin_ad_detail;
const cadmin_ad_limit_controller = require("../controllers").cadmin_ad_limit;
const cadmin_ad_point_controller = require("../controllers").cadmin_ad_point;
const cadmin_ad_target_controller = require("../controllers").cadmin_ad_target;
const cadmin_ad_view_controller = require("../controllers").cadmin_ad_view;

module.exports = (app) => {
    app.get("/api", (req, res) => {
        res.status(200).send({
            message : "Welcome to the Todos API!",
        });
    });

    /* User URLs*/

    app.get("/api/user/:email", cadmin_user_controller.retrieve);
    app.get("/api/user/list/:email", cadmin_user_controller.list);

    app.post("/api/user", cadmin_user_controller.create);

    /* Ad URLs*/
    app.get("/api/ad", cadmin_ad_controller.list);
    app.get("/api/ad/:id", cadmin_ad_controller.retrieve);
    app.post("/api/ad", cadmin_ad_controller.create);
    app.put("/api/ad/:id", cadmin_ad_controller.update);
    app.delete("/api/ad/:id", cadmin_ad_controller.destroy);

    /* AD Count URLs */

    app.get("/api/ad/count/:ad_id", cadmin_ad_count_controller.retrieve);
    app.post("/api/ad/count/:ad_id", cadmin_ad_count_controller.create);
    app.put("/api/ad/count/:id", cadmin_ad_count_controller.update);

    /* AD Detail URLs */
    app.get("/api/ad/detail/:ad_id", cadmin_ad_detail_controller.retrieve);
    app.post("/api/ad/detail/:ad_id", cadmin_ad_detail_controller.create);
    app.put("/api/ad/detail/:id", cadmin_ad_detail_controller.update);

    /* AD Limit URLs */
    app.get("/api/ad/point/:ad_id", cadmin_ad_point_controller.retrieve);
    app.post("/api/ad/point/:ad_id", cadmin_ad_point_controller.create);
    app.put("/api/ad/point/:id", cadmin_ad_point_controller.update);

    /* AD Target URLs */
    app.get("/api/ad/target/:ad_id", cadmin_ad_target_controller.retrieve);
    app.post("/api/ad/target/:ad_id", cadmin_ad_target_controller.create);
    app.put("/api/ad/target/:id", cadmin_ad_target_controller.update);

    /* AD View URLs */
    app.get("/api/ad/view/:ad_id", cadmin_ad_view_controller.retrieve);
    app.post("/api/ad/view/:ad_id", cadmin_ad_view_controller.create);
    app.put("/api/ad/view/:id", cadmin_ad_view_controller.update);
}
