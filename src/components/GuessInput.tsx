import React, { useState, ChangeEvent, FormEvent } from 'react'

interface GuessInputProps {
  onGuess: (guess: number) => void
  disabled?: boolean
}

const GuessInput: React.FC<GuessInputProps> = ({ onGuess, disabled = false }) => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const guess = parseInt(inputValue, 10)
    if (isNaN(guess)) {
      return
    }
    onGuess(guess)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter your guess"
        disabled={disabled}
      />
      <button type="submit" disabled={disabled || inputValue === ''}>
        Guess
      </button>
    </form>
  )
}

export default GuessInput
