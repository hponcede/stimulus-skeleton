import {
	Application
} from "stimulus"

import "~/css/index"
import controller from "~/controllers/main"

const application = Application.start()

application.register("main", controller)

