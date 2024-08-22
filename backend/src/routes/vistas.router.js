import {
  vistas,
} from "../controllers/tareas.controller.js";

import { Router } from "express";

const router = Router();

router.get("/vistas", vistas);

export { router };
