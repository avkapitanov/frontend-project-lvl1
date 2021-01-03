import readlineSync from 'readline-sync';

const renderWelcome = () => {
    console.log(`Welcome to the Brain Games!`);
};

const renderGreeting = (name) => {
    console.log(`Hello, ${name}!`);
};

const askName = () => readlineSync.question('May I have your name? ');

export default () => {
    renderWelcome();
    const name = askName();
    renderGreeting(name);
}