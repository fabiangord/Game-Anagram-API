import { Request, Response } from 'express'
import { GameService } from '../service/game'
import { GameDTO } from '../dto/game'

export class GameController {
  constructor(private readonly service: GameService = new GameService()) { }

  async sendInfo(req: Request, res: Response): Promise<Response<string[]>> {
    try {
      const DTOgame = new GameDTO(req.body.letters as string, req.body.qtyLetter as number)

      const words = this.service.findCombinations(DTOgame.letters, DTOgame.qtyLetter)

      return res.json({ data: words })
    } catch (error) {
      return error instanceof Error ? res.status(400).json({ message: error.message }) : res.json({ error })
    }
  }
}
