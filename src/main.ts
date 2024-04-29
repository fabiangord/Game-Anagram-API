import express from 'express'
import morgan from 'morgan'
import { GameRoutes } from './routes/game'

class Server {
  private readonly app: express.Application = express()
  private readonly PORT: Number = 3000

  constructor() {
    this.app.use(express.json())
    this.app.use(morgan('dev'))
    this.app.use('/api', this.routers())
    this.listen()
  }

  public routers(): express.Router[] {
    return [
      new GameRoutes().router
    ]
  }

  public listen(): void {
    this.app.listen(this.PORT, () => {
      console.log(`Recibiendo en el puerto ${this.PORT}`)
    })
  }
}

void new Server()
