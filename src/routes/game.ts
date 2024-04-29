import { BaseRouter } from '../config/base-router'
import { GameController } from '../controllers/game'

export class GameRoutes extends BaseRouter {
  constructor(private readonly controller: GameController = new GameController()) {
    super()
  }

  public routes(): void {
    this.router.post('/game', async (req, res) => await this.controller.sendInfo(req, res))
  }
}
