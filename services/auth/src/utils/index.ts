import { createLogger } from '@premade/ms-common'
import { NODE_ENV } from '../config'
import { LogType } from '@premade/ms-common/build/config'

const {logHTTPRequests, logger} = createLogger({
NODE_ENV,
LOG_TYPE: LogType.JSON
})

export {logHTTPRequests, logger}
