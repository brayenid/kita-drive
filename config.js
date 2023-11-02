import dotenv from 'dotenv'

dotenv.config()

const config = {
  port: 3000,
  base: `http://${process.env.BASEIP}:3000`
}

export default config
