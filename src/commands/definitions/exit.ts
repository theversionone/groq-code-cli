import { CommandDefinition, CommandContext } from '../base.js';

export const exitCommand: CommandDefinition = {
  command: 'exit',
  description: 'Exit the CLI tool',
  handler: ({ addMessage }: CommandContext) => {
    addMessage({
      role: 'system',
      content: 'Goodbye! Exiting...'
    });
    
    // Exit the process after a brief delay to allow the message to display
    setTimeout(() => {
      process.exit(0);
    }, 100);
  }
};