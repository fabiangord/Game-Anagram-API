import fs from 'node:fs'

export class GameService {
  private readonly dictionary: Set<string>

  constructor() {
    this.dictionary = new Set(fs.readFileSync('./src/libs/words.txt', 'utf8').split('\n').map(word => word.trim()))
  }

  findCombinations(letters: string, qtyLetter: number): string[] {
    const words: string[] = []

    this.generateWords(letters, '', 0, qtyLetter, words)

    return [...new Set(this.validateInfoDictionary(words))]
  }

  generateWords(letters: string, currentWord: string, position: number, qtyLetter: number, words: string[]): void {
    if (currentWord.length === qtyLetter) {
      words.push(currentWord)
      return
    }

    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i]
      this.generateWords(letters, currentWord + letter, position + 1, qtyLetter, words)
    }
  }

  validateInfoDictionary(words: string[]): string[] {
    return words.filter(word => this.dictionary.has(word.toLowerCase()))
  }
}
