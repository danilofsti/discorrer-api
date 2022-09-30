/* eslint-disable @typescript-eslint/restrict-template-expressions */
import app from './config/app'
import { config } from 'dotenv'
config()

app.listen(process.env.PORT, () => console.info(new Date(), 'server', 'app.listen', `Server running at ${process.env.PORT}`))
